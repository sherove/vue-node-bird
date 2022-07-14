<template>
   <div>
      <nav>
         <nuxt-link to="/">Admin</nuxt-link>
         <nuxt-link to="/">Home</nuxt-link>
         <nuxt-link to="/profile">Profile</nuxt-link>
         <nuxt-link to="/signup">Signup</nuxt-link>
      </nav>
      <nuxt />
   </div>
</template>
<script>
export default {
   name: 'AdminForm',
   components: {},
   data() {
      return {
         name: 'Nuxt.js'
      };
   }
}
</script>
<style>
</style>
</template>