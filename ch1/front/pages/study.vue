<template>
   <custom-input v-model="hobby"></custom-input>
</template>
<script>
import CustomInput from '~/components/CustomInput';

export default {
   name: 'StudyForm',
   components: {
      CustomInput
   },
   data() {
      return {
         name: 'Nuxt.js',
         // parentHobby: '',
         hobby: ''
      };
   },
   methods: {
      // setParentHobby (value) {
      //    this.parentHobby = value
      // }
   },
}
</script>
<style>
</style>