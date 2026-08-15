import { makeBasicQuestion } from "./basic-question-factory";
import type {
  BiologyQuestion,
  ChapterId,
  OptionId,
  QuestionFigure,
} from "./types";

type OldYear = 90 | 91 | 92 | 93;
type Session = "first" | "second";

interface OldQuestionEntry {
  year: OldYear;
  session: Session;
  number: number;
  chapterId: ChapterId;
  topic: string;
  answer: OptionId;
  stem?: string;
  options?: [string, string, string, string];
  figure?: QuestionFigure | null;
  officialImageOnly?: boolean;
  figureHeight?: number;
  groupId?: "tbt-90" | "carbon-92";
}

function officialFigure(
  year: OldYear,
  session: Session,
  id: number | string,
  alt: string,
  height?: number,
): QuestionFigure {
  const filename = typeof id === "string" ? id : `q${String(id).padStart(2, "0")}`;
  return {
    src: `/questions/${year}/${session}-${filename}-official.webp`,
    alt: `${year} 年${session === "first" ? "第一次" : "第二次"}基測${alt}`,
    width: 1080,
    height: height ?? (typeof id === "string" ? 620 : 760),
  };
}

const tbt90Group: NonNullable<BiologyQuestion["questionGroup"]> = {
  id: "basic-90-first-tbt",
  title: "TBT 污染、生物累積與環境保護",
  memberOriginalNumbers: [53, 54, 55, 56],
  sharedStem: "以下四題共用 TBT 對生物生理、生殖、食物鏈累積及環境管理的閱讀資料。",
  sharedFigure: officialFigure(90, "first", "group-53-56", "第 53 至 56 題共同閱讀資料"),
};

const carbon92Group: NonNullable<BiologyQuestion["questionGroup"]> = {
  id: "basic-92-first-carbon-cycle",
  title: "自然界的碳循環",
  memberOriginalNumbers: [52, 53],
  sharedStem: "以下兩題共用大氣、陸地、海洋與生物之間的碳循環示意圖。",
  sharedFigure: officialFigure(92, "first", "group-52-53", "第 52 至 53 題共同碳循環資料"),
};

const groups = {
  "tbt-90": tbt90Group,
  "carbon-92": carbon92Group,
};

const optionIds: OptionId[] = ["A", "B", "C", "D"];

const reasoningByChapter: Record<ChapterId, string> = {
  "science-and-life": "先辨認觀察目的、器材功能或實驗變因，再用題圖所給的現象與數據排除不相符的敘述。",
  cells: "依細胞構造、組成層次與物質進出細胞的基本原理，逐項核對題圖中的構造或現象。",
  "nutrition-and-energy": "先確認題目涉及的養分、酵素、消化、光合作用或呼吸作用，再依反應條件與物質變化判斷。",
  transport: "依植物維管束或人體血液循環的方向、構造與功能，對照題圖所示的運輸路徑。",
  coordination: "辨認刺激、受器、神經或激素的作用位置，再依訊息傳遞及反應順序判斷。",
  homeostasis: "比較攝入、產生與排出的物質，或產熱與散熱的變化，以判斷身體如何維持穩定。",
  reproduction: "區分細胞分裂、減數分裂、有性生殖與無性生殖，並注意染色體數及親子遺傳關係。",
  genetics: "先以基因、染色體及顯隱性關係建立可能的親子組合，再排除不可能的遺傳結果。",
  evolution: "本題屬舊課綱內容，依個體差異、環境選擇與繁殖結果判讀，不延伸為現行課綱必學範圍。",
  classification: "依化石證據、分類階層、檢索特徵或各生物界的構造與生殖方式逐步判斷。",
  ecology: "先找出生物與環境、食物關係或物質循環的方向，再判斷族群及生態系可能產生的變化。",
};

