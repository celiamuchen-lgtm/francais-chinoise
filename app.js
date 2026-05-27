const dictionary = [
  ["城市热岛效应", "l'îlot de chaleur urbain"],
  ["热岛效应", "l'îlot de chaleur"],
  ["城市规划", "l'urbanisme"],
  ["空间规划", "la planification spatiale"],
  ["国土规划", "l'aménagement du territoire"],
  ["土地利用", "l'occupation du sol"],
  ["土地覆盖", "la couverture du sol"],
  ["城市形态", "la morphologie urbaine"],
  ["城市扩张", "l'étalement urbain"],
  ["城市更新", "le renouvellement urbain"],
  ["城市密度", "la densité urbaine"],
  ["人口密度", "la densité de population"],
  ["功能混合", "la mixité fonctionnelle"],
  ["社会混合", "la mixité sociale"],
  ["公共空间", "l'espace public"],
  ["绿色空间", "les espaces verts"],
  ["蓝绿基础设施", "les infrastructures bleues et vertes"],
  ["生态廊道", "le corridor écologique"],
  ["生态网络", "le réseau écologique"],
  ["生物多样性", "la biodiversité"],
  ["可持续发展", "le développement durable"],
  ["气候变化", "le changement climatique"],
  ["气候适应", "l'adaptation au changement climatique"],
  ["气候韧性", "la résilience climatique"],
  ["环境影响", "l'impact environnemental"],
  ["环境评价", "l'évaluation environnementale"],
  ["生态转型", "la transition écologique"],
  ["能源转型", "la transition énergétique"],
  ["碳中和", "la neutralité carbone"],
  ["温室气体", "les gaz à effet de serre"],
  ["空气污染", "la pollution atmosphérique"],
  ["水资源", "les ressources en eau"],
  ["雨水管理", "la gestion des eaux pluviales"],
  ["洪水风险", "le risque d'inondation"],
  ["自然风险", "les risques naturels"],
  ["土地人工化", "l'artificialisation des sols"],
  ["不透水表面", "les surfaces imperméables"],
  ["透水性", "la perméabilité"],
  ["地表温度", "la température de surface"],
  ["遥感", "la télédétection"],
  ["地理信息系统", "le système d'information géographique"],
  ["空间分析", "l'analyse spatiale"],
  ["空间分布", "la distribution spatiale"],
  ["研究区域", "la zone d'étude"],
  ["案例研究", "l'étude de cas"],
  ["研究方法", "la méthodologie"],
  ["文献综述", "la revue de littérature"],
  ["研究问题", "la problématique"],
  ["研究假设", "l'hypothèse de recherche"],
  ["研究结果", "les résultats de recherche"],
  ["讨论部分", "la discussion"],
  ["结论", "la conclusion"],
  ["论文", "le mémoire"],
  ["数据来源", "les sources de données"],
  ["定量分析", "l'analyse quantitative"],
  ["定性分析", "l'analyse qualitative"],
  ["统计分析", "l'analyse statistique"],
  ["空间尺度", "l'échelle spatiale"],
  ["时间尺度", "l'échelle temporelle"],
  ["城市治理", "la gouvernance urbaine"],
  ["公共政策", "les politiques publiques"],
  ["规划文件", "les documents d'urbanisme"],
  ["地方城市规划", "le plan local d'urbanisme"],
  ["总体规划", "le schéma directeur"],
  ["交通规划", "la planification des transports"],
  ["公共交通", "les transports en commun"],
  ["慢行交通", "les mobilités douces"],
  ["步行可达性", "l'accessibilité piétonne"],
  ["交通可达性", "l'accessibilité aux transports"],
  ["城市中心", "le centre-ville"],
  ["城市边缘", "la périphérie urbaine"],
  ["郊区", "la banlieue"],
  ["大都市", "la métropole"],
  ["请问洗手间在哪里", "Où sont les toilettes, s'il vous plaît"],
  ["我想喝咖啡", "je voudrais boire du café"],
  ["我想去巴黎", "je voudrais aller à Paris"],
  ["我叫", "je m'appelle"],
  ["你好", "bonjour"],
  ["您好", "bonjour"],
  ["谢谢", "merci"],
  ["不客气", "de rien"],
  ["对不起", "désolé"],
  ["再见", "au revoir"],
  ["法国", "la France"],
  ["法语", "le français"],
  ["中文", "le chinois"],
  ["中国", "la Chine"],
  ["巴黎", "Paris"],
  ["学校", "l'école"],
  ["大学", "l'université"],
  ["老师", "le professeur"],
  ["学生", "l'étudiant"],
  ["朋友", "un ami"],
  ["家", "la maison"],
  ["水", "de l'eau"],
  ["咖啡", "du café"],
  ["茶", "du thé"],
  ["面包", "du pain"],
  ["今天", "aujourd'hui"],
  ["明天", "demain"],
  ["昨天", "hier"],
  ["现在", "maintenant"],
  ["我", "je"],
  ["你", "tu"],
  ["他", "il"],
  ["她", "elle"],
  ["我们", "nous"],
  ["他们", "ils"],
  ["以及", "ainsi que"],
  ["因此", "par conséquent"],
  ["然而", "cependant"],
  ["此外", "en outre"],
  ["例如", "par exemple"],
  ["通过", "à travers"],
  ["基于", "sur la base de"],
  ["关于", "concernant"],
  ["之间", "entre"],
  ["影响", "influencer"],
  ["提高", "améliorer"],
  ["减少", "réduire"],
  ["增加", "augmenter"],
  ["分析", "analyser"],
  ["研究", "étudier"],
  ["表明", "montrer"],
  ["包括", "inclure"],
  ["和", "et"],
  ["与", "et"],
  ["是", "être"],
  ["有", "avoir"],
  ["去", "aller"],
  ["来", "venir"],
  ["吃", "manger"],
  ["喝", "boire"],
  ["想", "vouloir"],
  ["可以", "pouvoir"],
  ["喜欢", "aimer"],
  ["需要", "avoir besoin de"],
  ["在哪里", "où est"],
  ["多少", "combien"],
  ["为什么", "pourquoi"],
  ["请", "s'il vous plaît"],
  ["吗", ""]
].sort((a, b) => b[0].length - a[0].length);

