import { chapterById } from "./chapters";
import { resolvePracticeUnit } from "./practice-units";
import type { BiologyQuestion } from "./types";

interface TopicProfile {
  unitId: string;
  aliases: string[];
  concepts: string[];
}

const topicProfiles: Record<string, TopicProfile> = {
  "人體組成層次": { unitId: "levels-of-organization", aliases: ["組成層次", "細胞", "組織", "器官", "器官系統"], concepts: ["細胞", "組織", "器官", "器官系統", "個體"] },
  "基本演化概念與化石": { unitId: "basic-evolution-and-fossils", aliases: ["化石", "古環境", "持續改變的生命"], concepts: ["化石證據", "古環境", "生物與環境"] },
  "科學方法步驟": { unitId: "scientific-method-steps", aliases: ["科學方法", "科學探究", "提出問題", "假設", "實驗設計"], concepts: ["觀察", "提出問題", "提出假設", "設計實驗"] },
  "舊課綱：古生物與人類演化年代": { unitId: "legacy-evolutionary-history", aliases: ["古生物", "人類演化", "地質年代", "舊課綱演化"], concepts: ["相對年代", "古生物出現順序", "人類演化"] },
  "舊課綱：天擇與保護色": { unitId: "legacy-natural-selection", aliases: ["天擇", "保護色", "適應", "舊課綱演化"], concepts: ["個體差異", "環境選擇", "繁殖成功率", "族群性狀改變"] },
  "舊課綱：族群競爭與環境負荷量": { unitId: "legacy-population-competition", aliases: ["族群競爭", "環境負荷量", "生存競爭", "舊課綱演化"], concepts: ["資源有限", "環境負荷量", "生存競爭", "族群數量"] },
  "昆蟲發育與染色體": { unitId: "insect-development-and-chromosomes", aliases: ["昆蟲發育", "染色體", "細胞分裂"], concepts: ["完全變態", "體細胞染色體", "細胞分裂"] },
  "生物界分類與營養方式": { unitId: "kingdom-classification", aliases: ["五界分類", "營養方式", "真菌", "植物"], concepts: ["自營", "異營", "生物界特徵"] },
  "族群、群集與生態系": { unitId: "ecological-levels", aliases: ["族群", "群集", "生態系", "組成層次"], concepts: ["同種生物", "多族群", "生物與非生物環境"] },
  "植物呼吸作用": { unitId: "plant-cellular-respiration", aliases: ["植物呼吸", "細胞呼吸", "氣體交換"], concepts: ["氧氣", "二氧化碳", "能量釋放"] },
  "消化酵素與養分檢測": { unitId: "digestive-enzymes-and-food-tests", aliases: ["消化酵素", "養分檢測", "碘液", "本氏液"], concepts: ["酵素專一性", "澱粉", "還原糖", "養分分解"] },
  "性聯遺傳": { unitId: "sex-linked-inheritance", aliases: ["性聯遺傳", "X 染色體", "遺傳機率"], concepts: ["性染色體", "基因型", "表現型", "遺傳機率"] },
  "基因轉殖與性聯遺傳": { unitId: "gene-transfer-and-sex-linkage", aliases: ["基因轉殖", "性聯遺傳", "X 染色體"], concepts: ["基因轉殖", "性染色體", "遺傳路徑"] },
  "激素調節與資料判讀": { unitId: "hormone-regulation-data", aliases: ["激素", "內分泌", "資料判讀"], concepts: ["激素作用", "回饋調節", "實驗數據"] },
  "ABO 血型遺傳": { unitId: "abo-blood-type-inheritance", aliases: ["ABO 血型", "血型遺傳", "複等位基因"], concepts: ["A型", "B型", "AB型", "O型", "基因型"] },
  "IUCN 保育等級": { unitId: "biodiversity-conservation", aliases: ["IUCN", "保育等級", "瀕危物種", "生物多樣性"], concepts: ["受脅等級", "族群趨勢", "物種保育"] },
  "顯微鏡構造": { unitId: "microscope", aliases: ["顯微鏡", "複式顯微鏡", "顯微鏡操作"], concepts: ["顯微鏡構造", "物鏡", "調節輪", "載物臺", "光圈"] },
  "顯微尺度與細胞": { unitId: "microscope-and-scale", aliases: ["顯微鏡", "尺度", "比例尺", "細胞大小"], concepts: ["比例尺", "微米", "細胞尺度", "顯微影像"] },
  "顯微鏡影像與血流": { unitId: "circulation-and-microscopy", aliases: ["顯微鏡", "顯微影像", "小動脈", "微血管", "小靜脈", "血流方向"], concepts: ["顯微鏡成像", "血管判別", "血流方向", "循環系統"] },
  "複式與解剖顯微鏡": { unitId: "microscope", aliases: ["顯微鏡", "複式顯微鏡", "解剖顯微鏡"], concepts: ["放大倍率", "成像方向", "觀察材料"] },
  "生物尺度": { unitId: "microscope-and-scale", aliases: ["尺度", "比例尺", "細胞大小", "顯微鏡"], concepts: ["長度換算", "比例尺", "細胞尺度"] },
  "物質通過細胞膜": { unitId: "membrane-transport", aliases: ["細胞膜", "物質運輸", "擴散", "滲透作用"], concepts: ["選擇性通透", "擴散", "物質進出細胞"] },
  "滲透作用": { unitId: "membrane-transport", aliases: ["滲透作用", "細胞膜", "水分移動"], concepts: ["半透膜", "濃度差", "水分移動"] },
  "中樞神經系統": { unitId: "central-nervous-system", aliases: ["神經系統", "腦", "脊髓"], concepts: ["大腦", "小腦", "腦幹", "脊髓"] },
  "神經系統": { unitId: "nervous-system", aliases: ["神經傳導", "受器與動器", "協調作用"], concepts: ["受器", "動器", "感覺神經元", "運動神經元", "大腦"] },
  "神經傳導路徑": { unitId: "nervous-system", aliases: ["神經傳導", "反射弧", "受器與動器"], concepts: ["受器", "感覺神經", "中樞神經", "運動神經", "動器"] },
  "植物的感應": { unitId: "plant-response", aliases: ["植物感應", "向性", "生長素"], concepts: ["向光性", "向地性", "刺激與反應"] },
  "呼吸運動": { unitId: "breathing", aliases: ["呼吸作用", "胸腔", "肺"], concepts: ["橫膈", "肋骨", "吸氣", "呼氣"] },
  "體溫恆定": { unitId: "temperature-homeostasis", aliases: ["體溫調節", "散熱", "產熱"], concepts: ["顫抖", "皮膚血管", "產熱", "散熱"] },
  "內分泌與骨骼": { unitId: "endocrine-regulation", aliases: ["內分泌", "激素", "骨骼生長"], concepts: ["內分泌腺", "激素", "生長與調節"] },
  "感染、免疫與潛伏期": { unitId: "infection-immunity-incubation", aliases: ["感染", "免疫", "潛伏期", "發燒"], concepts: ["病原體感染", "免疫反應", "潛伏期", "發病時間"] },
  "有性生殖與育種": { unitId: "sexual-reproduction", aliases: ["有性生殖", "雜交", "育種"], concepts: ["生殖器官", "雜交", "遺傳變異"] },
  "有性生殖": { unitId: "sexual-reproduction", aliases: ["配子", "受精", "親代特徵"], concepts: ["配子", "受精", "遺傳變異"] },
  "無性生殖": { unitId: "asexual-reproduction", aliases: ["營養繁殖", "組織培養", "出芽生殖"], concepts: ["細胞分裂", "遺傳相同", "營養繁殖"] },
  "花與果實的發育": { unitId: "plant-reproduction", aliases: ["開花植物生殖", "花", "果實", "種子"], concepts: ["授粉", "受精", "子房", "胚珠", "果實"] },
  "排泄與體內恆定": { unitId: "excretion", aliases: ["排泄", "泌尿", "腎臟"], concepts: ["含氮廢物", "過濾", "再吸收", "腎臟"] },
  "泌尿系統與腎臟": { unitId: "excretion", aliases: ["泌尿系統", "腎臟", "尿液形成"], concepts: ["腎臟", "輸尿管", "膀胱", "尿道"] },
  "器官代謝與恆定": { unitId: "homeostasis-and-metabolism", aliases: ["體內恆定", "器官代謝", "肝臟", "腎臟"], concepts: ["代謝", "排泄", "恆定性", "器官功能"] },
  "捉放法估算族群": { unitId: "mark-recapture", aliases: ["捉放法", "族群估算", "標識再捕法"], concepts: ["族群大小", "抽樣", "估計值"] },
  "族群數量變化": { unitId: "population-dynamics", aliases: ["族群變化", "族群大小", "出生率", "死亡率"], concepts: ["出生", "死亡", "遷入", "遷出", "族群數量"] },
  "光合作用與呼吸作用": { unitId: "photosynthesis-and-respiration", aliases: ["光合作用", "呼吸作用", "植物代謝"], concepts: ["氧氣", "二氧化碳", "葉綠體", "能量轉換"] },
  "植物細胞的代謝": { unitId: "photosynthesis-and-respiration", aliases: ["植物代謝", "光合作用", "呼吸作用"], concepts: ["葉綠體", "粒線體", "氣體交換", "能量轉換"] },
  "呼吸作用與水果保存": { unitId: "cellular-respiration", aliases: ["呼吸作用", "水果保存", "低溫保存"], concepts: ["呼吸速率", "溫度", "養分消耗", "保存"] },
  "光合作用與植物運輸": { unitId: "photosynthesis-and-plant-transport", aliases: ["光合作用", "植物運輸", "維管束"], concepts: ["水", "二氧化碳", "葡萄糖", "木質部", "韌皮部"] },
  "孟德爾遺傳與機率": { unitId: "mendelian-genetics", aliases: ["孟德爾遺傳", "遺傳機率", "單因子遺傳"], concepts: ["顯性", "隱性", "基因型", "表現型", "機率"] },
  "孟德爾遺傳": { unitId: "mendelian-genetics", aliases: ["孟德爾", "遺傳法則", "顯隱性"], concepts: ["顯性", "隱性", "基因型", "表現型"] },
  "單因子遺傳": { unitId: "single-gene-inheritance", aliases: ["孟德爾遺傳", "顯隱性", "基因型"], concepts: ["顯性", "隱性", "基因型", "表現型"] },
  "突變與遺傳": { unitId: "mutation-and-inheritance", aliases: ["突變", "遺傳變異", "基因變異"], concepts: ["突變", "生殖細胞", "遺傳", "變異"] },
  "人體細胞與染色體": { unitId: "chromosomes-and-cell-division", aliases: ["人體細胞", "染色體", "體細胞", "生殖細胞"], concepts: ["染色體套數", "體細胞", "生殖細胞"] },
  "減數分裂與染色體": { unitId: "cell-division", aliases: ["減數分裂", "染色體", "配子"], concepts: ["染色體套數", "配子形成", "減數分裂"] },
  "植物分類": { unitId: "plant-classification", aliases: ["植物界", "維管束植物", "種子植物"], concepts: ["分類特徵", "植物類群"] },
  "外溫與內溫動物": { unitId: "ectotherms-and-endotherms", aliases: ["外溫動物", "內溫動物", "體溫調節"], concepts: ["外界熱源", "代謝產熱", "體溫變化"] },
  "分類檢索表": { unitId: "classification-key", aliases: ["檢索表", "二分叉檢索表", "分類依據"], concepts: ["特徵比較", "逐步分流", "生物分類"] },
  "真菌的構造": { unitId: "kingdom-classification", aliases: ["真菌", "菌絲", "孢子"], concepts: ["菌絲", "孢子", "真菌構造"] },
  "二名法與屬名": { unitId: "taxonomy-and-scientific-names", aliases: ["二名法", "學名", "屬名", "種小名"], concepts: ["屬名", "種小名", "學名格式"] },
  "消化酵素": { unitId: "digestive-enzymes", aliases: ["酵素", "消化", "消化液"], concepts: ["受質專一性", "消化酵素", "養分分解"] },
  "消化系統": { unitId: "digestive-system", aliases: ["消化器官", "消化液", "養分吸收"], concepts: ["消化道", "消化腺", "小腸吸收"] },
  "酵素與養分檢測": { unitId: "enzymes-and-food-tests", aliases: ["酵素", "澱粉酶", "碘液", "本氏液"], concepts: ["澱粉酶", "澱粉檢測", "還原糖檢測", "酵素活性"] },
  "酵素與澱粉檢測": { unitId: "enzymes-and-food-tests", aliases: ["酵素", "澱粉酶", "碘液", "本氏液"], concepts: ["澱粉酶", "澱粉檢測", "還原糖檢測"] },
  "酵素活性與溫度": { unitId: "enzyme-activity", aliases: ["酵素活性", "溫度", "酵素"], concepts: ["最適溫度", "酵素活性", "反應速率"] },
  "酵素活性與酸鹼": { unitId: "enzyme-activity-ph", aliases: ["酵素活性", "酸鹼值", "pH"], concepts: ["最適酸鹼值", "酵素失活", "消化道環境"] },
  "營養成分判讀": { unitId: "nutrients-and-food-tests", aliases: ["營養成分", "養分", "食品標示"], concepts: ["醣類", "蛋白質", "脂質", "熱量"] },
  "血液循環路徑": { unitId: "circulation-route", aliases: ["血液循環", "心臟", "血管"], concepts: ["體循環", "肺循環", "動脈", "靜脈"] },
  "血液、淋巴與免疫": { unitId: "blood-lymph-immunity", aliases: ["血球", "淋巴", "免疫"], concepts: ["紅血球", "白血球", "血小板", "淋巴"] },
  "心臟與血管": { unitId: "circulation-route", aliases: ["心臟", "血管", "血液循環"], concepts: ["心房", "心室", "動脈", "靜脈", "微血管"] },
  "血液凝固": { unitId: "blood-clotting", aliases: ["凝血", "血小板", "止血"], concepts: ["血小板", "凝血", "出血時間"] },
  "植物蒸散作用": { unitId: "transpiration", aliases: ["蒸散作用", "氣孔", "水分散失"], concepts: ["氣孔", "蒸散", "水分散失"] },
  "蒸散作用與水分運輸": { unitId: "transpiration-and-water-transport", aliases: ["蒸散作用", "木質部", "水分運輸"], concepts: ["蒸散拉力", "木質部", "水分運輸"] },
  "植物的維管束": { unitId: "vascular-bundles", aliases: ["維管束", "木質部", "韌皮部"], concepts: ["木質部", "韌皮部", "水分運輸", "養分運輸"] },
  "形成層與植物運輸": { unitId: "plant-vascular-transport", aliases: ["形成層", "維管束", "植物運輸"], concepts: ["形成層", "木質部", "韌皮部", "莖的加粗"] },
  "木質部與韌皮部運輸": { unitId: "plant-vascular-transport", aliases: ["木質部", "韌皮部", "植物運輸", "維管束"], concepts: ["水分運輸", "無機鹽運輸", "養分運輸"] },
  "維管束排列": { unitId: "vascular-bundles", aliases: ["維管束", "莖", "單子葉", "雙子葉"], concepts: ["維管束排列", "木質部", "韌皮部"] },
  "血糖調節": { unitId: "blood-glucose-regulation", aliases: ["血糖恆定", "胰島素", "升糖素"], concepts: ["胰島素", "升糖素", "血糖恆定"] },
  "生物間的交互作用": { unitId: "biotic-interactions", aliases: ["生物交互作用", "競爭", "掠食", "共生", "寄生"], concepts: ["競爭", "掠食", "共生", "寄生"] },
  "生態系平衡": { unitId: "ecosystem-balance", aliases: ["生態系", "動態平衡", "外來種"], concepts: ["動態平衡", "物質循環", "能量流動", "外來種"] },
  "食物鏈與能量塔": { unitId: "food-chain-and-energy-flow", aliases: ["食物鏈", "能量塔", "營養階層"], concepts: ["生產者", "消費者", "能量傳遞", "營養階層"] },
  "生物放大作用": { unitId: "biomagnification", aliases: ["生物放大", "食物鏈", "污染物累積"], concepts: ["污染物", "營養階層", "生物累積"] },
  "生物棲地": { unitId: "habitat-and-environment", aliases: ["棲地", "環境因子", "生物分布"], concepts: ["棲地", "生物與環境", "適生條件"] },
  "生物多樣性與保育": { unitId: "biodiversity-conservation", aliases: ["生物多樣性", "保育", "瀕危物種"], concepts: ["物種多樣性", "棲地保育", "永續利用"] },
  "生物多樣性與生態系穩定": { unitId: "biodiversity-conservation", aliases: ["生物多樣性", "生態系穩定", "保育"], concepts: ["生物多樣性", "食物網", "生態系穩定"] },
  "碳循環與季節變化": { unitId: "carbon-cycle", aliases: ["碳循環", "二氧化碳", "季節變化"], concepts: ["光合作用", "呼吸作用", "二氧化碳濃度"] },
  "氮循環": { unitId: "nitrogen-cycle", aliases: ["氮循環", "含氮物質", "分解者"], concepts: ["固氮", "分解作用", "微生物", "物質循環"] },
  "飲食與碳排放": { unitId: "carbon-cycle-and-sustainability", aliases: ["碳排放", "碳足跡", "永續飲食"], concepts: ["碳足跡", "資源消耗", "永續發展"] },
  "分類階層與學名": { unitId: "taxonomy-and-scientific-names", aliases: ["分類階層", "學名", "屬名"], concepts: ["界門綱目科屬種", "二名法", "屬名"] },
  "生物界分類": { unitId: "kingdom-classification", aliases: ["五界分類", "原核生物", "原生生物", "真菌"], concepts: ["細胞核", "葉綠素", "菌絲", "生物界"] },
  "細胞分裂": { unitId: "cell-division", aliases: ["有絲分裂", "減數分裂", "染色體"], concepts: ["有絲分裂", "減數分裂", "染色體數目"] },
  "細胞分裂與傷口癒合": { unitId: "mitosis-and-tissue-repair", aliases: ["細胞分裂", "傷口癒合", "組織修復", "有絲分裂"], concepts: ["一般細胞分裂", "雙套染色體", "遺傳物質複製", "組織修復"] },
  "細胞構造與代謝": { unitId: "cell-organelles-and-metabolism", aliases: ["胞器", "葉綠體", "粒線體"], concepts: ["葉綠體", "粒線體", "光合作用", "呼吸作用"] },
  "反例與科學驗證": { unitId: "scientific-reasoning", aliases: ["科學方法", "反例", "假說驗證"], concepts: ["反例", "證據", "假說", "科學推論"] },
  "實驗控制變因": { unitId: "experimental-variables", aliases: ["控制變因", "操縱變因", "應變變因", "實驗設計"], concepts: ["控制實驗", "變因", "公平測試"] },
  "實驗數據與農藥洗滌": { unitId: "experimental-design", aliases: ["實驗設計", "農藥", "洗滌", "資料判讀"], concepts: ["控制變因", "數據比較", "證據與結論"] },
  "發芽率與資料判讀": { unitId: "seed-germination", aliases: ["種子發芽", "發芽率", "資料判讀"], concepts: ["發芽條件", "發芽率", "實驗數據"] },
  "厭氧發酵實驗裝置": { unitId: "fermentation-experiment", aliases: ["厭氧發酵", "發酵實驗", "實驗裝置"], concepts: ["無氧呼吸", "發酵", "氣體產物", "實驗裝置"] },
  "發酵速率與數據": { unitId: "fermentation-experiment", aliases: ["發酵速率", "發酵實驗", "數據判讀"], concepts: ["發酵", "反應速率", "氣體體積"] },
  "沼氣成分檢測": { unitId: "fermentation-and-gas-tests", aliases: ["沼氣", "發酵", "氣體檢測"], concepts: ["甲烷", "二氧化碳", "燃燒", "氣體檢測"] },
};

