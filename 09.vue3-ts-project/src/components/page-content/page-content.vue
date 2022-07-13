<template>
  <div class="page-content">
    <my-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 头部的插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>

      <!-- 表格列的插槽 -->
      <!-- 状态 -->
      <template #status="{ row }">
        <el-button
          :type="row.enable ? 'success' : 'danger'"
          size="small"
          plain
          >{{ row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <!-- 创建时间 -->
      <template #createAt="{ row }">
        <span>{{ $filters.formatTime(row.createAt) }}</span>
      </template>
      <!-- 更新时间 -->
      <template #updateAt="{ row }">
        <span>{{ $filters.formatTime(row.updateAt) }}</span>
      </template>
      <!-- 操作 -->
      <template #handler>
        <div class="handle-btns">
          <el-button icon="edit" size="small" text>编辑</el-button>
          <el-button icon="delete" size="small" text>删除</el-button>
        </div>
      </template>
    </my-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const userCount = computed(() => store.state.system.usersCount)

    return {
      dataList,
      userCount
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
