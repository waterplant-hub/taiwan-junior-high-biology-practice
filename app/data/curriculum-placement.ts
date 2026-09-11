import { chapters } from "./chapters";
import { practiceUnits, resolvePracticeUnit } from "./practice-units";
import type { BiologyQuestion } from "./types";

interface Placement {
  unitId: string;
  reason: string;
  topic?: string;
}

// Keyed by permanent question ID, not by shuffled display number.
// References and the review log are in docs/curriculum-classification-review.md.
export const reviewedPlacements: Record<string, Placement> = {};

function assign(ids: string[], unitId: string, reason: string, topic?: string) {
  ids.forEach((id) => {
    if (reviewedPlacements[id]) throw new Error(`Duplicate reviewed placement: ${id}`);
    reviewedPlacements[id] = { unitId, reason, topic };
  });
}

assign([
  "cap-115-nature-24", "cap-114-nature-8", "cap-112-nature-25",
  "cap-111-nature-18", "cap-105-nature-7", "cap-103-nature-34",
  "basic-99-first-nature-13", "basic-99-second-nature-24",
  "basic-100-second-nature-45", "basic-91-first-nature-44",
  "basic-93-second-nature-31",
], "breathing", "需理解呼吸作用、產耗氣體或光合作用與呼吸作用的比較，依上冊 5-1 放在恆定單元。");
assign(["cap-106-nature-18"], "breathing", "須由光合作用與呼吸作用推論胞器，超出僅辨識細胞構造的練習。", "光合作用、呼吸作用與胞器");
assign(["cap-104-nature-1", "cap-108-nature-5", "basic-97-first-nature-10", "basic-97-second-nature-25"],
  "photosynthesis", "只需光合作用的反應物、產物或速率，原本的呼吸作用標題過廣。", "光合作用");
assign(["basic-98-first-nature-7"], "five-kingdoms", "須辨識矽藻、真菌及細菌的營養方式，放在五界生物。", "生物界分類與營養方式");
assign(["basic-90-first-nature-18"], "nutrients-and-enzymes", "讀取運動熱量表即可作答，不考呼吸作用。", "運動與熱量判讀");
assign(["basic-98-first-nature-23"], "photosynthesis", "需知道葉綠體與自製養分的關係。", "葉綠體與植物製造養分");
assign(["cap-112-nature-24", "basic-98-first-nature-48", "basic-99-first-nature-47"],
  "nutrients-and-enzymes", "需先學會碘液或本氏液檢測，不能只按細胞膜關鍵字放在細胞單元。", "物質通過膜與養分檢測");
assign(["basic-90-first-nature-36"], "five-kingdoms", "需比較植物與真菌的構造，待真菌界學完再練習。", "植物與真菌的細胞構造");
assign(["basic-95-first-nature-39"], "microscope-and-cells", "包含染色與動植物細胞構造比較，應在細胞觀察小節。");
assign(["basic-100-second-nature-44"], "body-organization", "考組織、器官與系統的層次，不是第一單元的生命現象。");
assign(["basic-97-second-nature-26"], "breathing", "須辨認肺泡與呼吸系統，延後到呼吸與氣體的恆定。", "人體器官與系統功能");
assign(["basic-91-second-nature-41"], "breathing", "須認識胸腔、腹腔與橫膈，放在呼吸構造相關小節。", "人體體腔與橫膈");

assign(["basic-96-second-nature-32", "basic-99-second-nature-50", "basic-92-first-nature-43"],
  "blood-glucose", "解題需要胰島素、肝糖或血糖調節，依上冊 5-2 放在血糖的恆定。");
assign(["cap-103-nature-47", "cap-103-nature-48", "basic-100-first-nature-53", "basic-100-first-nature-54"],
  "blood-glucose", "完整題組需要血糖與胰島素知識，須在血糖的恆定練習。");
assign(["basic-90-second-nature-49"], "excretion", "涉及尿酸代謝廢物，延後到排泄與水分的恆定。", "尿酸代謝與飲食");
assign(["basic-90-first-nature-5"], "excretion", "需同時理解尿素、內分泌與消化液的運送，待相關系統學完。", "物質運輸與代謝廢物");
assign(["basic-90-first-nature-22"], "nervous-system", "只問控制呼吸的腦部位置，主要考點是中樞神經功能。", "腦幹與呼吸調節");
assign(["basic-91-first-nature-4"], "circulation", "考心搏加快有助運氧，並非體溫曲線或體溫調節。", "心搏與氧氣運輸");
assign(["basic-93-second-nature-2"], "digestion", "病毒被酸破壞的條件已提供，只需辨識胃的酸性環境。", "胃的酸性環境");
assign(["basic-99-first-nature-11"], "digestion", "讀營養標示後還需判斷蛋白質的消化位置。", "營養標示與消化");
assign(["cap-110-nature-42"], "digestion", "需知道口腔、胃及小腸的酸鹼環境，應在人體消化小節。");
assign(["cap-104-nature-41", "cap-109-nature-41", "basic-102-first-nature-26"], "enzymes",
  "主要考酵素的組成或受質專一性，不須先知道消化管各部位的功能。");
