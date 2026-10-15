import { createRouter, createWebHistory } from 'vue-router'
import { siteData } from '@/data.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: siteData.site.name },
  },
  {
    path: '/programs',
    name: 'programs',
    component: () => import('@/views/ProgramsOverviewView.vue'),
    meta: { title: 'Programs' },
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('@/views/LearnView.vue'),
    meta: { title: 'Learn' },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/PortfolioView.vue'),
    meta: { title: 'Portfolio' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact' },
  },
  {
    path: '/Leaders-build-with-ai',
    name: 'Leaders-build-with-ai',
    component: () => import('@/views/ProgramView.vue'),
    props: { slug: 'Leaders-build-with-ai' },
    meta: { title: 'Build with AI 2026' },
  },
  {
    path: '/education-for-teachers',
    name: 'education-for-teachers',
    component: () => import('@/views/ProgramView.vue'),
    props: { slug: 'education-for-teachers' },
    meta: { title: 'Education for Teachers' },
  },
  {
    path: '/support-for-communities',
    name: 'support-for-communities',
    component: () => import('@/views/ProgramView.vue'),
    props: { slug: 'support-for-communities' },
    meta: { title: 'Support for Communities' },
  },
  {
    path: '/our-vision',
    name: 'our-vision',
    component: () => import('@/views/VisionView.vue'),
    meta: { title: 'Our Vision' },
  },
  {
    path: '/our-team',
    name: 'our-team',
    component: () => import('@/views/TeamView.vue'),
    meta: { title: 'Our Team' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
    meta: { title: 'Blog' },
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('@/views/BlogPostView.vue'),
    props: true,
    meta: { title: 'Blog' },
  },
  {
    path: '/donate',
    redirect: '/contact',
  },
  {
    path: '/formation-excel',
    name: 'formation-excel',
    component: () => import('@/views/ProgramView.vue'),
    props: { slug: 'formation-excel' },
    meta: { title: 'support communitie excel formation' },
  },
  {
    path: '/videos',
    name: 'videos',
    component: () => import('@/views/ProgramView.vue'),
    props: { slug: 'videos' },
    meta: { title: 'Videos' },
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title
  document.title = title ? `${title} — ${siteData.site.name}` : siteData.site.name
})

export default router
