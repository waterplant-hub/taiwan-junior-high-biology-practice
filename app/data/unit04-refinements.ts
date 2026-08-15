import type {
  BiologyQuestion,
  ChapterId,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit04Refinement {
  stem?: string;
  options?: OptionTexts;
  figure?: QuestionFigure | null;
  figureSize?: [width: number, height: number];
  chapterId?: ChapterId;
  topic?: string;
}

interface GroupRefinement {
  sharedStem: string;
  sharedFigure?: QuestionFigure;
}

const optionIds: OptionId[] = ["A", "B", "C", "D"];

function figure(
  src: string,
  alt: string,
  width: number,
  height: number,
): QuestionFigure {
  return { src, alt, width, height };
}

const refinements: Record<string, Unit04Refinement> = {
  // 已有文字的題目：附圖另以官方題本精裁，只保留作答所需圖表。
  "cap-111-nature-45": { figureSize: [1833, 576] },
  "cap-111-nature-46": { figureSize: [1833, 576] },
  "cap-104-nature-21": { figureSize: [1391, 1131] },
  "cap-104-nature-24": { figureSize: [454, 339] },
  "cap-105-nature-32": { figureSize: [294, 216] },
  "cap-105-nature-36": { figureSize: [364, 244] },
  "cap-106-nature-12": { figureSize: [404, 324] },
  "cap-107-nature-26": { figureSize: [484, 474] },
  "cap-107-nature-37": { figureSize: [1222, 1287] },
  "cap-108-nature-37": { figureSize: [254, 344] },
  "cap-108-nature-41": { figureSize: [378, 521] },
  "cap-109-nature-5": { figureSize: [529, 372] },
  "cap-110-nature-11": { figureSize: [1851, 850] },
  "basic-98-first-nature-27": { figureSize: [1642, 958] },
  "basic-98-first-nature-28": { figureSize: [449, 399] },
  "basic-99-first-nature-28": { figureSize: [1016, 1548] },
  "basic-100-first-nature-15": { figureSize: [394, 344] },
  "basic-100-first-nature-26": { figureSize: [1468, 1071] },
  "basic-100-first-nature-52": { figureSize: [254, 269] },
  "basic-101-first-nature-18": { figureSize: [404, 269] },
  "basic-102-first-nature-44": { figureSize: [479, 414] },

  "basic-98-second-nature-11": {
    stem: "圖（四）為手臂血管中血液流動的示意圖，圖中的箭頭代表血液的流動方向，甲、乙、丙分別為三種不同的血管。下列相關敘述何者正確？",
    options: [
      "乙會收縮並產生脈搏",
      "丙為物質交換的場所",
      "甲所含的葡萄糖量比乙、丙少",
      "丙所含的二氧化碳量比甲、乙多",
    ],
    figure: figure(
      "/questions/98/second-q11-official.webp",
      "98 年第二次基測第 11 題：手臂中甲、乙、丙三種血管及血流方向",
      414,
      339,
    ),
  },
  "basic-98-second-nature-26": {
    stem: "人體所儲存的肝糖被分解為葡萄糖後，在血液中是由下列何者運輸至細胞？",
    options: ["白血球", "紅血球", "血小板", "血漿"],
    figure: null,
  },
  "basic-97-second-nature-44": {
    stem: "關於維管束植物體內水分與礦物質之吸收與運輸，下列敘述何者正確？",
    options: [
      "水分主要是由氣孔吸收",
      "礦物質主要是由根部吸收",
      "兩者皆主要以擴散作用向上運輸",
      "水分主要是靠維管束的韌皮部運輸",
    ],
    figure: null,
  },
  "basic-99-second-nature-9": {
    stem: "圖（五）為人體內某器官的動脈及靜脈血液中 O₂ 和 CO₂ 的含量，則此器官最可能是下列何者？",
    options: ["大腦", "肝臟", "肺臟", "腎臟"],
    figure: figure(
      "/questions/99/second-q09-official.webp",
      "99 年第二次基測第 9 題：某器官動、靜脈血液中氧氣與二氧化碳含量圖",
      1760,
      894,
    ),
  },
  "basic-100-second-nature-5": {
    stem: "表（一）為阿宏健康檢查後血液報告的部分內容，表中除了列出阿宏體內三種血球數目的測量值外，也列出正常值。根據此表推測，阿宏的下列何種生理功能最可能出現問題？",
    options: ["運輸養分", "運輸氧氣", "幫助血液凝固", "抵抗細菌入侵"],
    figure: figure(
      "/questions/100/second-q05-official.webp",
      "100 年第二次基測第 5 題：白血球、紅血球及血小板測量值與正常值表",
      2169,
      725,
    ),
  },
  "basic-100-second-nature-26": {
    stem: "圖（十三）為人體血液循環系統的示意圖，箭頭表示血液流動的方向。下列相關敘述何者正確？",
    options: ["甲為左心房", "乙為右心房", "丙為肺靜脈", "丁為肺動脈"],
    figure: figure(
      "/questions/100/second-q26-official.webp",
      "100 年第二次基測第 26 題：標示甲、乙、丙、丁的人體血液循環圖",
      394,
      389,
    ),
  },

  "basic-94-first-nature-20": {
    stem: "圖（十三）為人體中的血液組成。下列敘述何者正確？",
    options: [
      "甲可攜帶氧氣，以供給全身細胞利用",
      "乙使血液呈紅色，具有攜帶養分的功能",
      "丙可對抗外來致病物質，保護人體健康",
      "丁在人體受傷時，可發揮幫助血液凝固的功能",
    ],
    figure: figure(
      "/questions/94/first-q20-official.webp",
      "94 年第一次基測第 20 題：標示甲、乙、丙、丁的血液組成圖",
      399,
      284,
    ),
  },
  "basic-94-first-nature-21": {
    stem: "關於植物的構造與功能，下列敘述何者正確？",
    options: [
      "玫瑰的花是營養器官",
      "樟樹的莖可深入土壤吸收水分",
      "椰子樹利用葉子的擴散作用將水輸送到樹梢",
      "芹菜吸收紅墨水後，莖內的維管束會變成紅色",
    ],
    figure: null,
  },
  "basic-95-first-nature-30": {
    stem: "小呆做綠豆發芽實驗，有一天他心血來潮，將發芽的綠豆以透明玻璃杯倒立罩著，一段時間後，杯壁上出現一些透明液體，如圖（十三）所示。下列有關此綠豆實驗的敘述何者錯誤？",
    options: [
      "杯壁上透明液體只會在夜晚出現",
      "杯壁上的液體可由植物的蒸散作用產生",
      "若以顯微鏡觀察葉子的下表皮可發現氣孔的存在",
      "杯壁上的液體以氯化亞鈷試紙檢測時，試紙會由藍變為粉紅色",
    ],
    figure: figure(
      "/questions/95/first-q30-official.webp",
      "95 年第一次基測第 30 題：透明玻璃杯罩住發芽綠豆的裝置",
      269,
      359,
    ),
  },
  "basic-95-first-nature-34": {
    stem: "小祥用一條塑膠管綁住左手上臂，如圖（十六）所示，結果發現 a 血管變得不明顯，而 b 血管浮現。下列敘述何者正確？",
    options: ["a 為動脈，b 為靜脈", "a 為靜脈，b 為動脈", "a 和 b 皆為動脈", "a 和 b 皆為靜脈"],
    figure: figure(
      "/questions/95/first-q34-official.webp",
      "95 年第一次基測第 34 題：上臂綁住後標示 a、b 血管的手臂圖",
      1519,
      1036,
    ),
  },
  "basic-95-second-nature-26": {
    stem: "下列關於人體中細胞及構造功能的敘述，何者正確？",
    options: [
      "瓣膜可防止血液逆流",
      "靜脈負責進行物質的交換",
      "紅血球主要負責養分的運送",
      "心臟收縮時可壓迫血液流入靜脈",
    ],
    figure: null,
  },
  "basic-95-second-nature-46": {
    stem: "關於植物蒸散作用的敘述，下列何者正確？",
    options: [
      "蒸散作用有助於根部對水分的吸收",
      "木質部與韌皮部共同參與蒸散作用的進行",
      "蒸散作用時，水分移動的方向是由上往下運輸",
      "去除植物葉片讓維管束外露，可加速蒸散作用",
    ],
    figure: null,
  },
  "basic-96-first-nature-27": {
    stem: "有關動脈與靜脈的比較，下列敘述何者正確？",
    options: [
      "動脈壁的厚度皆較小",
      "動脈血的氧濃度皆較大",
      "靜脈血的二氧化碳濃度皆較大",
      "動脈血皆流離心臟，靜脈血皆流向心臟",
    ],
    figure: null,
  },
  "basic-96-second-nature-13": {
    stem: "小佑以榕樹為研究對象，想證明「植物進行蒸散作用時，水經由氣孔離開植物體」。下列何者為最適當的處理方式？",
    options: [
      "將紅色氯化亞鈷試紙，以透明膠布固定於榕樹葉的上表皮，兩分鐘後觀察顏色變化",
      "將藍色氯化亞鈷試紙，以透明膠布固定於榕樹葉的上表皮，兩分鐘後觀察顏色變化",
      "將紅色氯化亞鈷試紙，以透明膠布固定於榕樹葉的下表皮，兩分鐘後觀察顏色變化",
      "將藍色氯化亞鈷試紙，以透明膠布固定於榕樹葉的下表皮，兩分鐘後觀察顏色變化",
    ],
    figure: null,
  },
  "basic-96-second-nature-55": {
    stem: "下列何者為臍帶內臍靜脈血液的顏色？",
    options: ["鮮黃色", "暗黃色", "鮮紅色", "暗紅色"],
    figure: null,
  },
  "basic-96-second-nature-54": {
    stem: "下列動物何者具有胎盤？",
    options: ["企鵝", "袋鼠", "鴿子", "莫氏樹蛙"],
    figure: null,
  },
  "basic-96-second-nature-56": {
    stem: "胎盤與母體的血液並不直接相通，請問是藉何種作用將代謝廢物排除及從母體獲得氧氣及養分？",
    options: ["呼吸作用", "擴散作用", "消化作用", "氧化作用"],
    figure: null,
  },

  "basic-90-first-nature-3": {
    stem: "小杰看見夜市攤販用同一支針幫不同的顧客穿耳洞，這樣的做法可能會導致下列哪一種疾病的傳染？",
    options: ["B 型肝炎", "肺結核", "小兒麻痺", "流行性感冒"],
    figure: null,
  },
  "basic-90-first-nature-5": {
    stem: "下列哪一種物質，不經由血液運送？",
    options: ["尿素", "抗體", "胰液", "生長素"],
    figure: null,
  },
  "basic-90-first-nature-7": {
    stem: "小華腳上的傷口因細菌感染而化膿，此時關於血球的變化，下列敘述何者正確？",
    options: ["紅血球數目增加", "白血球數目增加", "紅血球數目減少", "白血球數目減少"],
    figure: null,
  },
  "basic-90-first-nature-31": {
    stem: "下列哪一項食物對高血壓患者最不適宜？",
    options: ["牛奶", "鹹蛋", "米飯", "香菇"],
    figure: null,
  },
  "basic-90-second-nature-1": {
    stem: "下列哪一種與愛滋病患者的接觸方式，最有可能遭受愛滋病毒的感染？",
    options: ["一起游泳", "共進晚餐", "握手寒暄", "共用刮鬍刀"],
    figure: null,
  },
  "basic-90-second-nature-32": {
    stem: "將二支裝滿水的曲狀玻璃管，管中有一小氣泡，如箭頭所示。用相同的光源照射，並放在通風的室內，其裝置及結果如圖（十三）。則造成兩組氣泡位置差異的主要原因為何？",
    options: [
      "芹菜行光合作用會消耗大部分的水分",
      "芹菜行呼吸作用會消耗大部分的水分",
      "芹菜吸收的水分大多經由葉片的氣孔散失",
      "芹菜吸收的水分大多經由葉片的邊緣散失",
    ],
    figure: figure(
      "/questions/90/second-q32-official.webp",
      "90 年第二次基測第 32 題：有葉與去葉芹菜枝條的氣泡移動實驗",
      1050,
      915,
    ),
  },
  "basic-91-first-nature-17": {
    stem: "直接供給人類心臟所需氧氣及養分的血管若阻塞，會造成心臟的病變。下列何者為此重要血管？",
    options: ["肺動脈", "冠狀動脈", "上大靜脈", "左肺靜脈"],
    figure: null,
  },
  "basic-91-first-nature-26": {
    stem: "下列有關年輪的敘述，何者正確？",
    options: [
      "可根據年輪來判斷玉米的年齡",
      "韌皮部細胞受氣候影響而形成年輪",
      "環紋的部分是木質部，俗稱木材",
      "環紋有深有淺是因形成層細胞大小不同",
    ],
    figure: null,
  },
  "basic-91-first-nature-46": {
    stem: "炎炎夏日，腸病毒又開始流行。下列關於此病的敘述，何者正確？",
    options: [
      "腸病毒的傳染途徑為經口傳染",
      "得過腸病毒後，可獲得終身免疫",
      "腸病毒為兒童疾病，成人不會感染",
      "注意環境清潔和通風可避免感染腸病毒",
    ],
    figure: null,
  },
  "basic-91-second-nature-3": {
    stem: "筱欣在甲、乙二個相同的量筒內各插入一枝粗細相近的芹菜，再加水至液面達到 10 mL 的刻度處，接著摘除乙量筒芹菜的所有葉片，並把二個量筒放在通風處，每 10 分鐘記錄一次液面的讀數，結果如表（一）。筱欣的實驗結果可支持下列哪一敘述？",
    options: ["植物的生長需要通風", "植物行光合作用需要光", "植物行呼吸作用時需要水分", "植物體內水分的散失與葉片有關"],
    figure: figure(
      "/questions/91/second-q03-official.webp",
      "91 年第二次基測第 3 題：有葉與去葉芹菜量筒的液面讀數表",
      2173,
      724,
    ),
  },
  "basic-91-second-nature-8": {
    stem: "興閔被刀子割傷，數日後傷口因感染而紅腫發炎，此時他體內的哪一種細胞會顯著增加？",
    options: ["白血球", "紅血球", "肌肉細胞", "神經細胞"],
    figure: null,
  },
  "basic-91-second-nature-24": {
    stem: "根據下列事實的陳述，最可能作出何項判斷？\n事實一：血液流經微血管時，會有部分液體滲出至組織間。\n事實二：從心臟送至體循環、肺循環的血液量和回流至心臟的血液量相等。",
    options: [
      "人體可回收由微血管滲出的液體",
      "人體的每一器官所含的血量相同",
      "血液在血管中流動的速率都相同",
      "心臟送出的血液都含豐富的氧氣",
    ],
    figure: null,
  },
  "basic-91-second-nature-41": {
    chapterId: "cells",
    topic: "人體組成層次與體腔",
    stem: "有關人體體腔的敘述，下列何者正確？",
    options: [
      "腹腔和骨盆腔以橫膈為分界",
      "胸腔、腹腔和骨盆腔都是腹側體腔",
      "胸腔和腹腔相通，以肋骨下緣為分界",
      "脊髓腔的位置貫穿胸腔、腹腔及骨盆腔",
    ],
    figure: null,
  },
  "basic-92-first-nature-41": {
    stem: "圖（二十二）為松樹樹幹橫切面的模式圖。下列敘述何者正確？",
    options: [
      "這段樹幹的年齡約有六年",
      "甲區運送養分，乙區運送水分",
      "甲區的細胞比乙區的小，生長也較快",
      "乙區的細胞是在氣候溫暖、雨量豐富的季節生長",
    ],
    figure: figure(
      "/questions/92/first-q41-official.webp",
      "92 年第一次基測第 41 題：標示甲、乙的松樹樹幹年輪模式圖",
      1404,
      1120,
    ),
  },
  "basic-92-first-nature-42": {
    stem: "圖（二十三）為心臟及血管示意圖。下列敘述何者正確？",
    options: [
      "心臟收縮，血液由丁→d，甲→a",
      "心臟收縮，血液由甲→a，丙→c",
      "心臟舒張，血液由 a→甲，d→丁",
      "心臟舒張，血液由 c→丙，b→乙",
    ],
    figure: figure(
      "/questions/92/first-q42-official.webp",
      "92 年第一次基測第 42 題：標示甲、乙、丙、丁及 a、b、c、d 的心臟血管圖",
      912,
      1176,
    ),
  },
  "basic-92-second-nature-31": {
    stem: "取帶有等數量葉片的鴨跖草枝條，做不同的處理如表（二），而後放入盛有等量水的 100 mL 量筒中，置於陽光充分的室外 4 小時後，哪一個量筒水位最高？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      "/questions/92/second-q31-official.webp",
      "92 年第二次基測第 31 題：四組鴨跖草葉片塗凡士林處理表",
      1835,
      857,
    ),
  },
  "basic-92-second-nature-32": {
    stem: "圖（十）為某植物莖橫切面的示意圖。下列敘述何者正確？",
    options: [
      "乙細胞分裂會使莖加粗",
      "土壤中的肥料主要是由甲運送",
      "物質在丙內的運送方向為由上往下",
      "開花時，根儲藏的養分是由丙運送至花芽",
    ],
    figure: figure(
      "/questions/92/second-q32-official.webp",
      "92 年第二次基測第 32 題：標示甲、乙、丙的植物莖橫切面",
      1330,
      1182,
    ),
  },
  "basic-93-first-nature-18": {
    stem: "下列何者的成分使得人體血液呈現紅色？",
    options: ["白血球", "紅血球", "血小板", "血漿"],
    figure: null,
  },
  "basic-93-first-nature-29": {
    stem: "溼熱的午後，常可發現植物葉片的尖端和邊緣有許多透明的小珠子，如圖（六）所示。下列關於這些小珠子的敘述，何者最正確？",
    options: [
      "這是停留在葉面的雨水，會讓氯化亞鈷試紙變藍色",
      "這是植物分泌出來的蜜汁，會讓混濁石灰水變澄清",
      "這是植物放出氧氣和雨水形成的水滴，會讓澄清石灰水變混濁",
      "這是植物體內的水分因為來不及蒸散而泌出，會讓氯化亞鈷試紙變粉紅色",
    ],
    figure: figure(
      "/questions/93/first-q29-official.webp",
      "93 年第一次基測第 29 題：葉片尖端與邊緣的小水珠",
      304,
      214,
    ),
  },
  "basic-93-second-nature-2": {
    stem: "已知某種病毒在 pH 值小於 6 的環境中即被消滅，頭頭誤食被該病毒感染的豬肉，則病毒可能在頭頭體內的哪一器官中被消滅？",
    options: ["食道", "胃", "小腸", "大腸"],
    figure: null,
  },
  "basic-93-second-nature-13": {
    stem: "將咸豐草插於裝有黑色墨水的量筒中，如圖（二）所示。1 小時之後將莖橫切，取一薄片置於顯微鏡下觀察，此時所見的情形，最可能為下列何者？",
    options: ["A 圖", "B 圖", "C 圖", "D 圖"],
    figure: figure(
      "/questions/93/second-q13-official.webp",
      "93 年第二次基測第 13 題：咸豐草黑墨水實驗裝置與四個莖橫切面圖形選項",
      1842,
      854,
    ),
  },
  "basic-93-second-nature-38": {
    stem: "微血管為血液與細胞間物質交換的場所，這是因為微血管具有下列何種特質？",
    options: ["管壁細胞上有許多小孔", "僅由單一層細胞構成", "管壁較有彈性", "管徑較粗"],
    figure: null,
  },
};

