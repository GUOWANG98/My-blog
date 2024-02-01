import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  base: "/My-blog/",
    // 打包输出目录
  title: "Tom",
  description: "A VitePress Site",
  head:[['link',{rel:'icon',href:'logo.png'}]],
  themeConfig: {
    outlineTitle:'文章目录',
    outline:[2,6],

    // https://vitepress.dev/reference/default-theme-config
    // logo: 'logo.png',
    // 导航栏数据
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
    // nav: [
    //   { text: '前端导航', link: '/nav/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    nav,
    sidebar: {
      // 当用户在 `map` 目录页面下将会展示这个侧边栏，没有写就不展示
      '/note/': [
        {
          text: '前端框架',
          collapsed: false, // 是否可折叠
          items: [
            { text: 'Vue基础入门', link: '/note/Vue/' },
            { text: 'React基础入门', link: '/note/React/' },
            { text: 'Uni-App基础入门', link: '/note/uni-app/' },
          ]
        },
        {
          text: '常用命令行工具',
          collapsed: false, // 是否可折叠
          items: [
            { text: 'Git相关', link: '/note/Git/' },
            { text: 'npm相关', link: '/note/npm/' },
          ]
        },
        {
          text: '常用库的使用与配置',
          collapsed: false, // 是否可折叠
          items: [
            { text: 'Day.js', link: '/note/dayjs/' },
            { text: 'Mock', link: '/note/mock/' },
          ]
        }
      ],
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GUOWANG98' }
    ]
  }
})
