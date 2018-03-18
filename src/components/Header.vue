<template>
    <header class="site-header">

      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col l5 m9 s6">
              <div class="table-wrapper">
                <a href="#" data-activates="slide-out" class="slideNav-btn button-collapse hide-on-large-only"><i class="icon icon-menu"></i></a>
                <div class="site-description hide-on-small-only">Медтехника «Здоровая жизнь» </div>
                <div class="btn-exit"><a href="#"><i class="icon-exit icon tine"></i>Выйти</a></div>
              </div>
            </div>
            <div class="col l7 m3 s6">
              <div class="table-wrapper right">
                <div class="tel hide-on-med-only hide-on-small-and-down"><a href="tel:+38 067 440 81 20">+38 067 440 81 20</a><a href="tel:+38 044 425 59 52">+38 044 425 59 52</a></div>
                <div class="cart">
                  <a href="#" class="header-cart show-checked-product checked-product">
                    <i class="icon-cart icon tiny"></i>
                    <span class="number total_price_opt">0</span>
                    <span class="currency">грн</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header-bottom">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <div class="site-title">
                <h1>Оформление заказа</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'This is header'
    }
  }
}
</script>