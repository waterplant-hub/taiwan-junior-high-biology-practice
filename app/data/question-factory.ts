import { officialSources } from "./sources";
import { attachAiMetadata } from "./ai-metadata";
import type {
  BiologyQuestion,
  ChapterId,
  ExamYear,
  OptionId,
  QuestionOption,
} from "./types";

interface QuestionInput {
  year: ExamYear;
  number: number;
  chapterId: ChapterId;
  topic: string;
  stem: string;
  options: [string, string, string, string];
  answer: OptionId;
  passRate: number;
  discrimination: number;
  summary: string;
  reasoning: string;
  optionReasons: [string, string, string, string];
  figure?: BiologyQuestion["figure"];
  questionGroup?: BiologyQuestion["questionGroup"];
  shuffleSafe?: boolean;
}

const optionIds: OptionId[] = ["A", "B", "C", "D"];

export function makeQuestion(input: QuestionInput): BiologyQuestion {
  const source = officialSources[input.year];
  const options: QuestionOption[] = input.options.map((text, index) => ({
    id: optionIds[index],
    text,
  }));

  return attachAiMetadata({
    id: `cap-${input.year}-nature-${input.number}`,
    source: {
      exam: "國中教育會考",
      year: input.year,
      subject: "自然科",
      originalNumber: input.number,
      questionPdfUrl: source.naturePdfUrl,
      answerPdfUrl: source.answerPdfUrl,
      passRatePdfUrl: source.passRatePdfUrl,
      discriminationPdfUrl: source.discriminationPdfUrl,
    },
    chapterId: input.chapterId,
    topic: input.topic,
    questionGroup: input.questionGroup,
    stem: input.stem,
    figure: input.figure,
    options,
    officialAnswer: input.answer,
    passRate: input.passRate,
    discrimination: input.discrimination,
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