function imageQuestion(entry: OldQuestionEntry): BiologyQuestion {
  const sessionLabel = entry.session === "first" ? "第一次" : "第二次";
  const summary = `依官方題圖資料與「${entry.topic}」概念判斷，正確答案為 ${entry.answer}。`;
  return makeBasicQuestion({
    year: entry.year,
    number: entry.number,
    session: sessionLabel,
    chapterId: entry.chapterId,
    topic: entry.topic,
    stem: entry.stem ?? `請依官方題圖判斷「${entry.topic}」問題。`,
    options: entry.options ?? [
      "請見官方題圖中的（A）選項",
      "請見官方題圖中的（B）選項",
      "請見官方題圖中的（C）選項",
      "請見官方題圖中的（D）選項",
    ],
    answer: entry.answer,
    figure: entry.figure === null
      ? undefined
      : entry.figure ?? officialFigure(entry.year, entry.session, entry.number, `第 ${entry.number} 題完整官方題面`, entry.figureHeight),
    officialImageOnly: entry.officialImageOnly ?? true,
    questionGroup: entry.groupId ? groups[entry.groupId] : undefined,
    summary,
    reasoning: reasoningByChapter[entry.chapterId],
    optionReasons: optionIds.map((id) =>
      id === entry.answer
        ? `正確；${summary}`
        : `不正確；此選項與題圖資料或「${entry.topic}」的判斷原則不符。`,
    ) as [string, string, string, string],
    shuffleSafe: false,
  });
}

