<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 非 Prop 的 Attribute -->
    <HelloWorld
      msg="点击变色"
      :class="isRed ? 'hello' : ''"
      :slotName="slotName"
      @changeColor="changeColor"
    >
      <div>插槽内容</div>
      <!-- #是v-slot:的缩写 -->
      <template #up>
        <div>具名上部插槽</div>
      </template>
      <!-- 动态插槽名 && 作用域插槽 -->
      <template #[slotName]="{ value }">
        <div>{{ value }}</div>
      </template>
    </HelloWorld>
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
      isRed: false,
      slotName: 'down'
    }
  },
  methods: {
    changeColor(value: boolean) {
      if (value) this.isRed = !this.isRed
    }
  }
})
</script>