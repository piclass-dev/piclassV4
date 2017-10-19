import Vue from 'vue'
import Router from 'vue-router'
import msgSend from '@/pages/msgSend'

import index2 from '@/pages/index'
import msgDetail from '@/pages/msgDetail'
import UE from '@/components/UE'
import msgMBIndex from '@/pages/mobile/msgIndex'
import msgMBDetail from '@/pages/mobile/msgDetail'
import msgMBSend from '@/pages/mobile/msgSend'
import fileMB from '@/pages/mobile/file'
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
        },
        {
            path: '/mobile/message/index',
            name: 'msgIndex',
            component: msgMBIndex
        },
        {
            path: '/mobile/message/detail',
            name: 'msgMBDetail',
            component: msgMBDetail
        },
        {
            path: '/mobile/message/send',
            name: 'msgMBSend',
            component: msgMBSend
        },
        {
            path: '/mobile/file',
            name: 'fileMB',
            component: fileMB
        }
    ]
})