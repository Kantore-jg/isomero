<script setup>
import { siteData } from '@/data.js'

const { team } = siteData
</script>

<template>
  <div>
    <section class="section section--black team-hero">
      <div class="container">
        <h1>{{ team.title }}</h1>
        <p>{{ team.intro }}</p>
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
.team-hero {
  padding-top: calc(var(--header-height) + 64px);
}

.team-hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
}

.team-hero p {
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
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