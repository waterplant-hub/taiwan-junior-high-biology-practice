import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-106-nature-2": {
    summary: "表中虎鯨以藍鯨為食，因此兩者是捕食關係。",
    reasoning: "競爭須有共同且有限的食物或空間；表中沒有虎鯨與藍鯨取食相同食物。帝王企鵝和阿德列企鵝也沒有互相取食或共同食物，不能判為捕食或競爭。",
  },
  "cap-106-nature-3": {
    summary: "若天敵靠視覺捕食，陰暗石縫中的深色蝸牛較隱蔽，明亮草地中的淺色蝸牛較隱蔽，最符合圖 B。",
    reasoning: "背景反差大的個體較容易被發現並捕食，因此陰暗處應深色多於淺色，明亮處則淺色多於深色；兩處的相對數量必須呈相反趨勢。",
  },
  "cap-106-nature-9": {
    summary: "個體雖可同時產生精子與卵，仍須和另一個體交換精子並受精，屬有性生殖，子代具有雙親的部分特徵。",
    reasoning: "是否雌雄同體不決定有性或無性，關鍵在於有無配子結合。減數分裂產生配子，不是增加體細胞；正常同種子代也不是因此失去生殖能力。",
  },
  "cap-106-nature-10": {
    summary: "綠色是隱性，綠色親代都只能是 yy；乙組若為綠色×綠色，子代必全為綠色，不可能出現表中預測的黃色。",
    reasoning: "黃色親代可能是 YY 或 Yy，所以黃色×黃色、黃色×綠色都可能依基因型產生表列結果；只有 yy×yy 的配子全是 y，子代沒有顯性基因。",
  },
  "cap-106-nature-12": {
    summary: "圖中＊位於木材較外側的新生木質部，主要功能是運輸水和無機鹽。",
    reasoning: "雙子葉木本莖由外向內可辨認韌皮部、形成層與木質部。韌皮部運輸養分，形成層負責分裂；木質部構成木材並負責水分運輸。",
  },
  "cap-106-nature-18": {
    summary: "甲、乙都能進行呼吸作用，所以都有粒線體；只有乙能進行光合作用，因此只有乙具有葉綠體。",
    reasoning: "表中「葡萄糖＋氧氣→水＋二氧化碳」是呼吸作用；「水＋二氧化碳→葡萄糖＋氧氣＋水」是光合作用。依兩列有無逐一對應構造即可判定。",
  },
  "cap-106-nature-24": {
    summary: "觸電後立即縮手的反射路徑是感覺神經甲→脊髓→運動神經乙，因此選甲、乙。",
    reasoning: "疼痛訊息還須由脊髓丙上傳大腦；受器傳向中樞先走甲，不是乙；大腦發出甩手命令則經丙下傳，再由運動神經乙到肌肉。",
  },
  "cap-106-nature-27": {
    summary: "甲是輸送膽汁到小腸的導管；阻塞後膽汁無法正常進入小腸乳化脂質，所以脂質消化功能下降。",
    reasoning: "胰液另經胰管排入小腸，胃蛋白質消化由胃液進行；葡萄糖主要仍由小腸絨毛吸收。膽汁雖不含消化酵素，仍能增加脂肪酶作用面積。",
  },
  "cap-106-nature-36": {
    summary: "肝臟製造尿素，使流出肝臟的甲比流入的乙尿素高；腎臟移除尿素，使流出腎臟的丙比流入的丁低。",
    reasoning: "蛋白質代謝產生的含氮廢物在肝臟轉成尿素，再隨血液到腎臟過濾。依箭頭辨認進出器官的血管後，可得甲＞乙、丙＜丁。",
  },
  "cap-106-nature-37": {
    summary: "丙與丁是一對同源染色體；減數分裂第一階段同源染色體必分到不同細胞，因此選丙與丁。",
    reasoning: "一般細胞分裂分開的是複製後的姐妹染色分體，不要求兩條同源染色體分居不同細胞。乙與丙不成對，減數分裂時也沒有必然分離關係。",
  },
  "cap-106-nature-38": {
    summary: "能量由丁到丙、乙、甲逐級減少，所以丁是生產者、丙是初級消費者；只吃種子的鳥直接取食生產者，屬丙階層。",
    reasoning: "種子是植物產物。直接取食植物的動物是初級消費者，不會因為鳥類是動物就自動成為較高級消費者。",
  },
  "cap-106-nature-44": {
    summary: "銀杏是裸子植物，白果是裸露的種子，不是由子房形成的果實，因此銀杏不具有果實構造。",
    reasoning: "學名中的 Ginkgo 是屬名，biloba 是種小名；單子葉、開花與結果都是被子植物相關特徵，不能套用到裸子植物。",
  },
  "cap-106-nature-47": {
    summary: "要研究未提供營養素 X 時，物質 Y 的影響，須固定兩組都不提供 X，只改變是否注射 Y，因此比較丙與丁。",
    reasoning: "丙為不提供 X、注射 Y；丁為不提供 X、不注射 Y。其他配對同時改變 X 或沒有控制題目指定條件，無法把差異歸因於 Y。",
  },
  "cap-106-nature-48": {
    summary: "第 4 週有營養素 X 的甲、乙都超過 100 gw；沒有 X 的丙、丁都未超過。注射 Y 並未使未提供 X 的丙超過 100 gw，因此 X 會、Y 不會。",
    reasoning: "判讀時要同時看處理表與折線圖，不能只比較單一組。X 的有無把第 4 週結果分成約 185～190 gw 與約 45～70 gw；Y 在相同 X 條件下只造成較小差異。",
  },
};

export function refineYear106Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year106ExplanationIds = new Set(Object.keys(refinements));
