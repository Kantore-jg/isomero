<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { siteData } from '@/data.js'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useLocale } from '@/composables/useLocale.js'

const route = useRoute()
const menuOpen = ref(false)
const openDropdown = ref(null)
const scrolled = ref(false)
const { t } = useLocale()

const heroImage = computed(() => {
  const { name, params } = route

  if (name === 'home') return siteData.home.hero.image
  if (name === 'programs') return siteData.programsOverview.heroImage
  if (name === 'learn') return siteData.learn.heroImage
  if (name === 'portfolio') return siteData.portfolio.heroImage
  if (name === 'contact') return siteData.contactPage.heroImage
  if (name === 'our-vision') return siteData.vision.hero.image
  if (name === 'our-team') return siteData.team.heroImage
  if (name === 'blog') return siteData.blog.heroImage
  if (name === 'blog-post') {
    return siteData.blog.posts.find((p) => p.slug === params.slug)?.image ?? null
  }
  if (name in siteData.programs) {
    return siteData.programs[name].heroImage
  }
  return null
})

const isHeroPage = computed(() => Boolean(heroImage.value))
const isTransparent = computed(() => isHeroPage.value && !scrolled.value && !menuOpen.value)

const navigation = computed(() => [
  { id: 'home', label: t('nav.home'), to: '/' },
  {
    id: 'programs',
    label: t('nav.programs'),
    type: 'dropdown',
    to: '/programs',
    overviewLabel: t('nav.allPrograms'),
    children: [
      { label: t('programs.buildWithAi'), to: '/Leaders-build-with-ai' },
      { label: t('programs.teachers'), to: '/education-for-teachers' },
      { label: t('programs.communities'), to: '/support-for-communities' },
      { label: t('programs.excel'), to: '/formation-excel' },
      { label: t('programs.videos'), to: '/videos' },
    ],
  },
  { id: 'learn', label: t('nav.learn'), to: '/learn' },
  { id: 'portfolio', label: t('nav.portfolio'), to: '/portfolio' },
  { id: 'vision', label: t('nav.vision'), to: '/our-vision' },
  { id: 'blog', label: t('nav.blog'), to: '/blog' },
  { id: 'contact', label: t('nav.contact'), to: '/contact', highlight: true },
])

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

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
  <header
    class="header"
    :class="{
      'header--open': menuOpen,
      'header--transparent': isTransparent,
    }"
  >
    <div class="header__inner container">
      <RouterLink to="/" class="header__logo" @click="closeMenu">
        <img
          class="header__logo-image"
          :src="siteData.site.logo"
          :alt="siteData.site.name"
        />
      </RouterLink>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <ul class="header__list">
          <li
            v-for="item in navigation"
            :key="item.id"
            class="header__item"
            :class="{ 'header__item--dropdown': item.type === 'dropdown' }"
          >
            <template v-if="item.type === 'dropdown'">
              <button
                type="button"
                class="header__link header__link--dropdown"
                :class="{ 'header__link--active': openDropdown === item.id }"
                :aria-expanded="openDropdown === item.id"
                @click="toggleDropdown(item.id)"
              >
                {{ item.label }}
                <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" />
                </svg>
              </button>
              <ul
                class="header__dropdown"
                :class="{ 'header__dropdown--open': openDropdown === item.id }"
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

      <div class="header__actions">
        <LanguageSwitcher />

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
      </div>
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
  background: var(--color-navy);
  color: var(--color-white);
  transition: background var(--transition);
}

.header--transparent {
  background: transparent;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  gap: 1rem;
}

.header__logo {
  transition: opacity var(--transition);
  flex-shrink: 0;
}

.header__logo:hover {
  opacity: 0.8;
}

.header__logo-image {
  display: block;
  width: 150px;
  max-height: 68px;
  height: auto;
  object-fit: contain;
  padding: 4px 8px;
  background: var(--color-white);
  border-radius: 6px;
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

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.header__nav {
  margin-left: auto;
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
  color: var(--color-brand);
}

.header__link--highlight {
  padding: 0.6em 1.4em;
  background: var(--color-cta);
  color: var(--color-navy) !important;
  font-weight: 600;
}

.header__link--highlight:hover {
  background: var(--color-cta-hover);
}

.header__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 240px;
  background: var(--color-navy);
  padding: 0.75rem 0;
  opacity: 0;
  visibility: hidden;
  /* Invisible hover bridge so the cursor can reach the last items
     without falling through the gap under the Programs button */
  padding-top: calc(0.75rem + 8px);
  margin-top: -8px;
  transition: opacity var(--transition), visibility var(--transition);
}

.header__dropdown--open {
  opacity: 1;
  visibility: visible;
}

.header__item--dropdown {
  position: relative;
}

@media (min-width: 901px) {
  .header__item--dropdown:hover .header__dropdown,
  .header__item--dropdown:focus-within .header__dropdown {
    opacity: 1;
    visibility: visible;
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
  color: var(--color-brand);
  background: var(--color-hover-on-dark);
}

@media (max-width: 900px) {
  .header__inner {
    gap: 0.75rem;
  }

  .header__actions {
    gap: 0.5rem;
  }

  .header__toggle {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-navy);
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
    border-bottom: 1px solid var(--color-border-on-dark);
  }

  .header__link {
    display: block;
    width: 100%;
    padding: 1rem 0;
  }

  .header__logo-image {
    width: 120px;
    max-height: 60px;
  }

  .header__dropdown {
    position: static;
    opacity: 1;
    visibility: visible;
    display: none;
    padding: 0 0 1rem 1rem;
    margin-top: 0;
    background: transparent;
  }

  .header__dropdown--open {
    display: block;
  }

  .header__actions :deep(.language-switcher__button) {
    padding-inline: 0.7rem;
  }
}
</style>
