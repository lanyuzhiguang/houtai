import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:()=> import ('@/views/login')
    },
    {
      path: '/my',
      meta:{
        title:'我是布局页面'
      },
      component:()=> import ('@/views/my'),
      children: [
        {
          path: '',
          meta: {
            title: '首页'
          },
          component: () => import ('@/views/user/index')
        },
        {
          path: 'person',
          meta: {
            title: '个人中心'
          },
          component: () => import ('@/views/user/person')
        },
        {
          path: 'user',
          meta:{
            title:'用户页面'
          },
          component:()=> import ('@/views/user/user')
        },
        {
          path: 'adduser',
          meta:{
            title:'添加用户页面'
          },
          component:()=> import ('@/views/user/adduser')
        },
        {
          path: 'changepwd',
          meta:{
            title:'修改密码'
          },
          component:()=> import ('@/views/user/changepwd')
        },
        {
          path: 'details',
          meta:{
            title:'用户详情'
          },
          component:()=> import ('@/views/user/details')
        },
        {
          path: 'category',
          meta:{
            title:'分类列表'
          },
          component:()=> import ('@/views/category/category')
        },
        {
          path: 'categoryadd',
          meta:{
            title:'添加分类'
          },
          component:()=> import ('@/views/category/categoryadd')
        },
        {
          path: 'edito',
          meta:{
            title:'编辑分类'
          },
          component:()=> import ('@/views/category/edito')
        },
        {
          path: 'getbook',
          meta:{
            title:''
          },
          component:()=> import ('@/views/category/getbook')
        },
        {
          path: 'allbook',
          meta:{
            title:'全部书籍'
          },
          component:()=> import ('@/views/book/allbook')
        },
        {
          path: 'editobook',
          meta:{
            title:'编辑书籍'
          },
          component:()=> import ('@/views/book/editobook')
        },
        {
          path: 'addbook',
          meta:{
            title:'添加书籍'
          },
          component:()=> import ('@/views/book/addbook')
        },
        {
          path: 'allslideshow',
          meta:{
            title:'所有轮播图'
          },
          component:()=> import ('@/views/slideshow/allslideshow')
        },
        {
          path: 'addslideshow',
          meta:{
            title:'添加轮播图'
          },
          component:()=> import ('@/views/slideshow/addslideshow')
        },
        {
          path: 'editoslideshow',
          meta:{
            title:'编辑轮播图'
          },
          component:()=> import ('@/views/slideshow/editoslideshow')
        },

      ]
    },

  ]
})
