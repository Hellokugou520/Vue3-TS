<template>
  <div class="not-found">
    <div>404 NOT FOUND</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped lang="less">
.not-found {
  height: 100%;
  position: absolute;
  div {
    font-size: 50px;
    margin: 10px 0 0 10px;
  }
}
</style>
