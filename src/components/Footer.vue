<template>
    <!-- footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row valign-wrapper">
          <div class="col l5 m2 s6 xl6" >
            <div class="table-wrapper left-block">
              <div class="item-table"><a href="/"><i class="icon-home icon tiny"></i><span class="link-home hide-on-med-only hide-on-small-and-down">На главный сайт</span></a></div>
              <div class="item-table"><a href="#"><i class="icon-exit icon tiny"></i><span class="link-exit hide-on-med-only hide-on-small-and-down">Выйти</span></a></div>
              <div class="item-table logo-block hide-on-med-only hide-on-small-and-down">
                <div class="logo right">
                  <a href="https://evergreens.com.ua"><img src="../../image/img/evergreen_ru_b.png" alt="Evergreen"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col l7 m10 s6 xl6">
            <div class="table-wrapper right right-block">
              <div class="site-description hide-on-small-and-down">Официальный сайт компании OSD™ в Украине</div>
              <div class="item-table">
                <a href="#" class="btn-circle small-btn g-plus" title="google+">
                  <i class="icon icon-g small"></i>
                </a>
              </div>
              <div class="item-table">
                <a href="#" class="btn-circle small-btn facebook">
                  <i class="icon icon-fb small" title="facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page Up button -->
      <div class="page-up hide hide-on-large-down"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'This is footer'
    }
  }
}
</script>
