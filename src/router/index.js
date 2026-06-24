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
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: { title: 'Projects' },
  },
  {
    path: '/materials-for-learning',
    name: 'materials-for-learning',
    component: () => import('@/views/ProgramView.vue'),
    props: { slug: 'materials-for-learning' },
    meta: { title: 'Materials for Learning' },
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
    name: 'donate',
    component: () => import('@/views/DonateView.vue'),
    meta: { title: 'Donate' },
  },
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