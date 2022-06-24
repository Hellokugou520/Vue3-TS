import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useMapper (mapper, mapFn) {
    const store = useStore()
    const storeFns = mapFn(mapper)

    const storeState = {}
    Object.keys(storeFns).forEach((fnKey) => {
        // $store：因为每个函数内部用到了$store，所以手动给它绑定一个包含$store的对象，否则会报错
        storeState[fnKey] = computed(storeFns[fnKey].bind({ $store: store }))
    })

    return storeState
}