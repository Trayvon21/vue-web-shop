import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Dialog } from 'vant';
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'

    },
    //首页
    {
        path: '/home',
        component: Home,
        children: [{
            path: "",
            name: "home",
            component: () =>
                import ('../views/index/Index'),
            meta: {
                title: '首页',
                isMeta: true
            }
        }],


    },
    //分类
    {
        path: '/category',
        component: Home,
        children: [{
            path: "",
            name: "category",
            component: () =>
                import ('../views/category/Category'),
            meta: {
                title: '分类',
                isMeta: true
            }
        }]

    },
    //购物车
    {
        path: '/shoppingCart',
        component: Home,
        children: [{
            path: "",
            name: "shoppingCart",
            component: () =>
                import ('../views/shoppingCart/ShoppingCart'),
            meta: {
                title: '购物车',
                isMeta: true
            }
        }]
    },
    //我的
    {
        path: '/my',
        component: Home,
        children: [{
            path: "",
            name: "my",
            component: () =>
                import ('../views/my/My'),
            meta: {
                title: '我的',
                isMeta: true
            }
        }]
    },
    //详情页
    {
        path: '/details',
        name: 'details',
        component: () =>
            import ('../views/details/Details'),
        meta: {
            title: '详情',
            isMeta: true
        },
    },
    //最近浏览
    {
        path: '/browse',
        name: 'browse',
        component: () =>
            import ('../views/browse/Browse'),
        meta: {
            title: '最近浏览',
            isMeta: true
        }
    },
    //我的收藏
    {
        path: '/collection',
        name: 'collection',
        component: () =>
            import ('../views/collection/Collection'),
        meta: {
            title: '我的收藏',
            isMeta: true
        }
    },
    //结算
    {
        path: '/shoppingPayMent',
        name: 'shoppingPayMent',
        component: () =>
            import ('../views/shoppingPayMent/ShoppingPayMent'),
        meta: {
            title: '结算',
            isMeta: true
        }
    },
    //我的订单
    {
        path: '/order',
        name: 'order',
        component: () =>
            import ('../views/order/Order'),
        meta: {
            title: '我的订单',
            isMeta: true
        }
    },
    //评价中心
    {
        path: '/evaluate',
        name: 'evaluate',
        component: () =>
            import ('../views/evaluate/Evaluate'),
        meta: {
            title: '评价中心',
            isMeta: true
        }
    },
    //评价晒图
    {
        path: '/rate',
        name: 'rate',
        component: () =>
            import ('../views/rate/Rate'),
        meta: {
            title: '评价晒单',
            isMeta: true
        }
    },
    //查看评价
    {
        path: '/aevaluated',
        name: 'aevaluated',
        component: () =>
            import ('../views/aevaluated/Aevaluated'),
        meta: {
            title: '查看评价',
            isMeta: true
        }
    },
    //城市定位
    {
        path: '/city',
        name: 'city',
        component: () =>
            import ('../views/city/City'),
        meta: {
            title: '城市定位',
            isMeta: true
        }
    },
    //地址列表
    {
        path: '/address',
        name: 'address',
        component: () =>
            import ('../views/address/Address'),
        meta: {
            title: '我的地址',
            isMeta: true
        }
    },
    //地址修改
    {
        path: '/addressEdit',
        name: 'addressEdit',
        component: () =>
            import ('../views/addressEdit/AddressEdit'),
        meta: {
            title: '地址修改',
            isMeta: true
        }
    },
    //登录
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login'),
        meta: {
            title: '登录/注册',
            isMeta: true
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    let arr = ['my', 'home', 'category', 'shoppingCart', 'details', 'browse', 'city', 'login']
    if (!localStorage.getItem('nickname')) {
        if (arr.includes(to.name)) {
            next()
        } else {
            Dialog
                .alert({
                    title: "登录后才可启用此功能", //加上标题
                    message: "是否跳转登录/注册界面",
                    showCancelButton: true
                })
                .then(() => {
                    next('/login')
                })
                .catch(() => {

                });
        }

    }
    next()

})

export default router