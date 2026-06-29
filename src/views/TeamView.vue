<script setup>
import { siteData } from '@/data.js'

const { team } = siteData
</script>

<template>
  <div>
    <section
      class="page-hero"
      :style="{ backgroundImage: `url(${team.heroImage})` }"
    >
      <div class="container">
        <h1>{{ team.title }}</h1>
        <p class="team-hero__intro">{{ team.intro }}</p>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <div class="team__grid">
          <article v-for="member in team.members" :key="member.name" class="team-card">
            <a href="https://www.linkedin.com/company/isomero-bi-technologies/about/?viewAsMember=truegr">
            <img :src="member.image" :alt="member.name" loading="lazy" />
            <h3>{{ member.name }}</h3>
            <span class="team-card__role">{{ member.role }}</span>
            <p>{{ member.bio }}</p>
          </a>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-hero__intro {
  color: rgba(255, 255, 255, 0.85);
  max-width: 500px;
  margin-top: 1rem;
  font-size: 1.125rem;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(32px, 5vw, 64px);
}

.team-card img {
  width: full;
  aspect-ratio: 1;
  object-fit: contain;
  margin-bottom: 2rem;
}

.team-card h3 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.team-card__role {
  display: block;
  font-size: 0.8125rem;
  color: var(--color-accent);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.team-card p {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .team__grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>