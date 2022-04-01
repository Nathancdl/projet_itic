const MUTATION_TYPES = {
    SEARCH: 'SEARCH',
    SET_RESULTS: "SET_RESULTS",
    RESET_RESULTS: "RESET_RESULTS",
};

export const state = () => ({
    results: [],
    images: [],
    news: [],
    videos: [],
    webPages: [],
    entities: [],
    relatedSearches: [],
    rankingResponse: [],
    computation: {},
    translations: {}
});

export const getters = {
    results(state) {
        return state.results;
    },
    computation(state) {
        return state.computation;
    },
    translations(state) {
        return state.translations;
    },
    webPages(state) {
        return state.webPages;
    },
    images(state) {
        return state.images.length ? state.images.slice(0, 5) : []
    },
    news(state) {
        return state.news.length ? state.news.slice(0, 5) : []
    },
    videos(state) {
        return state.videos.length ? state.videos.slice(0, 4) : []
    },
    entities(state) {
        return state.entities;
    },
    rankingResponse(state) {
        let res = []
        state.rankingResponse.forEach((item) => {
            if (item.answerType === 'Places') return;

            if (item.answerType !== 'WebPages') res.push(item)
            else {
                let lastElement = res[res.length - 1]
                if (lastElement?.answerType === 'WebPages')
                    lastElement.indexes.push(item.resultIndex)
                else
                    res.push({...item, indexes: [item.resultIndex]})
            }
        });
        return res;
    },
    relatedSearches(state) {
        return state.relatedSearches.length ? state.relatedSearches.slice(0, 4) : []
    },
    nbResults(state) {
        return state.results?.webPages?.totalEstimatedMatches
    },
    nbPages(state) {
        return Math.ceil(state.results?.webPages?.totalEstimatedMatches / 10)
    }
};

export const mutations = {
    [MUTATION_TYPES.SET_RESULTS]: (state, results) => {
        state.results = results;
        state.webPages = results.webPages?.value || [];
        state.images = results.images?.value || [];
        state.news = results.news?.value || [];
        state.videos = results.videos?.value || [];
        state.entities = results.entities?.value || [];
        state.relatedSearches = results.relatedSearches?.value
        state.rankingResponse = results.rankingResponse?.mainline?.items || [];
        state.computation = results.computation || {};
        state.translations = results.translations || {};
    },
    [MUTATION_TYPES.RESET_RESULTS]: (state) => {
        state.results = [];
        state.webPages = [];
        state.images = [];
        state.news = [];
        state.videos =  [];
        state.entities = [];
        state.relatedSearches = [];
        state.rankingResponse = [];
        state.computation = {};
        state.translations = {};
    },
};

export const actions = {
    async search({ commit }, { research, freshness, offset }) {
        commit(MUTATION_TYPES.RESET_RESULTS);
        const results = await this.$axios.get(`/search/all?${this.$formatQuery(research, freshness, 10, offset)}`, {withCredentials: true})
        commit(MUTATION_TYPES.SET_RESULTS, results.data);
    }
};