const adaptationRules = [
  "只參考評量概念、推理層次與題型結構，不得照抄題幹或選項。",
  "必須更換情境、資料、數值或圖表，不能只替換人名與物種名稱。",
  "新題需有唯一正確答案，並逐項檢查干擾選項為何錯誤。",
  "若沿用圖表型態，須重新製作資料與圖表，不得重用官方題圖。",
];

export function attachAiMetadata(question: BiologyQuestion): BiologyQuestion {
  if (question.aiMetadata) return question;
  const chapter = chapterById[question.chapterId];
  const practiceUnit = resolvePracticeUnit(question.chapterId, question.topic, question.practiceUnitId);
  if (!practiceUnit) {
    throw new Error(`${question.id}: topic has no student-facing practice unit`);
  }
  const profile = topicProfiles[question.topic] ?? {
    unitId: practiceUnit.id,
    aliases: [question.topic, chapter.shortName],
    concepts: [question.topic],
  };
  const assessedSkills = [
    question.figure ? "圖表與資料判讀" : "文字資訊理解",
    /推測|推論|判斷|最合理/.test(question.stem) ? "科學推論" : "概念理解",
  ];
  const isLegacyEvolution =
    question.chapterId === "evolution" && practiceUnit.id === "legacy-evolution";

  return {
    ...question,
    aiMetadata: {
      schemaVersion: "1.0",
      chapterName: chapter.name,
      unitId: profile.unitId,
      unitName: question.topic,
      aliases: [...new Set([question.topic, chapter.shortName, ...profile.aliases])],
      practiceUnitId: practiceUnit.id,
      practiceUnitName: practiceUnit.name,
      practiceUnitAliases: practiceUnit.aliases,
      conceptTags: profile.concepts,
      assessedSkills,
      itemArchetype: question.figure ? "圖表判讀題" : "文字情境題",
      adaptationRules,
      curriculum: {
        sourceEra: question.source.year >= 111 ? "108 課綱" : "九年一貫課綱",
        currentStatus: isLegacyEvolution ? "舊課綱限定" : "現行適用",
        ...((isLegacyEvolution || question.placementNote)
          ? { note: [isLegacyEvolution ? "現行國中課綱不要求天擇、演化理論及動植物演化歷程。" : "", question.placementNote].filter(Boolean).join(" ") }
          : {}),
      },
    },
  };
}
