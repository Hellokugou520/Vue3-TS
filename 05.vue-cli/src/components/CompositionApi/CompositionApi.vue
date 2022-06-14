<template>
  <BaseApi msg="BaseApi" />
  <RefsApi msg="RefsApi" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    BaseApi: defineAsyncComponent(() => import('./components/BaseApi.vue')),
    RefsApi: defineAsyncComponent(() => import('./components/RefsApi/RefsApi.vue'))
  }
})
</script>

<style scoped lang="less">
</style>
