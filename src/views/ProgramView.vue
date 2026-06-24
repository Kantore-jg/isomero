<script setup>
import { computed } from 'vue'
import { siteData } from '@/data.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const program = computed(() => siteData.programs[props.slug])
</script>

<template>
  <div v-if="program">
    <section
      class="page-hero"
      :style="{ backgroundImage: `url(${program.heroImage})` }"
    >
      <div class="container">
        <h1>{{ program.title }}</h1>
      </div>
    </section>

    <section class="section section--light">
      <div class="container program">
        <p class="program__intro">{{ program.intro }}</p>
        <div class="program__sections">
          <article v-for="section in program.sections" :key="section.title" class="program__block">
            <h2>{{ section.title }}</h2>
            <p>{{ section.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.program__intro {
  font-size: 1.25rem;
  line-height: 1.7;
  max-width: 720px;
  margin-bottom: 4rem;
  color: var(--color-text-muted);
}

.program__sections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(32px, 5vw, 64px);
}

.program__block h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.program__block p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .program__sections {
    grid-template-columns: 1fr;
  }
}
</style>