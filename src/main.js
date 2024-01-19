import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import Carousel3d from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"
import store from './store/store.js'
import scss from 'sass'

// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(Carousel3d)
app.use(store)
// app.use(VueAxios,axios)
app.use(scss)
app.mount('#app')