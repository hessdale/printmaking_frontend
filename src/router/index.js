import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import ARView from '../views/ARView.vue';
import BlocksView from '../views/BlocksView.vue';
import AboutView from '../views/AboutView.vue';
import BlockView from '../views/BlockView.vue';
import SearchView from '../views/SearchView.vue';
import ContactView from '../views/ContactView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { 
      title: 'Admin Page', 
      description: 'This is the Admin page', 
      author: 'Dale Hess' 
    }
  },
  {
    path: '/ar',
    name: 'ar',
    component: ARView,
    meta: { 
      title: 'AR Page', 
      description: 'This is the AR page', 
      author: 'Dale Hess' 
    }
  },
  {
    path: '/blocks',
    name: 'blocks',
    component: BlocksView,
    meta: { 
      title: 'Blocks Page', 
      description: 'This is the Blocks page', 
      author: 'Dale Hess' 
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { 
      title: 'Home Page', 
      description: 'Welcome to our website!', 
      author: 'Dale Hess' 
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { 
      title: 'About Page', 
      description: 'Learn about us and our mission', 
      author: 'Dale Hess' 
    }
  },
  {
    path: '/block/:block_id',
    name: 'block',
    component: BlockView,
    meta: { 
      title: 'Block Details', 
      description: 'Details of a specific block', 
      author: 'Dale Hess' 
    }
  },
  {
    path: '/search/:search_params',
    name: 'search',
    component: SearchView,
    meta: { 
      title: 'Search Results', 
      description: 'Search results page', 
      author: 'Dale Hess' 
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { 
      title: 'Contact Us', 
      description: 'Contact information', 
      author: 'Dale Hess' 
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
