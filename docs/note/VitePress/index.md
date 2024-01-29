---
layoutClass: m-nav-layout
# outline: [2, 3, 4]
---

<style src="../index.scss"></style>

# 前言

VitePress 是一个基于 Vue.js 和 Vite 构建的静态网站生成器，专注于快速搭建文档和技术博客！

## 创建项目

**安装 vitepress**

首先新建文件夹，打开 cmd 窗口

```sh
pnpm add -D vitepress
```

**初始化 Vitepress**

```sh
pnpm vitepress init
```

这是我的配置，简单介绍一下

1. 第一个是在当前根目录下创建 vitepress 项目，通常我会叫 docs 用来包裹 vitepress 文件
2. 站点标题。后续可以在配置中改
3. 站点描述。后续可以在配置中改
4. 主题，建议选择第二个，个人觉得比较好看
5. 是否使用 ts，我们个人学习就没必要 ts 了，主要还是我懒
6. 是否添加脚本到 package.json，这个还是需要的，启动命令，打包命令这些都得用

![start](../../public/start.png)

初始化成功后，使用 vscode 打开文件夹，会看到这样一个目录。接下来简单介绍一下每个文件的含义

- .vitepress，最核心的目录
- theme 目录。自定义主题配置，css 样式等
- config.mjs。最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
- node_modules。安装的依赖
- api-examples.md 和 markdown-examples.md。官方给的两个示例
- index.md。主页相关
- package.json 和 pnpm-lock.yml。包管理工具需要用的

![demo](../../public/demo.png)

**启动项目**

```sh
pnpm run docs:dev
```

打开，看到这个，说明初始化成功

![home](../../public/home.png)

## 自定义

### 美化主页

对于主页，我们自定义的内容有哪些？如下图，9 个地方可以自定义。接下来就一一叙述这 9 个地方怎么自定义的。

![home1](../../public/home1.png)

1、7、8、9 这三个配置是在 config.mjs 中配置的

其中，title 对应 1，nav 对应 7，socialLinks 对应 8。description 是 SEO 要用的，我们不用关注。

```js
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '我是1', // 对应序号1
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // 我是7
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    footer: {
      // 我是9
      copyright: '我是底部',
    },
    socialLinks: [
      // 我是8
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
```

2-6 是在 index.md 文件中自定义的。简单介绍一下对应关系

` name<==>2` ` text<==>3` `tagline<==>4 ` ` actions<==>5` `features<==>6`

需要说明的是，对于 5 这两个按钮，是可以跳转的，**link 指定路径**，比如/api-example 就是在项目根目录下找 api-example.md 这个文件

```js
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Tom的VitePress文档'
  text: 'VitePress文档介绍'
  tagline: 好好学习，天天向上
  actions:
    - theme: brand
      text: 示例1
      link: /markdown-examples
    - theme: alt
      text: 示例2
      link: /api-examples

features:
  - title: VitePress
    details: VitePress介绍
  - title: vue
    details: vue介绍
  - title: react
    details: react介绍
---

```

修改后的页面如下：
![home3](../../public/home3.png)

### 主页扩展

我们可能还想要对页面进行进一步美化，添加一些图标。可以去这个网站找图片<https://www.iconfont.cn/>

将找到的图片放在根目录下的 public 目录下。

```js
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Tom的VitePress文档'
  text: 'VitePress文档介绍'
  tagline: 好好学习，天天向上
  image:
    src: /logo.png
    alt: 背景图
  actions:
    - theme: brand
      text: 示例1
      link: /markdown-examples
    - theme: alt
      text: 示例2
      link: /api-examples

features:
  - title: VitePress
    details: VitePress介绍
  - title: vue
    details: vue介绍
  - title: react
    details: react介绍
---
```

最后美化的效果如图：

![home4](../../public/home4.png)

### icon 设置

美化地址栏 icon

![home5](../../public/home5.png)

在`config.mjs defineConfig`下面直接配置即可

```js
head:[['link',{rel:'icon',href:'fox.png'}]],
```

美化 title icon
![home6](../../public/home6.png)

在`index.md`下面直接配置即可

