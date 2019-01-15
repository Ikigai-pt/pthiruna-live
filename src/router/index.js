import Vue from 'vue';
import Router from 'vue-router';
import Code from '@/pages/code/Code';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';
import Books from '@/pages/books/Books';
import Trading from '@/pages/trading/Trading';
import Productivity from '@/pages/productivity/Productivity';
import Blog from '@/pages/blog/Blog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      alias: '/',
      name: 'About',
      component: About,
      meta: { icon: 'far fa-user' },
    },
    {
      path: '/books',
      alias: '/books/#/',
      name: 'Books',
      component: Books,
      meta: { icon: 'far fa-bookmark' },
    },
    {
      path: '/code',
      name: 'Code',
      component: Code,
      meta: { icon: 'far fa-file-code' },
    },
    {
      path: '/trading',
      name: 'Trading',
      component: Trading,
      meta: { icon: 'fas fa-map-marker-alt' },
    },
    {
      path: '/productivity',
      name: 'Productivity',
      component: Productivity,
      meta: { icon: 'fas fa-wrench' },
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: { icon: 'fas fa-rss' },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { icon: 'far fa-envelope' },
    },
  ],
});
