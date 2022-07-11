<template>
   <v-container>
      <v-card>
         <v-container>
            <v-subheader>회원가입</v-subheader>
            <!-- 
                  vuetify 에서 제공한 기능 : validate 체크 
                  1. <v-form v-model = "vaild"></v-form>
                  2. 모든 text-field가 입력되어야지만 vaild: true로 변경 (기존값 false)

                  각 text-field마다 각각 validate 체크해야된다면? :rules = "..." 를 이용하자
            -->
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
               <v-text-field
                  v-model="email"
                  label="이메일"
                  type="email"
                  :rules="emailRules"
                  required
               />
               <v-text-field 
                  v-model="password"
                  label="비밀번호"
                  type="password"
                  :rules="passwordRules"
                  required
               />
               <v-text-field 
                  v-model="passwordCheck"
                  label="비밀번호확인"
                  type="passwordCheck"
                  :rules="passwordCheckRules"
                  required
               />
               <v-text-field 
                  v-model="nickname"
                  label="닉네임"
                  type="nickname"
                  :rules="nicknameRules"
                  required
               />
               <v-checkbox
                  v-model="terms"
                  label="동의하십니까?" 
                  :rules="[v => !!v || '약관에 동의해야 합니다']"
                  required
               />
               <v-btn color="green" type="submit">가입하기</v-btn>
            </v-form>
         </v-container>
      </v-card>
   </v-container>
</template>
<script>
export default {
   name: '',
   components: {},
   methods: {
      onSubmitForm() {
         if (this.$refs.form.validate()) {
            alert('회원가입 ㄱ');
         } else {
            alert('가입불가');
         }
      }
   },
   data() {
      return {
         valid: false,
         email: '',
         password: '',
         passwordCheck: '',
         nickname: '',
         terms: false,
         emailRules: [
            // value
            // v => 조건 || '에러메세지'
            v => !!v || '이메일은 필수입니다',
            v => /.+@.+/.test(v) || '이메일이 유효하지않습니다.'
         ],
         nicknameRules: [
            v => !!v || '닉네임은 필수입니다.'
         ],
         passwordRules: [
            v => !!v || '비밀번호는 필수입니다.'
         ],
         passwordCheckRules: [
            v => !!v || '비밀번호체크는 필수입니다.',
            v => v === this.password || '비밀번호 일치하지않습니다.'
         ]     
      };
   },
   head() {
      return {
         title: '회원가입'
      }
   }
}
</script>
<style>
</style>
</template>