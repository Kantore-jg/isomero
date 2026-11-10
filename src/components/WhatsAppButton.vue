<script setup>
import { siteData } from '@/data.js'
</script>

<template>
  <a
    class="whatsapp-button"
    :href="siteData.site.whatsapp"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with us on WhatsApp"
  >
    <span class="whatsapp-button__icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <path
          fill="currentColor"
          d="M16 3C8.82 3 3 8.6 3 15.49c0 2.48.77 4.77 2.08 6.7L3.71 29l6.97-1.81A13.34 13.34 0 0 0 16 28c7.18 0 13-5.6 13-12.51C29 8.6 23.18 3 16 3Zm0 22.84c-1.89 0-3.71-.5-5.27-1.44l-.38-.23-4.14 1.07 1.1-4.03-.25-.39a9.89 9.89 0 0 1-1.54-5.33C5.52 9.65 10.02 5.3 16 5.3c5.98 0 10.48 4.35 10.48 9.71S21.98 25.84 16 25.84Z"
        />
        <path
          fill="currentColor"
          d="M21.36 18.93c-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.59.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.28-.76-.68-1.27-1.51-1.42-1.77-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.42.09-.17.04-.31-.02-.44-.06-.13-.58-1.39-.79-1.89-.21-.49-.42-.43-.59-.44h-.5c-.17 0-.44.06-.67.31-.24.26-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.68.13.17 1.86 2.83 4.5 3.97 1.58.68 2.2.73 2.98.62.48-.07 1.5-.62 1.71-1.22.21-.59.21-1.1.15-1.21-.06-.1-.24-.17-.49-.29Z"
        />
      </svg>
    </span>
  </a>
</template>


<style scoped>
.whatsapp-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 150;

  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  /* WhatsApp brand green kept for recognisability (documented palette exception). */
  background: #25d366; /* palette-exception */
  color: var(--color-white);

  box-shadow: var(--shadow-sm);
  transition: transform .25s ease, box-shadow .25s ease;

  text-decoration: none;
}

.whatsapp-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: var(--shadow-md);
}

.whatsapp-button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.whatsapp-button__icon svg {
  width: 32px;
  height: 32px;
}

@media (max-width: 640px) {
  .whatsapp-button {
    right: 16px;
    bottom: 16px;
    width: 56px;
    height: 56px;
  }

  .whatsapp-button__icon svg {
    width: 28px;
    height: 28px;
  }
}

</style>