<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  primaryCta: { type: Object, default: null },
  secondaryCta: { type: Object, default: null },
  badges: { type: Array, default: () => [] },
  image: { type: String, required: true },
})
</script>

<template>
  <section class="hero">
    <div class="hero__bg" :style="{ backgroundImage: `url(${image})` }" />
    <div class="hero__overlay" />
    <div class="hero__glow hero__glow--left" />
    <div class="hero__glow hero__glow--right" />
    <div class="container hero__content">
      <p v-if="eyebrow" class="hero__eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
      <div class="hero__actions">
        <RouterLink
          v-if="primaryCta"
          :to="primaryCta.to"
          class="btn btn--cta hero__cta hero__cta--primary"
        >
          {{ primaryCta.label }}
        </RouterLink>
        <RouterLink
          v-if="secondaryCta"
          :to="secondaryCta.to"
          class="btn btn--outline hero__cta hero__cta--secondary"
        >
          {{ secondaryCta.label }}
        </RouterLink>
      </div>
    </div>
    <div v-if="badges.length" class="hero__badges" aria-hidden="true">
      <span
        v-for="badge in badges"
        :key="badge.label"
        class="hero__badge"
        :style="badge.style"
      >
        {{ badge.label }}
      </span>
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
  overflow: hidden;
  padding-top: var(--header-height);
  background: var(--color-navy);
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.04);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, var(--overlay-light) 0%, var(--overlay-mid) 45%, var(--overlay-strong) 100%),
    radial-gradient(circle at center, transparent 0%, var(--overlay-mid) 70%);
}

.hero__glow {
  position: absolute;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.22;
}

.hero__glow--left {
  left: -8rem;
  top: 20%;
  background: var(--color-brand);
}

.hero__glow--right {
  right: -10rem;
  bottom: -6rem;
  background: var(--color-cta);
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 1050px;
  padding: 2rem 0 7rem;
}

.hero h1 {
  max-width: 980px;
  margin: 0 auto;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.5rem, 5.8vw, 4.6rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.hero__eyebrow {
  margin-bottom: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-on-dark-muted);
}

.hero__subtitle {
  max-width: 760px;
  margin: 1.5rem auto 0;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  line-height: 1.7;
  color: var(--color-on-dark);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2.5rem;
}

.hero__cta {
  min-width: 220px;
  border-radius: 999px;
}

.hero__cta--secondary {
  border-color: var(--color-on-dark);
  color: var(--color-white);
}

.hero__badges {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--color-border-on-dark);
  background: var(--overlay-mid);
  color: var(--color-on-dark);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
}
</style>
