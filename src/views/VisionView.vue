<script setup>
import { siteData } from '@/data.js'

const { vision } = siteData
</script>

<template>
  <div>
    <section
      class="page-hero page-hero--tall"
      :style="{ backgroundImage: `url(${vision.hero.image})` }"
    >
      <div class="container">
        <h1>{{ vision.hero.title }}</h1>
      </div>
    </section>

    <section class="section section--white">
      <div class="container vision">
        <div class="vision__content">
          <p v-for="(para, i) in vision.paragraphs" :key="i">{{ para }}</p>
        </div>

        <blockquote class="vision__quote">
          <p>&ldquo;{{ vision.quote.text }}&rdquo;</p>
          <footer>
            <cite>&mdash;{{ vision.quote.author }}</cite>
            <span>{{ vision.quote.role }}</span>
          </footer>
        </blockquote>

        <RouterLink :to="vision.cta.to" class="btn btn--primary">
          {{ vision.cta.label }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero--tall {
  min-height: 70vh;
}

.vision {
  max-width: 720px;
}

.vision__content p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.vision__quote {
  margin: 3rem 0;
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.vision__quote p {
  font-size: 1.375rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.vision__quote cite {
  font-style: normal;
  font-weight: 500;
}

.vision__quote span {
  display: block;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-top: 0.25rem;
}
</style>