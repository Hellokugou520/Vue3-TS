/**
* create user: zhanpengwei
* create date: 2022-06-23
* desc: 在setup中使用的辅助函数
*/
import { mapState, createNamespacedHelpers } from 'vuex'
import useMapper from './useMapper.js'

export default function useState (moduleName, mapper) {
    let mapperFn = mapState
    // 只传了一个参数时
    if (arguments.length === 1) {
        return useMapper(moduleName, mapperFn)
    }
    // 开启了命名空间，传了两个参数时
    if (arguments.length === 2) {
        if (typeof moduleName === 'string' && moduleName.length > 0) {
            mapperFn = createNamespacedHelpers(moduleName).mapState
            return useMapper(mapper, mapperFn)
        } else {
            throw new Error('请检查传递的参数是否符合规范')
        }
    }
}