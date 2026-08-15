import type {
  BiologyQuestion,
  OptionId,
  QuestionFigure,
} from "./types";

type OptionTexts = [string, string, string, string];

interface Unit05Refinement {
  stem?: string;
  options?: OptionTexts;
  figure?: QuestionFigure | null;
}

interface GroupRefinement {
  sharedStem: string;
  sharedFigure?: QuestionFigure | null;
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

const refinedRoot = "/questions/refined/unit-05";

const refinements: Record<string, Unit05Refinement> = {
  // 已有網頁文字的題目：另以穩定圖片 ID 儲存精裁後的必要圖表。
  "cap-105-nature-13": {
    figure: figure(
      `${refinedRoot}/cap-105-nature-13--figure.png`,
      "105 年會考第 13 題：標示甲、乙、丙、丁四面的黑暗箱與其中幼苗",
      390,
      280,
    ),
  },
  "cap-106-nature-24": {
    figure: figure(
      `${refinedRoot}/cap-106-nature-24--figure.png`,
      "106 年會考第 24 題：標示甲、乙、丙的觸電縮手神經傳導路徑",
      475,
      425,
    ),
  },
  "cap-107-nature-46": {
    figure: figure(
      `${refinedRoot}/cap-107-nature-46--figure.webp`,
      "107 年會考第 46 題：甲、乙兩組植物照光位置與三種莖生長方向",
      1200,
      511,
    ),
  },
  "cap-109-nature-6": {
    figure: figure(
      `${refinedRoot}/cap-109-nature-6--figure.webp`,
      "109 年會考第 6 題：由甲動作轉換為乙動作的平衡姿勢",
      1134,
      1200,
    ),
  },
  "cap-110-nature-28": {
    figure: figure(
      `${refinedRoot}/cap-110-nature-28--figure.png`,
      "110 年會考第 28 題：重複五次動作所需時間紀錄表",
      675,
      125,
    ),
  },
  "basic-99-first-nature-8": {
    figure: figure(
      `${refinedRoot}/basic-99-first-nature-8--figure.webp`,
      "99 年第一次基測第 8 題：標示甲、乙、丙、丁的中樞神經系統",
      225,
      310,
    ),
  },
  "basic-99-first-nature-29": {
    figure: figure(
      `${refinedRoot}/basic-99-first-nature-29--figure.webp`,
      "99 年第一次基測第 29 題：標示甲、乙、丙、丁的人體內分泌腺位置",
      500,
      425,
    ),
  },
  "basic-100-first-nature-17": {
    figure: figure(
      `${refinedRoot}/basic-100-first-nature-17--figure.webp`,
      "100 年第一次基測第 17 題：斜坡植株與 A 至 D 四個向光、向地生長圖形選項",
      1200,
      537,
    ),
  },
  "basic-101-first-nature-8": {
    figure: figure(
      `${refinedRoot}/basic-101-first-nature-8--figure.webp`,
      "101 年第一次基測第 8 題：可控制開口的不透光箱、旋轉器及 A 至 D 四種處理",
      1200,
      1067,
    ),
  },

  // 舊基測整題圖：補齊官方文字，純文字題移除圖片，圖題只保留必要圖形。
  "basic-98-second-nature-7": {
    stem: "圖（二）為人類中樞神經系統的構造示意圖，下列敘述中的反應與其主要控制中樞的配對，何者正確？",
    options: [
      "手觸電後立刻縮回—甲",
      "看到相片回憶起快樂時光—乙",
      "血液中 CO₂ 濃度過高使呼吸加速—丙",
      "騎腳踏車時能保持平衡—丁",
    ],
    figure: figure(
      `${refinedRoot}/basic-98-second-nature-7--figure.webp`,
      "98 年第二次基測第 7 題：標示甲、乙、丙、丁的中樞神經系統",
      315,
      250,
    ),
  },
  "basic-99-second-nature-25": {
    stem: "某書介紹中樞神經系統某一部位功能的敘述為：「接收到血壓太高的訊息時，會發出訊息經由神經傳至心臟，使心跳減慢。」此敘述最可能是在說明下列哪一部位？",
    options: ["大腦", "小腦", "腦幹", "脊髓"],
    figure: null,
  },
  "basic-100-second-nature-55": {
    stem: "圖（二十六）為人體中樞神經系統的構造示意圖。根據共同閱讀資料，小凱中樞神經系統中的甲部位與當天下列哪一時間的活動之關係最密切？",
    options: ["8:00", "8:30", "9:30", "10:05"],
    figure: figure(
      `${refinedRoot}/basic-100-second-nature-55--figure.webp`,
      "100 年第二次基測第 55 題：標示甲部位的中樞神經系統",
      280,
      255,
    ),
  },
  "basic-100-second-nature-56": {
    stem: "圖（二十七）為人體內分泌系統的部分構造示意圖。根據共同閱讀資料，造成小凱在 7:40 反應的主要激素來自下列哪一內分泌腺？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-100-second-nature-56--figure.webp`,
      "100 年第二次基測第 56 題：標示甲、乙、丙、丁的人體內分泌腺",
      1161,
      1200,
    ),
  },
  "basic-94-first-nature-28": {
    stem: "圖（十六）為小明左手指尖受到突來的刺激後，所引起左手臂肌肉收縮的過程，此過程涉及不同的神經及傳導方向，下列敘述何者正確？",
    options: [
      "神經傳導方向是由乙到甲",
      "反覆練習可縮短此反應的時間",
      "此反應不涉及大腦的思考與判斷",
      "此反應和打棒球揮棒一樣，同屬身體的反射動作",
    ],
    figure: figure(
      `${refinedRoot}/basic-94-first-nature-28--figure.webp`,
      "94 年第一次基測第 28 題：左手指受刺激後的反射神經傳導路徑",
      325,
      300,
    ),
  },
  "basic-95-first-nature-6": {
    stem: "佛教有一部經典《心經》，其部分內容寫到「……無眼、耳、鼻、舌、身、意；無色、聲、香、味、觸、法……」。上文中的「眼、耳、鼻、舌、身」與「色、聲、香、味、觸」之配對，與下列何種系統最有關係？",
    options: ["神經系統", "呼吸系統", "消化系統", "內分泌系統"],
    figure: null,
  },
  "basic-95-first-nature-25": {
    stem: "根據圖（十一），有關運動員運動時其腦部組織相關之敘述，下列何者正確？",
    options: [
      "甲可使心搏加快，加速血液循環",
      "乙能維持身體平衡，使運動員不跌倒",
      "丙能減少呼吸深度，減緩氧氣的消耗",
      "丁可產生反射動作，使運動員加速奔跑",
    ],
    figure: figure(
      `${refinedRoot}/basic-95-first-nature-25--figure.webp`,
      "95 年第一次基測第 25 題：標示甲、乙、丙、丁的腦部組織",
      330,
      225,
    ),
  },
  "basic-95-first-nature-48": {
    stem: "小亞遇到窮追狂吠的野狗時，感到害怕，轉身逃跑。下列關於她生理變化的敘述何者正確？",
    options: [
      "聽見狗吠就逃跑，屬於反射動作，傳導路徑不經大腦",
      "腎上腺素大量分泌，使血壓下降，心跳次數增加",
      "血糖濃度上升，使組織獲得足夠的養分",
      "大腦調節使心跳頻率及呼吸頻率上升",
    ],
    figure: null,
  },
  "basic-95-second-nature-14": {
    stem: "關於酵素與激素的敘述，下列何者正確？",
    options: [
      "酵素與激素皆由醣類組成",
      "酵素與激素均僅由血液運送",
      "胰島素屬於酵素，胃蛋白酶屬於激素",
      "酵素可加速生物化學反應，激素可傳遞訊息給目標細胞",
    ],
    figure: null,
  },
  "basic-95-second-nature-22": {
    stem: "下列哪一現象屬於植物的向性？",
    options: [
      "梅花在冬天開花",
      "碰觸含羞草時，它的葉片會閉合",
      "酢漿草葉片上的氣孔，在白天會打開",
      "橫放的豆苗盆栽，其莖會彎曲向上生長",
    ],
    figure: null,
  },
  "basic-95-second-nature-34": {
    stem: "某人因患了阿茲海默氏症，而產生了語言能力的障礙，此現象最可能與下列何種器官出現異常有關？",
    options: ["脊髓", "延腦", "大腦", "小腦"],
    figure: null,
  },
  "basic-96-first-nature-29": {
    stem: "下列有關人類反射作用的敘述何者正確？",
    options: [
      "反射作用通常涉及大腦意識",
      "沒有動器也可以表現反射動作",
      "眨眼是協調中樞在腦內的反射動作",
      "反射動作的速度比有意識的動作慢",
    ],
    figure: null,
  },
  "basic-96-second-nature-5": {
    stem: "下列因素，何者會促使植物的莖表現出向性？",
    options: ["日夜溫度不同", "季節間雨量不同", "周圍的空氣溼度不同", "周圍的光線強度不同"],
    figure: null,
  },
  "basic-90-first-nature-12": {
    stem: "小惠縫衣服時被針刺到手指尖端，立刻將手縮回，下列敘述何者正確？",
    options: [
      "小惠感到痛及手縮回都是大腦反應的結果",
      "小惠感到痛及手縮回都是脊髓反應的結果",
      "小惠感到痛是大腦反應的結果；手縮回是脊髓反應的結果",
      "小惠感到痛是脊髓反應的結果；手縮回是大腦反應的結果",
    ],
    figure: null,
  },
  "basic-90-second-nature-3": {
    stem: "下列植物的感應，何者和生長激素有關？",
    options: ["向日葵的向光性", "合歡的睡眠運動", "豬籠草的觸發運動", "紫背萬年青的氣孔開閉"],
    figure: null,
  },
  "basic-90-second-nature-14": {
    stem: "小柏剛從暗處走到亮處，其眼睛變化如圖（四）。發生這個變化的原因，下列何者正確？（參考圖（五）之眼睛構造回答）",
    options: [
      "瞳孔變小，調節進入眼睛的光線量",
      "水晶體變小，調整接受光線的強弱",
      "睫狀肌收縮，調整成像的位置",
      "玻璃體變大，調節成像的面積",
    ],
    figure: figure(
      `${refinedRoot}/basic-90-second-nature-14--figure.webp`,
      "90 年第二次基測第 14 題：由暗處到亮處的瞳孔變化與眼球構造",
      1200,
      1037,
    ),
  },
  "basic-91-second-nature-22": {
    stem: "將紅豆放在玻璃管中，置於僅有唯一光源的暗室如圖（六）。經過一段時間，根的生長方向如圖中所示，下列有關實驗結果的推論，哪一項最合理？",
    options: [
      "在玻璃管內發芽的紅豆，根只會沿水平方向生長",
      "根表現向溼性，所以有水的情況下就沿水平方向生長",
      "將豆子水平放進玻璃管，所以呈水平生長方向",
      "根同時表現了向地性與背光性，因而沿水平方向生長",
    ],
    figure: figure(
      `${refinedRoot}/basic-91-second-nature-22--figure.webp`,
      "91 年第二次基測第 22 題：玻璃管內紅豆根受重力與單一光源影響的裝置",
      1200,
      825,
    ),
  },
  "basic-91-second-nature-33": {
    stem: "育修遠眺青山，其眼球結構會有下列何種改變？",
    options: [
      "睫狀肌收縮，水晶體較為扁平",
      "睫狀肌收縮，水晶體形狀較凸",
      "睫狀肌放鬆，水晶體較為扁平",
      "睫狀肌放鬆，水晶體形狀較凸",
    ],
    figure: null,
  },
  "basic-92-first-nature-39": {
    stem: "國強搭車時容易暈車。這種現象可能是因為下列哪兩種構造協調失常所引起？",
    options: ["鼓膜和三小聽骨", "前庭和半規管", "耳殼和外聽道", "耳蝸和半規管"],
    figure: null,
  },
  "basic-92-first-nature-43": {
    stem: "圖（二十四）是用餐前後血糖濃度的變化情形。胰島素在下列哪一個階段開始發生作用？",
    options: ["甲", "乙", "丙", "丁"],
    figure: figure(
      `${refinedRoot}/basic-92-first-nature-43--figure.webp`,
      "92 年第一次基測第 43 題：用餐前後血糖濃度在甲、乙、丙、丁階段的變化",
      1200,
      973,
    ),
  },
  "basic-92-second-nature-6": {
    stem: "有一訊息的神經傳遞路徑如下：視覺受器→感覺神經→大腦→運動神經→手部肌肉。下列選項中，哪一項動作的訊息傳遞過程完全符合上述的路徑？",
    options: [
      "手碰到熱燙的鍋子，迅速將手縮回",
      "走路時不慎踩到鐵釘，腳即刻縮回",
      "眼睛盯著電腦螢幕，右手操縱著滑鼠",
      "聽見柔和的音樂聲，心情不由得好了起來",
    ],
    figure: null,
  },
  "basic-92-second-nature-9": {
    stem: "我們的眼睛可看遠和看近，主要是因為下列哪一項生理反應？",
    options: [
      "玻璃體的厚度隨距離遠近而改變",
      "虹膜隨距離遠近而調節瞳孔的大小",
      "視網膜成像的位置隨距離遠近而改變",
      "睫狀肌隨距離遠近而調節水晶體的曲度",
    ],
    figure: null,
  },
  "basic-92-second-nature-28": {
    stem: "不同組織中的細胞形狀不同，功能也不同。在人體中，下列箭頭所指的細胞何者最可能具有快速傳遞訊息的功能？",
    options: ["A 圖", "B 圖", "C 圖", "D 圖"],
    figure: figure(
      `${refinedRoot}/basic-92-second-nature-28--figure.webp`,
      "92 年第二次基測第 28 題：A 至 D 四種人體組織細胞圖形選項",
      1200,
      400,
    ),
  },
  "basic-93-first-nature-7": {
    stem: "添文將右手放入甲杯水中立刻收回，感覺滾燙疼痛；之後再將右手放入乙杯水中，感覺清涼而疼痛減輕。下列敘述何者錯誤？",
    options: [
      "痛的感覺在脊髓產生",
      "甲杯水溫高於乙杯水溫",
      "手立刻收回是一種反射動作",
      "熱量的傳播途徑為：甲杯水→手→乙杯水",
    ],
    figure: null,
  },
  "basic-93-first-nature-27": {
    stem: "在眼球的構造中，若（甲）代表水晶體、（乙）代表視網膜、（丙）代表角膜、（丁）代表瞳孔，則光線入眼的正確順序應為下列何者？",
    options: ["丁→甲→丙→乙", "丙→丁→甲→乙", "乙→丙→丁→甲", "甲→乙→丙→丁"],
    figure: null,
  },
  "basic-93-second-nature-11": {
    stem: "含羞草的葉片長得像羽毛一樣，一旦受到觸碰便會閉合起來。這種觸發運動的原理和下列哪一個植物的感應現象原理相同？",
    options: ["鳳仙花的開花", "綠豆芽的向光性", "酢漿草的睡眠運動", "絲瓜的莖繞著竹竿生長"],
    figure: null,
  },
};

