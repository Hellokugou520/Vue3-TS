<template>
  <div>
    <h3>{{ msg }}</h3>
    <div>{{ firstName }} {{ lastName }}</div>
    <div>{{ fullName }}</div>
    <button @click="changeName">changeName</button>
    <button @click="changeComputed">changeComputed</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const firstName = ref('Bruce')
    const lastName = ref('Wayne')
    // const fullName = computed(() => `${firstName.value} ${lastName.value}`)
    const fullName = computed({
      get() {
        return `${firstName.value} ${lastName.value}`
      },
      set(newValue: string) {
        firstName.value = newValue
        lastName.value = ''
      }
    })

    const changeName = () => {
      firstName.value = 'Joker'
      lastName.value = ''
    }
    const changeComputed = () => {
      fullName.value = '???'
    }

    return {
      firstName,
      lastName,
      fullName,
      changeName,
      changeComputed
    }
  }
})
</script>