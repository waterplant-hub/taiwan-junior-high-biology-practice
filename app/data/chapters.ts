import type { Chapter } from "./types";

export const chapters: Chapter[] = [
  {
    id: "science-and-life",
    order: 1,
    name: "科學方法與生命世界",
    shortName: "科學方法",
    description: "生命現象、實驗設計、顯微鏡與資料判讀",
  },
  {
    id: "cells",
    order: 2,
    name: "生物體的基本單位",
    shortName: "細胞",
    description: "細胞構造與觀察、物質進出細胞、生物體的組成層次",
  },
  {
    id: "nutrition-and-energy",
    order: 3,
    name: "養分與能量",
    shortName: "養分與能量",
    description: "食物中的養分、酵素、植物製造養分與人體消化吸收",
  },
  {
    id: "transport",
    order: 4,
    name: "生物體內物質的運輸",
    shortName: "物質運輸",
    description: "植物運輸、人體循環、血液與心臟",
  },
  {
    id: "coordination",
    order: 5,
    name: "生物體的協調作用",
    shortName: "協調作用",
    description: "神經、內分泌、感覺與植物感應",
  },
  {
    id: "homeostasis",
    order: 6,
    name: "生物體內的恆定",
    shortName: "體內恆定",
    description: "呼吸作用與氣體恆定、血糖、排泄與水分、體溫調節",
  },
  {
    id: "reproduction",
    order: 7,
    name: "生殖",
    shortName: "生殖",
    description: "有性生殖、無性生殖與生命的延續",
  },
  {
    id: "genetics",
    order: 8,
    name: "遺傳",
    shortName: "遺傳",
    description: "遺傳因子、孟德爾遺傳與人類遺傳",
  },
  {
    id: "evolution",
    order: 9,
    name: "演化（舊課綱）",
    shortName: "舊課綱演化",
    description: "舊課綱的天擇、演化理論，以及動植物的演化歷程",
  },
  {
    id: "classification",
    order: 10,
    name: "生物多樣性",
    shortName: "生物多樣性",
    description: "持續改變的生命、生物的命名與分類及五界生物",
  },
  {
    id: "ecology",
    order: 11,
    name: "生態系與環境",
    shortName: "生態系與環境",
    description: "族群、群集、生態系、能量流動與環境保育",
  },
];

export const chapterById = Object.fromEntries(
  chapters.map((chapter) => [chapter.id, chapter]),
);
