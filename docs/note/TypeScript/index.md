---
prev:
  text: 'Uni-App基础入门'
  link: '/note/uni-app/'
---

# TypeScript 基础入门

- TypeScript 是 JS 的超集，TS 提供了 JS 的所有功能，并且额外的增加了：**类型系统**
- 所有的 JS 代码都是 TS 代码
- **JS 有类型**（比如，number/string 等），但是 **JS 不会检查变量的类型是否发生变化**，而 TS 会检查
- 在 TS 中**约定了什么类型，就只能给变量赋值该类型的值，否则，就会报**

## TypeScript 类型注解分类

JS 已有类型

- 原始类型，简单类型（`number/string/boolean/null/undefined`）
- 复杂数据类型（数组，对象，函数等）

TS 新增类型

- 联合类型
- 自定义类型（类型别名）
- 接口
- 元组
- 字面量类型
- 枚举
- void 等等..

## TypeScript 简单数据类型

- 原始类型：number/string/boolean/null/undefined

- 特点：简单，这些类型，完全按照 JS 中类型的名称来书写

  ```js
  let age: number = 18;
  let myName: string = '老师';
  let isLoading: boolean = false;
  let n: null = null;
  let u: undefined = null;
  ```

## 数组类型

- 数组类型的两种写法,推荐使用 `number[]` 写法

  ```js
  // 写法一：
  let numbers: number[] = [1, 3, 5];
  // 写法二：
  let strings: Array<string> = ['a', 'b', 'c'];
  ```

## 联合类型

- 能够通过联合类型将多个类型组合成一个类型

  ```js
  let arr: (number | string)[] = [1, 'a', 3, 'b'];
  ```

## 类型别名

- `类型别名（自定义类型）`：为任意类型起别名

- 使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，**简化该类型的使用**

  ```js
  type CustomArray = (number | string | boolean)[];

  let arr1: CustomArray = [1, 'a', 3, 'b', true];
  let arr2: CustomArray = ['x', 'y', 6, 7, false];
  ```

  解释:

  1. 使用 `type` 关键字来创建自定义类型
  2. 类型别名（比如，此处的 _CustomArray_）可以是任意合法的变量名称
  3. 推荐使用大写字母开头

## 函数类型

函数类型

- 函数的类型实际上指的是：`函数参数`和`返回值`的类型

- 注意:必须给参数指定类型

  ```js
  // 函数声明
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // 箭头函数
  const add = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  ```

  ### void 类型

  **目标：**能够了解 void 类型的使用

  **内容：**

  - 如果函数没有返回值，那么，函数返回值类型为：`void`

  ```js
  function greet(name: string): void {
    console.log('Hello', name);
  }
  ```

  ### 可选参数

  能够使用?给函数指令可选参数类型,谁不想显示在冒号前面加问号即可

  ```json
  function mySlice(start?: number, end?: number): void {
    console.log('起始索引：', start, '结束索引：', end)
  }
  ```

## 对象类型

1. 使用 `{}` 来描述对象结构
2. 属性采用`属性名: 类型`的形式
3. 方法采用`方法名(): 返回值类型`的形式

```js
let add: {
  name: string,
  age: number,
} = {
  name: 'jack',
  age: 18,
};
```

**interface 的自定义事件**

```js
interface gagag {
  name: string;
  height: Number;
  stydy(): void;
}
let data: gagag = {
  name: '灰太狼',
  height: 110,
  stydy() {
    console.log('今晚吃涮羊肉');
  },
};
console.log(data);
```

**接口继承**

- 如果两个接口之间有相同的属性或方法，可以将**公共的属性或方法抽离出来，通过继承来实现复用**
- 比如，这两个接口都有 x、y 两个属性，重复写两次，可以，但很繁琐

```js
interface Point2D {
  x: number;
  y: number;
}
// 继承 Point2D
interface Point3D extends Point2D {
  z: number;
}

//最新面试问题:type如何实现继承
type Point2D = { x: number, y: number };
// 继承 Point2D
type Point3D = {
  z: number,
} & Point2D;
```

解释：

1. 使用 `extends`(继承)关键字实现了接口 Point3D 继承 Point2D
2. 继承后，Point3D 就有了 Point2D 的所有属性和方法(此时，Point3D 同时有 x、y、z 三个属性)

## 元组类型

- 使用 number[] 的缺点：不严谨，因为该类型的数组中可以出现任意多个数字
- 更好的方式：`元组 Tuple`
- 元组类型是另一种类型的数组，它确切地知道包含多少个元素，**以及特定索引对应的类型**
- 元组类型可以确切地标记出有多少个元素，以及每个元素的类型

