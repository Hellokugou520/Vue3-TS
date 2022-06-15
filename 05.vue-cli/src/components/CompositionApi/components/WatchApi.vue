<template>
  <div>
    <h3 ref="flag">{{ msg }}</h3>
    <div>{{ num }}</div>
    <button @click="changeNum">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, watch } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const flag = ref(null)
    const num = ref(0)
    const person = ref({
      name: 'Mike',
      age: 20,
      friends: {
        name: 'Jack'
      }
    })

    // 1.传入的这个函数会被立即执行,并且会响应式地追踪其依赖
    // 2.onCleanup参数用来清除副作用
    // 3.返回值可以用来停止侦听器
    // 4.watchEffect的第二个参数可以用来调整副作用的刷新时机或调试副作用的依赖
    const stop = watchEffect(
      (onCleanup) => {
        const timer = setTimeout(() => {
          console.log('副作用')
        }, 1000)
        onCleanup(() => {
          clearTimeout(timer)
        })
        console.log(num.value, flag.value)
      },
      {
        flush: 'post'
      }
    )
    watch(num, (newVal, oldVal) => {
      console.log('newVal:', newVal, 'oldVal:', oldVal)
    })
    watch(
      () => ({ ...person.value }),
      (newVal, oldVal) => {
        console.log('newVal:', newVal, 'oldVal:', oldVal)
      },
      {
        immediate: true,
        deep: true
      }
    )

    const changeNum = () => {
      if (num.value > 10) {
        stop()
      }
      num.value++
      person.value.friends.name = 'Tom'
    }

    return {
      flag,
      num,
      changeNum
    }
  }
})
</script>