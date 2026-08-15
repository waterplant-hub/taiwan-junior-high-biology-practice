import capRows from "./cap-104-110.json";
import { detailedExplanations104To110 } from "./explanations-104-110";
import { makeQuestion } from "./question-factory";
import type {
  BiologyQuestion,
  ChapterId,
  ExamYear,
  OptionId,
  QuestionFigure,
} from "./types";

interface ImportedCapRow {
  year: ExamYear;
  number: number;
  stem: string;
  options: [string, string, string, string];
  answer: OptionId;
  passRate: number;
  discrimination: number;
  figure?: QuestionFigure;
  group?: {
    id: string;
    memberOriginalNumbers: number[];
    sharedStem: string;
    sharedFigure: QuestionFigure;
  };
}

interface Classification {
  chapterId: ChapterId;
  topic: string;
}

const classifications: Record<string, Classification> = {
  "104-1": { chapterId: "nutrition-and-energy", topic: "光合作用與呼吸作用" },
  "104-4": { chapterId: "reproduction", topic: "花與果實的發育" },
  "104-6": { chapterId: "evolution", topic: "舊課綱：天擇與保護色" },
  "104-15": { chapterId: "science-and-life", topic: "顯微鏡構造" },
  "104-21": { chapterId: "transport", topic: "植物的維管束" },
  "104-22": { chapterId: "coordination", topic: "神經系統" },
  "104-24": { chapterId: "transport", topic: "血液循環路徑" },
  "104-25": { chapterId: "genetics", topic: "孟德爾遺傳" },
  "104-37": { chapterId: "classification", topic: "生物界分類" },
  "104-38": { chapterId: "homeostasis", topic: "呼吸運動" },
  "104-41": { chapterId: "nutrition-and-energy", topic: "消化酵素" },
  "104-43": { chapterId: "ecology", topic: "氮循環" },
  "104-47": { chapterId: "reproduction", topic: "無性生殖" },
  "104-48": { chapterId: "classification", topic: "真菌的構造" },

  "105-6": { chapterId: "ecology", topic: "生態系平衡" },
  "105-7": { chapterId: "nutrition-and-energy", topic: "光合作用與呼吸作用" },
  "105-8": { chapterId: "classification", topic: "外溫與內溫動物" },
  "105-13": { chapterId: "coordination", topic: "植物的感應" },
  "105-14": { chapterId: "science-and-life", topic: "顯微鏡構造" },
  "105-16": { chapterId: "classification", topic: "分類階層與學名" },
  "105-17": { chapterId: "reproduction", topic: "花與果實的發育" },
  "105-28": { chapterId: "nutrition-and-energy", topic: "酵素與澱粉檢測" },
  "105-32": { chapterId: "transport", topic: "血液、淋巴與免疫" },
  "105-36": { chapterId: "transport", topic: "植物的維管束" },
  "105-44": { chapterId: "genetics", topic: "性聯遺傳" },
  "105-47": { chapterId: "classification", topic: "植物分類" },
  "105-48": { chapterId: "reproduction", topic: "無性生殖" },

  "106-2": { chapterId: "ecology", topic: "生物間的交互作用" },
  "106-3": { chapterId: "evolution", topic: "舊課綱：天擇與保護色" },
  "106-9": { chapterId: "reproduction", topic: "有性生殖" },
  "106-10": { chapterId: "genetics", topic: "孟德爾遺傳" },
  "106-12": { chapterId: "transport", topic: "形成層與植物運輸" },
  "106-18": { chapterId: "cells", topic: "細胞構造與代謝" },
  "106-24": { chapterId: "coordination", topic: "神經傳導路徑" },
  "106-27": { chapterId: "nutrition-and-energy", topic: "消化系統" },
  "106-36": { chapterId: "homeostasis", topic: "排泄與體內恆定" },
  "106-37": { chapterId: "reproduction", topic: "減數分裂與染色體" },
  "106-38": { chapterId: "ecology", topic: "食物鏈與能量塔" },
  "106-44": { chapterId: "classification", topic: "植物分類" },
  "106-47": { chapterId: "science-and-life", topic: "實驗控制變因" },
  "106-48": { chapterId: "nutrition-and-energy", topic: "營養成分判讀" },

  "107-4": { chapterId: "evolution", topic: "舊課綱：天擇與保護色" },
  "107-6": { chapterId: "classification", topic: "外溫與內溫動物" },
  "107-12": { chapterId: "reproduction", topic: "無性生殖" },
  "107-18": { chapterId: "nutrition-and-energy", topic: "酵素與澱粉檢測" },
  "107-19": { chapterId: "cells", topic: "細胞構造與代謝" },
  "107-24": { chapterId: "coordination", topic: "神經系統" },
  "107-26": { chapterId: "transport", topic: "植物的維管束" },
  "107-28": { chapterId: "genetics", topic: "人體細胞與染色體" },
  "107-37": { chapterId: "transport", topic: "血液循環路徑" },
  "107-41": { chapterId: "ecology", topic: "食物鏈與能量塔" },
  "107-46": { chapterId: "coordination", topic: "植物的感應" },
  "107-47": { chapterId: "genetics", topic: "孟德爾遺傳與機率" },
  "107-49": { chapterId: "ecology", topic: "生物間的交互作用" },
  "107-50": { chapterId: "classification", topic: "真菌的構造" },

  "108-4": { chapterId: "cells", topic: "滲透作用" },
  "108-5": { chapterId: "nutrition-and-energy", topic: "光合作用與呼吸作用" },
  "108-6": { chapterId: "reproduction", topic: "無性生殖" },
  "108-17": { chapterId: "genetics", topic: "孟德爾遺傳" },
  "108-19": { chapterId: "homeostasis", topic: "呼吸運動" },
  "108-22": { chapterId: "classification", topic: "植物分類" },
  "108-25": { chapterId: "coordination", topic: "中樞神經系統" },
  "108-32": { chapterId: "genetics", topic: "基因轉殖與性聯遺傳" },
  "108-37": { chapterId: "transport", topic: "心臟與血管" },
  "108-40": { chapterId: "ecology", topic: "氮循環" },
  "108-41": { chapterId: "transport", topic: "植物的維管束" },
  "108-45": { chapterId: "nutrition-and-energy", topic: "酵素活性與溫度" },
  "108-51": { chapterId: "ecology", topic: "族群數量變化" },
  "108-52": { chapterId: "genetics", topic: "人體細胞與染色體" },

  "109-1": { chapterId: "ecology", topic: "生物間的交互作用" },
  "109-3": { chapterId: "nutrition-and-energy", topic: "消化酵素" },
  "109-4": { chapterId: "classification", topic: "二名法與屬名" },
  "109-5": { chapterId: "transport", topic: "蒸散作用與水分運輸" },
  "109-6": { chapterId: "coordination", topic: "中樞神經系統" },
  "109-16": { chapterId: "evolution", topic: "舊課綱：天擇與保護色" },
  "109-17": { chapterId: "reproduction", topic: "有性生殖" },
  "109-18": { chapterId: "science-and-life", topic: "複式與解剖顯微鏡" },
  "109-19": { chapterId: "homeostasis", topic: "體溫恆定" },
  "109-28": { chapterId: "ecology", topic: "食物鏈與能量塔" },
  "109-33": { chapterId: "genetics", topic: "孟德爾遺傳" },
  "109-41": { chapterId: "nutrition-and-energy", topic: "消化酵素" },
  "109-43": { chapterId: "homeostasis", topic: "排泄與體內恆定" },
  "109-50": { chapterId: "classification", topic: "生物界分類" },
  "109-51": { chapterId: "transport", topic: "血液、淋巴與免疫" },

  "110-4": { chapterId: "homeostasis", topic: "體溫恆定" },
  "110-6": { chapterId: "reproduction", topic: "花與果實的發育" },
  "110-7": { chapterId: "science-and-life", topic: "實驗控制變因" },
  "110-10": { chapterId: "classification", topic: "植物分類" },
  "110-11": { chapterId: "transport", topic: "植物蒸散作用" },
  "110-19": { chapterId: "genetics", topic: "孟德爾遺傳" },
  "110-25": { chapterId: "science-and-life", topic: "複式與解剖顯微鏡" },
  "110-28": { chapterId: "coordination", topic: "神經系統" },
  "110-31": { chapterId: "classification", topic: "分類檢索表" },
  "110-34": { chapterId: "transport", topic: "心臟與血管" },
  "110-36": { chapterId: "ecology", topic: "生物間的交互作用" },
  "110-42": { chapterId: "nutrition-and-energy", topic: "酵素活性與酸鹼" },
  "110-48": { chapterId: "science-and-life", topic: "實驗控制變因" },
  "110-49": { chapterId: "evolution", topic: "舊課綱：天擇與保護色" },
};

