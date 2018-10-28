# 介绍

本项目由labex项目前端团队开发维护，主要用于公司内部项目的开发。此外，感谢element-ui团队给予源码支持。

----
# 安装
推荐使用 npm 的方式安装。
```
    npm install labex-ui -S
```
----
# 使用
```
    import LabexUI from 'labex-ui'
```
```
    Vue.use(LabexUI)
```
# 实例
这里我们通过一个按钮组件，来简单演示labex-ui的使用方法

<labex-button class="labex-btn" bgcolor="#409eff" color="#fff">确定</labex-button>

::: demo
```html
<labex-button
  class="labex-btn"
  bgcolor="#409eff"
  color="#fff">确定
</labex-button>
```
:::


### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| bgcolor | 按钮背景 | string | — | — |
| color | 字体颜色 | string | — | - |

