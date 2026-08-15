import type {
  BiologyQuestion,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit03Refinement {
  stem?: string;
  options?: OptionTexts;
  figure?: QuestionFigure | null;
  figureSize?: [width: number, height: number];
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

const refinements: Record<string, Unit03Refinement> = {
  "cap-104-nature-1": {
    figure: figure(
      "/questions/refined/unit-03/cap-104-nature-1--figure.webp",
      "104 年會考第 1 題：陽光、二氧化碳、水與氧氣進出葉片的示意圖",
      375,
      475,
    ),
  },
  "cap-105-nature-28": { figureSize: [1907, 825] },
  "cap-106-nature-27": {
    figure: figure(
      "/questions/refined/unit-03/cap-106-nature-27--figure.webp",
      "106 年會考第 27 題：標示甲處的完整人體消化器官示意圖",
      400,
      430,
    ),
  },
  "cap-107-nature-18": { figureSize: [420, 280] },
  "cap-108-nature-45": { figureSize: [570, 280] },
  "cap-109-nature-3": { figureSize: [285, 142] },
  "cap-109-nature-41": { figureSize: [875, 310] },
  "cap-110-nature-42": {
    figure: figure(
      "/questions/refined/unit-03/cap-110-nature-42--figure.webp",
      "110 年會考第 42 題：口腔、胃與小腸中酵素活性的四個選項圖",
      1190,
      310,
    ),
  },
  "basic-97-first-nature-10": { figureSize: [1536, 1024] },
  "basic-97-first-nature-58": { figureSize: [2163, 727] },
  "basic-98-first-nature-1": { figureSize: [1791, 878] },
  "basic-98-first-nature-7": { figureSize: [400, 215] },
  "basic-99-first-nature-11": { figureSize: [390, 315] },
  "basic-99-first-nature-13": { figureSize: [1539, 1022] },
  "basic-100-first-nature-8": {
    figure: figure(
      "/questions/refined/unit-03/basic-100-first-nature-8--figure.webp",
      "100 年第一次基測第 8 題：四種人工食品的內容物與總質量表",
      1200,
      335,
    ),
  },
  "basic-102-first-nature-26": { figureSize: [1923, 818] },

  "basic-98-second-nature-6": {
    stem: "有些水果含有可分解蛋白質的酵素，加入這些酵素可使牛肉軟嫩。圖（一）為在 15°C 時不同 pH 值下，四種此類酵素甲、乙、丙、丁的活性大小。若牛肉置於 15°C 的中性環境中，則加入等量的哪一種酵素，可使牛肉最快變軟？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      "/questions/98/second-q06-official.webp",
      "98 年第二次基測第 6 題：四種酵素在不同 pH 值下的活性曲線",
      1350,
      1165,
    ),
  },
  "basic-97-second-nature-8": {
    stem: "下列有關人體內各種訊息傳導或物質輸送方向的敘述，何者正確？",
    options: [
      "神經傳導：受器→運動神經→感覺神經→動器",
      "血液循環：心臟→動脈→靜脈→微血管",
      "消化管：口腔→食道→胃→小腸→大腸",
      "呼吸道：鼻腔→喉→支氣管→氣管",
    ],
    figure: null,
  },
  "basic-97-second-nature-25": {
    stem: "若光合作用的反應物及產物表示為：甲＋乙→丙＋丁＋戊，其中甲來自空氣，乙與戊是同一物質，丁為氣體並會被釋放到空氣中。下列相關敘述何者正確？",
    options: [
      "甲可以使藍色氯化亞鈷試紙變成粉紅色",
      "乙和戊可以助燃",
      "丙是生物生長的主要能量來源",
      "丁可以使澄清石灰水變混濁",
    ],
    figure: null,
  },
  "basic-99-second-nature-24": {
    stem: "如圖（十），甲、乙、丙、丁是裝有池水的四組密閉透明容器，除了小魚、小蝦、螺或水草是否存在外，其餘實驗條件皆相同。已知在照光的條件下，水草光合作用的速率大於本身呼吸作用的速率。若四組皆持續照光一天，且其內的生物仍生長良好，則下列哪一容器中池水所含的二氧化碳量可能最少？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      "/questions/99/second-q24-official.webp",
      "99 年第二次基測第 24 題：四組密閉池水容器及其中生物",
      1720,
      914,
    ),
  },
  "basic-99-second-nature-50": {
    stem: "圖（二十一）為人體消化系統局部的示意圖，下列哪一器官的功能與提供血糖或調節血糖濃度的相關性最低？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      "/questions/refined/unit-03/basic-99-second-nature-50--figure.webp",
      "99 年第二次基測第 50 題：標示甲、乙、丙、丁的人體消化系統局部圖",
      390,
      360,
    ),
  },
  "basic-99-second-nature-55": {
    stem: "根據共同實驗資料的結果，下列敘述何者是最合理的結論？",
    options: [
      "酵素 X 在中性環境下能使澱粉消失",
      "酵素 Y 在酸性環境下能使澱粉消失",
      "酵素 X 在酸性環境下能使蛋白方塊消失",
      "酵素 Y 在中性環境下能使蛋白方塊消失",
    ],
    figure: null,
  },
  "basic-99-second-nature-56": {
    stem: "若酵素 X 及酵素 Y 的來源都是人體消化腺所分泌的液體，則下列推論何者最合理？",
    options: ["酵素 X 來自唾腺", "酵素 Y 來自唾腺", "酵素 X 來自肝臟", "酵素 Y 來自肝臟"],
    figure: null,
  },
  "basic-100-second-nature-7": {
    stem: "圖（三）是某食物在人體不同消化器官中停留的時間。根據此圖，判斷此食物在接觸膽汁之前，最可能已存在消化管中幾小時？",
    options: ["4 小時", "11 小時", "13 小時", "24 小時"],
    figure: figure(
      "/questions/100/second-q07-official.webp",
      "100 年第二次基測第 7 題：食物在不同消化器官中的停留時間長條圖",
      405,
      320,
    ),
  },
  "basic-100-second-nature-27": {
    stem: "在甲、乙、丙三支試管內加入等量且濃度相同的澱粉液，並依實驗設計分別加入等量的水、唾液、經酵素 X 作用後的唾液，充分搖勻再靜置於適宜的溫度下，1 小時後加入本氏液，隔水加熱觀察顏色。將各試管所含的物質與結果整理如表（四）。根據此表判斷，酵素 X 最可能具有下列何種功能？",
    options: ["分解澱粉", "合成葡萄糖", "分解唾液中的酵素", "合成唾液中的酵素"],
    figure: figure(
      "/questions/100/second-q27-official.webp",
      "100 年第二次基測第 27 題：澱粉液、唾液與本氏液檢測結果表",
      1759,
      655,
    ),
  },
  "basic-100-second-nature-45": {
    stem: "甲、乙、丙、丁四瓶皆裝入 pH 值相同、不含微生物的等量礦泉水，其中乙、丁兩瓶含有水草。密封所有瓶口後，分成兩組，分別以照光或黑暗處理，如表（七）所示。已知水草在照光下利用二氧化碳的速率大於放出二氧化碳的速率，若實驗處理後水草皆能維持生存，則比較各瓶內水的 pH 值，下列敘述何者最合理？",
    options: [
      "甲瓶的 pH 值較乙瓶大",
      "甲、乙兩瓶的 pH 值皆變大",
      "丙瓶的 pH 值較丁瓶大",
      "丙、丁兩瓶的 pH 值皆變大",
    ],
    figure: figure(
      "/questions/100/second-q45-official.webp",
      "100 年第二次基測第 45 題：含水草與不含水草的照光、黑暗實驗表",
      1656,
      950,
    ),
  },

  "basic-94-first-nature-19": {
    stem: "圖（十二）為某生物體內酵素活性變化的示意圖。下列關於此酵素的敘述何者最恰當？",
    options: [
      "不可能為人體內的酵素",
      "在中性 pH 值的環境中活性最高",
      "其活性不會一直隨溫度升高而增加",
      "溫度對酵素活性的影響比 pH 值的影響來得高",
    ],
    figure: figure(
      "/questions/refined/unit-03/basic-94-first-nature-19--figure.webp",
      "94 年第一次基測第 19 題：酵素活性與溫度、pH 值的關係圖",
      1000,
      568,
    ),
  },
  "basic-94-first-nature-32": {
    stem: "關於人體消化過程的敘述，下列何者正確？",
    options: [
      "胃內的酵素在鹼性環境下活性較強",
      "水分進入人體後，最先在大腸中被吸收",
      "唾腺可分泌酵素，將蛋白質分解成胺基酸",
      "人體分解食物及吸收養分的主要部位為小腸",
    ],
    figure: null,
  },
  "basic-94-first-nature-53": {
    stem: "根據共同閱讀資料，推測這位科學家最有可能在進行何種生理作用的研究？",
    options: ["運輸作用", "氧化作用", "光合作用", "蒸散作用"],
    figure: null,
  },
  "basic-94-first-nature-54": {
    stem: "根據共同閱讀資料圖（三十）的結果，若要增加此生理作用的速率，可考慮以下列何種方式進行？",
    options: ["讓水綿照紫光", "讓水綿照綠光", "降低培養液溫度", "減少此種細菌的數量"],
    figure: null,
  },
  "basic-94-second-nature-25": {
    stem: "下列哪一組試管中的溶液，分解蛋白質的效果最佳？",
    options: [
      "3 mL 胃液加二滴 0.1 M 鹽酸",
      "3 mL 胃液加二滴 0.1 M 氫氧化鈉溶液",
      "3 mL 唾液加二滴 0.1 M 鹽酸",
      "3 mL 唾液加二滴 0.1 M 氫氧化鈉溶液",
    ],
    figure: null,
  },
  "basic-95-first-nature-46": {
    stem: "小真為外婆慶生時，吃了一碗豬腳麵線。圖（二十三）為消化系統示意圖，則下列關於食物消化過程的敘述何者正確？",
    options: [
      "若食物不乾淨，會使得甲處水分吸收減少，導致拉肚子",
      "麵線到達乙處，才開始消化分解",
      "食物中的脂肪主要在乙處進行消化吸收",
      "豬腳的養分到達丙處才被消化為小分子後加以吸收",
    ],
    figure: figure(
      "/questions/95/first-q46-official.webp",
      "95 年第一次基測第 46 題：標示甲、乙、丙的消化系統示意圖",
      1524,
      1032,
    ),
  },
  "basic-95-second-nature-6": {
    stem: "下列有關綠色植物進行光合作用的敘述，何者錯誤？",
    options: ["不牽涉能量的轉換", "需要陽光提供能量", "產生葡萄糖和氧氣", "需要水分和二氧化碳"],
    figure: null,
  },
  "basic-96-first-nature-4": {
    stem: "圖（二）為甲、乙、丙、丁四種酵素的反應速率與溫度之關係。哪一種酵素的耐熱程度最低？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      "/questions/96/first-q04-official.webp",
      "96 年第一次基測第 4 題：四種酵素的反應速率與溫度關係圖",
      1575,
      999,
    ),
  },
  "basic-96-first-nature-30": {
    stem: "關於光合作用的敘述，下列何者正確？",
    options: [
      "光反應一定要有光才能進行",
      "暗反應一定要在黑暗中進行",
      "所釋放出的氧氣來自二氧化碳的分解",
      "整個光合作用的過程中不需要吸收能量",
    ],
    figure: null,
  },
  "basic-96-first-nature-37": {
    stem: "蛋白質是由胺基酸組成，此兩者的關係與下列何者相似？",
    options: ["肥皂和甘油", "酒精和乙醇", "澱粉和葡萄糖", "硫酸和氫氧化鈉"],
    figure: null,
  },
  "basic-96-second-nature-32": {
    stem: "晶晶吃了一頓豐盛的晚餐，下列有關食物的消化與吸收何者正確？",
    options: [
      "胃最先將各類的食物進行初步分解",
      "膽囊分泌膽汁分解脂質後由小腸絨毛吸收",
      "吸收的血糖可經胰島素作用後儲存於肝臟",
      "消化管各處皆有消化腺分泌消化液分解食物",
    ],
    figure: null,
  },

  "basic-90-first-nature-16": {
    stem: "小明用水蘊草進行實驗，裝置如圖（二）中甲和乙，並定時記錄試管頂端的氣體量，下列何者為本實驗的主要目的？",
    options: [
      "水溫對光合作用速率的影響",
      "光照對光合作用速率的影響",
      "水量對呼吸作用速率的影響",
      "試管口徑大小對呼吸作用速率的影響",
    ],
    figure: figure(
      "/questions/refined/unit-03/basic-90-first-nature-16--figure.webp",
      "90 年第一次基測第 16 題：15°C 與 30°C 的水蘊草實驗裝置",
      1200,
      547,
    ),
  },
  "basic-90-first-nature-18": {
    stem: "表（二）是運動與所消耗熱量的對照表，小玉以下列的方式各運動 1 小時，何者消耗的熱量最多？",
    options: [
      "以每小時 18 公里的速率騎腳踏車",
      "以每小時 5 公里的速率走路",
      "以每小時 6 公里的速率快步走",
      "以每小時 16 公里的速率跑步",
    ],
    figure: figure(
      "/questions/90/first-q18-official.webp",
      "90 年第一次基測第 18 題：各類運動速率與每小時消耗熱量表",
      1766,
      891,
    ),
  },
  "basic-90-first-nature-23": {
    stem: "表（三）為某瓶優酪乳包裝上的標示，這瓶優酪乳所含的醣類有多少公克？",
    options: ["15 公克", "30 公克", "100 公克", "200 公克"],
    figure: figure(
      "/questions/90/first-q23-official.webp",
      "90 年第一次基測第 23 題：優酪乳重量與每 100 公克營養成分標示",
      1272,
      1237,
    ),
  },
  "basic-90-second-nature-16": {
    stem: "某飲料瓶上的標示如圖（七），有關此飲料的敘述，下列何者正確？",
    options: [
      "此飲料的營養成分以鹽類最多",
      "此飲料宜於同年 3 月 17 日前飲用",
      "此飲料最適宜保存在冷凍庫中",
      "此飲料空瓶回收時，可獲獎勵金 5 元",
    ],
    figure: figure(
      "/questions/90/second-q16-official.webp",
      "90 年第二次基測第 16 題：柳橙汁保存期限、營養成分與回收標示",
      1143,
      1376,
    ),
  },
  "basic-90-second-nature-31": {
    stem: "阿威早餐吃了饅頭，下列何者可以消化饅頭中的澱粉？",
    options: ["唾液", "膽汁", "胃液", "大腸黏液"],
    figure: null,
  },
  "basic-90-second-nature-49": {
    stem: "痛風為體內代謝的尿酸結晶堆積在小關節所引起的疾病，這類病人在飲食中應避免大量攝取哪一類食物？",
    options: ["白米飯", "海鮮", "水果", "奶油"],
    figure: null,
  },
  "basic-91-first-nature-10": {
    stem: "小美買了一盒真珠粉，懷疑裡面可能摻了澱粉。她可利用下列何種試劑檢測？",
    options: ["碘液", "本氏液", "亞甲藍液", "氯化亞鈷溶液"],
    figure: null,
  },
  "basic-91-first-nature-44": {
    stem: "小文利用已萌芽的綠豆進行實驗，裝置如圖（十八）。若干小時後由漏斗倒入一杯清水，同時觀察石灰水的變化。下列何者是實驗中倒入清水的目的？",
    options: [
      "清洗錐形瓶",
      "將瓶內的氣體擠入試管中",
      "促使綠豆生長並快速產生氧氣",
      "促使綠豆生長並快速產生二氧化碳",
    ],
    figure: figure(
      "/questions/refined/unit-03/basic-91-first-nature-44--figure.webp",
      "91 年第一次基測第 44 題：萌芽綠豆、漏斗與石灰水實驗裝置",
      370,
      390,
    ),
  },
  "basic-91-first-nature-51": {
    stem: "優酪乳包裝上標示如圖（二十三），理論上這瓶優酪乳可提供多少熱量？",
    options: ["84 大卡", "89 大卡", "168 大卡", "178 大卡"],
    figure: figure(
      "/questions/91/first-q51-official.webp",
      "91 年第一次基測第 51 題：優酪乳重量與每 100 公克營養成分標示",
      1348,
      1167,
    ),
  },
  "basic-91-second-nature-6": {
    stem: "豬籠草和毛氈苔等捕蟲植物常生長在貧瘠的環境中，主要是藉由捕食昆蟲以獲得該地區缺乏的何種營養素？",
    options: ["碳", "氮", "鐵", "鉀"],
    figure: null,
  },
  "basic-91-second-nature-11": {
    stem: "以下是大豐家庭成員的身體狀況，對於各成員的飲食建議，何者最適當？",
    options: [
      "大豐體重超過標準 20％以上，不可吃含澱粉及油脂的食物",
      "爺爺有高血壓的症狀，應減少攝取含高油脂的食物",
      "姊姊懷孕 6 個月，應多多進補，並多喝一些補酒",
      "妹妹正值青春期，只宜食用高蛋白質和維生素的食物",
    ],
    figure: null,
  },
  "basic-91-second-nature-20": {
    stem: "阿貴患了膽道閉鎖症，無法順利排出膽汁，因而造成膽汁逆流，此現象將會直接導致圖（四）中哪一種器官受損？",
    options: ["胃", "肝臟", "胰臟", "小腸"],
    figure: figure(
      "/questions/refined/unit-03/basic-91-second-nature-20--figure.webp",
      "91 年第二次基測第 20 題：胃、肝臟、膽囊、胰臟與小腸示意圖",
      900,
      720,
    ),
  },
  "basic-91-second-nature-32": {
    stem: "表（三）列出四種食物的成分含量，各成分的含量與「＋」的數目成正比。由此表比較同樣單位的食物，何者所能提供的熱量最少？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      "/questions/refined/unit-03/basic-91-second-nature-32--figure.webp",
      "91 年第二次基測第 32 題：四種食物的醣、蛋白質、脂肪與其他成分含量表",
      1200,
      628,
    ),
  },
  "basic-92-first-nature-3": {
    stem: "下列有關飲食與疾病的敘述，何者正確？",
    options: [
      "避免吃甜食就不會得糖尿病",
      "食鹽中加碘可預防甲狀腺腫大",
      "飲食中長期缺乏鈣質會引起貧血",
      "避免攝取膽固醇就不會罹患心血管疾病",
    ],
    figure: null,
  },
  "basic-92-second-nature-10": {
    stem: "小瑜將甲、乙試管內容物裝妥，並置於裝有溫水的保麗龍盒中 40 分鐘後，各加一滴碘液於試管中，其實驗處理及結果如表（一）。此實驗結果可支持下列哪一項敘述？",
    options: [
      "唾液中含有葡萄糖",
      "水可使澱粉液呈藍黑色",
      "如將水溫升高，反應時間即可縮短",
      "唾液之中含有可將澱粉轉化的物質",
    ],
    figure: figure(
      "/questions/92/second-q10-official.webp",
      "92 年第二次基測第 10 題：澱粉液加入唾液或水後的碘液測試結果表",
      2170,
      725,
    ),
  },
  "basic-92-second-nature-15": {
    stem: "在光合作用的過程中，來自太陽的能量會儲存於下列何種分子上？",
    options: ["水", "氧氣", "葡萄糖", "二氧化碳"],
    figure: null,
  },
  "basic-92-second-nature-30": {
    stem: "圖（九）為一種酵素反應速率與溫度關係之示意圖，此酵素為某種生物生存所必需。這種生物最可能生存於下列何處？",
    options: ["溫帶草原", "熱帶河流", "高溫溫泉", "河口沼澤"],
    figure: figure(
      "/questions/refined/unit-03/basic-92-second-nature-30--figure.webp",
      "92 年第二次基測第 30 題：70°C 至 80°C 間反應速率高、峰值接近 80°C 的酵素反應速率圖",
      1100,
      672,
    ),
  },
  "basic-92-second-nature-48": {
    stem: "阿山經常有皮下瘀血及牙齦出血的現象，依此現象判斷，阿山需要多攝取下表（三）中哪一種食物來補充所缺乏的營養素？（√ 表示含有該項成分）",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      "/questions/92/second-q48-official.webp",
      "92 年第二次基測第 48 題：四種食物所含醣類、蛋白質、鐵、鈣及維生素表",
      2172,
      724,
    ),
  },
  "basic-93-first-nature-39": {
    stem: "關於人類消化系統的敘述，下列何者正確？",
    options: [
      "肝臟所分泌的膽汁，藉導管送入小腸",
      "胰臟屬於消化管的一部分，是分解食物的主要部位",
      "胃腺分泌的胃液呈強酸性，有助於其內的酵素分解醣類",
      "消化液先被分泌至血液，再被運輸至消化器官進行消化作用",
    ],
    figure: null,
  },
  "basic-93-second-nature-31": {
    stem: "有關呼吸作用的敘述，下列何者正確？",
    options: [
      "鳥類、魚類行呼吸作用，所呼出的氣體不同",
      "動物、植物行呼吸作用，所呼出的氣體相同",
      "植物行呼吸作用和光合作用所釋放的氣體相同",
      "青蛙用皮膚呼吸、烏龜用肺呼吸，兩者所釋放的氣體不同",
    ],
    figure: null,
  },
};

const excludedQuestionIds = new Set([
  // 純二氧化碳化學性質判斷，依題庫的「生物題」邊界排除。
  "basic-91-second-nature-4",
]);

function applyRefinement(question: BiologyQuestion): BiologyQuestion {
  const refinement = refinements[question.id];
  if (!refinement) return question;

  const nextFigure = refinement.figure === null
    ? undefined
    : refinement.figure ?? (
      refinement.figureSize && question.figure
        ? {
            ...question.figure,
            width: refinement.figureSize[0],
            height: refinement.figureSize[1],
          }
        : question.figure
    );

  return {
    ...question,
    stem: refinement.stem ?? question.stem,
    options: refinement.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    figure: nextFigure,
    officialImageOnly: false,
  };
}

export function refineUnit03Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows
    .filter((question) => !excludedQuestionIds.has(question.id))
    .map(applyRefinement);
}
