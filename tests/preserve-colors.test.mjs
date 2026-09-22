import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFragment } from 'parse5';
import { preserveColors } from '../dist/preserve-colors.js';
import { convertToJuyaH5 } from '../dist/index.js';

test('only inserts attributes; does not rewrite styles, comments, raw text or escaped code', () => {
  const html = '<section style="color:#795548;background:#faf9f5" title="a > b data-no-dark">'
    + '<!-- <i>comment</i> --><code>&lt;b&gt;</code>'
    + '<script>const x="<b>";</script><textarea><b>text</textarea>'
    + '<span DATA-NO-DARK="yes">kept</span><template><b>template</b></template><img src="x"/></section>';
  const result = preserveColors(html);
  assert.equal(result.replace(/(<[^\s/>]+) data-no-dark(?=[\s/>])/g, '$1'), html);
  assert.ok(result.includes('<span DATA-NO-DARK="yes">'));
  assert.ok(result.includes('<template data-no-dark><b data-no-dark>'));
  assert.ok(result.includes('<script data-no-dark>const x="<b>";</script>'));
  assert.equal(preserveColors(result), result);
});

test('protects backgrounds and all descendants across renderers, and counts final bytes', () => {
  const markdown = '# 标题\n\n## 卡片 `#1`\n\n### 分节\n\n正文 **强调** 和 `标签`\n\n- `#1` 列表\n\n> 摘要\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n```html\n<span>code</span>\n```\n\n![图](https://example.com/a.png)';
  const {html, sizeKB} = convertToJuyaH5(markdown);
  const pending = [parseFragment(html, { sourceCodeLocationInfo: true })];
  while (pending.length) {
    const node = pending.pop();
    if (node.tagName && node.sourceCodeLocation?.startTag) assert.ok(node.attrs.some(a => a.name === 'data-no-dark'), node.tagName);
    if (node.childNodes) pending.push(...node.childNodes);
  }
  assert.equal(sizeKB, Math.round(Buffer.byteLength(html) / 1024 * 100) / 100);
  assert.ok(html.includes('rgb(250, 249, 245)'));
  assert.ok(html.includes('rgb(240, 238, 230)'));
  assert.ok(html.includes('color: #795548'));
});
