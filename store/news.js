const MUTATION_TYPES = {
    SET_RESULTS: "SET_RESULTS",
    RESET_RESULTS: "RESET_RESULTS",
};

export const state = () => ({
    results: [],
    news: [],
});

export const getters = {
    news(state) {
        return state.news;
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
        state.news = results.value;
    },
    [MUTATION_TYPES.RESET_RESULTS]: (state) => {
        state.results = [];
        state.news = [];
    },
};

export const actions = {
    async getNews({ commit }, { research, freshness, offset }) {
        commit(MUTATION_TYPES.RESET_RESULTS);
        const results = await this.$axios.get(`/search/news?${this.$formatQuery(research, freshness, 10, offset)}`, { withCredentials: true })
        commit(MUTATION_TYPES.SET_RESULTS, results.data);
    }
};
