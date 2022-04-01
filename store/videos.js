const MUTATION_TYPES = {
    SET_RESULTS: "SET_RESULTS",
    RESET_RESULTS: "RESET_RESULTS",
};

export const state = () => ({
    results: [],
    videos: [],
});

export const getters = {
    videos(state) {
        return state.videos;
    },
    results(state) {
        return state.results;
    },
    nbResults(state) {
        return state.results.totalEstimatedMatches
    },
    nbPages(state) {
        return Math.ceil(state.results.totalEstimatedMatches / 10)
    }
};

export const mutations = {
    [MUTATION_TYPES.SET_RESULTS]: (state, results) => {
        state.results = results;
        state.videos = results.value;
    },
    [MUTATION_TYPES.RESET_RESULTS]: (state) => {
        state.results = [];
        state.videos =  [];
    },
};

export const actions = {
    async getVideos({ commit }, { research, freshness, offset }) {
        commit(MUTATION_TYPES.RESET_RESULTS);
        const results = await this.$axios.get(`/search/videos?${this.$formatQuery(research, freshness, 10, offset)}`, { withCredentials: true })
        commit(MUTATION_TYPES.SET_RESULTS, results.data);
    }
};
