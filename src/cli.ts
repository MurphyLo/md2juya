#!/usr/bin/env node

/**
 * md2juya CLI工具
 * 命令行接口，用于将Markdown文件转换为Juya AI日报H5格式
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { JuyaH5Maker } from './converter.js';
import { listThemes } from './themes/index.js';

const args = process.argv.slice(2);

if (args.includes('--list-themes')) {
  console.log(listThemes().join('\n'));
  process.exit(0);
}

// 取出 --theme <name> / --theme=<name>，其余为位置参数
let theme: string | undefined;
const positional: string[] = [];
for (let i = 0; i < args.length; i++) {
  const arg = args[i]!;
  if (arg === '--theme') {
    theme = args[++i];
  } else if (arg.startsWith('--theme=')) {
    theme = arg.slice('--theme='.length);
  } else {
    positional.push(arg);
  }
}

if (theme === '' || (theme === undefined && args.some(arg => arg === '--theme' || arg.startsWith('--theme=')))) {
  console.error(`❌ --theme 缺少主题名，可用主题：${listThemes().join(', ')}`);
  process.exit(1);
}

if (positional.length === 0) {
  console.log(`
md2juya - Convert Markdown to Juya AI Daily WeChat H5 format

Usage:
  md2juya <input.md> [output.html] [--theme <name>]
  md2juya --list-themes

Themes: ${listThemes().join(', ')}（默认 juya）

Examples:
  md2juya article.md                    # 生成 article_juya.html
  md2juya article.md custom.html        # 生成 custom.html
  md2juya article.md --theme porcelain  # 使用 porcelain 主题
`);
  process.exit(0);
}

// 解析命令行参数
const inputFile = positional[0]!;
const outputFile = positional[1] || inputFile.replace(/\.md$/, '_juya.html');

try {
  const markdown = readFileSync(inputFile, 'utf-8');
  const maker = new JuyaH5Maker({ theme });
  const { html, sizeKB } = maker.convert(markdown);

  // 创建完整的HTML文档用于预览（实际使用时只需要html部分）
  const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juya AI Daily 预览</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f0f0f0;">
    <div class="${maker.styles.container.className}" style="${maker.styles.container.style}">
        ${html}
    </div>
</body>
</html>`;

  writeFileSync(outputFile, fullHtml);
  console.log(`✅ 转换完成: ${inputFile} -> ${outputFile}`);
  console.log(`📊 内容大小: ${sizeKB}KB`);

  // 检查是否超过微信1MB限制
  if (sizeKB > 1024) {
    console.log(`⚠️  警告: 内容大小超过微信推送1MB限制！建议减少内容。`);
  }

  // 输出纯HTML内容片段信息（用于API调用）
  console.log(`💡 API使用提示: 生成的HTML内容可直接用于微信公众号API的content字段`);

} catch (error) {
  console.error('❌ 转换失败:', (error as Error).message);
  process.exit(1);
}
