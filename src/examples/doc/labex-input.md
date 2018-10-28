# Input 输入框

常用的输入操作。

----
## 基本用法
<div style="width:100%;height:20px;">{{input1}}</div>
<labex-input
 v-model="input1"
 placeholder="请输入信息">
</labex-input>

<labex-input
 placeholder="输入框禁用"
 disabled="disabled">
</labex-input>
<script>
export default {
  name: 'app',
  data () {
    return {
      // HelloWorld
      msg: 'Welcome to moor UI!',
      color: 'red',
      // Select
      selectValue: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }
      ],
      // input
      input1: '',
      input2: '这是默认值',
      inputDisabled: true,
      // switch
      lightSwitch: false,
      switchLight: true
    }
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
    handlePrint() {
      console.log('selectValue', this.selectValue);
      console.log('input1:', this.input1);
      console.log('input2:', this.input2);
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>
::: demo

```html
<labex-input
 v-model="input1"
 placeholder="请输入信息">
</labex-input>


<labex-input
 placeholder="输入框禁用"
 :disabled="inputDisabled">
</labex-input>
```
:::


### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| placeholder | 默认文字 | string | — | — |
| disabled | 禁止输入 | string | — | - |

