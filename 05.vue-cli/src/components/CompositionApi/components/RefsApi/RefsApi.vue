<template>
  <div>
    <h3>{{ msg }}</h3>
    <div class="count">
      <div>ref：{{ num }}</div>
      <div>shallowRef：{{ shallow.num }}</div>
      <button @click="increase">ref+1</button>
      <button @click="shallowRefIncrease">shallowRef+1</button>
    </div>
    <div>
      <input v-model="debounceValue" />
      <div>{{ debounceValue }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  toRef,
  shallowRef,
  triggerRef
} from 'vue'
import useDebouncedRef from './hooks/useDebouncedRef.js'

export default defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    // props 是响应式的，不能使用 ES6 解构，它会消除 prop 的响应性
    // 如果需要解构 prop，可以在 setup 函数中使用 toRefs
    const { msg } = toRefs(props)
    console.log(msg.value)
    const obj = reactive({ num: 0 })
    // 转换单个响应式对象属性为 ref
    const num = toRef(obj, 'num')
    const shallow = shallowRef({ num: 0 })
    const debounceValue = useDebouncedRef('防抖', 1000)

    const increase = () => {
      // 这里的操作会导致shallowRef定义的值内部发生改变，BUG?
      num.value++
      //   不要将二者放在一起使用
      //   shallow.value.num++
    }
    const shallowRefIncrease = () => {
      // 单独写，不要混用，用triggerRef手动触发副作用
      shallow.value.num++
      triggerRef(shallow)
    }

    return {
      num,
      shallow,
      debounceValue,
      increase,
      shallowRefIncrease
    }
  }
})
</script>

<style scoped lang="less">
.count {
  margin-bottom: 10px;
}
</style>
