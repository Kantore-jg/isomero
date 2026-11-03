<script setup>
import { computed } from 'vue'
import { siteData } from '@/data.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const item = computed(() => siteData.learn.items.find((entry) => entry.slug === props.slug))
</script>

<template>
  <div v-if="item" class="learn-detail">
    <section class="page-hero" :style="{ backgroundImage: `url(${item.image})` }">
      <div class="container">
        <h1>{{ item.title }}</h1>
      </div>
    </section>

    <section class="section section--white">
      <div class="container learn-detail__content">
        <p class="learn-detail__meta">{{ item.date }}</p>
        <p class="learn-detail__intro">{{ item.intro }}</p>

        <div class="learn-detail__sections">
          <article v-for="section in item.sections" :key="section.title" class="learn-detail__block">
            <h2>{{ section.title }}</h2>
            <p>{{ section.text }}</p>
          </article>
        </div>

        <div class="learn-detail__actions">
          <RouterLink
            v-if="item.relatedCta"
            :to="item.relatedCta.to"
            class="btn btn--primary"
          >
            {{ item.relatedCta.label }}
          </RouterLink>
          <RouterLink to="/learn" class="learn-detail__back">&larr; Back to Learn</RouterLink>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="section section--white">
    <div class="container">
      <p>This learning program was not found.</p>
      <RouterLink to="/learn" class="learn-detail__back">&larr; Back to Learn</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.learn-detail__content {
  max-width: 820px;
}

.learn-detail__meta {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
}

.learn-detail__intro {
  font-size: 1.15rem;
  line-height: 1.75;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
}

.learn-detail__sections {
  display: grid;
  gap: 2rem;
  margin-bottom: 2.75rem;
}

.learn-detail__block h2 {
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}

.learn-detail__block p {
  color: var(--color-text-muted);
  line-height: 1.75;
}

.learn-detail__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
}

.learn-detail__back {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-accent);
  transition: opacity var(--transition);
}

.learn-detail__back:hover {
  opacity: 0.8;
}
</style>