const pinyinDictionary = [
  ["chengshi redao xiaoying", "城市热岛效应"],
  ["redao xiaoying", "热岛效应"],
  ["chengshi guihua", "城市规划"],
  ["kongjian guihua", "空间规划"],
  ["guotu guihua", "国土规划"],
  ["tudi liyong", "土地利用"],
  ["tudi fugai", "土地覆盖"],
  ["chengshi xingtai", "城市形态"],
  ["chengshi kuozhang", "城市扩张"],
  ["chengshi gengxin", "城市更新"],
  ["chengshi midu", "城市密度"],
  ["renkou midu", "人口密度"],
  ["gongneng hunhe", "功能混合"],
  ["shehui hunhe", "社会混合"],
  ["gonggong kongjian", "公共空间"],
  ["lvse kongjian", "绿色空间"],
  ["lanlv jichu sheshi", "蓝绿基础设施"],
  ["shengtai langdao", "生态廊道"],
  ["shengtai wangluo", "生态网络"],
  ["shengwu duoyangxing", "生物多样性"],
  ["kechixu fazhan", "可持续发展"],
  ["qihou bianhua", "气候变化"],
  ["qihou shiying", "气候适应"],
  ["qihou renxing", "气候韧性"],
  ["huanjing yingxiang", "环境影响"],
  ["huanjing pingjia", "环境评价"],
  ["shengtai zhuanxing", "生态转型"],
  ["nengyuan zhuanxing", "能源转型"],
  ["tan zhonghe", "碳中和"],
  ["wenshi qiti", "温室气体"],
  ["kongqi wuran", "空气污染"],
  ["shuiziyuan", "水资源"],
  ["yushui guanli", "雨水管理"],
  ["hongshui fengxian", "洪水风险"],
  ["ziran fengxian", "自然风险"],
  ["tudi rengonghua", "土地人工化"],
  ["butoushui biaomian", "不透水表面"],
  ["toushuixing", "透水性"],
  ["dibiao wendu", "地表温度"],
  ["yaogan", "遥感"],
  ["dili xinxi xitong", "地理信息系统"],
  ["gis", "地理信息系统"],
  ["kongjian fenxi", "空间分析"],
  ["kongjian fenbu", "空间分布"],
  ["yanjiu quyu", "研究区域"],
  ["anli yanjiu", "案例研究"],
  ["yanjiu fangfa", "研究方法"],
  ["wenxian zongshu", "文献综述"],
  ["yanjiu wenti", "研究问题"],
  ["yanjiu jiashe", "研究假设"],
  ["yanjiu jieguo", "研究结果"],
  ["taolun bufen", "讨论部分"],
  ["jielun", "结论"],
  ["lunwen", "论文"],
  ["shuju laiyuan", "数据来源"],
  ["dingliang fenxi", "定量分析"],
  ["dingxing fenxi", "定性分析"],
  ["tongji fenxi", "统计分析"],
  ["kongjian chidu", "空间尺度"],
  ["shijian chidu", "时间尺度"],
  ["chengshi zhili", "城市治理"],
  ["gonggong zhengce", "公共政策"],
  ["guihua wenjian", "规划文件"],
  ["difang chengshi guihua", "地方城市规划"],
  ["zongti guihua", "总体规划"],
  ["jiaotong guihua", "交通规划"],
  ["gonggong jiaotong", "公共交通"],
  ["manxing jiaotong", "慢行交通"],
  ["buxing keda xing", "步行可达性"],
  ["jiaotong keda xing", "交通可达性"],
  ["chengshi zhongxin", "城市中心"],
  ["chengshi bianyuan", "城市边缘"],
  ["jiaoqu", "郊区"],
  ["dadushi", "大都市"],
  ["qingwen xishoujian zai nali", "请问洗手间在哪里"],
  ["wo xiang he kafei", "我想喝咖啡"],
  ["wo xiang qu bali", "我想去巴黎"],
  ["wo jiao muchen", "我叫木晨"],
  ["nihao", "你好"],
  ["nin hao", "您好"],
  ["xiexie", "谢谢"],
  ["bu keqi", "不客气"],
  ["duibuqi", "对不起"],
  ["zaijian", "再见"],
  ["faguo", "法国"],
  ["fayu", "法语"],
  ["zhongwen", "中文"],
  ["zhongguo", "中国"],
  ["bali", "巴黎"],
  ["xuexiao", "学校"],
  ["daxue", "大学"],
  ["laoshi", "老师"],
  ["xuesheng", "学生"],
  ["pengyou", "朋友"],
  ["jia", "家"],
  ["shui", "水"],
  ["kafei", "咖啡"],
  ["cha", "茶"],
  ["mianbao", "面包"],
  ["jintian", "今天"],
  ["mingtian", "明天"],
  ["zuotian", "昨天"],
  ["xianzai", "现在"],
  ["wo", "我"],
  ["ni", "你"],
  ["ta", "他"],
  ["women", "我们"],
  ["tamen", "他们"],
  ["yiji", "以及"],
  ["yinci", "因此"],
  ["raner", "然而"],
  ["ciwai", "此外"],
  ["liru", "例如"],
  ["tongguo", "通过"],
  ["jiyu", "基于"],
  ["guanyu", "关于"],
  ["zhijian", "之间"],
  ["yingxiang", "影响"],
  ["tigao", "提高"],
  ["jianshao", "减少"],
  ["zengjia", "增加"],
  ["fenxi", "分析"],
  ["yanjiu", "研究"],
  ["biaoming", "表明"],
  ["baokuo", "包括"],
  ["he", "和"],
  ["yu", "与"],
  ["shi", "是"],
  ["you", "有"],
  ["qu", "去"],
  ["lai", "来"],
  ["chi", "吃"],
  ["he", "喝"],
  ["xiang", "想"],
  ["keyi", "可以"],
  ["xihuan", "喜欢"],
  ["xuyao", "需要"],
  ["zai nali", "在哪里"],
  ["duoshao", "多少"],
  ["weishenme", "为什么"],
  ["qing", "请"],
  ["ma", "吗"]
].sort((a, b) => b[0].length - a[0].length);

