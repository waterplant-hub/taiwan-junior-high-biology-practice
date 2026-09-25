import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, writeFileSync, copyFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";
import { after, test } from "node:test";
import ts from "typescript";

// Compile the real data pipeline independently of browser bundling. This also
// executes all existing coverage, answer and explanation validation checks.
const scratch = mkdtempSync(join(tmpdir(), "biology-curriculum-test-"));
after(() => rmSync(scratch, { recursive: true, force: true }));
for (const folder of ["data", "lib"]) {
  const dir = new URL(`../app/${folder}/`, import.meta.url);
  mkdirSync(join(scratch, folder));
  for (const name of readdirSync(dir)) {
    if (folder === "lib" && name !== "practice.ts") continue;
    if (name.endsWith(".json")) copyFileSync(new URL(name, dir), join(scratch, folder, name));
    if (!name.endsWith(".ts")) continue;
    const { outputText } = ts.transpileModule(readFileSync(new URL(name, dir), "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    });
    writeFileSync(join(scratch, folder, name.replace(/\.ts$/, ".js")), outputText);
  }
}
const require = createRequire(import.meta.url);
const { questions, questionById } = require(join(scratch, "data/questions.js"));
const { practiceUnits } = require(join(scratch, "data/practice-units.js"));
const { buildSessionQuestions } = require(join(scratch, "lib/practice.js"));
const { refineUnit01To03Explanations, unit01To03ExplanationRevisionIds } = require(join(scratch, "data/unit01-03-explanation-review.js"));

test("unit 01–03 explanation pass changes only explanations of its reviewed targets", () => {
  const input = structuredClone(questions);
  const before = structuredClone(input);
  const result = refineUnit01To03Explanations(input);
  assert.deepEqual(input, before, "the input is not mutated");
  assert.equal(result.length, 567);
  const withoutExplanation = ({ explanation, ...rest }) => rest;
  assert.deepEqual(result.map(withoutExplanation), before.map(withoutExplanation));
  assert.equal(unit01To03ExplanationRevisionIds.size, 42);
  for (let i = 0; i < result.length; i++) {
    const q = result[i];
    if (!unit01To03ExplanationRevisionIds.has(q.id)) {
      assert.strictEqual(q, input[i], q.id);
      continue;
    }
    assert.ok(["science-and-life", "cells", "nutrition-and-energy"].includes(q.chapterId));
    assert.equal(q.explanation.provenance, "ai-generated");
    assert.equal(q.explanation.reviewStatus, "unreviewed");
    assert.equal(q.explanation.optionAnalysisMode, "covered-by-reasoning");
    assert.deepEqual(q.explanation.optionAnalysis, []);
    const text = `${q.explanation.summary}\n${q.explanation.reasoning}`;
    assert.doesNotMatch(text, /選項 [A-D]|因此選 [A-D]|故選 [A-D]|先定位血液成分|此選項與題圖資料/, q.id);
  }
});

test("reviewed explanations retain concrete reasoning for known misconceptions", () => {
  const explanation = id => Object.values(questionById[id].explanation).join(" ");
  assert.match(explanation("basic-93-first-nature-6"), /不會再把它翻轉/);
  assert.match(explanation("basic-90-second-nature-18"), /丁是調節輪/);
  assert.match(explanation("basic-91-first-nature-51"), /脂肪也算成 4 大卡/);
  assert.match(explanation("cap-110-nature-7"), /每公克的細菌數，不是整杯/);
  assert.match(explanation("basic-96-first-nature-37"), /同一物質的不同名稱/);
  assert.match(explanation("cap-115-nature-37"), /把小分子組合起來合成 X/);
  assert.doesNotMatch(explanation("basic-92-first-nature-40"), /水勢|非極性/);
});

test("all 567 questions have consistent reviewed metadata and unique IDs", () => {
  assert.equal(questions.length, 567);
  assert.equal(new Set(questions.map(q => q.id)).size, 567);
  for (const q of questions) {
    const unit = practiceUnits.find(u => u.id === q.practiceUnitId);
    assert.equal(unit?.chapterId, q.chapterId, q.id);
    assert.equal(q.aiMetadata.practiceUnitId, unit.id, q.id);
    assert.equal(q.aiMetadata.practiceUnitName, unit.name, q.id);
  }
});

test("nutrition and homeostasis follow the supplied semester-one contents", () => {
  const names = chapter => practiceUnits.filter(u => u.chapterId === chapter).sort((a,b) => a.order-b.order).map(u => u.name);
  assert.deepEqual(names("nutrition-and-energy"), ["食物中的養分", "酵素", "植物如何製造養分", "人體如何獲得養分"]);
  assert.deepEqual(names("homeostasis"), ["呼吸與氣體的恆定", "血糖的恆定", "排泄與水分的恆定", "體溫的恆定"]);
  for (const q of questions.filter(q => q.chapterId === "nutrition-and-energy")) {
    assert.doesNotMatch(q.topic, /呼吸作用|發酵|血糖|尿酸/, q.id);
  }
});

test("prerequisite regressions are assigned to the appropriate lessons", () => {
  const expected = {
    "cap-115-nature-24": "breathing",
    "cap-111-nature-18": "breathing",
    "cap-106-nature-18": "breathing",
    "basic-99-second-nature-50": "blood-glucose",
    "basic-96-second-nature-32": "blood-glucose",
    "cap-112-nature-24": "nutrients-and-enzymes",
    "basic-98-first-nature-7": "five-kingdoms",
    "basic-95-first-nature-39": "microscope-and-cells",
    "cap-112-nature-31": "circulation",
    "basic-96-second-nature-56": "reproductive-modes",
    "cap-110-nature-31": "five-kingdoms",
    "cap-110-nature-42": "digestion",
    "basic-90-first-nature-18": "nutrients-and-enzymes",
    "cap-106-nature-48": "scientific-method",
    "basic-91-first-nature-4": "circulation",
  };
  for (const [id, unit] of Object.entries(expected)) assert.equal(questionById[id].practiceUnitId, unit, id);
});

test("chapter and subsection pools contain whole groups, including single-question mode", () => {
  const grouped = new Map();
  for (const q of questions.filter(q => q.questionGroup)) {
    const id = q.questionGroup.id;
    grouped.set(id, [...(grouped.get(id) ?? []), q]);
  }
  for (const [id, members] of grouped) {
    assert.equal(new Set(members.map(q => q.chapterId)).size, 1, id);
    assert.equal(new Set(members.map(q => q.practiceUnitId)).size, 1, id);
    assert.deepEqual(buildSessionQuestions(members, "chapter", 1).map(q => q.question.id).sort(), members.map(q => q.id).sort(), id);
  }
  assert.equal(questionById["cap-110-nature-48"].chapterId, "evolution");
  assert.equal(questionById["cap-110-nature-48"].aiMetadata.curriculum.currentStatus, "舊課綱限定");
  assert.equal(questionById["basic-98-first-nature-55"].chapterId, "evolution");
});
