import Vue from 'vue'
import Router from 'vue-router'
import msgSend from '@/pages/msgSend'

import index2 from '@/pages/index'
import msgDetail from '@/pages/msgDetail'
import UE from '@/components/UE'
Vue.use(Router)

export default new Router({
    routes: [{

            path: '/',
            name: 'index2',
            component: index2

        },
        {
            path: '/message/send',
            name: 'msgSend',
            component: msgSend
        },
        {
            path: '/message/detail',
            name: 'msgDetail',
            component: msgDetail
        },
        {
            path: '/message/ue',
            name: 'UE',
            component: UE
        }
    ]
})