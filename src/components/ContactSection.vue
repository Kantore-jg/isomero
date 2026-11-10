<script setup>
import { useFormspree } from '@/composables/useFormspree.js'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  form: { type: Object, required: true },
  theme: { type: String, default: 'light' },
})

const { formData, status, errorMessage, submit } = useFormspree(props.form.fields, {
  error: props.form.errorMessage,
})

async function handleSubmit() {
  await submit()
}
</script>

<template>
  <section id="contact" class="section contact-section" :class="`section--${theme}`">
    <div class="container contact">
      <div class="contact__info">
        <h2 class="section-title">{{ title }}</h2>
        <p v-if="subtitle" class="contact__subtitle">{{ subtitle }}</p>
        <div class="contact__details">
          <div class="contact__detail">
            <span class="contact__label">Email</span>
            <a :href="`mailto:${email}`">{{ email }}</a>
          </div>
          <div class="contact__detail">
            <span class="contact__label">Phone</span>
            <a :href="`tel:${phone.replace(/\D/g, '')}`">{{ phone }}</a>
          </div>
          <div class="contact__detail">
            <span class="contact__label">Address</span>
            <p>{{ address }}</p>
          </div>
        </div>
      </div>

      <form class="contact__form" @submit.prevent="handleSubmit">
        <p v-if="status === 'success'" class="contact__success" role="status">
          {{ form.successMessage }}
        </p>
        <p v-else-if="status === 'error'" class="contact__error" role="alert">
          {{ errorMessage || form.errorMessage }}
        </p>

        <div v-for="field in form.fields" :key="field.name" class="contact__field">
          <label :for="`section-${field.name}`">{{ field.label }}</label>
          <textarea
            v-if="field.type === 'textarea'"
            :id="`section-${field.name}`"
            v-model="formData[field.name]"
            :required="field.required"
            :disabled="status === 'submitting'"
            rows="5"
          />
          <input
            v-else
            :id="`section-${field.name}`"
            v-model="formData[field.name]"
            :type="field.type"
            :name="field.name"
            :required="field.required"
            :disabled="status === 'submitting'"
          />
        </div>
        <button type="submit" class="btn btn--cta" :disabled="status === 'submitting'">
          {{ status === 'submitting' ? form.sendingLabel || 'Sending…' : form.submitLabel }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  scroll-margin-top: calc(var(--header-height) + 24px);
}

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}

.contact__subtitle {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brand);
  margin-bottom: 0.25rem;
}

.contact__detail a {
  transition: color var(--transition);
}

.contact__detail a:hover {
  color: var(--color-brand);
}

.contact__detail p {
  white-space: pre-line;
}

.contact__field {
  margin-bottom: 1.25rem;
}

.contact__field label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.contact__field input,
.contact__field textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-white);
  font-family: inherit;
  font-size: 0.9375rem;
  transition: border-color var(--transition);
}

.contact__field input:disabled,
.contact__field textarea:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact__field input:focus,
.contact__field textarea:focus {
  outline: none;
  border-color: var(--color-brand);
}

.contact__success,
.contact__error {
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
  font-weight: 500;
}

.contact__success {
  background: var(--color-brand-tint);
  border-left: 4px solid var(--color-brand);
  color: var(--color-navy);
}

.contact__error {
  background: var(--color-cta-tint);
  border-left: 4px solid var(--color-cta);
  color: var(--color-navy);
}

@media (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
