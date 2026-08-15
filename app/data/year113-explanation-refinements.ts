import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-113-nature-5": {
    summary: "激素由血液運送；副甲狀腺素分泌過多會使骨骼中的鈣釋出，長期可能降低骨鈣而造成骨質疏鬆，所以 X 是血液、Y 是鈣。",
    reasoning: "內分泌腺的分泌物不是由消化液運送。骨骼的重要礦物質以鈣為主，鉀並不是題目所指的骨質疏鬆關鍵成分。",
  },
  "cap-113-nature-9": {
    summary: "灑鹽使細胞外溶液濃度升高，水經滲透作用由細胞內移向外界，細胞膜與內容物縮離細胞壁，符合小凱的圖。",
    reasoning: "植物細胞壁仍維持外形，縮小的是細胞膜內部。題目要解釋的主要變化是水分移動，不是鹽由細胞內流出或靠鹽流入把細胞撐大。",
  },
  "cap-113-nature-12": {
    summary: "Aa×Aa 的子代基因型比例約為 AA：Aa：aa＝1：2：1；AA、Aa 都是長翅，所以長翅：短翅約為 3：1。",
    reasoning: "只觀察 10 隻得到 4：6，樣本太少，不能直接推估 1000 隻。大量子代的比例應接近理論機率，而不是全為某一表現型或長短翅 1：3。",
  },
  "cap-113-nature-14": {
    summary: "乙時期曲線上升，表示族群增加，因此出生＋遷入＞死亡＋遷出。",
    reasoning: "甲也略為上升，不符合流失大於增加；丙數量穩定時應是出生＋遷入約等於死亡＋遷出；丁下降時則是出生＋遷入＜死亡＋遷出。C、D 又把不相對應的出生死亡與遷入遷出相加比較。",
  },
  "cap-113-nature-20": {
    summary: "『所有刺絲胞動物都生活在海洋』是全稱敘述；只要在淡水找到一種刺絲胞動物，就能以反例證明此說法不成立。",
    reasoning: "在海洋找到海月水母或很多刺絲胞動物，只能提供符合說法的例子，不能排除仍有淡水種類。從海月水母找到刺絲胞則只能確認其分類，不能驗證棲地是否全為海洋。",
  },
  "cap-113-nature-21": {
    summary: "發芽率要用發芽數除以播種數：甲 100/500＝20%，乙 80/400＝20%，丙 80/350≈22.9%，所以甲、乙相等。",
    reasoning: "不能只比較發芽顆數，因三品牌播種總數不同。丙的發芽數雖與乙同為 80，比例反而較高，也不是最不容易發芽。",
  },
  "cap-113-nature-22": {
    summary: "形成層外側是輸送養分的韌皮部，剔除後葉片製造的醣類無法送到根；具有環狀形成層的莖較符合雙子葉植物，因此只有小書合理。",
    reasoning: "單子葉植物莖的維管束多散生，通常沒有題述的環狀形成層。根部死亡不是因水分無法上升，而是外側韌皮部被破壞、養分運輸中斷。",
  },
  "cap-113-nature-30": {
    summary: "青蛙體細胞有 1 對性染色體；減數分裂使染色體套數減半，因此每個卵子只有其中 1 條性染色體。",
    reasoning: "13 是卵子的染色體總條數，不是性染色體數；2 是體細胞的一對性染色體，26 則是體細胞全部染色體條數。",
  },
  "cap-113-nature-33": {
    summary: "丙是腎臟，功能是形成尿液；乙血管氧氣較高，應是進入腎臟的腎動脈，血液流經腎臟後由氧氣較低的甲離開，所以路徑為乙→丙→甲。",
    reasoning: "尿素主要在肝臟形成，腎臟負責從血液濾出尿素等物質形成尿液。器官細胞會消耗氧氣，因此進入端氧氣應高於流出端。",
  },
  "cap-113-nature-39": {
    summary: "二名法的第一個字 Rhododendron 是屬名；搜尋第一個字相同、第二個字不同的學名，才能找到同屬不同種植物。",
    reasoning: "Ericaceae 是科名，不是二名法中的屬名；oldhamii 是種小名，單獨相同不保證同屬；完整搜尋 Rhododendron oldhamii 只會找到原物種。",
  },
  "cap-113-nature-41": {
    summary: "10:30 起以 85°C 加工，已超過 75°C，使酵素 X 永久失去活性；此後不再產生乙，因此 10:50 與 11:00 的乙含量最相近。",
    reasoning: "10:00～10:30 間酵素仍持續把甲轉成乙，不同時間點的乙會累積增加。之後即使 10:50 降回 35°C，已被高溫破壞的酵素也不會恢復。",
  },
  "cap-113-nature-42": {
    summary: "食蛇龜因市場需求被大量捕捉並運往中國，野外數量因此下降，面臨的是過度捕捉。",
    reasoning: "本文沒有提到棲地遭破壞、污染或外來種競爭；判斷保育威脅時應直接依造成數量下降的敘述，不必另推測未提供的原因。",
  },
  "cap-113-nature-43": {
    summary: "EN 是瀕危（Endangered），在 IUCN 分類中屬於生存受脅物種，但尚未滅絕。",
    reasoning: "EN 不是低風險，也不是尚未評估；它與易危、極危同屬需要保育關注的受脅等級。",
  },
  "cap-113-nature-49": {
    summary: "二氧化碳濃度的季節性升降每年完成一個週期；圖中約有 5 個週期，因此時間範圍約為 5 年。",
    reasoning: "春夏光合作用與秋冬分解作用的交替以一年為尺度，不是星期或月份；圖中也只有約五次週期，不能解讀成 50 年。",
  },
};

export function refineYear113Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year113ExplanationIds = new Set(Object.keys(refinements));
