export const state = () => ({
  isInstalled: null
});

export const mutations = {
  setIsInstalled (state, isInstalled) {
      state.isInstalled = isInstalled
  }
};

export const actions = {
  async checkIsInstalled({ state, commit }) {
    return new Promise((resolve) => {
      if (state.isInstalled !== null) {
        return resolve(state.isInstalled)
      }
      try {
        chrome.runtime.sendMessage(
          process.env.CHROME_EXTENSION_ID,
          { action: 'hasExtensionInstalled' },
          (response) => {
            if (response && !response.error) {
              console.log('the extension is installed')
              commit('setIsInstalled', true)
              resolve(true)
            } else {
              console.log('the extension is not installed')
              commit('setIsInstalled', false)
              resolve(false)
            }
          }
        );
      } catch (e) {
        resolve(false)
      }
    });
  }
};
