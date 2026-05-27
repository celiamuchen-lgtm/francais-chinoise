# 中文转法语输入法

用中文直接输出法语。

一个静态网页原型：输入拼音或中文，先得到中文预览，再实时输出法语表达，并显示可复制的候选词。

## 使用方法

直接打开 `index.html` 即可运行。

可以输入拼音：

```text
nihao wo xiang qu bali xiexie
```

输出：

```text
你好我想去巴黎谢谢
Bonjour je voudrais aller à Paris merci
```

## 当前能力

- 拼音转中文，例如 `wo xiang qu bali` -> `我想去巴黎`
- 中文短语优先匹配，例如“请问洗手间在哪里”
- 地理与规划论文词汇，例如“热岛效应” -> `l'îlot de chaleur`
- GIS 与环境词汇，例如“地表温度” -> `la température de surface`
- 常用词词典匹配
- 中文标点转换为法语排版标点
- 一键复制完整法语结果
- 点击候选词复制单个法语表达

## Windows 输入法路线

真正的 Windows 输入法需要开发 TSF(Text Services Framework) 组件，不能只靠网页完成。推荐分三步做：

1. 把 `app.js` 里的拼音转中文、中文转法语逻辑抽成独立核心库。
2. 用 C++/WinRT 或 C# + TSF 框架做 Windows 输入法外壳。
3. 输入流程变成：键盘拼音 -> 中文候选 -> 选中中文 -> 输出法语。

## 下一步开发

- 增加更大的中法词库
- 增加拼音候选词排序，例如 `shi` 可选“是 / 时 / 市”
- 接入翻译 API
- 做成 Windows TSF 输入法安装包
