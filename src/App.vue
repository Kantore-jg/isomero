<script setup>
import { watchEffect } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'
import { useLocale } from '@/composables/useLocale.js'

const { locale } = useLocale()

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale.value
  }
})
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
