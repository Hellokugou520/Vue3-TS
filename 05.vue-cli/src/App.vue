<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'App',
  // 默认情况下，provide/inject 绑定并不是响应式的
  provide() {
    return {
      // 借助computed可以实现响应式
      root: computed(() => this.rootValue)
    }
  },
  data() {
    return {
      rootValue: 'ROOT'
    }
  },
  created() {
    this.reverseString()
  },
  methods: {
    reverseString() {
      setInterval(() => {
        this.rootValue = this.rootValue.split('').reverse().join('')
      }, 1000)
    }
  }
})
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
}
</style>
