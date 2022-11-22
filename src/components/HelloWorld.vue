<script setup lang="ts">
defineProps<{ msg: string }>()
const { t } = useI18n()
const store = useStore()
const count = computed(() => store.count)

function increment() {
  store.increment()
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">
      count is {{ count }}
    </button>
    <p>
      {{ t('global-local') }}
    </p>
    <p>
      {{ t('hello') }}
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<i18n lang="yaml">
en:
  hello: Hello World!
zh-CN:
  hello: 你好 世界！
</i18n>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
