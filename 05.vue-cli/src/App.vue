<template>
  <nav>
    <router-link to="/">CompositionApi</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
