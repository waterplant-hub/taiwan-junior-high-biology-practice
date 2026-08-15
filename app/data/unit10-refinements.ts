import type {
  BiologyQuestion,
  ChapterId,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit10Refinement {
  chapterId?: ChapterId;
  topic?: string;
  stem?: string;
  options?: OptionTexts;
  figure?: QuestionFigure | null;
}

interface GroupSharedOverride {
  sharedStem?: string;
  sharedFigure?: QuestionFigure | null;
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

const refinedRoot = "/questions/refined/unit-10";

const groupSharedOverrides: Record<string, GroupSharedOverride> = {
  "cap-104-nature-group-47-48": {
    sharedStem:
      "請閱讀文章後，回答下列問題：「菰草」是生長在水邊的一種開花植物，而「菰黑穗菌」則是一種真菌。當菰草被菰黑穗菌感染時，會導致菰草的莖部因為細胞增生而膨大，形成我們的食物──茭白筍。受感染的植株無法正常開花結果，所以農民為了得到更多的茭白筍，會切下許多此植株的嫩莖種植，使得菰黑穗菌隨之繼續在這些植株中生長，而太晚被採收的茭白筍，其內部會出現許多黑點。",
  },
  "cap-107-nature-group-49-50": {
    sharedFigure: null,
  },
  "cap-109-nature-group-50-51": {
    sharedFigure: figure(
      `${refinedRoot}/cap-109-nature-group-50-51--shared.webp`,
      "109 年會考第 50 至 51 題共用表：甲、乙、丙三種血球的正常數量與病患檢驗結果",
      744,
      249,
    ),
  },
  "basic-95-second-invasive-fern": {
    sharedStem:
      "請閱讀下列敘述後，回答以下兩題：人厭槐葉蘋是一種水生的蕨類，原產於巴西南部。透過植物園、水族館或園藝市場等途徑，目前散布至世界各地的淡水區域中。人厭槐葉蘋主要以營養器官繁殖，繁殖速度甚快，鋪滿整個水面後仍可不斷增生，而且愈長愈厚，使水面下的生物無法行光合作用，也阻絕空氣的交換，使水生動物因缺氧而大量死亡，引發食物鏈崩潰的連鎖效應，造成水生生態體系的毀滅。生物學家發現有一種昆蟲，專門啃食人厭槐葉蘋，便將牠引進澳洲的某個湖泊展開試驗。幾個月後，人厭槐葉蘋大量消失；一年多後，昆蟲和植物間的數量終於達成共存的平衡狀態。",
    sharedFigure: null,
  },
};

const refinements: Record<string, Unit10Refinement> = {
  // 108 課綱會考：表格與分類圖改用穩定名稱，純裝飾圖片移除。
  "cap-114-nature-24": {
    figure: figure(
      `${refinedRoot}/cap-114-nature-24--figure.webp`,
      "114 年會考第 24 題：六種鳥類的科名、俗名與學名表",
      579,
      354,
    ),
  },
  "cap-114-nature-34": {
    figure: figure(
      `${refinedRoot}/cap-114-nature-34--figure.webp`,
      "114 年會考第 34 題：甲、乙是否具有細胞核、細胞膜、葉綠素與菌絲的比較表",
      273,
      299,
    ),
  },
  "cap-112-nature-20": {
    figure: figure(
      `${refinedRoot}/cap-112-nature-20--figure.webp`,
      "112 年會考第 20 題：桔梗蘭、臺灣百合、粗莖麝香百合與臺灣赤楠的俗名及學名表",
      659,
      257,
    ),
  },
  "cap-104-nature-37": {
    figure: figure(
      `${refinedRoot}/cap-104-nature-37--figure.webp`,
      "104 年會考第 37 題：海蛇、海鰻、海兔與海牛的名稱及特徵表",
      390,
      205,
    ),
  },
  "cap-104-nature-48": {
    stem: "根據本文，太晚採收的茭白筍內出現許多黑點，這些黑點可能是由下列何者所組成？",
    figure: null,
  },
  "cap-105-nature-8": {
    figure: figure(
      `${refinedRoot}/cap-105-nature-8--figure.webp`,
      "105 年會考第 8 題：環境溫度與某動物體溫的關係圖",
      350,
      320,
    ),
  },
  "cap-105-nature-16": {
    figure: figure(
      `${refinedRoot}/cap-105-nature-16--figure.webp`,
      "105 年會考第 16 題：家燕與家雨燕的綱、目、屬、種分類資料表",
      1983,
      793,
    ),
  },
  "cap-106-nature-44": {
    stem: "銀杏（學名：Ginkgo biloba）屬於裸子植物，其種子俗稱白果，白果及銀杏葉可用於食用及環境美化。下列關於銀杏的推論，何者正確？",
    figure: null,
  },
  "cap-107-nature-6": {
    figure: figure(
      `${refinedRoot}/cap-107-nature-6--figure.webp`,
      "107 年會考第 6 題：左方魚類與兩生類、右方哺乳類與爬蟲類的園區標示牌",
      350,
      300,
    ),
  },
  "cap-109-nature-4": {
    figure: figure(
      `${refinedRoot}/cap-109-nature-4--figure.webp`,
      "109 年會考第 4 題：小白鷺、中白鷺與大白鷺的俗名及學名表",
      365,
      210,
    ),
  },
  "cap-110-nature-31": {
    figure: figure(
      `${refinedRoot}/cap-110-nature-31--figure.webp`,
      "110 年會考第 31 題：五種臺灣特有種生物的分類關係圖",
      415,
      285,
    ),
  },

  // 97 至 102 年基測：補齊題幹與四個選項，圖片只留下必要的視覺資料。
  "basic-99-first-nature-1": {
    figure: figure(
      `${refinedRoot}/basic-99-first-nature-1--figure.webp`,
      "99 年第一次基測第 1 題：甲兩生類、乙鳥類、丙哺乳類與丁爬蟲類的動物園地圖",
      1268,
      1241,
    ),
  },
  "basic-99-first-nature-26": {
    figure: figure(
      `${refinedRoot}/basic-99-first-nature-26--figure.webp`,
      "99 年第一次基測第 26 題：杜鵑花、蕨類、松樹毬果與真菌的外形及特徵",
      2086,
      754,
    ),
  },
  "basic-100-first-nature-25": {
    figure: figure(
      `${refinedRoot}/basic-100-first-nature-25--figure.webp`,
      "100 年第一次基測第 25 題：蝸牛、海膽、烏賊與海參的外形及名稱表",
      1821,
      864,
    ),
  },
  "basic-97-second-nature-1": {
    stem: "有一種動物的體表光滑溼潤，具有四肢及長尾，常於夜晚出沒於溪流旁的苔蘚地上，其幼體利用鰓呼吸。這種生物最可能是下列哪一類動物？",
    options: ["魚類", "兩生類", "鳥類", "爬蟲類"],
    figure: null,
  },
  "basic-98-second-nature-23": {
    stem: "某動物生長於海洋中，具有管足，體壁內具有許多骨片，外形如圖（十）所示。依照目前使用的動物分類原則，此動物最可能被歸在下列哪一類？",
    options: ["軟體動物", "節肢動物", "棘皮動物", "脊椎動物"],
    figure: figure(
      `${refinedRoot}/basic-98-second-nature-23--figure.webp`,
      "98 年第二次基測第 23 題：具有管足與骨片的海洋動物外形",
      215,
      205,
    ),
  },
  "basic-98-second-nature-27": {
    stem: "圖（十二）為某植物含苞待放的照片。觀察照片中植物的特徵，推論此類植物通常還會具有下列哪一特徵？",
    options: ["具有毬果", "以孢子繁殖", "子房內有胚珠", "具有裸露的種子"],
    figure: figure(
      `${refinedRoot}/basic-98-second-nature-27--figure.webp`,
      "98 年第二次基測第 27 題：某植物含苞待放的照片",
      1415,
      1112,
    ),
  },
  "basic-97-second-nature-2": {
    stem: "阿緯到郊外想要拍攝蕨類植物，他應該選擇下列哪一種植物？",
    options: [
      "葉背有孢子囊堆的觀音座蓮",
      "開著黃色小花的黃花酢漿草",
      "樹枝上有毬果的臺灣二葉松",
      "結了許多紫黑色果實的桑椹",
    ],
    figure: null,
  },
  "basic-97-second-nature-27": {
    stem: "小雪的爸爸拿了一張貴賓券邀全家一同去欣賞油桐樹花下音樂會，券上印有油桐樹的花，如圖（五）。下列關於油桐樹的敘述，何者正確？",
    options: ["能結果實", "不具有形成層", "維管束為散生狀", "屬於單子葉植物"],
    figure: figure(
      `${refinedRoot}/basic-97-second-nature-27--figure.webp`,
      "97 年第二次基測第 27 題：貴賓券上的油桐花",
      290,
      340,
    ),
  },
  "basic-97-second-nature-56": {
    stem: "已知家貓的學名是 Felis domestica，屬於哺乳綱、食肉目、貓科。元元整理了下列資料：獅子是非洲最大的貓科動物；野牛屬於哺乳綱、偶蹄目、牛科；石虎的學名是 Felis bengalensis；狼屬於食肉目、犬科，是現代家犬的祖先。以上動物和家貓的親緣關係由近而遠排列，應為下列何者？",
    options: [
      "石虎―狼―野牛―獅子",
      "石虎―獅子―狼―野牛",
      "獅子―狼―野牛―石虎",
      "獅子―石虎―野牛―狼",
    ],
    figure: null,
  },
  "basic-99-second-nature-23": {
    stem: "已知某類動物的特性為：「行體內受精，胚胎在母體外發育，會照顧幼體，且體溫能維持恆定。」依照現行動物界的分類原則，此類動物的特性和下列何者的特性最為接近？",
    options: ["魚類", "鳥類", "兩生類", "胎生哺乳類"],
    figure: null,
  },
  "basic-99-second-nature-49": {
    stem: "小玲收集有關「櫻花鉤吻鮭」與「次高山鱒」的資料，整理如表（四）。依生物學同種生物的概念，小玲可根據表中哪一項判斷這兩者為同種生物？",
    options: ["俗名", "屬名", "主食", "生殖"],
    figure: figure(
      `${refinedRoot}/basic-99-second-nature-49--figure.webp`,
      "99 年第二次基測第 49 題：櫻花鉤吻鮭與次高山鱒的屬名、主食及生殖資料表",
      2094,
      751,
    ),
  },
  "basic-100-second-nature-8": {
    stem: "在地層中發現下列何者，最能作為該地層過去曾經位於海裡的證據？",
    options: ["隕石", "馬的化石", "火成岩的岩脈", "三葉蟲的化石"],
    figure: null,
  },
  "basic-100-second-nature-19": {
    stem: "小智將他所觀察的四種植物分成兩組：一組為地錢、土馬騌，另一組為筆筒樹、玉米。這種分組方式是根據下列哪一項植物的特徵？",
    options: ["是否會開花", "是否有維管束", "是否有種子產生", "是否利用孢子繁殖"],
    figure: null,
  },
  "basic-101-first-nature-27": {
    figure: figure(
      `${refinedRoot}/basic-101-first-nature-27--figure.webp`,
      "101 年基測第 27 題：爬蟲類、棘皮動物與節肢動物特徵的集合圖",
      385,
      350,
    ),
  },
  "basic-102-first-nature-4": {
    figure: figure(
      `${refinedRoot}/basic-102-first-nature-4--figure.webp`,
      "102 年基測第 4 題：開花植物、蕨類植物、蘚苔植物與裸子植物四個園區示意圖",
      415,
      300,
    ),
  },
  "basic-102-first-nature-49": {
    figure: null,
  },

  // 90 至 96 年基測：完整 OCR 文字化，必要分類圖以穩定名稱保留。
  "basic-94-first-nature-9": {
    stem: "小威想讓阿湘認識公園中單子葉的植物，他應選擇具有下列哪一種特徵的植物？",
    options: ["成熟葉背有孢子囊堆", "不會產生種子", "葉脈為平行脈", "不會開花"],
    figure: null,
  },
  "basic-94-first-nature-30": {
    stem: "有關生物分類階層的敘述，下列何者正確？",
    options: [
      "同科必同屬",
      "同綱必同目",
      "同綱的親緣比同科的親緣近",
      "同屬的親緣比同綱的親緣近",
    ],
    figure: null,
  },
  "basic-94-first-nature-35": {
    stem: "化石除了能作為地質年代的指標，也能幫助了解古生物當時的生存環境。下列有關化石的推論，何者錯誤？",
    options: [
      "西伯利亞冰原中挖出的大象化石，全身長有長毛，可推論當時的氣候較寒冷",
      "有珊瑚化石出現的地層，當時的沉積環境是熱帶且溫暖清澈的淺海海域",
      "臺灣東北角海岸的岩層表面有海膽化石出露，可以佐證臺灣島曾經抬升",
      "地層中出現三葉蟲的化石，可判定該地層為古生代的陸地沉積岩層",
    ],
    figure: null,
  },
  "basic-94-second-nature-6": {
    stem: "圖（三）將植物依其特徵分成甲、乙、丙、丁四個家族。若有一植物具有維管束，且會產生裸露的種子，則此植物應屬於哪一家族？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-94-second-nature-6--figure.webp`,
      "94 年第二次基測第 6 題：松樹與紅豆杉、地錢與土馬騌、榕樹與杜鵑花、筆筒樹與山蘇花的四個植物家族",
      2073,
      759,
    ),
  },
  "basic-94-second-nature-13": {
    stem: "童話故事中，鯉魚國的公主喝下巫婆給的魔藥後，由「魚類」變成「人類」。此種生理構造的轉變，由生物學的觀點判斷，表（一）中何者為合理的描述？",
    options: ["甲、乙", "甲、丁", "乙、丙", "丙、丁"],
    figure: figure(
      `${refinedRoot}/basic-94-second-nature-13--figure.webp`,
      "94 年第二次基測第 13 題：魚類變成人類時受精、體表、生殖與呼吸構造的四項描述表",
      315,
      240,
    ),
  },
  "basic-95-first-nature-10": {
    stem: "小美在一棵高大的樟樹下發現了一株植物，葉呈羽狀複葉，葉背有數百顆咖啡色的圓點，推測其為下列何種植物？",
    options: ["地錢", "鳳仙花", "蒲公英", "小毛蕨"],
    figure: null,
  },
  "basic-95-second-nature-38": {
    stem: "下列有關生物分類中「原核生物界」的敘述，何者正確？",
    options: ["由原生生物界的生物演化而來", "有完整細胞膜而無遺傳物質", "酵母菌為其代表生物", "缺少核膜的構造"],
    figure: null,
  },
  "basic-95-second-nature-53": {
    stem: "有關人厭槐葉蘋的敘述，下列何者錯誤？",
    options: ["會產生種子", "不會開花", "具有維管束的構造", "具有孢子囊的構造"],
    figure: null,
  },
  "basic-96-first-nature-31": {
    stem: "圖（九）為一片天竺葵的葉子，根據該圖，下列敘述何者正確？",
    options: [
      "天竺葵莖部的維管束呈散狀排列",
      "天竺葵若開花，花瓣為 3 的倍數",
      "天竺葵的葉脈中只包含木質部",
      "天竺葵屬於雙子葉植物",
    ],
    figure: figure(
      `${refinedRoot}/basic-96-first-nature-31--figure.webp`,
      "96 年第一次基測第 31 題：天竺葵葉片及其網狀葉脈",
      1473,
      1068,
    ),
  },
  "basic-96-first-nature-46": {
    stem: "依生物特徵將水稻、地錢、蕨類、松和杜鵑五種植物分類如表（九）所示。若水稻屬於乙類，則乙類除了水稻以外，還應包括下列何者？",
    options: ["地錢", "蕨類", "松", "杜鵑"],
    figure: figure(
      `${refinedRoot}/basic-96-first-nature-46--figure.webp`,
      "96 年第一次基測第 46 題：植物依是否形成種子及果實分成甲、乙、丙三類的分類圖",
      440,
      223,
    ),
  },
  "basic-96-second-nature-10": {
    stem: "開花植物可分為單子葉植物與雙子葉植物，兩者可由葉脈分布、莖內維管束排列方式以及子葉數目作區分。根據圖（七），下列選項何者為單子葉植物的特徵？",
    options: ["1a、2b、3a", "1a、2b、3b", "1a、2a、3a", "1b、2b、3b"],
    figure: figure(
      `${refinedRoot}/basic-96-second-nature-10--figure.webp`,
      "96 年第二次基測第 10 題：葉脈、莖內維管束與子葉數目的特徵組合表",
      1629,
      966,
    ),
  },
  "basic-96-second-nature-27": {
    stem: "小英從野外採集到一株植物，經觀察辨識後，發現這是一株蘚苔植物而非蕨類植物，則小英是藉由此植物的下列何種特徵才可以確認？",
    options: ["植株矮小", "無維管束", "以孢子繁殖", "生長在陰溼環境"],
    figure: null,
  },
  "basic-90-first-nature-38": {
    stem: "將四種植物依圖（十一）所示方式分類，這是以何種構造的有無作為分類依據？",
    options: ["花", "種子", "葉形", "維管束"],
    figure: figure(
      `${refinedRoot}/basic-90-first-nature-38--figure.webp`,
      "90 年第一次基測第 38 題：筆筒樹與松樹、椰子樹與榕樹的植物分類圖",
      1260,
      472,
    ),
  },
  "basic-90-second-nature-20": {
    stem: "在分類上，我們將蝴蝶和草蝦歸為一類，那麼依此原則，蚊子可和下列哪一種動物歸為同一類？",
    options: ["螃蟹", "蝌蚪", "蛤蜊", "海馬"],
    figure: null,
  },
  "basic-90-second-nature-29": {
    chapterId: "reproduction",
    topic: "動物的生殖與胚胎發育",
    stem: "吳郭魚、大肚魚、鯨三種水中生物每一次排卵的數量，以吳郭魚最多而鯨最少。下列何者最可能是造成此現象的原因？",
    options: ["體形的大小", "食量的大小", "體溫是否恆定", "受精卵發育的型式"],
    figure: null,
  },
  "basic-90-second-nature-30": {
    stem: "箱內有一隻動物，可能是老鼠、白鷺鷥、烏龜或青蛙其中一種。為了讓同學猜中箱內是何種動物，怡娜先提示：「牠的卵有殼。」如果同學可以再提一個問題，下列哪一個問題最有助於猜中箱內的動物？",
    options: ["牠是恆溫動物嗎？", "牠是肉食動物嗎？", "牠是脊椎動物嗎？", "牠是陸生動物嗎？"],
    figure: null,
  },
  "basic-91-first-nature-16": {
    stem: "如圖（四）所示，將六種生物分成兩類，下列何者為其分類的依據？",
    options: ["脊椎骨的有無", "體溫是否恆定", "生殖方式的不同", "受精方式的不同"],
    figure: figure(
      `${refinedRoot}/basic-91-first-nature-16--figure.webp`,
      "91 年第一次基測第 16 題：鮭魚、海葵、青蛙與蟒蛇、蜘蛛、麻雀的分組圖",
      350,
      145,
    ),
  },
  "basic-91-second-nature-17": {
    stem: "瓦拉將生物依其不同的特性分類如表（二），豬在右列檢索表中應置於哪一位置？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-91-second-nature-17--figure.webp`,
      "91 年第二次基測第 17 題：依卵生、受精方式、哺乳與呼吸器官分類動物的檢索表",
      1550,
      1015,
    ),
  },
  "basic-92-first-nature-5": {
    stem: "小茹根據表（一）所示的檢索表，可查出圖（一）昆蟲所屬的類別為下列何者？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-92-first-nature-5--figure.webp`,
      "92 年第一次基測第 5 題：依腳、觸角與背部形狀分類瓢蟲的檢索表",
      2112,
      674,
    ),
  },
  "basic-92-second-nature-12": {
    stem: "甲、乙、丙、丁、戊是屬於同一目之五種生物，圖（三）表示牠們的分類階層。下列何種生物和戊的親緣關係最接近？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-92-second-nature-12--figure.webp`,
      "92 年第二次基測第 12 題：甲、乙、丙、丁、戊五種生物的目、科、屬、種分類階層圖",
      1312,
      1199,
    ),
  },
  "basic-93-first-nature-9": {
    stem: "在某地的同一岩層中，找到了暴龍和三角龍的化石。依據上述地層中的化石證據，下列推論何者最合理？",
    options: ["牠們的血緣關係相近", "牠們的生存年代相近", "牠們的食物種類相近", "牠們的身體構造相近"],
    figure: null,
  },
  "basic-93-first-nature-17": {
    stem: "下列有關蝴蝶的敘述，何者正確？",
    options: ["變態過程須經過蛹期", "屬於軟體動物門的昆蟲綱", "具有一對翅，可用來飛翔", "生殖方式為體外受精、卵生"],
    figure: null,
  },
  "basic-93-first-nature-40": {
    stem: "下列何種動物的體溫會隨環境溫度的變化而明顯改變？",
    options: ["人類", "海豚", "麻雀", "鯉魚"],
    figure: null,
  },
  "basic-93-first-nature-41": {
    stem: "近代生物學家將生物分為五界。已知結核菌除了細胞膜之外，細胞內沒有其他由膜包圍成的特殊構造。以此推測結核菌應屬於下列哪一界？",
    options: ["原核生物界", "原生生物界", "菌物界", "植物界"],
    figure: null,
  },
  "basic-93-second-nature-32": {
    stem: "阿寶觀賞海豚精彩的表演時，不禁讚嘆：「好聰明的魚啊！」關於這句話的描述，下列何者最合理？",
    options: ["正確，海豚是智商很高的魚", "正確，海豚用肺呼吸，是高等的魚類", "錯誤，海豚會游泳但非魚類", "錯誤，海豚用鰓呼吸但非魚類"],
    figure: null,
  },
};

function applyRefinement(question: BiologyQuestion): BiologyQuestion {
  const refinement = refinements[question.id];
  const groupOverride = question.questionGroup
    ? groupSharedOverrides[question.questionGroup.id]
    : undefined;
  if (!refinement && !groupOverride) return question;

  const nextFigure = refinement?.figure === null
    ? undefined
    : refinement?.figure ?? question.figure;
  const nextQuestionGroup = question.questionGroup && groupOverride
    ? {
        ...question.questionGroup,
        sharedStem: groupOverride.sharedStem ?? question.questionGroup.sharedStem,
        sharedFigure: groupOverride.sharedFigure === null
          ? undefined
          : groupOverride.sharedFigure ?? question.questionGroup.sharedFigure,
      }
    : question.questionGroup;

  return {
    ...question,
    chapterId: refinement?.chapterId ?? question.chapterId,
    topic: refinement?.topic ?? question.topic,
    stem: refinement?.stem ?? question.stem,
    options: refinement?.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    figure: nextFigure,
    questionGroup: nextQuestionGroup,
    officialImageOnly: false,
    aiMetadata: refinement?.chapterId ? undefined : question.aiMetadata,
  };
}

export function refineUnit10Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
