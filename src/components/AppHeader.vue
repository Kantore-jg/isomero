<script setup>
import { ref } from 'vue'
import { siteData } from '@/data.js'

const menuOpen = ref(false)
const openDropdown = ref(null)

function toggleDropdown(label) {
  openDropdown.value = openDropdown.value === label ? null : label
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (!menuOpen.value) openDropdown.value = null
}

function closeMenu() {
  menuOpen.value = false
  openDropdown.value = null
}
</script>

<template>
  <header class="header" :class="{ 'header--open': menuOpen }">
    <div class="header__inner container">
      <RouterLink to="/" class="header__logo" @click="closeMenu">
        {{ siteData.site.name }}
      </RouterLink>

      <button
        class="header__toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span class="header__toggle-bar" />
        <span class="header__toggle-bar" />
        <span class="header__toggle-bar" />
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <ul class="header__list">
          <li
            v-for="item in siteData.navigation"
            :key="item.label"
            class="header__item"
            :class="{ 'header__item--dropdown': item.type === 'dropdown' }"
          >
            <template v-if="item.type === 'dropdown'">
              <button
                type="button"
                class="header__link header__link--dropdown"
                :class="{ 'header__link--active': openDropdown === item.label }"
                :aria-expanded="openDropdown === item.label"
                @click="toggleDropdown(item.label)"
              >
                {{ item.label }}
                <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" />
                </svg>
              </button>
              <ul
                class="header__dropdown"
                :class="{ 'header__dropdown--open': openDropdown === item.label }"
              >
                <li v-if="item.to">
                  <RouterLink :to="item.to" class="header__dropdown-link" @click="closeMenu">
                    {{ item.overviewLabel || 'All Programs' }}
                  </RouterLink>
                </li>
                <li v-for="child in item.children" :key="child.to">
                  <RouterLink :to="child.to" class="header__dropdown-link" @click="closeMenu">
                    {{ child.label }}
                  </RouterLink>
                </li>
              </ul>
            </template>

            <RouterLink
              v-else
              :to="item.to"
              class="header__link"
              :class="{ 'header__link--highlight': item.highlight }"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  background: var(--color-black);
  color: var(--color-white);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header__logo {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: opacity var(--transition);
}

.header__logo:hover {
  opacity: 0.8;
}

.header__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}

.header__toggle-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-white);
  transition: transform var(--transition);
}

.header--open .header__toggle-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header--open .header__toggle-bar:nth-child(2) {
  opacity: 0;
}

.header--open .header__toggle-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.header__list {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.header__link {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-white);
  transition: color var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

button.header__link {
  color: var(--color-white);
}

.header__link:hover,
.header__link.router-link-active {
  color: var(--color-accent);
}

.header__link--highlight {
  padding: 0.6em 1.4em;
  background: var(--color-accent);
  color: var(--color-white) !important;
}

.header__link--highlight:hover {
  background: var(--color-accent-hover);
}

.header__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 240px;
  background: var(--color-black);
  padding: 0.75rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all var(--transition);
}

.header__dropdown--open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.header__item--dropdown {
  position: relative;
}

@media (min-width: 901px) {
  .header__item--dropdown:hover .header__dropdown,
  .header__item--dropdown:focus-within .header__dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.header__dropdown-link {
  display: block;
  padding: 0.6rem 1.5rem;
  font-size: 0.8125rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color var(--transition), background var(--transition);
}

.header__dropdown-link:hover {
  color: var(--color-accent);
  background: rgba(255, 255, 255, 0.05);
}

@media (max-width: 900px) {
  .header__toggle {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-black);
    padding: 2rem var(--site-gutter);
    transform: translateX(100%);
    transition: transform var(--transition);
    overflow-y: auto;
  }

  .header__nav--open {
    transform: translateX(0);
  }

  .header__list {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .header__item {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .header__link {
    display: block;
    width: 100%;
    padding: 1rem 0;
  }

  .header__dropdown {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: none;
    padding: 0 0 1rem 1rem;
    background: transparent;
  }

  .header__dropdown--open {
    display: block;
  }
}
</style>