<script>
import { defineComponent } from 'vue'
import JsxSlot from './components/JsxSlot.vue'

export default defineComponent({
  props: {
    msg: String
  },
  data () {
    return {
      num: 0
    }
  },
  render () {
    const increase = () => this.num++
    const decrease = () => this.num--

    return <div>
      <h3>{this.msg}</h3>
      <div>{this.num}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <div>--------------插槽开始--------------</div>
      <JsxSlot>{{ default: props => <span>{props.info}</span> }}</JsxSlot>
      <div>--------------插槽结束--------------</div>
    </div>
  }
})
</script>