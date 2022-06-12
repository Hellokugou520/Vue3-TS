/**
* create user: zhanpengwei
* create date: 2022-06-12
* desc: 自定义Input
*/
<template>
  <div class="container">
    <label class="label">{{ labelName }}</label>
    <input v-model="value" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    labelName: {
      type: String,
      default: '默认值'
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>

<style scoped lang="less">
.container {
  margin: 5px 0;
  .label {
    margin-right: 5px;
  }
}
</style>
