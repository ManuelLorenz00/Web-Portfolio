import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Portfolio from "@/components/Portfolio.vue"
import Skills from "@/components/Skills.vue"
import Resume from "@/components/CV.vue"
import Contact from "@/components/Contact.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/skills', component: Skills },
  { path: '/resume', component: Resume },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
