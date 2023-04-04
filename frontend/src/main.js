import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faX, faArrowRightFromBracket, faBars, faR, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faX, faArrowRightFromBracket, faBars, faR, faArrowLeft)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
