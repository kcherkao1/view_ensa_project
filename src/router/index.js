/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import BiblioTeque from '../views/BiblioTeque.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Contact from '../components/ContactForm.vue'
import Recommendations from '@/components/Recommendations.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/About',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/Biblioteque',
    name: 'Biblioteque',
    component: BiblioTeque
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Contact',
    name: 'ContactForm',
    component: Contact
  },
  {
    path: '/recommendations/:author/:id/',
    name: 'Recommendations',
    component: Recommendations,
    props: route => ({ author: route.params.author, id: Number(route.params.id) })
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
