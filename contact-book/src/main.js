// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';


// Import any global CSS (optional)
import './assets/main.css';

const app = createApp(App);

// Use Vue Router
app.use(router);

// Mount the Vue app to the #app element in index.html
app.mount('#app');
