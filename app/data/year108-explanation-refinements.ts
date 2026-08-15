import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-108-nature-4": {
    summary: "蒸餾水會因滲透作用進入細胞；保衛細胞外有堅固的細胞壁，可限制細胞過度膨脹，因此較不會破裂。",
    reasoning: "白血球只有細胞膜，水大量進入時可能脹破。粒線體負責呼吸作用，液胞可儲存細胞液，兩者都不是抵抗滲透壓、防止細胞破裂的主要構造。",
  },
  "cap-108-nature-5": {
    summary: "光合作用會消耗二氧化碳和水，製造葡萄糖並釋出氧氣；比較單位時間產生的氧氣量，可推測光合作用速率。",
    reasoning: "葉綠素協助吸收光能，並不是光合作用中會被持續消耗的原料。消耗葡萄糖或產生二氧化碳反而是呼吸作用的表現，不能用來代表光合作用產物增加。",
  },
  "cap-108-nature-6": {
    summary: "將植物組織放在培養基中繁殖屬於組織培養，是以體細胞分裂形成新植株的無性生殖。",
    reasoning: "這個過程不經減數分裂，也沒有配子結合；若不考慮突變，新植株細胞的染色體數與基因組成都和原植株相同，不會減半。",
  },
  "cap-108-nature-17": {
    summary: "深色是顯性性狀，丁組 Tt×TT 的所有子代都會呈深色；環境使深色昆蟲容易被捕食時，丁組被捕食的子代可能最多。",
    reasoning: "甲 tt×tt 的深色比例為 0，乙 tt×Tt 為 1/2，丙 Tt×Tt 為 3/4，丁 Tt×TT 為 1。各組子代總數近似時，應比較深色表現型的比例，而不是只比較基因型種類。",
  },
  "cap-108-nature-19": {
    summary: "氣體由肺泡往支氣管、氣管移動，表示正在呼氣，此時橫膈放鬆並上升。",
    reasoning: "呼氣時肋骨下降、胸腔體積縮小，肺也隨之變小，使肺內壓力升高而把氣體排出；肺變大、胸腔變大或肋骨上舉都是吸氣方向的變化。",
  },
  "cap-108-nature-22": {
    summary: "仙人掌能開花並形成果實，因此屬於被子植物；花和果實才是此題的分類依據。",
    reasoning: "裸子植物有種子但不形成真正的花與果實。針狀葉與肥厚儲水莖是適應乾旱環境的構造，不能用來判定裸子或被子植物。",
  },
  "cap-108-nature-25": {
    summary: "鼻子中的嗅覺受器接收氣味刺激，但覺得香或臭的主觀感受是在大腦形成。",
    reasoning: "腦幹主要調節呼吸、心跳等基本生命活動，小腦主要協調肌肉和平衡；兩者都不是產生嗅覺意識與喜惡判斷的部位。",
  },
  "cap-108-nature-32": {
    summary: "外來基因在受精卵階段轉入 X 染色體，受精卵之後形成的全身體細胞都會承接這段基因。",
    reasoning: "小鼠仍由受精卵發育，屬有性生殖。雄鼠會產生帶 X 或帶 Y 的精子，只有帶該 X 的精子具有此基因；下一代能否分辨紅綠色則取決於是否遺傳到這條 X，不能說全部都無法分辨。",
  },
  "cap-108-nature-37": {
    summary: "腦細胞的代謝廢物進入體循環後，會隨靜脈血經上大靜脈回到右心房，也就是圖中的甲。",
    reasoning: "血液先回到心房再進入心室，因此不會先到右心室乙；左心房丙接收肺靜脈血，左心室丁則把血液送往全身，兩者都不是腦部靜脈血最先抵達的腔室。",
  },
  "cap-108-nature-40": {
    summary: "圖中丙、丁是在生物間轉移的含氮物質；蛋白質含有氮，會隨攝食由生產者傳給消費者，因此丁可判定為蛋白質。",
    reasoning: "葡萄糖只含碳、氫、氧，不是題目所指的含氮物質。微生物把氮氣轉成植物可利用形式或使氮回到環境，分別不是呼吸作用與光合作用。",
  },
  "cap-108-nature-41": {
    summary: "圖中物質可在植株內向上或向下運送，符合韌皮部依來源與需求輸送醣類的特性，所以甲在韌皮部、乙是醣類。",
    reasoning: "木質部主要把根吸收的水和礦物質向上運送；礦物質不會呈現題圖所示依不同時間可雙向輸送到生長或儲藏部位的型態。",
  },
  "cap-108-nature-45": {
    summary: "酵素 X 一旦經過超過 70°C 的步驟便永久失去活性；綠茶在步驟 I、紅茶在步驟 III 失活，所以步驟 IV 結束時兩者活性同為零。",
    reasoning: "步驟 I、II 時綠茶的酵素已失活而紅茶尚有活性，因此綠茶不會大於或等於紅茶；步驟 III 後紅茶也失活，兩者相等，不是綠茶較低。降溫不能讓已遭高溫破壞的酵素恢復。",
  },
  "cap-108-nature-51": {
    summary: "甲、丙兩區的櫟樹棵數相近且果實大量時，黑熊總數都為 11 隻；乙區雖櫟樹較多，但果實稀少，只有 3 隻黑熊，支持果實結果量越多、黑熊越多。",
    reasoning: "資料不支持櫟樹棵數越多黑熊就越多，也看不出樹木棵數或果實量會固定決定雌雄比例。應比較三區同時變動的果實量與黑熊總數，不能只挑單一數字。",
  },
  "cap-108-nature-52": {
    summary: "研究員取得的是糞便中脫落的腸壁細胞；腸壁細胞是體細胞，可利用其中的性染色體鑑定黑熊性別。",
    reasoning: "體染色體不負責此題的性別判定。糞便中的腸壁細胞也不是精子或卵等生殖細胞，因此應選體細胞的性染色體。",
  },
};

export function refineYear108Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year108ExplanationIds = new Set(Object.keys(refinements));
