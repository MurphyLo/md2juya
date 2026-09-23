import { parseFragment, type DefaultTreeAdapterMap } from 'parse5';

/**
 * 微信 data-no-dark 不向后代继承，逐个保护正文元素。
 * 按源码位置补充属性，不序列化 DOM；原文链接仅补齐缺省颜色。
 */
export function preserveColors(html: string): string {
  const root = parseFragment(html, { sourceCodeLocationInfo: true });
  const offsets = new Set<number>();
  const additions: { offset: number; text: string }[] = [];
  const pending: DefaultTreeAdapterMap['node'][] = [root];
  while (pending.length) {
    const node = pending.pop()!;
    if ('tagName' in node) {
      const start = node.sourceCodeLocation?.startTag?.startOffset;
      if (start !== undefined && !node.attrs.some(attr => attr.name === 'data-no-dark')) {
        const tag = /^<[^\s/>]+/.exec(html.slice(start));
        if (tag) offsets.add(start + tag[0].length);
      }
      // “查看原文”原先使用微信 --weui-LINK，变量会随主题变色。
      // 只为未定义颜色的原文链接补上实际浅色值，不覆盖作者已有配色。
      if (node.tagName === 'a' && node.childNodes.length === 1 &&
          node.childNodes[0]?.nodeName === '#text' &&
          'value' in node.childNodes[0] && node.childNodes[0].value.trim() === '查看原文') {
        const style = node.attrs.find(attr => attr.name === 'style');
        if (!style || !/(?:^|;)\s*color\s*:/i.test(style.value)) {
          const location = node.sourceCodeLocation?.attrs?.style;
          if (location) {
            const source = html.slice(location.startOffset, location.endOffset);
            const prefix = /^style\s*=\s*(["'])/i.exec(source);
            if (prefix) additions.push({ offset: location.startOffset + prefix[0].length,
              text: 'color: #576b95; ' });
          } else if (!style && start !== undefined) {
            const tag = /^<[^\s/>]+/.exec(html.slice(start));
            if (tag) additions.push({ offset: start + tag[0].length, text: ' style="color: #576b95;"' });
          }
        }
      }
      if (node.tagName === 'template' && 'content' in node) pending.push(node.content);
    }
    if ('childNodes' in node) pending.push(...node.childNodes);
  }
  // 从后向前插入，避免前面的源码位置偏移。
  additions.push(...[...offsets].map(offset => ({ offset, text: ' data-no-dark' })));
  for (const { offset, text } of additions.sort((a, b) => b.offset - a.offset)) {
    html = html.slice(0, offset) + text + html.slice(offset);
  }
  return html;
}
