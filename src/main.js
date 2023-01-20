import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './style.css';

/* FontAwesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
library.add(faCaretRight);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