const punctuationMap = {
  "，": ", ",
  "。": ". ",
  "！": " ! ",
  "？": " ? ",
  "；": "; ",
  "：": " : ",
  "、": ", ",
  "\n": "\n"
};

const latinPunctuationMap = {
  ",": "，",
  ".": "。",
  "!": "！",
  "?": "？",
  ";": "；",
  ":": "：",
  "\n": "\n"
};

const sourceInput = document.querySelector("#sourceInput");
const translationOutput = document.querySelector("#translationOutput");
const candidates = document.querySelector("#candidates");
const matchCount = document.querySelector("#matchCount");
const copyButton = document.querySelector("#copyButton");
const clearButton = document.querySelector("#clearButton");
const chinesePreview = document.querySelector("#chinesePreview");
const pinyinMode = document.querySelector("#pinyinMode");

function normalizePinyin(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/v/g, "u")
    .replace(/\s+/g, " ")
    .trim();
}

function inputLooksLikePinyin(value) {
  return /[a-zA-Z]/.test(value) && !/[\u3400-\u9fff]/.test(value);
}

function pinyinToChinese(text) {
  const normalized = normalizePinyin(text);
  let index = 0;
  const tokens = [];

  while (index < normalized.length) {
    const char = normalized[index];

    if (latinPunctuationMap[char]) {
      tokens.push(latinPunctuationMap[char]);
      index += 1;
      continue;
    }

    if (/\s/.test(char)) {
      index += 1;
      continue;
    }

    const found = pinyinDictionary.find(([py]) => {
      if (!normalized.startsWith(py, index)) return false;
      const next = normalized[index + py.length];
      return !next || /\s|[,.;:!?]/.test(next);
    });

    if (found) {
      tokens.push(found[1]);
      index += found[0].length;
      continue;
    }

    const nextSpace = normalized.slice(index).search(/\s|[,.;:!?]/);
    const end = nextSpace === -1 ? normalized.length : index + nextSpace;
    tokens.push(normalized.slice(index, end));
    index = end;
  }

  return tokens.join("");
}

