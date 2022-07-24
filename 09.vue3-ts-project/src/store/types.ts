import { ILoginState } from './login/types'
import { ISystemState } from './main/system/type'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
