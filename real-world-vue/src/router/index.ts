import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventOrganizer from '../views/EventOrganizer.vue'
import StudentListView from '../views/StudentListView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/organizer',
      name: 'organizer',
      component: EventOrganizer
    },
    {
      path: '/student',
      name: 'student',
      component: StudentListView
    }
  ]
})

export default router
