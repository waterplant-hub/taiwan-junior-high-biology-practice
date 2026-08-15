import type {
  BiologyQuestion,
  ChapterId,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit11Refinement {
  chapterId?: ChapterId;
  topic?: string;
  stem?: string;
  options?: OptionTexts;
  officialAnswer?: OptionId;
}

interface GroupSharedOverride {
  sharedStem?: string;
  sharedFigure?: QuestionFigure | null;
}

const optionIds: OptionId[] = ["A", "B", "C", "D"];
const refinedRoot = "/questions/refined/unit-11";

function figure(
  src: string,
  alt: string,
  width: number,
  height: number,
): QuestionFigure {
  return { src, alt, width, height };
}

const figures: Record<string, QuestionFigure> = {
  "cap-113-nature-14": figure(`${refinedRoot}/cap-113-nature-14--figure.webp`, "113 年會考第 14 題：族群個體數量隨時間變化的甲、乙、丙、丁四階段曲線", 369, 298),
  "cap-113-nature-43": figure(`${refinedRoot}/cap-113-nature-43--figure.webp`, "113 年會考第 43 題：IUCN 受脅物種評估與分類流程圖", 718, 543),
  "cap-113-nature-49": figure(`${refinedRoot}/cap-113-nature-49--figure.webp`, "113 年會考第 49 題：大氣二氧化碳濃度隨時間變化曲線", 795, 455),
  "cap-112-nature-14": figure(`${refinedRoot}/cap-112-nature-14--figure.webp`, "112 年會考第 14 題：甲、乙、丙、丁四種生物體內 DDT 含量表", 540, 175),
  "cap-112-nature-44": figure(`${refinedRoot}/cap-112-nature-44--figure.webp`, "112 年會考第 44 題：四種飲品的營養、碳排放、土地面積與用水量資料", 1280, 375),
  "cap-111-nature-23": figure(`${refinedRoot}/cap-111-nature-23--figure.webp`, "111 年會考第 23 題：稻、鼠、蛇、鷹食物鏈與甲、乙、丙、丁能量塔", 1215, 265),
  "cap-104-nature-43": figure(`${refinedRoot}/cap-104-nature-43--figure.webp`, "104 年會考第 43 題：含氮物質與氮氣之間的部分氮循環示意圖", 1328, 1184),
  "cap-106-nature-2": figure(`${refinedRoot}/cap-106-nature-2--figure.webp`, "106 年會考第 2 題：南極四種動物及其食物來源表", 390, 250),
  "cap-106-nature-38": figure(`${refinedRoot}/cap-106-nature-38--figure.webp`, "106 年會考第 38 題：甲、乙、丙、丁四階層的總能量長條圖", 385, 300),
  "cap-107-nature-41": figure(`${refinedRoot}/cap-107-nature-41--figure.webp`, "107 年會考第 41 題：甲、乙兩條食物鏈的能量塔", 390, 260),
  "cap-108-nature-40": figure(`${refinedRoot}/cap-108-nature-40--figure.webp`, "108 年會考第 40 題：生產者、消費者、微生物與氮氣間的氮循環示意圖", 625, 550),
  "cap-109-nature-28": figure(`${refinedRoot}/cap-109-nature-28--figure.webp`, "109 年會考第 28 題：蛇、蚱蜢、蜘蛛與蜥蜴的主要食物來源表", 390, 255),
  "cap-110-nature-36": figure(`${refinedRoot}/cap-110-nature-36--figure.webp`, "110 年會考第 36 題：甲、乙、丙、丁、戊、己、庚生物的食物網", 310, 315),
  "basic-98-first-nature-9": figure(`${refinedRoot}/basic-98-first-nature-9--figure.webp`, "98 年第一次基測第 9 題：草、蝗蟲、蟾蜍、浣熊、老鼠、蛇、鹿與狼的食物網", 440, 470),
  "basic-99-first-nature-30": figure(`${refinedRoot}/basic-99-first-nature-30--figure.webp`, "99 年第一次基測第 30 題：太陽、甲、乙、丙、丁之間的能量流動圖", 300, 420),
  "basic-100-first-nature-7": figure(`${refinedRoot}/basic-100-first-nature-7--figure.webp`, "100 年第一次基測第 7 題：池塘剖面中的岸邊植物、水草、魚與蝦", 1640, 959),
  "basic-100-first-nature-44": figure(`${refinedRoot}/basic-100-first-nature-44--figure.webp`, "100 年第一次基測第 44 題：兔、樹與環境之間碳和水的流動示意圖", 1568, 1003),
  "basic-99-second-nature-7": figure(`${refinedRoot}/basic-99-second-nature-7--figure.webp`, "99 年第二次基測第 7 題：甲、乙、丙、丁四階層的能量金字塔", 235, 205),
  "basic-99-second-nature-10": figure(`${refinedRoot}/basic-99-second-nature-10--figure.webp`, "99 年第二次基測第 10 題：魷魚、鱈魚、小魚與浮游動物的食物來源表", 340, 235),
  "basic-100-second-nature-1": figure(`${refinedRoot}/basic-100-second-nature-1--figure.webp`, "100 年第二次基測第 1 題：生物乙附著並吸取生物甲養分的示意圖", 330, 315),
  "basic-100-second-nature-22": figure(`${refinedRoot}/basic-100-second-nature-22--figure.webp`, "100 年第二次基測第 22 題：甲、乙、丙三階層的能量金字塔", 1207, 1303),
  "basic-101-first-nature-15": figure(`${refinedRoot}/basic-101-first-nature-15--figure.webp`, "101 年第一次基測第 15 題：四位同學生態瓶所放材料的比較表", 1608, 978),
  "basic-101-first-nature-24": figure(`${refinedRoot}/basic-101-first-nature-24--figure.webp`, "101 年第一次基測第 24 題：甲、乙、丙、丁四階層總能量長條圖", 1422, 1106),
  "basic-102-first-nature-8": figure(`${refinedRoot}/basic-102-first-nature-8--figure.webp`, "102 年第一次基測第 8 題：砂藻、蝦、烏賊、海鳥、鯨魚、企鵝與海豹的食物網", 1395, 1127),
  "basic-94-second-nature-29": figure(`${refinedRoot}/basic-94-second-nature-29--figure.webp`, "94 年第二次基測第 29 題：玉米、蝗蟲、麻雀、松鼠、鼠與老鷹的食物網", 1327, 1186),
  "basic-95-second-nature-31": figure(`${refinedRoot}/basic-95-second-nature-31--figure.webp`, "95 年第二次基測第 31 題：100 公斤綠草及甲、乙、丙生物的食物鏈", 1096, 1436),
  "basic-96-first-nature-54": figure(`${refinedRoot}/basic-96-first-nature-54--figure.webp`, "96 年第一次基測第 54 題：草、水牛、獅子、禿鷹與細菌的食物網", 1068, 1472),
  "basic-96-second-nature-9": figure(`${refinedRoot}/basic-96-second-nature-9--figure.webp`, "96 年第二次基測第 9 題：加入乙生物前後甲生物個數的實線與虛線曲線", 1610, 977),
  "basic-90-first-nature-55": figure(`${refinedRoot}/basic-90-first-nature-55--figure.webp`, "90 年第一次基測第 55 題：TBT 工廠、河流、海流與甲乙丙丁四地位置圖", 1498, 1050),
  "basic-90-second-nature-33": figure(`${refinedRoot}/basic-90-second-nature-33--figure.webp`, "90 年第二次基測第 33 題：草、蝗蟲、鳥、蛙、兔、羊與豹的食物網", 310, 355),
  "basic-92-second-nature-13": figure(`${refinedRoot}/basic-92-second-nature-13--figure.webp`, "92 年第二次基測第 13 題：學力湖一至十二月平均水位變化曲線", 1563, 1006),
  "basic-92-second-nature-14": figure(`${refinedRoot}/basic-92-second-nature-14--figure.webp`, "92 年第二次基測第 14 題：狩獵、農耕與工業時期的世界人口成長曲線", 1774, 887),
  "basic-93-first-nature-20": figure(`${refinedRoot}/basic-93-first-nature-20--figure.webp`, "93 年第一次基測第 20 題：甲、乙、丙、丁、戊、己、庚生物的食物網", 1254, 1254),
};

const groupSharedOverrides: Record<string, GroupSharedOverride> = {
  "cap-107-nature-group-49-50": {
    sharedFigure: figure(
      `${refinedRoot}/cap-107-nature-group-49-50--shared.webp`,
      "107 年會考偏側蛇蟲草菌題組：菌絲從蟻屍長出的照片與標示",
      480,
      285,
    ),
  },
  "basic-96-first-betta-ecology": {
    sharedStem:
      "請閱讀下列敘述後，回答以下兩題：蓋斑鬥魚常見於鄉間的稻田和池塘。雄魚體色鮮豔，在清明節前後，背、腹、尾鰭會延長至原來體長一倍左右，身上鱗片會散發紅、藍光澤；雌魚體色較暗，尾鰭較短。繁殖期間雄魚會固守自己的領域，驅逐其他雄魚，並在水面不斷吐出氣泡築成泡泡巢。受精後，雄魚會將魚卵啣至泡泡巢孵化，孵化期間還會守護魚卵，避免雌魚接近並吃掉魚卵，因此幼魚存活率約有五成，繁殖飼養相當容易。蓋斑鬥魚具有稱為「迷器」的呼吸輔助器官，能在氧氣濃度很低的水中生存，可在 4°C 至 38°C 水溫中存活，喜歡吃昆蟲或孑孓；一尾約 0.6 克重的蓋斑鬥魚一天可吞食約 300 隻孑孓或蛹。",
    sharedFigure: null,
  },
  "basic-90-first-tbt": {
    sharedStem:
      "根據下列資料，回答以下四題：環境中有些化合物進入生物體時，會產生類似激素的作用，干擾生物正常生理機能，例如有些土壤含有多氯聯苯、空氣含有戴奧辛，水中則可能含有 TBT（三丁基錫）等，這些化合物稱為環境荷爾蒙。TBT 常被添加於船舶油漆以防止貝類或藻類附著，也曾添加於工業用水及衣物。TBT 微量溶於水，進入生物體後會經由食物鏈轉移並累積；例如蚵螺喜食牡蠣，而牡蠣會濾食水中的浮游生物。持續污染可能造成雌蚵螺雄性化，使族群數量減少甚至消失。TBT 對人體的影響尚未完全了解，但國際組織已提出警告，部分國家已禁止使用，我國也將其公告為毒性物質，製造、輸入及販賣須先申報。",
    sharedFigure: null,
  },
  "basic-92-first-carbon-cycle": {
    sharedStem:
      "根據下圖，回答以下兩題：自然界的碳元素在大氣、陸地、海洋和生物之間不停循環，主要途徑如圖（三十）所示。",
    sharedFigure: figure(
      `${refinedRoot}/basic-92-first-carbon-cycle--shared.webp`,
      "92 年第一次基測第 52 至 53 題：大氣、陸地、海洋與生物之間的碳循環圖",
      1312,
      810,
    ),
  },
};

const refinements: Record<string, Unit11Refinement> = {
  "basic-98-second-nature-8": {
    stem: "有關氮氣、氮元素與生物或生態環境之關係，下列敘述何者正確？",
    options: ["氮氣是造成溫室效應的主要氣體之一", "陸生的植物可直接利用大氣中的氮氣", "氮元素是構成生物體蛋白質的重要成分之一", "氮元素進入生物體後，就無法再回歸生態環境中"],
  },
  "basic-97-second-nature-9": {
    stem: "某草原上有三隻長頸鹿、五隻羚羊、四隻大象和兩隻獅子。依據上述資料，下列敘述何者正確？",
    options: ["羚羊屬於初級消費者", "此草原共有四個群集（群落）", "獅子和羚羊之間為競爭關係", "長頸鹿、羚羊、大象和獅子可共同組成一個生態系"],
  },
  "basic-99-second-nature-7": {
    stem: "將含有生產者及消費者的食物鏈，依生物所含能量多寡的關係繪製成能量金字塔，如圖（四）所示。此塔中哪一層的生物可利用日光進行合成葡萄糖的反應？",
    options: ["甲", "乙", "丙", "丁"],
  },
  "basic-99-second-nature-10": {
    stem: "表（一）為某海洋環境中的動物及其食物來源。根據此表判斷，下列何者既是初級消費者又是次級消費者？",
    options: ["魷魚", "鱈魚", "小魚", "浮游動物"],
  },
  "basic-100-second-nature-1": {
    stem: "小俊在野外觀察到生物乙附著在生物甲上，如圖（一）所示。研究發現，生物乙會直接吸取生物甲的有機養分，且對生物甲的生長有害。這兩種生物的交互關係最可能為下列何者？",
    options: ["捕食", "競爭", "寄生", "合作"],
  },
  "basic-100-second-nature-22": {
    stem: "甲、乙及丙分別代表某食物鏈中的生產者、初級消費者及次級消費者，將此食物鏈繪製成能量金字塔，如圖（十一）所示。甲、乙及丙階層之間能量流動的相關敘述，下列何者正確？",
    options: ["能量由甲向上流動，丙所含的能量最多", "能量由甲向上流動，甲所含的能量最多", "能量由丙向下流動，丙所含的能量最多", "能量由丙向下流動，甲所含的能量最多"],
  },
  "basic-94-first-nature-3": {
    stem: "關於砍伐山坡林木對生態環境所造成的影響，下列敘述何者錯誤？",
    options: ["生物群集（群落）的複雜性增加", "固著土壤的功能變差", "涵養水源的能力減弱", "淨化空氣的功能降低"],
  },
  "basic-94-first-nature-8": {
    stem: "關於紅樹林生態系的敘述，下列何者錯誤？",
    options: ["紅樹林食物豐富，可供許多生物棲息", "紅樹林面積增加會加強溫室效應", "紅樹林中的各個族群可共同組成群集（群落）", "紅樹林中的群集與非生物環境可共同組成生態系"],
  },
  "basic-94-second-nature-1": {
    stem: "下列何種措施有助於維護臺灣生物的多樣性？",
    options: ["擴大農業耕地面積", "由國外引進外來種生物", "設立國家公園與生態保護區", "捕捉溪流中的魚飼養在水族箱裡"],
  },
  "basic-94-second-nature-9": {
    stem: "下列生物的構造，何者是為了減少表面積所演化而成？",
    options: ["仙人掌的針狀葉", "人類小腸上的絨毛", "響尾蛇身上的鱗片", "麻雀翅膀上的羽毛"],
  },
  "basic-94-second-nature-29": {
    stem: "食物網中，以生產者為食的動物為初級消費者，以初級消費者為食的動物為二級消費者，其餘依次類推。圖（十三）為一玉米田中的食物網，下列何種生物同時擔任二、三級消費者？",
    options: ["老鷹", "麻雀", "松鼠", "蝗蟲"],
  },
  "basic-95-first-nature-2": {
    stem: "中國大陸曾大量撲殺麻雀，幾年後農作物卻遭受更嚴重的蝗災。造成蝗蟲數量增加最可能的原因為何？",
    options: ["蝗蟲的天敵減少", "蝗蟲少了麻雀的競爭", "環境中出現外來種的競爭", "麻雀死了可供蝗蟲做為食物"],
  },
  "basic-95-first-nature-17": {
    stem: "小偉在校園裡的小動物園內觀察到 3 棵菊花、7 隻青蛙、19 隻螞蟻，下列敘述何者正確？",
    options: ["小偉觀察到螞蟻正在搬運枯萎的菊花葉子，因此螞蟻是扮演分解者的角色", "因為螞蟻的個體比青蛙小，所以螞蟻的族群比青蛙小", "菊花、青蛙、螞蟻可組成一個生態系", "小偉至少觀察到 3 個族群"],
  },
  "basic-95-first-nature-47": {
    stem: "下列哪一種作用或現象發生時，會增加大氣中的溫室氣體？",
    options: ["燃燒化石燃料所產生的氣體", "海洋中碳酸鹽類的沉積作用", "植物行光合作用產生的氣體", "水蒸氣凝結為雨滴降落地面"],
  },
  "basic-95-first-nature-52": {
    stem: "花生的根與其根中固氮細菌彼此間的關係，為下列何者？",
    options: ["競爭", "寄生", "附生", "共生"],
  },
  "basic-95-second-nature-31": {
    stem: "圖（十一）為某一穩定生態系中甲、乙、丙三種生物間的食物鏈，則此三種生物自其食物中獲得能量多寡的關係，最可能為下列何者？",
    options: ["甲＞乙＞丙", "丙＞乙＞甲", "乙＞甲＞丙", "甲＝乙＝丙"],
  },
  "basic-95-second-nature-44": {
    stem: "臺南七股的曾文溪河口是河流和海洋的交會處，河川中的有機物質會在此處堆積，吸引許多節肢動物及鳥類在此聚集，黑面琵鷺及許多其他候鳥也在此度冬。依據上述，下列敘述何者最適當？",
    options: ["每年到此度冬的所有候鳥可稱為一個族群", "在此棲息的所有生物族群可組成一個群集（群落）", "在此棲息的黑面琵鷺和節肢動物可組成一個生態系", "在此生態系中，節肢動物為生產者，鳥類為消費者"],
  },
  "basic-95-second-nature-54": {
    stem: "人厭槐葉蘋對許多生態系而言屬於外來種生物，下列何者不是此外來種成為生態殺手的主要原因？",
    options: ["人類的傳播", "當地沒有天敵", "可適應當地環境", "繁殖速度比原生種慢"],
  },
  "basic-96-first-nature-3": {
    stem: "白袍子樹的葉柄基部可以分泌甜液吸引螞蟻，螞蟻為了吸食甜液便會努力守護白袍子樹，不讓其他昆蟲傷害它。下列何者為這兩種生物的交互作用關係？",
    options: ["共生", "寄生", "捕食", "競爭"],
  },
  "basic-96-first-nature-16": {
    stem: "當平流層中的臭氧含量逐漸減少時，對地球環境造成最直接的危機為何？",
    options: ["地表溫室效應增加，全球氣溫上升", "地表紫外線入射量增加，生物健康受到影響", "地表冰川因太陽輻射量增加而融化，海平面上升", "太陽輻射增加造成地表海水大量蒸發，海平面下降"],
  },
  "basic-96-first-nature-53": {
    stem: "下列有關蓋斑鬥魚的推論，何者正確？",
    options: ["該魚可作為標示淡水水中含氧程度的指標", "雌魚會守護魚卵，以完成種族延續的工作", "每年秋冬水質較佳時，是該魚的繁殖季節", "幼魚存活率非常低，近年來數量銳減許多"],
  },
  "basic-96-first-nature-54": {
    stem: "蓋斑鬥魚在其食物鏈中的角色，最接近於圖（二十一）中哪一種生物？",
    options: ["水牛", "獅子", "細菌", "禿鷹"],
  },
  "basic-96-second-nature-9": {
    stem: "如圖（六）所示，若甲生物單獨培養時，其數量變化曲線以實線表示；若加入乙生物，甲生物數量變化以虛線表示，則甲、乙兩生物間的互動關係，最不可能為下列何者？",
    options: ["共生", "競爭", "寄生", "捕食"],
  },
  "basic-90-first-nature-34": {
    stem: "某一山區的山羌在 1998 年至 1999 年間的族群個體變化如下：出生 15 隻，死亡 7 隻，同時期又有 2 對山羌遷入，沒有遷出。下列有關此山羌族群的推論，何者最適當？",
    options: ["族群個體數量減少", "族群個體數量維持平衡", "族群個體數量有增加趨勢", "族群所在環境逐漸惡化"],
  },
  "basic-90-first-nature-53": {
    stem: "有關環境荷爾蒙的敘述，下列何者正確？",
    options: ["皆由生物體內的細胞分泌", "會影響到生物激素的作用", "只會干擾生殖器官的發育", "在水域環境中才能夠發現"],
    officialAnswer: "B",
  },
  "basic-90-first-nature-54": {
    stem: "根據上文推斷，在同一受 TBT 污染的水域中，下列何者含 TBT 的濃度最高？",
    options: ["海水中", "牡蠣族群", "蚵螺族群", "浮游生物"],
    officialAnswer: "C",
  },
  "basic-90-first-nature-55": {
    stem: "某河流沿岸有一製造 TBT 的工廠，因意外事故導致 TBT 外洩並流入河口附近。海流沿海岸由南朝北流，如圖（十九）。圖中甲、乙、丙、丁四處，何地的雌蚵螺產生雄性生殖器的機會最大？",
    options: ["甲地", "乙地", "丙地", "丁地"],
    officialAnswer: "B",
  },
  "basic-90-first-nature-56": {
    stem: "針對「減少 TBT 對環境的污染」這個觀點而言，下列何項措施最有效？",
    options: ["公告 TBT 為毒性物質，要申報才能製造", "禁止使用 TBT，並研發無毒性的代用品", "研究 TBT 對生物及人體的危害程度", "對輸入及販賣 TBT 者加徵課稅"],
  },
  "basic-90-second-nature-2": {
    stem: "海洋探測船在例行探測任務中，於深度 300 公尺處發現有烏賊、蝦、蟹、魚等，卻沒有綠色植物的蹤影。下列何者是此現象最主要的原因？",
    options: ["溫度太低", "壓力太大", "缺乏陽光", "缺乏空氣"],
  },
  "basic-90-second-nature-33": {
    stem: "圖（十四）為某地區生物的食性關係，若該地的蝗蟲被消滅，則下列何者在短時間內，數量將明顯減少？",
    options: ["兔", "鳥", "羊", "豹"],
  },
  "basic-90-second-nature-44": {
    stem: "關於環境污染的敘述，下列何者正確？",
    options: ["酸雨的形成主要是臭氧溶解於水中", "氟氯碳化合物會破壞地球上空的臭氧層", "空氣污染指標（PSI）越大代表空氣品質越好", "一氧化碳是主要的溫室氣體，造成全球溫度上升"],
  },
  "basic-91-first-nature-28": {
    stem: "森林裏的松鼠數量激增，危害樹木甚鉅，以下何種做法不符合生態保育的原則？",
    options: ["森林裏松鼠繁殖的數量再多都要加以保護", "選擇適當的地點設置陷阱，減少松鼠的數量", "適度開放狩獵活動，適量捕捉森林中的松鼠", "適量增加原棲息地松鼠的天敵，如貓頭鷹等"],
  },
  "basic-91-first-nature-34": {
    stem: "面對日益增加的垃圾所造成的問題，下列何者對減少垃圾的量最有幫助？",
    options: ["做好垃圾分類，資源回收", "以紙類製品代替塑膠製品", "建造焚化爐，減少垃圾體積", "惜物惜福，減少垃圾的產生"],
  },
  "basic-91-first-nature-37": {
    stem: "近半世紀以來，大氣中的溫室氣體含量顯著增加，此現象對地球環境有何影響？",
    options: ["使世界各地的海水面下降", "大氣會吸收更多的地表輻射", "隕石直接撞擊地表的機率增加", "地表接收到的紫外線大量增加"],
  },
  "basic-91-second-nature-12": {
    stem: "有關自然界中物質循環的觀念，下列敘述何者錯誤？",
    options: ["物質可在生物與非生物間循環", "細菌在物質循環上可扮演分解者的角色", "以生物屍體為食的物種，有助於物質循環", "進入生物體的物質均可被生物所利用、分解及排除"],
  },
  "basic-92-first-nature-2": {
    stem: "下列有關水土保持的敘述，何者不正確？",
    options: ["在低窪地區大量抽取地下水，容易造成地層下陷", "在河邊養殖家禽家畜，可能使下游藻類過量產生", "在水庫上游砍伐樹木，會減少水庫的泥沙淤積量", "在坡度陡峭的高山上種植蔬果，會造成土壤流失"],
  },
  "basic-92-first-nature-4": {
    stem: "下列棲地中，何者的生物種類可能最多？",
    options: ["河口沼澤地帶", "丘陵上的茶園內", "平原上的稻田中", "沿海虱目魚塭內"],
  },
  "basic-92-first-nature-27": {
    stem: "國家公園解說員在導覽時說：「前方水塘內有珍稀的水生植物——水韭的族群。」下列何者為族群的意義？",
    options: ["生長於同一時期、同一棲地的同種生物集合", "生長於同一時期、同一棲地的所有生物集合", "生長於同一時期、不同棲地的同種生物集合", "生長於不同時期、同一棲地的所有生物集合"],
  },
  "basic-92-first-nature-52": {
    stem: "C₆H₁₂O₆＋6O₂ → 6CO₂＋6H₂O 可用來表示圖（三十）中哪一途徑的化學反應？",
    options: ["途徑甲", "途徑乙", "途徑丙", "途徑丁"],
  },
  "basic-92-first-nature-53": {
    stem: "根據圖（三十），下列何種化學反應可消耗大氣中的二氧化碳？",
    options: ["燃燒化石燃料", "植物的光合作用", "動物的呼吸作用", "細菌分解有機物"],
  },
  "basic-92-second-nature-1": {
    stem: "白線斑蚊會傳播登革熱。下列何種方法既能預防登革熱的流行，且對生態系的影響最小？",
    options: ["作好垃圾的分類", "減少山坡地濫墾", "倒掉容器的積水", "大量噴灑殺蟲劑"],
  },
  "basic-92-second-nature-13": {
    stem: "圖（四）為學力湖近一百年來每一個月的平均水位變化圖，具有下列何種演化適應的魚類最有可能終年在此環境生存？",
    options: ["需較深的池水生活環境", "具流線型身體能快速游動", "在淺水的下層泥濘中仍能存活", "在環境惡劣時具改變性別的能力"],
  },
  "basic-92-second-nature-14": {
    stem: "圖（五）為世界人口的成長曲線。下列敘述何者錯誤？",
    options: ["工業時期人的出生率遠大於死亡率", "從 1930 年算起，人口增加一倍需要 30 年的時間", "人類在狩獵時期和農耕時期的人口數增加幅度不大", "在 1930 年到 1986 年之間人口成長速率有增大的趨勢"],
  },
  "basic-93-first-nature-5": {
    stem: "自然界中充滿著形形色色的生物，但生態學家們仍努力保護現存的物種。其主要目的為下列何者？",
    options: ["成立自然保留區或國家公園", "維持生物多樣性，達到生態平衡", "創造新的物種，提高國際知名度", "提供國人更多休閒旅遊和教育的環境"],
  },
  "basic-93-first-nature-20": {
    stem: "圖（三）為一食物網的示意圖。下列關於食物網中生物的敘述，何者最合理？",
    options: ["甲可吸收太陽能進行光合作用", "若乙數目增加時，則戊的數目會增加", "若丁的族群消失，則將無法構成食物網", "若有毒物質污染環境時，則在己中的累積濃度最高"],
  },
  "basic-93-first-nature-30": {
    chapterId: "evolution",
    topic: "舊課綱：族群競爭與環境負荷量",
    stem: "生物的演化過程中，當某一族群的個體數過多時，彼此間會互相競爭。發生競爭現象的主要原因為下列何者？",
    options: ["個體間的性狀有差異", "不同個體的基因組合不同", "個體適應環境的能力各有不同", "個體數量超過環境所能提供的最大負荷量"],
  },
  "basic-93-second-nature-6": {
    stem: "關於自然資源保育，下列何種措施最適宜？",
    options: ["保留野生動、植物的品種和棲地", "大量飼養櫻花鉤吻鮭做為寵物", "填平溼地、沼澤以利植物生長", "在所有河口廣植紅樹林"],
  },
  "basic-93-second-nature-12": {
    stem: "關於水資源的保護，下列何種措施最適宜？",
    options: ["在集水區造林並增加施肥，以促進林木生長", "地下水雖因降雨受到持續補充，仍應限量使用", "於水庫內廣設水上休閒設施，以增進水庫的利用", "利用放流管將工廠汙水直接排入海中，以免汙染河水"],
  },
  "basic-93-second-nature-39": {
    stem: "有關水循環的敘述，下列何者正確？",
    options: ["動物可藉排泄作用使水返回水圈", "動物行呼吸作用將水分吸入體內", "大部分的植物從大氣中吸收水分", "水經擴散作用離開植物體"],
  },
};

function applyRefinement(question: BiologyQuestion): BiologyQuestion {
  const refinement = refinements[question.id];
  const groupOverride = question.questionGroup
    ? groupSharedOverrides[question.questionGroup.id]
    : undefined;
  if (question.chapterId !== "ecology" && !groupOverride) return question;
  const nextAnswer = refinement?.officialAnswer ?? question.officialAnswer;
  const answerChanged = nextAnswer !== question.officialAnswer;
  const nextQuestionGroup = question.questionGroup && groupOverride
    ? {
        ...question.questionGroup,
        sharedStem: groupOverride.sharedStem ?? question.questionGroup.sharedStem,
        sharedFigure: groupOverride.sharedFigure === null
          ? undefined
          : groupOverride.sharedFigure ?? question.questionGroup.sharedFigure,
      }
    : question.questionGroup;
  const nextFigure = figures[question.id]
    ?? (question.figure?.src.includes("/questions/refined/") ? question.figure : undefined);

  return {
    ...question,
    chapterId: refinement?.chapterId ?? question.chapterId,
    topic: refinement?.topic ?? question.topic,
    stem: refinement?.stem ?? question.stem,
    options: refinement?.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    officialAnswer: nextAnswer,
    figure: nextFigure,
    questionGroup: nextQuestionGroup,
    officialImageOnly: false,
    aiMetadata: refinement?.chapterId || refinement?.topic
      ? undefined
      : question.aiMetadata,
    explanation: answerChanged
      ? {
          ...question.explanation,
          summary: `依官方參考答案，本題正確答案為 ${nextAnswer}。`,
          optionAnalysis: optionIds.map((id) => ({
            optionId: id,
            reason: id === nextAnswer
              ? "正確；此選項符合題幹與共用閱讀資料。"
              : "不正確；此選項與題幹或共用閱讀資料不符。",
          })),
        }
      : question.explanation,
  };
}

export function refineUnit11Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
