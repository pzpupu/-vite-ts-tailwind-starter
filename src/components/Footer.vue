<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav>
    <button class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
      切换语言
    </button>
  </nav>
</template>
