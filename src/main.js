import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import Card from './components/Card/Card.vue'
import Stack from './components/Stack/Stack.vue'

const app = createApp(App)

app.component('Card', Card)
app.component('Stack', Stack)

app.use(router)
app.mount('#app')
