import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import Card from './components/Card/Card.vue'
import Grid from './components/Grid/Grid.vue'
import Icon from './components/Icon/Icon.vue'
import Input from './components/Input/Input.vue'
import Select from './components/Select/Select.vue'
import Stack from './components/Stack/Stack.vue'

const app = createApp(App)

app.component('Card', Card)
app.component('Grid', Grid)
app.component('Icon', Icon)
app.component('Input', Input)
app.component('Select', Select)
app.component('Stack', Stack)

app.use(router)
app.mount('#app')
