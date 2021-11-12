import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'

const app = createApp(App)
components(app)
app.mount('#app')

