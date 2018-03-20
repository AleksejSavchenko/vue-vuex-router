<template>
    <div class="collapsible-header" :class="{active: expanding === 'none' ? '' : 'active'}">

        {{ category['pagetitle'] }}

    </div>
</template>

<script>
export default {
  name: 'Category',
  props: ["category"],
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
