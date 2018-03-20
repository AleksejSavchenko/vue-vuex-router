<template>
        <div class="collapsible-body">
                <div class="cart-table">
                        <div class="cart-table-heading">
                                <div class="cth-photo">Фото</div>
                                <div class="cth-name">Название и артикул</div>
                                <div class="cth-price-retail   hide-on-small-and-down">РРЦ, грн</div>
                                <div class="cth-price-wholesale hide-on-small-and-down">Оптовая цена, грн</div>
                                <div class="cth-attr hide-on-med-and-down hide-on-small-and-down">Атрибуты</div>
                                <div class="cth-quantity hide-on-med-and-down hide-on-small-and-down">Количество</div>
                                <div class="cth-availability hide-on-small-and-down">Наличие</div>
                                <div class="cth-amount hide-on-small-and-down">Сумма, грн</div>
                        </div>

                        <products :productsList="productsList"></products>

                </div>
        </div>
</template>

<script>
    import Products from '@/components/Products'
export default {
  name: 'ProductsList',
  // props: ["category"],
    components: {'products': Products},
    beforeCreate(){
        return this.$store.getters.productsList
    },
    data () {
      return {
          activeClass: false,
          displayCSS: 'none',
      }
    },
    methods: {
        toggleActiveClass(){
            this.activeClass = !this.activeClass;
            this.activeClass ? this.displayCSS = 'block' : this.displayCSS = 'none';
            // this.$emit('toggleActiveClass')
        },
    },
    computed: {
        productsList() {
            return this.$store.getters.productsList
        }
    }
}
</script>
