/**
 * 微信H5推送样式配置
 * 直接提取自原始HTML文件的样式数据
 */

export const WeChatStyles = {
  // 容器样式
  container: {
    style: `margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;padding-top: 20px;padding-bottom: 20px;padding-left: 0px;padding-right: 0px;background-color: rgb(250, 249, 245);width: auto;font-family: Optima, Microsoft YaHei, PingFangSC-regular, serif;font-size: 16px;color: rgb(0, 0, 0);line-height: 1.5em;word-spacing: 0em;letter-spacing: 0em;word-break: break-word;overflow-wrap: break-word;text-align: left;`,
    className: 'rich_media_content js_underline_content autoTypeSetting24psection'
  },

  // H1标题样式  
  h1: {
    style: `margin-top: 30px;margin-bottom: 15px;margin-left: 0px;margin-right: 0px;display: flex;justify-content: center;line-height: 1.5em;text-align: left;`,
    span: `font-size: 18px;color: rgb(201, 100, 66);line-height: 1.5em;letter-spacing: 0.06em;padding-top: 2px;padding-bottom: 2px;padding-left: 10px;padding-right: 10px;display: block;font-weight: bold;text-align: left;text-indent: 0em;`
  },

  // H2标题样式
  h2: {
    style: `margin: 30px 10px 15px; border-style: none; border-width: 1px 1px 4px; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(160, 249, 176); background-attachment: scroll, scroll; background-clip: border-box; background-color: rgb(240, 238, 230); background-image: none, none; background-position: 0% 50%, 0% 0%; background-repeat: no-repeat; background-size: 30px 30px, auto; width: auto; height: auto; align-items: unset; box-shadow: none; display: block; flex-direction: unset; float: unset; justify-content: unset; line-height: 1.5em; overflow: unset; padding: 0px; text-align: left; text-shadow: none; transform: none; border-radius: 12px; word-break: break-all; visibility: visible;`,
    span: `font-size: 16px; color: rgb(20, 20, 19); line-height: 1.5em; letter-spacing: 0.06em; padding: 12px 12px 12px 18px; align-items: unset; background: none 0% 0% / auto no-repeat scroll padding-box border-box transparent; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 0px; box-shadow: none; display: block; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; margin: 0px; overflow: unset; text-align: left; text-indent: 0em; text-shadow: none; transform: none; width: auto; visibility: visible;`,
    tag: `font-size: 0.8em;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;padding-top: 2px;padding-right: 4px;padding-bottom: 2px;padding-left: 4px;vertical-align: 1px;background-color: rgb(253, 252, 250) !important;color: rgb(201, 100, 66) !important;border-top-width: 0.5px !important;border-top-style: solid !important;border-top-color: rgb(209, 207, 204) !important;border-right-width: 0.5px !important;border-right-style: solid !important;border-right-color: rgb(209, 207, 204) !important;border-bottom-width: 0.5px !important;border-bottom-style: solid !important;border-bottom-color: rgb(209, 207, 204) !important;border-left-width: 0.5px !important;border-left-style: solid !important;border-left-color: rgb(209, 207, 204) !important;border-image-outset: 0 !important;border-image-repeat: stretch !important;border-image-slice: 100% !important;border-image-source: none !important;border-image-width: 1 !important;border-top-left-radius: 6px !important;border-top-right-radius: 6px !important;border-bottom-right-radius: 6px !important;border-bottom-left-radius: 6px !important;font-weight: normal !important;`
  },

  // 段落样式
  p: {
    style: `color: rgb(20, 20, 19);font-size: 15px;line-height: 1.8em;letter-spacing: 0.06em;text-align: left;text-indent: 0em;margin-top: 0px;margin-bottom: 0px;margin-left: 18px;margin-right: 18px;padding-top: 5px;padding-bottom: 5px;padding-left: 0px;padding-right: 0px;`
  },

  // 无序列表样式
  ul: {
    style: `list-style-type: disc;margin-top: 8px;margin-bottom: 8px;margin-left: 15px;margin-right: 15px;padding-top: 0px;padding-bottom: 0px;padding-left: 18px;padding-right: 18px;color: rgb(0, 0, 0);`,
    className: 'list-paddingleft-1'
  },

  // 列表项样式
  li: {
    style: `margin-top: 5px; margin-bottom: 5px; color: rgb(0, 0, 0); font-size: 14px; line-height: 1.8em; letter-spacing: 0.06em; text-align: left; font-weight: normal; visibility: visible;`,
    tag: `font-size: 0.8em;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;padding-top: 2px;padding-right: 4px;padding-bottom: 2px;padding-left: 4px;vertical-align: 1px;background-color: rgb(253, 252, 250) !important;color: rgb(201, 100, 66) !important;border-top-width: 0.5px !important;border-top-style: solid !important;border-top-color: rgb(209, 207, 204) !important;border-right-width: 0.5px !important;border-right-style: solid !important;border-right-color: rgb(209, 207, 204) !important;border-bottom-width: 0.5px !important;border-bottom-style: solid !important;border-bottom-color: rgb(209, 207, 204) !important;border-left-width: 0.5px !important;border-left-style: solid !important;border-left-color: rgb(209, 207, 204) !important;border-image-outset: 0 !important;border-image-repeat: stretch !important;border-image-slice: 100% !important;border-image-source: none !important;border-image-width: 1 !important;border-top-left-radius: 6px !important;border-top-right-radius: 6px !important;border-bottom-right-radius: 6px !important;border-bottom-left-radius: 6px !important;font-weight: normal !important;`
  },

  // 引用块样式
  blockquote: {
    style: `margin-top: 20px;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;padding-top: 4px;padding-bottom: 4px;padding-left: 12px;padding-right: 6px;background-color: rgb(253, 252, 250);display: block;overflow-x: auto;overflow-y: auto;border: 0.8px solid rgb(218, 216, 212);border-radius: 12px !important;`,
    p: `text-indent: 0em;padding-top: 5px;padding-bottom: 5px;padding-left: 0px;padding-right: 0px;color: rgb(20, 20, 20);font-size: 15px;line-height: 1.8em;letter-spacing: 0.06em;text-align: left;font-weight: normal;margin: 0px;`
  },

  // 代码块样式
  pre: {
    style: `margin-top: 10px;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;`,
    code: `padding: 16px;background: #fff;overflow-x: auto;display: block;background-color: rgb(255, 255, 255);background-position-x: 0%;background-position-y: 0%;background-repeat: repeat;background-attachment: scroll;background-image: none;background-size: auto;background-origin: padding-box;background-clip: border-box;color: rgb(56, 58, 66);font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 14px;border-top-width: 0.5px;border-top-style: solid;border-top-color: rgb(218, 216, 212);border-right-width: 0.5px;border-right-style: solid;border-right-color: rgb(218, 216, 212);border-bottom-width: 0.5px;border-bottom-style: solid;border-bottom-color: rgb(218, 216, 212);border-left-width: 0.5px;border-left-style: solid;border-left-color: rgb(218, 216, 212);border-image-outset: 0;border-image-repeat: stretch;border-image-slice: 100%;border-image-source: none;border-image-width: 1;padding-top: 12px;padding-right: 12px;padding-bottom: 12px;padding-left: 12px;border-top-left-radius: 12px !important;border-top-right-radius: 12px !important;border-bottom-right-radius: 12px !important;border-bottom-left-radius: 12px !important;`
  },

  // 内联代码样式
  inlineCode: {
    style: `color: rgb(92, 22, 22);font-size: 14px;line-height: 1.8em;letter-spacing: 0em;background-color: rgb(240, 239, 235);font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;word-break: break-all;border: 0.5px solid rgb(209, 207, 204);border-radius: 8px;padding-top: 2px;padding-right: 4px;padding-bottom: 2px;padding-left: 4px;margin-top: 0px;margin-right: 2px;margin-bottom: 0px;margin-left: 2px;`
  },

  // 图片样式
  figure: {
    style: `margin-top: 10px;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;padding: 0px;display: flex;flex-direction: column;justify-content: center;align-items: center;`,
    img: `display: block;margin: 0 auto;max-width: 100%;border: none;box-shadow: none;border-radius: 12px;overflow: hidden;`
  },

  // 水平分割线样式
  hr: {
    style: `margin-top: 30px;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;padding: 0px;border-top: 1px dashed rgb(184, 184, 184);border-bottom: none;border-left: none;border-right: none;background-color: transparent;`
  },

  // 强调文本样式
  strong: {
    style: `color: rgb(31, 12, 3);font-weight: bold;background-attachment: scroll;background-clip: border-box;background-color: rgba(255, 254, 252, 0);background-image: none;background-origin: padding-box;background-position-x: left;background-position-y: top;background-repeat: no-repeat;background-size: auto;width: auto;height: auto;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;border-top-style: none;border-bottom-style: none;border-left-style: none;border-right-style: none;border-top-width: 3px;border-bottom-width: 3px;border-left-width: 3px;border-right-width: 3px;border-top-color: rgba(0, 0, 0, 0.4);border-bottom-color: rgba(0, 0, 0, 0.4);border-left-color: rgba(0, 0, 0, 0.4);border-right-color: rgba(0, 0, 0, 0.4);border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;`
  },

  // 表格容器样式
  tableContainer: {
    style: `padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;margin-top: 15px;margin-right: 10px;margin-bottom: 15px;margin-left: 10px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 12px;border-bottom-left-radius: 12px;border-top-width: 1px;border-top-style: solid;border-top-color: rgb(209, 207, 204);border-right-width: 1px;border-right-style: solid;border-right-color: rgb(209, 207, 204);border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: rgb(209, 207, 204);border-left-width: 1px;border-left-style: solid;border-left-color: rgb(209, 207, 204);border-image-outset: 0;border-image-repeat: stretch;border-image-slice: 100%;border-image-source: none;border-image-width: 1;overflow-x: hidden;overflow-y: hidden;`
  },

  // 表格样式
  table: {
    style: `display: table;text-align: left;width: 100%;border-collapse: collapse;border-spacing: 0px;table-layout: fixed;`
  },

  // 表头样式
  th: {
    style: `white-space-collapse: collapse;overflow-wrap: break-word;word-break: break-all;color: rgb(0, 0, 0);line-height: 1.5em;letter-spacing: 0em;font-weight: bold;background-attachment: scroll;background-clip: border-box;background-image: none;background-origin: padding-box;background-position: left top;background-repeat: no-repeat;background-size: auto;height: auto;border-radius: 0px;padding: 5px 10px;min-width: 85px;text-align: left;font-size: 14px !important;border: medium !important;background-color: rgb(240, 238, 230) !important;`
  },

  // 表格行样式 - 奇数行 (从0开始计数，所以第1、3、5...行)
  trOdd: {
    style: `color: rgb(0, 0, 0);background-attachment: scroll;background-clip: border-box;background-image: none;background-origin: padding-box;background-position-x: left;background-position-y: top;background-repeat: no-repeat;background-size: auto;width: auto;height: auto;background-color: rgb(253, 252, 250) !important;`
  },

  // 表格行样式 - 偶数行 (从0开始计数，所以第2、4、6...行) 
  trEven: {
    style: `color: rgb(0, 0, 0);background-attachment: scroll;background-clip: border-box;background-image: none;background-origin: padding-box;background-position-x: left;background-position-y: top;background-repeat: no-repeat;background-size: auto;width: auto;height: auto;background-color: rgb(248, 247, 242) !important;`
  },

  // 表格单元格样式
  td: {
    style: `white-space-collapse: collapse;overflow-wrap: break-word;word-break: break-all;padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 10px;min-width: 85px;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;text-align: left;font-size: 14px !important;border-top-width: medium !important;border-top-style: none !important;border-top-color: currentcolor !important;border-right-width: medium !important;border-right-style: none !important;border-right-color: currentcolor !important;border-bottom-width: medium !important;border-bottom-style: none !important;border-bottom-color: currentcolor !important;border-left-width: medium !important;border-left-style: none !important;border-left-color: currentcolor !important;border-image-outset: 0 !important;border-image-repeat: stretch !important;border-image-slice: 100% !important;border-image-source: none !important;border-image-width: 1 !important;`
  }
};