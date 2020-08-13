export const state = () => ({
  loaded: true
});

export const mutations = {
  resetLoaded: (state) => {
    state.loaded = false;
  },
  completedLoad: (state) => {
    state.loaded = true;
  }
};