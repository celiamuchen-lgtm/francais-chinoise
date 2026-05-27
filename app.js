const dictionary = [
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
