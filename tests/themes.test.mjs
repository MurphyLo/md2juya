import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { parseFragment } from 'parse5';
import {
  convertToJuyaH5, JuyaH5Maker, JuyaStyles, createStyles, listThemes, resolveTheme, juya
} from '../dist/index.js';

// 快照为默认主题的逐字节输出；有意改动版式后用 UPDATE_SNAPSHOTS=1 重新生成
const fixtures = {
  example: new URL('../example.md', import.meta.url),
  elements: new URL('./fixtures/elements.md', import.meta.url)
};
const read = url => readFileSync(url, 'utf8');
const snapshotUrl = name => new URL(`./fixtures/${name}.juya.snap`, import.meta.url);

test('default theme output is byte-identical to snapshots', () => {
  for (const [name, url] of Object.entries(fixtures)) {
    const markdown = read(url);
    const { html } = convertToJuyaH5(markdown);
    if (process.env.UPDATE_SNAPSHOTS) writeFileSync(snapshotUrl(name), html);
    assert.equal(html, read(snapshotUrl(name)), name);
    assert.equal(convertToJuyaH5(markdown, { theme: 'juya' }).html, html, name);
    assert.equal(new JuyaH5Maker().convert(markdown).html, html, name);
  }
});

test('JuyaStyles export stays equal to the juya theme', () => {
  assert.deepEqual(JuyaStyles, createStyles(juya));
});

test('porcelain leaks no juya-specific colors', () => {
  const { html } = convertToJuyaH5(read(fixtures.elements), { theme: 'porcelain' });
  for (const color of [
    '201, 100, 66', '250, 249, 245', '160, 249, 176', '240, 238, 230', '253, 252, 250',
    '248, 247, 242', '209, 207, 204', '218, 216, 212', '92, 22, 22', '240, 239, 235',
    '20, 20, 19', '31, 12, 3', '184, 184, 184', '#795548', '#e3dfd5', '#c96442'
  ]) {
    assert.ok(!html.includes(color), color);
  }
  assert.ok(html.includes('#0d74ce'));
});

test('alternating makers with different themes do not affect each other', () => {
  const markdown = read(fixtures.elements);
  const expected = Object.fromEntries(listThemes().map(t => [t, convertToJuyaH5(markdown, { theme: t }).html]));
  const makers = listThemes().map(t => [t, new JuyaH5Maker({ theme: t })]);
  for (let round = 0; round < 2; round++) {
    for (const [t, maker] of makers) assert.equal(maker.convert(markdown).html, expected[t], t);
  }
  assert.notEqual(expected.juya, expected.porcelain);
});

test('accepts custom theme objects and rejects unknown names', () => {
  assert.deepEqual(listThemes(), ['juya', 'porcelain', 'enji']);
  const custom = { ...juya, name: 'custom', color: { ...juya.color, accent: '#123456' } };
  assert.equal(resolveTheme(custom), custom);
  assert.ok(convertToJuyaH5('# 标题', { theme: custom }).html.includes('color: #123456'));
  for (const name of ['nope', 'constructor', '__proto__', 'toString']) {
    assert.throws(() => convertToJuyaH5('# 标题', { theme: name }), /未知主题.*juya, porcelain, enji/);
  }
});

test('every theme marks all explicit elements with data-no-dark', () => {
  const markdown = read(fixtures.elements);
  for (const theme of listThemes()) {
    const { html } = convertToJuyaH5(markdown, { theme });
    const pending = [parseFragment(html, { sourceCodeLocationInfo: true })];
    while (pending.length) {
      const node = pending.pop();
      if (node.tagName && node.sourceCodeLocation?.startTag) {
        assert.ok(node.attrs.some(a => a.name === 'data-no-dark'), `${theme}: ${node.tagName}`);
      }
      if (node.childNodes) pending.push(...node.childNodes);
    }
  }
});