const groupRefinements: Record<string, GroupRefinement> = {
  "cap-109-nature-group-50-51": {
    sharedStem: "某病患被細菌感染而引發肺炎，經檢查後證實為肺炎鏈球菌感染。以甲、乙、丙代表人體內的三種血球，表（七）為此病患檢驗結果及正常成年人的血球數量統計資料的比較；結果顯示此病患體內對抗病原菌的某種血球數量有異常增加的現象。",
    sharedFigure: figure(
      "/questions/109/group-50-51-context.png",
      "109 年會考第 50 至 51 題：甲、乙、丙三種血球的正常數量與病患檢驗結果表",
      744,
      249,
    ),
  },
  "basic-102-layering": {
    sharedStem: "壓條法是一種園藝植物常見的繁殖方法。例如蘋果樹的枝幹有許多分枝，可選取強健的分枝做壓條：先將枝條環狀剝皮（剝除形成層外圍的構造），再用濕水苔包覆剝皮部位並以塑膠袋包裹固定；待枝條長出較多根後切下，移到果園種植。水苔屬於蘚苔植物，保水性強，可持續提供水分。",
    sharedFigure: figure(
      "/questions/102/q55-56-layering-passage.webp",
      "102 年基測第 55 至 56 題：蘋果樹枝條壓條繁殖的四個步驟",
      1234,
      434,
    ),
  },
  "basic-96-second-placenta": {
    sharedStem: "受精卵埋入子宮壁一段時間後，子宮壁上形成胎盤和臍帶，母體透過胎盤和臍帶與胎兒相連。胎盤是胎生動物特有的構造，隔開母體與胎兒的血液循環，但可透過擴散讓母體和胎兒進行物質與氣體交換。母體動脈血液帶來充足的氧氣，經過胎盤並藉由臍帶中的臍靜脈供給胎兒；胎兒產生的二氧化碳和代謝廢物則運回胎盤，再交由母體排除。",
  },
};

function applyRefinement(question: BiologyQuestion): BiologyQuestion {
  const refinement = refinements[question.id];
  const groupRefinement = question.questionGroup
    ? groupRefinements[question.questionGroup.id]
    : undefined;

  if (!refinement && !groupRefinement) return question;

  const nextFigure = refinement?.figure === null
    ? undefined
    : refinement?.figure ?? (
      refinement?.figureSize && question.figure
        ? {
            ...question.figure,
            width: refinement.figureSize[0],
            height: refinement.figureSize[1],
          }
        : question.figure
    );

  return {
    ...question,
    chapterId: refinement?.chapterId ?? question.chapterId,
    topic: refinement?.topic ?? question.topic,
    stem: refinement?.stem ?? question.stem,
    options: refinement?.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    figure: nextFigure,
    officialImageOnly: refinement ? false : question.officialImageOnly,
    questionGroup: question.questionGroup && groupRefinement
      ? {
          ...question.questionGroup,
          sharedStem: groupRefinement.sharedStem,
          sharedFigure: groupRefinement.sharedFigure,
        }
      : question.questionGroup,
  };
}

export function refineUnit04Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
