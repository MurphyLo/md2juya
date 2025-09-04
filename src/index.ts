/**
 * 微信H5推送Markdown转换器 - 主入口
 */

export { WeChatMarkdownConverter, convertMarkdownToWeChat } from './converter.js';
export { WeChatStyles } from './styles.js';

// CLI支持(如果作为命令行工具使用)
import { readFileSync, writeFileSync } from 'fs';
import { convertMarkdownToWeChat } from './converter.js';

const args = process.argv.slice(2);
if (args.length > 0) {
  const inputFile = args[0]!;
  const outputFile = args[1] || inputFile.replace(/\.md$/, '_wechat.html');

  try {
    const markdown = readFileSync(inputFile, 'utf-8');
    const html = convertMarkdownToWeChat(markdown);
    
    // 创建完整的HTML文档
    const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>微信推送</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f0f0f0;">
    ${html}
</body>
</html>`;

    writeFileSync(outputFile, fullHtml);
    console.log(`✅ 转换完成: ${inputFile} -> ${outputFile}`);
  } catch (error) {
    console.error('❌ 转换失败:', (error as Error).message);
    process.exit(1);
  }
}
