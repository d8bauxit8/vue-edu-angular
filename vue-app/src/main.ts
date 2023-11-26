import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import {createMetaManager} from "vue-meta";
import AuthenticationService from "@/services/authentication/authentication.service";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createMetaManager());

app.provide<AuthenticationService>(
    AuthenticationService.SERVICE_NAME,
    new AuthenticationService(router)
)

app.mount('#app')
