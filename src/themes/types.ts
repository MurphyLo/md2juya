/**
 * 主题只描述颜色与字体；间距、圆角等版式由 createStyles 固定。
 * 值直接写入内联 style，须是微信正文可用的 CSS 颜色/字体字面量。
 */
export interface ThemeTokens {
  name: string;
  font: {
    body: string;
    mono: string;
  };
  color: {
    pageBg: string;      // 正文容器底色
    text: string;        // 列表、表格正文
    body: string;        // 段落、引用、h2 文字
    strong: string;      // 加粗
    accent: string;      // h1、编号标签、h3 竖线
    headingText?: string; // 深色标题块与表头文字；省略时沿用正文色
    h2Bg: string;        // h2 卡片与表头底色
    h2Rule: string;      // h2 底线
    card: string;        // 引用、表格、标签底色
    rowAlt: string;      // 表格偶数行
    border: string;      // 标签、表格边框
    borderSoft: string;  // 引用、代码块边框
    codeText: string;    // 正文内联代码文字
    codeBg: string;      // 正文内联代码底色
    sectionText: string; // h3 文字
    sectionRule: string; // h3 右侧横线
    hr: string;          // 分割线
    preText: string;     // 代码块文字
    preBg: string;       // 代码块底色
  };
}
