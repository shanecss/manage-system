import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: require('@/components/Login').default
    },{
        path: '/RetrievePassword',
        name: 'RetrievePassword',
        component: require('@/components/RetrievePassword').default
    },{
        path: '/Index',
        name: 'Index',
        component: require('@/components/Index').default
    },{
        path: '*',
        redirect: '/'
    }]
})
