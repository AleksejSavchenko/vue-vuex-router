<template>
  <div id="app">
    <router-view name="siteNav"/>
    <div class="wrapper">
      <router-view name="header"/>
      <router-view/>
      <router-view name="footer"/>
    </div>
  </div>
</template>

<!--
<script type="application/javascript" src="../js/vendor/modernizr-3.5.0.min.js"></script>
-->

<script>
  export default {
      name: 'App',
      data(){
          return {

          }
      },
      methods: {

      },
      computed: {

      }
  }
</script>

<style src="../css/style.css"></style>
<style src="../css/font-awesome.min.css"></style>
<style scoped>
  #app {
    margin-left: 63px;
  }
</style>