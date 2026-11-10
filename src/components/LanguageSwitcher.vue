<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useLocale } from '@/composables/useLocale.js'

const { locale, localeLabel, setLocale } = useLocale()
const open = ref(false)

const options = computed(() => [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
])

function toggleOpen() {
  open.value = !open.value
}

function chooseLocale(code) {
  setLocale(code)
  open.value = false
}

function closeOnOutsideClick(event) {
  if (!(event.target instanceof Element)) {
    return
  }

  if (!event.target.closest('.language-switcher')) {
    open.value = false
  }
}

function closeOnEscape(event) {
  if (event.key === 'Escape') {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeOnOutsideClick)
  document.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeOnOutsideClick)
  document.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <div class="language-switcher">
    <button
      class="language-switcher__button"
      type="button"
      :aria-expanded="open"
      :aria-label="`Language: ${localeLabel}`"
      @click="toggleOpen"
    >
      <span class="language-switcher__flag" :class="`language-switcher__flag--${locale}`" aria-hidden="true">
        <span class="language-switcher__flag-bar language-switcher__flag-bar--blue" />
        <span class="language-switcher__flag-bar language-switcher__flag-bar--white" />
        <span class="language-switcher__flag-bar language-switcher__flag-bar--red" />
      </span>
      <span class="language-switcher__label">{{ localeLabel }}</span>
      <svg class="language-switcher__chevron" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
        <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" />
      </svg>
    </button>

    <div v-if="open" class="language-switcher__menu" role="menu" aria-label="Language selector">
      <button
        v-for="option in options"
        :key="option.code"
        class="language-switcher__menu-item"
        :class="{ 'language-switcher__menu-item--active': option.code === locale }"
        type="button"
        role="menuitem"
        @click="chooseLocale(option.code)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
}

.language-switcher__button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 44px;
  padding: 0.55rem 0.9rem 0.55rem 0.8rem;
  background: var(--color-white);
  color: var(--color-navy);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition), opacity var(--transition);
}

.language-switcher__button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.language-switcher__flag {
  display: inline-flex;
  width: 30px;
  height: 22px;
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid var(--color-border);
  background: var(--color-white);
}

.language-switcher__flag-bar {
  display: block;
  width: 33.333%;
  height: 100%;
}

/* Flag colors are a deliberate exception to the brand palette. */
.language-switcher__flag-bar--blue {
  background: #0033a0; /* palette-exception */
}

.language-switcher__flag-bar--white {
  background: #ffffff; /* palette-exception */
}

.language-switcher__flag-bar--red {
  background: #ef3340; /* palette-exception */
}

.language-switcher__label {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.language-switcher__chevron {
  color: var(--color-text-muted);
  transition: transform var(--transition);
}

.language-switcher__button[aria-expanded='true'] .language-switcher__chevron {
  transform: rotate(180deg);
}

.language-switcher__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 110px;
  padding: 0.4rem;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: var(--shadow-md);
  z-index: 20;
}

.language-switcher__menu-item {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  color: var(--color-navy);
  text-align: left;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  transition: background var(--transition), color var(--transition);
}

.language-switcher__menu-item:hover {
  background: var(--color-brand-tint);
  color: var(--color-navy);
}

.language-switcher__menu-item--active {
  background: var(--color-brand-tint);
  color: var(--color-navy);
  box-shadow: inset 3px 0 0 var(--color-brand);
}

@media (max-width: 900px) {
  .language-switcher__button {
    min-height: 40px;
    padding-inline: 0.75rem;
  }

  .language-switcher__label {
    font-size: 0.875rem;
  }
}
</style>