export const conceptGuides: Record<string, string> = {
  "光合作用與呼吸作用": "光合作用吸收光能、二氧化碳與水以製造養分並釋出氧氣；呼吸作用則分解養分釋放能量。",
  "花與果實的發育": "授粉是花粉到達柱頭；受精後，胚珠發育為種子，子房發育為果實。",
  "舊課綱：天擇與保護色": "天擇作用於族群原本存在的變異；較適應環境的個體較容易存活並留下後代。",
  "顯微鏡構造": "複式顯微鏡應先用低倍物鏡找像，再換高倍；倍率愈高時視野較小、較暗。",
  "複式與解剖顯微鏡": "解剖顯微鏡適合觀察較大、立體的材料且影像方向不變；複式顯微鏡影像上下左右相反。",
  "植物的維管束": "木質部主要運送水和無機鹽，韌皮部主要運送光合作用產生的有機養分。",
  "形成層與植物運輸": "雙子葉木本莖由外而內可辨認韌皮部、形成層與木質部；形成層分裂使莖加粗。",
  "神經系統": "刺激由受器接受，訊息經感覺神經送到中樞，再由運動神經將命令傳到動器。",
  "神經傳導路徑": "縮手反射可先由脊髓整合，痛覺仍須把訊息傳到大腦；甩手等意識動作也由大腦參與。",
  "中樞神經系統": "大腦負責感覺與意識活動，小腦協調肌肉和平衡，腦幹調節基本生命活動。",
  "血液循環路徑": "血液由心室經動脈流出，經微血管交換後由靜脈回到心房；肺循環負責取得氧氣。",
  "心臟與血管": "右心接受缺氧血並送往肺，左心接受充氧血並送往全身；瓣膜能防止血液逆流。",
  "孟德爾遺傳": "顯性表現型可能是同型合子或異型合子，隱性表現型只能是隱性同型合子。",
  "孟德爾遺傳與機率": "把雙親可能產生的配子配對，可求得子代各基因型與表現型的種類和機率。",
  "性聯遺傳": "男性的 X 染色體來自母親，女兒的兩條 X 染色體則分別來自父母。",
  "基因轉殖與性聯遺傳": "轉入 X 染色體的基因會隨性染色體遺傳，判斷時須分別追蹤父母傳給兒子與女兒的 X。",
  "人體細胞與染色體": "體細胞通常有成對染色體，配子只有一套；性別可由體細胞中的性染色體判定。",
  "減數分裂與染色體": "減數分裂時同源染色體分離，使配子的染色體套數成為體細胞的一半。",
  "生物界分類": "分類應依題目指定的共同特徵判斷；細菌沒有由核膜包圍的細胞核，真菌則具有細胞核。",
  "分類階層與學名": "分類階層由大到小為界、門、綱、目、科、屬、種；較高階層不同，以下階層必然不同。",
  "二名法與屬名": "學名由屬名和種小名組成；同一物種不因年齡或外觀階段不同而改變學名。",
  "分類檢索表": "檢索表每一步都依一項可觀察特徵分流，必須沿著各分支逐步核對。",
  "植物分類": "被子植物會開花結果；裸子植物有種子但不形成真正的花與果實。",
  "外溫與內溫動物": "外溫動物體溫較隨環境改變，主要由外界取得熱；內溫動物主要靠代謝維持較穩定體溫。",
  "真菌的構造": "真菌以孢子繁殖，身體常由菌絲構成；其分類與植物、動物不同。",
  "呼吸運動": "呼氣時橫膈放鬆上升、胸腔體積縮小；吸氣時橫膈收縮下降、胸腔體積增大。",
  "消化酵素": "澱粉經消化可分解為葡萄糖；多數消化酵素的主要成分是蛋白質，且具有受質專一性。",
  "消化系統": "消化液進入腸道的位置會影響相應養分的分解，小腸也是主要吸收養分的場所。",
  "酵素與澱粉檢測": "碘液遇澱粉呈藍黑色；若澱粉被酵素分解，檢測液會維持黃褐色。",
  "酵素活性與溫度": "酵素有適宜的作用溫度；過高溫可能使構造改變而永久失去活性。",
  "酵素活性與酸鹼": "酵素有適宜的溫度與酸鹼值；若已在強酸環境中被完全破壞，之後移到適宜環境也不會恢復。",
  "營養成分判讀": "比較實驗組時應只改變欲檢驗的因素，再用相同時間點的數據判斷營養素或處理效果。",
  "氮循環": "微生物可把不同含氮物質互相轉換，並分解遺體與排遺，使氮回到環境中循環。",
  "無性生殖": "無性生殖通常只涉及細胞分裂，不需配子結合；若無突變，子代與親代遺傳組成相同。",
  "有性生殖": "有性生殖會產生配子並經受精形成子代，子代取得雙親的部分遺傳特徵。",
  "生態系平衡": "生態系平衡是動態穩定；物質仍持續循環、能量仍持續流動，外來種也可能改變原有平衡。",
  "生物間的交互作用": "有共同食物來源者可能競爭；一方捕食另一方為捕食；互有利益則可判為互利共生。",
  "食物鏈與能量塔": "能量沿食物鏈向上傳遞時逐級減少，因此營養階層愈高，族群可利用的總能量通常愈少。",
  "族群數量變化": "族群數量要依調查資料判斷；相關性須由各地區或各時間點資料一致支持，不能只看單一例子。",
  "滲透作用": "蒸餾水相對細胞內為低濃度，水會進入細胞；植物細胞壁可限制細胞過度膨脹破裂。",
  "細胞構造與代謝": "葉綠體進行光合作用，粒線體進行呼吸作用並供應細胞可用能量。",
  "植物的感應": "植物莖有向光性與背地性；黑暗中沒有方向性光刺激時，仍可依重力方向生長。",
  "血液、淋巴與免疫": "紅血球主要運送氣體、白血球參與防禦、血小板參與凝血；一般淋巴中沒有紅血球。",
  "排泄與體內恆定": "蛋白質代謝產生的含氮廢物在肝臟轉為尿素，再由腎臟過濾排出。",
  "體溫恆定": "寒冷時顫抖可增加產熱；炎熱時皮膚血管擴張可加速散熱，兩者都用來維持體溫。",
  "實驗控制變因": "公平實驗需只改變操縱變因並維持其他條件一致；結論只能涵蓋實際比較過的條件。",
  "植物蒸散作用": "氣孔是葉片蒸散的主要通道；比較封閉上下表皮後的失水量，可判斷氣孔主要分布位置。",
  "蒸散作用與水分運輸": "蒸散作用產生拉力，使水在木質部主要向上運輸；旺盛蒸散時氣孔通常開啟。",
};

