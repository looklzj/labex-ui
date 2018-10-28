# Switch 单选

常用的单选操作。

----
## 基本用法
<labex-switch
  v-model="lightSwitch">开关(开):
</labex-switch>
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
<labex-switch
  v-model="lightSwitch">开关(开):
</labex-switch>
```
:::



