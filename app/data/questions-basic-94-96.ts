import { makeBasicQuestion } from "./basic-question-factory";
import type {
  BiologyQuestion,
  ChapterId,
  OptionId,
  QuestionFigure,
} from "./types";

type OldYear = 94 | 95 | 96;
type Session = "first" | "second";

interface OldQuestionInput {
  year: OldYear;
  session: Session;
  number: number;
  chapterId: ChapterId;
  topic: string;
  stem: string;
  options?: [string, string, string, string];
  figure?: QuestionFigure | null;
  officialImageOnly?: boolean;
  answer: OptionId;
  summary: string;
  reasoning: string;
  questionGroup?: BiologyQuestion["questionGroup"];
}

const cropBounds: Record<string, Record<number | string, [number, number]>> = {
  "94-first": { 3: [985, 1605], 8: [1320, 1605], 9: [92, 243], 10: [243, 575], 19: [1150, 1605], 20: [92, 393], 21: [393, 680], 28: [1230, 1605], 29: [80, 352], 30: [352, 638], 32: [993, 1266], 35: [284, 597], 46: [930, 1243], 53: [606, 735], 54: [735, 860], "group-53-54": [80, 606] },
  "94-second": { 1: [90, 349], 4: [1039, 1374], 6: [92, 407], 9: [1051, 1244], 13: [572, 900], 15: [1144, 1387], 20: [1215, 1605], 25: [1335, 1605], 27: [489, 701], 29: [1028, 1291], 39: [92, 404], 49: [92, 450] },
  "95-first": { 2: [347, 624], 6: [117, 470], 10: [1407, 1605], 15: [1270, 1605], 17: [560, 815], 22: [300, 609], 25: [1009, 1264], 30: [879, 1298], 34: [1049, 1325], 39: [1343, 1563], 46: [693, 1010], 47: [1010, 1236], 48: [1236, 1605], 52: [429, 558], 53: [558, 1236] },
  "95-second": { 2: [350, 565], 6: [1378, 1605], 10: [1299, 1605], 14: [925, 1162], 16: [1359, 1605], 22: [490, 727], 26: [582, 827], 31: [684, 1040], 34: [452, 805], 38: [1312, 1605], 44: [95, 409], 46: [644, 882], 49: [95, 350], 53: [451, 586], 54: [586, 900], "group-53-54": [80, 451] },
  "96-first": { 3: [943, 1090], 4: [1090, 1350], 7: [310, 496], 8: [496, 682], 9: [682, 851], 10: [851, 1015], 11: [1015, 1370], 16: [984, 1207], 27: [1317, 1605], 29: [440, 652], 30: [652, 872], 31: [872, 1077], 32: [1077, 1327], 37: [1231, 1379], 46: [761, 984], 53: [686, 909], 54: [909, 1500], "group-53-54": [80, 686] },
  "96-second": { 5: [1328, 1605], 9: [1220, 1605], 10: [91, 400], 11: [400, 530], 12: [530, 775], 13: [775, 1040], 27: [380, 571], 29: [959, 1255], 30: [1255, 1605], 31: [91, 360], 32: [360, 632], 54: [1178, 1294], 55: [1294, 1410], 56: [1410, 1605], "group-54-56": [850, 1178] },
};

function officialFigure(
  year: OldYear,
  session: Session,
  id: number | string,
  alt: string,
): QuestionFigure {
  const bounds = cropBounds[`${year}-${session}`][id];
  const filename = typeof id === "string" ? id : `q${String(id).padStart(2, "0")}`;
  return {
    src: `/questions/${year}/${session}-${filename}-official.webp`,
    alt: `${year} 年${session === "first" ? "第一次" : "第二次"}基測${alt}`,
    width: 1080,
    height: bounds[1] - bounds[0],
  };
}

const optionIds: OptionId[] = ["A", "B", "C", "D"];

function imageQuestion(input: OldQuestionInput): BiologyQuestion {
  const sessionLabel = input.session === "first" ? "第一次" : "第二次";
  return makeBasicQuestion({
    year: input.year,
    number: input.number,
    session: sessionLabel,
    chapterId: input.chapterId,
    topic: input.topic,
    stem: input.stem,
    options: input.options ?? [
      "請見官方題圖中的（A）選項",
      "請見官方題圖中的（B）選項",
      "請見官方題圖中的（C）選項",
      "請見官方題圖中的（D）選項",
    ],
    answer: input.answer,
    figure: input.figure === null
      ? undefined
      : input.figure ?? officialFigure(input.year, input.session, input.number, `第 ${input.number} 題完整官方題面`),
    officialImageOnly: input.officialImageOnly ?? true,
    questionGroup: input.questionGroup,
    summary: input.summary,
    reasoning: input.reasoning,
    optionReasons: optionIds.map((id) =>
      id === input.answer
        ? `正確；${input.summary}`
        : `不正確；此選項與題圖資料或「${input.topic}」的判斷原則不符。`,
    ) as [string, string, string, string],
    shuffleSafe: false,
  });
}

const photosynthesis94Group: NonNullable<BiologyQuestion["questionGroup"]> = {
  id: "basic-94-first-photosynthesis-light",
  title: "光色、光合作用與需氧細菌",
  memberOriginalNumbers: [53, 54],
  sharedStem: "以下兩題共用水綿接受不同色光照射後，培養液中需氧細菌數量的實驗資料。",
  sharedFigure: {
    ...officialFigure(94, "first", "group-53-54", "第 53 至 54 題共同實驗資料"),
    width: 1919,
    height: 820,
  },
};

