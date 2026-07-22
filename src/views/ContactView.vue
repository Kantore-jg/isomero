<script setup>
import { reactive } from 'vue'
import { siteData } from '@/data.js'

const { contactPage } = siteData

const formData = reactive(
  contactPage.form.fields.reduce((acc, field) => {
    acc[field.name] = ''
    return acc
  }, {}),
)

function buildMailtoLink() {
  const subject = formData.subject || 'Message from Isomero website'
  const bodyLines = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    '',
    formData.message,
  ]

  const params = new URLSearchParams({
    subject,
    body: bodyLines.join('\n'),
  })

  return `mailto:${contactPage.email}?${params.toString()}`
}

function handleSubmit() {
  window.location.href = buildMailtoLink()
}
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero" :style="{ backgroundImage: `url(${contactPage.heroImage})` }">
      <div class="contact-hero__overlay" />
      <div class="container contact-hero__content">
        <h1>{{ contactPage.heroTitle }}</h1>
        <p>{{ contactPage.heroSubtitle }}</p>
      </div>
    </section>

    <section class="section section--white">
      <div class="container contact-page__grid">
        <aside class="contact-page__info">
          <div class="contact-info-card">
            <h2>Reach us directly</h2>
            <div class="contact-info-card__links">
              <a :href="`mailto:${contactPage.email}`">{{ contactPage.email }}</a>
              <a :href="`tel:+257${contactPage.phone}`">+257 {{ contactPage.phone }}</a>
              <a :href="siteData.site.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div class="contact-info-card contact-info-card--accent">
            <h3>Visit us</h3>
            <p>{{ contactPage.address }}</p>
          </div>
        </aside>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="contact-form__grid">
            <div v-for="field in contactPage.form.fields" :key="field.name" class="contact-form__field">
              <label :for="field.name">{{ field.label }}</label>
              <textarea
                v-if="field.type === 'textarea'"
                :id="field.name"
                v-model="formData[field.name]"
                :required="field.required"
                rows="7"
              />
              <input
                v-else
                :id="field.name"
                v-model="formData[field.name]"
                :type="field.type"
                :required="field.required"
              />
            </div>
          </div>


          <button type="submit" class="btn btn--primary contact-form__submit">
            {{ contactPage.form.submitLabel }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-hero {
  position: relative;
  min-height: 42vh;
  display: flex;
  align-items: center;
  color: var(--color-white);
  background-size: cover;
  background-position: center;
  padding-top: var(--header-height);
}

.contact-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(8, 8, 12, 0.25), rgba(8, 8, 12, 0.8)),
    rgba(7, 8, 14, 0.34);
}

.contact-hero__content {
  position: relative;
  z-index: 1;
  max-width: 780px;
}

.contact-hero h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.2rem, 4.8vw, 3.5rem);
  margin-bottom: 1rem;
}

.contact-hero p {
  font-size: clamp(1rem, 1.5vw, 1.08rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}

.contact-page__grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(28px, 5vw, 72px);
  align-items: start;
}

.contact-page__info {
  display: grid;
  gap: 1.25rem;
}

.contact-info-card {
  padding: 1.6rem;
  border: 1px solid var(--color-border);
  background: var(--color-white);
}

.contact-info-card h2,
.contact-info-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.contact-info-card p {
  color: var(--color-text-muted);
  line-height: 1.65;
}

.contact-info-card__links {
  display: grid;
  gap: 0.8rem;
  margin-top: 1rem;
}

.contact-info-card__links a {
  font-size: 0.95rem;
  color: var(--color-text);
  transition: color var(--transition);
}

.contact-info-card__links a:hover {
  color: var(--color-accent);
}

.contact-info-card--accent {
  background: rgba(163, 130, 108, 0.08);
}

.contact-form {
  padding: 1.6rem;
  border: 1px solid var(--color-border);
  background: var(--color-white);
}

.contact-form__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.contact-form__field {
  display: flex;
  flex-direction: column;
}

.contact-form__field label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.55rem;
}

.contact-form__field input,
.contact-form__field textarea {
  width: 100%;
  padding: 0.95rem 1rem;
  border: 1px solid var(--color-border);
  background: #fff;
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color var(--transition);
}

.contact-form__field input:focus,
.contact-form__field textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.contact-form__note {
  margin: 1rem 0 1.25rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.contact-form__submit {
  width: 100%;
}

@media (max-width: 900px) {
  .contact-page__grid {
    grid-template-columns: 1fr;
  }

  .contact-form__grid {
    grid-template-columns: 1fr;
  }
}
</style>
