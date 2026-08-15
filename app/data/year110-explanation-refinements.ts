import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-110-nature-4": {
    summary: "甲環境使肌肉顫抖，表示身體正增加產熱以對抗寒冷；乙環境使皮膚血管擴張，表示身體正增加散熱，因此可能是乙環境溫度＞體溫＞甲環境溫度。",
    reasoning: "顫抖反應不符合甲環境高於體溫；皮膚血管擴張則是炎熱時的散熱反應。四個排列中，只有 D 同時讓甲低於體溫且乙高於甲，符合兩種調節方向。",
  },
  "cap-110-nature-6": {
    summary: "授粉是花粉由花藥傳到雌蕊柱頭的過程，所以人工授粉應把百合花粉沾到柱頭。",
    reasoning: "花藥產生花粉，花絲支撐花藥，兩者都屬雄蕊；子房位於雌蕊基部並含胚珠，但花粉須先附著、萌發於柱頭，不能直接把子房當成授粉位置。",
  },
  "cap-110-nature-7": {
    summary: "甲、乙兩組只有是否放入銀幣不同；甲檢出 5.1×10⁴ CFU/g，乙未檢測出，因此結果支持銀幣能抑制細菌生長。",
    reasoning: "乙與冷藏的丙都低於儀器檢測下限，不能據此判定哪一種抑菌效果更好；甲的數值也不能推廣成室溫下每杯牛奶都相同。實驗沒有使用金幣，更不能推測金幣結果。",
  },
  "cap-110-nature-10": {
    summary: "蘇鐵是裸子植物，具有維管束、種子與毬果，但不形成被子植物的花，所以最不適合列入《花朵圖鑑》。",
    reasoning: "不能因蘇鐵外觀像棕櫚就用外形分類。判斷四本書時應逐一核對生殖構造：蘇鐵可作為種子傳播、毬果構造與維管束植物的例子。",
  },
  "cap-110-nature-11": {
    summary: "只封上表皮的乙仍散失較多水，只封下表皮的丙散失量明顯較少，表示此植物的氣孔主要分布在下表皮。",
    reasoning: "甲未封表皮，蒸散最多；丁上下表皮皆封，蒸散最少。乙仍有蒸散，說明下表皮氣孔多；丙也未降到零，說明上表皮不是完全沒有氣孔，因此不能選無氣孔或平均分布。",
  },
  "cap-110-nature-19": {
    summary: "深色表現型包含 BB、Bb，淺色只有 bb；乙時期深、淺色各占 50%，所以 BB＋Bb＝bb。",
    reasoning: "甲的深色約 10%，故 BB＋Bb＜bb；丙雖也是深淺各半，卻不能推成 BB、Bb、bb 三種基因型數量相等，否則深色會占 2/3。丁深色約 90%，只能確定 BB＋Bb＞bb，無法再拆出 BB 與 Bb 的關係。",
  },
  "cap-110-nature-25": {
    summary: "解剖顯微鏡形成的影像方向與實物相同，因此幼蟲在載物板往右上移，視野中的影像也往右上移。",
    reasoning: "上下、左右相反是複式顯微鏡的成像特性，不可套用到解剖顯微鏡。題目問的是影像移動方向，不是為了追蹤影像而移動載物板的方向。",
  },
  "cap-110-nature-28": {
    summary: "五次所需時間由 59 秒大致降至 25 秒，顯示此動作可經練習加快，屬需大腦參與的意識行為，因此「控制中樞僅為脊髓」錯誤。",
    reasoning: "完成動作要先接收刺激並把訊息傳入中樞，需要感覺神經元；中樞形成命令後再傳給動器，需要運動神經元。個別次數稍有波動不影響整體練習後變快的趨勢。",
  },
  "cap-110-nature-31": {
    summary: "乙把體內受精的臺灣鈍頭蛇，與多採體外受精的臺北樹蛙、臺灣馬口魚分開，因此乙可用「是否為體內受精」作分類依據。",
    reasoning: "卵生無法在甲處把蛇、蛙、魚與藍鵲、野兔分成兩群，因藍鵲也卵生；丙兩端的樹蛙與馬口魚都卵生，丁兩端的藍鵲與野兔則都是體內受精，故 C、D 也不成立。",
  },
  "cap-110-nature-34": {
    summary: "心室收縮時，充氧血由左心室逆流回左心房，表示左心房與左心室之間的房室瓣閉合不全。",
    reasoning: "右心房、右心室主要含缺氧血，不符合題幹的充氧血。肺靜脈與左心房、大靜脈與右心房之間也不是防止心室血液逆流回心房的房室瓣位置。",
  },
  "cap-110-nature-36": {
    summary: "依箭頭由食物指向攝食者判讀，庚會捕食戊；戊和庚又都取食丁，因此兩者同時具有捕食與競爭關係。",
    reasoning: "甲、乙都是生產者，不會競爭食物；丙與丁都取食乙，丙增加會加劇丁的競爭；己會捕食丙，所以己減少反而有利於丙，而不是不利。",
  },
  "cap-110-nature-42": {
    summary: "酵素在口腔仍有活性，進入 pH＜5 的胃後被完全破壞；即使之後到達接近 pH 8 的小腸也不會恢復，所以圖 C 最合理。",
    reasoning: "最適條件是活性最高的條件，不代表離開 pH 8 就立刻完全無活性。關鍵是題目明示胃的強酸會造成不可逆破壞，因此任何顯示小腸活性重新升高的圖都不合理。",
  },
  "cap-110-nature-48": {
    summary: "甲蚊每次使用 X 牌後的存活數 35、143、705，都低於使用 Y 牌的 80、406、2404，因此撲殺甲蚊應選 X 牌。",
    reasoning: "相同起始數量下，存活越少代表撲殺效果越好。對乙蚊也是 X 牌各次存活數略低於 Y 牌；而同一藥劑下乙蚊存活又少於甲蚊，所以 A、B、D 都與表中數據相反。",
  },
  "cap-110-nature-49": {
    summary: "蚊子族群原本就存在個體差異，少數蚊子具有較高抵抗力，殺蟲劑淘汰易受影響者並留下抗性個體繁殖。",
    reasoning: "天擇是環境篩選原有變異，不是殺蟲劑為了生存需求而刺激蚊子產生抗性，也不是直接使其突變成另一物種。未接觸藥劑本身更不會讓子代因此獲得遺傳抗性。",
  },
};

export function refineYear110Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year110ExplanationIds = new Set(Object.keys(refinements));
