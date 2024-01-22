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
      // '/note/': [
      //   {
      //     text: 'JavaScript 基础知识',
          
      //     items: [
      //       // This shows `/guide/index.md` page.
      //       { text: 'Index', link: '/guide/' }, // /guide/index.md
      //       { text: 'One', link: '/guide/one' }, // /guide/one.md
      //       { text: 'Two', link: '/guide/two' } // /guide/two.md
      //     ]
      //   },
      //   {
      //     text: 'JavaScript 基础知识',
      //     items: [
      //       // This shows `/guide/index.md` page.
      //       { text: 'Index', link: '/guide/' }, // /guide/index.md
      //       { text: 'One', link: '/guide/one' }, // /guide/one.md
      //       { text: 'Two', link: '/guide/two' } // /guide/two.md
      //     ]
      //   },
      //   {
      //     text: 'JavaScript 基础知识',
      //     items: [
      //       // This shows `/guide/index.md` page.
      //       { text: 'Index', link: '/guide/' }, // /guide/index.md
      //       { text: 'One', link: '/guide/one' }, // /guide/one.md
      //       { text: 'Two', link: '/guide/two' } // /guide/two.md
      //     ]
      //   }
      // ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GUOWANG98' }
    ]
  }
})
