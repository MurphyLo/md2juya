import { parseFragment, type DefaultTreeAdapterMap } from 'parse5';

/**
 * 微信 data-no-dark 不向后代继承，逐个保护正文元素。
 * 仅按解析器给出的源码位置插入属性，不序列化 DOM，不改动既有样式。
 */
export function preserveColors(html: string): string {
  const root = parseFragment(html, { sourceCodeLocationInfo: true });
  const offsets = new Set<number>();
  const pending: DefaultTreeAdapterMap['node'][] = [root];
  while (pending.length) {
    const node = pending.pop()!;
    if ('tagName' in node) {
      const start = node.sourceCodeLocation?.startTag?.startOffset;
      if (start !== undefined && !node.attrs.some(attr => attr.name === 'data-no-dark')) {
        const tag = /^<[^\s/>]+/.exec(html.slice(start));
        if (tag) offsets.add(start + tag[0].length);
      }
      if (node.tagName === 'template' && 'content' in node) pending.push(node.content);
    }
    if ('childNodes' in node) pending.push(...node.childNodes);
  }
  // 从后向前插入，避免前面的源码位置偏移。
  for (const offset of [...offsets].sort((a, b) => b - a)) {
    html = html.slice(0, offset) + ' data-no-dark' + html.slice(offset);
  }
  return html;
}
