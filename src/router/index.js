import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/frontend/pages/HomePage.vue'
import AboutView from '../views/frontend/pages/About.vue'
import BlogView from '../views/frontend/pages/Blog.vue'
import ContactView from '../views/frontend/pages/Contact.vue'
import CartView from '../views/frontend/pages/Cart.vue'
import CheckoutView from '../views/frontend/pages/Checkout.vue'
import AccountView from '../views/frontend/pages/Account.vue'
import ProductDetails from '../views/frontend/pages/ProductDetails.vue'
import CategoryProduct from '../views/frontend/pages/CategoryProduct.vue'
import BlogDetails from '../views/frontend/pages/BlogDetails.vue'
import Search from '../views/frontend/pages/Search.vue'


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
      component: AccountView,
    },
    {
      path: '/product-details/:id',
      name: 'product-details',
      component: ProductDetails
    },
    {
      path: '/category-product/:id',
      name: 'category-product',
      component: CategoryProduct,
    },
    {
      path: '/blog-details/:id',
      name: 'blog-details',
      component: BlogDetails
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
  ]
})



export default router
