<script setup>
import { siteData } from '@/data.js'

const { learn } = siteData
</script>

<template>
  <div class="learn-page">
    <section class="learn-hero" :style="{ backgroundImage: `url(${learn.heroImage})` }">
      <div class="learn-hero__overlay" />
      <div class="container learn-hero__content">
        <h1>{{ learn.heroTitle }}</h1>
        <p>{{ learn.heroSubtitle }}</p>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="learn-grid">
          <article v-for="item in learn.items" :key="item.slug" class="learn-card">
            <img :src="item.image" :alt="item.title" loading="lazy" />
            <div class="learn-card__body">
              <h2>{{ item.title }}</h2>
              <p class="learn-card__meta">{{ item.date }}</p>
              <p class="learn-card__excerpt">{{ item.excerpt }}</p>
              <RouterLink :to="item.cta.to" class="learn-card__cta">
                {{ item.cta.label }}
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.learn-hero {
  position: relative;
  min-height: 52vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  background-size: cover;
  background-position: center;
  padding-top: var(--header-height);
}

.learn-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    var(--overlay-hero),
    var(--overlay-light);
}

.learn-hero__content {
  position: relative;
  z-index: 1;
  max-width: 840px;
}

.learn-hero h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.learn-hero p {
  max-width: 720px;
  margin: 0 auto;
  font-size: clamp(1rem, 1.7vw, 1.1rem);
  line-height: 1.7;
  color: var(--color-on-dark);
}

.learn-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 4vw, 48px);
}

.learn-card {
  display: flex;
  flex-direction: column;
}

.learn-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  margin-bottom: 1rem;
  background: var(--color-surface);
}

.learn-card__body h2 {
  font-size: 1.1rem;
  line-height: 1.45;
  margin-bottom: 0.75rem;
}

.learn-card__meta {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 0.6rem;
}

.learn-card__excerpt {
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: 1rem;
}

.learn-card__cta {
  display: inline-flex;
  align-self: flex-start;
  padding: 0.65rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-size: 0.85rem;
  transition: border-color var(--transition), color var(--transition), background var(--transition);
}

.learn-card__cta:hover {
  color: var(--color-navy);
  background: var(--color-brand);
  border-color: var(--color-brand);
}

@media (max-width: 960px) {
  .learn-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin: 0 auto;
  }
}
</style>
