export const myMixin = {
    // mixin 对象的钩子将在组件自身钩子之前调用
    created () {
        console.log('Hello from mixin!')
    }
}