const groupRefinements: Record<string, GroupRefinement> = {
  "cap-103-hormone-experiment": {
    sharedStem: "科學家要研究激素對血液中物質濃度的影響，在大白鼠身上分次靜脈注射激素 X、Y、Z，並記錄注射前後血液中鈣及葡萄糖的濃度變化。每次注射都有足夠的時間間隔，使激素不會彼此干擾。以下兩題共用表（七）的平均結果；濃度單位 mmol/L 為毫莫耳／公升。",
    sharedFigure: figure(
      `${refinedRoot}/cap-103-hormone-experiment--shared.webp`,
      "103 年會考第 47 至 48 題：注射激素 X、Y、Z 前後的血鈣與葡萄糖濃度表",
      1200,
      400,
    ),
  },
  "basic-100-pancreas-extract": {
    sharedStem: "在有關認識糖尿病的研究中，研究員為探討糖尿病形成的可能原因及相關物質的成分，將條件相同的大白鼠分成五組。各組依表（八）接受不處理、切除胰臟，或在切除胰臟後注射未處理、經蛋白酶處理、經澱粉酶處理的胰臟萃取液，再觀察是否出現糖尿病。蛋白酶是分解蛋白質的酵素；澱粉酶是分解澱粉的酵素。",
    sharedFigure: figure(
      `${refinedRoot}/basic-100-pancreas-extract--shared.webp`,
      "100 年第一次基測第 53 至 54 題：五組大白鼠的胰臟萃取液實驗處理與結果表",
      1200,
      572,
    ),
  },
  "basic-100-second-nervous-endocrine": {
    sharedStem: "小凱某日上午的活動如下：7:40，早上太晚起床，他很緊張又怕遲到，心臟跳得很快，之後以驚人速度衝向學校；8:00，進教室後汗流不止、呼吸加速；8:30，課堂上老師問了很多問題，他都知道答案，不過沒有舉手；9:30，體育課時要走非常窄的平衡木，但他努力地走完了；10:05，下課後被同學意外打翻的熱水燙到，他立刻縮回手，但皮膚已變紅。",
    sharedFigure: null,
  },
};

function applyRefinement(question: BiologyQuestion): BiologyQuestion {
  const refinement = refinements[question.id];
  const groupRefinement = question.questionGroup
    ? groupRefinements[question.questionGroup.id]
    : undefined;

  if (!refinement && !groupRefinement) return question;

  const nextFigure = refinement?.figure === null
    ? undefined
    : refinement?.figure ?? question.figure;

  const nextSharedFigure = groupRefinement?.sharedFigure === null
    ? undefined
    : groupRefinement?.sharedFigure;

  return {
    ...question,
    stem: refinement?.stem ?? question.stem,
    options: refinement?.options
      ? refinement.options.map((text, index) => ({ id: optionIds[index], text }))
      : question.options,
    figure: nextFigure,
    officialImageOnly: refinement ? false : question.officialImageOnly,
    questionGroup: question.questionGroup && groupRefinement
      ? {
          ...question.questionGroup,
          sharedStem: groupRefinement.sharedStem,
          sharedFigure: nextSharedFigure,
        }
      : question.questionGroup,
  };
}

export function refineUnit05Questions(rows: BiologyQuestion[]): BiologyQuestion[] {
  return rows.map(applyRefinement);
}
