import axiosRequest from '../index'

import { IAccount, ILoginResult } from './type'
import { IDataType } from '../type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return axiosRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: true
  })
}

export function requestUserInfoById(id: number) {
  return axiosRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return axiosRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
