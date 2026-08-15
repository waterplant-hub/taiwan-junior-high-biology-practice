import type {
  BiologyQuestion,
  PracticeMode,
  QuestionOption,
  SessionQuestion,
} from "../data/types";

export function shuffle<T>(values: T[]): T[] {
  const output = [...values];
  for (let index = output.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [output[index], output[randomIndex]] = [output[randomIndex], output[index]];
  }
  return output;
}

export function buildSessionQuestions(
  pool: BiologyQuestion[],
  mode: PracticeMode,
  limit: number,
): SessionQuestion[] {
  const groups = new Map<string, BiologyQuestion[]>();
  pool.forEach((question) => {
    const key = question.questionGroup?.id ?? question.id;
    groups.set(key, [...(groups.get(key) ?? []), question]);
  });

  const groupedQuestions = [...groups.values()].map((group) =>
    [...group].sort((a, b) => a.source.originalNumber - b.source.originalNumber),
  );
  const orderedGroups =
    mode === "year"
      ? groupedQuestions.sort(
          (a, b) => {
            const sessionRank = (session: BiologyQuestion["source"]["session"]) =>
              session === "第二次" ? 1 : 0;
            return (
              sessionRank(a[0].source.session) - sessionRank(b[0].source.session) ||
              a[0].source.originalNumber - b[0].source.originalNumber
            );
          },
        )
      : shuffle(groupedQuestions);

  const selectedQuestions: BiologyQuestion[] = [];
  orderedGroups.forEach((group) => {
    if (selectedQuestions.length + group.length <= limit) {
      selectedQuestions.push(...group);
    }
  });

  // A pool containing only one題組 still returns the complete group even in「逐題」mode.
  if (selectedQuestions.length === 0 && orderedGroups.length > 0) {
    selectedQuestions.push(...orderedGroups[0]);
  }

  return selectedQuestions.map((question) => ({
    question,
    displayedOptions:
      mode !== "year" && question.shuffleSafe
        ? shuffle<QuestionOption>(question.options)
        : [...question.options],
  }));
}

export function makeId(prefix: string): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
