# AI 导航站

> 汇集全球优质 AI 工具，助力智能时代

## 项目简介

AI 导航站是一个精心打造的 AI 工具导航平台，收录了 41 个优质的 AI 工具，涵盖 7 大分类，包括热门工具、对话工具、编程工具、绘画工具、新闻资讯、大模型 API 和 Agent 工具等。

## 在线访问

🌐 **[https://pt-ai-navs.zeabur.app/](https://pt-ai-navs.zeabur.app/)**

## 功能特性

- 🔍 **智能搜索**：支持按工具名称或描述快速搜索 AI 工具
- 📊 **分类展示**：将工具按类别组织，方便用户快速找到所需工具
- 🏷️ **标签系统**：每个工具都标注了免费/付费、国产/国外、开源等标签
- 📱 **响应式设计**：完美适配桌面端和移动端设备
- ⚡ **高性能**：基于 Next.js 15 和 React 19，提供流畅的用户体验

## 工具分类

| 分类        | 工具数量 | 说明                                                  |
| ----------- | -------- | ----------------------------------------------------- |
| AI 热门工具 | 7        | 豆包、DeepSeek、ChatGPT、Claude、千问、Kimi、文心一言 |
| AI 对话工具 | 7        | 各类 AI 对话助手                                      |
| AI 编程工具 | 6        | GitHub Copilot、Cursor、Codeium 等                    |
| AI 绘画     | 6        | Midjourney、Stable Diffusion、DALL-E 等               |
| AI 新闻     | 5        | 36氪、机器之心、新智元等                              |
| 大模型 API  | 5        | OpenAI API、DeepSeek API、通义千问 API 等             |
| Agent 工具  | 6        | Coze、Dify、FastGPT 等                                |

## 技术栈

- **框架**：[Next.js 15.3.8](https://nextjs.org/) - React 全栈框架
- **UI 库**：[React 19](https://react.dev/) - 用户界面库
- **样式**：[Tailwind CSS 4](https://tailwindcss.com/) - 原子化 CSS 框架
- **组件库**：[Material-UI 7](https://mui.com/) - React 组件库
- **语言**：[TypeScript](https://www.typescriptlang.org/) - JavaScript 超集
- **包管理器**：[pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器

## 项目结构

```
ai-navs/
├── public/              # 静态资源
│   └── img/            # 工具图标
├── src/
│   ├── app/
│   │   ├── components/  # React 组件
│   │   │   ├── Card.tsx        # 工具卡片组件
│   │   │   ├── Category.tsx    # 分类组件
│   │   │   ├── Navbar.tsx      # 导航栏组件
│   │   │   └── SearchBar.tsx   # 搜索栏组件
│   │   ├── data.json    # 工具数据
│   │   ├── globals.css  # 全局样式
│   │   ├── layout.tsx   # 根布局
│   │   └── page.tsx     # 主页面
│   └── types/
│       └── index.ts     # TypeScript 类型定义
└── package.json         # 项目依赖配置
```

## 快速开始

### 环境要求

- Node.js 20.x 或更高版本
- pnpm 8.x 或更高版本

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 添加新工具

编辑 `src/app/data.json` 文件，在对应的分类中添加新的工具信息：

```json
{
  "id": "工具ID",
  "name": "工具名称",
  "desc": "工具描述",
  "img": "/img/图标文件名.svg",
  "link": "工具链接",
  "tags": ["免费/付费", "国产/国外", "开源(可选)"]
}
```

## 部署

本项目已部署在 Zeabur 平台，你也可以部署到其他平台：

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Zeabur](https://zeabur.com/)

## 许可证

Copyright © 2026 AI导航站 - 所有权利保留

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 公众号

<table>
  <tr>
    <td align="center">
      <img src="public/wechat-qrcode.jpg" width="150" />
      <br/>
      <b>公众号</b>
    </td>
  </tr>
</table>
