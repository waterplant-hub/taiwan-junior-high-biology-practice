import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "basic-102-first-nature-3": {
    summary: "閉氣時細胞仍持續呼吸並產生二氧化碳；血中二氧化碳累積會刺激呼吸中樞，使人產生強烈呼吸需求。",
    reasoning: "人體呼吸調節主要對二氧化碳及其造成的酸鹼變化敏感；氧氣不會因閉氣而增高，臭氧與甲烷也不是人體正常代謝造成的主要氣體。",
  },
  "basic-102-first-nature-4": {
    summary: "種子植物包括開花植物與裸子植物，因此應選甲、丁兩區。",
    reasoning: "蕨類與蘚苔植物以孢子繁殖，不形成種子；開花植物的種子包在果實內，裸子植物則具有裸露的種子。",
  },
  "basic-102-first-nature-6": {
    summary: "手被燙到立即縮回屬保護性反射，可先由脊髓整合，不需要大腦先作決定。",
    reasoning: "聽哨聲起跑、跌倒後主動站起及持續超越對手，都涉及感覺判斷與隨意動作；燙手後大腦仍會感到疼痛，但不是啟動縮手的必要前置步驟。",
  },
  "basic-102-first-nature-8": {
    summary: "烏賊與海鳥都取食蝦，彼此競爭；圖中烏賊又被海鳥取食，因此兩者同時具有競爭與捕食關係。",
    reasoning: "食物網箭頭由食物指向攝食者。要同時成立，兩種生物必須有共同食物，且其中一種又直接成為另一種的食物。",
  },
  "basic-102-first-nature-10": {
    summary: "表中受精卵在母體內發育的乳牛與綿羊都是內溫動物，因此選 C。",
    reasoning: "烏龜採體內受精但屬外溫動物，所以體內受精者不全是內溫動物；鴨嘴獸是內溫動物，受精卵卻在母體外發育，也排除 D。青蛙與鯉魚體外受精，均非內溫動物。",
  },
  "basic-102-first-nature-11": {
    summary: "種子增加、昆蟲減少時，嘴型最短厚的丙最適合啄食種子，族群成長比例可能最大。",
    reasoning: "題目已限定只考慮食物來源；短厚嘴取得增加中的種子較有利，細長嘴原本擅長捕蟲，反而會受到昆蟲減少影響。",
  },
  "basic-102-first-nature-22": {
    summary: "煮過的馬鈴薯細胞膜失去選擇性通透功能，使洞內蔗糖能漏到外側蒸餾水中。",
    reasoning: "細胞膜負責控制物質進出。細胞核、粒線體與葉綠體雖也可能受熱破壞，但不能直接解釋蔗糖穿過組織進入外液。",
  },
  "basic-102-first-nature-24": {
    summary: "脂質主要在小腸中經膽汁乳化並由脂肪酶分解，因此外層被消化、蛋白質釋出的場所最可能是小腸。",
    reasoning: "口腔與食道幾乎不消化脂質，胃也不是脂質消化的主要場所；題目問的是外層脂質何處被消化，而非內層蛋白質何處開始消化。",
  },
  "basic-102-first-nature-25": {
    summary: "母親為隱性，基因型必為 rr；父親生出隱性的弟弟而本身顯性，必為 Rr；阿泰與妹妹顯性且只能從母親得到 r，也必為 Rr。只有顯性的祖父可能是 RR 或 Rr。",
    reasoning: "先由隱性表現型確定 rr，再用子代必須各從雙親取得一個基因逐步回推；表中資料不足以判定祖父是否帶有隱性基因。",
  },
  "basic-102-first-nature-26": {
    summary: "酵素 X 雖可重複使用，但具有受質專一性；它能分解蛋白質吉利丁，不能因此分解由醣類組成的洋菜凍。",
    reasoning: "酵素作用後本身通常不會被消耗或分解；是否能作用取決於受質種類，不取決於物質同樣呈凍狀。",
  },
  "basic-102-first-nature-27": {
    summary: "要觀察原生生物的游動路徑，應降低倍率以擴大視野；10X 目鏡搭配 4X 物鏡的總倍率 40X 最低。",
    reasoning: "總放大倍率＝目鏡倍率×物鏡倍率。其餘三組分別為 400X、150X、600X，視野都比 40X 小，更難追蹤移動範圍。",
  },
  "basic-102-first-nature-44": {
    summary: "氧含量在乙處上升，表示乙是肺部微血管；血液進肺前流經的甲因此是肺動脈。",
    reasoning: "血液由心臟經肺動脈進入肺，在微血管完成氣體交換後，再由肺靜脈回心臟，所以丙應是肺靜脈而非主動脈或大靜脈。",
  },
  "basic-102-first-nature-49": {
    summary: "待確認的豬能與野豬交配並產生可育後代，表示兩者屬同一物種，學名應同為 Sus scrofa。",
    reasoning: "二名法的第一字是屬名、第二字是種小名；同物種必須使用相同的完整學名，不能只保留相同屬名或種小名。",
  },
  "basic-102-first-nature-55": {
    summary: "環狀剝皮會移除形成層外側的韌皮部，使葉片製造的有機養分無法正常向下運輸，因此養分運輸最先直接受影響。",
    reasoning: "木質部位於較內側，水分吸收與向上運輸仍可暫時進行；葉片也仍能行光合作用製造養分。",
  },
  "basic-102-first-nature-56": {
    summary: "壓條法是利用原植株枝條形成新植株的無性生殖；不考慮突變時，新植株控制果色的基因型與原植株相同。",
    reasoning: "無性生殖不經配子結合，染色體數不會增加，也不會因此形成新物種；新植株成熟後仍可能開花並以種子進行有性生殖。",
  },
};

export function refineYear102Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year102ExplanationIds = new Set(Object.keys(refinements));
