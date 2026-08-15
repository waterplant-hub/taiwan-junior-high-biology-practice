import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-104-nature-1": {
    summary: "圖中陽光、二氧化碳和水進入葉片，氧氣離開，符合植物進行光合作用。",
    reasoning: "光合作用利用光能，以二氧化碳和水製造養分並釋出氧氣。呼吸作用的氣體方向相反；蒸散主要排出水分，觸發運動則不能解釋圖中的物質進出。",
  },
  "cap-104-nature-4": {
    summary: "抗蟲基因最可能隨花粉傳到乙區；花粉內的雄配子可參與受精，把基因帶入下一代。",
    reasoning: "花柱、胚珠與子房都留在母株的花中，不會跨越道路傳播到另一區。花粉可由風或動物帶到遠處的一般棉花並完成授粉。",
  },
  "cap-104-nature-6": {
    summary: "乙時期淺色蛾增加、深色蛾減少，表示當時環境較有利於淺色蛾隱蔽、生存與繁殖。",
    reasoning: "天擇改變的是不同既有變異留下後代的比例，不是淺色蛾因需要而突變成深色。圖中也沒有鳥類數量資料，不能推論鳥類逐年下降。",
  },
  "cap-104-nature-15": {
    summary: "甲物鏡較短、倍率較低，應先用甲找像再換較長的高倍乙；倍率提高後視野會變暗。",
    reasoning: "複式顯微鏡先低倍、後高倍，較容易找到並置中標本。換高倍後進入眼睛的光量減少，視野也會縮小，因此需視情況調整光圈或反光鏡。",
  },
  "cap-104-nature-21": {
    summary: "圖中甲位於維管束外側，是韌皮部；介殼蟲吸食韌皮部汁液，應研究甲。",
    reasoning: "韌皮部主要運送葉片製造的蔗糖等有機養分，木質部則以水和無機鹽的向上運輸為主。題目已指定取食部位，關鍵是依莖橫切面辨認外側的韌皮部。",
  },
  "cap-104-nature-22": {
    summary: "兩人看見畫面後的反應不同，但保持姿勢、尖叫與遮眼都需要肌肉參與，所以兩人的反應都有藉肌肉表現。",
    reasoning: "兩人都以眼睛接受視覺刺激，訊息經感覺神經傳入中樞，再由運動神經控制肌肉。題述反應含有意識選擇，不能一概視為簡單反射。",
  },
  "cap-104-nature-24": {
    summary: "乙器官的靜脈血比動脈血含氧高，表示乙是肺；甲的動脈血比靜脈血含氧高，表示甲是身體組織，因此路徑為乙→心臟→甲。",
    reasoning: "紅血球在肺微血管取得氧氣，先隨肺靜脈回心臟，再由體循環送到其他器官並釋出氧氣，不會從肺直接跳過心臟到身體組織。",
  },
  "cap-104-nature-25": {
    summary: "兩株無香味親代能生出有香味子代，表示有香味是隱性；甲、乙必為異型合子，丁必為隱性同型合子，只有無香味的丙基因型無法確定。",
    reasoning: "設無香味為 A、有香味為 a，甲與乙皆須是 Aa 才能生出 aa 的丁。丙表現無香味，可能是 AA 或 Aa，因此資料不足以判定。",
  },
  "cap-104-nature-37": {
    summary: "甲海蛇、乙海鰻與丁海牛都有脊椎骨；丙海兔是軟體動物、沒有脊椎骨，所以應把丙單獨分為一組。",
    reasoning: "名稱中都有「海」不能作為分類依據。海蛇是爬蟲類、海鰻是魚類、海牛是哺乳類，三者均為脊椎動物；海兔則是無脊椎的軟體動物。",
  },
  "cap-104-nature-38": {
    summary: "呼氣時橫膈放鬆並上升，位置由較低的乙移到較高的甲；藍色氯化亞鈷試紙遇水氣會變色，因此選「乙→甲，水」。",
    reasoning: "橫膈上升使胸腔體積縮小、肺內壓力升高，氣體排出。氯化亞鈷試紙檢測的是呼出氣體中的水氣，不是二氧化碳。",
  },
  "cap-104-nature-41": {
    summary: "唾液中催化澱粉分解的甲與胃液中催化蛋白質分解的乙都是酵素，而酵素的主要成分都是蛋白質。",
    reasoning: "酵素是催化反應的物質，不是被分解的受質或分解後產物；澱粉、葡萄糖、蛋白質和胺基酸在選項中分別混淆了受質、酵素與產物。",
  },
  "cap-104-nature-43": {
    summary: "圖中甲把氮氣轉成含氮物質，乙把含氮物質轉回氮氣；固氮與脫氮作用都由特定微生物完成。",
    reasoning: "植物主要吸收環境中的含氮物質，動物則由食物取得氮；兩者不能直接完成圖示的氮氣與含氮物質互相轉換，因此甲、乙皆應歸為微生物。",
  },
  "cap-104-nature-47": {
    summary: "農民切下感染植株的嫩莖再種植，屬營養繁殖；不考慮突變時，新植株與親代的基因相同。",
    reasoning: "莖部細胞增生靠有絲分裂，不是減數分裂；膨大的是莖而非生殖器官。無性繁殖雖能保留優良性狀，卻不會增加遺傳變異，對環境改變的整體適應力通常較低。",
  },
  "cap-104-nature-48": {
    summary: "文章指出菰黑穗菌會隨嫩莖繁殖並持續生長；真菌以孢子繁殖，因此晚收茭白筍中的黑點最可能是孢子。",
    reasoning: "受感染的菰草無法正常開花結果，黑點便不會是菰草的種子、花粉或卵細胞；題組提供的真菌資訊才是判斷關鍵。",
  },
};

export function refineYear104Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year104ExplanationIds = new Set(Object.keys(refinements));
