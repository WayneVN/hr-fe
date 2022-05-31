# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


# step

```bash
    yarn install && yarn dev
```


# 面试问题2 - pagespeed

### 有哪些地方我们的网站做的不好，需要改善？
- 页面首屏响应js到css完全渲染有些卡顿
- 页面图片元素比较多，关键在于整站的 img 都没有指定 width/height 等， 导致首次加载浪费过多带宽，可以小图加载尺寸较小的预览图
  多数cdn提供该服务;
- `static.housesigma.com` 站点下的多数资源可以增加cache时间，例如 `fonts`
- 首屏的 js 解析时间达到了1.2s, 渲染过程到了1s, 说明做了很多模版解析的动作，太长了， 应该使用 `ssr` 形式让首页从后端以完整的dom字符串形式返回;
  同时`ssr` 可以完美解决 `SEO` 问题
- 因为图片数量过多，其实可以简单分类后，做多个域名的并发加载；因为如果所有图片都在一个服务器下，chrome的并发请求数是6，然而页面上数量远远不止
- 在首页时我发现加载了 `mapbox-gl.js`, 但是我没有看到对应地图相关的功能模块，是没有做按需加载么？

### 为了得到以上答案，使用了什么页面速度调试和报告工具？
- 我所用到的对应工具 https://pagespeed.web.dev/ , https://github.com/speedtracker/speedtracker

### 需要怎样改善？
- 使用SSR形式重构相关页面
- 拆分多个cdn域名，以增加并发请求数
- 增加静态资源缓存时间
- 尽可能的使各种资源开启`gzip`
- 限制并区分图片尺寸大小

# 面试问题 3

### 用vue.js，angular（或类似框架）开发的SPA，运行时发现浏览器报告内存使用过高。很多iPhone X，XS 用户反馈使用时间长了容易崩溃
- 崩溃原因： 崩溃的多数情况下都是出现了内存泄漏, 泄漏的原因是内存长时间被占用而无法被GC回收，以至于内存占用率随着时间的增长而增长

### 怎样调试判断是否有内存泄漏？
- 通过 `Chrome Performance` 面板来排查
- 通过该面板可以录制卡顿的地方; 录制后会产生一段折线图，折线图内会表现该时间段内内存的占用率，如果持续高占用不回落，并且多次录制都相同的前提下基本大概率可以判定内存泄漏
- 通过 `Chrome Memory` 面板来确定具体泄漏原因;
- 截取快照生成快照a, 再操作疑似泄漏的操作生成快照b,切换至`comparsion`, 注意 `Delta` 列增长比较大的对象；相同操作2，3次基本就找到对应的泄漏对象了；最后根据具体对象可以定位到具体代码中进行对应修复;

### 如果是内存泄漏通过哪些手段修复？
- 修复之前只需要确定是什么情况引起的内存泄漏就好了；
- 泄漏原因多数出现在以下几种情况内: cache/ 全局变量(this指向错误，导致局部变window)/闭包/定时器引用没有clear/监听没释放

### 如果不是内存泄漏怎么办？
- 如果不是内存泄漏就有可能是 `DOM` 泄漏，比如某些 `dom` 被删除后还是被js继续引用，那么这个时候就是dom泄漏了
- 也有可能是使用的css动画出了问题，导致卡顿,这种情况可以先临时删掉css样式来排除
- 常见的非内存泄漏多数属于在前端做了密集型运算；
- 案例:  之前写`react`时发生过顶层数据变化，导致底层组件无故大量运算，后通过缓存引用的方式解决 `memo/useMemo`;


# 面试问题 4
- 多端开发公用一套api，最好的方式就是使用`monorepo`形式做关联关系组件； 在个别情况下，做个中间层来上下兼容多端业务;
- 如果是`react`/`vue`/`xxx..` 多套框架组合，可以使用微前端的技术选型，例如 `https://qiankun.umijs.org/` 等这类整合方案
