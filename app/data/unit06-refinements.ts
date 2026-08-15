import type {
  BiologyQuestion,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit06Refinement {
  stem?: string;
  options?: OptionTexts;
  figure?: QuestionFigure | null;
  explanation?: {
    summary: string;
    reasoning: string;
    optionReasons: OptionTexts;
  };
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

const refinedRoot = "/questions/refined/unit-06";

const refinements: Record<string, Unit06Refinement> = {
  // 已有網頁文字的題目：附圖另以永久圖片 ID 儲存，只保留作答所需圖表。
  "cap-104-nature-38": {
    figure: figure(
      `${refinedRoot}/cap-104-nature-38--figure.webp`,
      "104 年會考第 38 題：甲、乙兩種橫膈位置與肺部體積",
      1200,
      880,
    ),
  },
  "cap-106-nature-36": {
    figure: figure(
      `${refinedRoot}/cap-106-nature-36--figure.png`,
      "106 年會考第 36 題：心臟、肝臟、腎臟與甲乙丙丁血管的血流方向",
      345,
      315,
    ),
  },
  "cap-109-nature-19": {
    figure: figure(
      `${refinedRoot}/cap-109-nature-19--figure.png`,
      "109 年會考第 19 題：兩種氣溫下手部皮膚溫度與四品牌零食熔點表",
      770,
      305,
    ),
  },
  "cap-110-nature-4": { figure: null },
  "basic-99-first-nature-12": {
    figure: figure(
      `${refinedRoot}/basic-99-first-nature-12--figure.webp`,
      "99 年第一次基測第 12 題：一日氣溫曲線與 A 至 D 四張體溫曲線",
      1200,
      804,
    ),
  },
  "basic-100-first-nature-6": {
    figure: figure(
      `${refinedRoot}/basic-100-first-nature-6--figure.webp`,
      "100 年第一次基測第 6 題：炎熱與溫和環境下每日水分散失量表",
      1200,
      783,
    ),
  },
  "basic-101-first-nature-16": {
    figure: figure(
      `${refinedRoot}/basic-101-first-nature-16--figure.webp`,
      "101 年第一次基測第 16 題：喝葡萄糖液後 0 至 120 分鐘血糖濃度表",
      300,
      410,
    ),
  },
  "basic-101-first-nature-44": {
    stem: "圖（二十二）為同一個人在用力吸氣和用力呼氣後，分別拍攝的兩張胸部 X 光圖，圖中白色虛線所圍區域為肺的示意位置；橫膈又稱橫膈膜。有關判斷吸氣後閉氣不動所拍攝的 X 光圖及其理由，下列敘述何者正確？",
    figure: figure(
      `${refinedRoot}/basic-101-first-nature-44--figure.webp`,
      "101 年第一次基測第 44 題：甲、乙兩張胸部 X 光圖及肺部範圍",
      460,
      280,
    ),
  },

  // 舊基測整題圖：補齊官方題幹與四個選項；純文字題不再顯示掃描圖。
  "basic-98-second-nature-1": {
    stem: "有些糖尿病患者需要每天注射激素 X，但在注射後有時會再補充適量的糖，以避免出現心悸、顫抖等症狀。下列對此現象的解釋，何者最合理？",
    options: [
      "X 為胰島素，有時會造成血糖過度增加",
      "X 為胰島素，有時會造成血糖過度降低",
      "X 為腎上腺素，有時會造成血糖過度增加",
      "X 為腎上腺素，有時會造成血糖過度降低",
    ],
    figure: null,
  },
  "basic-97-second-nature-7": {
    stem: "人在打噴嚏時，常會產生「哈……啾」二階段的口形，當「啾」的口形產生時，下列敘述何者錯誤？",
    options: ["肋骨上舉", "橫膈上升", "肺部體積縮小", "二氧化碳從肺部排出"],
    figure: null,
  },
  "basic-100-second-nature-11": {
    stem: "小華是健康的受試者，圖（五）是他在甲和乙兩種不同狀態下，每分鐘呼吸次數的比較。圖中甲和乙呼吸次數不同的原因，可能是小華處在乙狀態時，血液中的下列哪一種成分增加所造成？",
    options: ["O₂", "N₂", "H₂O", "CO₂"],
    figure: figure(
      `${refinedRoot}/basic-100-second-nature-11--figure.webp`,
      "100 年第二次基測第 11 題：甲、乙兩種狀態的每分鐘呼吸次數長條圖",
      270,
      225,
    ),
  },
  "basic-94-first-nature-46": {
    stem: "如圖（二十四）所示，甲、乙分別代表某種可影響血糖濃度變化的激素，則乙最有可能是下列哪一種激素？",
    options: ["甲狀腺素", "性激素", "胰島素", "升糖素"],
    figure: figure(
      `${refinedRoot}/basic-94-first-nature-46--figure.webp`,
      "94 年第一次基測第 46 題：高、低血糖濃度經甲乙激素調節回適中值",
      1200,
      545,
    ),
    explanation: {
      summary: "圖中乙在血糖濃度過低時發揮作用，使血糖回升，因此乙是升糖素。",
      reasoning: "先看箭頭作用方向：乙把低血糖調回適中。升糖素可促進肝糖分解並釋出葡萄糖，使血糖升高；胰島素的作用方向相反。",
      optionReasons: [
        "甲狀腺素主要調節代謝速率，並非題圖中低血糖時直接使血糖回升的激素。",
        "性激素主要影響生殖系統與第二性徵，不負責血糖恆定。",
        "胰島素會促進細胞利用葡萄糖並降低血糖，作用方向與乙相反。",
        "正確。升糖素在血糖偏低時促使血糖上升，使濃度回到適中範圍。",
      ],
    },
  },
  "basic-94-second-nature-15": {
    stem: "下列關於人體腎臟的敘述，何者正確？",
    options: [
      "屬於消化器官",
      "具有長期貯存尿液的功能",
      "形成的尿液可經由尿道送入膀胱",
      "可將血液中的含氮廢物由尿液排出體外",
    ],
    figure: null,
    explanation: {
      summary: "腎臟會過濾血液、形成尿液，讓含氮廢物隨尿液排出體外。",
      reasoning: "判斷本題要分清泌尿系統各構造：腎臟製造尿液，輸尿管把尿液送到膀胱，膀胱暫存尿液，尿道再將尿液排出體外。",
      optionReasons: [
        "腎臟屬於泌尿器官，不是消化器官。",
        "尿液主要暫存在膀胱，腎臟不負責長期貯存。",
        "腎臟形成的尿液經輸尿管進入膀胱；尿道是由膀胱通往體外。",
        "正確。腎臟將血液中的尿素等含氮廢物濾出，形成尿液排出。",
      ],
    },
  },
  "basic-94-second-nature-20": {
    stem: "表（二）為大雄每日水分的平均攝入量與排出量，根據資料判斷，下列推論何者錯誤？",
    options: [
      "水分主要靠尿液排出",
      "水分的攝入主要來自於飲水",
      "水分的攝入量及排出量維持平衡",
      "水分經由食物的攝入量高於尿液的排出量",
    ],
    figure: figure(
      `${refinedRoot}/basic-94-second-nature-20--figure.webp`,
      "94 年第二次基測第 20 題：每日水分攝入量與排出量表",
      395,
      310,
    ),
    explanation: {
      summary: "表中食物帶入 600 c.c. 水分，少於尿液排出的 1450 c.c.，因此 D 是錯誤推論。",
      reasoning: "要直接比較表中數值：總攝入量為 1800＋600＋50＝2450 c.c.；總排出量為 1450＋500＋400＋100＝2450 c.c.，兩者平衡。",
      optionReasons: [
        "尿液排出 1450 c.c.，是各排出途徑中最多，敘述符合表格。",
        "飲水攝入 1800 c.c.，是各攝入來源中最多，敘述符合表格。",
        "攝入與排出總量都為 2450 c.c.，確實維持平衡。",
        "正確答案。食物攝入 600 c.c.，並沒有高於尿液排出的 1450 c.c.。",
      ],
    },
  },
  "basic-96-first-nature-7": {
    stem: "小哲喜歡吹奏薩克斯風。當他吹氣使該樂器發出聲音時，會發生下列哪一種情形？",
    options: ["空氣從外界流至胸腔", "橫膈位置逐漸下降", "肋骨位置逐漸上舉", "胸腔體積逐漸變小"],
    figure: null,
    explanation: {
      summary: "吹奏樂器是在呼氣，呼氣時胸腔與肺部體積逐漸變小，空氣才會流出。",
      reasoning: "呼氣時橫膈放鬆上升、肋骨下降，使胸腔體積縮小、肺內壓力升高，空氣由肺流向外界。",
      optionReasons: [
        "吹氣時空氣由肺部流向外界，不是由外界流入胸腔。",
        "橫膈下降會擴大胸腔，是吸氣時的變化；呼氣時橫膈上升。",
        "肋骨上舉會擴大胸腔，是吸氣時的變化；呼氣時肋骨下降。",
        "正確。胸腔體積變小會使肺內壓力升高，將空氣推出。",
      ],
    },
  },
  "basic-96-first-nature-9": {
    stem: "老王做體檢，他禁食 8 小時後抽血檢測血液中葡萄糖濃度，接著在飯後 2 小時，又做相同的檢測。這項檢測主要是瞭解下列何種激素的功能？",
    options: ["甲狀腺素", "生長素", "胰島素", "腎上腺素"],
    figure: null,
    explanation: {
      summary: "比較空腹與飯後血糖，是在檢查飯後能否靠胰島素使升高的血糖恢復穩定。",
      reasoning: "飯後葡萄糖由小腸吸收入血，血糖上升；胰島素促進細胞利用葡萄糖及肝糖合成，使血糖下降。",
      optionReasons: [
        "甲狀腺素主要影響代謝速率，不是飯後降低血糖的主要激素。",
        "生長素主要促進生長，並非本檢測要觀察的血糖調節激素。",
        "正確。飯後血糖升高時，胰島素負責促使血糖回復穩定。",
        "腎上腺素多在緊急狀態下促使血糖升高，不是飯後降低血糖的主要激素。",
      ],
    },
  },
  "basic-90-first-nature-22": {
    stem: "小美跑 800 公尺後，呼吸變快，圖（五）中何者是控制呼吸加速的主要部位？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-90-first-nature-22--figure.webp`,
      "90 年第一次基測第 22 題：標示甲、乙、丙、丁的腦部及脊髓",
      1054,
      1200,
    ),
    explanation: {
      summary: "控制呼吸節律的主要中樞位於腦幹；圖中腦幹標示為丙，所以答案是 C。",
      reasoning: "運動時細胞呼吸加強，血中二氧化碳增加，會刺激腦幹的呼吸中樞，使呼吸加深、加快。先辨認圖中的大腦、腦幹、小腦與脊髓即可作答。",
      optionReasons: [
        "甲是大腦，主要負責感覺、思考及自主運動，不是控制基本呼吸節律的主要部位。",
        "乙是小腦，主要協調肌肉運動並維持身體平衡。",
        "正確。丙是腦幹，具有調節呼吸、心搏等生命現象的中樞。",
        "丁是脊髓，主要負責訊息傳導與部分反射，不是呼吸節律的主要控制中樞。",
      ],
    },
  },
  "basic-91-first-nature-4": {
    stem: "運動時心搏加快，在生理上有何意義？",
    options: ["加速氧氣的運輸", "增加二氧化碳的含量", "減少體熱的散失", "增加尿液的形成"],
    figure: null,
    explanation: {
      summary: "運動時肌肉耗氧量增加，心搏加快可提高血流量，加速把氧氣送到肌肉。",
      reasoning: "運動中的肌細胞呼吸作用加強，需要更多氧氣並產生較多二氧化碳；循環加快可同時加速供氧與帶走代謝產物。",
      optionReasons: [
        "正確。心搏加快可增加每分鐘送出的血量，使氧氣更快到達活動中的肌肉。",
        "心搏加快的意義是加速運走二氧化碳，不是讓二氧化碳在體內增加。",
        "運動時需要加強散熱；心搏加快並不是為了減少體熱散失。",
        "運動時身體常會減少尿液形成以保存水分，增加尿液不是心搏加快的目的。",
      ],
    },
  },
  "basic-92-first-nature-23": {
    stem: "圖（十）是人體的泌尿系統，下列相關敘述何者正確？",
    options: [
      "甲處可以形成尿素",
      "乙處可以製造尿液",
      "丙處將血液送回血管",
      "丁處將尿液中的水分再吸收",
    ],
    figure: figure(
      `${refinedRoot}/basic-92-first-nature-23--figure.webp`,
      "92 年第一次基測第 23 題：標示甲、乙、丙、丁的人體泌尿系統",
      1200,
      1200,
    ),
    explanation: {
      summary: "圖中乙是腎臟，腎臟能過濾血液並製造尿液，所以答案是 B。",
      reasoning: "依位置辨認：甲為腎上腺、乙為腎臟、丙為輸尿管、丁為膀胱。尿素主要在肝臟形成；尿液則由腎臟形成後經輸尿管進入膀胱。",
      optionReasons: [
        "甲是腎上腺；尿素主要由肝臟將胺基酸代謝產生的含氮廢物轉換而成。",
        "正確。乙是腎臟，能過濾血液並形成尿液。",
        "丙是輸尿管，功能是把尿液由腎臟送往膀胱，不是運送血液。",
        "丁是膀胱，主要暫時儲存尿液，不負責將尿液中的水分再吸收。",
      ],
    },
  },
  "basic-92-first-nature-38": {
    stem: "圖（二十一）為皮膚構造。小蓮運動後流了滿身大汗，下列何者為排出汗液的構造？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-92-first-nature-38--figure.webp`,
      "92 年第一次基測第 38 題：標示甲、乙、丙、丁的皮膚構造",
      1200,
      998,
    ),
    explanation: {
      summary: "圖中丁是盤曲的汗腺，汗液由汗腺分泌後經導管排到皮膚表面。",
      reasoning: "找汗腺時要看真皮內呈盤曲管狀、並有細長導管通往皮膚表面的構造。運動後排汗也能藉汗液蒸發帶走熱量。",
      optionReasons: [
        "甲指向皮膚深部的感覺受器，不是製造汗液的構造。",
        "乙指向立毛肌附近，不是排出汗液的腺體。",
        "丙指向毛髮，不會分泌汗液。",
        "正確。丁是汗腺，能分泌汗液並經導管排至皮膚表面。",
      ],
    },
  },
  "basic-92-second-nature-5": {
    stem: "人體血液中的水分減少時，將會產生何種生理現象？",
    options: ["血液濃度降低", "排尿頻率增加", "呼吸頻率減少", "刺激腦幹感到口渴"],
    figure: null,
    explanation: {
      summary: "血液水分減少時濃度會升高，身體會產生口渴感並減少水分排出；依官方答案選 D。",
      reasoning: "本題考水分恆定的反應方向：缺水時應促進飲水並保存水分，而不是讓血液更稀、增加排尿或降低呼吸頻率。",
      optionReasons: [
        "水分減少會使血液濃度升高，不是降低。",
        "缺水時身體會減少尿量以保存水分，排尿頻率不會增加。",
        "呼吸頻率不是調節血液水分減少的主要反應。",
        "正確。依官方答案，血液水分減少會刺激口渴中樞，使人產生飲水需求。",
      ],
    },
  },
};

function applyRefinement(question: BiologyQuestion): BiologyQuestion {
  const refinement = refinements[question.id];
  if (!refinement) return question;

  const nextFigure = refinement.figure === null
    ? undefined
    : refinement.figure ?? question.figure;

  return {
    ...question,
    stem: refinement.stem ?? question.stem,
    options: refinement.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    figure: nextFigure,
    explanation: refinement.explanation
      ? {
          ...question.explanation,
          summary: refinement.explanation.summary,
          reasoning: refinement.explanation.reasoning,
          optionAnalysis: refinement.explanation.optionReasons.map((reason, index) => ({
            optionId: optionIds[index],
            reason,
          })),
        }
      : question.explanation,
    officialImageOnly: false,
  };
}

export function refineUnit06Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
