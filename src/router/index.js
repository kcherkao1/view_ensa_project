/* eslint-disable */
import store from '../../store' // Adjust the path if necessary based on your project structure


import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import BiblioTeque from '../views/BiblioTeque.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../components/Profile.vue'
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
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/recommendations/:author/:id/',
    name: 'Recommendations',
    component: Recommendations,
    props: route => ({ author: route.params.author, id: Number(route.params.id) })
},
{
  path: '/profile',
  name: 'profile',
  component: Profile,
  beforeEnter: (to, from, next) => {
    if (store.getters.isAuthenticated) {
      next();
    } else {
      next('/login');
    }
  }
},

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = store.state.username

  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
});

export default router
