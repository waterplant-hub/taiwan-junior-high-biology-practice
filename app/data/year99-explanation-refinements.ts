import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "basic-99-first-nature-1": {
    summary: "青蛙屬兩生類、蜥蜴屬爬蟲類、鴨嘴獸屬哺乳類，參觀順序為甲、丁、丙。",
    reasoning: "判斷動物類群要看體表、呼吸、生殖與哺乳等特徵；鴨嘴獸雖會產卵，仍因具有乳腺而歸入哺乳類。",
  },
  "basic-99-first-nature-2": {
    summary: "粒線體是細胞進行有氧呼吸、釋放能量的主要場所；粒線體較多的甲細胞通常需要並產生較多能量。",
    reasoning: "吸收光能與產生氧氣是葉綠體的光合作用功能，吸收水分也不由粒線體數量直接決定。",
  },
  "basic-99-first-nature-8": {
    summary: "甲為大腦，能整合感覺訊息並作出向左或向右的判斷。",
    reasoning: "圖中乙為小腦，負責協調動作與平衡；丙為腦幹，可調節呼吸；丁為脊髓，負責訊息傳遞並整合部分反射。",
  },
  "basic-99-first-nature-9": {
    summary: "喝下葡萄糖液後，葡萄糖被吸收使血糖先上升，再經胰島素調節而下降至穩定範圍。",
    reasoning: "健康人體會以負回饋維持血糖恆定：血糖升高促進胰島素分泌，使細胞利用葡萄糖，並促進肝糖合成。",
  },
  "basic-99-first-nature-10": {
    summary: "受精發生在乙植株的花內，因此乙的子房在受精後發育成果實。",
    reasoning: "甲只提供花粉中的精細胞；乙提供卵細胞、胚珠與子房。胚珠發育成種子，種子中的胚兼具甲、乙的遺傳物質，之後長成丙。",
  },
  "basic-99-first-nature-11": {
    summary: "標示中含量最多的是蛋白質；蛋白質雖在胃開始消化，仍會在小腸繼續分解，因此答案是小腸。",
    reasoning: "肝臟製造膽汁、膽囊儲存膽汁，大腸主要吸收水分；這三者都不是以消化蛋白質為主要功能。",
  },
  "basic-99-first-nature-12": {
    summary: "人是內溫動物，環境氣溫大幅改變時，核心體溫仍維持在約 37°C，最符合近乎水平的 D 曲線。",
    reasoning: "人體可藉流汗、皮膚血流及產熱等調節維持體溫，不會讓體溫直接跟著一天的氣溫升降。",
  },
  "basic-99-first-nature-13": {
    summary: "水的 pH 降低表示水中酸性物質增加；增加水草可在光下消耗二氧化碳，使 pH 回升。",
    reasoning: "魚的呼吸及直接灌入二氧化碳都會增加水中二氧化碳；只倒掉一半池水並未針對二氧化碳過多的原因。",
  },
  "basic-99-first-nature-26": {
    summary: "甲開花植物、乙蕨類與丙松樹都具有葉綠體；丁黴菌屬真菌，沒有葉綠體，因此分類依據是有無葉綠體。",
    reasoning: "甲有果實、丙沒有果實；乙與丁可產生孢子，甲與丙可形成種子，這些特徵都不能把甲、乙、丙分在同一組。",
  },
  "basic-99-first-nature-27": {
    summary: "精子經減數分裂形成，每一個正常精子都具有相同數目的單套染色體。",
    reasoning: "王先生為 Rr，精子可能帶 R 或 r；神經細胞則都是由受精卵分裂形成的體細胞，正常情況下染色體數目相同，且都具有 Rr。",
  },
  "basic-99-first-nature-28": {
    summary: "乙葉製造的養分可經韌皮部運往上方生長部位甲，也可運往根部丁，因此選 C。",
    reasoning: "有機養分可由來源部位送往不同需求部位，不是只能單向運輸；水則由根部丁吸收，經木質部向莖丙與葉乙運送。",
  },
  "basic-99-first-nature-29": {
    summary: "丙所指為甲狀腺；甲狀腺素分泌過多會使代謝加快，可能出現食慾增加但體重減輕。",
    reasoning: "甲為副甲狀腺，主要調節血鈣；乙為腎上腺；丁為胰臟，胰島素異常才與血糖和尿糖直接相關。",
  },
  "basic-99-first-nature-30": {
    summary: "能量由太陽進入甲，再由甲傳給乙，因此甲是生產者、乙是初級消費者。",
    reasoning: "丙取得乙的能量，屬較高階消費者；甲、乙、丙的能量都可流向丁，表示丁是分解者。",
  },
  "basic-99-first-nature-47": {
    summary: "若澱粉不能通過膜，試管內仍只有水；取試管內液體加碘液應保持黃褐色，因此選 D。",
    reasoning: "燒杯原本就是澱粉液，加碘液必呈藍黑色，不能用來證明是否穿膜；能判別的是膜另一側的試管內有沒有出現澱粉。",
  },
  "basic-99-first-nature-48": {
    summary: "母雞乙為玫瑰冠，且目前只知其生出玫瑰冠小雞，基因型仍可能是 RR 或 Rr。",
    reasoning: "母雞丙為單冠，必為 rr；母雞丁生出單冠小雞，表示丁與公雞甲都必帶 r，所以兩者皆為 Rr。只有乙仍無法確定。",
  },
  "basic-99-second-nature-1": {
    summary: "多年後白兔消失、黑兔增加，最合理的解釋是白兔在此環境較容易被發現，存活與繁殖機會較低。",
    reasoning: "天擇篩選族群中原有的毛色差異，不是白兔為了適應而主動變黑，也不能僅憑數量變化斷定深灰兔由淺灰兔突變而來。",
  },
  "basic-99-second-nature-6": {
    summary: "丙的鳥嘴約集中在 9～12 mm，丁約在 13～19 mm，兩者分布幾乎不重疊，最不可能取食相同食物。",
    reasoning: "題目假設鳥嘴長度反映食性；兩種鳥的長度分布重疊越少，利用相同食物資源的機會通常越低。",
  },
  "basic-99-second-nature-7": {
    summary: "能量金字塔底層丁含能量最多，代表生產者；生產者能利用日光合成葡萄糖。",
    reasoning: "能量由生產者逐層傳給消費者，傳遞時會因呼吸與散熱而減少，所以愈高營養階層所含能量愈少。",
  },
  "basic-99-second-nature-8": {
    summary: "青黴菌以無性生殖產生孢子；不考慮突變時，後代遺傳物質與親代相同，仍能產生相同抗生素。",
    reasoning: "無性生殖不經配子結合，不會使染色體數目減半；題目也已說明該抗生素不會抑制青黴菌本身。",
  },
  "basic-99-second-nature-9": {
    summary: "圖中靜脈血的氧較高、二氧化碳較低，表示血液流經器官後獲得氧並排出二氧化碳，符合肺臟。",
    reasoning: "大腦、肝臟與腎臟等組織會消耗氧並產生二氧化碳，離開器官的靜脈血應呈相反變化。",
  },
  "basic-99-second-nature-10": {
    summary: "小魚吃藻類時是初級消費者，吃浮游動物時又是次級消費者，因此兼具兩種角色。",
    reasoning: "浮游動物只吃藻類，屬初級消費者；鱈魚吃小魚，魷魚再吃小魚與鱈魚，營養階層都較高。",
  },
  "basic-99-second-nature-23": {
    summary: "體內受精、卵在母體外發育、照顧幼體且能維持體溫，最符合鳥類。",
    reasoning: "魚類與兩生類多為外溫動物；胎生哺乳類的胚胎主要在母體內發育，和題述條件不同。",
  },
  "basic-99-second-nature-24": {
    summary: "乙具有水草，且相較丙、丁沒有小魚或小蝦等額外動物呼吸產生二氧化碳，照光後二氧化碳可能最少。",
    reasoning: "持續照光時，水草光合作用的二氧化碳消耗量大於自身呼吸產生量；甲沒有水草，丙、丁則有更多動物持續呼吸。",
  },
  "basic-99-second-nature-25": {
    summary: "接收血壓訊息後自動調節心跳，屬腦幹控制的生命維持功能。",
    reasoning: "大腦負責意識與高等活動，小腦協調動作和平衡，脊髓主要傳遞訊息並整合部分反射；心跳、呼吸等不隨意調節主要由腦幹負責。",
  },
  "basic-99-second-nature-26": {
    summary: "雌白鼠的基因型必為 bb；若與雄黑鼠交配後出現白色 bb 子代，雄鼠一定提供了 b，因此雄鼠為 Bb。",
    reasoning: "黑色子代只證明雄鼠能提供 B，BB 與 Bb 都可能；只有白色子代能確定雄黑鼠帶有隱性基因 b。",
  },
  "basic-99-second-nature-27": {
    summary: "甲視野看到的細胞較多，代表放大倍率較低；使用相同光圈時，低倍率視野通常較亮，因此選 A。",
    reasoning: "高倍率乙只會看到甲視野的一部分；移動玻片時兩種倍率的影像都向反方向移動，影像模糊則應重新調焦，不是單靠換倍率。",
  },
  "basic-99-second-nature-49": {
    summary: "兩者能交配並產生具有生殖能力的子代，符合生物學上判定同種生物的關鍵條件。",
    reasoning: "俗名可因地區而異；同屬或主食相同只代表部分特徵相近，不能單獨證明屬於同一物種。",
  },
  "basic-99-second-nature-50": {
    summary: "丙為胃，主要負責暫存、攪拌食物與開始蛋白質消化，和提供或調節血糖的直接關係最低。",
    reasoning: "甲肝臟可儲存或釋放葡萄糖，乙小腸吸收葡萄糖，丁胰臟分泌胰島素與升糖素；三者都直接影響血糖。",
  },
  "basic-99-second-nature-55": {
    summary: "只有加入酵素 X 與稀鹽酸的甲試管，其蛋白方塊消失，表示 X 能在酸性環境分解蛋白質。",
    reasoning: "乙的 X 在中性環境未使蛋白消失；丙的 Y 在酸性環境未分解澱粉；丁才顯示 Y 在中性環境能使澱粉消失。",
  },
  "basic-99-second-nature-56": {
    summary: "酵素 Y 能在中性環境分解澱粉，性質符合唾液中的澱粉酶，因此 Y 最可能來自唾腺。",
    reasoning: "X 在酸性環境分解蛋白質，較符合胃液中的蛋白酶；肝臟分泌膽汁但不分泌消化酵素，不能作為 X 或 Y 的來源。",
  },
};

export function refineYear99Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year99ExplanationIds = new Set(Object.keys(refinements));
