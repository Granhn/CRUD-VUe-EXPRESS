import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/dist/darkly/bootstrap.css'
//import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routes'

const pinia = createPinia()
const app = createApp(App);

app.use(pinia); 
app.use(router);
app.mount('#app')
