/**
* create user: zhanpengwei
* create date: 2022-06-14
* desc: 自定义防抖ref
*/
import { customRef } from 'vue'

export default function useDebouncedRef (value, delay = 200) {
    let timer = null
    return customRef((track, trigger) => {
        return {
            get () {
                // 追踪依赖
                track()
                return value
            },
            set (newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue
                    // 触发更新
                    trigger()
                }, delay)
            }
        }
    })
}