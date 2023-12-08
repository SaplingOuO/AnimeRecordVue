import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/SlicingCoding',
    name: 'SlicingCoding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SlicingCoding.vue')
  },
  {
    path: '/MyComponents',
    component: () => import('../views/MyComponents.vue'),
    children:[
      {
        path:'',
        name: 'MyComponents',
        component: () => import('../views/MyComponents.vue'),
      },
      {
        path:'animatedText',
        name: 'animatedText',
        component: () => import('../components/MyComponents/animatedText.vue'),
      },
      {
        path:'HomeViewSlide',
        name: 'HomeViewSlide',
        component: () => import('../components/MyComponents/HomeViewSlide.vue'),
      },
    ]
  },
  {
    path: '/MyProject',
    component: () => import('../views/MyProject.vue'),
    children:[
      {
        path:'',
        name: 'MyProject',
        component: () => import('../views/MyProject.vue'),
      },
      {
        path:'AnimeList',
        name: 'AnimeList',
        component: () => import('../components/MyProject/AnimeList.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
