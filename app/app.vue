<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'
import useKeepalive from '~/composables/keepalive'
import { appName } from '~/constants'

useHead({
  title: appName,
})

const colorMode = useColorMode()

const mode = computed(() => {
  return colorMode.value as ConfigProviderTheme
})

const keepAliveRouteNames = computed(() => {
  return useKeepalive().routeCaches as string[]
})
</script>

<template>
  <VanConfigProvider :theme="mode">
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)" />
    <NuxtLayout>
      <NuxtPage :keepalive="{ include: keepAliveRouteNames }" />
    </NuxtLayout>
  </VanConfigProvider>
</template>
