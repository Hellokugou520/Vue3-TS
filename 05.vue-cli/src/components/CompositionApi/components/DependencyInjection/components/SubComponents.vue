<template>
  <div>provide/inject：{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const name = inject('name')

    return { name }
  }
})
</script>