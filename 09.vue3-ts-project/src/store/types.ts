import { ILoginState } from './login/types'
import { IDashboardState } from './main/analysis/types'
import { ISystemState } from './main/system/type'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  dashboard: IDashboardState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
