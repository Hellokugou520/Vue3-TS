/**
* create user: zhanpengwei
* create date: 2022-06-13
* desc: 动画组件
*/
<template>
  <div id="demo">
    <!-- 原生的实现思路 -->
    <div
      @mousemove="x = $event.clientX"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
    >
      <h3>在屏幕上移动鼠标...</h3>
      <p>x: {{ x }}</p>
    </div>
    <!-- 使用Vue提供的transition组件 -->
    <div class="animation">
      <div class="toggle-box">
        <button @click="toggleShow = !toggleShow">切换</button>
        <transition name="toggle">
          <p v-show="toggleShow">Hello World</p>
        </transition>
      </div>
      <div class="bounce-box">
        <button @click="bounceShow = !bounceShow">切换</button>
        <transition name="bounce">
          <p v-if="bounceShow">Hello World</p>
        </transition>
      </div>
      <div class="list-box">
        <button @click="add">添加</button>
        <button @click="remove">移除</button>
        <transition-group name="list" tag="p">
          <span v-for="item in items" :key="item" class="list-item">
            {{ item }}
          </span>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      x: 0,
      toggleShow: true,
      bounceShow: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    }
  }
})
</script>

<style scoped lang="less">
#demo {
  .movearea {
    // 这个属性可以让浏览器开启硬件加速
    perspective: 1000px;
    height: 100px;
    transition: 0.2s background-color ease;
    margin-bottom: 10px;
  }
  .animation {
    display: flex;
    justify-content: space-evenly;
    .toggle-box {
      border: 1px solid #000;
      padding: 10px;
      .toggle-enter-active,
      .toggle-leave-active {
        transition: opacity 0.5s ease;
      }

      .toggle-enter-from,
      .toggle-leave-to {
        opacity: 0;
      }
    }
    .bounce-box {
      border: 1px solid #000;
      padding: 10px;
      .bounce-enter-active {
        animation: bounce-in 0.5s;
      }
      .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.25);
        }
        100% {
          transform: scale(1);
        }
      }
    }
    .list-box {
      border: 1px solid #000;
      padding: 10px;
      .list-item {
        display: inline-block;
        margin-right: 10px;
      }
      .list-enter-active,
      .list-leave-active {
        transition: all 1s ease;
      }
      .list-enter-from,
      .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
      }
    }
  }
}
</style>
