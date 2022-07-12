<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <my-table :listData="userList" :propList="propList">
        <template #status="{ row }">
          <el-button>{{ row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="{ row }">
          <strong>{{ row.createAt }}</strong>
        </template>
      </my-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import { propList } from './config/propList.config'

export default defineComponent({
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    return {
      searchFormConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