assign(["basic-97-second-nature-8"], "breathing", "四個選項比較神經、循環、消化與呼吸的路徑，作為上冊系統整合題。", "人體系統的傳導與運輸路徑");
assign(["cap-105-nature-8", "basic-93-first-nature-40"], "physiological-regulation",
  "主要考點是體溫與環境溫度的關係，依上冊 5-4 可在體溫恆定練習。");

assign(["cap-113-nature-30", "cap-111-nature-39"], "human-genetics",
  "涉及性染色體，依下冊 2-2 放在人類遺傳。");
assign(["basic-100-second-nature-21"], "mendelian-genetics",
  "須追蹤親子染色體上的基因，放在遺傳概念而非只考分裂數目的小節。", "染色體與基因的遺傳");
assign(["basic-92-first-nature-7"], "cell-division",
  "辨識根尖分裂中的染色體，對應下冊 1-1 細胞的分裂。", "根尖細胞與染色體");
assign(["basic-102-first-nature-10"], "five-kingdoms",
  "需綜合各類動物的受精、胚胎發育及內外溫特性，放在五界生物的動物比較。", "動物類群與生殖特徵");
assign(["basic-96-second-nature-55", "basic-96-second-nature-56"], "reproductive-modes",
  "胎盤與臍帶需學過生殖，與同題組的胎盤題一併在生殖單元練習。");

assign(["cap-106-nature-47", "cap-106-nature-48"], "scientific-method",
  "題組已提供營養素與物質的實驗條件，只需控制變因和讀取體重圖，無須預先知道養分種類。");
assign(["basic-91-second-nature-6"], "photosynthesis", "植物捕蟲主要補充礦物質，屬植物如何獲得養分。");
assign(["basic-98-first-nature-47"], "endocrine-system", "主要判斷激素藉血液運送，保留於內分泌。", "胰島素與內分泌");
assign(["cap-108-nature-32"], "variation-and-biotech", "基因轉殖是必要考點，須待生物技術小節。");
assign(["basic-90-first-nature-35", "basic-91-second-nature-7", "basic-92-first-nature-8", "basic-97-first-nature-11", "basic-97-first-nature-30"],
  "mendelian-genetics", "屬於基因、染色體及遺傳的基本概念，不是血型或性聯遺傳專題。");
assign(["cap-110-nature-31", "basic-96-first-nature-46", "basic-90-second-nature-30", "basic-91-second-nature-17"],
  "five-kingdoms", "檢索表需要自行判斷動植物類群的特徵，不能在尚未介紹五界生物時練習。");
assign(["cap-110-nature-36", "basic-98-first-nature-9", "basic-102-first-nature-8"],
  "biotic-interactions", "需同時判讀食物網與競爭、捕食關係，放在能量流動之後的交互關係。");
assign(["basic-101-first-nature-15"], "material-cycles", "生態瓶設計的核心是物質循環與分解者。", "生態瓶與物質循環");
assign(["basic-93-first-nature-20"], "biodiversity-conservation", "選項須判讀污染物沿食物網累積，需學過生物放大作用。");

export function reviewQuestionPlacements(rows: BiologyQuestion[]): BiologyQuestion[] {
  const ids = new Set(rows.map((q) => q.id));
  for (const id of Object.keys(reviewedPlacements)) {
    if (!ids.has(id)) throw new Error(`Reviewed question missing: ${id}`);
  }
  const placed = rows.map((q) => {
    const reviewed = reviewedPlacements[q.id];
    const unit = reviewed
      ? practiceUnits.find((u) => u.id === reviewed.unitId)
      : resolvePracticeUnit(q.chapterId, q.topic);
    if (!unit) throw new Error(`${q.id}: no curriculum placement for ${q.topic}`);
    return {
      ...q, chapterId: unit.chapterId, practiceUnitId: unit.id,
      topic: reviewed?.topic ?? q.topic,
      placementNote: reviewed?.reason,
      aiMetadata: undefined,
    };
  });

  // A complete group is one practice block. Place it only after ALL member
  // prerequisites. Legacy evolution is optional, not a prerequisite to unit 10.
  const groups = new Map<string, typeof placed>();
  placed.forEach((q) => {
    if (q.questionGroup) groups.set(q.questionGroup.id, [...(groups.get(q.questionGroup.id) ?? []), q]);
  });
  const rank = (q: BiologyQuestion) => [
    q.chapterId === "evolution" ? 99 : chapters.find((c) => c.id === q.chapterId)!.order,
    practiceUnits.find((u) => u.id === q.practiceUnitId)!.order,
  ];
  groups.forEach((members) => {
    const last = [...members].sort((a, b) => rank(b)[0] - rank(a)[0] || rank(b)[1] - rank(a)[1])[0];
    members.forEach((q) => {
      if (q.practiceUnitId === last.practiceUnitId) return;
      q.placementNote = [q.placementNote, `題組完整練習需先學完「${practiceUnits.find((u) => u.id === last.practiceUnitId)!.name}」。原考點：${q.topic}。`].filter(Boolean).join(" ");
      q.chapterId = last.chapterId;
      q.practiceUnitId = last.practiceUnitId;
    });
  });
  return placed;
}
