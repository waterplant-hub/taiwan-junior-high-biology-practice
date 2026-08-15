import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-107-nature-4": {
    summary: "樹皮由深色變淺後，淺色蛾較不易被天敵發現，存活並留下後代的機會較高，因此比例逐代增加。",
    reasoning: "天擇篩選族群原有的體色差異，不是環境、食物或躲避需求使深色蛾定向突變成淺色蛾。",
  },
  "cap-107-nature-6": {
    summary: "左側魚類、兩生類與爬蟲類都是外溫動物；右側雖有內溫的鳥類、哺乳類，也混有外溫動物，因此不能直接加上兩區標示。",
    reasoning: "外溫或內溫要依各動物類群判定，不能只憑標示牌位置概括。左側全為外溫動物，但右側並非全為內溫動物，所以這種分區不適當。",
  },
  "cap-107-nature-12": {
    summary: "番薯由塊根長出乙、丙新芽，屬營養繁殖；不考慮突變時，乙與丙的基因型相同。",
    reasoning: "新芽由體細胞分裂形成，與塊根甲的染色體數及基因型相同。甲是儲存養分的營養器官，不是花、果實或種子等生殖器官。",
  },
  "cap-107-nature-18": {
    summary: "圖中澱粉濃度隨時間下降，表示酵素甲會分解澱粉；提高甲的活性會使澱粉分解得更快。",
    reasoning: "酵素主要由蛋白質組成，作用後通常不會隨受質一起被分解成胺基酸。降低酵素活性只會降低澱粉分解速率，不能促進澱粉合成。",
  },
  "cap-107-nature-19": {
    summary: "圖中丙是粒線體，主要進行呼吸作用並供應細胞可用能量。",
    reasoning: "甲為細胞核、乙為液胞、丁為葉綠體；葉綠體把光能轉存於有機物，細胞普遍直接取得呼吸作用能量的主要構造仍是粒線體。",
  },
  "cap-107-nature-24": {
    summary: "揮手是大腦決定的隨意動作，命令由運動神經傳到手部肌肉。",
    reasoning: "眼睛才是接受好友影像的受器，手部肌肉是動器；興奮感在大腦形成，不由感覺神經產生。看見好友後主動揮手也不是不經意識判斷的反射。",
  },
  "cap-107-nature-26": {
    summary: "物質 X 是竹子光合作用製造的醣類，會由韌皮部輸送到正在生長的竹筍。",
    reasoning: "木質部主要運送根部吸收的水和無機鹽；光合作用產生的有機養分可由韌皮部依來源與需求方向運輸，不限於向上。",
  },
  "cap-107-nature-28": {
    summary: "甲是具有四對染色體的雙套體細胞，乙是四條不成對染色體的單套生殖細胞；若甲的基因成對，乙便不成對。",
    reasoning: "同一雌性動物的體細胞與配子都含性染色體，只是套數不同。每條染色體上有許多基因，不能把染色體條數當成總基因數；乙的四條也不是兩對。",
  },
  "cap-107-nature-37": {
    summary: "不論藥劑由左手或右手的靜脈注入，都會經上肢靜脈回到上大靜脈，最先進入右心房。",
    reasoning: "左右位置不會改變體循環靜脈血的回流終點。左心房接收的是由肺靜脈回來的血液，手部靜脈注射的藥劑須先經右心、肺循環後才到左心。",
  },
  "cap-107-nature-41": {
    summary: "兩塔頂端能量相同，但乙比甲多一個消費者階層；能量每次傳遞都會減少，所以乙必須有比甲更多的生產者總能量。",
    reasoning: "由頂端向下回推，每多一層就需要更多前一階層能量，因此乙的生產者與消費者總能量都較大；甲的初級消費者也不會大於乙的初級消費者。",
  },
  "cap-107-nature-46": {
    summary: "移開光源後不再有方向性光刺激，兩株莖都只表現背地性，繼續朝上方的①生長。",
    reasoning: "先前向光彎曲不會讓莖永久沿原方向生長。黑暗中仍能感受重力，莖對重力呈負向生長，所以甲、乙的新生部分都轉向上方。",
  },
  "cap-107-nature-47": {
    summary: "Aa×Aa 可產生 AA、Aa、aa 三種基因型，但 AA、Aa 都呈顯性，aa 呈隱性，所以只有兩種表現型。",
    reasoning: "基因型種類不能直接當成表現型種類；完全顯性時，異型合子 Aa 與顯性同型合子 AA 的外觀歸為同一類。",
  },
  "cap-107-nature-49": {
    summary: "偏側蛇蟲草菌從螞蟻取得生長資源並使螞蟻死亡，菌受益、螞蟻受害，屬寄生關係。",
    reasoning: "合作必須雙方受益；競爭則是雙方爭奪共同且有限的資源。文章描述真菌直接感染並利用螞蟻身體，符合寄生而非合作或競爭。",
  },
  "cap-107-nature-50": {
    summary: "偏側蛇蟲草菌與酵母菌都屬真菌界，因此四個選項中親緣關係最近。",
    reasoning: "蕨類屬植物，藍綠菌屬細菌，螞蟻則是節肢動物；是否能產生孢子或菌絲須配合整體分類，不能因此把真菌歸入植物。",
  },
};

export function refineYear107Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year107ExplanationIds = new Set(Object.keys(refinements));
