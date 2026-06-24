<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  theme: { type: String, default: 'light' },
})
</script>

<template>
  <section class="section" :class="`section--${theme}`">
    <div class="container editorial">
      <div class="editorial__text">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-text">{{ text }}</p>
      </div>
      <div class="editorial__image">
        <img :src="image" :alt="imageAlt || title" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.editorial {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
}

.editorial__image img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

@media (max-width: 768px) {
  .editorial {
    grid-template-columns: 1fr;
  }

  .editorial__image {
    order: -1;
  }
}
</style>