---
prev:
  text: 'Git常用命令'
  link: '/note/Git/'
next:
  text: 'npm常用命令'
  link: '/note/npm/'
---

# Day.js 使用技巧

**dayjs 是一个轻量的处理时间和日期的 JavaScript 库**

### **1.安装**

```sh
npm install dayjs
```

### **2.常用操作**

```sh
dayjs().format();                                     // 2020-09-08T13:42:32+08:00
dayjs().format('YYYY-MM-DD');                         // 2020-09-08
dayjs().format('YYYY-MM-DD HH:mm:ss');                // 2020-09-08 13:47:12
dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss');   // 2011-10-17 00:17:56
```

### 3.操作

| 单位        | 缩写 | 描述                            |
| ----------- | ---- | ------------------------------- |
| day         | d    | 日                              |
| week        | w    | 周                              |
| month       | M    | 月份(0-11)                      |
| quarter     | Q    | 季度，依赖 `QuarterOfYear` 插件 |
| year        | y    | 年                              |
| hour        | h    | 小时                            |
| minute      | m    | 分钟                            |
| second      | s    | 秒                              |
| millisecond | ms   | 毫秒                            |

**1.增加**

返回增加一定时间的复制的 Day.js 对象

```js
dayjs().add(7, 'day');
```

**2.减去**

```js
dayjs().subtract(7, 'year');
```

### 4.国际化支持

Day.js 内置了 66 种语言的国际化支持，你可以方便地在你的应用中切换不同的语言。下面是一些常用的国际化示例：

```js
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 导入中文语言包

// 设置语言为中文
dayjs.locale('zh-cn');

// 格式化日期
dayjs().format('dddd'); // "星期六"
```
