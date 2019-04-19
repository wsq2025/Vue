<template>
   <div>
     <headerNav></headerNav>
     <router-view></router-view>
     <!--<footerNav></footerNav>-->
   </div>
</template>

<script>
import headerNav from './components/header-nav'
//import footerNav from './components/footerNav'
export default {
   name : 'app',
   components : {
     headerNav
     //footerNav
   }
   }

</script>

<style>

</style>
