/**
 * Juya AI日报H5推送样式配置 - 改进版
 * 基于成功发布的HTML样式，移除可能触发过滤的元素
 * 版式固定于此，颜色与字体来自主题
 */

import type { ThemeTokens } from './themes/types.js';
import { juya } from './themes/juya.js';

export function createStyles({ font, color: c }: ThemeTokens) {
  return {
    // 容器样式
    container: {
      style: `margin: 0px; padding: 20px 0px; background: none 0% 0% / auto no-repeat scroll padding-box border-box, none ${c.pageBg}; width: auto; font-family: ${font.body}; font-size: 16px; color: ${c.text}; line-height: 1.5em; word-spacing: 0em; letter-spacing: 0em; word-break: break-word; overflow-wrap: break-word; text-align: left;`,
      className: 'rich_media_content js_underline_content autoTypeSetting24psection',
      dataAttr: 'data-tool="mdnice编辑器" data-website="https://www.mdnice.com"',
      innerStyle: `margin: 0px; padding: 20px 0px; background: none 0% 0% / auto no-repeat scroll padding-box border-box, none ${c.pageBg}; width: auto; font-family: ${font.body}; font-size: 16px; color: ${c.text}; line-height: 1.5em; word-spacing: 0em; letter-spacing: 0em; word-break: break-word; overflow-wrap: break-word; text-align: left;`
    },

    // H1标题样式
    h1: {
      style: `margin: 30px 0px 15px; align-items: unset; background: none 0% 0% / auto no-repeat scroll padding-box border-box transparent; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: flex; flex-direction: unset; float: unset; height: auto; justify-content: center; line-height: 1.5em; overflow: unset; padding: 0px; text-align: left; text-shadow: none; transform: none; width: auto;`,
      span: `font-size: 18px; color: ${c.accent}; background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(252, 140, 50, 0); line-height: 1.5em; letter-spacing: 0.06em; padding: 2px 10px; align-items: unset; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: block; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; margin: 0px; overflow: unset; text-align: left; text-indent: 0em; text-shadow: none; transform: none; width: auto;`
    },

    // H2标题样式
    h2: {
      style: `margin: 30px 10px 15px; border-style: none; border-width: 1px 1px 4px; border-color: rgb(0, 0, 0) rgb(0, 0, 0) ${c.h2Rule}; background-attachment: scroll, scroll; background-clip: border-box; background-color: ${c.h2Bg}; background-image: none, none; background-position: left center, 0% 0%; background-repeat: no-repeat; background-size: 30px 30px, auto; width: auto; height: auto; align-items: unset; box-shadow: none; display: block; flex-direction: unset; float: unset; justify-content: unset; line-height: 1.5em; overflow: unset; padding: 0px; text-align: left; text-shadow: none; transform: none; border-radius: 12px; word-break: break-all;`,
      span: `font-size: 16px; color: ${c.headingText ?? c.body}; line-height: 1.5em; letter-spacing: 0.06em; padding: 12px 12px 12px 18px; align-items: unset; background-attachment: scroll; background-clip: border-box; background-color: transparent; background-image: none; background-origin: padding-box; background-position: 0% 0%; background-repeat: no-repeat; background-size: auto; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: block; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; margin: 0px; overflow: unset; text-align: left; text-indent: 0em; text-shadow: none; transform: none; width: auto;`,
      tag: `font-size: 0.8em; font-family: ${font.mono}; padding: 2px 4px; vertical-align: 1px; background-color: ${c.card}; color: ${c.accent}; border-width: 0.5px; border-style: solid; border-color: ${c.border}; border-radius: 6px; font-weight: normal;`
    },

    // H3：概览分节及正文小标题，竖线、文字与右侧横线垂直居中
    h3: {
      style: `display: flex; align-items: center; margin: 12px 18px 6px; padding: 0; font-size: 14px; line-height: 22px; font-weight: 600; letter-spacing: 0.08em; color: ${c.sectionText};`,
      marker: `display: block; flex: 0 0 3px; height: 14px; margin-right: 9px; border-radius: 2px; background-color: ${c.accent}; font-size: 0; line-height: 0; overflow: hidden;`,
      span: `display: block; min-width: 0;`,
      line: `display: block; flex: 1 0 16px; height: 1px; margin-left: 12px; background-color: ${c.sectionRule}; font-size: 0; line-height: 0; overflow: hidden;`
    },

    // 段落样式
    p: {
      style: `color: ${c.body}; font-size: 15px; line-height: 1.8em; letter-spacing: 0.06em; text-align: left; text-indent: 0em; margin: 0px 18px; padding: 5px 0px;`
    },

    // 无序列表样式
    ul: {
      style: `list-style-type: disc; margin: 8px 15px 8px 15px; padding: 0px 0px 0px 18px; color: ${c.text};`,
      className: 'list-paddingleft-1'
    },

    // 列表项样式
    li: {
      style: `margin: 5px 0px; color: ${c.text}; font-size: 14px; line-height: 1.8em; letter-spacing: 0.06em; text-align: left; font-weight: normal;`,
      content: `color: ${c.text};`,
      tag: `background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; margin: 0px 2px; overflow-wrap: break-word; word-break: break-all; font-size: 0.9em; font-family: ${font.mono}; padding: 2px 4px; vertical-align: baseline; transform: translateY(-2px); background-color: ${c.card}; color: ${c.accent}; border-width: 0.5px; border-style: solid; border-color: ${c.border}; border-radius: 6px;`
    },
    liFlex: {
      container: `display: flex; align-items: baseline; margin: 0px; padding: 0px;`,
      label: `display: inline-block; flex: 0 0 auto; margin: 0px; line-height: inherit;`,
      code: `display: inline; white-space: nowrap; word-break: normal; overflow-wrap: normal; transform: none;`,
      content: `color: ${c.text}; display: block; flex: 1 1 auto; min-width: 0; margin: 0px 0px 0px 2px; word-break: break-word; overflow-wrap: break-word; font-size: inherit; line-height: inherit;`
    },

    // 引用块样式
    blockquote: {
      style: `margin: 20px 10px 10px; padding: 4px 12px 4px; background-attachment: scroll; background-clip: border-box; background-color: ${c.card}; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px; display: block; overflow: auto; border: 0.8px solid ${c.borderSoft}; border-radius: 12px;`,
      p: `text-indent: 0em; padding: 5px 0px; color: ${c.body}; font-size: 15px; line-height: 1.8em; letter-spacing: 0.06em; text-align: left; font-weight: normal; margin: 0px;`
    },

    // 代码块样式
    pre: {
      style: `margin: 10px; padding: 0px;`,
      code: `padding: 16px; background: ${c.preBg}; overflow-x: auto; display: block; background-color: ${c.preBg}; background-position: 0% 0%; background-repeat: repeat; background-attachment: scroll; background-image: none; background-size: auto; background-origin: padding-box; background-clip: border-box; color: ${c.preText}; font-family: ${font.mono}; font-size: 14px; border: 0.5px solid ${c.borderSoft}; padding: 12px; border-radius: 12px;`
    },

    // 内联代码样式 - 用于概览列表中的标签
    inlineCode: {
      style: `color: ${c.accent}; font-size: 0.9em; line-height: 1.8em; letter-spacing: 0em; background-color: ${c.card}; font-family: ${font.mono}; word-break: break-all; border: 0.5px solid ${c.border}; border-radius: 6px; padding: 2px 4px; margin: 0px 2px; vertical-align: baseline; transform: translateY(-4px);`
    },

    // 内联代码样式 - 用于正文段落中
    inlineCodePlain: {
      style: `color: ${c.codeText}; font-size: 14px; line-height: 1.8em; letter-spacing: 0em; background-attachment: scroll; background-clip: border-box; background-color: ${c.codeBg}; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; overflow-wrap: break-word; font-family: ${font.mono}; word-break: break-all; border: 0.5px solid ${c.border}; border-radius: 8px; padding: 2px 4px; margin: 0px 2px;`
    },

    // 图片样式
    figure: {
      style: `margin: 30px 10px; padding: 0px; display: flex; flex-direction: column; justify-content: center; align-items: center;`,
      img: `display: block; margin: 0px auto; max-width: 100%; border-style: none; border-width: 3px; border-color: rgba(0, 0, 0, 0.4); object-fit: fill; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px; border-radius: 12px; overflow: hidden;`
    },

    // 水平分割线样式
    hr: {
      style: `margin: 20px 10px 10px; padding: 0px; border-top: 1px dashed ${c.hr}; border-bottom: none; border-left: none; border-right: none; background-color: rgba(0, 0, 0, 0); background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto;`
    },

    // 强调文本样式
    strong: {
      style: `color: ${c.strong}; font-weight: bold; background-attachment: scroll; background-clip: border-box; background-color: rgba(255, 254, 252, 0); background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; margin: 0px; padding: 0px; border-style: none; border-width: 3px; border-color: rgba(0, 0, 0, 0.4); border-radius: 0px;`
    },

    // 表格容器样式
    tableContainer: {
      style: `padding: 0px; margin: 10px 15px; border-radius: 12px; border: 1px solid ${c.border}; overflow: hidden; background-color: ${c.card};`
    },

    // 表格样式
    table: {
      style: `display: table; margin: 0; text-align: left; width: 100%; border-collapse: collapse; border-spacing: 0px; table-layout: fixed; background-color: ${c.card};`
    },

    // 表头样式
    th: {
      style: `white-space-collapse: collapse; overflow-wrap: break-word; word-break: break-all; color: ${c.headingText ?? c.text}; line-height: 1.5em; letter-spacing: 0em; font-weight: bold; background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; height: auto; border-radius: 0px; padding: 5px 10px; min-width: 85px; text-align: left; font-size: 14px; border: medium; background-color: ${c.h2Bg};`
    },

    // 表格行样式 - 奇数行
    trOdd: {
      style: `color: ${c.text}; background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; background-color: ${c.card};`
    },

    // 表格行样式 - 偶数行
    trEven: {
      style: `color: ${c.text}; background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; background-color: ${c.rowAlt};`
    },

    // 表格单元格样式
    td: {
      style: `white-space-collapse: collapse; overflow-wrap: break-word; word-break: break-all; padding: 5px 10px; min-width: 85px; border-radius: 0px; text-align: left; font-size: 14px; border: medium;`
    }
  };
}

export type JuyaStyleSheet = ReturnType<typeof createStyles>;

export const JuyaStyles = createStyles(juya);
