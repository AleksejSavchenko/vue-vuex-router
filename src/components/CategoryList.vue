<template>
  <ul class="collapsible collapsible-category" data-collapsible="expandable">
    <li v-for="category in categoryList" :key="category.id">
      <!--<pre>{{category}}</pre>-->

      <category :category="category"></category>

    </li>
  </ul>

</template>

<script>
    import Category from '@/components/Category'
export default {
  name: 'Category',
  components: {'category': Category},
  props: ["categoryList"],
    beforeCreate() {

    },
    data () {
      return {
          expanding: 'none',
      }
    },
    methods: {

    }
}
</script>