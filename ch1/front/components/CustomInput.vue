<template>
   <input type="text" @input="inputHobby()" v-model="hobby" placeholder="취미" />
</template>
<script>

export default {
   name: '',
   components: {
   },
   props: {
      parentHobby: {
         type: String
      }
   },
   computed: {
      _parentHobby () {
         return this.parentHobby
      }
   },
   watch: {
      _parentHobby (value) {
         this.hobby = value
      }
   },
   data() {
      return {
         hobby: ''
      };
   },
   methods: {
      inputHobby () {
         this.$emit('input', this.hobby)
      }
   },
}
</script>
<style>
</style>