<template>
  <div class="side-nav-wrap">
    <ul id="slide-out" @mouseenter="hoverClass='big-fixed'" @mouseleave="hoverClass='small-fixed'"  :class="hoverClass" class="side-nav fixed small-fixed">
      <li class="site-logo"><img src="../../image/svg/logo.svg" alt="OSD"></li>
      <li class=""><router-link :to="'/ordering'"><i class="icon icon-cart"></i><span>Оформление заказа</span></router-link></li>
      <!--<li><a href="news.html"><i class="icon icon-sale"></i><span>Новости и акции</span></a></li>-->
      <!--<li><a href="catalog.html"><i class="icon icon-catalogue"></i><span>Каталог и инструкции</span></a></li>-->
      <li><router-link :to="'/'"><i class="icon icon-settings"></i><span>Профиль компании</span></router-link></li>
      <!--<li><a href="history-orders.html"><i class="icon icon-orders"></i><span>История заказов</span></a></li>-->
      <!--<li><a href="contacts.html"><i class="icon icon-contacts"></i><span>Контакты</span></a></li>-->
      <li><a href="#"><i class="icon icon-home"></i><span>На главный сайт</span></a></li>
      <li class="slideNav"><a><i class="fa fa-chevron-right"></i> <i class="fa fa-chevron-left"></i></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SiteNav',
  data () {
    return {
      msg: 'This is SiteNav',
      hoverClass: '',
    }
  },
    methods: {

    }
}
</script>