```js
//数组方法
let position: number[] = [116.2317, 39.5427];
//元组方法
let position: [number, number] = [39.5427, 116.2317];
```

## 字面量类型

**使用模式和场景**

- 使用模式：**字面量类型配合联合类型一起使用**
- 使用场景：用来表示一组明确的可选值列表

```js
type str = '男' | '女';
let add: str = '男';
add = '女';
```

## 枚举类型

解释:

1. 使用 `enum` 关键字定义枚举
2. 约定枚举名称以大写字母开头
3. 枚举中的多个值之间通过 `,`（逗号）分隔
4. 定义好枚举后，直接使用枚举名称作为类型注解

```js
// 创建枚举
enum Direction { Up, Down, Left, Right }
// 使用枚举类型
function changeDirection(direction: Direction) {
  console.log(direction)
}
// 调用函数时，需要应该传入：枚举 Direction 成员的任意一个
// 类似于 JS 中的对象，直接通过 点（.）语法 访问枚举的成员
changeDirection(Direction.Up)
```

## any 类型

- **原则:不推荐使用 any**!这会让 TypeScript 变为 “AnyScript”(失去 TS 类型保护的优势)
- 因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示

```js
let obj: any = { x: 0 };

obj.bar = 100;
obj();
const n: number = obj;
```

解释:以上操作都不会有任何类型错误提示，即使可能存在错误

## 类型断言

有时候你会比 TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。 比如，

```js
// 如页面有 <image src="xxx" class='.box'></image>
//let a = document.createElement('img') 鼠标移上去可以看到需要加的代码
let arr = document.querySelector('.box') as HTMLImageElement
if(arr){
    console.log(arr.src);
}
```

1. 使用 `as` 关键字实现类型断言
2. 关键字 as 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）
3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了

## TypeScript 泛型

- **泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用**，常用于：函数、接口、class 中
- 需求：创建一个 id 函数，传入什么数据就返回该数据本身(也就是说，参数和返回值类型相同)

```js
function id(value: number): number {
  return value;
}
```

- 比如，id(10) 调用以上函数就会直接返回 10 本身。但是，该函数只接收数值类型，无法用于其他类型
- 为了能让函数能够接受任意类型，可以将参数类型修改为 any。但是，这样就失去了 TS 的类型保护，类型不安全

```js
function id(value: any): any {
  return value;
}
```

**在保证类型安全(不丢失类型信息)的同时，可以让函数等与多种不同的类型一起工作，灵活可复用**

## 泛型-泛型函数

解释:

1. 语法：在函数名称的后面添加 `<>`(尖括号)，**尖括号中添加类型变量**，比如此处的 Type
2. **类型变量 Type，是一种特殊类型的变量，它处理类型而不是值**
3. **该类型变量相当于一个类型容器**，能够捕获用户提供的类型(具体是什么类型由用户调用该函数时指定)
4. 因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型
5. 类型变量 Type，可以是任意合法的变量名称

```js
function add<T>(wbd: T): T {
  return wbd;
}
console.log(add < number > 1);
console.log(add < string > '王八蛋');
console.log(add < boolean > true);
```

**指定更加具体的类型**
将类型修改为 `Type[]`(Type 类型的数组)，因为只要是数组就一定存在 length 属性，因此就可以访问了

```js
function add<T>(wbd: T): T[] {
  return wbd;
}
console.log(add < number > (1, 2, 3));
```

**添加约束**

- 解释:
  1. 创建描述约束的接口 wbd，该接口要求提供 length 属性
  2. 通过 `extends` 关键字使用该接口，为泛型(类型变量)添加约束
  3. 该约束表示：**传入的类型必须具有 length 属性**
- 注意:传入的实参(比如，数组)只要有 length 属性即可（类型兼容性)

```js
// 创建一个接口
interface wbd { length: number }
// Type extends ILength 添加泛型约束
// 解释：表示传入的 类型 必须满足 ILength 接口的要求才行，也就是得有一个 number 类型的 length 属性
function id<Type extends wbd>(value: Type): Type {
  console.log(value.length)
  return value
}
```

## TypeScript 与 Vue

参考链接：https://vuejs.org/guide/typescript/composition-api.html

vue3 配合 ts 中，还需要额外安装一个 vscode 插件：Typescript Vue Plugin

## 1.defineProps--父向子传值

父组件

