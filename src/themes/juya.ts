import type { ThemeTokens } from './types.js';

/** 默认主题：从原始橘鸦日报微信 HTML 提取的暖色配色 */
export const juya: ThemeTokens = {
  name: 'juya',
  font: {
    body: 'Optima, "Microsoft YaHei", PingFangSC-regular, serif',
    mono: 'Operator Mono, Consolas, Monaco, Menlo, monospace'
  },
  color: {
    pageBg: 'rgb(250, 249, 245)',
    text: 'rgb(0, 0, 0)',
    body: 'rgb(20, 20, 19)',
    strong: 'rgb(31, 12, 3)',
    accent: 'rgb(201, 100, 66)',
    h2Bg: 'rgb(240, 238, 230)',
    h2Rule: 'rgb(160, 249, 176)',
    card: 'rgb(253, 252, 250)',
    rowAlt: 'rgb(248, 247, 242)',
    border: 'rgb(209, 207, 204)',
    borderSoft: 'rgb(218, 216, 212)',
    codeText: 'rgb(92, 22, 22)',
    codeBg: 'rgb(240, 239, 235)',
    sectionText: '#795548',
    sectionRule: '#e3dfd5',
    hr: 'rgb(184, 184, 184)',
    preText: 'rgb(56, 58, 66)',
    preBg: 'rgb(255, 255, 255)'
  }
};
