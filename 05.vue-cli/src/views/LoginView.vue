<template>
  <div class="content">
    <div class="login-button" @click="login">登陆</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const login = () => {
      window.localStorage.setItem('token', '123123123')
      router.push('navLayout')
    }

    return {
      login
    }
  }
})
</script>

<style lang="less" scoped>
.content {
  background-color: #bae0cd;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-button {
    cursor: pointer;
    font-size: 50px;
    border: 10px solid #689fe3;
    background-color: #80cbe0;
    width: 500px;
    height: 200px;
    line-height: 200px;
    border-radius: 35px;
  }
}
</style>