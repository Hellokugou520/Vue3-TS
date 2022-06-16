<template>
  <div>
    <h3>{{ msg }}</h3>
    <button @click="open = true">Open Modal</button>

    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const open = ref(false)

    return {
      open
    }
  }
})
</script>

<style scoped lang="less">
.modal {
  text-align: center;
  background-color: #ccc;
  border: 1px solid #000;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  padding: 10px 0;
  margin-left: -150px;
}
</style>