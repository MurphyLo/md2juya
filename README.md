# 微信H5推送 Markdown转换器

一个简洁高效的TypeScript工具，将标准Markdown转换为微信H5推送格式的HTML。

## 🎯 支持的Markdown语法

| 语法 | Markdown | 渲染效果 |
|------|----------|----------|
| **一级标题** | `# 标题` | 橘色居中大字体 |
| **二级标题** | `## 标题 #1` | 绿色底线 + 米色背景 + 编号标签 |
| **无序列表** | `- 列表项` | 自动生成橘色编号标签 |
| **引用块** | `> 引用内容` | 米色背景圆角框 |
| **代码块** | ` ```代码``` ` | 白色背景圆角框 |
| **内联代码** | `` `代码` `` | 橘色高亮标签 |
| **图片** | `![alt](url)` | 圆角图片容器 |
| **分割线** | `---` | 虚线样式 |
| **强调文本** | `**粗体**` | 深棕色加粗，手动间距控制 |
| **表格** | `\| 列1 \| 列2 \|` | 奇偶行交替背景色 |

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 构建项目
```bash
npm run build
```

### 运行测试
```bash
npm test
```

### 命令行使用
```bash
npm start input.md [output.html]
```

## 💻 编程接口

### 基础用法
```typescript
import { convertMarkdownToWeChat } from './src/converter';

const markdown = `
# AI早报 2025-01-04

## 重要新闻 #1

- ChatGPT更新
- 新功能发布

> 这是一个重要的引用内容

代码示例: \`console.log('Hello')\`
`;

const html = convertMarkdownToWeChat(markdown, '今日AI早报');
console.log(html);
```

### 高级用法
```typescript
import { WeChatMarkdownConverter } from './src/converter';

const converter = new WeChatMarkdownConverter();
const contentOnly = converter.convertContent(markdown); // 只转换内容，不包含容器
const fullDocument = converter.convert(markdown, '文档标题'); // 完整文档
```

## 📁 项目结构

```
src/
├── styles.ts      # 样式配置(直接提取自微信HTML)
├── converter.ts   # 核心转换器类  
├── index.ts       # 主入口文件
└── test.ts        # 测试用例
```

## 🎨 设计原理

- **数据驱动渲染**: 无复杂抽象，直接的样式映射
- **精确样式复制**: 直接提取原始微信HTML样式
- **简洁架构**: 避免过度工程化，专注核心功能
- **类型安全**: 完整的TypeScript类型支持

## 📝 示例输出

转换后的HTML将包含完整的微信推送样式，可直接用于H5发布。

查看 `test-output.html` 了解实际效果。
