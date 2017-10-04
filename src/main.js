// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://piclass.cn/message'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Content-Type'] = 'application/json'
Vue.prototype.$ajax = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },

})