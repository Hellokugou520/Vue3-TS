import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/publicComponents/bread-crumb/type'

let firstMenu: any = null

// 拿到当前用户的路由表
const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 1.首先拿到所有路由配置
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据当前用户菜单过滤路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 获取当前用户的默认选中菜单
const findCurrentMenu = (
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any => {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = findCurrentMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 拿到当前path下的面包屑
const pathMapBreadcrumbs = (userMenus: any[], currentPath: string) => {
  const breadcrumbs: IBreadcrumb[] = []
  findCurrentMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 拿到当前菜单下的按钮权限数组
const mapMenusToPermissions = (userMenus: any[]) => {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

export {
  firstMenu,
  mapMenusToRoutes,
  findCurrentMenu,
  pathMapBreadcrumbs,
  mapMenusToPermissions
}
