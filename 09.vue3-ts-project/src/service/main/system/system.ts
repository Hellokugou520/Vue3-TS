import axiosRequest from '../../index'

import { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return axiosRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
