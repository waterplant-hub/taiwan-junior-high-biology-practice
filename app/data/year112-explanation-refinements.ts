import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-112-nature-1": {
    summary: "原始森林改種單一樹種後，生產者種類減少，能提供的食物與棲地也變少，食物網會簡化，使生態系較不穩定。",
    reasoning: "單一樹種不會增加生產者物種數；依賴不同植物的消費者也可能減少。食物網越簡單，當某一物種受疾病或環境變化影響時，可替代的能量傳遞路徑越少。",
  },
  "cap-112-nature-4": {
    summary: "毛黴菌屬真菌，不能行光合作用，因此不具葉綠體。",
    reasoning: "毛黴菌可形成孢子繁殖，真菌細胞也有粒線體進行呼吸作用，細胞外具有細胞壁；這些構造不能因其以菌絲覆蓋豆腐就判定不存在。",
  },
  "cap-112-nature-8": {
    summary: "血糖急升後，胰島會增加分泌胰島素，促使細胞利用葡萄糖並使血糖下降。",
    reasoning: "胰島素由胰臟內的胰島分泌，不是肝臟。升糖素同樣由胰島分泌，但功能是提高血糖，與題幹所述快速降血糖相反。",
  },
  "cap-112-nature-14": {
    summary: "DDT 難分解，會沿食物鏈產生生物放大；濃度由低到高為丁 0.04、乙 0.2、甲 2.0、丙 20 ppm，所以食性可能是丁→乙→甲→丙。",
    reasoning: "生產者通常位在濃度最低的食物鏈起點，故最可能是丁；丙濃度最高，才是最高階消費者。甲位於中間，不能判成三級消費者。",
  },
  "cap-112-nature-16": {
    summary: "反應消耗二氧化碳並產生氧氣，是光合作用；甲為水，水和礦物質主要由木質部向上運送。",
    reasoning: "葡萄糖是光合作用的產物乙，不是反應物甲。韌皮部主要運送葉片製造的醣類，不能和木質部的水分運輸功能對調。",
  },
  "cap-112-nature-20": {
    summary: "Lil-2 與 Myr-6 的屬名分別為 Lilium、Syzygium，可確定不同屬，但只憑學名無法確定是否同目，因此 B 無法確定。",
    reasoning: "Lil-2、Lil-3 同屬 Lilium，必同科；Lil-1 的 Dianella 與 Lil-2 不同屬，Myr-6 也與 Lil-2 不同屬。不同屬不代表一定不同目，還需更高分類資料。",
  },
  "cap-112-nature-22": {
    summary: "第 5 天起體溫超出恆定範圍，可視為開始發病；潛伏期 1～3 天，感染時間應落在第 2～4 天，選項中只有第 3 天。",
    reasoning: "第 1 天距發病超過 3 天；第 6 天已在發病期間，不是潛伏期前的感染日；第 8 天則晚於症狀出現。判斷時要由首次異常體溫向前回推。",
  },
  "cap-112-nature-24": {
    summary: "葡萄糖可穿膜，平衡後試管與燒杯都有葡萄糖，以本氏液加熱檢測時兩者皆會變色。",
    reasoning: "澱粉不能穿膜，仍只在燒杯中，因此碘液只會使燒杯液呈藍黑色。選項 A、B 把澱粉位置判錯，C 又忽略葡萄糖會擴散到燒杯。",
  },
  "cap-112-nature-25": {
    summary: "要延緩蘋果熟化，應降低呼吸作用所需的氧氣並提高二氧化碳比例；圖 D 顯示氧氣下降、二氧化碳略升後維持低氧環境。",
    reasoning: "熟化過程需要氧氣，持續維持一般空氣比例或讓氧氣升高都不利保存。二氧化碳不是熟化所需的反應物，適度提高可配合低氧抑制代謝。",
  },
  "cap-112-nature-31": {
    summary: "血流由小動脈經微血管到小靜脈，題圖由左至右依序如此；培養皿往左移時，複式顯微鏡影像往右移，所以由右側開始消失：小靜脈→微血管→小動脈。",
    reasoning: "這題要先用血流箭頭辨認三種血管，再套用複式顯微鏡影像與玻片移動方向相反的特性；只完成其中一步就會選到相反順序。",
  },
  "cap-112-nature-35": {
    summary: "受精後子房發育成果實，所以草莓表面由子房形成的星號構造是真正的果實。",
    reasoning: "草莓可食的紅色部分主要由花托膨大，不是子房；胚珠會發育成種子，花粉則負責傳遞精細胞，都不符合題目指定的子房來源。",
  },
  "cap-112-nature-38": {
    summary: "父母都未患病，表示兩人都沒有致病的 F，基因型皆為 ff；阿佑的 F 是新發生的突變。",
    reasoning: "只要帶有致病 F 就可能表現疾病，故 Ff 或 FF 的父母不符合『皆未患病』。題目已明示阿佑因突變患病，不必假設 F 由父母遺傳。",
  },
  "cap-112-nature-43": {
    summary: "胺基酸來自蛋白質消化，牛奶蛋白質 3 g 高於燕麥奶 1.3 g；牛奶糖 4.5 g 又低於燕麥奶 8.1 g，因此兩人都選牛奶。",
    reasoning: "壯壯應比較蛋白質而不是脂肪、鈣或膳食纖維；安安則直接比較糖含量。兩項需求剛好都由同一種飲品符合。",
  },
  "cap-112-nature-44": {
    summary: "相同碳排放總量下，每 200 mL 排放越少的飲品可生產越多；圖中杏仁奶碳排放最低，因此可生產最多。",
    reasoning: "題目只指定碳排放，不能混入土地面積、用水量或營養成分判斷。牛奶、米漿與燕麥奶每份排放都高於杏仁奶。",
  },
  "cap-112-nature-47": {
    summary: "乙用清水浸泡的抑制率 34.21%，丁加蔬果洗滌劑後降至 18.42%，顯示添加物反而可能較好，所以觀點①不恰當。",
    reasoning: "比較添加物效果須選其他條件相同的浸泡組；乙、丁只差是否加洗滌劑。直接沖洗的戊為 2.52%，低於各浸泡組，資料反而支持觀點②，不能說它不恰當。",
  },
  "cap-112-nature-48": {
    summary: "要公平比較洗滌方法，前處理的農藥種類與濃度必須一致，所以所有小白菜應浸泡相同濃度的同一種農藥。",
    reasoning: "若不浸泡農藥，就缺少可比較的殘留；若改變農藥種類或濃度，結果可能由前處理差異造成，無法把抑制率差異歸因於洗滌方法。",
  },
};

export function refineYear112Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year112ExplanationIds = new Set(Object.keys(refinements));
