"use client";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  ClipboardCopy,
  Download,
  History,
  Info,
  LockKeyhole,
  RotateCcw,
  Trash2,
  Upload,
  X,
  XCircle,
} from "lucide-react";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { chapterById, chapters } from "./data/chapters";
import { practiceUnits } from "./data/practice-units";
import { questionById, questions } from "./data/questions";
import { officialSources } from "./data/sources";
import type {
  AttemptRecord,
  BiologyQuestion,
  ChapterId,
  ExamYear,
  OptionId,
  PracticeMode,
  QuestionScope,
  QuestionFigure as QuestionFigureData,
  SessionAnswer,
  SessionQuestion,
} from "./data/types";
import { buildSessionQuestions, makeId } from "./lib/practice";
import { trackPracticeEvent } from "./lib/analytics";
import {
  downloadHistory,
  loadAttempts,
  readHistoryFile,
  saveAttempts,
} from "./lib/storage";

type View = "home" | "practice" | "history" | "about";
type ChapterSelection = "all" | ChapterId;
type PracticeUnitSelection = "all" | string;

const years: ExamYear[] = [115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90];
const displayLetters = ["A", "B", "C", "D"];

const scopeChoices: Array<{ value: QuestionScope; label: string }> = [
  { value: "all", label: "所有年份" },
  { value: "cap", label: "會考" },
  { value: "basic", label: "基測" },
  { value: "post-108", label: "108 課綱後" },
];

function isInScope(question: BiologyQuestion, scope: QuestionScope): boolean {
  if (scope === "cap") return question.source.exam === "國中教育會考";
  if (scope === "basic") {
    return question.source.exam === "國民中學學生基本學力測驗";
  }
  if (scope === "post-108") {
    return question.source.exam === "國中教育會考" && question.source.year >= 111;
  }
  return true;
}

