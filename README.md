# React Flow Demo

这是一个基于 [React Flow](https://reactflow.dev/) 的流程图演示项目，使用 Next.js 框架构建。

## 功能特点

- ✅ 基本的节点和边展示
- ✅ 节点拖拽功能
- ✅ 边的连接和编辑
- ✅ 内置背景网格
- ✅ 控制按钮（缩放、移动等）
- ✅ 小地图预览

## 技术栈

- **框架**: Next.js 16.1.6
- **语言**: TypeScript
- **核心库**: @xyflow/react ^12.10.0
- **状态管理**: Zustand ^5.0.11
- **样式**: Tailwind CSS 4

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
react-flow-demo/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx       # 主要演示页面
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 基本使用

项目已经配置了一个简单的流程图示例，包含两个节点和一条连接边。您可以：

1. **拖拽节点**: 点击并拖动节点到任意位置
2. **创建连接**: 从一个节点的输出端口拖拽到另一个节点的输入端口
3. **删除连接**: 点击连接边，然后按 Delete 键
4. **使用控制面板**: 顶部的控制面板可以缩放和平移视图
5. **查看小地图**: 右下角的小地图显示整个流程图的概览

## 扩展指南

要添加自定义节点或边，可以参考 [React Flow 官方文档](https://reactflow.dev/learn)。

## 许可证

MIT
