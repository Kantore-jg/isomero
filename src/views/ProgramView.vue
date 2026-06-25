<script setup>
import { computed } from 'vue'
import { siteData } from '@/data.js'
import ProgramVideo from '@/components/ProgramVideo.vue'
import { getProgramVideoUrl, getSectionVideoUrl, resolveVideoSource } from '@/utils/video.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const program = computed(() => siteData.programs[props.slug])

const programVideoUrl = computed(() => {
  const p = program.value
  if (!p) return null
  return getProgramVideoUrl(p)
})

function sectionHasVideo(section) {
  return Boolean(resolveVideoSource(getSectionVideoUrl(section)))
}
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

        <ProgramVideo
          v-if="programVideoUrl"
          :url="programVideoUrl"
          :title="`${program.title} video`"
          featured
        />

        <div class="program__sections">
          <article
            v-for="section in program.sections"
            :key="section.title"
            class="program__block"
            :class="{ 'program__block--video': sectionHasVideo(section) }"
          >
            <h2>{{ section.title }}</h2>
            <p v-if="section.text">{{ section.text }}</p>
            <ProgramVideo
              v-if="sectionHasVideo(section)"
              :url="getSectionVideoUrl(section)"
              :title="section.title"
            />
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

.program__block--video {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .program__sections {
    grid-template-columns: 1fr;
  }
}
</style>