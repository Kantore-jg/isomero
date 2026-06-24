<script setup>
import { siteData } from '@/data.js'
</script>

<template>
  <footer class="footer section--black">
    <div class="container footer__inner">
      <div class="footer__brand">
        <h4>{{ siteData.footer.organization }}</h4>
        <p>{{ siteData.footer.location }}</p>
      </div>

      <nav class="footer__nav">
        <RouterLink
          v-for="link in siteData.footer.links"
          :key="link.to"
          :to="link.to"
          class="footer__link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 48px 0;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer__brand h4 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.footer__brand p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: pre-line;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__link {
  font-size: 0.8125rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  transition: color var(--transition);
}

.footer__link:hover {
  color: var(--color-accent);
}
</style>