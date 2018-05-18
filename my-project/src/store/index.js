import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    token: '',
    userId: '',
    info: '',
  },
  mutations: {
    SET_TOKEN(store, token) {
      if (token) {
        wx.setStorageSync('token', token)
      } else {
        wx.removeStorageSync('token')
      }
      store.token = token;
    },
    SET_USER_ID(store, id) {
      if (id) {
        wx.setStorageSync('userId', id)
      } else {
        wx.removeStorageSync('userId')
      }
      store.userId = id;
    }
  },
  actions: {
    LOGIN_SUCCESS(store, data) {
      store.commit('SET_TOKEN', data.token);
      store.commit('SET_USER_ID', data.userId);
    },
    LOGOUT(store) {
      store.commit('SET_TOKEN', '');
      store.commit('SET_USER_ID', '');
    },
    GET_SESSION_TOKEN(store) {
      let token = wx.getStorageSync('token');
      let userId = wx.getStorageSync('userId');
      if (token && userId) {

      }else {
         token = '';
         userId = '';
      }
      store.commit('SET_TOKEN', token);
      store.commit('SET_USER_ID', userId);

    }
  }
})
store.dispatch("GET_SESSION_TOKEN");
export default store