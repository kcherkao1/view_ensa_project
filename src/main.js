import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Typed from 'typed.js';

import store from '../store'

const app = createApp(App);

// Initialize typed.js for the hero section text
app.config.globalProperties.$typed = Typed;

// Set up the router
app.use(router).use(store);

// Mount the app
app.mount('#app');
