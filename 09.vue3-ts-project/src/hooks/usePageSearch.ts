import { ref } from 'vue'
import PageContent from '@/components/page-content/page-content.vue'

export default function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  // 表单重置
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  // 搜索按钮
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
