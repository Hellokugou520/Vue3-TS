<template>
  <RenderFunction msg="RenderFunction" />
  <JsxDemo msg="JsxDemo" />
  <CustomDirectives msg="CustomDirectives" />
  <TeleportComponents msg="TeleportComponents" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  components: {
    RenderFunction: defineAsyncComponent(
      () =>
        import('@/components/OtherFeatures/RenderFunction/RenderFunction.vue')
    ),
    JsxDemo: defineAsyncComponent(
      () => import('@/components/OtherFeatures/JsxDemo/JsxDemo.vue')
    ),
    CustomDirectives: defineAsyncComponent(
      () => import('@/components/OtherFeatures/CustomDirectives.vue')
    ),
    TeleportComponents: defineAsyncComponent(
      () => import('@/components/OtherFeatures/TeleportComponents.vue')
    )
  },
  setup() {
    const instance = getCurrentInstance()
    console.log(instance?.appContext.config.globalProperties.$globalValue)
  }
})
</script>

<style scoped lang="less">
</style>
