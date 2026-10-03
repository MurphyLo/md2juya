import type { ThemeTokens } from './types.js';
import { juya } from './juya.js';

/** 标题红取自 NIPPON COLORS 的 #9F353A，其余配套色见 README。 */
export const enji: ThemeTokens = {
  name: 'enji',
  font: { ...juya.font },
  color: {
    pageBg: '#fbf6f6',
    text: '#3d292b',
    body: '#3d292b',
    strong: '#55252b',
    accent: '#8e354a',
    headingText: '#fff8f7',
    h2Bg: '#9f353a',
    h2Rule: '#8e354a',
    card: '#f7f2f1',
    rowAlt: '#f1ebea',
    border: '#d0aaad',
    borderSoft: '#dfc5c6',
    codeText: '#6f3038',
    codeBg: '#ecd9da',
    sectionText: '#713844',
    sectionRule: '#d0aaad',
    hr: '#b98288',
    preText: '#402a2d',
    preBg: '#f2e4e3'
  }
};
