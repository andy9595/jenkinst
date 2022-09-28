import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局基础样式
import '@/assets/base.css'
Vue.config.productionTip = false


// 注入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
