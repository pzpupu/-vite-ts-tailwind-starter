import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import './style.css';
import App from './App.vue';
const pinia = createPinia();
const head = createHead();
const app = createApp(App);
app.use(pinia);
app.use(head);
app.mount('#app');