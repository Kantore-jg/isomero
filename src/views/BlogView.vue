<script setup>
import { siteData } from '@/data.js'

const { blog } = siteData
</script>

<template>
  <div>
    <section
      class="page-hero"
      :style="{ backgroundImage: `url(${blog.heroImage})` }"
    >
      <div class="container">
        <h1>{{ blog.title }}</h1>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="blog__grid">
          <article v-for="post in blog.posts" :key="post.slug" class="blog-card">
            <RouterLink :to="`/blog/${post.slug}`">
              <img :src="post.image" :alt="post.title" loading="lazy" />
              <div class="blog-card__body">
                <span class="blog-card__meta">{{ post.author }} &middot; {{ post.date }}</span>
                <h2>{{ post.title }}</h2>
                <p>{{ post.excerpt }}</p>
                <span class="blog-card__link">Read More</span>
              </div>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(32px, 5vw, 64px);
}

.blog-card a {
  display: block;
  transition: transform var(--transition);
}

.blog-card a:hover {
  transform: translateY(-4px);
}

.blog-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  margin-bottom: 1.25rem;
}

.blog-card__meta {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.blog-card h2 {
  font-size: 1.375rem;
  margin: 0.5rem 0 0.75rem;
  transition: color var(--transition);
}

.blog-card a:hover h2 {
  color: var(--color-accent);
}

.blog-card p {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.blog-card__link {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .blog__grid {
    grid-template-columns: 1fr;
  }
}
</style>