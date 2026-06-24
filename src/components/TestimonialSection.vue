<script setup>
defineProps({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  role: { type: String, required: true },
  theme: { type: String, default: 'black' },
})
</script>

<template>
  <section class="section testimonial" :class="`section--${theme}`">
    <div class="container">
      <blockquote class="testimonial__quote">
        <p>&ldquo;{{ quote }}&rdquo;</p>
        <footer>
          <cite>&mdash; {{ author }}, {{ role }}</cite>
        </footer>
      </blockquote>
    </div>
  </section>
</template>

<style scoped>
.testimonial {
  text-align: center;
}

.testimonial__quote {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial__quote p {
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 2rem;
}

.testimonial__quote cite {
  font-size: 0.875rem;
  font-style: normal;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}
</style>