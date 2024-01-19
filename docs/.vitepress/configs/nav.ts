import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  { text: '技术笔记',items:[{text:'VitePress',link:'/note/'},{text:'vue',link:'/note/'}]  },
  { text: '旅游地图', link: '/map/' },
  { text: '文章', items:[{text:'111',link:'/docs/'},{text:'222',link:'/docs/'}] },
  {
    text: '油猴脚本',
    link: 'https://github.com/maomao1996/tampermonkey-scripts',
  },
]
