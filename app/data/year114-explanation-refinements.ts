import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-114-nature-3": {
    summary: "白尾八哥與麻雀會爭奪相似的巢位和食物，屬於競爭；白尾八哥又會捕食麻雀幼鳥，兩者之間也有掠食關係。",
    reasoning: "共生應是不同物種共同生活且至少一方受益，寄生則是寄生物長期利用宿主；題幹都沒有這些描述，因此應選「競爭、掠食」。",
  },
  "cap-114-nature-8": {
    summary: "甲受光後呈綠色，表示具有葉綠素，能行光合作用而釋出氧氣；乙呈白色，缺少葉綠素，不能藉光合作用釋出氧氣。",
    reasoning: "甲、乙的活細胞都會呼吸並釋出二氧化碳，所以不能說其中一部位會釋出二氧化碳、另一部位完全不會。兩者真正的差異在於能否行光合作用產生氧氣。",
  },
  "cap-114-nature-12": {
    summary: "小明尖叫與阿華追跑都是看到明星後產生的有意識反應，視覺判讀及行動命令都由大腦負責，因此表中「控制的中樞」正確。",
    reasoning: "兩人的受器都應是眼睛；尖叫與跑步的動器是相關骨骼肌。從看見到行動會先由感覺神經元把訊息送入中樞，再由運動神經元把命令送往動器，不能只列其中一種神經元。",
  },
  "cap-114-nature-20": {
    summary: "甲的血糖曲線比乙更早且更快上升，因此甲會較早刺激胰島素分泌量增加。",
    reasoning: "血糖升高時，胰島素增加以促進細胞利用葡萄糖並使血糖下降；升糖素主要在血糖偏低時增加。甲、乙都會刺激胰島素，但甲的上升時間較早。",
  },
  "cap-114-nature-22": {
    summary: "蒸散作用會拉動水分經木質部向上運輸；圖中乙位於維管束內側，是木質部，因此應探測乙的水分運輸速率。",
    reasoning: "甲位於維管束外側，屬於主要運輸有機養分的韌皮部。即使「甲運輸有機養分」本身正確，也不能直接用來測量蒸散所造成的水流。",
  },
  "cap-114-nature-24": {
    summary: "表中共有 3 科，所以最多可分屬 3 個目；學名第一字為屬名，表中共有 Mareca、Aythya、Phalacrocorax、Pelecanus 4 個屬。",
    reasoning: "同科生物一定同目，因此 3 科不可能最多分成 4 目。六種鳥不等於六個屬，因前三種鳥的屬名都相同；符合的組合是「最多 3 個目、4 個屬」。",
  },
  "cap-114-nature-27": {
    summary: "骨董顯微鏡的丁用來調整鏡身角度，使光線射入；現代顯微鏡的光圈則用來調整入光量，兩者功能差異最大。",
    reasoning: "其餘配對的功能仍相近：甲與物鏡都和更換觀察倍率有關，乙與調節輪都用於調焦，丙與載物臺都用來放置標本。",
  },
  "cap-114-nature-30": {
    summary: "兩隻黑眼親代能生出紅眼子代 aa，表示甲、乙都提供了 a；兩者本身又是黑眼，所以甲、乙一定同為 Aa。",
    reasoning: "Aa×Aa 的黑眼子代可能是 AA，也可能是 Aa，因此丙、丁各自的基因型都不能只由黑眼表現型確定，和親代或彼此都不一定相同。",
  },
  "cap-114-nature-34": {
    summary: "甲有細胞核、無葉綠素且有菌絲，屬於真菌界；乙沒有細胞核，屬於原核生物界。",
    reasoning: "原生生物與植物都是真核生物，不符合乙「無細胞核」的特徵；植物通常具有葉綠素，也不符合題表。故依序為真菌界、原核生物界。",
  },
  "cap-114-nature-35": {
    summary: "甲分裂後染色體數不變，是有絲分裂。葉片繁殖形成幼苗與種子萌芽後的生長，都靠有絲分裂增加細胞數。",
    reasoning: "乙是染色體數減半並形成四個細胞的減數分裂，用於產生生殖細胞。種子形成前會涉及減數分裂，但題目問的是種子已形成後「萌芽成幼苗」的生長階段。",
  },
  "cap-114-nature-36": {
    summary: "甲的碘液檢測呈陽性、表示澱粉仍存在；本氏液呈陰性、表示沒有產生可檢出的還原糖，因此甲的澱粉酶已完全失去作用。",
    reasoning: "乙的澱粉已消失且產生還原糖，丙雖仍有澱粉，卻也已產生還原糖，表示兩者的酵素都曾作用；只有甲同時呈現「澱粉未分解、糖未產生」。",
  },
  "cap-114-nature-45": {
    summary: "圖中每個黑點代表相隔 30 秒的一次接觸紀錄，累計的出血時間超過 5 分鐘，依表應判定為過長。",
    reasoning: "表中指出出血時間過長可能與 X 減少症或其他凝血因子異常有關，但這只是初步檢查，仍須用其他方式確認，不能直接診斷。低於 1 分鐘才是過短，1～5 分鐘才在容許範圍。",
  },
  "cap-114-nature-46": {
    summary: "血小板會在血管受傷處聚集並參與凝血；血小板數量減少時，止血較慢，出血時間可能延長，因此 X 是血小板。",
    reasoning: "紅血球主要運輸氣體，白血球主要參與免疫防禦，淋巴則與組織液回流及免疫有關，都不是題目所指的主要止血成分。",
  },
};

export function refineYear114Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year114ExplanationIds = new Set(Object.keys(refinements));
