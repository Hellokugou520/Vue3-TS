/**
* create user: zhanpengwei
* create date: 2022-06-23
* desc: 在setup中使用的辅助函数
*/
import { mapGetters, createNamespacedHelpers } from 'vuex'
import useMapper from './useMapper.js'

export default function useGetters (moduleName, mapper) {
    let mapperFn = mapGetters
    if (arguments.length === 1) {
        return useMapper(moduleName, mapperFn)
    }
    if (arguments.length === 2) {
        if (typeof moduleName === 'string' && moduleName.length > 0) {
            mapperFn = createNamespacedHelpers(moduleName).mapGetters
            return useMapper(mapper, mapperFn)
        } else {
            throw new Error('请检查传递的参数是否符合规范')
        }
    }
}