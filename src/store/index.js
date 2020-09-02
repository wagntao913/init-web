import Vue from "vue";
import Vuex from "vuex";
import { login } from "@/api/user";
import { getToken, removeToken, setToken } from "../utils/auth";
import { getUserList } from "../api/user";

Vue.use(Vuex);

const state = {
  token: getToken(),
  id: ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    if (!token) {
      removeToken();
    } else {
      setToken(token);
    }
  },
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  }
};
const getters = {
  token: state => state.token,
  id: state => state.id
};

const actions = {
  Login({ commit }, params) {
    return new Promise((resolve, reject) => {
      login(params)
        .then(res => {
          const { token, id } = res;
          commit("SET_TOKEN", token);
          commit("SET_ID", id);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  GetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserList(state.id)
        .then(res => {
          console.log(res);
          commit("SET_NAME", res.account_name);
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  LogOut({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        commit("SET_TOKEN", "");
        commit("SET_ID", "");
        commit("SET_NAME", "");
        resolve(resolve);
      } catch (error) {
        reject(error);
      }
    });
  },
  ResetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      commit("SET_NAME", "");
      commit("SET_ID", "");
      resolve();
    });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
