# Input 输入框

常用的输入操作。

----
## 基本用法
<labex-select 
  class="moor-select"
  label="label"
  value="value"
  :options="options">
</labex-select>
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
<labex-select 
  class="moor-select"
  label="label"
  value="value"
  v-model="selectValue"
  :options="options">
</labex-select>
```
:::


### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| placeholder | 默认文字 | string | — | — |
| disabled | 禁止输入 | string | — | - |

