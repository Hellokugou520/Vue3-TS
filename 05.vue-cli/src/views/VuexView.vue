<template>
  <div>{{ count }}-{{ countAlias }}</div>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
  <button @click="asyncDecrease">async +1</button>
  <h3>{{ name }}-{{ nameAlias }}</h3>
  <h3>{{ age }}-{{ ageAlias }}</h3>
  <h3>sum:{{ sum }}</h3>
  <h3>product:{{ product }}</h3>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore, mapMutations, mapActions } from 'vuex'
import useState from '../hooks/useState.js'
import useGetters from '../hooks/useGetters.js'

export default defineComponent({
  setup() {
    const store = useStore()
    // 兼容mapState的多种写法，因为本质上这些参数还是交给了mapState来调用
    const state1 = useState(['count', 'name', 'age'])
    const state2 = useState({
      countAlias: (state: any) => state.count,
      nameAlias: (state: any) => state.name,
      ageAlias: (state: any) => state.age
    })
    const getters = useGetters(['sum', 'product'])
    const mutataions = mapMutations(['increase', 'decrease'])
    const actions = mapActions(['asyncDecrease'])

    return {
      //   count: computed(() => store.state.count),
      //   name: computed(() => store.state.name),
      //   age: computed(() => store.state.age),
      ...state1,
      ...state2,
      ...getters,
      ...mutataions,
      ...actions
    }
  }
})
</script>

<style lang="less" scoped>
</style>
