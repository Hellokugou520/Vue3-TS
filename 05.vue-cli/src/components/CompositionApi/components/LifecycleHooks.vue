<template>
  <div>
    <h3>{{ msg }}</h3>
    <button @click="changeNum">{{ num }}</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const num = ref(0)

    onBeforeMount(() => console.log('onBeforeMount'))
    onMounted(() => console.log('onMounted'))
    onBeforeUpdate(() => console.log('onBeforeUpdate'))
    onUpdated(() => console.log('onUpdated'))

    const changeNum = () => num.value++

    return {
      num,
      changeNum
    }
  }
})
</script>