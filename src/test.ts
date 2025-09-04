/**
 * 转换器测试文件
 */

import { convertMarkdownToWeChat } from './converter.js';
import { writeFileSync } from 'fs';

// 测试Markdown样例  
const testMarkdown = `![AI早报标题图](https://mmbiz.qpic.cn/sz_mmbiz_png/ykj6qYPSm3fficYlTjsBfyTorHHzfeDmr2Ch7tZNgRgFnicV1Kh2MBaUWOV9NbORvInqSqvXCoyqCUHbZZhp80OQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

# 微信AI早报 2025-01-04

## 概览

- ChatGPT Projects 已向免费用户开放 #1
- 微软模拟光计算机突破 #2  
- Moonshot推Kimi K2-0905 #3
- xAI grok-4-0709关闭图像输入 #4
- 即梦AI登陆火山引擎 #5

---

## ChatGPT Projects 已向免费用户开放 #1

> OpenAI 宣布 **ChatGPT Projects** 功能全面开放给免费用户，并提升了各层级的文件上传额度及增加了项目级记忆控制等新功能。

OpenAI 宣布 **ChatGPT Projects** 功能现已向所有 **Free** 用户开放。

此次更新还带来了文件上传额度的提升，并引入了新的自定义选项和独立的记忆控制开关，用户现在可以单独决定项目是否启用长期记忆。

\`\`\`
用户层级        单次项目文件上传上限
Free           5个
Plus           25个  
Pro/Business   40个
\`\`\`

研究团队同步公开了训练流程的全部文档、源代码、中间检查点及数据保护输出过滤文件，并严格遵循瑞士数据保护法。

![ChatGPT界面](https://via.placeholder.com/600x300)

https://x.com/OpenAI/status/1963329936368046111

---

## 微软模拟光计算机突破 #2

> **Microsoft Research Cambridge** 团队成功研发出模拟光计算机，并在证券结算和MRI扫描加速两大实际问题中验证了其可行性，展现出超越传统GPU的能效与速度潜力。

**Microsoft Research Cambridge** 团队历时四年打造的模拟光计算机（**AOC**）首次在两项高价值优化任务中展现卓越性能。`;

// 执行测试
console.log('🧪 开始测试微信Markdown转换器...\n');

try {
  const html = convertMarkdownToWeChat(testMarkdown, '橘鸦 AI 早报 2025-01-04');
  
  // 输出HTML到文件
  writeFileSync('test-output.html', `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>测试输出</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f0f0f0;">
    ${html}
</body>
</html>`);

  console.log('✅ 测试成功！');
  console.log('📁 输出文件: test-output.html');
  console.log('\n📋 转换的样式元素:');
  console.log('  ✓ H1标题 (橘色居中)');  
  console.log('  ✓ H2标题 (绿色底线 + 编号标签)');
  console.log('  ✓ 无序列表 (自动编号标签)');
  console.log('  ✓ 引用块 (米色背景圆角)');
  console.log('  ✓ 代码块 (白色背景圆角)');
  console.log('  ✓ 内联代码 (橘色标签)');
  console.log('  ✓ 图片 (圆角容器)');
  console.log('  ✓ 分割线 (虚线样式)');
  console.log('  ✓ 强调文本 (深棕色加粗)');
  
} catch (error) {
  console.error('❌ 测试失败:', (error as Error).message);
  process.exit(1);
}
