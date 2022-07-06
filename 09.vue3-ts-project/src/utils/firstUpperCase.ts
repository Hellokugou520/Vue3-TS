/**
 * create user: zhanpengwei
 * create date: 2022-07-06
 * desc: 字符串首字母大写
 */
const firstUpperCase = ([first, ...rest]: string) =>
  first?.toUpperCase() + rest.join('')

export default firstUpperCase
