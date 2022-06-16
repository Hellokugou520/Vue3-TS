<script>
import { defineComponent } from 'vue'

export default defineComponent({
  render () {
    return <div>
      {this.$slots.default ? this.$slots.default({ info: '子组件的值' }) : <span>默认值</span>}
    </div>
  }
})
</script>