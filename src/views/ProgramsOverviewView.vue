<script setup>
import { siteData } from '@/data.js'

const { programsOverview } = siteData
</script>

<template>
  <div>
    <section
      class="page-hero"
      :style="{ backgroundImage: `url(${programsOverview.heroImage})` }"
    >
      <div class="container">
        <h1>{{ programsOverview.title }}</h1>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <p class="programs-overview__intro section-text">{{ programsOverview.description }}</p>
        <div class="programs-overview__grid">
          <RouterLink
            v-for="item in programsOverview.items"
            :key="item.to"
            :to="item.to"
            class="program-card"
          >
            <img :src="item.image" :alt="item.title" loading="lazy" />
            <h3>{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.programs-overview__intro {
  margin-bottom: 3rem;
  font-size: 1.125rem;
}

.programs-overview__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 4vw, 48px);
}

.program-card {
  transition: transform var(--transition);
}

.program-card:hover {
  transform: translateY(-4px);
}

.program-card img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  margin-bottom: 1rem;
}

.program-card h3 {
  font-size: 1.125rem;
  transition: color var(--transition);
}

.program-card:hover h3 {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .programs-overview__grid {
    grid-template-columns: 1fr;
  }
}
</style>