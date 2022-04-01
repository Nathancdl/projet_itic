const MUTATION_TYPES = {
    SET_RESULTS: "SET_RESULTS",
    RESET_RESULTS: "RESET_RESULTS",
};

export const state = () => ({
    suggestions: [],
    results: []
});

export const getters = {
    suggestions(state) {
        return state.suggestions || [];
    },
    results(state) {
        return state.results;
    },
};

export const mutations = {
    [MUTATION_TYPES.SET_RESULTS]: (state, results) => {
        state.results = results;
        state.suggestions = results.suggestionGroups[0]?.searchSuggestions;
    },
    [MUTATION_TYPES.RESET_RESULTS]: (state) => {
        state.results = [];
        state.suggestions = [];
    },
};

export const actions = {
    async getSuggestions({ commit }, { research }) {
        commit(MUTATION_TYPES.RESET_RESULTS);
        if (research) {
        const results = await this.$axios.get(`/search/autocomplete?${this.$formatQuery(research, null, 5)}`, { withCredentials: true })
        commit(MUTATION_TYPES.SET_RESULTS, results.data);
        }
    }
};
