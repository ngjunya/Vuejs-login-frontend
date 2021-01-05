import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
      status:'',
      token:localStorage.getItem('token'||""),
      user:{}
    },
    mutations:{
       auth_success(state,token,user){
           state.status='Success'
           state.token=token
           state.user=user
       },
       auth_error(state){
           state.status='error'
       }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
      }
})