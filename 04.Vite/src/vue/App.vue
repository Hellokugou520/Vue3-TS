<template>
  <div class="content">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style scoped>
.content {
  font-size: 50px;
}
</style>