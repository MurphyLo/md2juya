# 微信H5推送 Markdown转换器

一个简洁高效的TypeScript工具，将标准Markdown转换为微信H5推送格式的HTML。

## 🎯 支持的Markdown语法

| 语法类型 | Markdown语法 | 样式特征 | 特殊功能 |
|---------|-------------|----------|----------|
| **一级标题** | `# 标题` | 橘色居中大字体 | 作为文档主标题 |
| **二级标题** | `## 标题 #1` | 米色背景 + 绿色底线 + 圆角 | 自动识别编号标签 |
| **段落文本** | `普通文本` | 标准段落样式 | 支持内联格式混合 |
| **无序列表** | `- 列表项 #1` | 自动编号 + 橘色标签 | 支持手动/自动编号 |
| **引用块** | `> 引用内容` | 米色背景 + 圆角边框 | 支持内部格式嵌套 |
| **代码块** | ` ```代码``` ` | 白色背景 + 灰色边框 + 圆角 | 自动语法高亮背景 |
| **内联代码** | `` `代码` `` | 米色背景 + 橘红色文字 | 紧凑行内样式 |
| **强调文本** | `**粗体**` | 深棕色加粗 | 用户完全控制间距 |
| **图片** | `![alt](url)` | 圆角 + 居中容器 | 自适应响应式 |
| **分割线** | `---` | 虚线样式分隔 | 标准章节分割 |
| **表格** | `\| 列1 \| 列2 \|` | 奇偶行交替背景 + 边框 | 自动表头样式区分 |

### 🔧 高级特性

- **嵌套格式支持**: 引用块内支持粗体、代码等格式
- **自动编号系统**: 列表项和标题支持 `#数字` 标签
- **响应式设计**: 图片和表格自适应容器宽度  
- **紧凑HTML输出**: 自动移除多余空白，避免渲染异常
- **完整样式隔离**: 每个元素都有独立的内联样式
- **手动间距控制**: 粗体文本支持用户自定义间距

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
# 基础转换
npm start input.md

# 指定输出文件名  
npm start input.md output.html

# 示例：转换示例文件
npm start example.md
```

## 💻 编程接口

### 基础用法
```typescript
import { convertMarkdownToWeChat } from './src/converter';

const markdown = `
# AI早报 2025-01-04

## 重要新闻 #1

- ChatGPT **Projects** 已向免费用户开放 #1
- 微软模拟光计算机突破 #2

> 这是一个包含**加粗文本**和\`内联代码\`的引用块测试。

| 功能 | **免费版** | **付费版** |
|------|------------|------------|
| 基础功能 | ✓ | ✓ |
| 高级功能 | ✗ | ✓ |

\`\`\`javascript
console.log('代码块示例');
function demo() {
  return 'Hello WeChat H5!';
}
\`\`\`
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
├── styles.ts      # 样式配置 - 从原始微信HTML精确提取
├── converter.ts   # 核心转换逻辑 - 自定义marked.js渲染器
├── index.ts       # CLI入口 - 命令行和程序化接口
└── test.ts        # 测试用例 - 功能验证

other/
├── example.md     # 完整功能演示文件
├── README.md      # 项目文档
├── package.json   # 依赖管理 - ESM模块配置
└── tsconfig.json  # TypeScript配置 - 自动生成
```

## 🎨 设计原理

- **数据驱动渲染**: 无复杂抽象，直接的样式映射
- **精确样式复制**: 直接提取原始微信HTML样式
- **简洁架构**: 避免过度工程化，专注核心功能
- **类型安全**: 完整的TypeScript类型支持

## 📝 示例输出

转换后的HTML特点：
- ✅ **完整样式内联** - 无需外部CSS文件
- ✅ **微信兼容性** - 完全复制原始推送样式
- ✅ **响应式设计** - 自适应移动端显示
- ✅ **即用性** - 可直接复制到微信公众号编辑器

### 查看效果
```bash
# 生成示例HTML
npm start example.md

# 用浏览器打开查看
open example_wechat.html
```

## ⚠️ 使用限制

本转换器专门针对微信H5推送样式优化，**仅支持上述表格中列出的Markdown语法**。

**不支持的语法**：
- 有序列表 (`1. 项目`)  
- 多级标题 (`### h3`, `#### h4` 等)
- 链接 (`[文本](url)`) 
- 删除线 (`~~删除~~`)
- 任务列表 (`- [x] 任务`)
- 脚注、数学公式等扩展语法

如需这些功能，建议使用通用Markdown处理器。
