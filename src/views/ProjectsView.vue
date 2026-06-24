<script setup>
import { siteData } from '@/data.js'

const { projects } = siteData
</script>

<template>
  <div>
    <section
      class="page-hero"
      :style="{ backgroundImage: `url(${projects.heroImage})` }"
    >
      <div class="container">
        <h1>{{ projects.title }}</h1>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <p class="projects__intro section-text">{{ projects.description }}</p>
        <div class="projects__grid">
          <RouterLink
            v-for="item in projects.items"
            :key="item.to"
            :to="item.to"
            class="project-card"
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
.projects__intro {
  margin-bottom: 3rem;
  font-size: 1.125rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 4vw, 48px);
}

.project-card {
  transition: transform var(--transition);
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.125rem;
  transition: color var(--transition);
}

.project-card:hover h3 {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>