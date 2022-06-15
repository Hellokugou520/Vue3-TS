<template>
  <div>
    <h3>{{ msg }}</h3>
    <SubComponents />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  ref,
  readonly,
  provide
} from 'vue'

export default defineComponent({
  components: {
    SubComponents: defineAsyncComponent(
      () => import('./components/SubComponents.vue')
    )
  },
  props: {
    msg: String
  },
  setup() {
    let name = ref('ROOT')
    setInterval(() => {
      name.value = name.value.split('').reverse().join('')
    }, 1000)

    provide('name', readonly(name))
  }
})
</script>