import { ILoginState } from './login/types'
import { ISystemState } from './main/system/type'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootState {}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
