# 前言

Vue 3 是一个流行的开源[JavaScript 框架](https://so.csdn.net/so/search?q=JavaScript%E6%A1%86%E6%9E%B6&spm=1001.2101.3001.7020)，用于构建用户界面和单页面应用。它带来了许多新特性和改进，包括更好的性能、更小的打包大小、更好的 TypeScript 支持、全新的组合式 API，以及一些新的内置组件。

**1.Vue 3 的新特性**

Vue 3 引入了许多新特性，包括：

- 组合式 API：这是 Vue 3 最重要的新特性之一，它允许更灵活、更逻辑化地组织代码。
- 更好的性能：Vue 3 的虚拟 DOM 重写，提供了更快的挂载、修补和渲染速度。
- 更小的打包大小：由于新的架构和树摇技术，Vue 3 的打包大小比 Vue 2 小。
- 更好的 TypeScript 支持：Vue 3 在内部使用了 TypeScript，因此它为开发者提供了更好的 TypeScript 支持。

**2. 与 Vue 2 的区别**

Vue 3 与 Vue 2 的主要区别包括：

- 构建：Vue 3 使用 monorepo 架构，更容易管理和维护。

- API：Vue 3 引入了新的组合式 API，它提供了更灵活的代码组织方式。

- 性能：Vue3 在内部实现上进行了大量的优化，使得渲速度更快，性能更好，内存占用更少。

  例如对[响应式](https://so.csdn.net/so/search?q=%E5%93%8D%E5%BA%94%E5%BC%8F&spm=1001.2101.3001.7020)的处理以及重写 diff 算法 ；

- TypeScript：Vue 3 提供了更好的 TypeScript 支持。

- 编码方式：Vue3 引入了 **Composition 组合式 APl**，允许开发者更好地组织和复用逻辑代码，提高代码的可维护性。

## 安装

**使用vite构建项目**

【学习指南】学习某一项技能的最好办法是？没错就是看官方文档，官方文档指南：[vite官网](https://www.vitejs.net/guide/)

### 运行创建项目命令

```sh
# 使用 npm
npm create vite@latest
# 使用 yarn
yarn create vite
# 使用 pnpm
pnpm create vite
```

### vue基础语法

#### **1.文本渲染**

##### v-text

与innertext相似，不会对内部标签进行编译，直接输出

```sh
全写：<span v-text="msg"></span>
简写：<span>{{msg}}</span>
```

##### v-html

双大括号的方式会将数据解释为纯文本，而非HTML。为了输出真正的HTML，可以用v-html指令

```sh
<div v-html="rawHtml"></div>
```

#### 2.属性渲染

##### **v-bind**

简写为   **:属性名="值"**

```sh
<!-- html部分 -->
<div id="app">
 <p v-bind:title="msg">hello world</p>  //全写
 <p :title="msg">hello Vue</p>       // 简写
</div>
```

#### 3.条件渲染

##### v-if

Vue会根据表达式的值的真假条件来渲染元素

```sh
<a v-if="true">显示</a>
<a v-if="false">不显示</a>
```

##### v-else-if

顾名思义，充当 `v-if` 的“else-if 块”，并且可以连续使用，**必须紧跟**在带 `v-if` 或者 `v-else-if` 的元素之后，否则它将不会被识别

##### v-else

v-else是搭配v-if使用的，它必须紧跟在v-if或者v-else-if后面

```
<a v-if="true">显示</a>
<a v-else>不显示</a>
# OR
<a v-if="false">不显示</a>
<a v-else>显示</a>
```

##### **v-show**

与v-if相似，可以控制元素的显示与隐藏；不同点：v-if通过移除Dom节点的方式隐藏，而v-show通过css属性进行隐藏与显示；所以，当需要进行频繁切换隐藏或显示时，推荐用v-show更节约性能，反之推荐使用v-if。

#### **4.事件绑定**

##### v-on指令

主要用来监听dom事件，以便执行一些代码块。表达式可以是一个方法名。
简写为：【 @ 】代码如下（示例）：

```sh
<button @click="consoleLog"></button>
```



#### 5.修饰符

##### 事件修饰符

**.stop（阻止事件冒泡）**

 该事件将不再向上冒泡到父元素。这意味着如果一个父元素和子元素都有相同类型的事件监听器，并且点击了子元素，那么只会触发子元素的事件监听器，父元素的事件监听器将被忽略。

**.prevent（阻止事件的默认行为）**

用于事件处理函数中，阻止事件的默认行为。当事件触发时，浏览器会执行默认的操作，例如提交表单、打开链接等。而使用.prevent修饰符可以阻止这些默认的行为。

**.capture（使用事件捕获模式）**

使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理

**.self（只当事件在该元素本身（而不是子元素）触发时触发回调函数）**

只当在 event.target 是当前元素自身时触发处理函数

**.once（只触发一次回调函数）**

事件将只会触发一次

##### 按键修饰符

**.enter（按下回车键时触发）**

**.tab（按下tab键时触发）**

**.delete（按下删除或退格键时触发）**

**.esc（按下ESC键时触发）**

**.space（按下空格键时触发）**

**.up（按下上箭头键时触发）**

**.down（按下下箭头键时触发）**

**.left（按下左箭头键时触发）**

##### 表单输入修饰符

**.lazy（用于将输入事件延迟到change事件之后触发）**

**.number（自动将输入值转为数字类型）**

**.trim（自动去除输入值两端的空白字符）**

##### 鼠标修饰符

**.left（只在鼠标左键点击时触发）**

**.right（只在鼠标右键点击时触发）**

**.middle（只在鼠标中键点击时触发）**

**.passive（指定事件监听器为被动模式，可以提升滚动性能）**

### vue3组合式API

#### 1. setup 函数

在Vue 3中，你可以使用 `setup` 函数来使用组合式API。`setup` 函数是组件的入口点，在组件实例被创建和初始化之后，但在渲染发生之前被调用。

```sh
export default {
  setup() {
    // 在这里使用组合式 API
  }
}
# OR
<script  setup>
    // 在这里使用组合式 API
</script>
```

#### 2. 响应式编程

你可以在 `setup` 函数中使用 `ref` 和 `reactive` 来创建响应式数据。

```sh
<script  setup>
import { ref, reactive } from 'vue'
    const count = ref(0)
    const state = reactive({ name: 'Vue' })
</script>
```

ref和reactive都可以用来处理响应式问题，在设计理念上ref适合处理普通数据类型，reactive适合处理复杂数据类型

#### 3.计算属性与监视

你可以使用 `computed` 和 `watch` 来创建计算属性和监视响应式数据的变化。

```sh
<script  setup>
  import { ref, computed, watch } from 'vue'
  // 计算属性必须要用returen返回
  const a = ref(10)
  const b = ref(100)
  const c = computed(() => {
		return a.value + b.value
  })
  

watch(() => a.value,(val) => {
    //当a变化时候触发
    console.log(val)
  }
);
</script>
```

#### 4.生命周期钩子

1. beforeCreate：在实例初始化之后、数据观测(data observer)和event/watcher事件配置之前被调用。
2. created：在实例创建完成后被立即调用，此阶段完成了数据观测，但未挂载DOM，$el属性目前不可见。
3. beforeMount：在挂载开始之前被调用，相关的render函数首次被调用。
4. mounted：实例被挂载后调用，此时el被新创建的vm.$el替换了。
5. beforeUpdate：数据更新时调用，发生在虚拟DOM打补丁之前。
6. updated：由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
7. beforeUnmount：实例销毁之前调用。在这一步，实例仍然完全可用。
8. unmounted：Vue实例销毁后调用。

父子组件生命周期顺序

父beforeCreate => 父created => 父beforeMount => 子beforeCreate => 子created =>子beforeMount => 子Mounted=>父Mounted

### vue3高级功能

#### 1. 浅层响应式

在某些情况下，你可能想要创建一个浅层的响应式对象，这样其内部的属性不会被转化为响应式的。这可以通过 `shallowReactive` 函数来实现。

```sh
import { shallowReactive } from 'vue'
const state = shallowReactive({ count: 0 })
```

#### 2. 只读数据

你可以使用 `readonly` 函数来创建一个只读的响应式对象。任何试图修改只读对象的操作都将在开发环境下引发一个错误。

```sh
import { readonly } from 'vue'

const state = readonly({ count: 0 })
```

#### 3. 自定义 Ref

你可以使用 `customRef` 函数来创建一个自定义的响应式引用。这允许你控制和观察当引用的值发生变化时的行为。

```sh
import { customRef } from 'vue'
const count = customRef((track, trigger) => {
  let value = 0
  // 返回一个包含 get 和 set 方法的对象
  return {
   // get 方法用于获取引用的值
    get() {
      // 调用 track 函数来追踪对引用的读取操作
      track()
      // 返回引用的值
      return value
    },
   // set 方法用于设置引用的新值
    set(newValue) {
      // 将 value 更新为新值
      value = newValue
      // 调用 trigger 函数来触发对引用的更新操作
      trigger()
    }
  }
})
```

#### 4.toRefs 和 toRef

toRef 和 toRefs 可以用来复制 reactive 里面的属性然后转成 ref，而且它既保留了响应式，也保留了引用，也就是你从 reactive 复制过来的属性进行修改后，除了视图会更新，原有 ractive 里面对应的值也会跟着更新，如果你知道 浅拷贝 的话那么这个引用就很好理解了，它复制的其实就是引用 + 响应式 ref
不加 s 和 加 s 的区别就是这样：

- toRef: 复制 reactive 里的单个属性并转成 ref
- toRefs: 复制 reactive 里的所有属性并转成 ref

```sh
<script setup>
import { reactive, toRefs } from 'vue'
let info = reactive({
      name: 'Tony',
      greet: 'Hello'
})
// 复制 info 里的 greet 属性
let rGreet = toRef(info, 'greet')
   // 更改 rGreet
const onChangeGreet = () => {
      rGreet.value = 'world!'
}


// 复制整个 info
let rInfo = toRefs(info)
    // 更改 rInfo.greet
const onChangeGreet = () => {
      rInfo.greet.value = 'world!'
}
</script>
```

### vue3组件通信

#### 1.父向子通讯

**父组件：**

在父组件中我们可以在使用子组件时，对其传递props数据

```sh
<Child info="父组件" v-bind:money="10000"></Child>
```

**子组件：**

```sh
let props = defineProps(['info', 'money'])
# OR
let props = defineProps({
  info: {
    type: String,
    required: true, //是否规定必须得有
    default: 'info默认值'
  },
  money: {
    type: Number,
    required: true, //是否规定必须得有
    default: 9999  //默认数据，当父组件没有传递数据时，读取该数据
  }
# OR
interface PropsVo {
  info: String;
  money: Number;
}
const props = defineProps<PropsVo>();
```



#### 2.子向父通讯

**父组件**

在**父组件**中接收自定义事件

```sh
<!-- 绑定自定义事件xxx:实现子组件给父组件传递数据 -->
<Event2 @xxx="handler3"></Event2>

//事件回调---4
const handler3 = (val1, val2) => {
  console.log(val1, val2)
}
```

**子组件**

主要是**子组件**利用**defineEmits**方法返回函数触发自定义事件

```sh
//利用defineEmits方法返回函数触发自定义事件
//defineEmits方法不需要引入直接使用
let $emit = defineEmits(['xxx'])
```

绑定事件传递参数

```sh
<button @click="handler">点击我触发自定义事件xxx</button>
  //按钮点击回调
const handler = () => {
  //第一个参数:事件类型 第二个|三个|N参数即为注入数据
  $emit('xxx', 'data1', 'data2')
}
```

