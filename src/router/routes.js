//引入路由组件，路由组件懒加载方式
const Msite =()=>import('../pages/miste/Msite.vue')
const Category=()=>import('../pages/category/Category.vue')
const Buy =()=>import('../pages/buy/Buy.vue')
const ShopCart =()=>import('../pages/shopCart/ShopCart.vue')
const Person=()=>import('../pages/person/Person.vue')
const Fsxb =()=>import('../pages/miste/pages/fsxb/Fsxb.vue')
const Ghqj =()=>import('../pages/miste/pages/ghqj/Ghqj.vue')
const Msjs =()=>import('../pages/miste/pages/msjs/Msjs.vue')
const Myqz =()=>import('../pages/miste/pages/myqz/Myqz.vue')
const Qqts =()=>import('../pages/miste/pages/qqts/Qqts.vue')
const Shenghuo =()=>import('../pages/miste/pages/shenghuo/Shenghuo.vue')
const Smjd =()=>import('../pages/miste/pages/smjd/Smjd.vue')
const Ydlx =()=>import('../pages/miste/pages/ydlx/Ydlx.vue')
const Tuijian=()=>import('../pages/miste/pages/tuijian/Tuijian.vue')

export default [
  {
    path:'/',
    component:Msite,
    meta: { 
      isShowFooter:true
     },
    children:[
      {
        path:'/',
        component:Tuijian
      },
      {
        path:'/msite/fsxb',
        component:Fsxb
      },
      {
        path:'/msite/ghqj',
        component:Ghqj
      },
      {
        path:'/msite/msjs',
        component:Msjs
      },
      {
        path:'/msite/ydlx',
        component:Ydlx
      },
      {
        path:'/msite/myqz',
        component:Myqz
      },
      {
        path:'/msite/qqts',
        component:Qqts
      },
      {
        path:'/msite/shenghuo',
        component:Shenghuo
      },
      {
        path:'/msite/smjd',
        component:Smjd
      },
      
    ]
  },
  {
    path:'/category',
    component:Category,
    meta: { 
      isShowFooter:true
     },
    
  },
  {
    path:'/buy',
    component:Buy,
    meta: { 
      isShowFooter:true
     },
  },
  {
    path:'/shopCart',
    component:ShopCart,
    meta: { 
      isShowFooter:true
     },
  },
  {
    path:'/person',
    component:Person,
    meta: { 
      isShowFooter:false
     },
  },
  {
    path:'/',
    redirect: '/msite'
  }
  
]