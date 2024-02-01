import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  { text: '技术笔记',items:[
   {
    items:[
      {text:'VitePress',link:'/note/VitePress/'},{text:'Vue3',link:'/note/Vue/'},{text:'React',link:'/note/React/'},{text:'Uni-App',link:'/note/Uni-App/'},{text:'TypeScript',link:'/note/TypeScript/'}
    ],
   },
   {
    // text:'css相关',
    items:[
      {text:'Mock数据',link:'/note/mock/'},{text:'Git常用命令',link:'/note/Git/'},{text:'Day.js使用技巧',link:'/note/dayjs/'},{text:'npm常用命令',link:'/note/npm/'}
    ]
   }
  ]},
  // { text: '文章', items:[{text:'111',link:'/docs/'},{text:'222',link:'/docs/'}] },
  {
    text: '关于',link: '/about/'
  },
]
