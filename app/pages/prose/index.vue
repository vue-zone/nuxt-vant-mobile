<script lang="ts" setup>
import { useProseStore } from '~/stores/prose'

definePageMeta({
  layout: 'default',
  name: 'Prose',
})

const proseStore = useProseStore()

function fetch() {
  proseStore.fetchProse()
}

function clear() {
  proseStore.clearProse()
}
</script>

<template>
  <div>
    <div class="p-16 rounded-15 bg-white flex h-300 items-center justify-center dark:bg-[--van-background-2]">
      <div v-if="proseStore.prose" class="text-16 leading-26">
        {{ proseStore.prose }}
      </div>

      <ClientOnly v-else>
        <van-empty :description="$t('prose_page.btn_empty_desc')" />
      </ClientOnly>
    </div>

    <van-space class="m-10" direction="vertical" fill>
      <van-button type="primary" round block @click="fetch">
        {{ $t('prose_page.btn_fetch') }}
      </van-button>
      <van-button type="default" round block @click="clear">
        {{ $t('prose_page.btn_clear') }}
      </van-button>
    </van-space>
  </div>
</template>
