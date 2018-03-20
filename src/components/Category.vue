<template>
    <div class="category">
        <div class="collapsible-header" @click="toggleActiveClass()" :class="{active: activeClass}">

            {{ category['pagetitle'] }}

            <i class="fa-chevron-down fa right"></i>
        </div>

        <div class="collapsible-body" :style="{display:displayCSS}">
            <ul class="collapsible subcategories" data-collapsible="expandable">
                <li v-for="subcategory in category['sub_categories']">
                    <div class="collapsible-header" :data-id="subcategory['id']" @click="renderProducts(subcategory['id'])">
                        {{ subcategory['pagetitle'] }}
                        ({{ subcategory['products'] }})
                    </div>

                    <products-list></products-list>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ProductsList from '@/components/ProductsList'
export default {
  name: 'Category',
    components: {'products-list': ProductsList},
  props: ["category"],
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
        renderProducts(subcategoryId){
            // alert(subcategoryId);
            if(this.activeClass){
                this.$store.dispatch('productsList', {
                    'subcategoryId': subcategoryId
                });
            }

        }
    }
}
</script>
