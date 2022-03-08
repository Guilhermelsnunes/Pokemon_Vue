import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//used only for instance methods
export const eventBus = new Vue()


//our instance coupled with the DOM
new Vue({
  render: h => h(App),
}).$mount('#app')
