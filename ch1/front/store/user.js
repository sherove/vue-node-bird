export const state = () => ({
   me: null, // 로그인했는지 안했는지 확인

});

// mutation 
// - setter 의 역할
// - 비동기적 작업 (ex. setTimeout, Promise, Ajax, Axios ... 못씀)
export const mutations = {
   setMe(state, payload) { // 1.state: state에 접근가능, 2.payload: 넣어줄 value 값
      state.me = payload;
   },
}

// action
// - 동기적 작업 (ex. setTimeout, Promise, Ajax, Axios ... 가능)
// - 복잡한 작업시 사용
export const actions = {
   // context = {commit, dispatch, state, getters, rootState, rootGetters} 가 들어있음
   // 1.commit: mutation실행함수 2.dispatch:액션s실행 3.state 접근 4.getters 5.rootState,rootGetters: index 모듈의 state, getters
   signUp(context, payload) {
      // 서버에 회원가입 요청을 보내는 부분
      // 응답이 오면 state.me = object회원정보 넣어줌 payload는 회원정보
      context.commit('setMe', payload)
   },
   logIn({ commit }, payload) {
      commit('setMe', payload)
   },
   logOut({ commit }, payload) {
      commit('setMe', null)
   }
}