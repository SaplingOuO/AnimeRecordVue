import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/SlicingCoding',
    name: 'SlicingCoding',
    component: () => import('../views/SlicingCoding.vue')
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
  base: process.env.BASE_URL,
  routes
})

export default router
