<template>
  <div class="page-content">
    <my-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 头部的插槽 -->
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" @click="handleNewClick"
          >新建用户</el-button
        >
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
      <template #handler="{ row }">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            icon="edit"
            size="small"
            text
            @click="handleEditClick(row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            icon="delete"
            size="small"
            text
            @click="handleDeleteClick(row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 动态插入其余的非公共插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="{ row }"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="row"></slot>
        </template>
      </template>
    </my-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks'

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
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 获取按钮操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    // 删除/新建/编辑操作
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    // 其余的动态插槽名称(不同页面之间的非公共插槽)
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    return {
      isCreate,
      isUpdate,
      isDelete,
      pageInfo,
      getPageData,
      dataList,
      dataCount,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      otherPropSlots
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
