<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 非 Prop 的 Attribute -->
    <HelloWorld
      :class="isRed ? 'hello' : ''"
      msg="点击变色"
      @changeColor="changeColor"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      isRed: false
    }
  },
  methods: {
    changeColor(value: boolean) {
      if (value) this.isRed = !this.isRed
    }
  }
})
</script>