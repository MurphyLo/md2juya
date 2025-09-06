#!/usr/bin/env node

/**
 * md2juya CLI工具
 * 命令行接口，用于将Markdown文件转换为Juya AI日报H5格式
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { convertToJuyaH5 } from './converter.js';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
md2juya - Convert Markdown to Juya AI Daily WeChat H5 format

Usage:
  md2juya <input.md> [output.html] [--no-compress]

Options:
  --no-compress    禁用HTML压缩（默认启用压缩以减小文件体积）

Examples:
  md2juya article.md                    # 生成 article_juya.html（压缩）
  md2juya article.md custom.html        # 生成 custom.html（压缩）
  md2juya article.md --no-compress      # 生成未压缩的 article_juya.html
`);
  process.exit(0);
}

// 解析命令行参数
const noCompressIndex = args.indexOf('--no-compress');
const shouldCompress = noCompressIndex === -1;

// 过滤掉选项参数，获取文件参数
const fileArgs = args.filter(arg => !arg.startsWith('--'));
const inputFile = fileArgs[0]!;
const outputFile = fileArgs[1] || inputFile.replace(/\.md$/, '_juya.html');

try {
  const markdown = readFileSync(inputFile, 'utf-8');
  const { html, sizeKB } = convertToJuyaH5(markdown, shouldCompress);
  
  // 创建完整的HTML文档用于预览（实际使用时只需要html部分）
  const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juya AI Daily 预览</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f0f0f0;">
    <div class="rich_media_content js_underline_content autoTypeSetting24psection" style="margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;padding-top: 20px;padding-bottom: 20px;padding-left: 0px;padding-right: 0px;background-color: rgb(250, 249, 245);width: auto;font-family: Optima, Microsoft YaHei, PingFangSC-regular, serif;font-size: 16px;color: rgb(0, 0, 0);line-height: 1.5em;word-spacing: 0em;letter-spacing: 0em;word-break: break-word;overflow-wrap: break-word;text-align: left;">
        ${html}
    </div>
</body>
</html>`;

  writeFileSync(outputFile, fullHtml);
  console.log(`✅ 转换完成: ${inputFile} -> ${outputFile}`);
  console.log(`📦 压缩状态: ${shouldCompress ? '已启用' : '已禁用'}`);
  console.log(`📊 内容大小: ${sizeKB}KB`);
  
  // 检查是否超过微信1MB限制
  if (sizeKB > 1024) {
    console.log(`⚠️  警告: 内容大小超过微信推送1MB限制！建议启用压缩或减少内容。`);
  }
  
  // 输出纯HTML内容片段信息（用于API调用）
  console.log(`💡 API使用提示: 生成的HTML内容可直接用于微信公众号API的content字段`);
  
} catch (error) {
  console.error('❌ 转换失败:', (error as Error).message);
  process.exit(1);
}
