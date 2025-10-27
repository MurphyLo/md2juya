/**
 * Juya AI日报H5推送样式配置 - 改进版
 * 基于成功发布的HTML样式，移除可能触发过滤的元素
 */

export const JuyaStyles = {
  // 容器样式
  container: {
    style: `margin: 0px; padding: 20px 0px; background: none 0% 0% / auto no-repeat scroll padding-box border-box, none rgb(250, 249, 245); width: auto; font-family: Optima, "Microsoft YaHei", PingFangSC-regular, serif; font-size: 16px; color: rgb(0, 0, 0); line-height: 1.5em; word-spacing: 0em; letter-spacing: 0em; word-break: break-word; overflow-wrap: break-word; text-align: left;`,
    className: 'rich_media_content js_underline_content autoTypeSetting24psection',
    dataAttr: 'data-tool="mdnice编辑器" data-website="https://www.mdnice.com"',
    innerStyle: `margin: 0px; padding: 20px 0px; background: none 0% 0% / auto no-repeat scroll padding-box border-box, none rgb(250, 249, 245); width: auto; font-family: Optima, "Microsoft YaHei", PingFangSC-regular, serif; font-size: 16px; color: rgb(0, 0, 0); line-height: 1.5em; word-spacing: 0em; letter-spacing: 0em; word-break: break-word; overflow-wrap: break-word; text-align: left;`
  },

  // H1标题样式  
  h1: {
    style: `margin: 30px 0px 15px; align-items: unset; background: none 0% 0% / auto no-repeat scroll padding-box border-box transparent; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: flex; flex-direction: unset; float: unset; height: auto; justify-content: center; line-height: 1.5em; overflow: unset; padding: 0px; text-align: left; text-shadow: none; transform: none; width: auto;`,
    span: `font-size: 18px; color: rgb(201, 100, 66); background: none 0% 0% / auto no-repeat scroll padding-box border-box rgba(252, 140, 50, 0); line-height: 1.5em; letter-spacing: 0.06em; padding: 2px 10px; align-items: unset; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: block; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; margin: 0px; overflow: unset; text-align: left; text-indent: 0em; text-shadow: none; transform: none; width: auto;`
  },

  // H2标题样式
  h2: {
    style: `margin: 30px 10px 15px; border-style: none; border-width: 1px 1px 4px; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(160, 249, 176); background-attachment: scroll, scroll; background-clip: border-box; background-color: rgb(240, 238, 230); background-image: none, none; background-position: left center, 0% 0%; background-repeat: no-repeat; background-size: 30px 30px, auto; width: auto; height: auto; align-items: unset; box-shadow: none; display: block; flex-direction: unset; float: unset; justify-content: unset; line-height: 1.5em; overflow: unset; padding: 0px; text-align: left; text-shadow: none; transform: none; border-radius: 12px; word-break: break-all;`,
    span: `font-size: 16px; color: rgb(20, 20, 19); line-height: 1.5em; letter-spacing: 0.06em; padding: 12px 12px 12px 18px; align-items: unset; background-attachment: scroll; background-clip: border-box; background-color: transparent; background-image: none; background-origin: padding-box; background-position: 0% 0%; background-repeat: no-repeat; background-size: auto; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: block; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; margin: 0px; overflow: unset; text-align: left; text-indent: 0em; text-shadow: none; transform: none; width: auto;`,
    tag: `font-size: 0.8em; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; padding: 2px 4px; vertical-align: 1px; background-color: rgb(253, 252, 250); color: rgb(201, 100, 66); border-width: 0.5px; border-style: solid; border-color: rgb(209, 207, 204); border-radius: 6px; font-weight: normal;`
  },

  // 段落样式
  p: {
    style: `color: rgb(20, 20, 19); font-size: 15px; line-height: 1.8em; letter-spacing: 0.06em; text-align: left; text-indent: 0em; margin: 0px 18px; padding: 5px 0px;`
  },

  // 无序列表样式
  ul: {
    style: `list-style-type: disc; margin: 8px 15px 8px 15px; padding: 0px 0px 0px 18px; color: rgb(0, 0, 0);`,
    className: 'list-paddingleft-1'
  },

  // 列表项样式
  li: {
    style: `margin: 5px 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 1.8em; letter-spacing: 0.06em; text-align: left; font-weight: normal;`,
    tag: `background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; margin: 0px 2px; overflow-wrap: break-word; word-break: break-all; font-size: 0.9em; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; padding: 2px 4px; vertical-align: baseline; transform: translateY(-2px); background-color: rgb(253, 252, 250); color: rgb(201, 100, 66); border-width: 0.5px; border-style: solid; border-color: rgb(209, 207, 204); border-radius: 6px;`
  },

  // 引用块样式
  blockquote: {
    style: `margin: 20px 10px 10px; padding: 4px 12px 4px; background-attachment: scroll; background-clip: border-box; background-color: rgb(253, 252, 250); background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px; display: block; overflow: auto; border: 0.8px solid rgb(218, 216, 212); border-radius: 12px;`,
    p: `text-indent: 0em; padding: 5px 0px; color: rgb(20, 20, 20); font-size: 15px; line-height: 1.8em; letter-spacing: 0.06em; text-align: left; font-weight: normal; margin: 0px;`
  },

  // 代码块样式
  pre: {
    style: `margin: 10px; padding: 0px;`,
    code: `padding: 16px; background: #fff; overflow-x: auto; display: block; background-color: rgb(255, 255, 255); background-position: 0% 0%; background-repeat: repeat; background-attachment: scroll; background-image: none; background-size: auto; background-origin: padding-box; background-clip: border-box; color: rgb(56, 58, 66); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 14px; border: 0.5px solid rgb(218, 216, 212); padding: 12px; border-radius: 12px;`
  },

  // 内联代码样式 - 用于概览列表中的标签
  inlineCode: {
    style: `color: rgb(201, 100, 66); font-size: 0.9em; line-height: 1.8em; letter-spacing: 0em; background-color: rgb(253, 252, 250); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; border: 0.5px solid rgb(209, 207, 204); border-radius: 6px; padding: 2px 4px; margin: 0px 2px; vertical-align: baseline; transform: translateY(-4px);`
  },

  // 内联代码样式 - 用于正文段落中
  inlineCodePlain: {
    style: `color: rgb(92, 22, 22); font-size: 14px; line-height: 1.8em; letter-spacing: 0em; background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 239, 235); background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; overflow-wrap: break-word; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; border: 0.5px solid rgb(209, 207, 204); border-radius: 8px; padding: 2px 4px; margin: 0px 2px;`
  },

  // 图片样式
  figure: {
    style: `margin: 30px 10px; padding: 0px; display: flex; flex-direction: column; justify-content: center; align-items: center;`,
    img: `display: block; margin: 0px auto; max-width: 100%; border-style: none; border-width: 3px; border-color: rgba(0, 0, 0, 0.4); object-fit: fill; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px; border-radius: 12px; overflow: hidden;`
  },

  // 水平分割线样式
  hr: {
    style: `margin: 20px 10px 10px; padding: 0px; border-top: 1px dashed rgb(184, 184, 184); border-bottom: none; border-left: none; border-right: none; background-color: rgba(0, 0, 0, 0); background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto;`
  },

  // 强调文本样式
  strong: {
    style: `color: rgb(31, 12, 3); font-weight: bold; background-attachment: scroll; background-clip: border-box; background-color: rgba(255, 254, 252, 0); background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; margin: 0px; padding: 0px; border-style: none; border-width: 3px; border-color: rgba(0, 0, 0, 0.4); border-radius: 0px;`
  },

  // 表格容器样式
  tableContainer: {
    style: `padding: 0px; margin: 10px 15px; border-radius: 12px; border: 1px solid rgb(209, 207, 204); overflow: hidden; background-color: rgb(253, 252, 250);`
  },

  // 表格样式
  table: {
    style: `display: table; text-align: left; width: 100%; border-collapse: collapse; border-spacing: 0px; table-layout: fixed; background-color: rgb(253, 252, 250);`
  },

  // 表头样式
  th: {
    style: `white-space-collapse: collapse; overflow-wrap: break-word; word-break: break-all; color: rgb(0, 0, 0); line-height: 1.5em; letter-spacing: 0em; font-weight: bold; background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; height: auto; border-radius: 0px; padding: 5px 10px; min-width: 85px; text-align: left; font-size: 14px; border: medium; background-color: rgb(240, 238, 230);`
  },

  // 表格行样式 - 奇数行
  trOdd: {
    style: `color: rgb(0, 0, 0); background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; background-color: rgb(253, 252, 250);`
  },

  // 表格行样式 - 偶数行
  trEven: {
    style: `color: rgb(0, 0, 0); background-attachment: scroll; background-clip: border-box; background-image: none; background-origin: padding-box; background-position: left top; background-repeat: no-repeat; background-size: auto; width: auto; height: auto; background-color: rgb(248, 247, 242);`
  },

  // 表格单元格样式
  td: {
    style: `white-space-collapse: collapse; overflow-wrap: break-word; word-break: break-all; padding: 5px 10px; min-width: 85px; border-radius: 0px; text-align: left; font-size: 14px; border: medium;`
  }
};