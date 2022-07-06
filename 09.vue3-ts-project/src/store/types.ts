import { ILoginState } from './login/types'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootState {}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
