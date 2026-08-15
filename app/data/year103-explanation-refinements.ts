import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-103-nature-2": {
    summary: "恐龍早在人類出現前就已滅絕；裝飾品使用的是恐龍牙齒化石，最合理的解釋是原始人類從地層中撿到化石後加以利用。",
    reasoning: "遺跡中同時出現某些材料，只能證明人類曾蒐集並使用它們，不能證明材料所屬的生物與人類同時生活。象牙可來自同時代大象，恐龍牙齒則是更早年代留下的化石。",
  },
  "cap-103-nature-4": {
    summary: "能量塔由下往上依序是矽藻、浮游動物、小魚、大魚，因此位於倒數第二層的乙代表小魚。",
    reasoning: "矽藻是生產者，構成能量最多的塔底丁；能量沿食物鏈逐級減少，浮游動物、小魚與大魚依序位於丙、乙、甲。",
  },
  "cap-103-nature-5": {
    summary: "是否接聽電話屬有意識的判斷，由大腦整合聽覺訊息後決定。",
    reasoning: "耳朵只負責接受聲音刺激，聽覺在大腦形成；接聽、說話與拿起話筒都是大腦參與的隨意反應，不是由腦幹產生語句或由脊髓單獨決定動作速度。",
  },
  "cap-103-nature-6": {
    summary: "兩種環境中的背景色不同，較不顯眼的殼色個體較易存活並繁殖，久而久之形成不同殼色比例。",
    reasoning: "天擇是環境篩選族群原有的遺傳變異，不是背景顏色使個體定向突變或改變殼色。不同殼色的隱蔽效果不同，被捕食的機率也不會相同。",
  },
  "cap-103-nature-16": {
    summary: "剪除部分枝葉的主要目的是減少葉面積與蒸散失水，不是幫助莖內的水上升，因此這組建議與理由不相符。",
    reasoning: "移植時根系吸水能力暫時下降，宜在夜間操作、保留根部附土並避免高濃度肥料，以降低蒸散、根部損傷與滲透失水。",
  },
  "cap-103-nature-17": {
    summary: "血液由肝臟回到心臟後，須先經肺取得氧氣，再回心臟送往身體其他部位，路徑為丁→乙→甲→乙→丙。",
    reasoning: "肝臟屬體循環的一部分，靜脈血先回右心，再經肺循環到肺，回左心後才由體循環送往其他器官；不能略過肺循環或由肝臟直接流到肺。",
  },
  "cap-103-nature-18": {
    summary: "受精卵、幼蟲、蛹與成蟲是同一個體的不同發育階段，正常體細胞的染色體數目都相同。",
    reasoning: "昆蟲變態會改變外形和組織功能，但各階段的體細胞主要由有絲分裂產生；題目又排除生殖細胞與突變，所以染色體套數不會隨階段改變。",
  },
  "cap-103-nature-19": {
    summary: "試管沒有有機物，只有能利用光能和二氧化碳自行製造養分的藍綠菌可望生長繁衍。",
    reasoning: "藍綠菌能行光合作用，光照期間可固定二氧化碳製造有機物；草履蟲、酵母菌和一般大腸桿菌都是異營生物，需要環境提供現成有機物。",
  },
  "cap-103-nature-20": {
    summary: "海岸無脊椎動物分布與紅樹林生物組成都同時涉及多種族群，最符合群集研究，因此選 15 日與 29 日。",
    reasoning: "群集是同一地區中所有不同物種族群的集合。黑面琵鷺覓食與櫻花鉤吻鮭繁衍主要聚焦單一物種，較偏個體行為或族群層次。",
  },
  "cap-103-nature-33": {
    summary: "不會開花的植物包含蘚苔、蕨類與裸子植物，比例合計為 26.1%＋10.9%＋1.5%＝38.5%。",
    reasoning: "61.5% 是全部被子植物而非只有雙子葉植物；無維管束者主要是蘚苔植物 26.1%；只有被子植物能形成果實，裸子植物雖有種子卻不結果。",
  },
  "cap-103-nature-34": {
    summary: "根、莖、葉、花、果實和種子的活細胞都需要能量，因此所有器官都會分解葡萄糖進行呼吸作用。",
    reasoning: "光合作用只在具有光合構造的細胞進行，但呼吸作用是活細胞取得可用能量的共同過程；葉片一面光合作用，也同時持續呼吸。",
  },
  "cap-103-nature-35": {
    summary: "胃液不含分解澱粉的酵素，所以「胃液＋澱粉液」不會產生還原糖，加入本氏液加熱後不變色。",
    reasoning: "唾液澱粉酶在 pH 6～7 可把澱粉分解成能使本氏液變色的糖；另兩支原本就加入葡萄糖，也會呈陽性。把胃液調成中性不會使其中憑空出現澱粉酶。",
  },
  "cap-103-nature-44": {
    summary: "父親把 X 染色體傳給所有女兒，因此女兒的肌肉細胞必定具有父親 X 上的該基因。",
    reasoning: "兒子由父親取得 Y 染色體，不取得這條 X；女兒雖必有父親的 X，但形成卵細胞時兩條 X 會分離，所以不是每顆卵都必帶該基因。一般肌肉細胞則保有成對性染色體。",
  },
  "cap-103-nature-47": {
    summary: "表中激素 Z 注射前後血糖由 5.5 升至 6.7 mmol/L，只有圖 D 的黑柱高於白柱且數值相符。",
    reasoning: "逐項核對可排除其餘圖：X 使血鈣由 2.4 升至 3.1，不是下降；Y 使血糖由 5.5 降至 3.8，不是上升；Z 注射前後血鈣皆為 2.4，沒有下降。",
  },
  "cap-103-nature-48": {
    summary: "激素 Y 使血糖由 5.5 降至 3.8 mmol/L，最符合能降低血糖的胰島素。",
    reasoning: "胰島素促進細胞利用葡萄糖並把多餘葡萄糖轉為肝糖儲存；升糖素與腎上腺素通常使血糖上升，副甲狀腺素主要調節血鈣。",
  },
  "cap-103-nature-49": {
    summary: "澱粉是多醣，蔗糖是雙醣，兩者都屬醣類，也就是碳水化合物。",
    reasoning: "它們可作為人體能量來源，但不屬脂質或蛋白質；澱粉雖是天然聚合物，蔗糖卻不是聚合物，更不是人工合成聚合物。",
  },
};

export function refineYear103Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year103ExplanationIds = new Set(Object.keys(refinements));
