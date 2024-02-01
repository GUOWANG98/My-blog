# faker

### 介绍

Faker.js 是十分流行的 Node.js 工具库，2022年初，Faker.js的作者突然删库跑路，导致众多应用程序崩溃，为了继续使用Faker的功能，社区的几位开发者组成团队决定创建并维护新项目faker-js/faker，现其已成为社区控制的项目，github地址为 https://github.com/faker-js/faker，官方文档地址 https://fakerjs.dev/。

### 使用

**1.安装**

```jsx
npm install --save-dev @faker-js/faker
```

**2.代码中使用**

```jsx
import { faker } from '@faker-js/faker'
const nameArray = []
// 根据插件随机生成数据 并导出
for (let i = 0; i < 1000; i++) {
  nameArray.push(faker.person.fullName())
}
export default nameArray
```

