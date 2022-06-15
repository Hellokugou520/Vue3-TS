<template>
  <BaseApi msg="BaseApi" />
  <RefsApi msg="RefsApi" />
  <ComputedApi msg="ComputedApi" />
  <WatchApi msg="WatchApi" />
  <LifecycleHooks msg="LifecycleHooks" />
  <DependencyInjection msg="DependencyInjection" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    BaseApi: defineAsyncComponent(() => import('./components/BaseApi.vue')),
    RefsApi: defineAsyncComponent(
      () => import('./components/RefsApi/RefsApi.vue')
    ),
    ComputedApi: defineAsyncComponent(
      () => import('./components/ComputedApi.vue')
    ),
    WatchApi: defineAsyncComponent(() => import('./components/WatchApi.vue')),
    LifecycleHooks: defineAsyncComponent(
      () => import('./components/LifecycleHooks.vue')
    ),
    DependencyInjection: defineAsyncComponent(
      () => import('./components/DependencyInjection/DependencyInjection.vue')
    )
  }
})
</script>

<style scoped lang="less">
</style>