```js
hero:
  name: 'Tom的VitePress文档'
  text: 'VitePress文档介绍'
  tagline: 好好学习，天天向上
  image:
    src: /logo.png
    alt: 背景图
```

### 文章页扩展

当然，这样对一些项目的文档是非常合适的。但是如果我们需要记笔记的话有些繁琐，并且三边栏总感觉可以查阅的东西变少了。因此可以使用刚才说的自定义样式。将三边栏改成两边栏

在 config.mjs 中的 themeConfig 配置对象中配置

```js
sidebar: false, // 关闭所有的左侧侧边栏
aside: "left", // 设置右侧侧边栏在左侧显示
```

sidebar: false 是关闭全部的侧边栏，如果有的页面需要展示，有的不需要展示 需要这么做

```js
sidebar: {
      // 当用户在 `map` 目录页面下将会展示这个侧边栏，没有写就不会展示
      '/map/': [
        {
          text: 'JavaScript 基础知识',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/guide/' }, // /guide/index.md
            { text: 'One', link: '/guide/one' }, // /guide/one.md
            { text: 'Two', link: '/guide/two' } // /guide/two.md
          ]
        },
      ],
    },
```

### 创建路由

直接在 docs 里面创建和.vitepress 同级文件夹如'nav'在到里面创建 index.md 在里面编辑文档即可，如果需要导航跳转到'nav'文件夹

### 设置搜索框

在`config.mjs defineConfig themeConfig`下面直接配置即可

```js
   // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
```

## 部署

### 提交 github

1.根目录新建.gitignore 文件，告诉 Git 哪些文件或目录应该被忽略，不应该被纳入版本控制

```js
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

2.在 config.mts 文件的 defineConfig 中添加内容

```
  outDir: '../dist',  //指定输出目录的路径
  base: "/blog/",     //表示项目在部署时的根路径为blog
```

3.github 创建仓库并提交代码
![github1](../../public/github1.png)

```
//注：要做在根目录操作
git  init
git  add .
git  commit -m '---'
git remote add origin git@github.com:GUOWANG98/blog.git  // origin后面改为自己的仓库名
git branch -M master
git push -u origin master
```

### 将代码提交到 github 的 gh-pages 分支

1. **安装 `gh-pages`**

```js
pnpm add -D gh-pages
# OR
npm install -D gh-pages
```

**2.在 `package.json` 中添加如下脚本**

```js
"deploy": "gh-pages -d dist -m deploy",
"deploy:build": "npm run build && npm run deploy"
```

**3.打包并运行 `deploy` 脚本**

```js
1.第一步打包
pnpm run  docs:build
2.第二步运行deploy，如果失败转用npm run deploy
pnpm deploy
# OR
npm run deploy
//成功后 github 仓库上面会出现 gh-pages 分支
```

**4.在 Settings 找到 Pages 设置从分支部署**

![github2](../../public/github2.png)

**5.在 Settings 找到 Pages 设置从分支部署**

![github3](../../public/github3.png)

**6.耐心等待几秒钟链接就出来了**

![github4](../../public/github4.png)

### 自动部署

**因为上面操作比较繁琐每次要提交都得打包在运行 deploy ，于是有了以下自动部署**

**编写 `workflow` 文件**

1. 点击仓库的 `Actions` 按钮
2. 点击 `Set up a workflow yourself` 按钮
3. 复制如下内容，取名为 deploy.yml 提交即可

```js
name: GitHub Actions Build and Deploy

# 触发条件
on:
  # 手动触发
  workflow_dispatch:
  # push 到指定分支
  push:
    branches:
      - master

# 设置权限
permissions:
  contents: write

# 设置上海时区
env:
  TZ: Asia/Shanghai

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 安装 pnpm
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      # 设置 node 版本
      - name: Set node version to 18
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'

      # 打包静态文件
      - name: Build
        run: pnpm install && pnpm run docs:build

      # 部署
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # GitHub Pages 读取的分支
          branch: gh-pages
          # 静态文件所在目录
          folder: dist

```

**接下来每次提交代码到 github 就会自动部署了**