```js
<script setup lang="ts">
import Son from './components/Son.vue'
const money = ref(10)
const car = ref(100)
</script>

<template>
<Son :money="money" :car="car"></Son>
</template>
```

子组件 defineProps 配合 ts 的泛型定义 props 类型校验，这样更直接

```js
<script setup lang="ts">
// 接收数据
defineProps<{ money?:number, car?:string }>()
</script>

<template>
<h2>我是子组件 --- {{money}}---{{car}} </h2>
</template>
```

如果提供的默认值需要在模板中渲染，需要额外添加配置

```js
// vite.config.js
export default {
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
};
```

## 2.defineEmits--子向父传值

子组件

```js
<script setup lang="ts">
// 接收数据
defineProps({
    money:Number
})
// const emit = defineEmits(['pay','get'])  vue3写法
// vue3 + TS写法
const emit = defineEmits<{
    (e:'pay',num:number):void
    (e:'get',add:number):void
}>()
const hua = ()=>{
    emit('pay',10)
}
const get = ()=>{
   emit('get',100)
}
</script>
<template>
<h2>我是子组件 --- {{money}}  </h2>
<button @click="hua">花钱</button>
<button @click="get">赚钱</button>
</template>
```

父组件

```js
<script setup lang="ts">
import {ref} from 'vue'
import Son from './components/Son.vue'
let  money = ref(1000)
// 点击减少
const pay = (num:number)=>{
  money.value = money.value - num
}
// 点击增加
const get =(add:number) =>{
 money.value = money.value + add
}
</script>

<template>
<h1>我是父组件</h1>
<Son :money="money" @pay="pay" @get="get"></Son>
</template>
```

## ref 与 Typescript

在 ref 中如果是简单数据类型,可以忽略不写,如果是复杂数据类型就得加上泛型

```js
<script setup lang="ts">
import { ref } from 'vue';
   type wbd ={{id:number,name:string,done:boolean}[]}
   const list = ref<wbd>([])

   setTimeout(()=>{
   list.value = [
      {id:1,name:'tom',done:true}
      {id:2,name:'jack',done:false}
  ]
})
</script>
```

## computed 与 Typescript

通过泛型可以指定 computed 计算属性的类型，通常可以省略

```js
const leftCount =
  computed <
  number >
  (() => {
    return list.value.filter((item) => item.done).length;
  });
console.log(leftCount.value);
```

## 事件处理与 Typescript

```JS
const move = (e: MouseEvent) => {
  mouse.value.x = e.pageX
  mouse.value.y = e.pageY
}

<h1 @mousemove="move($event)">根组件</h1>
```

## Template Ref 与 Typescript

```JS
document.createElement('img')  //如何查看一个DOM对象的类型：通过控制台进行查看
const imgRef = ref<HTMLImageElement | null>(null)
//imgRef变量有两个状态
//1.初始状态null   2.绑定后  dom元素
onMounted(() => {
  console.log(imgRef.value?.src)
})
```

## 可选链操作符

- **可选链**操作符( **`?.`** )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。
- 参考文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining

```js
let nestedProp = obj.first?.second;
console.log(res.data?.data);
obj.fn?.();

if (obj.fn) {
  obj.fn();
}
obj.fn && obj.fn();

// 等价于
let temp = obj.first;
let nestedProp = temp === null || temp === undefined ? undefined : temp.second;
```

## 非空断言

如果我们明确的知道对象的属性一定不会为空，那么可以使用非空断言 `!`

注意：非空断言一定要确保有该属性才能使用，不然使用非空断言会导致 bug

```js
// 告诉typescript, 明确的指定obj不可能为空
let nestedProp = obj!.second;
```

## 类型声明文件

- **类型声明文件：用来为已存在的 JS 库提供类型信息**
- TS 中有两种文件类型：1 `.ts` 文件 2 `.d.ts` 文件
- .ts 文件:
  1. `既包含类型信息又可执行代码`
  2. 可以被编译为 .js 文件，然后，执行代码
  3. 用途：编写程序代码的地方
- .d.ts 文件:
  1. `只包含类型信息`的类型声明文件
  2. **不会生成 .js 文件，仅用于提供类型信息,在.d.ts 文件中不允许出现可执行的代码，只用于提供类型**
  3. 用途：为 JS 提供类型信息
- 总结：.ts 是 `implementation`(代码实现文件)；**.d.ts 是 declaration(类型声明文件)**
- 如果要为 JS 库提供类型信息，要使用 `.d.ts` 文件
