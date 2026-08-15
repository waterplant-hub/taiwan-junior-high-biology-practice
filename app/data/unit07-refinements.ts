import type {
  BiologyQuestion,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit07Refinement {
  topic?: string;
  stem?: string;
  options?: OptionTexts;
  figure?: QuestionFigure | null;
  sharedFigure?: QuestionFigure | null;
  officialAnswer?: OptionId;
  explanation?: {
    summary: string;
    reasoning: string;
    optionReasons: OptionTexts;
  };
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

const refinedRoot = "/questions/refined/unit-07";

const groupSharedFigures: Record<string, QuestionFigure | null> = {
  "cap-104-nature-group-47-48": null,
  "cap-105-nature-group-47-48": null,
  "basic-102-layering": figure(
    `${refinedRoot}/basic-102-layering--shared.webp`,
    "102 年基測第 55 至 56 題共用圖：壓條法的四個操作步驟",
    1200,
    382,
  ),
};

const refinements: Record<string, Unit07Refinement> = {
  // 已有網頁文字的題目：附圖只保留作答所需圖、表或圖形選項。
  "cap-114-nature-35": {
    figure: figure(
      `${refinedRoot}/cap-114-nature-35--figure.webp`,
      "114 年會考第 35 題：一般細胞分裂與減數分裂形成子細胞的示意圖",
      401,
      342,
    ),
  },
  "cap-112-nature-35": {
    figure: figure(
      `${refinedRoot}/cap-112-nature-35--figure.webp`,
      "112 年會考第 35 題：草莓花朵構造、花托膨大與草莓表面構造",
      1186,
      286,
    ),
  },
  "cap-111-nature-39": {
    figure: figure(
      `${refinedRoot}/cap-111-nature-39--figure.webp`,
      "111 年會考第 39 題：卵細胞、受精卵、口腔皮膜細胞與成熟紅血球表",
      325,
      245,
    ),
  },
  "cap-104-nature-4": {
    figure: figure(
      `${refinedRoot}/cap-104-nature-4--figure.webp`,
      "104 年會考第 4 題：道路兩側的抗蟲棉花與一般棉花種植區",
      335,
      205,
    ),
  },
  "cap-104-nature-47": {
    // 共用閱讀內容已完整轉成網頁文字，不再重複顯示整段掃描圖。
    sharedFigure: null,
  },
  "cap-105-nature-17": {
    figure: figure(
      `${refinedRoot}/cap-105-nature-17--figure.webp`,
      "105 年會考第 17 題：向日葵與南瓜雌蕊中甲、乙構造的位置",
      440,
      255,
    ),
  },
  "cap-105-nature-48": {
    // 共用閱讀內容已完整轉成網頁文字，不再重複顯示整段掃描圖。
    sharedFigure: null,
  },
  "cap-106-nature-37": {
    figure: figure(
      `${refinedRoot}/cap-106-nature-37--figure.webp`,
      "106 年會考第 37 題：細胞內以甲、乙、丙、丁標示的兩對染色體",
      330,
      255,
    ),
  },
  "cap-107-nature-12": {
    figure: figure(
      `${refinedRoot}/cap-107-nature-12--figure.webp`,
      "107 年會考第 12 題：番薯塊根甲與新芽乙、丙",
      415,
      300,
    ),
  },
  "basic-97-first-nature-29": {
    figure: figure(
      `${refinedRoot}/basic-97-first-nature-29--figure.webp`,
      "97 年第一次基測第 29 題：剖開的豌豆豆莢與種子",
      300,
      420,
    ),
  },
  "basic-102-first-nature-10": {
    figure: figure(
      `${refinedRoot}/basic-102-first-nature-10--figure.webp`,
      "102 年基測第 10 題：六種動物的受精方式與受精卵發育場所表",
      1200,
      1006,
    ),
  },
  "basic-102-first-nature-56": {
    sharedFigure: figure(
      `${refinedRoot}/basic-102-layering--shared.webp`,
      "102 年基測第 55 至 56 題共用圖：壓條法的四個操作步驟",
      1200,
      382,
    ),
  },

  // 97 至 100 年第二次基測：補齊官方題幹與選項，再分離必要圖表。
  "basic-98-second-nature-25": {
    stem: "如圖（十一），甲與乙是細胞兩種不同分裂方式的過程中，其遺傳物質含量變化的示意圖。下列現象與甲、乙的配對，何者正確？",
    options: [
      "花瓣細胞的產生──甲",
      "種子萌發為幼苗──甲",
      "人類受精卵的發育──乙",
      "人類卵細胞的產生──乙",
    ],
    figure: figure(
      `${refinedRoot}/basic-98-second-nature-25--figure.webp`,
      "98 年第二次基測第 25 題：甲、乙兩種分裂過程的遺傳物質含量變化圖",
      1200,
      743,
    ),
  },
  "basic-97-second-nature-24": {
    stem: "下列何者不屬於落地生根利用葉片繁殖子代的特性？",
    options: [
      "不需依賴風或昆蟲來傳播花粉",
      "可遺傳到與母株完全相同之性狀",
      "繁殖速率較利用種子產生子代快",
      "適應環境變化之能力較利用種子繁殖佳",
    ],
    figure: null,
  },
  "basic-99-second-nature-8": {
    stem: "某種青黴菌可產生特定的抗生素，此抗生素能抑制某些細菌的生長，但對青黴菌本身沒有影響。在不考慮突變的情況下，當此青黴菌以無性生殖產生孢子，則由這些孢子發育成的青黴菌，最可能具有下列何種特徵？",
    options: [
      "染色體的數目會減半",
      "能產生相同的抗生素",
      "遺傳物質的成分和親代不同",
      "其生長受親代產生的抗生素所抑制",
    ],
    figure: null,
  },
  "basic-100-second-nature-21": {
    stem: "圖（十）為某動物口腔細胞內染色體與基因的示意圖。在不考慮突變的情況下，若此動物經有性生殖產生子代，則下列何者最可能是其子代口腔細胞內的染色體與基因之示意圖？",
    options: ["圖選項 A", "圖選項 B", "圖選項 C", "圖選項 D"],
    figure: figure(
      `${refinedRoot}/basic-100-second-nature-21--figure.webp`,
      "100 年第二次基測第 21 題：親代口腔細胞染色體與 A 至 D 子代染色體圖",
      1766,
      592,
    ),
  },

  // 94 至 96 年基測：補齊文字，並將整題圖裁成必要示意圖或圖形選項。
  "basic-94-second-nature-39": {
    stem: "圖（二十）為甲、乙兩種細胞分裂過程中染色體數目變化的示意圖。根據此圖判斷下列敘述何者正確？",
    options: [
      "甲最後可產生二個子細胞",
      "甲為細胞分裂，乙為減數分裂",
      "人類精子的形成須經過甲分裂過程",
      "由甲分裂方式進行生殖產生的後代，其遺傳物質和親代完全相同",
    ],
    figure: figure(
      `${refinedRoot}/basic-94-second-nature-39--figure.webp`,
      "94 年第二次基測第 39 題：甲、乙兩種分裂的染色體數目變化圖",
      1200,
      900,
    ),
  },
  "basic-95-first-nature-53": {
    stem: "我們常吃的花生，通常果莢內有數粒花生仁，其原因為下列何者？",
    options: [
      "一朵花內有許多子房",
      "一個子房內有許多胚珠",
      "一個胚珠內有許多卵細胞",
      "一粒花粉內有很多精細胞",
    ],
    figure: null,
  },
  "basic-95-second-nature-2": {
    stem: "圖（一）為海參在進行斷裂生殖的示意圖，則下列有關海參的敘述，何者正確？",
    options: [
      "此種生殖屬於無性生殖",
      "此種生殖過程需形成配子",
      "水螅的出芽生殖與此種生殖都需經減數分裂",
      "甲部分細胞核內的遺傳物質和乙部分者不同",
    ],
    figure: figure(
      `${refinedRoot}/basic-95-second-nature-2--figure.webp`,
      "95 年第二次基測第 2 題：海參頭部甲與尾部乙的斷裂生殖示意圖",
      380,
      150,
    ),
  },
  "basic-95-second-nature-16": {
    stem: "下列何者為草莓的匍匐莖繁殖、鯨魚生小鯨魚，以及落地生根以葉繁殖的共通點？",
    options: ["有減數分裂", "有受精作用", "有細胞分裂", "有基因重組"],
    figure: null,
  },
  "basic-96-first-nature-10": {
    stem: "在適合的環境下，下列哪一種生物的構造無法直接發育成新個體？",
    options: ["落地生根的葉", "果蠅的卵細胞", "酵母菌的芽體", "黑黴菌的孢子"],
    figure: null,
  },
  "basic-96-second-nature-12": {
    stem: "圖（八）為女性的生殖系統，圖（九）為細胞分裂過程中染色體數量的變化圖。圖（八）中哪一部分能進行如圖（九）所示的細胞分裂方式？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-96-second-nature-12--figure.webp`,
      "96 年第二次基測第 12 題：標示甲乙丙丁的女性生殖系統與染色體數量變化圖",
      1200,
      499,
    ),
  },
  "basic-96-second-nature-29": {
    stem: "下列四個圖中何者包含該植物的生殖器官？",
    options: ["圖選項 A", "圖選項 B", "圖選項 C", "圖選項 D"],
    figure: figure(
      `${refinedRoot}/basic-96-second-nature-29--figure.webp`,
      "96 年第二次基測第 29 題：甘藷、萬年青、落地生根與朱槿四個圖形選項",
      1200,
      404,
    ),
  },

  // 90 至 93 年基測：依官方題面補齊 OCR 文字，圖片只留下必要構造或資料。
  "basic-90-first-nature-21": {
    stem: "圖（四）為一種田裡的植物，可由莖的節長出新的植物體，這屬於下列何種生殖方式？",
    options: ["有性生殖", "斷裂生殖", "孢子繁殖", "營養繁殖"],
    figure: figure(
      `${refinedRoot}/basic-90-first-nature-21--figure.webp`,
      "90 年第一次基測第 21 題：由莖的節長出新植株的營養繁殖",
      1200,
      754,
    ),
  },
  "basic-90-first-nature-32": {
    stem: "參考圖（十）的男性生殖器官的位置，判斷下列敘述何者錯誤？",
    options: [
      "男性理想的結紮位置在尿道",
      "睪丸受保護較少，應避免撞擊",
      "包皮有皺褶易藏污，引起發炎",
      "攝護腺肥大時易壓迫尿道造成排尿不順",
    ],
    figure: figure(
      `${refinedRoot}/basic-90-first-nature-32--figure.webp`,
      "90 年第一次基測第 32 題：男性生殖器官的位置圖",
      1200,
      757,
    ),
  },
  "basic-90-first-nature-37": {
    stem: "某養雞場養了很多蛋雞，但是都沒有和公雞交配，則下列敘述何者正確？",
    options: [
      "沒有交配的母雞不會生蛋",
      "生出的蛋含單套染色體",
      "生出的蛋沒有小白點",
      "生出的蛋可孵出小雞",
    ],
    figure: null,
  },
  "basic-90-second-nature-19": {
    topic: "月經週期",
    stem: "小玉記錄她過去六個月的經期如表（二）所示，「○」代表月經來的第一天，「──」代表經期持續時間。由以上紀錄推知小玉過去六個月的月經週期大約是幾天？",
    options: ["5", "28", "30", "35"],
    figure: figure(
      `${refinedRoot}/basic-90-second-nature-19--figure.webp`,
      "90 年第二次基測第 19 題：七月至十二月的月經日期紀錄表",
      1200,
      865,
    ),
  },
  "basic-90-second-nature-21": {
    topic: "花粉管與受精",
    stem: "圖（九）為植物的生殖構造，圖中何種構造可將精細胞送到胚珠中與卵結合？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-90-second-nature-21--figure.webp`,
      "90 年第二次基測第 21 題：標示甲、乙、丙、丁的植物胚珠與花粉管",
      834,
      1200,
    ),
    officialAnswer: "B",
    explanation: {
      summary: "能把精細胞送入胚珠與卵結合的是乙所標示的花粉管，因此答案是 B。",
      reasoning: "花粉粒落在柱頭後會萌發形成花粉管。花粉管沿花柱向下生長，進入胚珠並運送精細胞，完成受精。圖中甲為花粉粒、乙為花粉管、丙為胚珠、丁為子房。",
      optionReasons: [
        "甲是花粉粒。花粉粒會萌發產生花粉管，但不是圖中直接伸入胚珠、運送精細胞的管狀構造。",
        "正確。乙是花粉管，會沿花柱向下生長，將精細胞送入胚珠與卵結合。",
        "丙是胚珠，內含卵細胞並是受精發生的位置，但不負責運送精細胞。",
        "丁是子房，包圍並保護胚珠；受精後子房通常發育成果實，不負責運送精細胞。",
      ],
    },
  },
  "basic-90-second-nature-35": {
    stem: "已知黑猩猩的體細胞有 48 條染色體。當雄性黑猩猩體內行減數分裂產生精子時，有關染色體的敘述，下列何者正確？",
    options: [
      "染色體複製 1 次，精子內含 24 條染色體",
      "染色體複製 2 次，精子內含 48 條染色體",
      "染色體複製 1 次，精子內含 48 條染色體",
      "染色體複製 2 次，精子內含 96 條染色體",
    ],
    figure: null,
  },
  "basic-91-first-nature-7": {
    topic: "男性生殖系統",
    stem: "圖（一）為男性生殖器官示意圖，何處可調節睪丸的溫度？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-91-first-nature-7--figure.webp`,
      "91 年第一次基測第 7 題：標示甲、乙、丙、丁的男性生殖器官",
      370,
      420,
    ),
  },
  "basic-91-first-nature-31": {
    stem: "圖（十一）是母雞所生未受精的蛋。若母雞皮膚細胞的細胞核中，含有 a 條染色體，則圖中箭頭處所指的小白點應含有幾條染色體？",
    options: ["2a", "a", "a／2", "a／4"],
    figure: figure(
      `${refinedRoot}/basic-91-first-nature-31--figure.webp`,
      "91 年第一次基測第 31 題：未受精雞蛋中箭頭指向的小白點",
      370,
      260,
    ),
  },
  "basic-91-first-nature-36": {
    stem: "圖（十二）為一種常見的植物，若由葉緣的缺刻可長出甲、乙兩株新的植物體，則甲、乙兩株的細胞中所含的遺傳基因約有多少比例是相同的？",
    options: ["100％", "75％", "50％", "25％"],
    figure: figure(
      `${refinedRoot}/basic-91-first-nature-36--figure.webp`,
      "91 年第一次基測第 36 題：落地生根葉緣長出的甲、乙新植株",
      390,
      285,
    ),
  },
  "basic-91-second-nature-2": {
    stem: "下列有關水筆仔的敘述，何者正確？",
    options: [
      "種子先在母樹上發芽，然後落在泥土中生長",
      "果實隨海水漂流，被沖到岸上才能發芽生長",
      "種子要落在鹽分高的海水中，才能發芽生長",
      "不會開花結果，需要靠人類為它們插枝繁殖",
    ],
    figure: null,
  },
  "basic-91-second-nature-25": {
    topic: "植物營養器官",
    stem: "下列各圖為植物的某一部分，何者為該植物的營養器官？",
    options: ["蘋果", "甘蔗", "金針花", "豌豆"],
    figure: figure(
      `${refinedRoot}/basic-91-second-nature-25--figure.webp`,
      "91 年第二次基測第 25 題：蘋果、甘蔗、金針花與豌豆圖形選項",
      1200,
      401,
    ),
  },
  "basic-91-second-nature-43": {
    stem: "已知果蠅的體細胞有 4 對染色體，則下列何者是其卵子中的染色體數？",
    options: ["4 對染色體", "2 對染色體", "4 條不成對的染色體", "2 條不成對的染色體"],
    figure: null,
  },
  "basic-91-second-nature-47": {
    stem: "圖（十七）是一種常見植物的花，觀察圖示並判斷該植物具有下列何種特徵？",
    options: [
      "具有平行的葉脈",
      "具有一枚子葉的種子",
      "花中同時含有雌蕊和雄蕊",
      "花瓣的表皮細胞具有葉綠體",
    ],
    figure: figure(
      `${refinedRoot}/basic-91-second-nature-47--figure.webp`,
      "91 年第二次基測第 47 題：一朵常見植物的花與葉",
      330,
      315,
    ),
  },
  "basic-91-second-nature-49": {
    stem: "下列有關動物生殖的敘述，何者錯誤？",
    options: [
      "兩生類多為體外受精、卵生",
      "爬蟲類多為體內受精、卵生",
      "鳥類均為體內受精、卵生",
      "魚類均為體外受精、卵生",
    ],
    figure: null,
  },
  "basic-92-second-nature-27": {
    stem: "下列生物所行的生殖方式，何者其細胞必須經過減數分裂的過程？",
    options: ["渦蟲的斷裂生殖", "酵母菌的出芽生殖", "菊花的種子繁殖", "馬鈴薯的營養繁殖"],
    figure: null,
  },
  "basic-93-first-nature-15": {
    stem: "男性生殖系統中哪一器官和女性的卵巢功能相當？",
    options: ["附睪", "睪丸", "精囊", "攝護腺"],
    figure: null,
  },
  "basic-93-first-nature-19": {
    topic: "胎生與臍帶",
    stem: "下列四種動物的胚胎發展過程中，何者沒有臍帶的形成？",
    options: ["狗", "駱駝", "海豚", "鴨嘴獸"],
    figure: null,
  },
  "basic-93-first-nature-28": {
    topic: "植物營養器官",
    stem: "植物體可分為營養器官與繁殖器官，下列何者為營養器官？",
    options: ["甘藷", "桑椹", "花生米", "葵花子"],
    figure: null,
  },
  "basic-93-second-nature-7": {
    topic: "女性生殖系統",
    stem: "圖（一）為女性生殖器官圖，下列敘述何者正確？",
    options: ["甲為卵受精的位置", "乙為卵的製造場所", "丙為胎兒發育的場所", "丁為尿液排出的地方"],
    figure: figure(
      `${refinedRoot}/basic-93-second-nature-7--figure.webp`,
      "93 年第二次基測第 7 題：標示甲、乙、丙、丁的女性生殖器官",
      1200,
      721,
    ),
  },
  "basic-93-second-nature-17": {
    stem: "已知臺灣水牛的體細胞有 48 條染色體，當母牛懷有雙胞胎時，這兩個胚胎的細胞分別具有幾條染色體？",
    options: ["24、24", "24、48", "48、48", "48、96"],
    figure: null,
  },
  "basic-93-second-nature-30": {
    stem: "若要觀察植物的細胞分裂，則取圖（六）植物哪一部位的組織最為適當？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-93-second-nature-30--figure.webp`,
      "93 年第二次基測第 30 題：標示甲、乙、丙、丁的植物部位",
      285,
      330,
    ),
  },
};

