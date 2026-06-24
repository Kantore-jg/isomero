<script setup>
defineProps({
  title: { type: String, required: true },
  cta: { type: Object, default: null },
  image: { type: String, required: true },
})
</script>

<template>
  <section class="hero">
    <div class="hero__bg" :style="{ backgroundImage: `url(${image})` }" />
    <div class="hero__overlay" />
    <div class="container hero__content">
      <h1>{{ title }}</h1>
      <RouterLink v-if="cta" :to="cta.to" class="btn btn--primary hero__cta">
        {{ cta.label }}
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  padding-top: var(--header-height);
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 2rem 0;
}

.hero h1 {
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  font-weight: 500;
  line-height: 1.15;
  margin-bottom: 2.5rem;
}

.hero__cta {
  margin-top: 1rem;
}
</style>