<script setup>
import { siteData } from '@/data.js'

const { portfolio } = siteData
</script>

<template>
  <div class="portfolio-page">
    <section class="portfolio-hero" :style="{ backgroundImage: `url(${portfolio.heroImage})` }">
      <div class="portfolio-hero__overlay" />
      <div class="container portfolio-hero__content">
        <h1>{{ portfolio.heroTitle }}</h1>
        <p>{{ portfolio.heroSubtitle }}</p>
      </div>
    </section>

    <section class="section section--surface">
      <div class="container">
        <div class="portfolio-grid">
          <article v-for="item in portfolio.items" :key="item.title" class="portfolio-card">
            <img :src="item.image" :alt="item.title" loading="lazy" />
            <div class="portfolio-card__body">
              <span class="portfolio-card__category">{{ item.category }}</span>
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-hero {
  position: relative;
  min-height: 48vh;
  display: flex;
  align-items: center;
  color: var(--color-white);
  background-size: cover;
  background-position: center;
  padding-top: var(--header-height);
}

.portfolio-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    var(--overlay-hero),
    var(--overlay-light);
}

.portfolio-hero__content {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.portfolio-hero h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.2rem, 4.8vw, 3.7rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.portfolio-hero p {
  font-size: clamp(1rem, 1.5vw, 1.08rem);
  line-height: 1.7;
  color: var(--color-on-dark);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(24px, 4vw, 48px);
}

.portfolio-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
}

.portfolio-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.portfolio-card__body {
  padding: 1.3rem 1.2rem 1.5rem;
}

.portfolio-card__category {
  display: inline-flex;
  margin-bottom: 0.65rem;
  padding: 0.3em 0.85em;
  border-radius: 999px;
  background: var(--color-brand-tint);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-navy);
}

.portfolio-card h2 {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
}

.portfolio-card p {
  color: var(--color-text-muted);
  line-height: 1.65;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin: 0 auto;
  }
}
</style>
