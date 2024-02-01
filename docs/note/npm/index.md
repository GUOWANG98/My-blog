---
prev:
  text: 'Day.js使用技巧'
  link: '/note/dayjs/'
next:
  text: 'Mock数据'
  link: '/note/Mock/'
---

# 常用 npm 命令

### 设置镜像

```sh
#1,淘宝镜像源
npm config set registry https://registry.npmmirror.com
npm config set registry https://registry.npm.taobao.org

#2,腾讯云镜像源
npm config set registry http://mirrors.cloud.tencent.com/npm/

#3,华为云镜像源
npm config set registry https://mirrors.huaweicloud.com/repository/npm/

# 官方默认全局镜像
npm config set registry https://registry.npmjs.org

#检查当前镜像
npm config get registry
```

### 常用命令简写说明

```sh
-g： #--global 的缩写，表示安装到全局目录里
-S： #--save 的缩写，表示安装的包将写入package.json里面的dependencies
-D： #--save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies
 i： #install的缩写，表示安装
```

### 安装模块

```sh
npm init  # npm 初始化当前目录
npm i   # 安装所有依赖
npm install   # 安装所有依赖
npm i express  # 安装模块到默认dependencies
# 安装指定版本和临时源
npm install -g express@2.5.8 --registry=https://registry.npm.taobao.org

npm i express -g  # 会安装到配置的全局目录下
npm i express -S  # 安装包信息将加入到dependencies生产依赖
npm i express -D  # 安装包信息将加入到devDependencies开发依赖
```

### 卸载模块

```sh
npm uninstall express  # 卸载模块，但不卸载模块留在package.json中的对应信息
npm uninstall express -g  # 卸载全局模块
npm uninstall express --save  # 卸载模块，同时卸载留在package.json中dependencies下的信息
npm uninstall express --save-dev  # 卸载模块，同时卸载留在package.json中devDependencies下的信息
```

### 更新模块

```sh
npm update express  # 更新最新版本的express
npm update express@2.1.0  # 更新到指定版本号的express
npm update express@latest  # 更新到最后的新版本
```

### 查看命令

```sh
npm -v   #查看版本号
npm root  # 查看项目中模块所在的目录
npm root -g  # 查看全局安装的模块所在目录
npm list 或者 npm ls  # 查看本地已安装模块的清单列表
npm view express dependencies  # 查看某个包对于各种包的依赖关系
npm view express version  # 查看express最新的版本号
npm view express versions  # 查看所有express历史版本号（很实用）
npm view express  # 查看最新的express版本的信息
npm info express  # 查看express的详细信息，等同于上面的npm view express
npm list express 或 npm ls express  # 查看本地已安装的express的详细信息
npm view express repository.url  # 查看express包的来源地址
```

### 其他命令

```sh
npm cache clean  # 清除npm的缓存
npm prune  # 清除项目中没有被使用的包
npm outdated  # 检查模块是否已经过时
npm repo express  # 会打开默认浏览器跳转到github中express的页面
npm docs express  # 会打开默认浏览器跳转到github中express的README.MD文件信息
npm home express  # 会打开默认浏览器跳转到github中express的主页
npm install -g npm@9.8.1 # 升级npm
```

### pnpm 用法

```sh
# 安装指定版本pnpm
npm install -g pnpm@6.32.2

#安装软件包及其依赖的任何软件包 如果workspace有配置会优先从workspace安装
pnpm add <pkg>
#安装项目所有依赖
pnpm install
#更新软件包的最新版本
pnpm update
#移除项目依赖
pnpm remove
#运行脚本
pnpm run
#创建一个 package.json 文件
pnpm init
#以一个树形结构输出所有的已安装package的版本及其依赖
pnpm list
```
