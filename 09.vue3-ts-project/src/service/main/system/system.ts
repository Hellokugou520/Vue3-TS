import axiosRequest from '../../index'

import { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return axiosRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return axiosRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return axiosRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return axiosRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
