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

const sourceInput = document.querySelector("#sourceInput");
const translationOutput = document.querySelector("#translationOutput");
const candidates = document.querySelector("#candidates");
const matchCount = document.querySelector("#matchCount");
const copyButton = document.querySelector("#copyButton");
const clearButton = document.querySelector("#clearButton");

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
  const result = translate(source || "你好，我想喝咖啡。谢谢！");

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
