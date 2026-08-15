import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-105-nature-6": {
    summary: "生態系的平衡是動態平衡；外來種大量繁衍會改變原有物種間的關係與族群數量，因此可能破壞原來的平衡。",
    reasoning: "平衡時物質仍持續循環、能量仍逐級傳遞且散失。族群數量穩定也不代表出生數必等於死亡數，還要同時考慮遷入與遷出。",
  },
  "cap-105-nature-7": {
    summary: "具有葉綠體表示可進行光合作用；能分解養分產生能量表示可進行呼吸作用，因此兩種作用都能進行。",
    reasoning: "光合作用製造有機養分，呼吸作用分解養分並釋放細胞可用的能量。能行光合作用的細胞仍需呼吸，兩者不是互斥的作用。",
  },
  "cap-105-nature-8": {
    summary: "圖中動物體溫會隨環境溫度明顯改變，符合外溫動物，主要由外界環境取得熱量調節體溫。",
    reasoning: "內溫動物主要靠代謝產熱，體溫在一定環境範圍內較穩定；題圖沒有呈現這種穩定性，因此不能判為內溫動物。",
  },
  "cap-105-nature-13": {
    summary: "箱內沒有光線方向，幼苗主要表現莖的背地性；莖由乙面朝相反方向彎曲生長，表示乙面最可能接觸地面。",
    reasoning: "黑暗中無法表現向光性，但仍能感受重力。莖會朝與重力相反的方向生長，所以可由末端的向上方向反推箱子的底面。",
  },
  "cap-105-nature-14": {
    summary: "換物鏡後看到的細胞數減少，表示倍率提高、視野範圍縮小；丙比乙長、倍率較高，因此是換成丙。",
    reasoning: "物鏡通常越長倍率越高。總倍率提高時單一細胞影像變大，但能看見的實際標本範圍變小，所以視野中的細胞數會減少。",
  },
  "cap-105-nature-16": {
    summary: "家燕與家雨燕同綱但不同目；既然「目」已不同，位於目以下的科、屬、種必然也不同。",
    reasoning: "分類階層由大到小為界、門、綱、目、科、屬、種。只知道屬或種不同，不能反推科必不同；但目不同即可確定不會同科。",
  },
  "cap-105-nature-17": {
    summary: "向日葵的甲是子房，發育成的帶殼葵瓜子屬果實；南瓜的乙是胚珠，發育成的帶殼南瓜子屬種子。",
    reasoning: "受精後子房發育成果實，胚珠發育成種子。日常名稱雖都叫「瓜子」，仍要依它們分別由雌蕊哪一構造發育判定。",
  },
  "cap-105-nature-28": {
    summary: "乙管原本加入澱粉，最後碘液仍呈黃褐色，表示澱粉已被分解，因此溶液 X 最可能含有分解澱粉的酵素。",
    reasoning: "碘液遇澱粉才呈藍黑色。甲管加入葡萄糖、丙管加入水，本來就沒有額外澱粉；只有乙管能證明 X 使澱粉消失，不能據此判定 X 是澱粉或葡萄糖。",
  },
  "cap-105-nature-32": {
    summary: "依流向可判定甲是靜脈、丙是動脈，兩者的血液都有紅血球；乙是淋巴管，正常淋巴中沒有紅血球。",
    reasoning: "心臟把血液送入動脈丙，經微血管後由靜脈甲回心；部分組織液進入淋巴管乙，最後回流到靜脈。紅血球通常不會由微血管滲入組織液。",
  },
  "cap-105-nature-36": {
    summary: "由樹皮表面 X 向樹幹中心依序是韌皮部甲、形成層丙、木質部乙，所以距離為甲＜丙＜乙。",
    reasoning: "甲的功能是運輸有機養分，對應外側韌皮部；丙能細胞分裂，對應形成層；乙運輸水分，對應較內側木質部。",
  },
  "cap-105-nature-44": {
    summary: "女兒必帶此基因，表示丈夫帶有該基因；兒子必無此基因，表示妻子的兩條 X 都沒有。因此妻及把 X 傳給她的父親一定都沒有。",
    reasoning: "女兒的其中一條 X 必來自父親，兒子的 X 則只來自母親。妻子的父親一定把一條不含該基因的 X 傳給妻；妻母親的另一條 X 是否帶因則仍無法確定。",
  },
  "cap-105-nature-47": {
    summary: "無根萍雖沒有明顯根、莖、葉，卻具有雄蕊、雌蕊並能開花結果，因此屬被子植物。",
    reasoning: "分類要依生殖構造，而不能只看營養器官外形。能開花並由子房形成果實是被子植物的關鍵特徵，蘚苔、蕨類與裸子植物都不形成果實。",
  },
  "cap-105-nature-48": {
    summary: "無根萍主要以植株長出小芽繁殖，屬無性生殖；不考慮突變時，這種方式不會增加子代的遺傳變異。",
    reasoning: "小芽由體細胞的有絲分裂形成，不需減數分裂或配子結合。無根萍仍能開花，所以也能形成胚珠和生殖細胞，只是文章指出主要繁殖方式是出芽。",
  },
};

export function refineYear105Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year105ExplanationIds = new Set(Object.keys(refinements));
