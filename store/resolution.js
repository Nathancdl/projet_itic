export const state = () => ({
  isPhone: null,
  isRegular: null
});

export const mutations = {
  setIsPhone(state, isPhone) {
    state.isPhone = isPhone
  },
  setIsRegular(state, isRegular) {
    state.isRegular = isRegular
  }
}
