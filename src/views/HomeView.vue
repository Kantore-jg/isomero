<script setup>
import { siteData } from '@/data.js'
import HeroSection from '@/components/HeroSection.vue'
import EditorialSection from '@/components/EditorialSection.vue'
import ProgramsSection from '@/components/ProgramsSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const { hero, editorial, programs, testimonial, contact } = siteData.home
</script>

<template>
  <div>
    <HeroSection
      :title="hero.title"
      :cta="hero.cta"
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
    <TestimonialSection
      :quote="testimonial.quote"
      :author="testimonial.author"
      :role="testimonial.role"
      :theme="testimonial.theme"
    />
    <ContactSection
      :title="contact.title"
      :subtitle="contact.subtitle"
      :email="contact.email"
      :phone="contact.phone"
      :address="contact.address"
      :form="contact.form"
      :theme="contact.theme"
    />
  </div>
</template>