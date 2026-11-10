<script setup>
import { computed } from 'vue'
import { siteData } from '@/data.js'
import { useLocale } from '@/composables/useLocale.js'

const { t } = useLocale()
const year = new Date().getFullYear()
const contact = siteData.contactPage

const quickLinks = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.vision'), to: '/our-vision' },
  { label: t('nav.learn'), to: '/learn' },
  { label: t('nav.portfolio'), to: '/portfolio' },
  { label: t('nav.blog'), to: '/blog' },
  { label: t('nav.contact'), to: '/contact' },
])

const programLinks = computed(() => [
  { label: t('programs.buildWithAi'), to: '/Leaders-build-with-ai' },
  { label: t('programs.teachers'), to: '/education-for-teachers' },
  { label: t('programs.communities'), to: '/support-for-communities' },
  { label: t('programs.excel'), to: '/formation-excel' },
  { label: t('programs.videos'), to: '/videos' },
])

const phoneDisplay = contact.phone.replace(/(\d{2})(?=\d)/g, '$1 ').trim()
</script>

<template>
  <footer class="footer section--navy">
    <div class="container footer__grid">
      <div class="footer__brand">
        <RouterLink to="/" class="footer__logo">
          <img :src="siteData.site.logo" :alt="siteData.site.name" />
        </RouterLink>
        <div class="footer__socials">
          <a :href="siteData.site.linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
              />
            </svg>
          </a>
          <a :href="siteData.site.whatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path
                fill="currentColor"
                d="M16 3C8.82 3 3 8.6 3 15.49c0 2.48.77 4.77 2.08 6.7L3.71 29l6.97-1.81A13.34 13.34 0 0 0 16 28c7.18 0 13-5.6 13-12.51C29 8.6 23.18 3 16 3Zm5.36 15.93c-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.59.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.28-.76-.68-1.27-1.51-1.42-1.77-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.42.09-.17.04-.31-.02-.44-.06-.13-.58-1.39-.79-1.89-.21-.49-.42-.43-.59-.44h-.5c-.17 0-.44.06-.67.31-.24.26-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.68.13.17 1.86 2.83 4.5 3.97 1.58.68 2.2.73 2.98.62.48-.07 1.5-.62 1.71-1.22.21-.59.21-1.1.15-1.21-.06-.1-.24-.17-.49-.29Z"
              />
            </svg>
          </a>
          <a :href="`mailto:${contact.email}`" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm10 8.2L22 6.5V6H2v.5l10 5.7Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <nav class="footer__col" aria-labelledby="footer-quick">
        <h4 id="footer-quick">{{ t('footer.quickMenu') }}</h4>
        <ul>
          <li v-for="link in quickLinks" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>

      <nav class="footer__col" aria-labelledby="footer-programs">
        <h4 id="footer-programs">{{ t('footer.ourPrograms') }}</h4>
        <ul>
          <li v-for="link in programLinks" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="footer__col">
        <h4>{{ t('footer.getInTouch') }}</h4>
        <ul>
          <li>Bujumbura, {{ contact.address }}</li>
          <li><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
          <li><a :href="`tel:+257${contact.phone}`">+257 {{ phoneDisplay }}</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p>© {{ year }} {{ siteData.site.name }}. {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 64px 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr 1.2fr;
  gap: 2.5rem;
  padding-bottom: 56px;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer__logo img {
  width: 150px;
  padding: 8px 12px;
  background: var(--color-white);
  border-radius: 8px;
}

.footer__socials {
  display: flex;
  gap: 1rem;
}

.footer__socials a {
  display: inline-flex;
  color: var(--color-white);
  transition: color var(--transition);
}

.footer__socials a:hover {
  color: var(--color-brand);
}

.footer__socials svg {
  width: 22px;
  height: 22px;
}

.footer__col h4 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.footer__col ul {
  display: grid;
  gap: 0.45rem;
}

.footer__col li,
.footer__col a {
  font-size: 0.95rem;
  color: var(--color-on-dark);
  transition: color var(--transition);
}

.footer__col a:hover {
  color: var(--color-brand);
}

.footer__bottom {
  border-top: 1px solid var(--color-border-on-dark);
  padding: 24px 0;
  text-align: center;
}

.footer__bottom p {
  font-size: 0.9rem;
  color: var(--color-on-dark-muted);
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .footer__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
