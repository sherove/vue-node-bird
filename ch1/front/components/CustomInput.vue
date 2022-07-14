<template>
    <input v-model="hobby" type="text" placeholder="취미" @input="inputHobby()"/>
</template>
<script>

export default {
  name: 'CustomInput',
  components: {},
  props: {
      parentHobby: {
          type: String,
          default: ''
      }
  },
  data() {
      return {hobby: ''};
  },
  computed: {
      _parentHobby() {
          return this.parentHobby
      }
  },
  watch: {
      _parentHobby(value) {
          this.hobby = value
      }
  },
  methods: {
      inputHobby() {
          this.$emit('input', this.hobby)
      }
  }
}
</script>
<style></style>