<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => {
      return h('div', null, [
        slots.default
          ? slots.default({ info: '子组件的值' })
          : h('span', null, '默认值')
      ])
    }
  }
})
</script>