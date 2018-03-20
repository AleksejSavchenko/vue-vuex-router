<template>

        <div class="cart-table-body">
                <div  v-for="product in productsList">
                        <pre>{{product}}</pre>
                </div>
        </div>
</template>

<script>
export default {
  name: 'ProductsList',
  props: ["productsList"],
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

}
</script>
