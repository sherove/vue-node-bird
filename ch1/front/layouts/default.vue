<template>
   <v-app>
      <nav>
         <v-toolbar dark color="green">
            <v-toolbar-title>
               <nuxt-link to="/">NodeBird</nuxt-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
               <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center'}" />
               <v-btn text nuxt to="/profile" :style="{ display: 'flex', alignItems: 'center'}">
                  <div>프로필</div>
               </v-btn>
               <v-btn text nuxt to="/signup" :style="{ display: 'flex', alignItems: 'center'}">
                  <div>회원가입</div>
               </v-btn>
               <v-btn text nuxt to="/study" :style="{ display: 'flex', alignItems: 'center'}">
                  <div>스터디</div>
               </v-btn>
            </v-toolbar-items>
         </v-toolbar>
      </nav>
      <div>{{ name }}</div>
      <v-btn @click="onChangeName()">바이바이</v-btn>
      <v-row no-gutters>
         <v-col cols="12" md="4">
            <login-form />
         </v-col>
         <v-col cols="12" md="8">
            <nuxt />
         </v-col>
      </v-row>
   </v-app>
</template>
<script>
import LoginForm from '~/components/LoginForm';
// 물결표시는? root 폴더위치 (소스들의 디렉토리 여기선 front폴더)

export default {
   name: 'DefaultForm',
   components: {
      LoginForm
   },
   computed: {
      name () {
         return this.$store.state.posts.name
         // posts.js에 있는 name 가지고 오고싶다면? this.$store.state.posts.name
         // index.js에 있는 name 가지고 오고싶다면? this.$store.state.name
      }
   },
   methods: {
      onChangeName () {
         this.$store.commit('posts/bye')
      }
   }
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