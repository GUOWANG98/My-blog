import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  { text: '技术笔记',items:[
   {
    text:'主流框架基础',
    items:[
      {text:'VitePress',link:'/note/VitePress/'},{text:'Vue3',link:'/note/Vue/'},{text:'React',link:'/note/React/'},{text:'Uni-App',link:'/note/uni-app/'}
    ],
   },
   {
    text:'css相关',
    items:[
      {text:'VitePress',link:'/note/'},{text:'Vue',link:'/note/'},{text:'React',link:'/note/'},{text:'Uni-App',link:'/note/'}
    ]
   }
  ]},
  { text: '文章', items:[{text:'111',link:'/docs/'},{text:'222',link:'/docs/'}] },
  {
    text: '油猴脚本',
    link: 'https://github.com/maomao1996/tampermonkey-scripts',
  },
]
