<template>
  <nav>
    <router-link to="/navLayout/compositionApi">CompositionApi</router-link> |
    <router-link to="/navLayout/otherFeatures">OtherFeatures</router-link> |
    <router-link to="/navLayout/home">Home</router-link> |
    <router-link to="/navLayout/about">About</router-link>
    <span class="logout" @click="logout">Logout</span>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const logout = () => {
      window.localStorage.removeItem('token')
      router.push('login')
    }

    return {
      logout
    }
  }
})
</script>

<style lang="less" scoped>
nav {
  position: relative;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      color: #42b983;
    }
  }

  .logout {
    cursor: pointer;
    position: absolute;
    font-weight: bold;
    right: 80px;
    color: #f00;
  }
}
</style>
