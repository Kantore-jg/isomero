<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  form: { type: Object, required: true },
  theme: { type: String, default: 'light' },
})

const formData = reactive({})
const submitted = ref(false)

props.form.fields.forEach((field) => {
  formData[field.name] = ''
})

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <section class="section" :class="`section--${theme}`">
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
        <p v-if="submitted" class="contact__success">{{ form.successMessage }}</p>
        <template v-else>
          <div v-for="field in form.fields" :key="field.name" class="contact__field">
            <label :for="field.name">{{ field.label }}</label>
            <textarea
              v-if="field.type === 'textarea'"
              :id="field.name"
              v-model="formData[field.name]"
              :required="field.required"
              rows="5"
            />
            <input
              v-else
              :id="field.name"
              v-model="formData[field.name]"
              :type="field.type"
              :required="field.required"
            />
          </div>
          <button type="submit" class="btn btn--primary">{{ form.submitLabel }}</button>
        </template>
      </form>
    </div>
  </section>
</template>

<style scoped>
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
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}

.contact__detail a {
  transition: color var(--transition);
}

.contact__detail a:hover {
  color: var(--color-accent);
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

.contact__field input:focus,
.contact__field textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.contact__success {
  padding: 1.5rem;
  background: rgba(163, 130, 108, 0.15);
  color: var(--color-accent);
  font-weight: 500;
}

@media (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>