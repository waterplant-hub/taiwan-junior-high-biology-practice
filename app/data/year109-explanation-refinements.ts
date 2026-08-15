import type { BiologyQuestion } from "./types";

interface ExplanationRefinement {
  summary: string;
  reasoning: string;
}

const refinements: Record<string, ExplanationRefinement> = {
  "cap-109-nature-1": {
    summary: "牛背鷺吃掉牛身上的寄生蟲而獲得食物，牛也因寄生蟲減少而受益，因此牛背鷺與牛屬互利共生。",
    reasoning: "牛背鷺捕食寄生蟲，兩者不是共生；寄生蟲主要利用牛而使牛受害，也不是和牛背鷺競爭牛身上的食物。",
  },
  "cap-109-nature-3": {
    summary: "澱粉是大分子醣類，經消化作用分解後可形成許多小分子的葡萄糖。",
    reasoning: "胺基酸是蛋白質消化後的產物，不是澱粉的組成單位。呼吸作用則是細胞分解葡萄糖以釋放能量，不是把澱粉切成小分子的過程。",
  },
  "cap-109-nature-4": {
    summary: "同一物種不因幼體、成體或外觀階段不同而改變學名；表中小白鷺的學名是 Egretta garzetta。",
    reasoning: "二名法由屬名與種小名組成，必須整組對照表格。Ardea alba 是大白鷺，Egretta intermedia 是中白鷺；把不同物種的屬名與種小名重新拼接也不會成為小白鷺的學名。",
  },
  "cap-109-nature-5": {
    summary: "白天蒸散旺盛時，氣孔呈開啟的丙狀態；蒸散拉力使水由根往葉向上運輸，方向是乙。",
    reasoning: "水和礦物質主要在木質部向上移動。若氣孔關閉，水蒸氣散失會減少，不能代表題目所說的旺盛蒸散，因此正確組合是乙、丙。",
  },
  "cap-109-nature-6": {
    summary: "從甲姿勢換成乙姿勢時，需要協調多組肌肉並維持身體平衡，主要由小腦調控。",
    reasoning: "腦垂腺分泌激素，腦幹調節呼吸與心跳等基本生命活動，脊髓負責訊息傳導及部分反射；都不是協調全身肌肉和平衡的主要中樞。",
  },
  "cap-109-nature-16": {
    summary: "細菌族群原本就可能有抗性差異；物質 X 殺死易受破壞的細菌，留下不易受破壞者繁殖，因此篩選出抗性細菌。",
    reasoning: "天擇是環境篩選既有差異，不是物質 X 為了細菌需要而誘發特定性狀，也不是使人體獲得抗性或刺激人體製造同一種殺菌物質。",
  },
  "cap-109-nature-17": {
    summary: "自花授粉仍會讓花粉中的精細胞與胚珠中的卵細胞結合，形成受精卵，因此屬有性生殖。",
    reasoning: "成功受精後子房可發育成果實，子代通常仍具有繁殖能力。即使花粉來自同一朵花，減數分裂與受精仍會造成基因重新組合，子代性狀不一定與親代完全相同。",
  },
  "cap-109-nature-18": {
    summary: "兩臺顯微鏡的總倍率都是 40 倍，因此影像大小不變；複式顯微鏡的影像會相對實物上下、左右皆相反，符合圖選項 D。",
    reasoning: "解剖顯微鏡所見方向與實物相同，不能把原視野直接當成複式顯微鏡影像。10X 目鏡乘 4X 物鏡仍是 40X，故只需將原圖旋轉 180°，不應另外放大或縮小。",
  },
  "cap-109-nature-19": {
    summary: "氣溫 27°C 時手部皮膚約 33°C，零食要拿在手上不熔化，熔點必須高於 33°C；放入口中要熔化，熔點又須低於約 37°C，只有丙符合。",
    reasoning: "17°C 時的手部溫度比 33°C 更低，只要能通過 33°C 的條件也能通過較低手溫。應找熔點介於最高的手部皮膚溫度與口腔正常體溫之間的品牌。",
  },
  "cap-109-nature-28": {
    summary: "依食物來源可排成植物→蚱蜢→蜘蛛→蜥蜴→蛇；蛇位於最高營養階層，族群可利用的總能量最少。",
    reasoning: "能量沿食物鏈傳遞時會逐級散失，不能把個體大小或捕食能力當成總能量。蚱蜢、蜘蛛與蜥蜴都位在蛇以下的營養階層。",
  },
  "cap-109-nature-33": {
    summary: "祖父母都能捲舌，卻能生出不能捲舌的子女，表示能捲舌為顯性且兩位祖父母都必為異型合子，所以基因型相同。",
    reasoning: "父母和孩子都能捲舌，只能確定表現型相同，無法判定每人的基因型是顯性同型或異型。祖父母的表現型也同為能捲舌，不是相異。",
  },
  "cap-109-nature-41": {
    summary: "澱粉酶、脂肪酶與蛋白酶雖然作用的受質不同，但三者都是酵素，主要成分皆為蛋白質，因此丁的說明正確。",
    reasoning: "酵素名稱中的「澱粉、脂肪、蛋白」指出其主要作用對象，不代表酵素本身分別由醣類、脂質或蛋白質構成。",
  },
  "cap-109-nature-43": {
    summary: "蛋白質代謝會產生含氮廢物，先在肝臟轉換成毒性較低的尿素，因此甲是蛋白質、乙是肝臟。",
    reasoning: "脂質主要由碳、氫、氧組成，不是人體含氮廢物的主要來源。腎臟負責過濾血液並排出尿素，但把含氮廢物轉成尿素的器官是肝臟。",
  },
  "cap-109-nature-50": {
    summary: "肺炎鏈球菌是細菌，具有 DNA、細胞質和細胞膜，但 DNA 沒有被核膜包圍，因此沒有細胞核。",
    reasoning: "沒有細胞核不等於沒有遺傳物質；細菌仍需細胞膜維持內外環境，也有細胞質進行生命活動。",
  },
  "cap-109-nature-51": {
    summary: "丙的正常數量 380～600 萬最高，故為紅血球；甲在病患體內由 0.4～1.0 萬增至 2.9 萬，符合感染時增加的白血球；乙因此是血小板。",
    reasoning: "題幹同時提供『紅血球數量最多』與『對抗病原菌的血球異常增加』兩項線索，依序可確定丙與甲，剩下的乙才是血小板，所以配對為甲白血球、乙血小板、丙紅血球。",
  },
};

export function refineYear109Explanations(questions: BiologyQuestion[]): BiologyQuestion[] {
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

export const year109ExplanationIds = new Set(Object.keys(refinements));
