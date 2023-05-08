import { createApp } from 'vue'
import './assets/tema.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
createApp(App).mount('#app')