function applyRefinement(question: BiologyQuestion): BiologyQuestion {
  const refinement = refinements[question.id];
  const groupFigureOverride = question.questionGroup
    ? groupSharedFigures[question.questionGroup.id]
    : undefined;
  const hasGroupFigureOverride = Boolean(
    question.questionGroup &&
    Object.hasOwn(groupSharedFigures, question.questionGroup.id),
  );
  if (!refinement && !hasGroupFigureOverride) return question;

  const nextFigure = refinement?.figure === null
    ? undefined
    : refinement?.figure ?? question.figure;

  const sharedFigureOverride = hasGroupFigureOverride
    ? groupFigureOverride
    : refinement?.sharedFigure;
  const nextQuestionGroup = question.questionGroup && sharedFigureOverride !== undefined
    ? {
        ...question.questionGroup,
        sharedFigure: sharedFigureOverride === null
          ? undefined
          : sharedFigureOverride,
      }
    : question.questionGroup;

  return {
    ...question,
    topic: refinement?.topic ?? question.topic,
    stem: refinement?.stem ?? question.stem,
    options: refinement?.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    officialAnswer: refinement?.officialAnswer ?? question.officialAnswer,
    explanation: refinement?.explanation
      ? {
          ...question.explanation,
          summary: refinement.explanation.summary,
          reasoning: refinement.explanation.reasoning,
          optionAnalysis: refinement.explanation.optionReasons.map((reason, index) => ({
            optionId: optionIds[index],
            reason,
          })),
        }
      : question.explanation,
    figure: nextFigure,
    questionGroup: nextQuestionGroup,
    officialImageOnly: false,
  };
}

export function refineUnit07Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
