import { questions115 } from "./questions-115";
import { refineUnit01To03Explanations } from "./unit01-03-explanation-review";
import { refineUnit04To11Explanations } from "./unit04-11-explanation-review";
import { questions114 } from "./questions-114";
import { questions113 } from "./questions-113";
import { questions112 } from "./questions-112";
import { questions111 } from "./questions-111";
import { questions104To110 } from "./questions-104-110";
import { questions103 } from "./questions-103";
import { questionsBasic97To98 } from "./questions-basic-97-98";
import { questionsBasic99To100 } from "./questions-basic-99-100";
import { questionsBasic101To102 } from "./questions-basic-101-102";
import { questionsBasicSecond97To100 } from "./questions-basic-second-97-100";
import { questionsBasic94To96 } from "./questions-basic-94-96";
import { questionsBasic90To93 } from "./questions-basic-90-93";
import { attachAiMetadata } from "./ai-metadata";
import { reviewQuestionPlacements } from "./curriculum-placement";
import { refineUnit03Questions } from "./unit03-refinements";
import { refineUnit04Questions } from "./unit04-refinements";
import { refineUnit05Questions } from "./unit05-refinements";
import { refineUnit06Questions } from "./unit06-refinements";
import { refineUnit07Questions } from "./unit07-refinements";
import { refineUnit08Questions } from "./unit08-refinements";
import { refineUnit09Questions } from "./unit09-refinements";
import { refineUnit10Questions } from "./unit10-refinements";
import { refineUnit11Questions } from "./unit11-refinements";
import {
  refineYear90Explanations,
  validateYear90ExplanationQuality,
} from "./year90-explanation-refinements";
import {
  refineYear91Explanations,
  year91ExplanationIds,
} from "./year91-explanation-refinements";
import {
  refineYear92Explanations,
  year92ExplanationIds,
} from "./year92-explanation-refinements";
import {
  refineYear93Explanations,
  year93ExplanationIds,
} from "./year93-explanation-refinements";
import {
  refineYear94Explanations,
  year94ExplanationIds,
} from "./year94-explanation-refinements";
import {
  refineYear95Explanations,
  year95ExplanationIds,
} from "./year95-explanation-refinements";
import {
  refineYear96Explanations,
  year96ExplanationIds,
} from "./year96-explanation-refinements";
import {
  refineYear97Explanations,
  year97ExplanationIds,
} from "./year97-explanation-refinements";
import {
  refineYear98Explanations,
  year98ExplanationIds,
} from "./year98-explanation-refinements";
import {
  refineYear99Explanations,
  year99ExplanationIds,
} from "./year99-explanation-refinements";
import {
  refineYear100Explanations,
  year100ExplanationIds,
} from "./year100-explanation-refinements";
import {
  refineYear101Explanations,
  year101ExplanationIds,
} from "./year101-explanation-refinements";
import {
  refineYear102Explanations,
  year102ExplanationIds,
} from "./year102-explanation-refinements";
import {
  refineYear103Explanations,
  year103ExplanationIds,
} from "./year103-explanation-refinements";
import {
  refineYear104Explanations,
  year104ExplanationIds,
} from "./year104-explanation-refinements";
import {
  refineYear105Explanations,
  year105ExplanationIds,
} from "./year105-explanation-refinements";
import {
  refineYear106Explanations,
  year106ExplanationIds,
} from "./year106-explanation-refinements";
import {
  refineYear107Explanations,
  year107ExplanationIds,
} from "./year107-explanation-refinements";
import {
  refineYear108Explanations,
  year108ExplanationIds,
} from "./year108-explanation-refinements";
import {
  refineYear109Explanations,
  year109ExplanationIds,
} from "./year109-explanation-refinements";
import {
  refineYear110Explanations,
  year110ExplanationIds,
} from "./year110-explanation-refinements";
import {
  refineYear111Explanations,
  year111ExplanationIds,
} from "./year111-explanation-refinements";
import {
  refineYear112Explanations,
  year112ExplanationIds,
} from "./year112-explanation-refinements";
import {
  refineYear113Explanations,
  year113ExplanationIds,
} from "./year113-explanation-refinements";
import {
  refineYear114Explanations,
  year114ExplanationIds,
} from "./year114-explanation-refinements";
import {
  refineYear115Explanations,
  year115ExplanationIds,
} from "./year115-explanation-refinements";
import { validateYearExplanationQuality } from "./year91-92-explanation-quality";
import type { BiologyQuestion, ExamYear } from "./types";

