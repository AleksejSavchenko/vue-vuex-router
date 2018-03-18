import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SiteNav from '@/components/SiteNav'
import HelloWorld from '@/components/HelloWorld'
import Ordering from '@/components/Ordering'

Vue.use(Router);

export default new Router({
    hashbang: false,
    mode: 'history',
      routes: [
        {
          path: '/',
          name: 'HelloWorld',
          components: {default: HelloWorld, siteNav: SiteNav}
        },
        {
          path: '/ordering',
          name: 'Ordering',
          components: {default: Ordering, header: Header, footer: Footer, siteNav: SiteNav}
        }
      ]
})
