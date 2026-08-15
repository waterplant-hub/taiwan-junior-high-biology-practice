import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "basic-100-first-nature-1": {
    summary: "玉米是生產者；牛吃玉米，為初級消費者；人吃牛，為次級消費者。",
    reasoning: "營養階層依能量的直接來源判定。牛不能自行製造養分，也不是分解遺體的分解者。",
  },
  "basic-100-first-nature-5": {
    summary: "把蕨類具有根、莖、葉的一部分直接移植，屬營養繁殖；不考慮突變時，新植株基因型與原植株相同。",
    reasoning: "此過程不經減數分裂或受精，染色體數不會減半；蕨類具有維管束，以孢子繁殖而不形成果實。",
  },
  "basic-100-first-nature-6": {
    summary: "氣溫降至 7～11°C 時，出汗量通常會比 21～25°C 更少，因此汗液失水最可能少於尿液失水。",
    reasoning: "表中氣溫由 34～38°C 降至 21～25°C 時，汗液失水已由 1750 mL 降至 450 mL，尿液則由 1000 mL 增至 1400 mL，可據此判斷低溫趨勢。呼氣仍會帶走水氣。",
  },
  "basic-100-first-nature-7": {
    summary: "水草固定生長在池塘底部，且需利用光進行光合作用，因此最能證明陽光可到達池底。",
    reasoning: "魚、蝦可以移動，也不靠光合作用製造養分；岸邊植物接受的是水面外的光，不能證明池底有光。",
  },
  "basic-100-first-nature-8": {
    summary: "乙含 4.5 公克蔗糖，是四種食品中可被人體利用的供能養分最多者，因此提供的能量最多。",
    reasoning: "人體不能分解纖維素，礦物質也不供能；甲與丁的蔗糖分別只有 2.5、1.5 公克，丙則沒有蔗糖。",
  },
  "basic-100-first-nature-9": {
    summary: "甲瓶的有翅蒼蠅會飛而容易被捕蠅紙黏住，表示甲瓶環境較不利於有翅型存活。",
    reasoning: "乙瓶原本就放入有翅蒼蠅，無須用突變解釋；兩型在乙瓶都能存活，也不能判定無翅型較適合。個體不常使用翅不會使遺傳性狀因此退化。",
  },
  "basic-100-first-nature-15": {
    summary: "帶葉枝條的蒸散作用較旺盛，甲組因而吸收較多紅色溶液；水分上升的主要通道是木質部。",
    reasoning: "葉片氣孔散失水分會產生蒸散拉力。韌皮部主要運輸葉片製造的有機養分，不是本題紅色水溶液的主要通道。",
  },
  "basic-100-first-nature-16": {
    summary: "丈夫沒有酒窩，基因型為 ff；兩個有酒窩的孩子都必須從小玲取得顯性 F，因此選 B。",
    reasoning: "孩子從父親只能得到 f，所以兩人皆為 Ff。小玲可能是 FF 或 Ff；若為 Ff，下一胎仍可能得到 f 而沒有酒窩。",
  },
  "basic-100-first-nature-17": {
    summary: "莖會向上方光源彎曲，根則順著重力方向向下生長，同時符合兩者的是圖 D。",
    reasoning: "判讀傾斜盆栽時，不能沿原莖、根方向直線延伸；莖具有向光性與背地性，根則主要表現向地性。",
  },
  "basic-100-first-nature-25": {
    summary: "甲蝸牛與丙烏賊同屬軟體動物；乙海膽與丁海參同屬棘皮動物，因此應分為甲、丙與乙、丁兩組。",
    reasoning: "分類依共同構造與親緣關係，而非僅看棲地或外形。海膽與海參都具有棘皮動物的水管系統等特徵。",
  },
  "basic-100-first-nature-26": {
    summary: "血壓由較大動脈、小動脈、微血管到小靜脈逐步降低，因此最低的丁 10 mmHg 對應小靜脈。",
    reasoning: "依壓力高低可依序配成：甲較大動脈、乙小動脈、丙微血管、丁小靜脈。",
  },
  "basic-100-first-nature-44": {
    summary: "圖中甲表示碳由植物進入兔體內，可能是攝食；呼吸會使碳以二氧化碳離開生物體，因此 A 的配對錯誤。",
    reasoning: "乙可表示動物經排泄失水，丙可表示植物光合作用吸收二氧化碳，丁則可表示植物蒸散失水。",
  },
  "basic-100-first-nature-52": {
    summary: "白血球數量遠少於紅血球；目前視野影像已清楚，應移動玻片搜尋其他區域。",
    reasoning: "放大光圈只改變亮度，改用高倍物鏡反而縮小視野；在已染色的血液玻片上滴水也不能增加白血球出現的機會。",
  },
  "basic-100-first-nature-53": {
    summary: "切除胰臟後大白鼠出現糖尿病，表示缺少胰臟分泌、可降低血糖的物質，即胰島素。",
    reasoning: "糖尿病的關鍵是血糖過高；胰液或小腸消化液主要參與消化，缺少使血糖升高的物質也不能解釋高血糖。",
  },
  "basic-100-first-nature-54": {
    summary: "胰臟萃取液經蛋白酶處理後失效，表示有效物質可能是蛋白質；經澱粉酶處理後仍有效，表示不是澱粉。",
    reasoning: "實驗組三可防止糖尿病，組四經蛋白酶處理後無法防止，組五經澱粉酶處理後仍能防止，因此最支持『可能是蛋白質，但不是澱粉』。",
  },
  "basic-100-second-nature-1": {
    summary: "生物乙附著在甲上吸取有機養分，乙得利而甲受害，屬寄生關係。",
    reasoning: "捕食通常會捕捉並吃掉獵物；競爭是共同爭奪有限資源；合作則雙方都獲益，皆不符合題述。",
  },
  "basic-100-second-nature-5": {
    summary: "阿宏的白血球為 3000 個/mm³，低於正常的 4500～11000，最可能影響抵抗細菌入侵的能力。",
    reasoning: "紅血球與血小板數都在正常範圍，運氧與凝血並非最可能出問題；養分則主要溶於血漿運輸。",
  },
  "basic-100-second-nature-7": {
    summary: "膽汁進入小腸後才接觸食物；圖中食物到達小腸前，在口腔、食道與胃共停留約 4 小時。",
    reasoning: "題目問『接觸膽汁之前』，所以只計算小腸之前的時間，不能把小腸或大腸的停留時間加入。",
  },
  "basic-100-second-nature-8": {
    summary: "三葉蟲是生活在海中的生物，其化石能直接支持該地層過去曾位於海洋環境。",
    reasoning: "馬是陸生動物；隕石與火成岩脈分別反映天體落下和岩漿活動，都不能直接證明古海洋環境。",
  },
  "basic-100-second-nature-10": {
    summary: "老鼠數量先降到約 10 隻再回升，表示有些老鼠原本較能耐受藥劑，存活後又繁殖產生子代。",
    reasoning: "若所有老鼠都無法繁殖，數量不會回升；抵抗力是族群原有差異受到環境篩選，不是老鼠為了生存才主動產生。曲線也不能證明 50 隻雌鼠全數死亡。",
  },
  "basic-100-second-nature-11": {
    summary: "乙狀態的呼吸較快，最可能是活動使細胞呼吸旺盛、血中二氧化碳增加，進而刺激呼吸中樞。",
    reasoning: "人體呼吸調節主要對二氧化碳與其造成的酸鹼變化敏感；氮氣、水或氧氣增加都不是題述呼吸加速的主要訊號。",
  },
  "basic-100-second-nature-19": {
    summary: "地錢與土馬騌屬蘚苔植物，沒有維管束；筆筒樹與玉米分別為蕨類、被子植物，都具有維管束。",
    reasoning: "筆筒樹不開花、也不形成種子；地錢、土馬騌與筆筒樹都能以孢子繁殖，因此這些特徵都不能形成題目的分組。",
  },
  "basic-100-second-nature-21": {
    summary: "題示親代只能提供 a 與 b；子代口腔細胞須恢復成對染色體，另一親代可提供 A 與 B，因此 AaBb 的圖 B 可能出現。",
    reasoning: "圖 A 只有單套染色體，較像配子；圖 C 的 AABB 無法從題示 aa、bb 親代取得 a、b；圖 D 的染色體數則異常加倍。",
  },
  "basic-100-second-nature-22": {
    summary: "能量由底層生產者甲流向初級消費者乙，再流向次級消費者丙；甲所含能量最多。",
    reasoning: "能量每經一個營養階層，都有一部分用於生物活動並以熱散失，因此愈往金字塔上層，可利用能量愈少。",
  },
  "basic-100-second-nature-26": {
    summary: "循圖中箭頭可見丙把血液由肺送回心臟，依血流方向命名為肺靜脈。",
    reasoning: "判斷動、靜脈要看血液離開或流回心臟，不能只看含氧量；甲、乙心房及丁肺動脈的配對都與箭頭方向不符。",
  },
  "basic-100-second-nature-27": {
    summary: "乙管的唾液可分解澱粉而使本氏液呈黃色；丙管經 X 處理後仍呈藍色，表示唾液酵素已被 X 分解。",
    reasoning: "若 X 分解澱粉，丙管應產生還原糖而變色；實驗也沒有合成葡萄糖或合成唾液酵素的證據。",
  },
  "basic-100-second-nature-31": {
    summary: "乙家庭的母親有美人尖，卻生出無美人尖的 rr 女兒；她必須提供 r，因此基因型必為 Rr。",
    reasoning: "甲、丙家庭沒有隱性子代，母親仍可能是 RR 或 Rr；丁家庭的母親本身無美人尖，基因型已是 rr。",
  },
  "basic-100-second-nature-44": {
    summary: "心臟是器官，由心肌等肌肉組織、神經組織及其他組織共同構成。",
    reasoning: "肝臟不屬泌尿系統；個體由多個器官系統組成；肌肉細胞構成肌肉組織，不是神經組織。",
  },
  "basic-100-second-nature-45": {
    summary: "黑暗中的丙瓶沒有水草，pH 大致不變；丁瓶的水草只能呼吸，釋出二氧化碳使 pH 降低，因此丙大於丁。",
    reasoning: "二氧化碳溶於水會使水偏酸。照光的乙瓶則因光合作用淨消耗二氧化碳，pH 應高於沒有水草的甲瓶。",
  },
  "basic-100-second-nature-55": {
    summary: "圖中甲為小腦，主要協調肌肉活動並維持平衡；9:30 走平衡木與其功能最密切。",
    reasoning: "8:30 回答問題主要涉及大腦；10:05 遇熱縮手可先由脊髓完成反射；8:00 的出汗與呼吸加速也不是小腦的主要功能。",
  },
  "basic-100-second-nature-56": {
    summary: "7:40 緊張、心跳加快屬緊急反應，主要由腎上腺素引起；圖中腎臟上方的腎上腺標為丙。",
    reasoning: "甲為腦下垂體、乙為甲狀腺、丁為胰臟；它們都不是分泌腎上腺素的腺體。",
  },
};

export function refineYear100Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
  return questions.map((question) => {
    const refinement = refinements[question.id];
    if (!refinement) return question;
    return {
      ...question,
      explanation: {
        ...question.explanation,
        summary: refinement.summary,
        reasoning: refinement.reasoning,
        optionAnalysisMode: "covered-by-reasoning",
        optionAnalysis: [],
      },
    };
  });
}

export const year100ExplanationIds = new Set(Object.keys(refinements));