let refinedQuestions: BiologyQuestion[] = refineUnit03Questions([
  ...questions115,
  ...questions114,
  ...questions113,
  ...questions112,
  ...questions111,
  ...questions104To110,
  ...questions103,
  ...questionsBasic97To98,
  ...questionsBasic99To100,
  ...questionsBasicSecond97To100,
  ...questionsBasic101To102,
  ...questionsBasic94To96,
  ...questionsBasic90To93,
]);

refinedQuestions = refineUnit04Questions(refinedQuestions);
refinedQuestions = refineUnit05Questions(refinedQuestions);
refinedQuestions = refineUnit06Questions(refinedQuestions);
refinedQuestions = refineUnit07Questions(refinedQuestions);
refinedQuestions = refineUnit08Questions(refinedQuestions);
refinedQuestions = refineUnit09Questions(refinedQuestions);
refinedQuestions = refineUnit10Questions(refinedQuestions);
refinedQuestions = refineUnit11Questions(refinedQuestions);
refinedQuestions = refineYear90Explanations(refinedQuestions);
refinedQuestions = refineYear91Explanations(refinedQuestions);
refinedQuestions = refineYear92Explanations(refinedQuestions);
refinedQuestions = refineYear93Explanations(refinedQuestions);
refinedQuestions = refineYear94Explanations(refinedQuestions);
refinedQuestions = refineYear95Explanations(refinedQuestions);
refinedQuestions = refineYear96Explanations(refinedQuestions);
refinedQuestions = refineYear97Explanations(refinedQuestions);
refinedQuestions = refineYear98Explanations(refinedQuestions);
refinedQuestions = refineYear99Explanations(refinedQuestions);
refinedQuestions = refineYear100Explanations(refinedQuestions);
refinedQuestions = refineYear101Explanations(refinedQuestions);
refinedQuestions = refineYear102Explanations(refinedQuestions);
refinedQuestions = refineYear103Explanations(refinedQuestions);
refinedQuestions = refineYear104Explanations(refinedQuestions);
refinedQuestions = refineYear105Explanations(refinedQuestions);
refinedQuestions = refineYear106Explanations(refinedQuestions);
refinedQuestions = refineYear107Explanations(refinedQuestions);
refinedQuestions = refineYear108Explanations(refinedQuestions);
refinedQuestions = refineYear109Explanations(refinedQuestions);
refinedQuestions = refineYear110Explanations(refinedQuestions);
refinedQuestions = refineYear111Explanations(refinedQuestions);
refinedQuestions = refineYear112Explanations(refinedQuestions);
refinedQuestions = refineYear113Explanations(refinedQuestions);
refinedQuestions = refineYear114Explanations(refinedQuestions);
refinedQuestions = refineYear115Explanations(refinedQuestions);

export const questions = refineUnit04To11Explanations(refineUnit01To03Explanations(reviewQuestionPlacements(refinedQuestions))).map(attachAiMetadata);

function validateQuestions(rows: BiologyQuestion[]): void {
  const ids = new Set<string>();
  const groups = new Map<string, BiologyQuestion[]>();
  rows.forEach((question) => {
    if (ids.has(question.id)) throw new Error(`Duplicate question ID: ${question.id}`);
    ids.add(question.id);

    const optionIds = new Set(question.options.map((option) => option.id));
    if (question.options.length !== 4 || optionIds.size !== 4) {
      throw new Error(`${question.id}: expected four unique options`);
    }
    if (!optionIds.has(question.officialAnswer)) {
      throw new Error(`${question.id}: official answer is missing from options`);
    }
    if (question.passRate !== null && (question.passRate < 0 || question.passRate > 1)) {
      throw new Error(`${question.id}: pass rate must be between 0 and 1`);
    }
    if (
      question.discrimination !== null &&
      (question.discrimination < -1 || question.discrimination > 1)
    ) {
      throw new Error(`${question.id}: discrimination must be between -1 and 1`);
    }
    const analysisIds = new Set(
      question.explanation.optionAnalysis.map((analysis) => analysis.optionId),
    );
    const explanationCoversOptions =
      question.explanation.optionAnalysisMode === "covered-by-reasoning";
    if (explanationCoversOptions && question.explanation.optionAnalysis.length !== 0) {
      throw new Error(`${question.id}: covered-by-reasoning questions must not repeat option analyses`);
    }
    if (
      !explanationCoversOptions &&
      (analysisIds.size !== 4 || [...optionIds].some((id) => !analysisIds.has(id)))
    ) {
      throw new Error(`${question.id}: every option needs an AI analysis`);
    }
    if (
      !question.aiMetadata ||
      question.aiMetadata.adaptationRules.length < 4 ||
      question.aiMetadata.unitId.endsWith("-general")
    ) {
      throw new Error(`${question.id}: AI generation metadata is incomplete`);
    }
    if (question.questionGroup) {
      groups.set(question.questionGroup.id, [
        ...(groups.get(question.questionGroup.id) ?? []),
        question,
      ]);
    }
  });

  groups.forEach((members, groupId) => {
    const expected = members[0].questionGroup?.memberOriginalNumbers ?? [];
    const actual = members
      .map((question) => question.source.originalNumber)
      .sort((a, b) => a - b);
    if (actual.join(",") !== [...expected].sort((a, b) => a - b).join(",")) {
      throw new Error(`${groupId}: question group members are incomplete`);
    }
  });
}