const invasiveFern95Group: NonNullable<BiologyQuestion["questionGroup"]> = {
  id: "basic-95-second-invasive-fern",
  title: "人厭槐葉蘋與外來種",
  memberOriginalNumbers: [53, 54],
  sharedStem: "以下兩題共用人厭槐葉蘋的分類特徵、繁殖方式與入侵生態影響資料。",
  sharedFigure: officialFigure(95, "second", "group-53-54", "第 53 至 54 題共同閱讀資料"),
};

const betta96Group: NonNullable<BiologyQuestion["questionGroup"]> = {
  id: "basic-96-first-betta-ecology",
  title: "蓋斑鬥魚的繁殖與食物鏈",
  memberOriginalNumbers: [53, 54],
  sharedStem: "以下兩題共用蓋斑鬥魚的生活環境、繁殖行為、呼吸構造與食性資料。",
  sharedFigure: officialFigure(96, "first", "group-53-54", "第 53 至 54 題共同閱讀資料"),
};

const placenta96Group: NonNullable<BiologyQuestion["questionGroup"]> = {
  id: "basic-96-second-placenta",
  title: "胎盤、臍帶與物質交換",
  memberOriginalNumbers: [54, 55, 56],
  sharedStem: "以下三題共用胎盤隔開母體與胎兒血液循環，以及臍帶運輸和擴散交換的資料。",
  sharedFigure: officialFigure(96, "second", "group-54-56", "第 54 至 56 題共同閱讀資料"),
};

