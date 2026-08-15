import type {
  BiologyQuestion,
  ChapterId,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit09Refinement {
  chapterId?: ChapterId;
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

const refinedRoot = "/questions/refined/unit-09";

const groupSharedOverrides: Record<string, GroupSharedOverride> = {
  "cap-110-nature-group-48-49": {
    sharedStem:
      "小榮為了研究 X 牌、Y 牌殺蟲劑對不同種類蚊子存活數量的影響。他先把甲、乙兩種蚊子都分成兩組，並放置在四個相同的封閉環境中，每種蚊子分別噴灑 X 牌或 Y 牌殺蟲劑，之後記錄存活蚊子的數量。存活的這些蚊子還會再繁殖，因此每隔一個月都重新噴灑一次殺蟲劑並記錄，三次的實驗結果如表（十）所示。",
    sharedFigure: figure(
      `${refinedRoot}/cap-110-nature-group-48-49--shared.webp`,
      "110 年會考第 48 至 49 題共用表：X、Y 牌殺蟲劑對甲、乙兩種蚊子三次噴灑後的存活數量",
      800,
      350,
    ),
  },
};

const refinements: Record<string, Unit09Refinement> = {
  // 兩題原先誤放於舊課綱演化，依實際作答概念移至現行章節。
  "cap-103-nature-2": {
    chapterId: "classification",
    topic: "持續改變的生命與化石年代",
  },
  "basic-99-second-nature-6": {
    chapterId: "ecology",
    topic: "食性與種間競爭",
    stem: "在某一小島上有甲、乙、丙、丁四種鳥類，其鳥嘴長度與個體數量的關係分別如圖（三）所示。假設此四種鳥類的鳥嘴長度與其食性有關，則依此圖推論，哪兩種鳥最不可能競爭相同的食物？",
    options: ["甲和乙", "乙和丙", "丙和丁", "甲和丁"],
    figure: figure(
      `${refinedRoot}/basic-99-second-nature-6--figure.webp`,
      "99 年第二次基測第 6 題：甲、乙、丙、丁四種鳥的鳥嘴長度分布圖",
      2117,
      743,
    ),
  },

  // 會考與較新基測：題幹留在網頁，圖片只保留天擇推理所需圖表。
  "cap-104-nature-6": {
    figure: figure(
      `${refinedRoot}/cap-104-nature-6--figure.webp`,
      "104 年會考第 6 題：1910 至 1950 年深色蛾與淺色蛾數量變化曲線",
      1543,
      1019,
    ),
  },
  "cap-106-nature-3": {
    figure: figure(
      `${refinedRoot}/cap-106-nature-3--figure.webp`,
      "106 年會考第 3 題：A 至 D 四組陰暗石縫與明亮草地的深淺色蝸牛數量圖",
      2170,
      725,
    ),
  },
  "cap-103-nature-6": {
    stem: "某地區棲息著一種蝸牛，不同個體可能具有不同的殼色，但科學家發現此區樹幹上的此種蝸牛多為深咖啡色殼，而草地上則多為淺黃綠色殼。若以天擇說解釋此現象，下列何者最合理？",
    options: [
      "在樹幹上的蝸牛容易突變成深咖啡色殼",
      "兩處蝸牛殼色明顯不同是受天敵影響的結果",
      "蝸牛個體的殼色是由出生時環境的顏色決定",
      "不同殼色的蝸牛在草地上被捕食的機率相等",
    ],
  },
  "basic-97-first-nature-26": {
    stem: "捕蚊燈利用蚊蟲的夜行性和趨光性，以發光的燈管引誘後，再以高壓電擊網殺死接觸的蚊子。老王發現數十年前使用捕蚊燈的效果很好，但是現在誘捕蚊子的效果都不佳。下列何者是此現象最合理的解釋？",
    options: [
      "蚊子忍受高壓電的能力一代比一代更好",
      "蚊子是古老的活化石，生存與適應能力特別強",
      "因為連續使用捕蚊燈多年，刺激基因突變，使蚊子產生了負趨光性",
      "原本就存在對捕蚊燈的波長較不敏感的蚊子，存活下來並大量繁衍",
    ],
  },
  "basic-100-first-nature-9": {
    stem: "將蒼蠅養在甲、乙兩瓶中，甲瓶內有放捕蠅紙，乙瓶內沒放捕蠅紙，其餘實驗條件皆相同（培養基、有翅和無翅的蒼蠅皆等量、兩瓶皆以棉花塞住等）。8 天後，甲瓶內僅無翅的蒼蠅存活，捕蠅紙上皆是有翅的死蒼蠅，但乙瓶內有翅和無翅的蒼蠅皆存活，如圖（三）所示。已知培養基可提供蒼蠅所需的足量養分，下列對此實驗的解釋或推論，何者最合理？",
    options: [
      "甲瓶的環境較不利於有翅的蒼蠅生存",
      "乙瓶內有翅的蒼蠅能存活是因為發生突變",
      "無翅的蒼蠅比有翅的蒼蠅更適合生存於乙瓶",
      "此實驗可推論出若蒼蠅不常使用翅則翅會退化",
    ],
    figure: figure(
      `${refinedRoot}/basic-100-first-nature-9--figure.webp`,
      "100 年第一次基測第 9 題：有捕蠅紙的甲瓶與無捕蠅紙的乙瓶中蒼蠅存活情形",
      1497,
      1051,
    ),
  },
  "basic-102-first-nature-11": {
    stem: "甲、乙、丙、丁四種數量相近的鳥類在某島的環境中適應良好，其嘴型示意圖如圖（七）所示。已知嘴型愈細長，對捕捉昆蟲愈有利；嘴型愈短厚，對啄食種子愈有利。假設此島的環境發生變化，使得食物來源中的種子大量增加，但昆蟲大量減少，經過一段時間後，若只考慮食物來源對族群大小的影響，則下列哪一種鳥的族群成長比例可能會最大？",
    figure: figure(
      `${refinedRoot}/basic-102-first-nature-11--figure.webp`,
      "102 年基測第 11 題：甲、乙、丙、丁四種鳥類的嘴型",
      2167,
      726,
    ),
  },

  // 98 至 100 年第二次基測：補齊原題文字並分離必要圖表。
  "basic-98-second-nature-24": {
    stem: "某一棲地上，昆蟲大多隱藏在樹幹裡以躲避天敵。已知生活在此處的某種鳥類，其族群中具有細長及厚短等不同嘴型的個體，皆以這些昆蟲為食。數百年後，發現此棲地中，這種鳥類嘴型細長的個體比例明顯增加。若依天擇說解釋此種現象，下列何者最合理？",
    options: [
      "嘴型厚短者能吃到更多的昆蟲",
      "嘴型細長者是由嘴型厚短者突變而來",
      "嘴型厚短者為了要吃昆蟲而使嘴型愈拉愈長",
      "嘴型細長者的比例增加是受昆蟲棲所的影響",
    ],
    figure: null,
  },
  "basic-99-second-nature-1": {
    stem: "如圖（一），在某生態環境中有不同毛色的同種兔子棲息其中，調查其數量所得的結果如甲，多年後再調查，所得的結果如乙。若依天擇說解釋這段期間內兔子的數量變化，下列何者最合理？",
    options: [
      "淺灰兔在此環境中缺少天敵",
      "深灰兔是由淺灰兔突變而來",
      "白兔為了適應環境毛色因而變黑",
      "白兔在此環境中較黑兔不易存活",
    ],
    figure: figure(
      `${refinedRoot}/basic-99-second-nature-1--figure.webp`,
      "99 年第二次基測第 1 題：多年以前甲與多年以後乙的四種兔子毛色數量圖",
      2172,
      724,
    ),
  },
  "basic-100-second-nature-10": {
    stem: "科學家要研究某揮發性藥劑對老鼠生存及繁衍的影響，把同齡的 50 隻雄鼠和 50 隻未懷孕雌鼠，飼養在每天都可穩定釋出此藥劑的房間，連續 100 天記錄此房間內老鼠的存活個體數，並把所得的數據作成圖（四）。下列有關這些老鼠和此藥劑的相關推論，何者最合理？",
    options: [
      "此藥劑造成老鼠無法生出子代",
      "老鼠為了生存而對此藥劑產生抵抗力",
      "此藥劑造成 50 隻未懷孕的雌鼠全數死亡",
      "有些老鼠原本就對此藥劑具抵抗力且生出子代",
    ],
    figure: figure(
      `${refinedRoot}/basic-100-second-nature-10--figure.webp`,
      "100 年第二次基測第 10 題：100 天內老鼠存活個體數的變化曲線",
      1565,
      1005,
    ),
  },

  // 90、91、93 年舊題均為純文字，移除整題掃描圖。
  "basic-90-second-nature-34": {
    stem: "下列哪一種情形不屬於天擇的結果？",
    options: [
      "綠草叢中綠色的昆蟲特別多",
      "馬的前肢變為單趾，更適合奔跑",
      "人的手臂因常打網球，變得較為粗壯",
      "長頸鹿的脖子長，更適合吃高處的樹葉",
    ],
    figure: null,
  },
  "basic-91-first-nature-45": {
    stem: "蝗蟲的體色是長期演化的結果，在草地上活動的蝗蟲大多為綠色，而在黃泥地上的蝗蟲大多為土黃色，形成此種現象最可能的原因為何？",
    options: ["變異後再經人擇", "變異後再經天擇", "天擇後再經變異", "人擇後再經變異"],
    figure: null,
  },
  "basic-93-second-nature-18": {
    topic: "舊課綱：天擇與人擇",
    stem: "台南關廟地區盛產鳳梨，有蘋果鳳梨、釋迦鳳梨等品種；這些新品種鳳梨的產生，和下列何者最無關係？",
    options: ["天擇", "人擇", "突變", "品種改良"],
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

export function refineUnit09Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
