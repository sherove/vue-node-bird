<template>
   <div>
      <nav>
         <nuxt-link to="/">Home</nuxt-link>
         <nuxt-link to="/profile">Profile</nuxt-link>
         <nuxt-link to="signup">Signup</nuxt-link>
      </nav>
      <nuxt />
   </div>
</template>
<script>
export default {
   name: '',
   components: {},
   data() {
      return {
         name: 'Nuxt.js'
      };
   },
   // head() {
   //    return {
   //       title: '노드버드'
   //    }
   // }
}
</script>
<style>
</style>
</template>