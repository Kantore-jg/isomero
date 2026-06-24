<script setup>
import { computed } from 'vue'
import { siteData } from '@/data.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const post = computed(() => siteData.blog.posts.find((p) => p.slug === props.slug))
</script>

<template>
  <div v-if="post">
    <section
      class="page-hero"
      :style="{ backgroundImage: `url(${post.image})` }"
    >
      <div class="container">
        <h1>{{ post.title }}</h1>
      </div>
    </section>

    <section class="section section--white">
      <div class="container post">
        <p class="post__meta">{{ post.author }} &middot; {{ post.date }}</p>
        <div class="post__content">
          <p>{{ post.content }}</p>
        </div>
        <RouterLink to="/blog" class="post__back">&larr; Back to Blog</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.post {
  max-width: 720px;
}

.post__meta {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}

.post__content p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--color-text-muted);
}

.post__back {
  display: inline-block;
  margin-top: 3rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-accent);
  transition: opacity var(--transition);
}

.post__back:hover {
  opacity: 0.8;
}
</style>