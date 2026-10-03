import type { ThemeTokens } from './types.js';
import { juya } from './juya.js';
import { porcelain } from './porcelain.js';
import { enji } from './enji.js';

export type { ThemeTokens } from './types.js';
export { juya, porcelain, enji };

const themes: Record<string, ThemeTokens> = { juya, porcelain, enji };

export function listThemes(): string[] {
  return Object.keys(themes);
}

/** 按名称查找内置主题；传入对象时视为自定义主题原样返回 */
export function resolveTheme(theme: string | ThemeTokens = 'juya'): ThemeTokens {
  if (typeof theme !== 'string') return theme;
  const found = Object.hasOwn(themes, theme) ? themes[theme] : undefined;
  if (!found) {
    throw new Error(`未知主题 "${theme}"，可用主题：${listThemes().join(', ')}`);
  }
  return found;
}
