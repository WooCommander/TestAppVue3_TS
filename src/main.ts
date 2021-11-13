import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import router from './router'


const app = createApp(App).use(router).use(router)
components(app)
app.mount('#app')
app.use(router)