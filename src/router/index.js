import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/frontend/pages/HomePage.vue'
import AboutView from '../views/frontend/pages/About.vue'
import BlogView from '../views/frontend/pages/Blog.vue'
import ContactView from '../views/frontend/pages/Contact.vue'
import CartView from '../views/frontend/pages/Cart.vue'
import CheckoutView from '../views/frontend/pages/Checkout.vue'
import AccountView from '../views/frontend/pages/Account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
  ]
})

export default router
