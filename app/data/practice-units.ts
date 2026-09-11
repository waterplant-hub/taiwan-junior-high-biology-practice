import type { ChapterId } from "./types";

export interface PracticeUnit {
  id: string;
  chapterId: ChapterId;
  order: number;
  name: string;
  aliases: string[];
  topicPattern: RegExp;
}

export const practiceUnits: PracticeUnit[] = [
  { id: "scientific-method", chapterId: "science-and-life", order: 1, name: "科學方法", aliases: ["科學探究", "實驗設計", "變因", "資料判讀"], topicPattern: /實驗|科學|反例|變因|數據|資料|發芽|農藥|發酵|沼氣|氣體檢測|細菌生長/ },
  { id: "life-world", chapterId: "science-and-life", order: 2, name: "生命世界", aliases: ["生命現象", "生物共同性"], topicPattern: /生命/ },
  { id: "microscope", chapterId: "science-and-life", order: 3, name: "顯微鏡", aliases: ["複式顯微鏡", "解剖顯微鏡", "顯微鏡操作", "顯微鏡種類與用途"], topicPattern: /顯微鏡|複式|解剖|尺度與細胞/ },

  { id: "membrane-transport", chapterId: "cells", order: 3, name: "物質進出細胞", aliases: ["細胞膜", "擴散", "滲透作用"], topicPattern: /細胞膜|物質通過|物質進出|滲透/ },
  { id: "microscope-and-cells", chapterId: "cells", order: 2, name: "細胞觀察與尺度", aliases: ["顯微鏡", "比例尺", "細胞尺度"], topicPattern: /顯微|尺度|細胞染色|細胞觀察/ },
  { id: "body-organization", chapterId: "cells", order: 4, name: "生物體的組成層次", aliases: ["組織", "器官", "器官系統", "組成層次"], topicPattern: /組成層次/ },
  { id: "cell-structure", chapterId: "cells", order: 1, name: "細胞的構造與功能", aliases: ["細胞構造", "胞器", "細胞學說"], topicPattern: /細胞|粒線體|胞器/ },

  { id: "digestion", chapterId: "nutrition-and-energy", order: 4, name: "人體如何獲得養分", aliases: ["消化作用", "消化系統", "消化酵素", "養分吸收"], topicPattern: /消化|吸收/ },
  { id: "enzymes", chapterId: "nutrition-and-energy", order: 2, name: "酵素", aliases: ["酵素作用", "專一性", "酵素活性"], topicPattern: /酵素/ },
  { id: "photosynthesis", chapterId: "nutrition-and-energy", order: 3, name: "植物如何製造養分", aliases: ["光合作用", "葉綠體", "植物營養"], topicPattern: /光合作用|植物營養/ },
  { id: "nutrients-and-enzymes", chapterId: "nutrition-and-energy", order: 1, name: "食物中的養分", aliases: ["養分", "營養", "食物檢測", "澱粉檢測"], topicPattern: /養分|營養|澱粉|蛋白質|食物|飲食|健康|大分子|熱量/ },

  { id: "plant-transport", chapterId: "transport", order: 1, name: "植物的運輸", aliases: ["維管束", "木質部", "韌皮部", "蒸散作用"], topicPattern: /植物|蒸散|維管|木質|韌皮|形成層/ },
  { id: "circulation", chapterId: "transport", order: 2, name: "人體的循環", aliases: ["心臟", "血管", "血液循環", "血流", "動脈", "靜脈"], topicPattern: /循環|心臟|血管|血流|動脈|靜脈|微血管/ },
  { id: "blood-and-lymph", chapterId: "transport", order: 3, name: "血液、淋巴與免疫", aliases: ["血液", "血球", "凝血", "淋巴循環", "感染", "免疫", "潛伏期"], topicPattern: /血液|血球|凝血|淋巴|感染|免疫|潛伏期/ },

  { id: "nervous-system", chapterId: "coordination", order: 1, name: "神經與感覺", aliases: ["神經系統", "反射", "感覺", "中樞神經", "大腦", "小腦"], topicPattern: /神經|感覺|中樞|反射|大腦|小腦|腦幹|脊髓|眼睛|瞳孔|內耳|平衡/ },
  { id: "endocrine-system", chapterId: "coordination", order: 2, name: "內分泌", aliases: ["激素", "內分泌腺", "血糖調節", "腎上腺素"], topicPattern: /內分泌|激素|血糖|腎上腺素/ },
  { id: "plant-response", chapterId: "coordination", order: 3, name: "植物的感應", aliases: ["植物感應", "向性", "向光性", "向地性", "生長素"], topicPattern: /植物.*感應|向性|向光|向地/ },

  { id: "breathing", chapterId: "homeostasis", order: 1, name: "呼吸與氣體的恆定", aliases: ["呼吸作用", "細胞呼吸", "發酵", "呼吸運動", "吸氣", "呼氣", "橫膈", "胸腔"], topicPattern: /呼吸|發酵|植物細胞的代謝|吸氣|呼氣|橫膈|胸腔|肋骨/ },
  { id: "blood-glucose", chapterId: "homeostasis", order: 2, name: "血糖的恆定", aliases: ["血糖", "胰島素", "升糖素", "糖尿病"], topicPattern: /血糖|胰島素|糖尿病/ },
  { id: "excretion", chapterId: "homeostasis", order: 3, name: "排泄與水分的恆定", aliases: ["排泄", "腎臟", "尿液", "尿素", "水分調節"], topicPattern: /排泄|泌尿|腎臟|尿素|尿酸|器官代謝|水分/ },
  { id: "physiological-regulation", chapterId: "homeostasis", order: 4, name: "體溫的恆定", aliases: ["體溫", "內溫動物", "外溫動物"], topicPattern: /體溫|外溫|內溫|恆定/ },

  { id: "cell-division", chapterId: "reproduction", order: 1, name: "細胞分裂", aliases: ["染色體", "有絲分裂", "減數分裂"], topicPattern: /細胞分裂|染色體|減數/ },
  { id: "asexual-reproduction", chapterId: "reproduction", order: 2, name: "無性生殖", aliases: ["出芽生殖", "斷裂生殖", "孢子繁殖", "營養器官繁殖"], topicPattern: /^無性生殖$|斷裂生殖/ },
  { id: "plant-reproduction", chapterId: "reproduction", order: 4, name: "植物的有性生殖", aliases: ["花", "授粉", "果實", "種子"], topicPattern: /花|果實|種子|授粉/ },
  { id: "reproductive-modes", chapterId: "reproduction", order: 3, name: "有性生殖", aliases: ["有性生殖", "動物生殖", "生殖方式比較", "胎生", "胎盤", "臍帶"], topicPattern: /生殖|繁殖|育種|胎生|胎盤|臍帶|月經|營養器官/ },

  { id: "mendelian-genetics", chapterId: "genetics", order: 1, name: "遺傳法則", aliases: ["孟德爾", "顯性", "隱性", "基因型"], topicPattern: /孟德爾|單因子|遺傳與機率|基因型|遺傳法則|顯性|隱性|家族/ },
  { id: "variation-and-biotech", chapterId: "genetics", order: 3, name: "突變與生物科技", aliases: ["突變", "基因轉殖", "生物技術", "複製"], topicPattern: /突變|遺傳變異|轉殖|生物科技|生物技術|育種|複製|核移植|基因工程/ },
  { id: "human-genetics", chapterId: "genetics", order: 2, name: "人類遺傳", aliases: ["ABO 血型", "性聯遺傳", "性染色體"], topicPattern: /ABO|血型|人類|人體|性聯|X 染色體|性染色體|基因.*染色體/ },

  { id: "legacy-evolution", chapterId: "evolution", order: 1, name: "舊課綱：演化理論與歷程", aliases: ["天擇", "演化理論", "動植物演化", "共同祖先"], topicPattern: /舊課綱|天擇|演化|共同祖先/ },

  { id: "continuous-life", chapterId: "classification", order: 1, name: "持續改變的生命", aliases: ["基本演化概念", "化石", "生物消長", "持續改變的生命"], topicPattern: /持續改變|基本演化|化石|古生物|生物消長|滅絕/ },
  { id: "taxonomy", chapterId: "classification", order: 2, name: "生物的命名與分類", aliases: ["分類階層", "二名法", "學名", "命名與分類", "分類檢索表", "二分叉檢索表"], topicPattern: /分類階層|學名|二名法|屬名|命名與分類|檢索表|分類檢索|二分叉/ },
  { id: "five-kingdoms", chapterId: "classification", order: 3, name: "五界生物", aliases: ["五界分類", "原核生物", "原生生物", "真菌界", "植物界", "動物界"], topicPattern: /五界|生物界|微生物|細菌|真菌|原生|植物|蘚苔|蕨|裸子|被子|動物|脊椎|外溫|內溫/ },

  { id: "biodiversity-conservation", chapterId: "ecology", order: 6, name: "生物多樣性與保育", aliases: ["生物多樣性", "保育", "污染", "永續", "臭氧", "外來種"], topicPattern: /保育|多樣性|污染|汙染|碳排|溫室|臭氧|放大|永續|IUCN|外來種|病媒防治/ },
  { id: "energy-flow", chapterId: "ecology", order: 2, name: "食物鏈與能量流動", aliases: ["食物鏈", "食物網", "能量塔", "營養階層"], topicPattern: /食物鏈|食物網|能量|營養階層/ },
  { id: "material-cycles", chapterId: "ecology", order: 3, name: "物質循環", aliases: ["碳循環", "氮循環", "水循環"], topicPattern: /循環|碳|氮/ },
  { id: "biotic-interactions", chapterId: "ecology", order: 4, name: "生物的交互關係", aliases: ["競爭", "共生", "寄生", "掠食"], topicPattern: /交互|競爭|共生|寄生|食物關係/ },
  { id: "ecosystems", chapterId: "ecology", order: 5, name: "多采多姿的生態系", aliases: ["棲地", "森林", "河口", "海洋", "生態系平衡"], topicPattern: /棲地|生態系平衡|紅樹林生態系/ },
  { id: "ecological-levels", chapterId: "ecology", order: 1, name: "生物生存的環境", aliases: ["族群", "群集", "生態系", "環境因子", "捉放法"], topicPattern: /族群|群集|環境|適應|捉放|生態系|鬥魚/ },
];

export function resolvePracticeUnit(chapterId: ChapterId, topic: string, reviewedUnitId?: string): PracticeUnit | undefined {
  if (reviewedUnitId) {
    return practiceUnits.find((unit) => unit.chapterId === chapterId && unit.id === reviewedUnitId);
  }
  return practiceUnits.find(
    (unit) => unit.chapterId === chapterId && unit.topicPattern.test(topic),
  );
}
