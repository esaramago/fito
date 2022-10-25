// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvwLOts2orWfxyhuWugBhTNGtgaYkiEvw",
  authDomain: "fito-cd6e1.firebaseapp.com",
  projectId: "fito-cd6e1",
  storageBucket: "fito-cd6e1.appspot.com",
  messagingSenderId: "881572363754",
  appId: "1:881572363754:web:c09e0ca9db07b7d9ed0693"
}

// Initialize Firebase
initializeApp(firebaseConfig);

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
