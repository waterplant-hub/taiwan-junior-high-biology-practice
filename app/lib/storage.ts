import type { AttemptRecord } from "../data/types";

export const STORAGE_KEY = "biology-past-exam-attempts-v1";

export interface ExportedHistory {
  schemaVersion: 1;
  exportedAt: string;
  attempts: AttemptRecord[];
}

function removeLegacyConfidence(attempts: AttemptRecord[]): AttemptRecord[] {
  return attempts.map((attempt) => ({
    id: attempt.id,
    sessionId: attempt.sessionId,
    questionId: attempt.questionId,
    selectedOptionId: attempt.selectedOptionId,
    correct: attempt.correct,
    mode: attempt.mode,
    answeredAt: attempt.answeredAt,
  }));
}

export function loadAttempts(): AttemptRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as AttemptRecord[];
    if (!Array.isArray(parsed)) return [];
    const attempts = removeLegacyConfidence(parsed);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
    return attempts;
  } catch {
    return [];
  }
}

export function saveAttempts(attempts: AttemptRecord[]): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
    return true;
  } catch {
    return false;
  }
}

export function downloadHistory(attempts: AttemptRecord[]): void {
  const payload: ExportedHistory = {
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    attempts,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `生物題練習紀錄-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function readHistoryFile(file: File): Promise<AttemptRecord[]> {
  const parsed = JSON.parse(await file.text()) as Partial<ExportedHistory>;
  if (parsed.schemaVersion !== 1 || !Array.isArray(parsed.attempts)) {
    throw new Error("這不是可辨識的練習紀錄檔。" );
  }
  return removeLegacyConfidence(parsed.attempts as AttemptRecord[]);
}
