const MUTATION_TYPES = {
    SET_RESULTS: "SET_RESULTS",
    RESET_RESULTS: "RESET_RESULTS",
};

export const state = () => ({
    images: [],
    results: []
});

export const getters = {
    images(state) {
        return state.images;
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
        state.images = results.value;
    },
    [MUTATION_TYPES.RESET_RESULTS]: (state) => {
        state.results = [];
        state.images = [];
    },
};

export const actions = {
    async getImages({ commit }, { research, freshness, offset }) {
        commit(MUTATION_TYPES.RESET_RESULTS);
        const results = await this.$axios.get(`/search/images?${this.$formatQuery(research, freshness, 50, offset)}`, { withCredentials: true })
        commit(MUTATION_TYPES.SET_RESULTS, results.data);
    }
};
