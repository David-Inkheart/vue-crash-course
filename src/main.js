import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import cors from 'cors'

// createApp(App).use(cors()).use(router).mount('#app')

const app = createApp(App)

app.use(router)

app.mount('#app')
