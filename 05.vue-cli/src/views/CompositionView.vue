<template>
  <CompositionApi />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    CompositionApi: defineAsyncComponent(
      () => import('@/components/CompositionApi/CompositionApi.vue')
    )
  }
})
</script>