validateQuestions(questions);
validateYear90ExplanationQuality(questions);
validateYearExplanationQuality(questions, 91, year91ExplanationIds);
validateYearExplanationQuality(questions, 92, year92ExplanationIds);
validateYearExplanationQuality(questions, 93, year93ExplanationIds);
validateYearExplanationQuality(questions, 94, year94ExplanationIds);
validateYearExplanationQuality(questions, 95, year95ExplanationIds);
validateYearExplanationQuality(questions, 96, year96ExplanationIds);
validateYearExplanationQuality(questions, 97, year97ExplanationIds);
validateYearExplanationQuality(questions, 98, year98ExplanationIds);
validateYearExplanationQuality(questions, 99, year99ExplanationIds);
validateYearExplanationQuality(questions, 100, year100ExplanationIds);
validateYearExplanationQuality(questions, 101, year101ExplanationIds);
validateYearExplanationQuality(questions, 102, year102ExplanationIds);
validateYearExplanationQuality(questions, 103, year103ExplanationIds);
validateYearExplanationQuality(questions, 104, year104ExplanationIds);
validateYearExplanationQuality(questions, 105, year105ExplanationIds);
validateYearExplanationQuality(questions, 106, year106ExplanationIds);
validateYearExplanationQuality(questions, 107, year107ExplanationIds);
validateYearExplanationQuality(questions, 108, year108ExplanationIds);
validateYearExplanationQuality(questions, 109, year109ExplanationIds);
validateYearExplanationQuality(questions, 110, year110ExplanationIds);
validateYearExplanationQuality(questions, 111, year111ExplanationIds);
validateYearExplanationQuality(questions, 112, year112ExplanationIds);
validateYearExplanationQuality(questions, 113, year113ExplanationIds);
validateYearExplanationQuality(questions, 114, year114ExplanationIds);
validateYearExplanationQuality(questions, 115, year115ExplanationIds);

const requiredPracticeAssignments: Record<string, string> = {
  "cap-111-nature-17": "microscope",
  "cap-112-nature-31": "circulation",
  "cap-112-nature-22": "blood-and-lymph",
};

Object.entries(requiredPracticeAssignments).forEach(([questionId, practiceUnitId]) => {
  const question = questions.find((row) => row.id === questionId);
  if (question?.aiMetadata?.practiceUnitId !== practiceUnitId) {
    throw new Error(`${questionId}: expected practice unit ${practiceUnitId}`);
  }
});

const expectedBiologyNumbers: Partial<Record<ExamYear, number[]>> = {
  103: [2, 4, 5, 6, 16, 17, 18, 19, 20, 33, 34, 35, 44, 47, 48, 49],
  104: [1, 4, 6, 15, 21, 22, 24, 25, 37, 38, 41, 43, 47, 48],
  105: [6, 7, 8, 13, 14, 16, 17, 28, 32, 36, 44, 47, 48],
  106: [2, 3, 9, 10, 12, 18, 24, 27, 36, 37, 38, 44, 47, 48],
  107: [4, 6, 12, 18, 19, 24, 26, 28, 37, 41, 46, 47, 49, 50],
  108: [4, 5, 6, 17, 19, 22, 25, 32, 37, 40, 41, 45, 51, 52],
  109: [1, 3, 4, 5, 6, 16, 17, 18, 19, 28, 33, 41, 43, 50, 51],
  110: [4, 6, 7, 10, 11, 19, 25, 28, 31, 34, 36, 42, 48, 49],
  111: [4, 5, 8, 11, 17, 18, 23, 26, 32, 35, 39, 45, 46, 50],
  112: [1, 4, 8, 14, 16, 20, 22, 24, 25, 31, 35, 38, 43, 44, 47, 48],
  113: [5, 9, 12, 14, 20, 21, 22, 30, 33, 39, 41, 42, 43, 49],
  114: [3, 8, 12, 20, 22, 24, 27, 30, 34, 35, 36, 45, 46],
  115: [6, 10, 11, 13, 20, 21, 24, 25, 29, 37, 39, 44, 45],
};

