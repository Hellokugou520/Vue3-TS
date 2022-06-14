<template>
  <div>
    <h3>{{ msg }}</h3>
    <div>计数器(reactive)：{{ state.count }}</div>
    <!-- 在 template 模板中使用ref对象，会被自动进行解包 -->
    <div>计数器(ref)：{{ count }}</div>
    <div>计数器(readonly)：{{ readonlyInfo }}</div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, readonly } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  // context 是一个普通的 JavaScript 对象，它不是响应式的，可以安全地对 context 使用 ES6 解构。
  setup(props, { attrs, slots, emit, expose }) {
    console.log({ attrs, slots, emit, expose })

    /**
     * 在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在
     * data property、computed property 或 methods 被解析之前，
     * 所以它们无法在 setup 中被获取。
     */
    const state = reactive({
      count: 0
    })
    const count = ref(0)
    // readonlyInfo无法被修改，count可以被修改
    const readonlyInfo = readonly(count)

    const increase = () => {
      state.count++
      count.value++
    }
    const decrease = () => {
      state.count--
      count.value--
    }

    return {
      state,
      count,
      readonlyInfo,
      increase,
      decrease
    }
  }
})
</script>