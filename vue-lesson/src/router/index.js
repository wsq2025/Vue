import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'
Vue.use(Router)
import Home from '../views/home.vue'
import MPhone from '../views/myPhone.vue'
import Shop from '../views/shop.vue'
import PageOne from '../views/page_one.vue'
import PageTwo from '../views/page_two.vue'
import PageThree from '../views/page_three.vue'
import PageFour from '../views/page_four.vue'
import PageFive from '../views/page_five.vue'
import Item from '../views/item.vue'
export default new Router({
    mode : 'history',
    routes:[
        {
            path:'/',component: Home
        },
        {
            path:'/Home',component: Home
        },
        {
            path:'/MPhone',component: MPhone
        },
        {
            path:'/Shop',component: Shop
        },
        {
            path:'/PageOne',component: PageOne
        },
        {
            path:'/PageTwo',component: PageTwo
        },
        {
            path:'/PageThree',component: PageThree
        },
        {
            path:'/PageFour',component: PageFour
        },
        {
            path:'/PageFive',component: PageFive
        },
        {
            path:'/Item',name:'item',component: Item
        },
]
})