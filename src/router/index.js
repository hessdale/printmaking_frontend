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
    meta: [
      {
        name: 'title',
        content: 'Admin Page',
      },
      {
        name: 'description',
        content: 'This is the Admin page',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],
  },
  {
    path: '/ar',
    name: 'ar',
    component: ARView,
    meta: [
      {
        name: 'title',
        content: 'AR Page',
      },
      {
        name: 'description',
        content: 'This is the AR page',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],

  },
  {
    path: '/blocks',
    name: 'blocks',
    component: BlocksView,
    meta: [
      {
        name: 'title',
        content: 'Blocks Page',
      },
      {
        name: 'description',
        content: 'This is the Blocks page',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],

  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: [
      {
        name: 'title',
        content: 'Home Page',
      },
      {
        name: 'description',
        content: 'Welcome to our website!',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],

  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: [
      {
        name: 'title',
        content: 'About Page',
      },
      {
        name: 'description',
        content: 'Learn about us and our mission',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],

  },
  {
    path: '/block/:block_id',
    name: 'block',
    component: BlockView,
    meta: [
      {
        name: 'title',
        content: 'Block Details',
      },
      {
        name: 'description',
        content: 'Details of a specific block',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],

  },
  {
    path: '/search/:search_params',
    name: 'search',
    component: SearchView,
    meta: [
      {
        name: 'title',
        content: 'Search Results',
      },
      {
        name: 'description',
        content: 'Search results page',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: [
      {
        name: 'title',
        content: 'Contact Us',
      },
      {
        name: 'description',
        content: 'Contact information',
      },
      {
        name: 'author',
        content: 'Dale Hess',
      }
    ],
  }
];

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  let current_meta_tags = document.querySelectorAll(`meta`);
  for (let i = 0; i < current_meta_tags.length; i++) {
    current_meta_tags[i].remove();
  }
  let new_meta_tags = to[`meta`];
  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];
  for (let i = 0; i < new_meta_tags.length; i++) {
    document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
      `<meta name="${new_meta_tags[i][`name`]}"
    content="${new_meta_tags[i][`content`]}">`);
  }
  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
    `<meta charset="utf-8">
  <meta http-equiv=""X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`
  );
  from;
  next()
}
);

export default router;
