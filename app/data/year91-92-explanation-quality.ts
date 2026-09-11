import type { BiologyQuestion, ExamYear } from "./types";

const forbiddenTemplateFragments = [
  "依官方題圖資料與",
  "此選項與題圖資料或",
  "先定位血液成分或循環路徑",
  "依植物維管束或人體血液循環",
  "先確認題目涉及的養分",
  "依化石證據、分類階層",
];

export function validateYearExplanationQuality(
  questions: BiologyQuestion[],
  year: Exclude<ExamYear, 90>,
  expectedIds: Set<string>,
): void {
  const rows = questions.filter((question) => question.source.year === year);

  if (rows.length !== expectedIds.size) {
    throw new Error(
      `${year} 年逐題詳解不完整：題庫 ${rows.length} 題，詳解 ${expectedIds.size} 題`,
    );
  }

  const explanationSignatures = new Set<string>();
  rows.forEach((question) => {
    if (!expectedIds.has(question.id)) {
      throw new Error(`${question.id}: 缺少 ${year} 年逐題詳解`);
    }

    const allText = [
      question.explanation.summary,
      question.explanation.reasoning,
      ...question.explanation.optionAnalysis.map((row) => row.reason),
    ].join("\n");

    forbiddenTemplateFragments.forEach((fragment) => {
      if (allText.includes(fragment)) {
        throw new Error(`${question.id}: 仍含空泛批次模板「${fragment}」`);
      }
    });

    if (question.explanation.optionAnalysisMode !== "covered-by-reasoning") {
      if (question.explanation.optionAnalysis.some((row) => row.reason.length < 18)) {
        throw new Error(`${question.id}: 選項解析過短`);
      }

      const officialReason = question.explanation.optionAnalysis.find(
        (row) => row.optionId === question.officialAnswer,
      )?.reason;
      if (
        !officialReason ||
        (!officialReason.includes("正確") &&
          !officialReason.includes("本題要找") &&
          !officialReason.includes("官方答案"))
      ) {
        throw new Error(`${question.id}: 官方答案列未明確標示判斷`);
      }
    }

    const signature = `${question.explanation.summary}\n${question.explanation.reasoning}`;
    if (explanationSignatures.has(signature)) {
      throw new Error(`${question.id}: 與同年度其他題目共用相同詳解`);
    }
    explanationSignatures.add(signature);
  });
}