function latestWrongQuestionIds(attempts: AttemptRecord[]): string[] {
  const latest = new Map<string, AttemptRecord>();
  attempts.forEach((attempt) => latest.set(attempt.questionId, attempt));
  return [...latest.values()]
    .filter((attempt) => !attempt.correct && questionById[attempt.questionId])
    .map((attempt) => attempt.questionId);
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("zh-TW", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

function examName(question: BiologyQuestion): "會考" | "基測" {
  return question.source.exam === "國中教育會考" ? "會考" : "基測";
}

function examLabel(question: BiologyQuestion): string {
  const session = question.source.session ? `・${question.source.session}` : "";
  return `${question.source.year} 年${examName(question)}${session}`;
}

interface TextRange {
  start: number;
  end: number;
}

function ScientificNameText({ text }: { text: string }) {
  const ranges: TextRange[] = [];
  const addRange = (start: number, end: number) => {
    if (!ranges.some((range) => start < range.end && end > range.start)) {
      ranges.push({ start, end });
    }
  };

  // 二名法的屬名與種小名均以斜體顯示。
  for (const match of text.matchAll(/\b[A-Z][a-z]+ [a-z][a-z-]+\b/g)) {
    addRange(match.index, match.index + match[0].length);
  }

  // 單獨出現的屬名也使用斜體；科名（例如 Ericaceae）不使用斜體。
  for (const match of text.matchAll(/\b[A-Z][a-z]{2,}\b/g)) {
    if (!match[0].endsWith("aceae")) {
      addRange(match.index, match.index + match[0].length);
    }
  }

  // 題目單獨引用學名的第二個字時，種小名仍維持斜體。
  for (const match of text.matchAll(/學名第二個字為\s*([a-z][a-z-]+)/g)) {
    const start = match.index + match[0].lastIndexOf(match[1]);
    addRange(start, start + match[1].length);
  }

  if (ranges.length === 0) return text;
  ranges.sort((a, b) => a.start - b.start);

  const output = [];
  let cursor = 0;
  ranges.forEach((range) => {
    if (range.start > cursor) output.push(text.slice(cursor, range.start));
    output.push(
      <em className="scientific-name" key={`${range.start}-${range.end}`}>
        {text.slice(range.start, range.end)}
      </em>,
    );
    cursor = range.end;
  });
  if (cursor < text.length) output.push(text.slice(cursor));
  return <>{output}</>;
}

function QuestionFigure({
  question,
  compact = false,
}: {
  question: BiologyQuestion;
  compact?: boolean;
}) {
  if (!question.figure) return null;
  return (
    <figure className={`question-figure ${compact ? "compact" : ""}`}>
      <Image
        src={question.figure.src}
        alt={question.figure.alt}
        width={question.figure.width}
        height={question.figure.height}
        sizes="(max-width: 720px) calc(100vw - 60px), 1000px"
      />
    </figure>
  );
}

function SharedQuestionFigure({ figure }: { figure?: QuestionFigureData }) {
  if (!figure) return null;
  return (
    <figure className="question-figure question-group-figure">
      <Image
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        sizes="(max-width: 720px) calc(100vw - 60px), 1000px"
      />
    </figure>
  );
}

export default function BiologyPracticeApp() {
  const [view, setView] = useState<View>("home");
  const [mode, setMode] = useState<PracticeMode>("chapter");
  const [selectedChapter, setSelectedChapter] =
    useState<ChapterSelection>("all");
  const [selectedPracticeUnit, setSelectedPracticeUnit] =
    useState<PracticeUnitSelection>("all");
  const [selectedYear, setSelectedYear] = useState<ExamYear>(115);
  const [questionLimit, setQuestionLimit] = useState(10);
  const [questionScope, setQuestionScope] = useState<QuestionScope>("all");
  const [attempts, setAttempts] = useState<AttemptRecord[]>([]);
  const [sessionQuestions, setSessionQuestions] = useState<SessionQuestion[]>([]);
  const [sessionAnswers, setSessionAnswers] = useState<SessionAnswer[]>([]);
  const [sessionId, setSessionId] = useState("");
  const [sessionMode, setSessionMode] = useState<PracticeMode>("chapter");
  const [selectedOptions, setSelectedOptions] = useState<Record<string, OptionId>>({});
  const [checked, setChecked] = useState(false);
  const [notice, setNotice] = useState("");
  const [embeddedPracticeUrl, setEmbeddedPracticeUrl] = useState("");
  const importInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setAttempts(loadAttempts());
      if (window.self !== window.top) {
        setEmbeddedPracticeUrl(window.location.href);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 3200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const wrongIds = useMemo(() => latestWrongQuestionIds(attempts), [attempts]);

  const scopedQuestions = useMemo(
    () => questions.filter((question) => isInScope(question, questionScope)),
    [questionScope],
  );

  const pool = useMemo(() => {
    if (mode === "year") {
      return scopedQuestions.filter((question) => question.source.year === selectedYear);
    }
    if (mode === "wrong") {
      return wrongIds
        .map((id) => questionById[id])
        .filter(
          (question): question is BiologyQuestion =>
            Boolean(question) && isInScope(question, questionScope),
        );
    }
    if (selectedChapter === "all") return scopedQuestions;
    const chapterQuestions = scopedQuestions.filter(
      (question) => question.chapterId === selectedChapter,
    );
    return selectedPracticeUnit === "all"
      ? chapterQuestions
      : chapterQuestions.filter(
          (question) => question.aiMetadata?.practiceUnitId === selectedPracticeUnit,
        );
  }, [mode, questionScope, scopedQuestions, selectedChapter, selectedPracticeUnit, selectedYear, wrongIds]);

  const setAndSaveAttempts = (next: AttemptRecord[]) => {
    setAttempts(next);
    const saved = saveAttempts(next);
    if (!saved) {
      setNotice("作答已完成，但瀏覽器沒有成功保存紀錄；請用新視窗打開全螢幕寫題，或立即匯出紀錄");
    }
    return saved;
  };

  const resetSessionState = () => {
    setSelectedOptions({});
    setChecked(false);
  };

  const beginSession = (
    nextPool: BiologyQuestion[],
    nextMode: PracticeMode,
    requestedLimit = questionLimit,
  ) => {
    if (nextPool.length === 0) return;
    const selectedIds = new Set(nextPool.map((question) => question.id));
    const selectedGroupIds = new Set(
      nextPool.flatMap((question) => question.questionGroup?.id ?? []),
    );
    const completedPool = questions.filter(
      (question) =>
        selectedIds.has(question.id) ||
        (question.questionGroup && selectedGroupIds.has(question.questionGroup.id)),
    );
    const limit = Math.min(requestedLimit, completedPool.length);
    const nextSessionQuestions = buildSessionQuestions(completedPool, nextMode, limit);
    setSessionQuestions(nextSessionQuestions);
    setSessionAnswers([]);
    setSessionId(makeId("session"));
    setSessionMode(nextMode);
    resetSessionState();
    setView("practice");
    trackPracticeEvent("practice_start", {
      practice_mode: nextMode,
      question_count: nextSessionQuestions.length,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitSession = () => {
    if (
      checked ||
      sessionQuestions.length === 0 ||
      sessionQuestions.some(({ question }) => !selectedOptions[question.id])
    ) {
      return;
    }
    const answeredAt = new Date().toISOString();
    const answers = sessionQuestions.map(({ question }): SessionAnswer => {
      const selectedOptionId = selectedOptions[question.id];
      return {
        questionId: question.id,
        selectedOptionId,
        correct: selectedOptionId === question.officialAnswer,
      };
    });
    const sessionAttempts = answers.map((answer): AttemptRecord => ({
      id: makeId("attempt"),
      sessionId,
      questionId: answer.questionId,
      selectedOptionId: answer.selectedOptionId,
      correct: answer.correct,
      mode: sessionMode,
      answeredAt,
    }));
    setSessionAnswers(answers);
    setAndSaveAttempts([...attempts, ...sessionAttempts]);
    setChecked(true);
    trackPracticeEvent("practice_complete", {
      practice_mode: sessionMode,
      question_count: sessionQuestions.length,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copySessionSummary = async () => {
    const correctCount = sessionAnswers.filter((answer) => answer.correct).length;
    const text = [
      "生物歷屆題練習摘要",
      `得分：${correctCount}/${sessionAnswers.length}（${percent(
        correctCount / Math.max(sessionAnswers.length, 1),
      )}）`,
      `模式：${sessionMode === "year" ? "年度練習" : sessionMode === "wrong" ? "錯題重練" : "章節練習"}`,
      `作答時間：${new Date().toLocaleString("zh-TW")}`,
      "紀錄由學生本人在裝置端產生，網站不會自動回傳給教師。",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setNotice("已複製本次練習摘要");
    } catch {
      setNotice("無法使用剪貼簿，請稍後再試");
    }
  };

  const importHistory = async (file: File | undefined) => {
    if (!file) return;
    try {
      const imported = await readHistoryFile(file);
      const saved = setAndSaveAttempts(imported);
      if (saved) setNotice(`已匯入 ${imported.length} 筆作答紀錄`);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "匯入失敗");
    } finally {
      if (importInputRef.current) importInputRef.current.value = "";
    }
  };

  const clearHistory = () => {
    if (!window.confirm("確定清除這台裝置上的所有作答紀錄？此動作無法復原。")) {
      return;
    }
    setAndSaveAttempts([]);
    setNotice("本機作答紀錄已清除");
  };

  const navigate = (nextView: View) => {
    setView(nextView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      {embeddedPracticeUrl && (
        <aside className="embedded-practice-notice" role="alert">
          <div className="content-width">
            <p>⚠️ 為了避免你的作答紀錄傳不出去，請點此</p>
            <a href={embeddedPracticeUrl} target="_blank" rel="noopener noreferrer">
              👉 用新視窗打開全螢幕寫題
            </a>
          </div>
        </aside>
      )}
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => navigate("home")}>
            <span className="brand-mark" aria-hidden="true">生</span>
            <span>
              <strong>生物考古題</strong>
              <small>會考 × 基測練習</small>
            </span>
          </button>
          <nav aria-label="主要導覽">
            <button
              className={view === "home" || view === "practice" ? "active" : ""}
              onClick={() => navigate("home")}
            >
              <BookOpen size={18} />練習
            </button>
            <button
              className={view === "history" ? "active" : ""}
              onClick={() => navigate("history")}
            >
              <History size={18} />我的紀錄
            </button>
            <button
              className={view === "about" ? "active" : ""}
              onClick={() => navigate("about")}
            >
              <Info size={18} />題庫說明
            </button>
          </nav>
        </div>
      </header>

      {view === "home" && (
        <HomeView
          mode={mode}
          setMode={setMode}
          selectedChapter={selectedChapter}
          setSelectedChapter={(chapter) => {
            setSelectedChapter(chapter);
            setSelectedPracticeUnit("all");
          }}
          selectedPracticeUnit={selectedPracticeUnit}
          setSelectedPracticeUnit={setSelectedPracticeUnit}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          questionLimit={questionLimit}
          setQuestionLimit={setQuestionLimit}
          questionScope={questionScope}
          setQuestionScope={(scope) => {
            setQuestionScope(scope);
            setSelectedPracticeUnit("all");
          }}
          catalogQuestions={scopedQuestions}
          pool={pool}
          wrongCount={wrongIds.length}
          onStart={() => beginSession(pool, mode)}
        />
      )}

      {view === "practice" && sessionQuestions.length > 0 && (
        <PracticeView
          questions={sessionQuestions}
          selectedOptions={selectedOptions}
          answers={sessionAnswers}
          onSelectOption={(questionId, optionId) => {
            setSelectedOptions((existing) => ({ ...existing, [questionId]: optionId }));
          }}
          checked={checked}
          onSubmit={submitSession}
          onExit={() => navigate("home")}
          onHome={() => navigate("home")}
          onRetryWrong={() => {
            const wrongQuestions = sessionAnswers
              .filter((answer) => !answer.correct)
              .map((answer) => questionById[answer.questionId])
              .filter((question): question is BiologyQuestion => Boolean(question));
            beginSession(wrongQuestions, "wrong", wrongQuestions.length);
          }}
          onCopy={copySessionSummary}
        />
      )}

      {view === "history" && (
        <HistoryView
          attempts={attempts}
          wrongCount={wrongIds.length}
          onPracticeWrong={() => {
            const wrongQuestions = wrongIds
              .map((id) => questionById[id])
              .filter((question): question is BiologyQuestion => Boolean(question));
            beginSession(wrongQuestions, "wrong", wrongQuestions.length);
          }}
          onExport={() => downloadHistory(attempts)}
          onImportClick={() => importInputRef.current?.click()}
          onClear={clearHistory}
        />
      )}

      {view === "about" && <AboutView />}

      <input
        ref={importInputRef}
        className="visually-hidden"
        type="file"
        accept="application/json"
        onChange={(event) => importHistory(event.target.files?.[0])}
      />
      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  );
}

interface HomeViewProps {
  mode: PracticeMode;
  setMode: (mode: PracticeMode) => void;
  selectedChapter: ChapterSelection;
  setSelectedChapter: (chapter: ChapterSelection) => void;
  selectedPracticeUnit: PracticeUnitSelection;
  setSelectedPracticeUnit: (unit: PracticeUnitSelection) => void;
  selectedYear: ExamYear;
  setSelectedYear: (year: ExamYear) => void;
  questionLimit: number;
  setQuestionLimit: (limit: number) => void;
  questionScope: QuestionScope;
  setQuestionScope: (scope: QuestionScope) => void;
  catalogQuestions: BiologyQuestion[];
  pool: BiologyQuestion[];
  wrongCount: number;
  onStart: () => void;
}

function HomeView({
  mode,
  setMode,
  selectedChapter,
  setSelectedChapter,
  selectedPracticeUnit,
  setSelectedPracticeUnit,
  selectedYear,
  setSelectedYear,
  questionLimit,
  setQuestionLimit,
  questionScope,
  setQuestionScope,
  catalogQuestions,
  pool,
  wrongCount,
  onStart,
}: HomeViewProps) {
  const availableChapters = chapters
    .map((chapter) => ({
      ...chapter,
      count: catalogQuestions.filter((question) => question.chapterId === chapter.id).length,
    }));
  const availableYears = years
    .map((year) => ({
      year,
      count: catalogQuestions.filter((question) => question.source.year === year).length,
    }))
    .filter(({ count }) => count > 0);
  const availablePracticeUnits = selectedChapter === "all"
    ? []
    : practiceUnits.filter((unit) => unit.chapterId === selectedChapter);
  const countChoices = [1, 10].filter((limit) => limit < pool.length);

  return (
    <main className="home-page">
      <section className="practice-builder content-width" id="practice-builder">
        <div className="practice-heading">
          <h1>選擇練習方式</h1>
          <span>目前共 {catalogQuestions.length} 題</span>
        </div>
        <p className="home-disclosure">
          正確答案依官方參考答案；詳解與選項分析由 AI 生成，可能有疏漏。
        </p>
        <div className="builder-card">
          <div className="mode-tabs" role="tablist" aria-label="選擇練習方式">
            <button
              role="tab"
              aria-selected={mode === "chapter"}
              className={mode === "chapter" ? "active" : ""}
              onClick={() => setMode("chapter")}
            >依章節</button>
            <button
              role="tab"
              aria-selected={mode === "year"}
              className={mode === "year" ? "active" : ""}
              onClick={() => setMode("year")}
            >依年度</button>
            <button
              role="tab"
              aria-selected={mode === "wrong"}
              className={mode === "wrong" ? "active" : ""}
              onClick={() => setMode("wrong")}
            >我的錯題 <span>{wrongCount}</span></button>
          </div>

          {mode === "chapter" && (
            <div className="chapter-selection">
              <div className="chapter-grid">
                {availableChapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    className={`chapter-card ${selectedChapter === chapter.id ? "selected" : ""}`}
                    onClick={() => setSelectedChapter(chapter.id)}
                  >
                    <span className={`chapter-order ${chapter.order >= 7 ? "second-semester" : ""}`}>
                      {String(chapter.order).padStart(2, "0")}
                    </span>
                    <strong>{chapter.name}</strong>
                    {chapter.id === "evolution" && <small className="legacy-note">含舊課綱題</small>}
                  </button>
                ))}
                <button
                  className={`chapter-card ${selectedChapter === "all" ? "selected" : ""}`}
                  onClick={() => setSelectedChapter("all")}
                >
                  <span className="chapter-order all-chapters">全部</span>
                  <strong>全部生物題</strong>
                </button>
              </div>
              {availablePracticeUnits.length > 0 && (
                <div className="practice-unit-picker" aria-label="選擇小單元">
                  <span>小單元</span>
                  <div>
                    <button
                      className={selectedPracticeUnit === "all" ? "active" : ""}
                      onClick={() => setSelectedPracticeUnit("all")}
                    >本章全部</button>
                    {availablePracticeUnits.map((unit) => (
                      <button
                        key={unit.id}
                        className={selectedPracticeUnit === unit.id ? "active" : ""}
                        onClick={() => setSelectedPracticeUnit(unit.id)}
                      >{unit.name}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {mode === "year" && (
            <div className="year-grid">
              {availableYears.map(({ year, count }) => (
                <button
                  key={year}
                  className={`year-card ${selectedYear === year ? "selected" : ""}`}
                  onClick={() => setSelectedYear(year)}
                >
                  <strong>{year}</strong>
                  <span>年{catalogQuestions.find((question) => question.source.year === year)?.source.exam === "國中教育會考" ? "會考" : "基測"}</span>
                  <small>{count} 題</small>
                </button>
              ))}
              {availableYears.length === 0 && (
                <p className="empty-year-message">此範圍尚未收錄題目</p>
              )}
            </div>
          )}

          {mode === "wrong" && (
            <div className="wrong-mode-panel">
              <RotateCcw size={30} />
              <div>
                <h3>{wrongCount ? `目前有 ${wrongCount} 題待複習` : "目前沒有待複習的錯題"}</h3>
                <p>答對後會自動移出錯題清單。</p>
              </div>
            </div>
          )}

          <div className="builder-footer">
            <div className="answer-settings">
              <span className="field-label">本次作答方式</span>
              <div className="count-options">
                {countChoices.map((limit) => (
                  <button
                    key={limit}
                    className={questionLimit === limit ? "active" : ""}
                    onClick={() => setQuestionLimit(limit)}
                  >{limit === 1 ? "逐題" : `${limit} 題`}</button>
                ))}
                <button
                  className={questionLimit >= pool.length ? "active" : ""}
                  onClick={() => setQuestionLimit(999)}
                >全部（{pool.length} 題）</button>
              </div>
              <div className="scope-options" aria-label="題目年份範圍">
                {scopeChoices.map((choice) => (
                  <button
                    key={choice.value}
                    className={questionScope === choice.value ? "active" : ""}
                    onClick={() => setQuestionScope(choice.value)}
                  >{choice.label}</button>
                ))}
              </div>
            </div>
            <button className="primary-button" disabled={pool.length === 0} onClick={onStart}>
              {pool.length ? `開始作答（${Math.min(questionLimit, pool.length)} 題）` : "目前沒有題目"}
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
        <p className="attribution home-attribution">
          © 2026 林顯豪｜題庫規劃、內容審訂與網站維護｜v1.0
        </p>
      </section>
    </main>
  );
}

interface PracticeViewProps {
  questions: SessionQuestion[];
  selectedOptions: Record<string, OptionId>;
  answers: SessionAnswer[];
  onSelectOption: (questionId: string, optionId: OptionId) => void;
  checked: boolean;
  onSubmit: () => void;
  onExit: () => void;
  onHome: () => void;
  onRetryWrong: () => void;
  onCopy: () => void;
}

function PracticeView({
  questions,
  selectedOptions,
  answers,
  onSelectOption,
  checked,
  onSubmit,
  onExit,
  onHome,
  onRetryWrong,
  onCopy,
}: PracticeViewProps) {
  const answeredCount = questions.filter(
    ({ question }) => selectedOptions[question.id],
  ).length;
  const correctCount = answers.filter((answer) => answer.correct).length;
  const wrongCount = answers.length - correctCount;

  return (
    <main className="practice-page practice-sheet content-width">
      <div className="practice-topbar">
        <button className="text-button" onClick={onExit}><ArrowLeft size={18} />結束練習</button>
        <div className="progress-copy">
          <strong>{checked ? correctCount : answeredCount}</strong> / {questions.length}
          <span>{checked ? " 答對" : " 已作答"}</span>
        </div>
      </div>
      <div className="progress-track">
        <span style={{ width: `${((checked ? questions.length : answeredCount) / questions.length) * 100}%` }} />
      </div>

      {checked && (
        <section className="session-result-banner" aria-label="本次練習結果">
          <div>
            <span>本次得分</span>
            <strong>{correctCount} / {questions.length}</strong>
            <small>{percent(correctCount / questions.length)}</small>
          </div>
          <div className="score-actions">
            {wrongCount > 0 && (
              <button className="primary-button" onClick={onRetryWrong}>
                <RotateCcw size={18} />重做 {wrongCount} 題錯題
              </button>
            )}
            <button className="secondary-button" onClick={onCopy}><ClipboardCopy size={18} />複製摘要</button>
            <button className="text-button" onClick={onHome}>回到首頁</button>
          </div>
        </section>
      )}

      <div className="practice-list">
        {questions.map(({ question, displayedOptions }, questionIndex) => {
          const selectedOptionId = selectedOptions[question.id];
          const isCorrect = selectedOptionId === question.officialAnswer;
          const explanationId = `explanation-${question.id}`;

          const isFirstGroupMember = Boolean(
            question.questionGroup &&
              (questionIndex === 0 ||
                questions[questionIndex - 1].question.questionGroup?.id !==
                  question.questionGroup.id),
          );
          const repeatsSharedFigure = Boolean(
            question.figure &&
              question.questionGroup?.sharedFigure &&
              question.figure.src === question.questionGroup.sharedFigure.src,
          );

          return (
            <Fragment key={question.id}>
              {isFirstGroupMember && question.questionGroup && (
                <section className="question-card question-group-passage" aria-label="題組閱讀資料">
                  <div className="question-group-label">{examLabel(question)}題組・以下 {question.questionGroup.memberOriginalNumbers.length} 題共用</div>
                  <h2>{question.questionGroup.title}</h2>
                  <p><ScientificNameText text={question.questionGroup.sharedStem} /></p>
                  <SharedQuestionFigure figure={question.questionGroup.sharedFigure} />
                </section>
              )}
              <article className="question-card session-question-card">
              <div className="question-meta">
                <span>第 {questionIndex + 1} 題・{examLabel(question)}</span>
                <span>{chapterById[question.chapterId].name}・{question.topic}</span>
              </div>
              <div className="statistics-row">
                <div title="全國有效考生中答對此題的比例。數值愈高，題目通常愈容易。">
                  <BarChart3 size={17} /><span>官方答對率</span><strong>{question.passRate === null ? "官方未公布" : percent(question.passRate)}</strong>
                </div>
                <div title="此題得分與整份測驗總分的相關；愈高通常愈能區分考生程度。">
                  <span className="stat-symbol">↕</span><span>官方鑑別度</span><strong>{question.discrimination === null ? "官方未公布" : question.discrimination.toFixed(2)}</strong>
                </div>
                <a href={question.source.questionPdfUrl} target="_blank" rel="noreferrer">查看官方題本</a>
              </div>

              {!question.officialImageOnly && <h2 className="question-stem"><ScientificNameText text={question.stem} /></h2>}
              {!repeatsSharedFigure && <QuestionFigure question={question} />}

              <div className="option-list" role="radiogroup" aria-label={`第 ${questionIndex + 1} 題作答選項`}>
                {displayedOptions.map((option, optionIndex) => {
                  const isSelected = selectedOptionId === option.id;
                  const isAnswer = option.id === question.officialAnswer;
                  const resultClass = checked
                    ? isAnswer
                      ? "correct"
                      : isSelected
                        ? "incorrect"
                        : ""
                    : "";
                  return (
                    <button
                      key={option.id}
                      role="radio"
                      aria-checked={isSelected}
                      disabled={checked}
                      className={`option-button ${isSelected ? "selected" : ""} ${resultClass}`}
                      onClick={() => onSelectOption(question.id, option.id)}
                    >
                      <span className="option-letter">{displayLetters[optionIndex]}</span>
                      <span>{question.officialImageOnly ? `選擇 ${displayLetters[optionIndex]}` : <ScientificNameText text={option.text} />}</span>
                      {checked && isAnswer && <Check size={20} />}
                      {checked && isSelected && !isAnswer && <X size={20} />}
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div className={`feedback-panel ${isCorrect ? "correct" : "incorrect"}`}>
                  <div className="feedback-heading">
                    {isCorrect ? <CheckCircle2 /> : <XCircle />}
                    <strong>{isCorrect ? "答對了" : "這題答錯了"}</strong>
                  </div>
                  <details className="explanation-details" open={!isCorrect}>
                    <summary aria-controls={explanationId}>{isCorrect ? "查看解析" : "解析"}</summary>
                    <div id={explanationId} className="explanation-content">
                      <div className="ai-label">AI 生成詳解</div>
                      <p className="feedback-summary"><ScientificNameText text={question.explanation.summary} /></p>
                      <p><ScientificNameText text={question.explanation.reasoning} /></p>
                      {question.explanation.optionAnalysis.length > 0 && (
                        <section className="option-analysis-block" aria-label="各選項分析">
                          <h3>各選項分析</h3>
                          <div className="option-analysis">
                            {displayedOptions.map((option, optionIndex) => {
                              const analysis = question.explanation.optionAnalysis.find(
                                (item) => item.optionId === option.id,
                              );
                              return (
                                <div key={option.id}>
                                  <p>
                                    <strong className={option.id === question.officialAnswer ? "answer" : ""}>
                                      {displayLetters[optionIndex]}：
                                    </strong>
                                    {analysis?.reason && <ScientificNameText text={analysis.reason} />}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </section>
                      )}
                    </div>
                  </details>
                </div>
              )}
              </article>
            </Fragment>
          );
        })}
      </div>

      {!checked && (
        <div className="session-submit-bar">
          <span>已作答 {answeredCount} / {questions.length} 題</span>
          <button
            className="primary-button"
            disabled={answeredCount !== questions.length}
            onClick={onSubmit}
          >
            送出並查看答案<Check size={18} />
          </button>
        </div>
      )}

      {checked && (
        <div className="session-end-actions">
          {wrongCount > 0 && <button className="secondary-button" onClick={onRetryWrong}><RotateCcw size={18} />重做錯題</button>}
          <button className="primary-button" onClick={onHome}>完成，回到首頁</button>
        </div>
      )}
    </main>
  );
}

interface HistoryViewProps {
  attempts: AttemptRecord[];
  wrongCount: number;
  onPracticeWrong: () => void;
  onExport: () => void;
  onImportClick: () => void;
  onClear: () => void;
}

function HistoryView({
  attempts,
  wrongCount,
  onPracticeWrong,
  onExport,
  onImportClick,
  onClear,
}: HistoryViewProps) {
  const correctCount = attempts.filter((attempt) => attempt.correct).length;
  const uniqueCount = new Set(attempts.map((attempt) => attempt.questionId)).size;
  const accuracy = attempts.length ? correctCount / attempts.length : 0;
  const chapterStats = chapters
    .map((chapter) => {
      const rows = attempts.filter(
        (attempt) => questionById[attempt.questionId]?.chapterId === chapter.id,
      );
      return {
        chapter,
        total: rows.length,
        correct: rows.filter((row) => row.correct).length,
      };
    })
    .filter((row) => row.total > 0);

  return (
    <main className="history-page content-width">
      <div className="page-title">
        <span className="eyebrow">只屬於這台裝置</span>
        <h1>我的學習紀錄</h1>
        <p>不需帳號，也不會自動傳給老師。換裝置前，可自行匯出 JSON 備份再匯入。</p>
      </div>
      <div className="history-toolbar">
        <button className="secondary-button" disabled={!attempts.length} onClick={onExport}><Download size={17} />匯出紀錄</button>
        <button className="secondary-button" onClick={onImportClick}><Upload size={17} />匯入紀錄</button>
        <button className="danger-button" disabled={!attempts.length} onClick={onClear}><Trash2 size={17} />清除全部</button>
      </div>

      <section className="metric-grid">
        <div><span>累計作答</span><strong>{attempts.length}</strong><small>次</small></div>
        <div><span>練過題目</span><strong>{uniqueCount}</strong><small>題</small></div>
        <div><span>累計答對率</span><strong>{percent(accuracy)}</strong></div>
        <div><span>待複習錯題</span><strong>{wrongCount}</strong><small>題</small></div>
      </section>

      {attempts.length === 0 ? (
        <section className="empty-state">
          <History size={38} />
          <h2>還沒有作答紀錄</h2>
          <p>完成第一回練習後，這裡會顯示章節表現、歷次作答與待複習錯題。</p>
        </section>
      ) : (
        <div className="history-columns">
          <section className="history-panel">
            <div className="panel-heading"><h2>章節表現</h2><span>依累計作答</span></div>
            <div className="chapter-performance">
              {chapterStats.map(({ chapter, total, correct }) => (
                <div key={chapter.id}>
                  <div><strong>{chapter.name}</strong><span>{correct}/{total}・{percent(correct / total)}</span></div>
                  <div className="performance-track"><span style={{ width: percent(correct / total) }} /></div>
                </div>
              ))}
            </div>
            {wrongCount > 0 && <button className="primary-button full" onClick={onPracticeWrong}><RotateCcw size={18} />開始錯題重練</button>}
          </section>
          <section className="history-panel">
            <div className="panel-heading"><h2>最近作答</h2><span>最近 10 筆</span></div>
            <div className="attempt-list">
              {[...attempts].reverse().slice(0, 10).map((attempt) => {
                const question = questionById[attempt.questionId];
                if (!question) return null;
                return (
                  <div key={attempt.id}>
                    {attempt.correct ? <CheckCircle2 className="right" /> : <XCircle className="wrong" />}
                    <span><strong>{examLabel(question)}</strong><small>{chapterById[question.chapterId].name}・{formatDate(attempt.answeredAt)}</small></span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
      <div className="privacy-note"><LockKeyhole size={20} /><p><strong>資料界線：</strong>網站沒有學生帳號、班級代碼、教師儀表板或後端資料庫。清除瀏覽器網站資料也會刪除此處紀錄，請先匯出備份。</p></div>
    </main>
  );
}

function AboutView() {
  const chapterCoverage = chapters.map((chapter) => ({
    ...chapter,
    count: questions.filter((question) => question.chapterId === chapter.id).length,
  }));

  return (
    <main className="about-page content-width">
      <div className="page-title">
        <span className="eyebrow">透明比華麗更重要</span>
        <h1>題庫怎麼整理？</h1>
        <p>這是一個獨立製作的非官方學習工具。題目只從政府公開的國中教育會考與基本學力測驗來源整理，不使用其他老師的題庫、程式或解析。</p>
      </div>
      <div className="about-grid">
        <section>
          <span className="about-number">01</span>
          <h2>章節名稱</h2>
          <p>分類範圍依十二年國教自然科第四學習階段。政府課綱沒有指定單一教科書章名與順序，因此畫面名稱採臺灣主流版本共通、學生熟悉的用語，不顯示生硬的課綱代碼，並採中性的十一章順序。</p>
        </section>
        <section>
          <span className="about-number">02</span>
          <h2>答案與解析</h2>
          <p>正確答案逐題對照官方參考答案。詳解與各選項錯因屬 AI 生成內容，會永久保留來源註記；經人工審閱後只會另加「已審閱」，不會改稱官方解析。</p>
        </section>
        <section>
          <span className="about-number">03</span>
          <h2>選項順序</h2>
          <p>年度模擬保留原題順序。章節與錯題練習只有在不影響題意時才打亂選項；答案以原選項的穩定代碼儲存，不以畫面上暫時顯示的字母判定。</p>
        </section>
        <section>
          <span className="about-number">04</span>
          <h2>學生資料</h2>
          <p>作答歷史只寫入瀏覽器本機儲存空間。網站不蒐集學生身分，也不把練習結果傳給教師；Google Analytics 僅統計整體瀏覽與練習次數，不傳送姓名、作答選項或成績。只有學生主動複製摘要或匯出紀錄時，完整紀錄才會離開這個畫面。</p>
        </section>
      </div>

      <section className="coverage-panel">
        <div className="panel-heading">
          <h2>目前可練習題數</h2>
          <span>共 {questions.length} 題；依主要概念歸入一章</span>
        </div>
        <div className="coverage-list">
          {chapterCoverage.map((chapter) => (
            <div key={chapter.id}>
              <span>{String(chapter.order).padStart(2, "0")}</span>
              <strong>{chapter.name}</strong>
              <b>{chapter.count} 題</b>
            </div>
          ))}
        </div>
      </section>

      <section className="source-panel">
        <div className="panel-heading"><h2>官方來源</h2><span>課綱、題本、答案與官方公開統計</span></div>
        <div className="source-list">
          <a href="https://www.naer.edu.tw/PageSyllabus?fid=177" target="_blank" rel="noreferrer">
            <span>課綱</span><strong>國家教育研究院・自然科學領域課程綱要</strong><ArrowRight size={17} />
          </a>
          {years.map((year) => (
            <a key={year} href={officialSources[year].officialPageUrl} target="_blank" rel="noreferrer">
              <span>{year}</span><strong>年{year >= 103 ? "國中教育會考" : "基本學力測驗"}官方試題頁</strong><ArrowRight size={17} />
            </a>
          ))}
        </div>
      </section>

      <section className="disclaimer">
        <Info size={22} />
        <div><strong>非官方聲明</strong><p>本站並非教育部、國中教育會考全國試務會或臺師大心測中心官方服務。若本站轉錄內容與官方原檔不一致，應以官方公告與題本為準。</p></div>
      </section>
    </main>
  );
}
