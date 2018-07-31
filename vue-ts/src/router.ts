import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/views/index.vue';
import InsuranceHeader from '@/views/header.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'Index',
          components: {
              default: Index,
              header: InsuranceHeader,
          },
      },
  ],
});
