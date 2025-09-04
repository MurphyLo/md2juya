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
    style: `margin-top: 30px;margin-bottom: 15px;margin-left: 10px;margin-right: 10px;border-bottom-width: 4px;border-bottom-color: rgb(160, 249, 176);background-color: rgb(240, 238, 230);line-height: 1.5em;text-align: left;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 12px;border-bottom-left-radius: 12px;word-break: break-all;`,
    span: `font-size: 16px;color: rgb(20, 20, 19);line-height: 1.5em;letter-spacing: 0.06em;padding-top: 12px;padding-bottom: 12px;padding-left: 18px;padding-right: 12px;display: block;font-weight: bold;text-align: left;text-indent: 0em;`,
    tag: `font-size: 0.8em;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;padding-top: 2px;padding-right: 4px;padding-bottom: 2px;padding-left: 4px;vertical-align: 1px;background-color: rgb(253, 252, 250) !important;color: rgb(201, 100, 66) !important;border: 0.5px solid rgb(209, 207, 204) !important;border-radius: 6px !important;font-weight: normal !important;`
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
    style: `margin-top: 5px;margin-bottom: 5px;color: rgb(0, 0, 0);font-size: 14px;line-height: 1.8em;letter-spacing: 0.06em;text-align: left;font-weight: normal;`,
    tag: `margin-left: 2px;margin-right: 2px;font-size: 0.9em;font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;padding-top: 2px;padding-right: 4px;padding-bottom: 2px;padding-left: 4px;transform: translateY(-2px);background-color: rgb(253, 252, 250) !important;color: rgb(201, 100, 66) !important;border: 0.5px solid rgb(209, 207, 204) !important;border-radius: 6px !important;`
  },

  // 引用块样式
  blockquote: {
    style: `margin-top: 20px;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;padding-top: 4px;padding-bottom: 4px;padding-left: 12px;padding-right: 6px;background-color: rgb(253, 252, 250);display: block;overflow-x: auto;overflow-y: auto;border: 0.8px solid rgb(218, 216, 212);border-radius: 12px !important;`,
    p: `text-indent: 0em;padding-top: 5px;padding-bottom: 5px;padding-left: 0px;padding-right: 0px;color: rgb(20, 20, 20);font-size: 15px;line-height: 1.8em;letter-spacing: 0.06em;text-align: left;font-weight: normal;margin: 0px;`
  },

  // 代码块样式
  pre: {
    style: `margin-top: 10px;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;padding: 0px;`,
    code: `padding: 16px;background: #fff;overflow-x: auto;display: block;background-color: rgb(255, 255, 255);color: rgb(56, 58, 66);font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;font-size: 14px;border: 0.5px solid rgb(218, 216, 212);padding: 12px;border-radius: 12px !important;`
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
    style: `color: rgb(31, 12, 3);font-weight: bold;`
  }
};