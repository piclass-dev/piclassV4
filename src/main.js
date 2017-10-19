// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import qs from 'qs'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://piclass.cn'

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers['Content-Type'] = 'application/json'

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
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method === 'post' || config.method === 'put') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});