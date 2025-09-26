import { marked } from 'marked';
import { JuyaStyles } from './styles.js';

/**
 * Juya AI日报H5版式制作器
 * 直接的数据驱动渲染，无复杂抽象层
 */
export class JuyaH5Maker {
  private inlineContext: 'default' | 'plain' = 'default';
  
  constructor() {
    this.setupMarkedRenderer();
  }

  /**
   * 配置marked渲染器，直接映射到微信样式
   */
  private setupMarkedRenderer(): void {
    const renderer = new marked.Renderer();
    
    // H1标题渲染
    renderer.heading = ({ tokens, depth }: any) => {
      const text = this.withInlineContext('default', () => this.parseTokens(tokens));
      if (depth === 1) {
        return `<h1 style="${JuyaStyles.h1.style}">
          <span style="display: none;"></span>
          <span style="${JuyaStyles.h1.span}">${text}</span>
          <span style="display: none;"></span>
        </h1>`;
      }
      
      if (depth === 2) {
        return `<h2 style="${JuyaStyles.h2.style}">
          <span style="display: none;"></span>
          <span style="${JuyaStyles.h2.span}">${text}</span>
          <span style="display: none;"></span>
        </h2>`;
      }
      
      return `<h${depth}>${text}</h${depth}>`;
    };

    // 段落渲染
    renderer.paragraph = ({ tokens }: any) => {
      if (tokens && tokens.length === 1 && tokens[0].type === 'image') {
        return this.renderImage(tokens[0]);
      }
      const text = this.withInlineContext('plain', () => this.parseTokens(tokens));
      return `<p style="${JuyaStyles.p.style}">${text}</p>`;
    };

    // 列表渲染
    renderer.list = ({ items }: any) => {
      const body = items.map((item: any) => this.renderListItem(item)).join('');
      return `<ul class="${JuyaStyles.ul.className}" style="${JuyaStyles.ul.style}">${body}</ul>`;
    };

    // 引用块渲染
    renderer.blockquote = ({ tokens }: any) => {
      // 获取原始文本内容
      const rawText = tokens.map((token: any) => token.raw || token.text || '').join('');
      // 重新解析这个文本以确保markdown被正确处理
      let parsedContent = this.withInlineContext('plain', () => marked.parseInline(rawText) as string);
      // 移除多余的换行和空格，保持紧凑格式
      parsedContent = this.compactHTML(parsedContent);
      
      return `<blockquote style="${JuyaStyles.blockquote.style}">
        <p style="${JuyaStyles.blockquote.p}">${parsedContent}</p>
      </blockquote>`;
    };

    // 代码块渲染
    renderer.code = ({ text }: any) => {
      return `<pre style="${JuyaStyles.pre.style}"><code style="${JuyaStyles.pre.code}"><span leaf="">${this.escapeHtml(text)}</span></code></pre>`;
    };

    // 内联代码渲染
    renderer.codespan = ({ text }: any) => {
      return this.renderInlineCode({ text });
    };

    // 图片渲染
    renderer.image = ({ href, title, text }: any) => {
      return `<figure style="${JuyaStyles.figure.style}">
        <img style="${JuyaStyles.figure.img}" src="${href}" alt="${text}" ${title ? `title="${title}"` : ''} />
      </figure>`;
    };

    // 水平分割线渲染
    renderer.hr = () => {
      return `<hr style="${JuyaStyles.hr.style}" />`;
    };

    // 强调文本渲染
    renderer.strong = ({ tokens }: any) => {
      const text = this.parseTokens(tokens);
      return `<strong style="${JuyaStyles.strong.style}">${text}</strong>`;
    };

               // 表格渲染
           renderer.table = ({ header, rows }: any) => {
             const headerRow = this.renderTableHeader(header);
             const bodyRows = rows.map((row: any, index: number) => this.renderTableRow(row, index)).join('');
             
             return `<section data-tool="mdnice编辑器" style="${JuyaStyles.tableContainer.style}">
               <table style="${JuyaStyles.table.style}">
                 <thead>
                   ${headerRow}
                 </thead>
                 ${bodyRows}
               </table>
             </section>`;
           };

    marked.setOptions({ renderer });
  }

  /**
   * 解析tokens为文本
   */
  private parseTokens(tokens: any[]): string {
    return tokens.map((token: any) => {
      if (token.type === 'image') {
        return this.renderImage(token);
      }
      if (token.type === 'codespan') {
        return this.renderInlineCode(token);
      }
      if (token.type === 'strong') {
        return this.renderStrong(token);
      }
      if (token.type === 'text') {
        if (token.tokens && token.tokens.length) {
          return this.parseTokens(token.tokens);
        }
        return token.raw || token.text || '';
      }
      if (token.type === 'html') {
        return token.raw || token.text || '';
      }
      if (token.type === 'paragraph') {
        if (token.tokens && token.tokens.length === 1 && token.tokens[0].type === 'image') {
          return this.renderImage(token.tokens[0]);
        }
        return this.withInlineContext('plain', () => this.parseTokens(token.tokens || []));
      }
      return marked.parseInline(token.raw || token.text || '') as string;
    }).join('');
  }

