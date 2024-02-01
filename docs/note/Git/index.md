---
prev:
  text: 'Mock数据'
  link: '/note/Mock/'
next:
  text: 'Day.js使用技巧'
  link: '/note/dayjs/'
---

# 常用 Git 命令

---

### 本地仓库操作

- git status 查看文件状态
- git add 将文件的修改加入暂存区
- git reset 将暂存区的文件取消暂存或者是切换到指定版本
- git commit 将暂存区的文件修改提交到版本库
- git log 查看日志

### Git 工作区中文件的状态

Git 工作区中的文件存在两种状态：

- untracked 未跟踪（未被纳入版本控制）

- tracked 已跟踪（被纳入版本控制）

  1）Unmodified 未修改状态

  2）Modified 已修改状态

  3）Staged 已暂存状态

**注意**：文件的状态会随着我们执行 Git 的命令发生变化

### 远程仓库操作

前面执行的命令操作都是针对的本地仓库，本节我们会学习关于远程仓库的一些操作，具体包括：

- git remote 查看远程仓库
- git remote add 添加远程仓库
- git clone 从远程仓库克隆
- git pull 从远程仓库拉取
- git push 推送到远程仓库

### 分支操作

分支是 Git 使用过程中非常重要的概念。使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。

本地仓库和远程仓库中都有分支，同一个仓库可以有多个分支，各个分支相互独立，互不干扰。

通过 git init 命令创建本地仓库时默认会创建一个 master 分支。

- git branch 查看分支
- git branch [name] 创建分支
- git checkout [name] 切换分支
- git push [shortName] [name] 推送至远程仓库分支
- git merge [name] 合并分支

### 标签操作

标签相关的命令：

- git tag 查看标签
- git tag [name] 创建标签
- git push [shortName] [name] 将标签推送至远程仓库
- git checkout -b [branch] [name] 检出标签
