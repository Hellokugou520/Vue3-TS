<template>
  <!-- 当组件返回单个根节点时，非 prop 的 attribute 将自动添加到根节点的 attribute 中。 -->
  <!-- 具有多个根节点的组件如果未显式绑定 $attrs，将发出运行时警告。 -->
  <div>
    <h1 v-bind="$attrs" @click="changeColor">{{ msg }}</h1>
    <h1>provide/inject：{{ root }}</h1>
    <h3>--------------插槽开始--------------</h3>
    <!-- 插槽具体显示什么元素，由外部传入的标签体内容决定 -->
    <slot>
      <!-- 没有传入内容时，使用这里的元素作为默认内容 -->
      <div>插槽默认内容</div>
    </slot>
    <!-- 具名插槽 -->
    <slot name="up"></slot>
    <!-- 动态插槽名 && 作用域插槽 -->
    <slot :name="slotName" :value="slotContent"></slot>
    <h3>--------------插槽结束--------------</h3>
    <!-- 异步组件 -->
    <AsyncComponent />
    <!-- 自定义Input -->
    <CustomInput v-model="customInputValue" :labelName="customLabelName" />
    <div>{{ customInputValue }}</div>
    <!-- 动画组件 -->
    <AnimationDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { myMixin } from './mixin/myMixin.js'

export default defineComponent({
  name: 'HelloWorld',
  // 禁用 Attribute 继承
  inheritAttrs: false,
  inject: ['root'],
  mixins: [myMixin],
  components: {
    AsyncComponent: defineAsyncComponent(
      () => import('./components/AsyncComponent.vue')
    ),
    CustomInput: defineAsyncComponent(
      () => import('./components/CustomInput.vue')
    ),
    AnimationDemo: defineAsyncComponent(
      () => import('./components/AnimationDemo.vue')
    )
  },
  props: {
    msg: String,
    slotName: String
  },
  // emits: ['changeColor'],
  // 对象写法：可以对参数进行验证
  emits: {
    changeColor(payload: boolean) {
      if (payload) return true
      else return false
    }
  },
  data() {
    return {
      slotContent: '具名下部插槽',
      customInputValue: '在组件上使用v-model',
      customLabelName: '自定义Input'
    }
  },
  created() {
    console.log('Hello from Component!')
  },
  methods: {
    changeColor() {
      this.$emit('changeColor', true)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  user-select: none;
}
.hello {
  color: red;
}
</style>
