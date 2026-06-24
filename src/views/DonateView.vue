<script setup>
import { ref } from 'vue'
import { siteData } from '@/data.js'

const { donate } = siteData
const selectedAmount = ref(null)
const customAmount = ref('')
const submitted = ref(false)

function selectAmount(amount) {
  selectedAmount.value = amount
  customAmount.value = ''
}

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="section section--dark donate-hero">
      <div class="container">
        <h1>{{ donate.title }}</h1>
        <p class="donate-hero__headline">{{ donate.headline }}</p>
        <p class="donate-hero__desc">{{ donate.description }}</p>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <form class="donate-form" @submit.prevent="handleSubmit">
          <p v-if="submitted" class="donate-form__success">{{ donate.successMessage }}</p>
          <template v-else>
            <div class="donate-form__amounts">
              <button
                v-for="amount in donate.amounts"
                :key="amount"
                type="button"
                class="donate-form__amount"
                :class="{ 'donate-form__amount--active': selectedAmount === amount }"
                @click="selectAmount(amount)"
              >
                ${{ amount }}
              </button>
            </div>

            <div class="donate-form__custom">
              <label for="custom-amount">{{ donate.customAmountLabel }}</label>
              <input
                id="custom-amount"
                v-model="customAmount"
                type="number"
                min="1"
                :placeholder="donate.customAmountPlaceholder"
                @input="selectedAmount = null"
              />
            </div>

            <button type="submit" class="btn btn--primary donate-form__submit">
              {{ donate.submitLabel }}
            </button>
          </template>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.donate-hero {
  padding-top: calc(var(--header-height) + 64px);
  text-align: center;
}

.donate-hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
}

.donate-hero__headline {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.donate-hero__desc {
  color: rgba(255, 255, 255, 0.75);
  max-width: 500px;
  margin: 0 auto;
}

.donate-form {
  max-width: 480px;
  margin: 0 auto;
}

.donate-form__amounts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 2rem;
}

.donate-form__amount {
  padding: 1rem;
  border: 2px solid var(--color-border);
  background: var(--color-white);
  font-size: 1.125rem;
  font-weight: 500;
  transition: all var(--transition);
}

.donate-form__amount:hover,
.donate-form__amount--active {
  border-color: var(--color-accent);
  background: var(--color-accent);
  color: var(--color-white);
}

.donate-form__custom {
  margin-bottom: 2rem;
}

.donate-form__custom label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.donate-form__custom input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--color-border);
  font-family: inherit;
  font-size: 1rem;
}

.donate-form__custom input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.donate-form__submit {
  width: 100%;
}

.donate-form__success {
  text-align: center;
  padding: 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-accent);
}

@media (max-width: 480px) {
  .donate-form__amounts {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>