const groupTitles: Record<string, string> = {
  "cap-104-nature-group-47-48": "茭白筍與菰黑穗菌",
  "cap-105-nature-group-47-48": "無根萍的分類與繁殖",
  "cap-106-nature-group-47-48": "營養素、物質與體重變化",
  "cap-107-nature-group-49-50": "偏側蛇蟲草菌與螞蟻",
  "cap-108-nature-group-51-52": "黑熊族群調查",
  "cap-109-nature-group-50-51": "肺炎鏈球菌與血球",
  "cap-110-nature-group-48-49": "殺蟲劑與蚊子存活",
};

function buildQuestion(row: ImportedCapRow): BiologyQuestion {
  const key = `${row.year}-${row.number}`;
  const classification = classifications[key];
  if (!classification) throw new Error(`${key}: missing CAP biology classification`);

  const detail = detailedExplanations104To110[key];
  if (!detail) throw new Error(`${key}: missing question-specific AI explanation`);

  return makeQuestion({
    year: row.year,
    number: row.number,
    ...classification,
    stem: row.stem,
    options: row.options,
    answer: row.answer,
    passRate: row.passRate,
    discrimination: row.discrimination,
    summary: detail.summary,
    reasoning: detail.reasoning,
    optionReasons: detail.optionReasons,
    figure: row.figure,
    questionGroup: row.group
      ? {
          id: row.group.id,
          title: groupTitles[row.group.id] ?? "共同閱讀資料",
          memberOriginalNumbers: row.group.memberOriginalNumbers,
          sharedStem: row.group.sharedStem,
          sharedFigure: row.group.sharedFigure,
        }
      : undefined,
    shuffleSafe: !row.figure,
  });
}

export const questions104To110: BiologyQuestion[] =
  (capRows as ImportedCapRow[]).map(buildQuestion);
