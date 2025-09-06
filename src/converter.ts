import { marked } from 'marked';
import { JuyaStyles } from './styles.js';

/**
 * Juya AI日报H5版式制作器
 * 直接的数据驱动渲染，无复杂抽象层
 */
export class JuyaH5Maker {
  private listItemCounter = 0;
  
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
      const text = this.parseTokens(tokens);
      if (depth === 1) {
        return `<h1 style="${JuyaStyles.h1.style}">
          <span style="display: none;"></span>
          <span style="${JuyaStyles.h1.span}">
            <span leaf="">${text}</span>
          </span>
          <span style="display: none;"></span>
        </h1>`;
      }
      
      if (depth === 2) {
        const match = text.match(/^(.*?)\s*#(\d+)$/);
        const title = match ? match[1]?.trim() : text;
        const tagNum = match ? match[2] : '';
        
        return `<h2 style="${JuyaStyles.h2.style}">
          <span style="display: none;"></span>
          <span style="${JuyaStyles.h2.span}">
            <span leaf="">${title}</span>
            ${tagNum ? `<code style="${JuyaStyles.h2.tag}">
              <span leaf="">#${tagNum}</span>
            </code>` : ''}
          </span>
          <span style="display: none;"></span>
        </h2>`;
      }
      
      return `<h${depth}>${text}</h${depth}>`;
    };

    // 段落渲染
    renderer.paragraph = ({ tokens }: any) => {
      const text = this.parseTokens(tokens);
      return `<p style="${JuyaStyles.p.style}">
        <span leaf="">${text}</span>
      </p>`;
    };

    // 列表渲染
    renderer.list = ({ items }: any) => {
      this.listItemCounter = 0;
      const body = items.map((item: any) => this.renderListItem(item)).join('');
      return `<ul class="${JuyaStyles.ul.className}" style="${JuyaStyles.ul.style}">
        ${body}
      </ul>`;
    };

    // 引用块渲染
    renderer.blockquote = ({ tokens }: any) => {
      // 获取原始文本内容
      const rawText = tokens.map((token: any) => token.raw || token.text || '').join('');
      // 重新解析这个文本以确保markdown被正确处理
      let parsedContent = marked.parseInline(rawText) as string;
      // 移除多余的换行和空格，保持紧凑格式
      parsedContent = this.compactHTML(parsedContent);
      
      return `<blockquote style="${JuyaStyles.blockquote.style}">
        <span style="display: none;"></span>
        <p style="${JuyaStyles.blockquote.p}">
          ${parsedContent}
        </p>
      </blockquote>`;
    };

    // 代码块渲染
    renderer.code = ({ text }: any) => {
      return `<pre style="${JuyaStyles.pre.style}"><code style="${JuyaStyles.pre.code}"><span leaf="">${this.escapeHtml(text)}</span></code></pre>`;
    };

    // 内联代码渲染
    renderer.codespan = ({ text }: any) => {
      return `<code style="${JuyaStyles.inlineCode.style}">
        <span leaf="">${this.escapeHtml(text)}</span>
      </code>`;
    };

    // 图片渲染
    renderer.image = ({ href, title, text }: any) => {
      return `<figure style="${JuyaStyles.figure.style}">
        <span leaf="">
          <img style="${JuyaStyles.figure.img}" src="${href}" alt="${text}" ${title ? `title="${title}"` : ''} />
        </span>
      </figure>`;
    };

    // 水平分割线渲染
    renderer.hr = () => {
      return `<hr style="${JuyaStyles.hr.style}" />`;
    };

