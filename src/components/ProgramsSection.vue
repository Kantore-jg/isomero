<script setup>
defineProps({
  items: { type: Array, required: true },
  theme: { type: String, default: 'dark' },
})
</script>

<template>
  <section class="section" :class="`section--${theme}`">
    <div class="container">
      <div class="programs">
        <article v-for="item in items" :key="item.slug" class="program-card">
          <div class="program-card__image">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
          <div class="program-card__body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <RouterLink :to="item.cta.to" class="btn btn--primary program-card__cta">
              {{ item.cta.label }}
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 4vw, 48px);
}

.program-card__image img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  margin-bottom: 1.5rem;
}

.program-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.program-card p {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.program-card__cta {
  font-size: 0.75rem;
}

@media (max-width: 900px) {
  .programs {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>