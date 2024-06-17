import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/SlicingCoding',
    component: () => import('../views/SlicingCoding.vue'),
    children:[
      {
        path:'',
        name: 'SlicingCoding',
        component: () => import('../views/SlicingCoding.vue'),
      },
      {
        path:'slicingTest1',
        name: 'slicingTest1',
        component: () => import('../components/SlicingCoding/slicingTest1.vue'),
      },
    ],
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
      {
        path:'BackgroundColorChange',
        name: 'BackgroundColorChange',
        component: () => import('../components/MyComponents/BackgroundColorChange.vue'),
      },
      {
        path:'ThreeCube',
        name: 'ThreeCube',
        component: () => import('../components/MyComponents/ThreeJs/ThreeCube.vue'),
      },
      {
        path:'ThreeInteractive',
        name: 'ThreeInteractive',
        component: () => import('../components/MyComponents/ThreeJs/ThreeInteractive.vue'),
      },
      {
        path:'ThreeExample',
        name: 'ThreeExample',
        component: () => import('../components/MyComponents/ThreeJs/ThreeExample.vue'),
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
      {
        path:'PokemonTypeFighting',
        name: 'PokemonTypeFighting',
        component: () => import('../components/MyProject/PokemonTypeFighting.vue'),
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
