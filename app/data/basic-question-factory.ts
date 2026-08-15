import { attachAiMetadata } from "./ai-metadata";
import { officialSources } from "./sources";
import type {
  BiologyQuestion,
  ChapterId,
  ExamYear,
  OptionId,
  QuestionOption,
} from "./types";

interface BasicQuestionInput {
  year: Extract<ExamYear, 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102>;
  number: number;
  session?: "第一次" | "第二次";
  chapterId: ChapterId;
  topic: string;
  stem: string;
  options: [string, string, string, string];
  answer: OptionId;
  summary: string;
  reasoning: string;
  optionReasons: [string, string, string, string];
  figure?: BiologyQuestion["figure"];
  officialImageOnly?: boolean;
  questionGroup?: BiologyQuestion["questionGroup"];
  shuffleSafe?: boolean;
}

const optionIds: OptionId[] = ["A", "B", "C", "D"];

export function makeBasicQuestion(input: BasicQuestionInput): BiologyQuestion {
  const source = officialSources[input.year];
  const options: QuestionOption[] = input.options.map((text, index) => ({
    id: optionIds[index],
    text,
  }));

  return attachAiMetadata({
    id: `basic-${input.year}-${input.session === "第二次" ? "second" : "first"}-nature-${input.number}`,
    source: {
      exam: "國民中學學生基本學力測驗",
      year: input.year,
      session: input.year <= 100 ? (input.session ?? "第一次") : undefined,
      subject: "自然科",
      originalNumber: input.number,
      questionPdfUrl: input.session === "第二次" ? source.officialPageUrl : source.naturePdfUrl,
      answerPdfUrl: input.session === "第二次" ? source.officialPageUrl : source.answerPdfUrl,
      passRatePdfUrl: source.passRatePdfUrl,
      discriminationPdfUrl: source.discriminationPdfUrl,
    },
    chapterId: input.chapterId,
    topic: input.topic,
    questionGroup: input.questionGroup,
    stem: input.stem,
    officialImageOnly: input.officialImageOnly,
    figure: input.figure,
    options,
    officialAnswer: input.answer,
    passRate: null,
    discrimination: null,
    shuffleSafe: input.shuffleSafe ?? true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: input.summary,
      reasoning: input.reasoning,
      optionAnalysis: input.optionReasons.map((reason, index) => ({
        optionId: optionIds[index],
        reason,
      })),
    },
  });
}