  /**
   * 渲染图片token
   */
  private renderImage(token: any): string {
    if (token.type === 'paragraph') {
      const imageToken = (token.tokens || []).find((t: any) => t.type === 'image');
      if (imageToken) {
        return this.renderImage(imageToken);
      }
    }
    return `<figure style="${JuyaStyles.figure.style}">
      <img style="${JuyaStyles.figure.img}" src="${token.href}" alt="${token.text}" ${token.title ? `title="${token.title}"` : ''} />
    </figure>`;
  }

  /**
   * 渲染内联代码token
   */
  private renderInlineCode(token: any): string {
    const style = this.inlineContext === 'plain'
      ? JuyaStyles.inlineCodePlain.style
      : JuyaStyles.inlineCode.style;
    return `<code style="${style}">${this.escapeHtml(token.text)}</code>`;
  }

  /**
   * 渲染强调文本token
   */
  private renderStrong(token: any): string {
    const text = token.tokens ? this.parseTokens(token.tokens) : token.text;
    return `<strong style="${JuyaStyles.strong.style}">${text}</strong>`;
  }

  /**
   * 渲染列表项
   */
  private renderListItem(item: any): string {
    const parsedText = this.withInlineContext('default', () => this.parseTokens(this.normalizeListItemTokens(item.tokens || [])));
    const compacted = this.compactHTML(parsedText);

    return `<li style="${JuyaStyles.li.style}"><section>${compacted}</section></li>`;
  }

  private normalizeListItemTokens(tokens: any[]): any[] {
    if (tokens.length === 1 && tokens[0].type === 'text' && tokens[0].tokens && tokens[0].tokens.length) {
      return tokens[0].tokens;
    }
    return tokens;
  }

  private withInlineContext<T>(context: 'default' | 'plain', fn: () => T): T {
    const previous = this.inlineContext;
    this.inlineContext = context;
    try {
      return fn();
    } finally {
      this.inlineContext = previous;
    }
  }

  /**
   * 紧凑化HTML（保持内容结构不变）
   */
  private compactHTML(html: string): string {
    return html.trim();
  }

  /**
   * 计算字符串的UTF-8字节大小并转换为KB
   */
  private calculateSizeKB(str: string): number {
    const bytes = new TextEncoder().encode(str).length;
    return Math.round((bytes / 1024) * 100) / 100; // 保留2位小数
  }

  /**
   * 转换Markdown为微信H5格式HTML
   * @param markdown - Markdown源码  
   * @returns 包含HTML内容和KB大小的对象（HTML内容符合微信接口content字段要求）
   */
  convert(markdown: string): { html: string; sizeKB: number } {
    const rawHtml = marked.parse(markdown) as string;
    
    // 包装在标准容器中，添加必要的标识
    const html = `<div class="${JuyaStyles.container.className}" style="${JuyaStyles.container.style}">
      <section ${JuyaStyles.container.dataAttr} style="${JuyaStyles.container.innerStyle}">
        ${rawHtml}
      </section>
    </div>`.trim();
    
    const sizeKB = this.calculateSizeKB(html);
    
    return { html, sizeKB };
  }


  /**
   * HTML转义
   */
  private escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m] || m);
  }

           /**
          * 渲染表格头部
          */
         private renderTableHeader(header: any[]): string {
           const cells = header.map(cell => {
             const cellContent = cell.tokens
               ? this.withInlineContext('plain', () => this.parseTokens(cell.tokens))
               : this.escapeHtml(cell.text ?? '');
             return `<th style="${JuyaStyles.th.style}">
               <section>
                 <span leaf="">${cellContent}</span>
               </section>
             </th>`;
           }).join('');
           
           return `<tr>${cells}</tr>`;
         }

  /**
   * 渲染表格行
   */
  private renderTableRow(row: any[], index: number): string {
    const isEven = index % 2 === 1; // 因为header算第0行，所以从1开始为偶数行
    const rowStyle = isEven ? JuyaStyles.trEven.style : JuyaStyles.trOdd.style;
    
    const cells = row.map(cell => {
      const cellContent = cell.tokens
        ? this.withInlineContext('plain', () => this.parseTokens(cell.tokens))
        : this.escapeHtml(cell.text ?? '');
      return `<td style="${JuyaStyles.td.style}">
        <section>
          <span leaf="">${cellContent}</span>
        </section>
      </td>`;
    }).join('');
    
    return `<tr style="${rowStyle}">${cells}</tr>`;
  }
}

export function convertToJuyaH5(markdown: string): { html: string; sizeKB: number } {
  const maker = new JuyaH5Maker();
  return maker.convert(markdown);
}
