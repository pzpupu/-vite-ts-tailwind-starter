<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main>
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <RouterView />
    <div>
      <button class="btn text-sm" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
