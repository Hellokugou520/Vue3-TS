import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AxiosRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

// 在axios内置配置类型的基础上增加了拦截器的类型
export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AxiosRequestInterceptors<T>
  showLoading?: boolean
}
