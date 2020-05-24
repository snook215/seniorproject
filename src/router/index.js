import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/event/:id',
      name: 'eventSingle',
      component: () => import('../views/EventSingle.vue')
    },
    {
    path: '/analysis',
    name: 'analysis',
    component: () => import('../views/Analysis.vue')
    },
    {
      path: '/collectData',
      name: 'CollectData',
      component: () => import('../views/CollectData.vue')
    },
    {
      path: '/addschool',
      name: 'AddSchool',
      component: () => import('../views/AddSchool.vue')
    },
    {
      path: '/collectData2',
      name: 'Collectdata2',
      component: () => import('../views/CollectData2.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/studentdata',
      name: 'ShowStudentdata',
      component: () => import('../views/Studentdata.vue')
    },
    {
      path: '/editstudent',
      name: 'editstudent',
      component: () => import('../views/editstudent.vue')
    },
    {
      path: '/editteacher',
      name: 'editteacher',
      component: () => import('../views/editteacher.vue')
    },
    {
      path: '/csvupload',
      name: 'csvupload',
      component: () => import('../views/csvupload.vue')
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: () => import('../views/adduser.vue')
    },
    {
      path: '/addrecord',
      name: 'addrecord',
      component: () => import('../views/addmeasurement.vue')
    },
    {
      path: '/Homeadmin',
      name: 'Homeadmin',
      component: () => import('../views/Homeadmin.vue')
    }
  ]
})

