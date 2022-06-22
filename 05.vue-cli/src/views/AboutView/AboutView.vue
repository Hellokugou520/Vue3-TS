<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <router-link to="/navLayout/about/aboutOne">AboutOne</router-link> |
  <router-link to="/navLayout/about/aboutTwo">AboutTwo</router-link>

  <!-- <router-view> 的 v-slot -->
  <router-view v-slot="{ Component }">
    <transition mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less" scoped>
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>