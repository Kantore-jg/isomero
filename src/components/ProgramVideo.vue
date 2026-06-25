<script setup>
import { computed } from 'vue'
import { resolveVideoSource } from '@/utils/video.js'

const props = defineProps({
  url: { type: String, required: true },
  title: { type: String, default: 'Video' },
  featured: { type: Boolean, default: false },
})

const source = computed(() => resolveVideoSource(props.url))
</script>

<template>
  <div
    v-if="source"
    class="program-video"
    :class="{ 'program-video--featured': featured }"
  >
    <iframe
      v-if="source.type === 'youtube'"
      :src="source.src"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <video
      v-else
      controls
      playsinline
      preload="metadata"
    >
      <source :src="source.src" />
    </video>
  </div>
</template>

<style scoped>
.program-video {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
  background: #000;
  border-radius: 4px;
  overflow: hidden;
}

.program-video--featured {
  margin-bottom: 4rem;
}

.program-video iframe,
.program-video video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: contain;
}
</style>