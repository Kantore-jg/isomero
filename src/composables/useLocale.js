import { computed, ref } from 'vue'

const STORAGE_KEY = 'isomero.locale'
const SUPPORTED_LOCALES = ['fr', 'en']

const messages = {
  fr: {
    localeLabel: 'FR',
    nav: {
      home: 'Accueil',
      programs: 'Programmes',
      learn: 'Apprendre',
      portfolio: 'Portfolio',
      vision: 'Notre vision',
      blog: 'Blog',
      contact: 'Contactez-nous',
      allPrograms: 'Tous les programmes',
    },
    programs: {
      buildWithAi: 'Construire avec l’IA 2026',
      teachers: 'Formation des enseignants',
      communities: 'Soutien aux communautés',
      excel: 'Formation Excel',
    },
    footer: {
      organization: 'The Isomero Foundation',
      location: 'Rohero, No 13',
    },
  },
  en: {
    localeLabel: 'EN',
    nav: {
      home: 'Home',
      programs: 'Programs',
      learn: 'Learn',
      portfolio: 'Portfolio',
      vision: 'Our Vision',
      blog: 'Blog',
      contact: 'Contact Us',
      allPrograms: 'All Programs',
    },
    programs: {
      buildWithAi: 'Build with AI 2026',
      teachers: 'Education for Teachers',
      communities: 'Support for Communities',
      excel: 'Excel Training',
      videos: 'Videos',
    },
    footer: {
      organization: 'The Isomero Foundation',
      location: 'Rohero, No 13',
    },
  },
}

function getStoredLocale() {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  return SUPPORTED_LOCALES.includes(stored) ? stored : 'en'
}

const locale = ref(getStoredLocale())

function applyLocale(nextLocale) {
  if (typeof document === 'undefined') return

  document.documentElement.lang = nextLocale
  document.documentElement.dir = 'ltr'
}

applyLocale(locale.value)

function setLocale(nextLocale) {
  const normalized = SUPPORTED_LOCALES.includes(nextLocale) ? nextLocale : 'en'
  locale.value = normalized

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, normalized)
  }

  applyLocale(normalized)
}

function toggleLocale() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}

function t(path) {
  const segments = path.split('.')
  let value = messages[locale.value]

  for (const segment of segments) {
    value = value?.[segment]
  }

  if (value !== undefined) {
    return value
  }

  value = messages.en
  for (const segment of segments) {
    value = value?.[segment]
  }

  return value ?? path
}

export function useLocale() {
  return {
    locale,
    localeLabel: computed(() => messages[locale.value].localeLabel),
    setLocale,
    toggleLocale,
    t,
  }
}

