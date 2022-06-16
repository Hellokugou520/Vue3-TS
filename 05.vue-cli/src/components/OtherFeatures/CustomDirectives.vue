<template>
  <div>
    <h3>{{ msg }}</h3>
    <input v-model="value" v-focus />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const value = ref('自动聚焦')

    return {
      value
    }
  }
})
</script>