export const questionsBasic94To96: BiologyQuestion[] = [
  imageQuestion({ year: 94, session: "first", number: 3, chapterId: "ecology", topic: "森林生態與生物多樣性", stem: "判斷森林砍伐對群集與環境的影響。", answer: "A", summary: "森林被大量砍伐後，群集組成通常會變得較單純，而不是更複雜。", reasoning: "森林提供多樣棲地；移除樹木會減少生物的食物、遮蔽與生活空間。" }),
  imageQuestion({ year: 94, session: "first", number: 8, chapterId: "ecology", topic: "紅樹林生態系", stem: "由紅樹林生物與環境資料判斷正確敘述。", answer: "B", summary: "應依紅樹林潮間帶環境及生物適應特徵判斷，正確選項為 B。", reasoning: "紅樹林位於河口或潮間帶，需同時考量鹽度、潮汐與棲地功能。" }),
  imageQuestion({ year: 94, session: "first", number: 9, chapterId: "classification", topic: "單子葉植物特徵", stem: "選出具有單子葉植物特徵的植物。", answer: "C", summary: "單子葉植物常具有平行脈，應選 C。", reasoning: "子葉數、葉脈、維管束排列及花部數目可協助區分單子葉與雙子葉植物。" }),
  imageQuestion({ year: 94, session: "first", number: 10, chapterId: "genetics", topic: "人類染色體與核型", stem: "由胎兒核型圖判斷染色體敘述。", answer: "D", summary: "圖中第 23 對為性染色體，因此染色體中有一對性染色體。", reasoning: "人類體細胞有 23 對染色體，其中 22 對為體染色體，1 對為性染色體。" }),
  imageQuestion({ year: 94, session: "first", number: 19, chapterId: "nutrition-and-energy", topic: "酵素活性", stem: "由溫度與酸鹼值曲線判斷酵素特性。", answer: "C", summary: "酵素活性不會隨溫度無限上升；超過適溫後常因構造改變而下降。", reasoning: "判讀兩張曲線時，要分別找出最適溫度與最適酸鹼值，不能把上升趨勢無限外推。" }),
  imageQuestion({ year: 94, session: "first", number: 20, chapterId: "transport", topic: "血液成分與功能", stem: "判斷血液成分的形態與功能。", answer: "C", summary: "白血球可協助吞噬病原體，符合題圖所示功能。", reasoning: "紅血球運輸氧、白血球參與防禦、血小板協助凝血、血漿運輸溶解物質。" }),
  imageQuestion({ year: 94, session: "first", number: 21, chapterId: "transport", topic: "植物維管束與運輸", stem: "由植物構造與染色實驗判斷運輸部位。", answer: "D", summary: "紅色水溶液會隨水分經木質部上升，使維管束中的木質部著色。", reasoning: "植物的水和無機鹽主要由木質部向上運輸，糖則主要經韌皮部運輸。" }),
  imageQuestion({ year: 94, session: "first", number: 28, chapterId: "coordination", topic: "反射作用", stem: "判斷反射弧中的訊息傳遞與反應。", answer: "C", summary: "反射可先由中樞快速整合後產生反應，再將訊息傳到大腦形成感覺。", reasoning: "反射弧依序涉及受器、感覺神經元、中樞、運動神經元與動器。" }),
  imageQuestion({ year: 94, session: "first", number: 29, chapterId: "reproduction", topic: "花粉與花的構造", stem: "小萱欲在「探索花的構造」實驗中觀察花粉。下列敘述何者錯誤？", options: ["小萱可使用複式顯微鏡來觀察", "花粉裡面含有卵細胞", "花粉取自於雄蕊的花藥", "若要再放大觀察，可調整物鏡的倍數"], figure: null, officialImageOnly: false, answer: "B", summary: "花粉由雄蕊的花藥產生，和位於胚珠內的卵細胞不同。", reasoning: "本題雖提到複式顯微鏡與倍率，但判斷錯誤敘述的核心是花的生殖構造及雌、雄生殖細胞，因此改歸植物的生殖。" }),
  imageQuestion({ year: 94, session: "first", number: 30, chapterId: "classification", topic: "分類階層與親緣", stem: "由分類階層判斷生物的相似程度。", answer: "D", summary: "共同分類階層愈多且階層愈低，通常代表親緣關係愈接近。", reasoning: "分類由界至種逐層縮小；同種生物的共同特徵最多。" }),
  imageQuestion({ year: 94, session: "first", number: 32, chapterId: "nutrition-and-energy", topic: "消化與吸收", stem: "判斷人體消化器官與養分分解吸收。", answer: "D", summary: "應依各器官分泌物、消化作用與吸收位置配對，正確選項為 D。", reasoning: "口腔開始消化澱粉，胃主要消化蛋白質，小腸完成大部分消化與吸收。" }),
  imageQuestion({ year: 94, session: "first", number: 35, chapterId: "classification", topic: "化石與古環境", stem: "由化石種類判斷古代生物與沉積環境。", answer: "D", summary: "三葉蟲是海生生物，將其判定為陸相沉積環境並不合理。", reasoning: "化石可提供生物生存年代及當時環境線索，但要先知道代表生物的生活環境。" }),
  imageQuestion({ year: 94, session: "first", number: 46, chapterId: "homeostasis", topic: "血糖恆定與激素", stem: "由血糖調節圖判斷升高血糖的激素。", answer: "D", summary: "血糖過低時，升糖素可促使血糖回升並維持恆定。", reasoning: "胰島素降低血糖；升糖素使血糖升高，兩者共同維持血糖穩定。" }),
  imageQuestion({ year: 94, session: "first", number: 53, chapterId: "nutrition-and-energy", topic: "光合作用實驗", stem: "由不同色光下需氧細菌數量判斷研究的生理作用。", answer: "C", summary: "需氧細菌聚集反映水綿放出的氧氣量，因此研究的是光合作用。", reasoning: "光合作用產生氧氣；細菌數量可作為不同色光下產氧程度的間接指標。", questionGroup: photosynthesis94Group }),
  imageQuestion({ year: 94, session: "first", number: 54, chapterId: "nutrition-and-energy", topic: "光色與光合作用速率", stem: "選出可提高題述光合作用速率的處理。", answer: "A", summary: "由圖中結果可知紫光下產氧較多，改以紫光照射可提高作用速率。", reasoning: "應直接比較不同色光下的需氧細菌數量，不能以細菌本身數量取代植物產氧能力。", questionGroup: photosynthesis94Group }),

  imageQuestion({ year: 94, session: "second", number: 1, chapterId: "ecology", topic: "生物多樣性保育", stem: "選出有助維護臺灣生物多樣性的措施。", answer: "C", summary: "設立國家公園與生態保護區可保全棲地與物種多樣性。", reasoning: "保育應優先維護原生棲地，避免擴張開發、任意引入外來種或捕捉野生生物。" }),
  imageQuestion({ year: 94, session: "second", number: 4, chapterId: "science-and-life", topic: "顯微鏡倍率與視野", stem: "圖（二）為血球在複式顯微鏡下，以 4 倍物鏡所觀察到的影像。若在同一視野下，換成 10 倍的物鏡觀察，則最有可能看見下列何種影像？", options: ["圖選項 A", "圖選項 B", "圖選項 C", "圖選項 D"], figure: { src: "/questions/94/second-q04-view-options.webp", alt: "94 年第二次基測第 4 題題圖：上方為 4 倍物鏡下的血球視野圖（二），下方為 A 至 D 四個 10 倍物鏡圖形選項", width: 1200, height: 652 }, officialImageOnly: false, answer: "D", summary: "更換較高倍率物鏡後，影像較大、視野較小且可見物數量較少。", reasoning: "總放大倍率增加時，視野範圍與亮度通常下降，物像方向仍維持倒像。" }),
  imageQuestion({ year: 94, session: "second", number: 6, chapterId: "classification", topic: "植物分類與裸子植物", stem: "依維管束與種子特徵判斷植物家族。", answer: "A", summary: "具有維管束且形成裸露種子的植物屬裸子植物所在分支。", reasoning: "先判斷有無維管束，再看是否產生種子及種子是否包在果實內。" }),
  imageQuestion({ year: 94, session: "second", number: 9, chapterId: "ecology", topic: "生物適應與表面積", stem: "選出可減少表面積的適應構造。", answer: "A", summary: "仙人掌葉退化成針狀，可減少表面積與水分散失。", reasoning: "表面積變小常有利於乾燥環境保存水分；絨毛等構造則會增加表面積。" }),
  imageQuestion({ year: 94, session: "second", number: 13, chapterId: "classification", topic: "動物構造與生殖方式", stem: "由人魚轉變情境判斷生物構造的合理配對。", answer: "B", summary: "應依魚類與人類的運動、呼吸及生殖特徵逐項比對，正確選項為 B。", reasoning: "生物分類與構造判讀需使用實際器官功能，不能把體型改變直接視為生殖方式改變。" }),
  imageQuestion({ year: 94, session: "second", number: 15, chapterId: "homeostasis", topic: "腎臟與排泄", stem: "判斷人體腎臟的功能。", answer: "D", summary: "腎臟可將血液中的含氮廢物形成尿液排出。", reasoning: "腎臟負責過濾血液並調節水鹽平衡；尿液長期儲存在膀胱而非腎臟。" }),
  imageQuestion({ year: 94, session: "second", number: 20, chapterId: "homeostasis", topic: "人體水分平衡", stem: "由每日水分攝入與排出表判斷錯誤推論。", answer: "D", summary: "將各項攝入與排出量加總後，D 的推論不符合表中水分平衡。", reasoning: "水分可由飲水、食物和代謝獲得，並經尿液、皮膚、呼吸與糞便排出。" }),
  imageQuestion({ year: 94, session: "second", number: 25, chapterId: "nutrition-and-energy", topic: "蛋白質消化與酸鹼", stem: "選出分解蛋白質效果最佳的試管。", answer: "A", summary: "胃蛋白酶在酸性環境中較能分解蛋白質，因此胃液加少量鹽酸最適合。", reasoning: "先配對酵素作用對象，再配對其適合的酸鹼環境。" }),
  imageQuestion({ year: 94, session: "second", number: 27, chapterId: "cells", topic: "生物體組成層次", stem: "媽媽從市場買了一塊排骨肉。在生物學上，下列何者與排骨肉屬於不同的生物體組成層次？", options: ["榕樹的維管束", "鴨跖草葉的上表皮", "人體口腔的皮膜", "豌豆莢中的豌豆"], figure: null, officialImageOnly: false, answer: "D", summary: "豌豆是由胚珠發育成的種子，屬器官層次；其他選項主要為組織。", reasoning: "細胞組成組織，組織組成器官；判讀時要看題名指的是完整器官還是其中一種組織。" }),
  imageQuestion({ year: 94, session: "second", number: 29, chapterId: "ecology", topic: "食物網與消費者層級", stem: "由玉米田食物網判斷兼具二、三級消費者的生物。", answer: "A", summary: "同一生物可因取食不同營養階層而同時位於二、三級消費者。", reasoning: "沿食物網箭頭逐條追蹤食物來源，不能只替每種生物固定一個營養階層。" }),
  imageQuestion({ year: 94, session: "second", number: 39, chapterId: "reproduction", topic: "細胞分裂與減數分裂", stem: "由染色體數量變化圖比較兩種分裂。", answer: "C", summary: "需依染色體數是否減半及最後形成的細胞數判讀，正確選項為 C。", reasoning: "一般細胞分裂維持染色體套數；減數分裂使套數減半並形成配子。" }),
  imageQuestion({ year: 94, session: "second", number: 49, chapterId: "genetics", topic: "ABO 血型遺傳", stem: "由父母與子女血型推論基因型與機率。", answer: "B", summary: "由已出生子女的血型可反推雙親必須帶有的等位基因，B 的推論錯誤。", reasoning: "先列出 IA、IB、i 的顯隱性關係，再用子代表現型排除不可能的親代基因型。" }),

  imageQuestion({ year: 95, session: "first", number: 2, chapterId: "ecology", topic: "食物關係與族群變化", stem: "判斷捕殺麻雀後蝗蟲大量繁殖的原因。", answer: "A", summary: "麻雀減少使蝗蟲遭捕食的壓力降低，族群因而增加。", reasoning: "食物網中一個消費者數量改變，會連帶影響其獵物與其他生物。" }),
  imageQuestion({ year: 95, session: "first", number: 6, chapterId: "coordination", topic: "感覺與神經系統", stem: "由感覺器官和刺激配對判斷相關系統。", answer: "A", summary: "感覺器官接受刺激並由神經傳遞與處理，最相關的是神經系統。", reasoning: "眼、耳、鼻、舌與皮膚的受器把刺激轉為神經訊息，再由中樞整合。" }),
  imageQuestion({ year: 95, session: "first", number: 10, chapterId: "classification", topic: "蕨類植物特徵", stem: "由葉片外形及葉背孢子囊群辨認植物。", answer: "D", summary: "葉背具有褐色孢子囊群，是蕨類植物的重要特徵。", reasoning: "蕨類有維管束、不產生種子，常以孢子繁殖。" }),
  imageQuestion({ year: 95, session: "first", number: 15, chapterId: "genetics", topic: "細胞核移植與複製", stem: "判斷核移植產生幼蛙的主要性狀來源。", answer: "B", summary: "細胞核含主要遺傳物質，幼蛙性狀主要接近提供細胞核的褐色蛙。", reasoning: "去核卵細胞提供細胞質，供核細胞則提供核內大部分遺傳資訊。" }),
  imageQuestion({ year: 95, session: "first", number: 17, chapterId: "ecology", topic: "族群、群集與生態系", stem: "由校園動物園觀察資料判斷生態層級。", answer: "D", summary: "菊花、青蛙與螞蟻至少分屬三個物種，因此至少觀察到三個族群。", reasoning: "同種生物在同一時空構成族群；多個族群構成群集，還需非生物環境才是生態系。" }),
  imageQuestion({ year: 95, session: "first", number: 22, chapterId: "genetics", topic: "有性與無性生殖的基因型", stem: "比較走莖繁殖與雜交所得植株的基因型。", answer: "C", summary: "走莖繁殖的後代與 AA 親株相同；AA 與 aa 雜交的後代為 Aa。", reasoning: "無性生殖通常保留親代基因型；有性生殖的後代各取得雙親一份等位基因。" }),
  imageQuestion({ year: 95, session: "first", number: 25, chapterId: "coordination", topic: "神經系統部位與功能", stem: "由神經系統圖判斷運動時的控制功能。", answer: "B", summary: "小腦可協調肌肉活動並維持身體平衡，符合選項 B。", reasoning: "大腦負責意識活動，小腦協調平衡，腦幹調節呼吸心跳，脊髓可整合反射。" }),
  imageQuestion({ year: 95, session: "first", number: 30, chapterId: "transport", topic: "蒸散作用與氣孔", stem: "判斷倒置綠豆幼苗實驗中的錯誤敘述。", answer: "A", summary: "蒸散在白天與夜晚都可能發生，杯壁液體不會只在夜晚出現。", reasoning: "植物散失的水蒸氣可在杯壁凝結；葉片下表皮的氣孔也是蒸散的重要通道。" }),
  imageQuestion({ year: 95, session: "first", number: 34, chapterId: "transport", topic: "動脈與靜脈", stem: "由綁住上臂後血管變化辨認動、靜脈。", answer: "A", summary: "靠近心臟側不明顯者為動脈，遠端因回流受阻而浮現者為靜脈。", reasoning: "綁住上臂會使靜脈回流受阻而膨起；動脈仍將血送往手臂。" }),
  imageQuestion({ year: 95, session: "first", number: 39, chapterId: "science-and-life", topic: "口腔皮膜細胞與顯微鏡", stem: "小靜用顯微鏡觀察以亞甲藍液染色後的口腔皮膜細胞，下列關於此實驗的敘述何者正確？", options: ["需使用複式顯微鏡進行觀察", "被染色的部位主要為細胞膜", "其構造與植物表皮細胞相同", "可觀察到呈半月形的保衛細胞"], figure: null, officialImageOnly: false, answer: "A", summary: "口腔皮膜細胞微小，需使用複式顯微鏡觀察。", reasoning: "亞甲藍主要使細胞核較明顯；動物細胞沒有細胞壁與保衛細胞。" }),
  imageQuestion({ year: 95, session: "first", number: 46, chapterId: "nutrition-and-energy", topic: "消化系統", stem: "由消化系統圖判斷食物消化與吸收。", answer: "D", summary: "應依題圖標示器官與養分分解、吸收位置判斷，正確選項為 D。", reasoning: "澱粉可從口腔開始消化，脂質主要在小腸消化，小腸也是養分吸收的主要場所。" }),
  imageQuestion({ year: 95, session: "first", number: 47, chapterId: "ecology", topic: "溫室氣體與人類活動", stem: "選出會增加大氣溫室氣體的作用。", answer: "A", summary: "燃燒化石燃料會增加二氧化碳等溫室氣體。", reasoning: "比較各作用對大氣碳的淨輸入或移除；光合作用會消耗二氧化碳。" }),
  imageQuestion({ year: 95, session: "first", number: 48, chapterId: "coordination", topic: "緊急反應與腎上腺素", stem: "判斷遇到野狗時的神經與激素反應。", answer: "C", summary: "緊急狀態下血糖升高，可讓組織取得較多可利用養分。", reasoning: "腎上腺素會使心跳、呼吸與血糖上升；有意識的逃跑需經大腦判斷。" }),
  imageQuestion({ year: 95, session: "first", number: 52, chapterId: "ecology", topic: "共生關係", stem: "判斷花生根與固氮細菌的交互關係。", answer: "D", summary: "花生獲得含氮物質，細菌獲得養分與棲所，兩者為互利共生。", reasoning: "判斷生物互動時，要分別比較雙方獲益、受害或無明顯影響。" }),
  imageQuestion({ year: 95, session: "first", number: 53, chapterId: "reproduction", topic: "花、胚珠與種子", stem: "判斷花生莢內有多粒花生仁的原因。", answer: "B", summary: "一個子房內有多個胚珠，受精後可形成多粒種子。", reasoning: "胚珠受精後發育成種子，子房則發育成果實。" }),

  imageQuestion({ year: 95, session: "second", number: 2, chapterId: "reproduction", topic: "斷裂生殖", stem: "判斷海參斷裂後形成新個體的生殖方式。", answer: "A", summary: "斷裂生殖不需配子結合，屬於無性生殖。", reasoning: "無性生殖主要靠一般細胞分裂，後代遺傳物質通常與親代相近。" }),
  imageQuestion({ year: 95, session: "second", number: 6, chapterId: "nutrition-and-energy", topic: "光合作用條件與產物", stem: "判斷光合作用的能量、原料與產物。", answer: "A", summary: "光合作用涉及光能轉成化學能，因此「不牽涉能量轉換」不正確。", reasoning: "光合作用利用光能，把水與二氧化碳合成養分並釋放氧氣。" }),
  imageQuestion({ year: 95, session: "second", number: 10, chapterId: "cells", topic: "生物體組成層次", stem: "有關生物體組成層次之敘述，下列何者正確？", options: ["植物莖的表皮與動物的皮膚同為系統層次", "植物的根、莖、葉與動物的胃、小腸同為器官層次", "植物葉表皮上的保衛細胞與動物的腎臟同為組織層次", "植物的花、果實與動物的精子、卵子同為細胞層次"], figure: null, officialImageOnly: false, answer: "B", summary: "植物的根、莖、葉與動物的胃、小腸都屬器官層次。", reasoning: "多種組織組成器官；器官可執行特定功能。" }),
  imageQuestion({ year: 95, session: "second", number: 14, chapterId: "coordination", topic: "酵素與激素", stem: "比較酵素與激素的作用。", answer: "D", summary: "酵素可加速生化反應，激素則傳遞調節訊息給目標細胞。", reasoning: "兩者功能不同；酵素不一定由血液運送，胰島素是激素而胃蛋白酶是酵素。" }),
  imageQuestion({ year: 95, session: "second", number: 16, chapterId: "reproduction", topic: "有性與無性生殖共通點", stem: "找出三種生殖方式的共同過程。", answer: "C", summary: "無論有性或無性生殖，形成與生長新個體都需要細胞分裂。", reasoning: "減數分裂、受精與基因重組只出現在部分有性生殖情況。" }),
  imageQuestion({ year: 95, session: "second", number: 22, chapterId: "coordination", topic: "植物向性", stem: "選出屬於植物向性的現象。", answer: "D", summary: "橫放豆苗的莖彎曲向上，是對重力方向產生的向性反應。", reasoning: "向性是植物生長方向受刺激方向影響；開花、睡眠運動與氣孔開閉不一定屬向性。" }),
  imageQuestion({ year: 95, session: "second", number: 26, chapterId: "transport", topic: "循環構造與功能", stem: "判斷人體循環系統構造的功能。", answer: "A", summary: "瓣膜可防止血液逆流。", reasoning: "物質交換主要在微血管，血漿運輸多數溶解養分，心臟將血壓入動脈。" }),
  imageQuestion({ year: 95, session: "second", number: 31, chapterId: "ecology", topic: "食物鏈能量流動", stem: "由食物鏈判斷生物獲得能量的多寡。", answer: "A", summary: "能量沿營養階層向上傳遞時逐層減少，因此生產者獲得的能量最多。", reasoning: "每一階層的能量有一部分用於代謝並散失，無法全部傳到下一階層。" }),
  imageQuestion({ year: 95, session: "second", number: 34, chapterId: "coordination", topic: "大腦功能", stem: "判斷阿茲海默症語言障礙涉及的器官。", answer: "C", summary: "語言、記憶與意識活動主要由大腦負責。", reasoning: "小腦主要協調平衡，腦幹調節基本生命現象，脊髓可整合部分反射。" }),
  imageQuestion({ year: 95, session: "second", number: 38, chapterId: "classification", topic: "原核生物界", stem: "判斷原核生物的細胞特徵。", answer: "D", summary: "原核生物具有遺傳物質但缺少核膜包圍的細胞核。", reasoning: "細菌屬原核生物；酵母菌是真菌，具有真正的細胞核。" }),
  imageQuestion({ year: 95, session: "second", number: 44, chapterId: "ecology", topic: "族群、群集與生態系", stem: "由曾文溪河口資料判斷生態層級。", answer: "B", summary: "棲息於同一地區的所有生物族群可組成群集。", reasoning: "族群只含同種生物；生態系則還需包含非生物環境。" }),
  imageQuestion({ year: 95, session: "second", number: 46, chapterId: "transport", topic: "植物蒸散作用", stem: "判斷蒸散作用對植物水分運輸的影響。", answer: "A", summary: "蒸散造成拉力，有助根部吸收水分並促使水沿木質部上升。", reasoning: "水由根向葉移動，最後多經氣孔散失；韌皮部不是主要輸水構造。" }),
  imageQuestion({ year: 95, session: "second", number: 49, chapterId: "genetics", topic: "性聯遺傳", stem: "由紅綠色盲遺傳資料判斷男孩的基因來源。", answer: "A", summary: "男孩的 X 染色體來自母親，因此色盲基因最可能由母親遺傳。", reasoning: "父親把 Y 染色體傳給兒子，母親則把其中一條 X 染色體傳給兒子。" }),
  imageQuestion({ year: 95, session: "second", number: 53, chapterId: "classification", topic: "蕨類植物特徵", stem: "判斷人厭槐葉蘋的分類特徵。", answer: "A", summary: "槐葉蘋屬蕨類，不會產生種子，因此 A 為錯誤敘述。", reasoning: "蕨類不開花、不結果，以孢子繁殖且具有維管束。", questionGroup: invasiveFern95Group }),
  imageQuestion({ year: 95, session: "second", number: 54, chapterId: "ecology", topic: "外來種與生態衝擊", stem: "選出不是外來種成為生態殺手的原因。", answer: "D", summary: "繁殖速度比原生種慢不利於快速入侵，並非成為生態殺手的主要原因。", reasoning: "外來種常因缺少天敵、適應環境且繁殖快速而擴張。", questionGroup: invasiveFern95Group }),

  imageQuestion({ year: 96, session: "first", number: 3, chapterId: "ecology", topic: "互利共生", stem: "判斷白稀子樹與螞蟻的交互關係。", answer: "A", summary: "樹提供甜液，螞蟻驅趕害蟲，雙方都獲益，屬互利共生。", reasoning: "分別分析兩種生物的利害，即可區分共生、寄生、捕食與競爭。" }),
  imageQuestion({ year: 96, session: "first", number: 4, chapterId: "nutrition-and-energy", topic: "酵素與溫度", stem: "由反應速率曲線判斷耐熱程度最低的酵素。", answer: "A", summary: "最早在較低溫度失去活性的曲線代表耐熱程度最低。", reasoning: "比較曲線在高溫端何時快速下降，而不是只比較最高反應速率。" }),
  imageQuestion({ year: 96, session: "first", number: 7, chapterId: "homeostasis", topic: "呼氣與胸腔變化", stem: "判斷吹奏樂器時呼氣的身體變化。", answer: "D", summary: "呼氣時胸腔體積逐漸變小，空氣由肺部排出。", reasoning: "一般呼氣時橫膈上升、肋骨下降，胸腔與肺的體積減小。" }),
  imageQuestion({ year: 96, session: "first", number: 8, chapterId: "cells", topic: "粒線體與能量", stem: "小智想要研究動物細胞產生能量的方式。他應該從細胞中取出下列哪一種構造進行研究？", options: ["液胞", "細胞膜", "細胞核", "粒線體"], figure: null, officialImageOnly: false, answer: "D", summary: "粒線體是細胞進行呼吸作用、釋放可用能量的重要場所。", reasoning: "細胞膜控制物質進出，細胞核含遺傳物質，液胞主要儲存物質。" }),
  imageQuestion({ year: 96, session: "first", number: 9, chapterId: "homeostasis", topic: "胰島素與血糖", stem: "由空腹與飯後血糖檢測判斷相關激素。", answer: "C", summary: "飯後血糖調節主要與胰島素功能有關。", reasoning: "胰島素促使細胞利用或儲存葡萄糖，使升高的血糖回復穩定。" }),
  imageQuestion({ year: 96, session: "first", number: 10, chapterId: "reproduction", topic: "生殖構造與發育", stem: "選出無法直接發育成新個體的構造。", answer: "B", summary: "未受精的果蠅卵細胞通常不能直接發育成新個體。", reasoning: "落地生根葉、酵母芽體與黴菌孢子在適當環境可形成新個體。" }),
  imageQuestion({ year: 96, session: "first", number: 11, chapterId: "genetics", topic: "家族顯隱性遺傳", stem: "由家族性狀表找出不符合顯性遺傳的紀錄。", answer: "D", summary: "依雙親與子女表現型推理，酒窩欄的紀錄不符合題設遺傳方式。", reasoning: "雙親都表現隱性性狀時，子女不應出現顯性性狀。" }),
  imageQuestion({ year: 96, session: "first", number: 16, chapterId: "ecology", topic: "臭氧層與生物健康", stem: "判斷平流層臭氧減少的直接危機。", answer: "B", summary: "臭氧減少會使到達地表的紫外線增加，直接危害生物健康。", reasoning: "臭氧層主要吸收紫外線；這與溫室效應的成因不同。" }),
  imageQuestion({ year: 96, session: "first", number: 27, chapterId: "transport", topic: "動脈與靜脈", stem: "比較動脈與靜脈的血流方向。", answer: "D", summary: "動脈把血液帶離心臟，靜脈把血液送回心臟。", reasoning: "動、靜脈依血流方向命名，不能一律用含氧量判斷。" }),
  imageQuestion({ year: 96, session: "first", number: 29, chapterId: "coordination", topic: "反射作用", stem: "判斷反射作用的中樞與特性。", answer: "C", summary: "眨眼可由腦內中樞整合，屬反射動作。", reasoning: "反射通常快速且不需先有大腦意識，但仍需要受器、神經與動器。" }),
  imageQuestion({ year: 96, session: "first", number: 30, chapterId: "nutrition-and-energy", topic: "光合作用", stem: "判斷光反應與暗反應的敘述。", answer: "A", summary: "光反應必須有光能才能進行。", reasoning: "暗反應不代表只能在黑暗中進行；光合作用的放氧來源與能量轉換也需分清。" }),
  imageQuestion({ year: 96, session: "first", number: 31, chapterId: "classification", topic: "雙子葉植物特徵", stem: "由天竺葵葉片判斷植物分類特徵。", answer: "D", summary: "天竺葵具有網狀脈，屬雙子葉植物。", reasoning: "雙子葉植物常見網狀脈、莖內維管束環狀排列，花部多為四或五的倍數。" }),
  imageQuestion({ year: 96, session: "first", number: 32, chapterId: "reproduction", topic: "細胞分裂與傷口癒合", stem: "大雄打籃球時不慎跌倒，手肘受傷。過一陣子，傷口邊緣增生新細胞，使傷口慢慢癒合。有關這類新增生的細胞，下列敘述何者正確？", options: ["新細胞具有雙套染色體", "新細胞由減數分裂增生而來", "新細胞內染色體與周圍細胞的染色體不同", "新細胞內染色體數目比原來的細胞少一半"], figure: null, officialImageOnly: false, answer: "A", summary: "傷口癒合靠一般細胞分裂，新細胞仍具有雙套染色體。", reasoning: "一般細胞分裂維持染色體數與遺傳資訊；減數分裂用於形成配子。" }),
  imageQuestion({ year: 96, session: "first", number: 37, chapterId: "nutrition-and-energy", topic: "大分子與基本單位", stem: "類比蛋白質與胺基酸的關係。", answer: "C", summary: "澱粉由許多葡萄糖組成，類似蛋白質由許多胺基酸組成。", reasoning: "題目比較的是大分子與其基本組成單位，而不是同義名稱或化學反應物。" }),
  imageQuestion({ year: 96, session: "first", number: 46, chapterId: "classification", topic: "植物分類檢索", stem: "由分類圖判斷與水稻同類的植物。", answer: "D", summary: "依是否形成種子、果實及單雙子葉特徵逐層判讀，正確選項為 D。", reasoning: "水稻是會開花結果的單子葉植物，需選擇具有相同關鍵分類特徵者。" }),
  imageQuestion({ year: 96, session: "first", number: 53, chapterId: "ecology", topic: "鬥魚環境與繁殖行為", stem: "由閱讀資料判斷蓋斑鬥魚的正確推論。", answer: "A", summary: "蓋斑鬥魚能在低含氧水域生存，可作為題述水域含氧狀況的判斷線索。", reasoning: "答案需直接由共同閱讀資料中的呼吸構造、繁殖季節與存活率資訊推得。", questionGroup: betta96Group }),
  imageQuestion({ year: 96, session: "first", number: 54, chapterId: "ecology", topic: "食物鏈角色", stem: "由蓋斑鬥魚食性判斷其在食物網中的角色。", answer: "B", summary: "蓋斑鬥魚捕食昆蟲或孑孓，角色最接近食物網中的獅子。", reasoning: "比較生物取得能量的方式與營養階層，而不是比較體型或棲地。", questionGroup: betta96Group }),

  imageQuestion({ year: 96, session: "second", number: 5, chapterId: "coordination", topic: "植物向光性", stem: "判斷促使植物莖表現向性的刺激。", answer: "D", summary: "周圍光線強度不均可使莖表現向光性。", reasoning: "向性是植物生長方向受刺激方向影響；單純日夜或季節差異不一定形成方向性。" }),
  imageQuestion({ year: 96, session: "second", number: 9, chapterId: "ecology", topic: "種間交互作用", stem: "由加入乙生物後甲族群曲線判斷最不可能的關係。", answer: "A", summary: "甲的數量明顯下降，不符合雙方通常互利的共生關係。", reasoning: "若乙使甲受害，較可能是競爭、寄生或捕食；互利共生不應呈現同樣趨勢。" }),
  imageQuestion({ year: 96, session: "second", number: 10, chapterId: "classification", topic: "單子葉植物特徵", stem: "由葉脈、維管束與子葉圖判斷單子葉植物。", answer: "A", summary: "單子葉植物具有平行脈、散生維管束與一枚子葉，對應 A。", reasoning: "三項特徵要同時配對，不能只看其中一欄。" }),
  imageQuestion({ year: 96, session: "second", number: 11, chapterId: "cells", topic: "生物體組成層次", stem: "下列哪一個生物構造的組成層次最低？", options: ["淋巴結", "白血球", "肋骨", "血管"], figure: null, officialImageOnly: false, answer: "B", summary: "白血球是單一細胞，層次低於器官或組織。", reasoning: "淋巴結、肋骨與血管都由多種組織構成；白血球本身是一個細胞。" }),
  imageQuestion({ year: 96, session: "second", number: 12, chapterId: "reproduction", topic: "女性生殖系統與減數分裂", stem: "由染色體數量變化判斷發生分裂的部位。", answer: "B", summary: "形成卵細胞的減數分裂發生在卵巢，圖中對應乙。", reasoning: "染色體套數減半代表減數分裂；女性配子在卵巢形成。" }),
  imageQuestion({ year: 96, session: "second", number: 13, chapterId: "transport", topic: "蒸散實驗與氣孔", stem: "設計證明水由氣孔離開植物的實驗。", answer: "D", summary: "應把藍色氯化亞鈷試紙貼在氣孔較多的葉片下表皮，受潮後觀察變色。", reasoning: "藍色氯化亞鈷試紙遇水變粉紅；對雙子葉植物而言，下表皮通常有較多氣孔。" }),
  imageQuestion({ year: 96, session: "second", number: 27, chapterId: "classification", topic: "蘚苔與蕨類比較", stem: "選出可確認蘚苔而非蕨類的特徵。", answer: "B", summary: "蘚苔植物沒有維管束，蕨類則具有維管束。", reasoning: "兩者都可用孢子繁殖且常見於陰濕處，這些不是最具區別力的特徵。" }),
  imageQuestion({ year: 96, session: "second", number: 29, chapterId: "reproduction", topic: "植物生殖器官", stem: "選出包含植物生殖器官的圖。", answer: "D", summary: "朱槿花是植物的生殖器官，應選 D。", reasoning: "根、莖、葉屬營養器官；花、果實與種子屬生殖相關器官。" }),
  imageQuestion({ year: 96, session: "second", number: 30, chapterId: "genetics", topic: "基因工程與細胞核", stem: "由酵母菌細胞圖判斷取得胰島素基因的部位。", answer: "A", summary: "基因位於細胞核內的染色體 DNA，圖中對應甲。", reasoning: "酵母菌是真核生物，遺傳物質主要位於細胞核。" }),
  imageQuestion({ year: 96, session: "second", number: 31, chapterId: "genetics", topic: "複製生物", stem: "判斷複製馬敘述中的錯誤。", answer: "B", summary: "複製馬是體細胞核移植，不是像試管嬰兒一樣的體外受精。", reasoning: "複製胚胎仍需移入母馬子宮發育，核基因主要來自供核冠軍馬。" }),
  imageQuestion({ year: 96, session: "second", number: 32, chapterId: "nutrition-and-energy", topic: "消化、吸收與血糖", stem: "判斷晚餐後食物消化與吸收。", answer: "C", summary: "吸收的血糖可在胰島素作用下轉為肝糖，儲存在肝臟等部位。", reasoning: "消化從口腔開始；膽汁由肝臟製造且不含消化酵素；並非消化管各處都有消化腺。" }),
  imageQuestion({ year: 96, session: "second", number: 54, chapterId: "reproduction", topic: "胎盤與胎生動物", stem: "選出具有胎盤的動物。", answer: "B", summary: "袋鼠屬哺乳類，題目所列選項中具有胎盤。", reasoning: "企鵝、鴿子是鳥類，樹蛙是兩生類；依閱讀資料應選哺乳動物。", questionGroup: placenta96Group }),
  imageQuestion({ year: 96, session: "second", number: 55, chapterId: "transport", topic: "臍帶血液運輸", stem: "判斷臍靜脈血液的顏色。", answer: "C", summary: "臍靜脈把含氧較多的血送往胎兒，顏色為鮮紅色。", reasoning: "動、靜脈依血流方向命名；臍靜脈雖是靜脈，卻運送含氧較多的血。", questionGroup: placenta96Group }),
  imageQuestion({ year: 96, session: "second", number: 56, chapterId: "transport", topic: "胎盤的擴散交換", stem: "判斷胎盤與母體間交換物質的作用。", answer: "B", summary: "氧、養分與代謝廢物可透過濃度差進行擴散交換。", reasoning: "母體與胎兒血液不直接相通，物質跨越胎盤主要靠擴散而非消化或氧化。", questionGroup: placenta96Group }),
];
