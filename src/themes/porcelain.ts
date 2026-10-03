import type { ThemeTokens } from './types.js';
import { juya } from './juya.js';

/** 瓷白墨蓝主题。配色来源与角色映射见 README；hex 用于微信正文兼容。 */
export const porcelain: ThemeTokens = {
  name: 'porcelain',
  font: { ...juya.font },
  color: {
    pageBg: '#fcfcfd',
    text: '#1c2024',
    body: '#1c2024',
    strong: '#113264',
    accent: '#0d74ce',
    h2Bg: '#f0f0f3',
    h2Rule: '#8ec8f6',
    card: '#f9f9fb',
    rowAlt: '#f0f0f3',
    border: '#d9d9e0',
    borderSoft: '#e0e1e6',
    codeText: '#113264',
    codeBg: '#e6f4fe',
    sectionText: '#113264',
    sectionRule: '#d9d9e0',
    hr: '#cdced6',
    preText: '#1c2024',
    preBg: '#f9f9fb'
  }
};
