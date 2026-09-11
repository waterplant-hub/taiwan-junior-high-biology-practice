export type ChapterId =
  | "science-and-life"
  | "cells"
  | "nutrition-and-energy"
  | "transport"
  | "coordination"
  | "homeostasis"
  | "reproduction"
  | "genetics"
  | "evolution"
  | "classification"
  | "ecology";

export type OptionId = "A" | "B" | "C" | "D";
export type ExamYear = 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115;
export type PracticeMode = "chapter" | "year" | "wrong";
export type QuestionScope = "all" | "cap" | "basic" | "post-108";

export interface Chapter {
  id: ChapterId;
  order: number;
  name: string;
  shortName: string;
  description: string;
}

export interface QuestionOption {
  id: OptionId;
  text: string;
}

export interface OptionExplanation {
  optionId: OptionId;
  reason: string;
}

export interface OfficialSource {
  exam: "國中教育會考" | "國民中學學生基本學力測驗";
  year: ExamYear;
  session?: "第一次" | "第二次";
  subject: "自然科";
  originalNumber: number;
  questionPdfUrl: string;
  answerPdfUrl: string;
  passRatePdfUrl: string;
  discriminationPdfUrl: string;
}

export interface QuestionFigure {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface QuestionGroup {
  id: string;
  title: string;
  memberOriginalNumbers: number[];
  sharedStem: string;
  sharedFigure?: QuestionFigure;
}

export interface BiologyQuestion {
  id: string;
  source: OfficialSource;
  chapterId: ChapterId;
  topic: string;
  /** Reviewed placement takes priority over title keyword matching. */
  practiceUnitId?: string;
  placementNote?: string;
  aiMetadata?: {
    schemaVersion: "1.0";
    chapterName: string;
    unitId: string;
    unitName: string;
    aliases: string[];
    practiceUnitId: string;
    practiceUnitName: string;
    practiceUnitAliases: string[];
    conceptTags: string[];
    assessedSkills: string[];
    itemArchetype: "文字情境題" | "圖表判讀題";
    adaptationRules: string[];
    curriculum: {
      sourceEra: "九年一貫課綱" | "108 課綱";
      currentStatus: "現行適用" | "舊課綱限定";
      note?: string;
    };
  };
  questionGroup?: QuestionGroup;
  stem: string;
  officialImageOnly?: boolean;
  figure?: QuestionFigure;
  options: QuestionOption[];
  officialAnswer: OptionId;
  passRate: number | null;
  discrimination: number | null;
  shuffleSafe: boolean;
  explanation: {
    provenance: "ai-generated";
    reviewStatus: "unreviewed" | "human-reviewed";
    summary: string;
    reasoning: string;
    optionAnalysisMode?: "separate" | "covered-by-reasoning";
    optionAnalysis: OptionExplanation[];
  };
}

export interface AttemptRecord {
  id: string;
  sessionId: string;
  questionId: string;
  selectedOptionId: OptionId;
  correct: boolean;
  mode: PracticeMode;
  answeredAt: string;
}

export interface SessionAnswer {
  questionId: string;
  selectedOptionId: OptionId;
  correct: boolean;
}

export interface SessionQuestion {
  question: BiologyQuestion;
  displayedOptions: QuestionOption[];
}
