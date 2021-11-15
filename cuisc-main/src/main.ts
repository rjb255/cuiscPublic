import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).use(router).mount('#app')

// adaptSize = function(){
//     navHeight = $('#nav').outerHeight()
//     $('#navImg1').height(window.innerHeight - navHeight)
//             }
//     window.onresize = adaptSize

// adaptSize()
