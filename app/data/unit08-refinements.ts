import type {
  BiologyQuestion,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit08Refinement {
  topic?: string;
  stem?: string;
  options?: OptionTexts;
  figure?: QuestionFigure | null;
}

interface GroupSharedOverride {
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

const refinedRoot = "/questions/refined/unit-08";

const groupSharedOverrides: Record<string, GroupSharedOverride> = {
  "cap-108-nature-group-51-52": {
    sharedStem:
      "黑熊分布的數量會因棲地的條件而有差異，研究發現黑熊秋冬季時會大量覓食櫟樹的果實。表（五）為某月分甲、乙、丙三個不同山區內櫟樹和黑熊的調查數量，以及櫟樹的果實結果量。在調查過程中，研究員收集黑熊的糞便，利用脫落在糞便中的腸壁細胞來分析細胞內的遺傳物質，以鑑定黑熊的性別及記錄數量。",
    sharedFigure: figure(
      `${refinedRoot}/cap-108-nature-group-51-52--shared.webp`,
      "108 年會考第 51 至 52 題共用表：三個山區的櫟樹、果實結果量與雌雄黑熊數量",
      880,
      230,
    ),
  },
  "basic-98-moth-selection": {
    sharedStem:
      "某一地區棲息著一種蛾，身體顏色有淺色和深色兩種；牠們晚上活動，白天在樺樹的樹幹上休息；此地區中還生存許多鳥類，會捕食這些蛾。在西元 1935 年，此地區建了許多工廠，不斷產生的黑煙把原先樹幹顏色較淺的樺樹燻黑了。研究員從西元 1910 年開始調查此區淺色蛾和深色蛾的比例，所得結果如表（七）所示。",
    sharedFigure: figure(
      `${refinedRoot}/basic-98-moth-selection--shared.webp`,
      "98 年第一次基測第 55 至 56 題共用表：1910 至 1960 年淺色蛾與深色蛾的比例",
      1691,
      930,
    ),
  },
  "basic-97-second-cat-breeding": {
    sharedStem:
      "家貓的學名是 Felis domestica，屬於哺乳綱、食肉目、貓科，出現在人類家庭生活中已經有數千年歷史。家貓的外型可謂五花八門、爭奇鬥豔，人工培育的品種包括俄羅斯藍貓、美國短毛貓、折耳貓等。表（九）為家貓的性狀之基因代號的一部分，左欄大寫字母表示顯性基因，右欄小寫字母表示隱性基因，表中所列基因不在性染色體上。已知折耳基因 SS 之組合容易造成家貓的先天殘疾甚至致死。",
    sharedFigure: figure(
      `${refinedRoot}/basic-97-second-cat-breeding--shared.webp`,
      "97 年第二次基測第 54 至 56 題共用表：家貓折耳、耳形與毛長的基因代號",
      1854,
      848,
    ),
  },
};

const refinements: Record<string, Unit08Refinement> = {
  // 已有網頁文字的題目：圖片只保留作答所需的表格、統計圖或染色體圖。
  "cap-111-nature-11": {
    figure: figure(
      `${refinedRoot}/cap-111-nature-11--figure.webp`,
      "111 年會考第 11 題：ABO 血型基因型表與四組父母血型配對表",
      691,
      270,
    ),
  },
  "cap-106-nature-10": {
    figure: figure(
      `${refinedRoot}/cap-106-nature-10--figure.webp`,
      "106 年會考第 10 題：四組親代種子顏色與子代表現型預測表",
      1820,
      864,
    ),
  },
  "cap-107-nature-28": {
    figure: figure(
      `${refinedRoot}/cap-107-nature-28--figure.webp`,
      "107 年會考第 28 題：雌性動物甲、乙兩種細胞的染色體示意圖",
      614,
      408,
    ),
  },
  "cap-107-nature-47": {
    figure: null,
  },
  "cap-108-nature-17": {
    figure: figure(
      `${refinedRoot}/cap-108-nature-17--figure.webp`,
      "108 年會考第 17 題：甲、乙、丙、丁四組昆蟲親代基因型表",
      280,
      245,
    ),
  },
  "cap-110-nature-19": {
    figure: figure(
      `${refinedRoot}/cap-110-nature-19--figure.webp`,
      "110 年會考第 19 題：甲至丁時期深色與淺色斑點蛾比例圖",
      560,
      440,
    ),
  },
  "basic-99-first-nature-48": {
    figure: figure(
      `${refinedRoot}/basic-99-first-nature-48--figure.webp`,
      "99 年第一次基測第 48 題：玫瑰冠公雞與三隻母雞的交配結果",
      1545,
      1018,
    ),
  },
  "basic-102-first-nature-25": {
    stem: "已知人體某種性狀有顯、隱性的差別，且其遺傳方式符合孟德爾的遺傳法則。針對此性狀，阿泰觀察祖父、父親、母親、自己、弟弟和妹妹後，做成紀錄如表（四）所示。若不考慮突變的情況，下列哪一人控制此性狀的基因型無法從此表推定？",
    figure: figure(
      `${refinedRoot}/basic-102-first-nature-25--figure.webp`,
      "102 年基測第 25 題：祖父、父母、阿泰、弟弟與妹妹的顯隱性狀紀錄表",
      2169,
      725,
    ),
  },

  // 97 至 100 年第二次基測：以原題與書商文字雙重核對，補齊題幹和選項。
  "basic-98-second-nature-22": {
    stem: "假設人的單、雙眼皮是由一對基因所控制，單眼皮是隱性性狀。小玫原本是單眼皮，因為開刀變成了雙眼皮，之後和天生是雙眼皮的小慕結婚，生了一個單眼皮的女兒。在不考慮突變的情況下，下一胎是雙眼皮的機率是多少？",
    options: ["0", "1/2", "3/4", "1"],
    figure: null,
  },
  "basic-97-second-nature-10": {
    stem: "在正常狀況下，下列有關人類性別與染色體組合的敘述，何者正確？",
    options: [
      "卵子的染色體只有一種組合為 22 條＋X",
      "精子的染色體只有一種組合為 22 條＋X",
      "男性的皮膚細胞內染色體組合為 44 條＋XX",
      "女性的皮膚細胞內染色體組合為 44 條＋XY",
    ],
    figure: null,
  },
  "basic-97-second-nature-54": {
    topic: "遺傳與育種",
    stem: "下列關於家貓的敘述，何者正確？",
    options: [
      "對貓不同外型之偏好而進行育種的過程，稱為天擇",
      "一對短毛貓交配所產下的後代中，可能出現長毛貓",
      "美國短毛貓和俄羅斯藍貓，在生物分類上是屬於不同的「種」",
      "育種時為求品種有穩定特徵，讓貓近親交配並不妨礙貓的後代健康",
    ],
    figure: null,
  },
  "basic-97-second-nature-55": {
    stem: "育種人員將健康折耳貓（Ss）與正常耳貓雜交，則生下後代為折耳貓的機率為何？",
    options: ["1/2", "1/4", "1/8", "1/16"],
    figure: null,
  },
  "basic-99-second-nature-26": {
    stem: "已知豚鼠體毛顏色的遺傳，黑色是由顯性基因 B 所控制，白色是由隱性基因 b 所控制。小柏養了 4 隻豚鼠，體毛顏色和性別如圖（十一）所示。若小柏要知道他養的雄黑鼠的基因型是 BB 或 Bb，將此雄黑鼠和所養的雌鼠進行交配，則下列相關推論何者正確？",
    options: [
      "若和雌黑鼠交配的子代有白鼠，則必為 BB",
      "若和雌黑鼠交配的子代有黑鼠，則必為 Bb",
      "若和雌白鼠交配的子代有黑鼠，則必為 BB",
      "若和雌白鼠交配的子代有白鼠，則必為 Bb",
    ],
    figure: figure(
      `${refinedRoot}/basic-99-second-nature-26--figure.webp`,
      "99 年第二次基測第 26 題：四隻豚鼠的體毛顏色與性別",
      410,
      160,
    ),
  },
  "basic-100-second-nature-31": {
    stem: "甲、乙、丙、丁四個家庭的遺傳關係，如圖（十五）所示。圖中方形代表男性，圓形代表女性，空白者表示有美人尖的特徵，塗黑者表示無美人尖的特徵。若基因型為 RR 或 Rr 會表現出有美人尖，基因型為 rr 會表現出無美人尖，在不考慮突變的情況下，則下列哪一家庭中母親的基因型必定為 Rr？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-100-second-nature-31--figure.webp`,
      "100 年第二次基測第 31 題：甲、乙、丙、丁四個家庭的美人尖遺傳圖",
      1686,
      933,
    ),
  },

  // 94 至 96 年基測：題目改為可搜尋文字，掃描圖只留下核型、表格或構造圖。
  "basic-94-first-nature-10": {
    stem: "圖（七）為一個孕婦做羊膜穿刺檢查後，得到胎兒的染色體圖，由此圖推論，下列敘述何者正確？",
    options: [
      "胎兒是男性",
      "胎兒有 23 對體染色體",
      "胎兒性別由第 21 對染色體決定",
      "胎兒染色體中有 1 對為性染色體",
    ],
    figure: figure(
      `${refinedRoot}/basic-94-first-nature-10--figure.webp`,
      "94 年第一次基測第 10 題：羊膜穿刺所得的胎兒染色體圖",
      1448,
      1086,
    ),
  },
  "basic-94-second-nature-49": {
    stem: "人類的血型是由 Iᴬ、Iᴮ 和 i 三種基因所控制。其中 Iᴬ、Iᴮ 對 i 為顯性基因，血型和基因型的關係如表（七）所示。若阿志的血型為 B 型，其太太小美為 A 型，且兩人已生下一個 A 型男孩和一個 B 型女孩，則下列推論何者錯誤？",
    options: [
      "小美的基因型為 Iᴬi",
      "阿志的基因型為 IᴮIᴮ",
      "第三個孩子為 AB 型的機率為 1/4",
      "第三個孩子為 O 型男孩的機率為 1/8",
    ],
    figure: figure(
      `${refinedRoot}/basic-94-second-nature-49--figure.webp`,
      "94 年第二次基測第 49 題：ABO 血型與基因型關係表",
      270,
      270,
    ),
  },
  "basic-95-first-nature-15": {
    topic: "核移植與遺傳",
    stem: "大雄進行青蛙無性生殖實驗，先取綠色蛙的卵細胞，並去除其細胞核，之後再取褐色蛙的細胞核植入綠色蛙的卵細胞中。則以此種方式產生之幼蛙的性狀為下列何者？",
    options: [
      "保有綠色蛙的性狀",
      "保有褐色蛙的性狀",
      "與綠色蛙及褐色蛙性狀皆不同",
      "保有綠色蛙及褐色蛙各一半的性狀",
    ],
    figure: null,
  },
  "basic-95-first-nature-22": {
    stem: "如圖（九）所示，取基因型為 AA 的草莓植株（甲），以匍匐莖產生子代（乙）；若甲與基因型 aa 的植株受粉，產生草莓果實之種子（丙），則乙和丙的基因型分別為下列何者？",
    options: [
      "乙為 aa，丙為 aa",
      "乙為 Aa，丙為 Aa",
      "乙為 AA，丙為 Aa",
      "乙為 AA，丙為 AA",
    ],
    figure: figure(
      `${refinedRoot}/basic-95-first-nature-22--figure.webp`,
      "95 年第一次基測第 22 題：草莓植株的匍匐莖繁殖與種子形成",
      1624,
      969,
    ),
  },
  "basic-95-second-nature-49": {
    topic: "性聯遺傳",
    stem: "紅綠色盲基因為位於 X 染色體上的隱性基因，而 Y 染色體上無此對偶基因。女生需有兩個隱性基因才會成為色盲，而男生只要 X 染色體有此色盲基因就會罹患色盲。若一男孩的雙親均非紅綠色盲患者，但檢驗證實他患有紅綠色盲，則此基因最可能遺傳自下列何者？",
    options: ["母親", "父親", "父親與母親皆有可能", "無紅綠色盲的祖父"],
    figure: null,
  },
  "basic-96-first-nature-11": {
    stem: "已知捲舌、美人尖、拇指彎曲和酒窩皆為顯性性狀，小明記錄家人的性狀表現如表（三）所示，若表（三）有錯誤，則錯誤出現在哪一個性狀紀錄？",
    options: ["捲舌", "美人尖", "拇指彎曲", "酒窩"],
    figure: figure(
      `${refinedRoot}/basic-96-first-nature-11--figure.webp`,
      "96 年第一次基測第 11 題：父母、小明與妹妹的四種顯性性狀紀錄表",
      1488,
      1057,
    ),
  },
  "basic-96-second-nature-30": {
    topic: "基因與生物技術",
    stem: "生物技術中利用基因選殖的方式，將一段胰島素基因插入酵母菌內，透過酵母菌繁殖以大量生產人類胰島素，用來造福糖尿病患者。根據圖（十六）的細胞模式圖，何處可取出製造胰島素的基因？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-96-second-nature-30--figure.webp`,
      "96 年第二次基測第 30 題：以甲、乙、丙、丁標示構造的酵母菌細胞模式圖",
      1398,
      1125,
    ),
  },
  "basic-96-second-nature-31": {
    topic: "複製技術",
    stem: "據報導，第二匹複製馬是英國科學家從賽馬場中，選出常勝的冠軍馬所複製出來的。關於複製馬的敘述，下列何者錯誤？",
    options: [
      "這是一種生物技術的產物",
      "和試管嬰兒一樣是體外受精",
      "胚胎需在母馬的子宮內發育",
      "毛色和冠軍馬的顏色相同",
    ],
    figure: null,
  },

  // 90 至 93 年基測：依原始題面補齊 OCR，去除不再需要的整題掃描圖。
  "basic-90-first-nature-13": {
    stem: "已知豌豆的高莖基因（T）對矮莖基因（t）是顯性。小明將高莖豌豆和矮莖豌豆雜交後，子代中高莖與矮莖的比例為 64：61。根據此結果，下列敘述何者正確？",
    options: [
      "實驗中，子代高莖豌豆的基因型是 TT",
      "實驗中，子代矮莖豌豆的基因型是 Tt",
      "子代的高莖豌豆再互相交配，所得應均為高莖",
      "子代的矮莖豌豆再互相交配，所得應均為矮莖",
    ],
    figure: null,
  },
  "basic-90-first-nature-35": {
    stem: "將洋蔥根尖細胞中的基因、染色體及細胞核作一比較，此三者大小關係為何？",
    options: [
      "基因＞染色體＞細胞核",
      "細胞核＞染色體＞基因",
      "細胞核＞基因＞染色體",
      "染色體＞細胞核＞基因",
    ],
    figure: null,
  },
  "basic-90-second-nature-5": {
    stem: "宜靜和大雄結婚後，生了兩個女兒，如今再度懷孕。有關胎兒性別的敘述，下列何者正確？",
    options: [
      "胎兒的性別由 Y 染色體決定",
      "受精卵隨機發育成男或女的胎兒",
      "胎兒的性別是出生時決定的",
      "這一胎生兒子的機率是 1/4",
    ],
    figure: null,
  },
  "basic-91-first-nature-15": {
    stem: "大雄的父親能捲舌，其基因型為 RR，母親不能捲舌，其基因型為 rr，若大雄的太太宜靜也不能捲舌，則大雄夫婦所生的第一個子女能捲舌的機率為何？",
    options: ["1", "3/4", "1/2", "1/4"],
    figure: null,
  },
  "basic-91-first-nature-32": {
    stem: "阿漢患有白化症（皮膚缺少黑色素），但他的父母膚色都正常，下列相關敘述何者正確？",
    options: [
      "白化症基因是顯性基因",
      "阿漢只有一個白化症基因",
      "阿漢父母雙方皆有白化症基因",
      "阿漢父母僅有一方有白化症基因",
    ],
    figure: null,
  },
  "basic-91-second-nature-7": {
    stem: "下列有關基因的敘述，何者錯誤？",
    options: [
      "基因位於染色體上",
      "人的基因是由 DNA 所構成",
      "一條染色體上通常只有一個基因",
      "通常一種性狀由成對的基因控制",
    ],
    figure: null,
  },
  "basic-92-first-nature-6": {
    stem: "圖（二）為某校高一新生身高分布情形，此圖可說明下列何種現象？",
    options: [
      "群體中的個體有性狀差異",
      "群體中有少數突變的個體",
      "這是適應環境的結果",
      "身高與男女性別有關",
    ],
    figure: figure(
      `${refinedRoot}/basic-92-first-nature-6--figure.webp`,
      "92 年第一次基測第 6 題：某校高一新生身高分布圖",
      1689,
      931,
    ),
  },
  "basic-92-first-nature-7": {
    stem: "圖（三）為洋蔥根尖的組織切片，下列何者為箭頭所指的構造？",
    options: ["葉綠體", "染色體", "細胞壁", "細胞核"],
    figure: figure(
      `${refinedRoot}/basic-92-first-nature-7--figure.webp`,
      "92 年第一次基測第 7 題：箭頭標示分裂中染色體的洋蔥根尖組織切片",
      330,
      270,
    ),
  },
  "basic-92-first-nature-8": {
    stem: "圖（四）有一對染色體，a、b、c、d、e、f 代表基因位置。在正常狀況下，下列敘述何者正確？",
    options: [
      "甲、丙為同源染色體",
      "乙、丁皆來自於父親",
      "a、e 為控制同一性狀的一對基因",
      "c、d 為控制同一性狀的一對基因",
    ],
    figure: figure(
      `${refinedRoot}/basic-92-first-nature-8--figure.webp`,
      "92 年第一次基測第 8 題：甲、乙、丙、丁染色體與 a 至 f 基因位置",
      300,
      225,
    ),
  },
  "basic-92-first-nature-26": {
    stem: "我國法律規定：「表兄妹不能結婚」。依生物知識判斷，下列何者為其目的？",
    options: [
      "避免造成不孕",
      "避免親屬關係的混亂",
      "減少基因發生突變的機率",
      "減少遺傳性疾病發生的機會",
    ],
    figure: null,
  },
  "basic-92-second-nature-16": {
    stem: "下列有關人類「性染色體」的敘述何者正確？",
    options: [
      "Y 染色體比 X 染色體長",
      "男性個體的 X 染色體來自母親",
      "性染色體的組合為 XY 者為女性",
      "女性可能產生兩種含不同性染色體的卵",
    ],
    figure: null,
  },
  "basic-93-first-nature-8": {
    stem: "下列有關突變的敘述，何者錯誤？",
    options: [
      "自然突變產生的機率極低",
      "突變對個體而言都是有害的",
      "X 光、紫外線會增加基因的突變機率",
      "防腐劑、漂白劑可能造成基因的突變",
    ],
    figure: null,
  },
  "basic-93-first-nature-16": {
    stem: "下列哪一種疾病不是遺傳性的疾病？",
    options: ["血友病", "蠶豆症", "B 型肝炎", "地中海貧血症"],
    figure: null,
  },
  "basic-93-second-nature-26": {
    stem: "若 E 表示雙眼皮的顯性基因，e 表示單眼皮的隱性基因。有一對夫婦生了三個小孩，其中兩個的基因型是 ee，另一個是 EE，則這對夫婦本身的基因組合可能是下列何者？",
    options: ["EE × Ee", "EE × ee", "Ee × Ee", "Ee × ee"],
    figure: null,
  },
  "basic-93-second-nature-36": {
    stem: "為了下一代的健康著想，下列哪一種疾病的患者在懷孕前，可透過「遺傳諮詢」獲得相關的資料與幫助？",
    options: ["淋病", "愛滋病", "小兒麻痺症", "鐮刀型貧血症"],
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
        sharedStem: groupOverride.sharedStem,
        sharedFigure: groupOverride.sharedFigure,
      }
    : question.questionGroup;

  return {
    ...question,
    topic: refinement?.topic ?? question.topic,
    stem: refinement?.stem ?? question.stem,
    options: refinement?.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    figure: nextFigure,
    questionGroup: nextQuestionGroup,
    officialImageOnly: false,
  };
}

export function refineUnit08Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
