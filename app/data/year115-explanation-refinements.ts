import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-115-nature-6": {
    summary: "圖（四）的比例尺是 20 μm，灰色斑塊約為數十微米，最符合圖（三）所示 10～30 μm 的細胞尺度。",
    reasoning: "血紅素蛋白約 5 nm、病毒約 20～300 nm、粒線體約 0.5～1 μm，都遠小於影像中的灰色斑塊，因此不能只因它們可能存在於細胞內就判定為其中之一。",
  },
  "cap-115-nature-10": {
    summary: "圖中甲是大腦，槍聲傳入中樞後，由大腦形成並判讀聽覺，因此 A 正確。",
    reasoning: "乙是小腦，主要協調運動與維持平衡；丙是腦幹，負責調節呼吸、心跳等基本生命現象；丁是脊髓，負責神經訊息傳遞及部分反射，並不主掌步伐大小。",
  },
  "cap-115-nature-11": {
    summary: "動作乙時肺內氣體量較少，代表盡力呼氣；此時橫膈上升、肋骨下降，使胸腔容積縮小。",
    reasoning: "動作甲的肺內氣體量較多，代表盡力吸氣，應是橫膈下降、肋骨上舉。各選項必須同時符合動作甲或乙，以及橫膈與肋骨的正確移動方向。",
  },
  "cap-115-nature-13": {
    summary: "利用具有特定特徵的植株互相雜交，會經由花等生殖器官完成有性生殖，因此育種後代可能出現不同的性狀組合。",
    reasoning: "營養器官繁殖屬無性生殖，通常產生與親代基因型相同的後代；雜交則結合不同親代的遺傳物質，所以子代的基因型不必與親代相同，表現型也可能改變。",
  },
  "cap-115-nature-20": {
    summary: "觸角腺會過濾體液、再吸收有用物質並排出含氮廢物，最類似人體腎臟形成尿液的功能。",
    reasoning: "肝臟會代謝並把氨轉成尿素，大腸主要吸收水分，尿道只是尿液排出的通道；三者都不具有題述「過濾後再吸收」的完整功能。",
  },
  "cap-115-nature-21": {
    summary: "再捕樣本中紅魚占 5/50＝1/10，推估魚池中 50 隻紅魚也約占總數的 1/10，因此鯉魚總數約 500 隻，黑魚約 500－50＝450 隻。",
    reasoning: "捉放法是以隨機抽樣比例推估族群大小，會有抽樣誤差，所以 450 隻是黑色鯉魚的可能數量，不是逐隻清點所得的實際數量；500 隻則包含紅魚與黑魚。",
  },
  "cap-115-nature-24": {
    summary: "光合作用以水和二氧化碳製造葡萄糖並釋出氧氣，所以甲是二氧化碳、乙是氧氣、丙是葡萄糖；丙可作為呼吸作用的反應物。",
    reasoning: "二氧化碳主要由葉片從空氣取得，不是由土壤吸收；氧氣主要向外界釋放，也不是呼吸作用的產物。呼吸作用會使用葡萄糖和氧氣，產生二氧化碳、水並釋放能量。",
  },
  "cap-115-nature-25": {
    summary: "兩袋都各有一半顯性因子 A、一半隱性因子 a，相當於 Aa×Aa；子代表現黑毛的機率為 3/4，白毛為 1/4。",
    reasoning: "配對 100 次時，理論上約有 75 隻黑毛、25 隻白毛，但隨機實驗不會保證剛好符合比例。78、22 最接近理論值；49、51 與 26、74 的比例顛倒，100、0 則忽略 aa 出現的可能。",
  },
  "cap-115-nature-29": {
    summary: "穿山龍具有花和種子，屬於被子植物；被子植物的胚珠位於子房內，成熟後會形成果實。",
    reasoning: "「穿山龍」與「棒槌瓜」都是俗名，不是二名法學名。孢子囊堆是蕨類特徵，毬果是裸子植物常見的生殖構造，都不符合題幹所述的開花植物。",
  },
  "cap-115-nature-37": {
    summary: "圖中蛋白質濃度下降、分解產物 X 濃度上升，表示酵素催化蛋白質分解；胰液含有可分解蛋白質的酵素。",
    reasoning: "膽汁不含消化酵素，主要作用是乳化脂肪。X 是反應產物而非此酵素的受質，所以不能說酵素催化 X 的分解；圖中 X 增加是蛋白質被分解的結果，也不是把 X 合成蛋白質。",
  },
  "cap-115-nature-39": {
    summary: "肺臟流出的血經肺靜脈先進入左心房；肝臟流出的血經肝靜脈、下大靜脈先進入右心房，因此甲、乙皆錯。",
    reasoning: "判斷血管與心房、心室時應依血流方向：由器官回到心臟的血液先進入心房，不會直接先進入心室。動、靜脈的命名也不是依血液含氧量決定。",
  },
  "cap-115-nature-44": {
    summary: "圖中 12～13 時的氣泡移動距離最高；每次紀錄涵蓋一小時，因此該時段的平均蒸散速率為一天中最大。",
    reasoning: "0～1 時和 3～4 時的柱高都大於 0，仍有蒸散。6～7 時的柱高略低於 7～8 時，不能說前一時段速率較大。",
  },
  "cap-115-nature-45": {
    summary: "植物蒸散時由根吸收的水向上運輸，使管中氣泡向右移；氣泡只有在打開閥門注水時才會被推回左方，因此植物由氣孔吸水使氣泡左移最不可能發生。",
    reasoning: "兩天總移動距離或相同時段距離相近，都可能在環境穩定時出現；乾燥環境也可能使植物關閉氣孔、降低蒸散而讓氣泡移動很小。氣孔主要散失水蒸氣，不是吸水並向下運輸。",
  },
};

export function refineYear115Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year115ExplanationIds = new Set(Object.keys(refinements));