const entries: OldQuestionEntry[] = [
  { year: 90, session: "first", number: 3, chapterId: "transport", topic: "感染途徑與疾病防治", answer: "A" },
  { year: 90, session: "first", number: 5, chapterId: "transport", topic: "血液運輸與器官分泌", answer: "C" },
  { year: 90, session: "first", number: 7, chapterId: "transport", topic: "血液、淋巴與免疫", answer: "B" },
  { year: 90, session: "first", number: 12, chapterId: "coordination", topic: "反射作用", answer: "C" },
  { year: 90, session: "first", number: 13, chapterId: "genetics", topic: "孟德爾遺傳", answer: "D" },
  { year: 90, session: "first", number: 16, chapterId: "nutrition-and-energy", topic: "光合作用實驗", answer: "A" },
  {
    year: 90, session: "first", number: 17, chapterId: "science-and-life", topic: "實驗數據與生物行為", answer: "C",
    stem: "阿都對學校一窩螞蟻作了三天的觀察，計算離開蟻窩的螞蟻數目，每次觀察 5 分鐘，其結果如表（一）。由結果可得到下列哪一項推論？",
    options: ["第二天覓食活動旺盛", "上午 7：00 前螞蟻並不活動", "11：00～15：00 螞蟻活動頻繁", "螞蟻上午的活動情況比下午好"],
    figure: { src: "/questions/90/first-q17-table.webp", alt: "90 年第一次基測第 17 題官方表格：三天不同時段離開蟻窩的螞蟻數目", width: 1305, height: 1205 },
    officialImageOnly: false,
  },
  { year: 90, session: "first", number: 18, chapterId: "nutrition-and-energy", topic: "呼吸作用與能量", answer: "D" },
  { year: 90, session: "first", number: 21, chapterId: "reproduction", topic: "無性生殖", answer: "D" },
  { year: 90, session: "first", number: 22, chapterId: "homeostasis", topic: "呼吸運動與腦幹", answer: "C" },
  { year: 90, session: "first", number: 23, chapterId: "nutrition-and-energy", topic: "營養成分判讀", answer: "B" },
  { year: 90, session: "first", number: 31, chapterId: "transport", topic: "血液循環與健康", answer: "B" },
  { year: 90, session: "first", number: 32, chapterId: "reproduction", topic: "人體生殖系統", answer: "A" },
  { year: 90, session: "first", number: 34, chapterId: "ecology", topic: "族群數量變化", answer: "C" },
  { year: 90, session: "first", number: 35, chapterId: "genetics", topic: "基因、染色體與細胞核", answer: "B" },
  {
    year: 90, session: "first", number: 36, chapterId: "cells", topic: "植物細胞與真菌細胞", answer: "C",
    stem: "琪琪用複式顯微鏡觀察洋蔥表皮細胞和蘑菇的菌絲細胞，並比較這兩種細胞的構造。下列敘述何者正確？",
    options: ["二者皆具有細胞壁及葉綠體", "二者皆不具有細胞壁及葉綠體", "二者皆具有細胞壁，但不具有葉綠體", "二者皆具有葉綠體，但不具有細胞壁"],
    figure: null,
    officialImageOnly: false,
  },
  { year: 90, session: "first", number: 37, chapterId: "reproduction", topic: "減數分裂與染色體", answer: "B" },
  { year: 90, session: "first", number: 38, chapterId: "classification", topic: "植物分類", answer: "A" },
  { year: 90, session: "first", number: 53, chapterId: "ecology", topic: "環境污染與生物生理", answer: "C", groupId: "tbt-90" },
  { year: 90, session: "first", number: 54, chapterId: "ecology", topic: "生物放大作用", answer: "B", groupId: "tbt-90" },
  { year: 90, session: "first", number: 55, chapterId: "ecology", topic: "污染物擴散與族群", answer: "C", groupId: "tbt-90" },
  { year: 90, session: "first", number: 56, chapterId: "ecology", topic: "污染防治與保育", answer: "B", groupId: "tbt-90" },

  { year: 90, session: "second", number: 1, chapterId: "transport", topic: "感染途徑與疾病防治", answer: "D" },
  { year: 90, session: "second", number: 2, chapterId: "ecology", topic: "光照、生物棲地與環境", answer: "C" },
  { year: 90, session: "second", number: 3, chapterId: "coordination", topic: "植物的感應", answer: "A" },
  { year: 90, session: "second", number: 5, chapterId: "genetics", topic: "性染色體與性別", answer: "A" },
  { year: 90, session: "second", number: 14, chapterId: "coordination", topic: "眼睛構造與瞳孔", answer: "A" },
  { year: 90, session: "second", number: 16, chapterId: "nutrition-and-energy", topic: "營養成分判讀", answer: "B" },
  {
    year: 90, session: "second", number: 18, chapterId: "science-and-life", topic: "顯微鏡構造", answer: "C",
    stem: "以顯微鏡觀察口腔皮膜細胞時，發現顯微鏡中視野過暗，可調節圖（八）哪一個構造以獲得適當的光線？",
    options: ["甲", "乙", "丙", "丁"],
    figure: { src: "/questions/90/second-q18-microscope.webp", alt: "90 年第二次基測第 18 題題圖：標示甲、乙、丙、丁的複式顯微鏡", width: 620, height: 907 },
    officialImageOnly: false,
  },
  { year: 90, session: "second", number: 19, chapterId: "reproduction", topic: "人體生殖系統", answer: "D" },
  { year: 90, session: "second", number: 20, chapterId: "classification", topic: "動物分類", answer: "A" },
  { year: 90, session: "second", number: 21, chapterId: "reproduction", topic: "花與果實的發育", answer: "B" },
  { year: 90, session: "second", number: 29, chapterId: "classification", topic: "外溫與內溫動物", answer: "D" },
  { year: 90, session: "second", number: 30, chapterId: "classification", topic: "分類檢索表", answer: "A" },
  { year: 90, session: "second", number: 31, chapterId: "nutrition-and-energy", topic: "消化系統", answer: "A" },
  { year: 90, session: "second", number: 32, chapterId: "transport", topic: "植物蒸散作用", answer: "C" },
  { year: 90, session: "second", number: 33, chapterId: "ecology", topic: "食物網與能量流動", answer: "B" },
  { year: 90, session: "second", number: 34, chapterId: "evolution", topic: "舊課綱：天擇與保護色", answer: "C" },
  { year: 90, session: "second", number: 35, chapterId: "reproduction", topic: "減數分裂與染色體", answer: "A" },
  { year: 90, session: "second", number: 44, chapterId: "ecology", topic: "環境污染與生態系", answer: "B" },
  { year: 90, session: "second", number: 49, chapterId: "nutrition-and-energy", topic: "飲食與健康", answer: "B" },

  { year: 91, session: "first", number: 4, chapterId: "homeostasis", topic: "體溫恆定", answer: "A" },
  { year: 91, session: "first", number: 7, chapterId: "reproduction", topic: "人體生殖系統", answer: "D" },
  {
    year: 91, session: "first", number: 9, chapterId: "cells", topic: "細胞核與遺傳", answer: "B",
    stem: "細胞核具有下列何種功能？",
    options: ["含有葉綠體可進行光合作用", "含遺傳物質，是細胞的生命中樞", "具有支持作用可防止細胞變形", "為氧化物質產生能量的主要場所"],
    figure: null,
    officialImageOnly: false,
  },
  { year: 91, session: "first", number: 10, chapterId: "nutrition-and-energy", topic: "澱粉檢測", answer: "A" },
  { year: 91, session: "first", number: 15, chapterId: "genetics", topic: "單因子遺傳", answer: "C" },
  { year: 91, session: "first", number: 16, chapterId: "classification", topic: "動物分類", answer: "D" },
  { year: 91, session: "first", number: 17, chapterId: "transport", topic: "血液循環路徑", answer: "B" },
  { year: 91, session: "first", number: 26, chapterId: "transport", topic: "形成層與植物運輸", answer: "C" },
  { year: 91, session: "first", number: 28, chapterId: "ecology", topic: "生物多樣性與保育", answer: "A" },
  { year: 91, session: "first", number: 31, chapterId: "reproduction", topic: "減數分裂與染色體", answer: "C" },
  { year: 91, session: "first", number: 32, chapterId: "genetics", topic: "人類遺傳疾病", answer: "C" },
  { year: 91, session: "first", number: 34, chapterId: "ecology", topic: "資源回收與永續", answer: "D" },
  { year: 91, session: "first", number: 36, chapterId: "reproduction", topic: "無性生殖", answer: "A" },
  { year: 91, session: "first", number: 37, chapterId: "ecology", topic: "溫室效應與環境", answer: "B" },
  { year: 91, session: "first", number: 44, chapterId: "nutrition-and-energy", topic: "植物呼吸作用", answer: "B" },
  { year: 91, session: "first", number: 45, chapterId: "evolution", topic: "舊課綱：天擇與保護色", answer: "B" },
  { year: 91, session: "first", number: 46, chapterId: "transport", topic: "感染、免疫與潛伏期", answer: "A" },
  { year: 91, session: "first", number: 51, chapterId: "nutrition-and-energy", topic: "營養成分判讀", answer: "D" },

  { year: 91, session: "second", number: 2, chapterId: "reproduction", topic: "種子與植物繁殖", answer: "A" },
  { year: 91, session: "second", number: 3, chapterId: "transport", topic: "植物蒸散作用", answer: "D" },
  { year: 91, session: "second", number: 4, chapterId: "nutrition-and-energy", topic: "呼吸作用與氣體交換", answer: "C" },
  { year: 91, session: "second", number: 6, chapterId: "nutrition-and-energy", topic: "植物營養與氮元素", answer: "B" },
  { year: 91, session: "second", number: 7, chapterId: "genetics", topic: "基因型與遺傳法則", answer: "C" },
  { year: 91, session: "second", number: 8, chapterId: "transport", topic: "血液、淋巴與免疫", answer: "A" },
  {
    year: 91, session: "second", number: 9, chapterId: "cells", topic: "物質進出細胞", answer: "C",
    stem: "生活在水中的腎形蟲、眼蟲等單細胞生物，藉由下列何種方式與外界進行物質的交換？",
    options: ["循環作用", "分泌作用", "擴散作用", "蒸散作用"],
    figure: null,
    officialImageOnly: false,
  },
  { year: 91, session: "second", number: 11, chapterId: "nutrition-and-energy", topic: "飲食與健康", answer: "B" },
  { year: 91, session: "second", number: 12, chapterId: "ecology", topic: "物質循環", answer: "D" },
  { year: 91, session: "second", number: 17, chapterId: "classification", topic: "分類檢索表", answer: "D" },
  { year: 91, session: "second", number: 20, chapterId: "nutrition-and-energy", topic: "消化系統", answer: "B" },
  { year: 91, session: "second", number: 22, chapterId: "coordination", topic: "植物的感應", answer: "D" },
  { year: 91, session: "second", number: 24, chapterId: "transport", topic: "血液、淋巴與免疫", answer: "A" },
  { year: 91, session: "second", number: 25, chapterId: "reproduction", topic: "無性生殖與營養器官", answer: "B" },
  {
    year: 91, session: "second", number: 27, chapterId: "science-and-life", topic: "解剖顯微鏡", answer: "A",
    stem: "圖（八）為小楓使用解剖顯微鏡觀察被麻醉的蜜蜂時，視野中所見的景象。小楓想將蜜蜂移至視野中央，應將蜜蜂往哪個方向移動？",
    options: ["右上", "右下", "左上", "左下"],
    figure: { src: "/questions/91/second-q27-view.webp", alt: "91 年第二次基測第 27 題官方題圖：蜜蜂位於解剖顯微鏡視野左下方", width: 300, height: 305 },
    officialImageOnly: false,
  },
  { year: 91, session: "second", number: 32, chapterId: "nutrition-and-energy", topic: "營養成分判讀", answer: "B" },
  { year: 91, session: "second", number: 33, chapterId: "coordination", topic: "眼睛構造與調節", answer: "C" },
  { year: 91, session: "second", number: 41, chapterId: "transport", topic: "形成層與植物運輸", answer: "B" },
  { year: 91, session: "second", number: 43, chapterId: "reproduction", topic: "染色體與生殖細胞", answer: "C" },
  { year: 91, session: "second", number: 47, chapterId: "reproduction", topic: "花與果實的發育", answer: "C" },
  { year: 91, session: "second", number: 49, chapterId: "reproduction", topic: "動物的生殖方式", answer: "D" },

  { year: 92, session: "first", number: 2, chapterId: "ecology", topic: "水土保持與保育", answer: "C" },
  { year: 92, session: "first", number: 3, chapterId: "nutrition-and-energy", topic: "營養與健康", answer: "B" },
  { year: 92, session: "first", number: 4, chapterId: "ecology", topic: "生物多樣性與保育", answer: "A" },
  { year: 92, session: "first", number: 5, chapterId: "classification", topic: "分類檢索表", answer: "B" },
  { year: 92, session: "first", number: 6, chapterId: "genetics", topic: "遺傳變異", answer: "A" },
  { year: 92, session: "first", number: 7, chapterId: "genetics", topic: "基因、染色體與細胞核", answer: "B" },
  { year: 92, session: "first", number: 8, chapterId: "genetics", topic: "基因型與等位基因", answer: "A" },
  { year: 92, session: "first", number: 23, chapterId: "homeostasis", topic: "排泄與泌尿", answer: "B" },
  {
    year: 92, session: "first", number: 25, chapterId: "cells", topic: "細胞染色與觀察", answer: "D",
    stem: "觀察動、植物細胞時，下列何者為滴加亞甲藍液的作用？",
    options: ["使細胞維持原狀", "增加細胞的透光率", "會與細胞中的澱粉作用", "使細胞中的構造顏色深淺不同"],
    figure: null,
    officialImageOnly: false,
  },
  { year: 92, session: "first", number: 26, chapterId: "genetics", topic: "人類遺傳疾病", answer: "D" },
  { year: 92, session: "first", number: 27, chapterId: "ecology", topic: "族群、群集與生態系", answer: "A" },
  { year: 92, session: "first", number: 38, chapterId: "homeostasis", topic: "排泄與體溫恆定", answer: "D" },
  { year: 92, session: "first", number: 39, chapterId: "coordination", topic: "內耳與身體平衡", answer: "B" },
  {
    year: 92, session: "first", number: 40, chapterId: "cells", topic: "物質進出細胞", answer: "B",
    stem: "下列有關物質進出細胞的敘述，何者正確？",
    options: ["葡萄糖可自由進出細胞", "水可藉擴散作用進出細胞", "氧氣經分解後才可進入細胞", "二氧化碳要藉細胞膜上特殊的蛋白質才能進出細胞膜"],
    figure: null,
    officialImageOnly: false,
  },
  { year: 92, session: "first", number: 41, chapterId: "transport", topic: "形成層與植物運輸", answer: "D" },
  { year: 92, session: "first", number: 42, chapterId: "transport", topic: "心臟與血管", answer: "C" },
  { year: 92, session: "first", number: 43, chapterId: "coordination", topic: "血糖調節", answer: "C" },
  { year: 92, session: "first", number: 52, chapterId: "ecology", topic: "碳循環與呼吸作用", answer: "B", groupId: "carbon-92" },
  { year: 92, session: "first", number: 53, chapterId: "ecology", topic: "碳循環與光合作用", answer: "B", groupId: "carbon-92" },

  { year: 92, session: "second", number: 1, chapterId: "ecology", topic: "病媒防治與環境", answer: "C" },
  { year: 92, session: "second", number: 5, chapterId: "homeostasis", topic: "水分恆定", answer: "D" },
  { year: 92, session: "second", number: 6, chapterId: "coordination", topic: "神經傳導路徑", answer: "C" },
  { year: 92, session: "second", number: 9, chapterId: "coordination", topic: "眼睛構造與調節", answer: "D" },
  { year: 92, session: "second", number: 10, chapterId: "nutrition-and-energy", topic: "消化酵素與實驗", answer: "D" },
  { year: 92, session: "second", number: 12, chapterId: "classification", topic: "分類階層與親緣", answer: "D" },
  { year: 92, session: "second", number: 13, chapterId: "ecology", topic: "生物適應與環境", answer: "C" },
  { year: 92, session: "second", number: 14, chapterId: "ecology", topic: "族群數量變化", answer: "B" },
  { year: 92, session: "second", number: 15, chapterId: "nutrition-and-energy", topic: "光合作用", answer: "C" },
  { year: 92, session: "second", number: 16, chapterId: "genetics", topic: "性染色體與性別", answer: "B" },
  { year: 92, session: "second", number: 27, chapterId: "reproduction", topic: "減數分裂與染色體", answer: "C" },
  { year: 92, session: "second", number: 28, chapterId: "coordination", topic: "神經細胞與傳導", answer: "B" },
  { year: 92, session: "second", number: 30, chapterId: "nutrition-and-energy", topic: "酵素活性與溫度", answer: "C" },
  { year: 92, session: "second", number: 31, chapterId: "transport", topic: "植物蒸散作用", answer: "B" },
  { year: 92, session: "second", number: 32, chapterId: "transport", topic: "木質部與韌皮部運輸", answer: "A" },
  { year: 92, session: "second", number: 48, chapterId: "nutrition-and-energy", topic: "營養成分判讀", answer: "A" },

  { year: 93, session: "first", number: 5, chapterId: "ecology", topic: "生物多樣性與保育", answer: "B" },
  {
    year: 93, session: "first", number: 6, chapterId: "science-and-life", topic: "顯微鏡倍率與視野", answer: "C",
    stem: "小敏用複式顯微鏡作觀察，用 4 倍物鏡看見的影像如圖（一）所示。若換成 40 倍物鏡觀察，則最可能會看到下列哪一個影像？",
    options: ["圖選項 A", "圖選項 B", "圖選項 C", "圖選項 D"],
    figure: { src: "/questions/refined/unit-01/basic-93-first-nature-6--figure.webp", alt: "93 年第一次基測第 6 題重繪圖：原視野與換用 40 倍物鏡後的四個圖形選項", width: 900, height: 360 },
    officialImageOnly: false,
  },
  { year: 93, session: "first", number: 7, chapterId: "coordination", topic: "反射作用", answer: "A" },
  { year: 93, session: "first", number: 8, chapterId: "genetics", topic: "突變與遺傳", answer: "B" },
  { year: 93, session: "first", number: 9, chapterId: "classification", topic: "基本演化概念與化石", answer: "B" },
  { year: 93, session: "first", number: 15, chapterId: "reproduction", topic: "人體生殖系統", answer: "B" },
  { year: 93, session: "first", number: 16, chapterId: "genetics", topic: "人類遺傳疾病", answer: "C" },
  { year: 93, session: "first", number: 17, chapterId: "classification", topic: "動物分類", answer: "A" },
  { year: 93, session: "first", number: 18, chapterId: "transport", topic: "血液成分與功能", answer: "B" },
  { year: 93, session: "first", number: 19, chapterId: "reproduction", topic: "動物的生殖方式", answer: "D" },
  { year: 93, session: "first", number: 20, chapterId: "ecology", topic: "食物網與能量流動", answer: "A" },
  { year: 93, session: "first", number: 27, chapterId: "coordination", topic: "眼睛構造與調節", answer: "B" },
  { year: 93, session: "first", number: 28, chapterId: "reproduction", topic: "無性生殖與植物營養器官", answer: "A" },
  { year: 93, session: "first", number: 29, chapterId: "transport", topic: "植物水分運輸", answer: "D" },
  { year: 93, session: "first", number: 30, chapterId: "ecology", topic: "族群數量變化", answer: "D" },
  { year: 93, session: "first", number: 39, chapterId: "nutrition-and-energy", topic: "消化系統", answer: "A" },
  { year: 93, session: "first", number: 40, chapterId: "classification", topic: "外溫與內溫動物", answer: "D" },
  { year: 93, session: "first", number: 41, chapterId: "classification", topic: "生物界分類", answer: "A" },

  { year: 93, session: "second", number: 2, chapterId: "transport", topic: "感染、免疫與潛伏期", answer: "B" },
  { year: 93, session: "second", number: 6, chapterId: "ecology", topic: "自然資源與保育", answer: "A" },
  { year: 93, session: "second", number: 7, chapterId: "reproduction", topic: "人體生殖系統", answer: "C" },
  { year: 93, session: "second", number: 11, chapterId: "coordination", topic: "植物的感應", answer: "C" },
  { year: 93, session: "second", number: 12, chapterId: "ecology", topic: "水資源與保育", answer: "B" },
  { year: 93, session: "second", number: 13, chapterId: "transport", topic: "植物水分運輸", answer: "C" },
  { year: 93, session: "second", number: 17, chapterId: "reproduction", topic: "染色體與生殖細胞", answer: "C" },
  { year: 93, session: "second", number: 18, chapterId: "evolution", topic: "舊課綱：天擇與育種", answer: "A" },
  { year: 93, session: "second", number: 26, chapterId: "genetics", topic: "孟德爾遺傳", answer: "C" },
  { year: 93, session: "second", number: 30, chapterId: "reproduction", topic: "細胞分裂", answer: "A" },
  { year: 93, session: "second", number: 31, chapterId: "nutrition-and-energy", topic: "呼吸作用與能量", answer: "B" },
  { year: 93, session: "second", number: 32, chapterId: "classification", topic: "動物分類", answer: "C" },
  { year: 93, session: "second", number: 36, chapterId: "genetics", topic: "人類遺傳疾病", answer: "D" },
  { year: 93, session: "second", number: 38, chapterId: "transport", topic: "微血管與物質交換", answer: "B" },
  { year: 93, session: "second", number: 39, chapterId: "ecology", topic: "水循環", answer: "A" },
];

export const questionsBasic90To93: BiologyQuestion[] = entries.map(imageQuestion);
