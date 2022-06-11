<template>
  <!-- 当组件返回单个根节点时，非 prop 的 attribute 将自动添加到根节点的 attribute 中。 -->
  <!-- 具有多个根节点的组件如果未显式绑定 $attrs，将发出运行时警告。 -->
  <div>
    <h1 v-bind="$attrs" @click="changeColor">{{ msg }}</h1>
    <h1>provide/inject：{{ root }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  // 禁用 Attribute 继承
  inheritAttrs: false,
  inject: ['root'],
  props: {
    msg: String
  },
  // emits: ['changeColor'],
  // 对象写法：可以对参数进行验证
  emits: {
    changeColor(payload: true) {
      if (payload) return true
      else return false
    }
  },
  methods: {
    changeColor() {
      this.$emit('changeColor', true)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  user-select: none;
}
.hello {
  color: red;
}
</style>
