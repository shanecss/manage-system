import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 解决element-ui的子菜单项点击两下出现 NavigationDuplicated {_name: "NavigationDuplicated"}
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        meta:{
            keepAlive:false //需要被缓存的组件
        },
        component: require('@/components/Login').default
    },{
        path: '/RetrievePassword',
        name: 'RetrievePassword',
        meta:{
            keepAlive:false //需要被缓存的组件
        },
        component: require('@/components/RetrievePassword').default
    },{
        path: '/Index',
        name: 'Index',
        redirect: '/serviceSystem',
        meta:{
            keepAlive:true //需要被缓存的组件
        },
        component: require('@/components/Index').default,
        children:[{
            path: '/serviceSystem',
            name: 'serviceSystem',
            meta:{
                keepAlive:true //需要被缓存的组件
            },
            component: require('@/template/system/serviceSystem').default
        },{
            path: '/otherSystem',
            name: 'otherSystem',
            meta:{
                keepAlive:true //需要被缓存的组件
            },
            component: require('@/template/system/otherSystem').default
        }]
    },{
        path: '/organizateMan',
        name: 'organizateMan',
        meta:{
            keepAlive:true //需要被缓存的组件
        },
        component: require('@/template/organizateMan/organizateMan').default
    },{
        path: '*',
        redirect: '/'
    }]
})
