<template>
  <h2>{{ msg }}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: { HelloWorld },
  data () {
    return {
      msg: 'Vue'
    }
  }
}
</script>

<style>
h2 {
  color: #00bf30;
}
</style>