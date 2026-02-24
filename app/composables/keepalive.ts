import type { RouteLocationNormalizedGeneric, RouteRecordNameGeneric } from 'vue-router'
import { defineStore } from 'pinia'

const useKeepalive = defineStore('keepalive', () => {
  const routeCaches = ref<RouteRecordNameGeneric[]>([])

  const addRoute = (route: RouteLocationNormalizedGeneric) => {
    if (!route.name)
      return

    if (routeCaches.value.includes(route.name))
      return

    if (route?.meta?.keepalive)
      routeCaches.value.push(route.name)
  }

  return {
    routeCaches,
    addRoute,
  }
})

export default useKeepalive
