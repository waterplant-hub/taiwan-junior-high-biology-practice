import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-111-nature-4": {
    summary: "藻類、珊瑚與多種魚類常生活在陽光可到達、附著空間較多的海洋沿岸，因此人工魚礁最適合放在淺海區。",
    reasoning: "溪流是淡水環境；河口鹽度變化大且泥沙較多；大洋區水深、缺少海床附著面。題幹同時提到珊瑚與魚礁，指向的是淺海生態環境。",
  },
  "cap-111-nature-5": {
    summary: "朱槿向光彎曲需靠兩側生長速率不同逐漸形成，涉及細胞生長，所需時間比葉片快速運動更長。",
    reasoning: "捕蠅草閉合、酢漿草睡眠運動與含羞草觸發運動主要由細胞膨壓迅速改變，可在短時間出現；向光性則須累積生長差異。",
  },
  "cap-111-nature-8": {
    summary: "體積由小到大依序是氫原子、口腔皮膜細胞、月球、太陽，故甲、乙、丙、丁的配對為選項 B。",
    reasoning: "原子遠小於細胞；口腔皮膜細胞雖需顯微鏡觀察，仍遠小於天體。月球的直徑小於太陽，因此不能把太陽排在月球之前。",
  },
  "cap-111-nature-11": {
    summary: "O 型子女必須從父母各得到一個 i；丙組的一方是 AB 型，基因型 IᴬIᴮ，完全沒有 i，因此不可能生下 O 型子女。",
    reasoning: "甲的 A 型雙親若皆為 Iᴬi、乙的 A 型與 B 型雙親若為 Iᴬi×Iᴮi，都可能生下 ii；丁的 O 型雙親都是 ii，子女反而全為 O 型。",
  },
  "cap-111-nature-17": {
    summary: "觀察萼片細胞內的葉綠體大小，需要高倍率的複式顯微鏡；計數整朵花較大的立體雄蕊，適合使用解剖顯微鏡。",
    reasoning: "儀器選擇取決於觀察尺度與是否要保留立體外觀。複式顯微鏡適合薄而透光的細胞或胞器，解剖顯微鏡適合較大、可直接操作的立體構造。",
  },
  "cap-111-nature-18": {
    summary: "榕樹許多根、莖內部等活細胞沒有葉綠體，不能行光合作用；但活細胞普遍以粒線體行呼吸作用，所以可光合作用的細胞數甲＜可呼吸的細胞數乙。",
    reasoning: "不能把植物細胞一概視為都有葉綠體。題目比較的是整株榕樹的細胞數，呼吸作用不限於綠色部位，故理由應是部分植物細胞不具葉綠體。",
  },
  "cap-111-nature-23": {
    summary: "食物鏈為稻→鼠→蛇→鷹，能量塔中的蛇位於丙、鼠位於乙；能量向上一層約只保留十分之一，所以乙約為 100,000 單位。",
    reasoning: "蛇的 10,000 單位是丙階層總能量。向下一個營養階層回推要乘約 10，而不是除以 10；因此不能選 1,000 或 100，10,000 又忽略了傳遞損耗。",
  },
  "cap-111-nature-26": {
    summary: "甲心室的氧含量較高，是左心室；乙較低，是右心室。右心室把缺氧血送入肺動脈，因此乙與肺動脈連接。",
    reasoning: "左心室連接主動脈，右心室連接肺動脈。大靜脈回到右心房、肺靜脈回到左心房，並非直接連接心室，所以 A、B、C 都不符合。",
  },
  "cap-111-nature-32": {
    summary: "碘液遇澱粉呈藍黑色；乙呈黃褐色表示澱粉已被分解，因此加入含澱粉分解酵素蜂蜜的是乙。",
    reasoning: "甲仍呈藍黑色，代表澱粉尚在，較符合只加水的對照組。顏色判讀要先確認是否檢出澱粉，不能把黃褐色誤認為澱粉反應。",
  },
  "cap-111-nature-35": {
    summary: "肝臟把蛋白質代謝產生的含氮廢物轉成尿素，所以流出後尿素上升；肝細胞代謝消耗氧氣，因此氧氣下降。",
    reasoning: "腎臟會從血液濾除尿素，流出後應下降；肺臟進行氣體交換，流出後氧氣應上升；膀胱主要儲存尿液，不會造成表中兩項血液變化。",
  },
  "cap-111-nature-39": {
    summary: "卵細胞只有單套染色體，性染色體不成對；成熟紅血球沒有細胞核與染色體，因此甲、丁都不具有成對性染色體。",
    reasoning: "受精卵與口腔皮膜細胞都是雙套細胞，正常情況下具有成對染色體。『沒有成對』同時包含配子只有一條，以及成熟紅血球完全沒有染色體兩種情形。",
  },
  "cap-111-nature-45": {
    summary: "圖中莖的維管束呈環狀排列，是雙子葉植物莖的典型特徵。",
    reasoning: "單子葉植物莖的維管束多散生；藻類與蘚苔植物沒有題圖所示的真正維管束。應依維管束排列分類，不是只看切面外形。",
  },
  "cap-111-nature-46": {
    summary: "圖中丙是內側木質部，水主要向上運輸；丁是外側韌皮部，醣類可依來源與需求向上或向下運輸，因此同學 4 正確。",
    reasoning: "水和礦物質主要由木質部自根向上運送；葉片製造的醣類由韌皮部送往生長或儲藏部位，方向不固定。其他同學不是放錯構造位置，就是把運輸方向寫錯。",
  },
  "cap-111-nature-50": {
    summary: "按鈴是手指肌肉執行的動作，大腦形成命令後，命令經運動神經元傳到手指，因此 D 正確。",
    reasoning: "兩人的完成時間在題幹中不同；聲音或卡牌刺激由耳、眼的受器接收，不是眼睛肌肉。感覺訊息須傳到大腦判斷，不能把腦幹當成此遊戲意識反應的主要控制中樞。",
  },
};

export function refineYear111Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year111ExplanationIds = new Set(Object.keys(refinements));
