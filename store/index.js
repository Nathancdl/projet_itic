import Vue from "vue";

const MUTATION_TYPES = {
  SET_COOKIES : 'SET_COOKIES'
};

export const state = () => ({
  googleToast : false,
  areCookiesAccepted : false
});

export const getters = {
  getCookies (state) {
    return state.areCookiesAccepted;
  },
};

export const mutations = {
  [MUTATION_TYPES.SET_COOKIES]: (state, cookieState) => {
    state.areCookiesAccepted = cookieState;
  },
};

export const actions = {
  setCookies({commit, state}, cookieState){
    commit(MUTATION_TYPES.SET_COOKIES, cookieState);
  },
};
