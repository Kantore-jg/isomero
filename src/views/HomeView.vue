<script setup>
import { siteData } from '@/data.js'
import HeroSection from '@/components/HeroSection.vue'
import EditorialSection from '@/components/EditorialSection.vue'
import ProgramsSection from '@/components/ProgramsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const { hero, editorial, programs, testimonial, contact } = siteData.home
</script>

<template>
  <div>
    <HeroSection
      :eyebrow="hero.eyebrow"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :primary-cta="hero.primaryCta"
      :secondary-cta="hero.secondaryCta"
      :badges="hero.badges"
      :image="hero.image"
    />
    <EditorialSection
      :title="editorial.title"
      :text="editorial.text"
      :image="editorial.image"
      :image-alt="editorial.imageAlt"
      :theme="editorial.theme"
    />
    <ProgramsSection
      :items="programs.items"
      :theme="programs.theme"
    />
  </div>
</template>
