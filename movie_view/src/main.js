// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import Axios from 'axios'
Vue.use(ElementUI)
Vue.use(Avue,{
  size:'',
  menuType:'',
  qiniu:{},
  ali:{},
  theme:'',//dark黑色主题
  canvas:{}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render:h=>h(App)
})
