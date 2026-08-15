import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "basic-101-first-nature-3": {
    summary: "小智先以眼睛接收小明出剪刀的視覺刺激，再由大腦判斷並控制手部出石頭，因此最先接受刺激的是眼睛。",
    reasoning: "這是經思考後的隨意動作，不是反射；手是執行動作的動器，不負責作決定，整個過程也不是由腦幹單獨控制。",
  },
  "basic-101-first-nature-8": {
    summary: "圖 D 的開口打開且幼苗保持靜止，光只從單側照入，幼苗會朝光源產生最明顯的彎曲。",
    reasoning: "開口關閉時沒有方向性光刺激；旋轉器持續轉動則使各側平均受光，都不易形成固定方向的強烈向光彎曲。",
  },
  "basic-101-first-nature-11": {
    summary: "蘚苔植物沒有真正的維管束，因此介紹維管束植物的書中最可能沒有其詳細資料。",
    reasoning: "蕨類、裸子植物與被子植物都具有木質部、韌皮部等維管束構造。",
  },
  "basic-101-first-nature-15": {
    summary: "阿平的生態瓶具有水草、吃水草的蝦及含微生物的水，包含生產者、消費者與分解者，最符合物質循環。",
    reasoning: "水草製造有機物，蝦取食水草，微生物分解遺體與排遺並釋出無機物供水草再利用；缺少生產者或分解者都不利於密閉瓶長期循環。",
  },
  "basic-101-first-nature-16": {
    summary: "60～120 分鐘血糖由 160 降至 110，可能是胰島素促進葡萄糖轉成肝糖儲存。",
    reasoning: "飲料是葡萄糖液而非澱粉；血糖上升時胰島素應增加，腎上腺素則會促使血糖上升，皆不能解釋後段下降。",
  },
  "basic-101-first-nature-18": {
    summary: "橡皮軟管阻礙手掌端靜脈血回流心臟，血液淤積在綁帶下方，使靜脈血量增加並浮現。",
    reasoning: "靜脈管壁較薄、壓力較低，較容易被綁帶壓迫；動脈血仍可流向手掌，但回心途徑受阻。",
  },
  "basic-101-first-nature-24": {
    summary: "能量最多的丁最可能是食物鏈底層的生產者；生產者行光合作用時可釋出氧氣。",
    reasoning: "能量由生產者傳向各級消費者，每次傳遞都會散失一部分，因此營養階層愈高，總能量通常愈少。",
  },
  "basic-101-first-nature-25": {
    summary: "粒線體是細胞進行有氧呼吸、分解養分並釋放可用能量的主要場所。",
    reasoning: "細胞膜控制物質進出，細胞核保存遺傳物質並調控活動，葉綠體利用光能製造養分；都不是題目所問分解養分產生能量的直接場所。",
  },
  "basic-101-first-nature-27": {
    summary: "灰色區域只屬於爬蟲類；三組中只有爬蟲類是脊椎動物，因此該特徵最可能是具有脊椎骨。",
    reasoning: "三者的細胞都有細胞核；身體分節是節肢動物的重要特徵，管足則是棘皮動物的特徵。",
  },
  "basic-101-first-nature-28": {
    summary: "分解脂質的脂肪酶主要在小腸中作用，因此選 D。",
    reasoning: "酵素具有受質專一性，脂肪酶不能因此分解蛋白質；酵素本身主要是蛋白質，且由消化腺經導管分泌至消化管，不是由血液運送。",
  },
  "basic-101-first-nature-40": {
    summary: "乙是對研究問題提出的暫時性答案，屬提出假設；丙改變結繭空間並觀察結果，屬設計與進行實驗。",
    reasoning: "丁是兩種空間下繭形差異的實驗紀錄，屬結果而非假設；科學方法應先由問題形成可檢驗假設，再設計實驗蒐集資料。",
  },
  "basic-101-first-nature-44": {
    summary: "乙圖的肺部範圍較大，表示吸氣後胸腔容積增加，因此選 B。",
    reasoning: "吸氣時橫膈收縮下降、胸腔與肺的容積增大；呼氣時橫膈上升、肺縮小。乙圖同時呈現較大的肺與較低的橫膈位置。",
  },
  "basic-101-first-nature-45": {
    summary: "甲為 Rr，若約一半子代呈隱性 rr，乙最可能是 rr，因此乙形成的精細胞都帶 r。",
    reasoning: "Rr×rr 可產生約一半 Rr、約一半 rr。精細胞是配子，只帶一個遺傳因子，不會帶成對的 rr。",
  },
  "basic-101-first-nature-53": {
    summary: "西瓜種子由花中的胚珠在受精後發育而來，因此瓜子源自胚珠。",
    reasoning: "子房發育成果實；花藥產生花粉；花托位於花的基部，都不會直接發育成種子。",
  },
  "basic-101-first-nature-54": {
    summary: "瓜子西瓜的大種子屬栽培品種的遺傳性狀；方形西瓜只是果實受盒子外力塑形，種子自然生長仍形成圓形果實。",
    reasoning: "後天受到外力造成的果實外形不會改變種子中的遺傳物質，也不會遺傳給下一代，因此結果為瓜子西瓜及圓形西瓜。",
  },
};

export function refineYear101Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
  return questions.map((question) => {
    const refinement = refinements[question.id];
    if (!refinement) return question;
    return {
      ...question,
      explanation: {
        ...question.explanation,
        summary: refinement.summary,
        reasoning: refinement.reasoning,
        optionAnalysisMode: "covered-by-reasoning",
        optionAnalysis: [],
      },
    };
  });
}

export const year101ExplanationIds = new Set(Object.keys(refinements));