Object.entries(expectedBiologyNumbers).forEach(([yearText, expected]) => {
  const year = Number(yearText) as ExamYear;
  const actual = questions
    .filter((question) => question.source.year === year)
    .map((question) => question.source.originalNumber)
    .sort((a, b) => a - b);
  if (actual.join(",") !== expected.join(",")) {
    throw new Error(`${year} CAP biology coverage is incomplete or unexpected`);
  }
});

const expectedBasicFirstNumbers: Partial<Record<ExamYear, number[]>> = {
  90: [3, 5, 7, 12, 13, 16, 17, 18, 21, 22, 23, 31, 32, 34, 35, 36, 37, 38, 53, 54, 55, 56],
  91: [4, 7, 9, 10, 15, 16, 17, 26, 28, 31, 32, 34, 36, 37, 44, 45, 46, 51],
  92: [2, 3, 4, 5, 6, 7, 8, 23, 25, 26, 27, 38, 39, 40, 41, 42, 43, 52, 53],
  93: [5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 27, 28, 29, 30, 39, 40, 41],
  94: [3, 8, 9, 10, 19, 20, 21, 28, 29, 30, 32, 35, 46, 53, 54],
  95: [2, 6, 10, 15, 17, 22, 25, 30, 34, 39, 46, 47, 48, 52, 53],
  96: [3, 4, 7, 8, 9, 10, 11, 16, 27, 29, 30, 31, 32, 37, 46, 53, 54],
  97: [1, 2, 7, 8, 9, 10, 11, 25, 26, 27, 28, 29, 30, 46, 58],
  98: [1, 2, 7, 8, 9, 23, 24, 25, 26, 27, 28, 47, 48, 55, 56],
  99: [1, 2, 8, 9, 10, 11, 12, 13, 26, 27, 28, 29, 30, 47, 48],
  100: [1, 5, 6, 7, 8, 9, 15, 16, 17, 25, 26, 44, 52, 53, 54],
  101: [3, 8, 11, 15, 16, 18, 24, 25, 27, 28, 40, 44, 45, 53, 54],
  102: [3, 4, 6, 8, 10, 11, 22, 24, 25, 26, 27, 44, 49, 55, 56],
};

Object.entries(expectedBasicFirstNumbers).forEach(([yearText, expected]) => {
  const year = Number(yearText) as ExamYear;
  const actual = questions
    .filter(
      (question) =>
        question.source.year === year &&
        question.source.exam === "國民中學學生基本學力測驗" &&
        question.source.session !== "第二次",
    )
    .map((question) => question.source.originalNumber)
    .sort((a, b) => a - b);
  if (actual.join(",") !== expected.join(",")) {
    throw new Error(`${year} Basic Test biology coverage is incomplete or unexpected`);
  }
});

const expectedBasicSecondNumbers: Partial<Record<ExamYear, number[]>> = {
  90: [1, 2, 3, 5, 14, 16, 18, 19, 20, 21, 29, 30, 31, 32, 33, 34, 35, 44, 49],
  91: [2, 3, 6, 7, 8, 9, 11, 12, 17, 20, 22, 24, 25, 27, 32, 33, 41, 43, 47, 49],
  92: [1, 5, 6, 9, 10, 12, 13, 14, 15, 16, 27, 28, 30, 31, 32, 48],
  93: [2, 6, 7, 11, 12, 13, 17, 18, 26, 30, 31, 32, 36, 38, 39],
  94: [1, 4, 6, 9, 13, 15, 20, 25, 27, 29, 39, 49],
  95: [2, 6, 10, 14, 16, 22, 26, 31, 34, 38, 44, 46, 49, 53, 54],
  96: [5, 9, 10, 11, 12, 13, 27, 29, 30, 31, 32, 54, 55, 56],
  97: [1, 2, 7, 8, 9, 10, 24, 25, 26, 27, 44, 54, 55, 56],
  98: [1, 6, 7, 8, 9, 10, 11, 22, 23, 24, 25, 26, 27],
  99: [1, 6, 7, 8, 9, 10, 23, 24, 25, 26, 27, 49, 50, 55, 56],
  100: [1, 5, 7, 8, 10, 11, 19, 21, 22, 26, 27, 31, 44, 45, 55, 56],
};

Object.entries(expectedBasicSecondNumbers).forEach(([yearText, expected]) => {
  const year = Number(yearText) as ExamYear;
  const actual = questions
    .filter(
      (question) =>
        question.source.year === year &&
        question.source.exam === "國民中學學生基本學力測驗" &&
        question.source.session === "第二次",
    )
    .map((question) => question.source.originalNumber)
    .sort((a, b) => a - b);
  if (actual.join(",") !== expected.join(",")) {
    throw new Error(`${year} second Basic Test biology coverage is incomplete or unexpected`);
  }
});

export const questionById = Object.fromEntries(
  questions.map((question) => [question.id, question]),
);
