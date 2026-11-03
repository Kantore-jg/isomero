import { reactive, ref } from 'vue'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export function useFormspree(fields, messages = {}) {
  const formData = reactive(
    fields.reduce((acc, field) => {
      acc[field.name] = ''
      return acc
    }, {}),
  )

  const status = ref('idle') // idle | submitting | success | error
  const errorMessage = ref('')

  function resetForm() {
    fields.forEach((field) => {
      formData[field.name] = ''
    })
  }

  async function submit() {
    if (!FORMSPREE_ENDPOINT) {
      status.value = 'error'
      errorMessage.value =
        messages.missingEndpoint ||
        'Formspree is not configured. Add VITE_FORMSPREE_ENDPOINT to your .env file.'
      return false
    }

    status.value = 'submitting'
    errorMessage.value = ''

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: formData.subject || 'Nouveau message — Isomero website',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || messages.error || 'Unable to send your message.')
      }

      status.value = 'success'
      resetForm()
      return true
    } catch (error) {
      status.value = 'error'
      errorMessage.value = error.message || messages.error || 'Unable to send your message.'
      return false
    }
  }

  return {
    formData,
    status,
    errorMessage,
    submit,
  }
}
