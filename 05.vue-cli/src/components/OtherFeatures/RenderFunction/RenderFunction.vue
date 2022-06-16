<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import RenderSlot from './components/RenderSlot.vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    const num = ref(0)

    return () => {
      return h('div', null, [
        h('h3', null, props.msg),
        h('div', null, num.value),
        h('button', { onClick: () => num.value++ }, '+1'),
        h('button', { onClick: () => num.value-- }, '-1'),
        h('div', null, '--------------插槽开始--------------'),
        h(RenderSlot, null, { default: (props: any) => h('span', props.info) }),
        h('div', null, '--------------插槽结束--------------')
      ])
    }
  }
})
</script>