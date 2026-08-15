import { officialSources } from "./sources";
import type { BiologyQuestion, OptionId } from "./types";

const source = officialSources[115];

function officialSource(originalNumber: number) {
  return {
    exam: "國中教育會考" as const,
    year: 115 as const,
    subject: "自然科" as const,
    originalNumber,
    questionPdfUrl: source.naturePdfUrl,
    answerPdfUrl: source.answerPdfUrl,
    passRatePdfUrl: source.passRatePdfUrl,
    discriminationPdfUrl: source.discriminationPdfUrl,
  };
}

function optionAnalysis(
  rows: Array<[OptionId, string]>,
): Array<{ optionId: OptionId; reason: string }> {
  return rows.map(([optionId, reason]) => ({ optionId, reason }));
}

export const questions115: BiologyQuestion[] = [
  {
    id: "cap-115-nature-6",
    source: officialSource(6),
    chapterId: "cells",
    topic: "顯微尺度與細胞",
    stem:
      "圖(三)比較了斑馬魚幼魚與其構造和病毒的大小。圖(四)為透過顯微鏡觀察斑馬魚幼魚時的畫面。根據圖中資訊，推測灰色斑塊最可能為下列何者？",
    figure: {
      src: "/questions/115/q06-figures.png",
      alt: "官方題圖：血紅素蛋白、病毒、粒線體、細胞與斑馬魚幼魚的尺度比較，以及比例尺為二十微米的顯微鏡影像。",
      width: 1310,
      height: 350,
    },
    options: [
      { id: "A", text: "一個血紅素蛋白" },
      { id: "B", text: "一個病毒" },
      { id: "C", text: "一個粒線體" },
      { id: "D", text: "一個細胞" },
    ],
    officialAnswer: "D",
    passRate: 0.87,
    discrimination: 0.42,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "灰色斑塊約為數十微米，最接近圖中細胞的尺度。",
      reasoning:
        "圖(四)的比例尺為 20 μm，灰色斑塊的大小約與比例尺相近；圖(三)指出細胞約為 10～30 μm。蛋白質、病毒與粒線體都明顯小得多，因此灰色斑塊最可能是一個細胞。",
      optionAnalysis: optionAnalysis([
        ["A", "血紅素蛋白約為奈米尺度，比影像中的灰色斑塊小非常多。"],
        ["B", "病毒約為數十到數百奈米，仍遠小於比例尺所呈現的斑塊。"],
        ["C", "粒線體約為 0.5～1 μm，比約數十微米的灰色斑塊小。"],
        ["D", "正確。灰色斑塊的大小落在圖示的細胞尺度範圍內。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-10",
    source: officialSource(10),
    chapterId: "coordination",
    topic: "中樞神經系統",
    stem:
      "圖(七)為人體的中樞神經系統示意圖。阿強參加賽跑時，一聽到槍聲響起便邁開步伐起跑，關於此過程涉及的神經系統運作，下列敘述何者正確？",
    figure: {
      src: "/questions/115/q10-nervous-system.webp",
      alt: "官方題圖：人體中樞神經系統側面示意圖，甲、乙、丙、丁分別標示大腦、小腦、腦幹與脊髓的位置。",
      width: 390,
      height: 381,
    },
    options: [
      { id: "A", text: "由甲產生槍聲的聽覺" },
      { id: "B", text: "由乙調節呼吸的快慢" },
      { id: "C", text: "由丙維持身體的平衡" },
      { id: "D", text: "由丁主掌步伐的大小" },
    ],
    officialAnswer: "A",
    passRate: 0.62,
    discrimination: 0.49,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "甲為大腦，聽覺的形成與判讀由大腦負責。",
      reasoning:
        "圖中甲、乙、丙、丁依序對應大腦、小腦、腦幹與脊髓。槍聲經感覺神經傳入中樞後，由大腦形成聽覺；小腦主要協調運動與平衡，腦幹調節呼吸等基本生命現象，脊髓則負責訊息傳遞與部分反射。",
      optionAnalysis: optionAnalysis([
        ["A", "正確。甲為大腦，負責形成與判讀聽覺。"],
        ["B", "乙為小腦，主要協調運動與維持平衡；呼吸調節主要和腦幹有關。"],
        ["C", "丙為腦幹，主要調節呼吸、心跳等；維持平衡主要和小腦有關。"],
        ["D", "丁為脊髓，負責訊息傳遞與部分反射，不主掌步伐大小。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-11",
    source: officialSource(11),
    chapterId: "homeostasis",
    topic: "呼吸運動",
    stem:
      "圖(八)記錄了某人盡力吸氣後、盡力呼氣後，肺部中分別容納的氣體量。依此圖判斷胸腔變化，下列敘述何者正確？",
    figure: {
      src: "/questions/115/q11-lung-volume.png",
      alt: "官方題圖：肺部氣體量長條圖，動作甲後約六公升，動作乙後約一公升。",
      width: 350,
      height: 440,
    },
    options: [
      { id: "A", text: "動作甲：橫膈上升且肋骨上舉" },
      { id: "B", text: "動作甲：橫膈下降且肋骨下降" },
      { id: "C", text: "動作乙：橫膈上升且肋骨下降" },
      { id: "D", text: "動作乙：橫膈下降且肋骨上舉" },
    ],
    officialAnswer: "C",
    passRate: 0.67,
    discrimination: 0.55,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "動作乙為盡力呼氣，呼氣時橫膈上升、肋骨下降。",
      reasoning:
        "動作甲後肺中氣體量較大，對應盡力吸氣；吸氣時橫膈下降、肋骨上舉，使胸腔容積增加。動作乙後氣體量較小，對應盡力呼氣；呼氣時橫膈上升、肋骨下降，使胸腔容積減少。",
      optionAnalysis: optionAnalysis([
        ["A", "動作甲為吸氣，肋骨會上舉，但橫膈應下降。"],
        ["B", "動作甲為吸氣，橫膈會下降，但肋骨應上舉。"],
        ["C", "正確。動作乙為呼氣，橫膈上升且肋骨下降。"],
        ["D", "橫膈下降且肋骨上舉是吸氣時的變化，不符合動作乙。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-13",
    source: officialSource(13),
    chapterId: "reproduction",
    topic: "有性生殖與育種",
    stem:
      "人類早在幾千年前就開始種植「玉米的祖先」作為糧食，但其口感和現在的玉米差異極大。經過長時間的育種，人類不斷利用具有某些特徵的植株進行雜交，漸漸地，雜交植株產生的「玉米粒」從原本較小且具有堅硬外殼的樣貌，變成趨近於現代玉米的樣貌。上述人類對玉米育種過程的敘述，下列何者最合理？",
    options: [
      { id: "A", text: "經由營養器官進行無性生殖" },
      { id: "B", text: "經由生殖器官進行有性生殖" },
      { id: "C", text: "親代與子代的表現型都相同" },
      { id: "D", text: "親代與子代的基因型都相同" },
    ],
    officialAnswer: "B",
    passRate: 0.56,
    discrimination: 0.65,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "雜交要讓不同植株的生殖細胞結合，屬於經由生殖器官進行的有性生殖。",
      reasoning:
        "育種者挑選具有特定性狀的植株進行雜交，後代會重新組合親代的遺傳物質，因此可能出現可供繼續選拔的差異。長期重複選拔，才逐步形成現代玉米的特徵。",
      optionAnalysis: optionAnalysis([
        ["A", "營養器官繁殖屬無性生殖，通常不涉及題幹所說的植株雜交。"],
        ["B", "正確。花等生殖器官產生的生殖細胞結合，形成具有不同遺傳組合的後代。"],
        ["C", "有性生殖的後代會有性狀差異，表現型不會全部與親代相同。"],
        ["D", "有性生殖會重新組合遺傳因子，子代基因型不會全部與親代相同。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-20",
    source: officialSource(20),
    chapterId: "homeostasis",
    topic: "排泄與體內恆定",
    stem:
      "蝦子的頭部有個稱為「觸角腺」的構造，可以過濾體內的液體，再將其中有用的物質吸收，並排出多餘的含氮廢物。依上述資訊推測，觸角腺的功能最類似人體哪個器官的功能？",
    options: [
      { id: "A", text: "肝臟" },
      { id: "B", text: "大腸" },
      { id: "C", text: "腎臟" },
      { id: "D", text: "尿道" },
    ],
    officialAnswer: "C",
    passRate: 0.52,
    discrimination: 0.33,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "「過濾、再吸收、排出含氮廢物」對應人體腎臟形成尿液的主要功能。",
      reasoning:
        "腎臟會先過濾血液，再回收身體需要的水分與物質，最後把含氮廢物等形成尿液排出。題幹描述的三個步驟與腎臟最相似。",
      optionAnalysis: optionAnalysis([
        ["A", "肝臟參與代謝、解毒與製造膽汁，但不是以過濾後再吸收來形成尿液。"],
        ["B", "大腸主要吸收水分並形成糞便，不是排出含氮廢物的主要器官。"],
        ["C", "正確。腎臟具有過濾、再吸收並排出含氮廢物的功能。"],
        ["D", "尿道是尿液離開身體的通道，本身不負責過濾與再吸收。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-21",
    source: officialSource(21),
    chapterId: "ecology",
    topic: "捉放法估算族群",
    stem:
      "某魚池中原僅有黑色鯉魚，小瑛將 50 隻紅色鯉魚放入此魚池。一段時間後，再由此魚池隨機捕捉 50 隻鯉魚，發現其中 5 隻為紅色鯉魚。若從放入鯉魚到捕捉前，沒有鯉魚遷入、遷出、出生、死亡，且根據捉放法計算出來的黑色鯉魚數量為 X，則下列敘述何者正確？",
    options: [
      { id: "A", text: "X 為 500 隻，此數值為黑色鯉魚的實際數量" },
      { id: "B", text: "X 為 500 隻，此數值為黑色鯉魚的可能數量" },
      { id: "C", text: "X 為 450 隻，此數值為黑色鯉魚的實際數量" },
      { id: "D", text: "X 為 450 隻，此數值為黑色鯉魚的可能數量" },
    ],
    officialAnswer: "D",
    passRate: 0.55,
    discrimination: 0.34,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "估得魚池共有 500 隻鯉魚，扣除放入的 50 隻紅鯉魚，黑鯉魚約 450 隻；捉放法得到的是估計值。",
      reasoning:
        "第二次捕捉中紅魚比例為 5/50，可視為魚池中紅魚比例 50/總數，因此總數約為 500。原有黑魚數 X 約為 500−50＝450。隨機抽樣會有誤差，所以這是可能數量，不是精確實際數量。",
      optionAnalysis: optionAnalysis([
        ["A", "500 是估算的鯉魚總數，並非黑色鯉魚數，也不是實際清點值。"],
        ["B", "雖指出是可能數量，但 500 包含紅色與黑色鯉魚。"],
        ["C", "450 的數量計算正確，但捉放法只能估計，不能宣稱是實際數量。"],
        ["D", "正確。黑色鯉魚約 450 隻，而且這是抽樣推估的可能數量。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-24",
    source: officialSource(24),
    chapterId: "nutrition-and-energy",
    topic: "光合作用與呼吸作用",
    stem:
      "已知綠色植物可同時進行光合作用與呼吸作用，而光合作用的過程如下。關於甲、乙、丙三種物質的敘述，下列何者最合理？",
    figure: {
      src: "/questions/115/q24-photosynthesis-equation.svg",
      alt: "官方題圖：水加甲，在光和葉綠體的條件下，生成乙、丙和水。",
      width: 600,
      height: 120,
    },
    options: [
      { id: "A", text: "甲主要由植物從土壤中吸收" },
      { id: "B", text: "乙主要由植物根部排出至土壤" },
      { id: "C", text: "乙與呼吸作用的產物相同" },
      { id: "D", text: "丙可作為呼吸作用的反應物" },
    ],
    officialAnswer: "D",
    passRate: 0.56,
    discrimination: 0.62,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "甲為二氧化碳、乙為氧氣、丙為葡萄糖；葡萄糖可作為呼吸作用的反應物。",
      reasoning:
        "綠色植物進行光合作用時，利用二氧化碳與水製造葡萄糖並釋放氧氣。依圖可判斷甲是二氧化碳、乙是氧氣、丙是葡萄糖。呼吸作用會以葡萄糖和氧氣為反應物，釋放能量並產生二氧化碳和水。",
      optionAnalysis: optionAnalysis([
        ["A", "甲是二氧化碳，主要由葉片從空氣中取得，不是由土壤吸收。"],
        ["B", "乙是氧氣，主要由葉片釋放到空氣中，不是由根部排入土壤。"],
        ["C", "乙是氧氣，是呼吸作用的反應物，不是產物。"],
        ["D", "正確。丙是葡萄糖，可作為呼吸作用的反應物。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-25",
    source: officialSource(25),
    chapterId: "genetics",
    topic: "孟德爾遺傳與機率",
    stem:
      "若某動物的黑白毛色僅由一對遺傳因子控制，黑色為顯性的特徵、白色為隱性的特徵。斌斌以黑棋代表顯性遺傳因子、白棋代表隱性遺傳因子，進行毛色遺傳的模擬實驗，於甲、乙兩個袋子皆放入 50 顆黑棋與 50 顆白棋混勻，再分別從兩袋各隨機抽出一顆棋子配對並記錄結果，接著各自放回原袋中混勻，反覆進行 100 次配對。關於結果紀錄中，毛色為黑、毛色為白的子代數量，最可能依序為何？",
    options: [
      { id: "A", text: "49、51" },
      { id: "B", text: "78、22" },
      { id: "C", text: "26、74" },
      { id: "D", text: "100、0" },
    ],
    officialAnswer: "B",
    passRate: 0.53,
    discrimination: 0.39,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "兩袋都代表帶有一顯性、一隱性遺傳因子的親代，子代表現型期望約為黑色 3/4、白色 1/4。",
      reasoning:
        "每次配對會得到顯性同型、異型或隱性同型；只有兩顆都是隱性遺傳因子時才表現白色，機率為 1/4。100 次結果應接近黑 75、白 25，78、22 最合理。",
      optionAnalysis: optionAnalysis([
        ["A", "接近 1：1，不符合兩個異型合子親代交配的 3：1 表現型比例。"],
        ["B", "正確。78：22 接近期望的 75：25，抽樣結果可有些微差異。"],
        ["C", "黑、白數量近似把 3：1 的方向顛倒；黑色才是顯性。"],
        ["D", "每次都有 1/4 機會抽到兩顆白棋，不太可能 100 次都沒有白色子代。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-29",
    source: officialSource(29),
    chapterId: "classification",
    topic: "植物分類",
    stem:
      "穿山龍為一種藥用植物，也俗稱棒槌瓜，葉呈掌狀，花朵為白色，種子的構造具有翅。根據上述資訊，下列推論何者最合理？",
    options: [
      { id: "A", text: "棒槌瓜的學名為穿山龍" },
      { id: "B", text: "成熟葉背可見孢子囊堆" },
      { id: "C", text: "其植株具有果實的構造" },
      { id: "D", text: "其植株具有毬果的構造" },
    ],
    officialAnswer: "C",
    passRate: 0.53,
    discrimination: 0.36,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "題幹指出它會開花並形成種子，可判斷為被子植物，因此具有果實。",
      reasoning:
        "被子植物具有花，受精後胚珠發育成種子、子房發育成果實。題幹已給出花與種子的特徵，足以排除蕨類和裸子植物。",
      optionAnalysis: optionAnalysis([
        ["A", "穿山龍與棒槌瓜都是中文名稱；學名需依雙名法以拉丁化名稱表示。"],
        ["B", "葉背孢子囊堆是常見的蕨類特徵，蕨類不會形成花和種子。"],
        ["C", "正確。會開花的被子植物在受精後可形成果實。"],
        ["D", "毬果是裸子植物常見的生殖構造，與題幹的花朵特徵不符。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-37",
    source: officialSource(37),
    chapterId: "nutrition-and-energy",
    topic: "消化酵素",
    stem:
      "蘇蘇在試管中加入蛋白質溶液與人體消化液中以蛋白質為受質的某酵素，充分混合後放置於適宜作用的穩定環境，蘇蘇接著每隔一段時間測量試管中蛋白質與 X 物質的濃度，結果如圖(二十二)。已知 X 物質為蛋白質被分解後的產物，則關於此酵素的推論，下列何者最合理？",
    figure: {
      src: "/questions/115/q37-protein-graph.png",
      alt: "官方題圖：隨時間增加，蛋白質濃度下降，蛋白質分解產物 X 的濃度上升。",
      width: 455,
      height: 330,
    },
    options: [
      { id: "A", text: "可能由膽汁中取得此酵素" },
      { id: "B", text: "可能由胰液中取得此酵素" },
      { id: "C", text: "此酵素催化 X 物質的分解" },
      { id: "D", text: "此酵素催化 X 物質的合成" },
    ],
    officialAnswer: "B",
    passRate: 0.41,
    discrimination: 0.48,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "胰液含有能分解蛋白質的酵素，符合蛋白質減少而產物 X 增加的結果。",
      reasoning:
        "圖中蛋白質濃度隨時間下降，X 物質濃度上升，表示此酵素催化蛋白質分解並產生 X。胰液含有可分解蛋白質的酵素；膽汁主要協助脂肪乳化，本身不含消化酵素。",
      optionAnalysis: optionAnalysis([
        ["A", "膽汁可乳化脂肪，但不含分解蛋白質的消化酵素。"],
        ["B", "正確。胰液含有可分解蛋白質的酵素。"],
        ["C", "X 是蛋白質分解後增加的產物，不是被此酵素分解的受質。"],
        ["D", "此酵素催化的是蛋白質分解；X 的增加是反應結果，不是把 X 合成其他物質。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-39",
    source: officialSource(39),
    chapterId: "transport",
    topic: "血液循環路徑",
    stem:
      "甲、乙兩人討論從人體肺臟、肝臟流出的血液進入心臟之路徑。甲：肺臟流出的血液會由血管最先進入右心房。乙：肝臟流出的血液會由血管最先進入右心室。甲、乙兩人的看法是否正確？",
    options: [
      { id: "A", text: "僅甲正確" },
      { id: "B", text: "僅乙正確" },
      { id: "C", text: "兩人皆正確" },
      { id: "D", text: "兩人皆錯誤" },
    ],
    officialAnswer: "D",
    passRate: 0.42,
    discrimination: 0.53,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "肺臟流出的血液先進左心房；肝臟流出的血液先經大靜脈進右心房，所以甲、乙都錯。",
      reasoning:
        "肺靜脈把肺臟的血液送回左心房。肝靜脈把肝臟的血液送入下大靜脈，再進入右心房；心房之後才到心室。兩人的第一個心臟腔室都說錯。",
      optionAnalysis: optionAnalysis([
        ["A", "甲錯誤；肺循環回心的血液先到左心房，不是右心房。"],
        ["B", "乙錯誤；肝臟回流的血液先到右心房，不會直接進右心室。"],
        ["C", "兩人的路徑都把最先進入的心臟腔室說錯。"],
        ["D", "正確。甲與乙的敘述都不符合人體血液循環路徑。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-44",
    source: officialSource(44),
    chapterId: "transport",
    topic: "植物蒸散作用",
    stem:
      "圖(二十八)為暄暄用來記錄植物蒸散作用速率的裝置，管中的氣泡會隨著植物的蒸散作用逐漸向右方移動，如箭頭所示，可以藉此推測植物的蒸散量。當需要使氣泡回到起始點時，可打開閥門使注水管的水向下流，氣泡就會向左移動。暄暄將此裝置放在室外一天，並重複於每一整點記錄氣泡的移動距離後，將氣泡的位置重新移動回起始點以收集下一整點的數據，最後得到圖(二十九)的數據。根據本文，下列對圖(二十九)數據的敘述何者正確？",
    figure: {
      src: "/questions/115/q44-45-transpiration.png",
      alt: "官方題圖：以氣泡移動距離推測植物蒸散量的裝置，以及零時至二十四時每小時氣泡移動距離的長條圖。",
      width: 1310,
      height: 475,
    },
    options: [
      { id: "A", text: "0～1 時之間沒有發生蒸散作用" },
      { id: "B", text: "3～4 時之間沒有發生蒸散作用" },
      { id: "C", text: "12～13 時的平均蒸散速率為一天中最大值" },
      { id: "D", text: "6～7 時的平均蒸散速率較 7～8 時的平均蒸散速率大" },
    ],
    officialAnswer: "C",
    passRate: 0.76,
    discrimination: 0.44,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "12～13 時的氣泡移動距離最大，因此該時段平均蒸散速率最大。",
      reasoning:
        "每一整點都把氣泡移回起始點，所以各長條分別代表前一小時的移動距離。相同的一小時內，移動距離愈大表示平均蒸散速率愈大；圖中 13 時記錄的長條最高，對應 12～13 時。",
      optionAnalysis: optionAnalysis([
        ["A", "1 時仍記錄到氣泡移動，表示 0～1 時有蒸散作用。"],
        ["B", "4 時仍記錄到氣泡移動，表示 3～4 時有蒸散作用。"],
        ["C", "正確。13 時的長條最高，代表 12～13 時平均蒸散速率最大。"],
        ["D", "圖中 8 時的移動距離大於 7 時，因此 7～8 時的平均蒸散速率較大。"],
      ]),
    },
  },
  {
    id: "cap-115-nature-45",
    source: officialSource(45),
    chapterId: "transport",
    topic: "蒸散作用與水分運輸",
    stem:
      "圖(二十八)的裝置以管中氣泡向右移動的距離推測植物的蒸散量；需要使氣泡回到起始點時，才打開閥門使注水管的水向下流，讓氣泡向左移動。若依據暄暄的方式操作實驗，但將實驗裝置移至通風良好的乾燥室內放置兩天，則最不可能發生下列哪一種情況？",
    figure: {
      src: "/questions/115/q44-45-transpiration.png",
      alt: "官方題圖：以氣泡移動距離推測植物蒸散量的裝置，以及零時至二十四時每小時氣泡移動距離的長條圖。",
      width: 1310,
      height: 475,
    },
    options: [
      { id: "A", text: "第一、二天記錄到的氣泡移動距離總和相近" },
      { id: "B", text: "在兩天的相同時段中，氣泡移動的距離相近" },
      { id: "C", text: "植物氣孔關閉減緩蒸散，使管中氣泡移動量很小" },
      { id: "D", text: "植物從氣孔吸收水分向下運輸，使管中氣泡向左移動" },
    ],
    officialAnswer: "D",
    passRate: 0.63,
    discrimination: 0.57,
    shuffleSafe: true,
    explanation: {
      provenance: "ai-generated",
      reviewStatus: "unreviewed",
      summary: "植物主要由根部吸水並向上運輸；不會由氣孔吸水向下運輸而使氣泡左移。",
      reasoning:
        "蒸散作用使葉片散失水分，帶動裝置中的水被植物吸收，因此氣泡通常向右移。環境穩定時，兩天的總量或相同時段數值可能相近；若植物缺水，氣孔也可能關閉而使移動量變小。由氣孔吸水再向下運輸不符合植物水分運輸方向。",
      optionAnalysis: optionAnalysis([
        ["A", "室內條件相近時，兩天的氣泡移動距離總和可能相近。"],
        ["B", "環境與植物狀態相近時，相同時段的移動距離可能相近。"],
        ["C", "乾燥可能造成植物缺水並關閉氣孔，使蒸散和氣泡移動減少。"],
        ["D", "正確。植物主要由根部吸水並向上運輸，不會由氣孔吸水向下運輸使氣泡左移。"],
      ]),
    },
  },
];