    // 强调文本渲染
    renderer.strong = ({ tokens }: any) => {
      const text = this.parseTokens(tokens);
      return `<strong style="${JuyaStyles.strong.style}">
        <span leaf="">${text}</span>
      </strong>`;
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
  private parseTokens(tokens: any[], isListItem = false): string {
    return tokens.map((token: any, index: number) => {
      if (token.type === 'image') {
        return this.renderImage(token);
      }
      if (token.type === 'codespan') {
        // 在列表项中，如果是最后一个token且匹配 #x 格式，不渲染为代码标签
        if (isListItem && index === tokens.length - 1 && /^#\d+$/.test(token.text)) {
          return token.raw || token.text;
        }
        return this.renderInlineCode(token);
      }
      if (token.type === 'strong') {
        return this.renderStrong(token);
      }
      return token.raw || token.text || '';
    }).join('');
  }

  /**
   * 渲染图片token
   */
  private renderImage(token: any): string {
    return `<figure style="${JuyaStyles.figure.style}">
      <span leaf="">
        <img style="${JuyaStyles.figure.img}" src="${token.href}" alt="${token.text}" ${token.title ? `title="${token.title}"` : ''} />
      </span>
    </figure>`;
  }

  /**
   * 渲染内联代码token
   */
  private renderInlineCode(token: any): string {
    return `<code style="${JuyaStyles.inlineCode.style}"><span leaf="">${this.escapeHtml(token.text)}</span></code>`;
  }

  /**
   * 渲染强调文本token
   */
  private renderStrong(token: any): string {
    const text = token.tokens ? this.parseTokens(token.tokens, false) : token.text;
    return `<strong style="${JuyaStyles.strong.style}"><span leaf="">${text}</span></strong>`;
  }

  /**
   * 渲染列表项
   */
  private renderListItem(item: any): string {
    this.listItemCounter++;

    
    // 获取原始文本并重新解析以确保markdown被正确处理
    const rawText = item.tokens ? item.tokens.map((t: any) => t.raw || t.text || '').join('') : '';
    let parsedText = marked.parseInline(rawText) as string;
    // 移除多余的换行和空格，保持紧凑格式
    parsedText = this.compactHTML(parsedText);
    
    // 检查原始文本中是否已经包含 #x 格式的标签
    const tagMatch = rawText.match(/(.+?)\s*#(\d+)$/);
    if (tagMatch) {
      // 如果已有标签，提取内容和标签号，并重新解析内容部分
      const content = tagMatch[1]?.trim();
      const tagNum = tagMatch[2];
      let parsedContent = marked.parseInline(content) as string;
      parsedContent = this.compactHTML(parsedContent);
      
                return `<li>
        <section style="${JuyaStyles.li.style}">
          ${parsedContent}
          <code style="${JuyaStyles.li.tag}">
            <span leaf="">#${tagNum}</span>
          </code>
        </section>
      </li>`;
    } else {
      // 如果没有标签，自动添加序号标签
                return `<li>
        <section style="${JuyaStyles.li.style}">
          ${parsedText}
          <code style="${JuyaStyles.li.tag}">
            <span leaf="">#${this.listItemCounter}</span>
          </code>
        </section>
      </li>`;
    }
  }

  /**
   * HTML压缩：移除多余空白符，减小文件体积
   * 针对微信推送接口的大小限制进行优化
   */
  private compressHTML(html: string): string {
    return html
      // 移除HTML注释
      .replace(/<!--[\s\S]*?-->/g, '')
      // 移除标签间的换行和空格
      .replace(/>\s+</g, '><')
      // 移除标签内多余的空白
      .replace(/\s{2,}/g, ' ')
      // 移除style属性值中的多余空格（保留功能完整性）
      .replace(/style="\s+/g, 'style="')
      .replace(/;\s+/g, ';')
      .replace(/:\s+/g, ':')
      // 移除span标签间的换行
      .replace(/(<span[^>]*>)\s+/g, '$1')
      .replace(/\s+(<\/span>)/g, '$1')
      // 移除div/section标签间的换行
      .replace(/(<(?:div|section|h[1-6]|p|li|td|th)[^>]*>)\s+/g, '$1')
      .replace(/\s+(<\/(?:div|section|h[1-6]|p|li|td|th)>)/g, '$1')
      // 最终清理
      .trim();
  }

  /**
   * 紧凑化HTML（保持向后兼容）
   */
  private compactHTML(html: string): string {
    return this.compressHTML(html);
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
   * @param compress - 是否压缩HTML（默认true，减小文件体积）
   * @returns 包含HTML内容和KB大小的对象（HTML内容符合微信接口content字段要求）
   */
  convert(markdown: string, compress: boolean = true): { html: string; sizeKB: number } {
    const rawHtml = marked.parse(markdown) as string;
    const html = compress ? this.compressHTML(rawHtml) : rawHtml;
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
             const cellContent = cell.tokens ? this.parseTokens(cell.tokens) : cell.text;
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
      const cellContent = cell.tokens ? this.parseTokens(cell.tokens) : cell.text;
      return `<td style="${JuyaStyles.td.style}">
        <span leaf="">${cellContent}</span>
      </td>`;
    }).join('');
    
    return `<tr style="${rowStyle}">${cells}</tr>`;
  }
}

export function convertToJuyaH5(markdown: string, compress: boolean = true): { html: string; sizeKB: number } {
  const maker = new JuyaH5Maker();
  return maker.convert(markdown, compress);
}
