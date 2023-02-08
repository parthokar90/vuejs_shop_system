import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'
import Toaster from '@meforma/vue-toaster';
import store from './store'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const app = createApp(App)

app.use(router)

app.use(Toaster,store).mount('#app')