function translate(text) {
  let index = 0;
  const tokens = [];
  const matches = [];

  while (index < text.length) {
    const char = text[index];

    if (punctuationMap[char]) {
      tokens.push(punctuationMap[char]);
      index += 1;
      continue;
    }

    if (/\s/.test(char)) {
      tokens.push(char);
      index += 1;
      continue;
    }

    const found = dictionary.find(([zh]) => text.startsWith(zh, index));
    if (found) {
      const [zh, fr] = found;
      if (fr) {
        tokens.push(fr);
        matches.push(found);
      }
      index += zh.length;
      continue;
    }

    tokens.push(char);
    index += 1;
  }

  return {
    text: polishFrench(tokens.join(" ")),
    matches: uniqueMatches(matches)
  };
}

function polishFrench(text) {
  const cleaned = text
    .replace(/\s+/g, " ")
    .replace(/\s+\n\s+/g, "\n")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\s+([!?])/g, " $1")
    .replace(/([,.;:!?])(?=\S)/g, "$1 ")
    .replace(/\s+'/g, "'")
    .trim();

  return cleaned.replace(/(^|[.!?]\s+)([a-zàâçéèêëîïôûùüÿñæœ])/g, (match, prefix, letter) => {
    return prefix + letter.toUpperCase();
  });
}

function uniqueMatches(matches) {
  const seen = new Set();
  return matches.filter(([zh]) => {
    if (seen.has(zh)) return false;
    seen.add(zh);
    return true;
  });
}

function render() {
  const source = sourceInput.value.trim();
  const fallback = "nihao wo xiang he kafei xiexie";
  const rawInput = source || fallback;
  const chineseText = inputLooksLikePinyin(rawInput) ? pinyinToChinese(rawInput) : rawInput;
  const result = translate(chineseText);

  chinesePreview.textContent = chineseText;
  pinyinMode.textContent = inputLooksLikePinyin(rawInput) ? "拼音转中文" : "中文直译";
  translationOutput.textContent = result.text;
  matchCount.textContent = `${result.matches.length} 个匹配`;
  candidates.innerHTML = "";

  result.matches.forEach(([zh, fr]) => {
    const button = document.createElement("button");
    button.className = "candidate";
    button.type = "button";
    button.innerHTML = `<strong>${escapeHtml(zh)}</strong><span>${escapeHtml(fr)}</span>`;
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(fr);
      button.querySelector("span").textContent = "已复制";
      window.setTimeout(() => {
        button.querySelector("span").textContent = fr;
      }, 900);
    });
    candidates.append(button);
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

sourceInput.addEventListener("input", render);

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(translationOutput.textContent);
  copyButton.textContent = "已复制";
  window.setTimeout(() => {
    copyButton.textContent = "复制";
  }, 1100);
});

clearButton.addEventListener("click", () => {
  sourceInput.value = "";
  sourceInput.focus();
  render();
});

document.querySelectorAll(".quick-chip").forEach((button) => {
  button.addEventListener("click", () => {
    sourceInput.value = button.dataset.example;
    sourceInput.focus();
    render();
  });
});

render();
