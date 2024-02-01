import{_ as i,c as t,o as a,V as e}from"./chunks/framework.e03fDqEv.js";const m=JSON.parse('{"title":"常用 Git 命令","description":"","frontmatter":{"prev":{"text":"Mock数据","link":"/note/Mock/"},"next":{"text":"Day.js使用技巧","link":"/note/dayjs/"}},"headers":[],"relativePath":"note/Git/index.md","filePath":"note/Git/index.md"}'),l={name:"note/Git/index.md"},o=e('<h1 id="常用-git-命令" tabindex="-1">常用 Git 命令 <a class="header-anchor" href="#常用-git-命令" aria-label="Permalink to &quot;常用 Git 命令&quot;">​</a></h1><hr><h3 id="本地仓库操作" tabindex="-1">本地仓库操作 <a class="header-anchor" href="#本地仓库操作" aria-label="Permalink to &quot;本地仓库操作&quot;">​</a></h3><ul><li>git status 查看文件状态</li><li>git add 将文件的修改加入暂存区</li><li>git reset 将暂存区的文件取消暂存或者是切换到指定版本</li><li>git commit 将暂存区的文件修改提交到版本库</li><li>git log 查看日志</li></ul><h3 id="git-工作区中文件的状态" tabindex="-1">Git 工作区中文件的状态 <a class="header-anchor" href="#git-工作区中文件的状态" aria-label="Permalink to &quot;Git 工作区中文件的状态&quot;">​</a></h3><p>Git 工作区中的文件存在两种状态：</p><ul><li><p>untracked 未跟踪（未被纳入版本控制）</p></li><li><p>tracked 已跟踪（被纳入版本控制）</p><p>1）Unmodified 未修改状态</p><p>2）Modified 已修改状态</p><p>3）Staged 已暂存状态</p></li></ul><p><strong>注意</strong>：文件的状态会随着我们执行 Git 的命令发生变化</p><h3 id="远程仓库操作" tabindex="-1">远程仓库操作 <a class="header-anchor" href="#远程仓库操作" aria-label="Permalink to &quot;远程仓库操作&quot;">​</a></h3><p>前面执行的命令操作都是针对的本地仓库，本节我们会学习关于远程仓库的一些操作，具体包括：</p><ul><li>git remote 查看远程仓库</li><li>git remote add 添加远程仓库</li><li>git clone 从远程仓库克隆</li><li>git pull 从远程仓库拉取</li><li>git push 推送到远程仓库</li></ul><h3 id="分支操作" tabindex="-1">分支操作 <a class="header-anchor" href="#分支操作" aria-label="Permalink to &quot;分支操作&quot;">​</a></h3><p>分支是 Git 使用过程中非常重要的概念。使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。</p><p>本地仓库和远程仓库中都有分支，同一个仓库可以有多个分支，各个分支相互独立，互不干扰。</p><p>通过 git init 命令创建本地仓库时默认会创建一个 master 分支。</p><ul><li>git branch 查看分支</li><li>git branch [name] 创建分支</li><li>git checkout [name] 切换分支</li><li>git push [shortName] [name] 推送至远程仓库分支</li><li>git merge [name] 合并分支</li></ul><h3 id="标签操作" tabindex="-1">标签操作 <a class="header-anchor" href="#标签操作" aria-label="Permalink to &quot;标签操作&quot;">​</a></h3><p>标签相关的命令：</p><ul><li>git tag 查看标签</li><li>git tag [name] 创建标签</li><li>git push [shortName] [name] 将标签推送至远程仓库</li><li>git checkout -b [branch] [name] 检出标签</li></ul>',19),r=[o];function n(d,h,s,c,p,u){return a(),t("div",null,r)}const _=i(l,[["render",n]]);export{m as __pageData,_ as default};