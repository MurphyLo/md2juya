import { readFileSync, writeFileSync } from 'node:fs';
import { convertToJuyaH5, listThemes, resolveTheme } from '../../dist/index.js';
import { nipponSamples } from './nippon-samples.mjs';

const themes = [
  ...listThemes().map(name => ({ name, theme: name })),
  ...nipponSamples.map(theme => ({ name: theme.name, theme }))
];
const markdown = readFileSync(new URL('./sample.md', import.meta.url), 'utf8');
const css = `body{margin:0;padding:24px;background:#e9eaec;color:#20242a;font:14px system-ui}h1{font-size:22px}main{display:flex;gap:24px;align-items:flex-start;overflow-x:auto;padding-bottom:20px}article{flex:0 0 390px;min-width:0}header{padding-bottom:18px}header h2{font-size:17px}.preview{border:1px solid #d9d9e0;border-radius:8px;overflow:hidden}.swatches{display:flex;gap:12px}.swatches span{font:11px monospace}.swatches i{display:block;height:24px;border:1px solid #ccc;border-radius:4px;margin-bottom:5px}a{color:#275a8c}.single{max-width:390px;margin:auto}@media(max-width:440px){body{padding:12px}.single{width:100%}}`;
const document = (title, body) => `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>${css}</style></head><body>${body}</body></html>`;
const panels = themes.map(({ name, theme }) => {
  const color = resolveTheme(theme).color;
  const { html } = convertToJuyaH5(markdown, { theme });
  const title = name;
  const header = `<header><h2><a href="${name}.html">${title}</a></h2><div class="swatches">${[color.pageBg, color.h2Bg, color.accent, color.strong].map(c => `<span><i style="background:${c}"></i>${c}</span>`).join('')}</div></header>`;
  writeFileSync(new URL(`./${name}.html`, import.meta.url), document(title, `<div class="single"><p><a href="index.html">← 全部主题</a></p>${header}<div class="preview">${html}</div></div>`));
  return `<article>${header}<div class="preview">${html}</div></article>`;
});
writeFileSync(new URL('./index.html', import.meta.url), document('主题同文对照', `<h1>主题同文对照</h1><p>${themes.length} 套主题，相同正文、每栏 390px；横向滚动比较，点击名称查看单独样板。</p><main>${panels.join('')}</main>`));
console.log(new URL('./index.html', import.meta.url).pathname);
