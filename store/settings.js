import Vue from "vue";

const MUTATION_TYPES = {
    SET_COLORING: "SET_COLORING",
    SET_SIZING: "SET_SIZING",
    SET_FRESHNESS: "SET_FRESHNESS",
    CHANGE_STATUS_FILTERS: "CHANGE_STATUS_FILTERS",
};

export const state = () => ({
    freshness: "any",
    sizing: "any",
    coloring: "any",
    filters: false
});

export const getters = {
    freshness(state) {
        return state.freshness;
    },
    filters(state) {
        return state.filters;
    },
    sizing(state) {
        return state.sizing;
    },
    coloring(state) {
        return state.coloring;
    },
};

export const mutations = {
    [MUTATION_TYPES.CHANGE_STATUS_FILTERS]: (state, bool) => {
        state.filters = typeof bool === "boolean" ? bool : !state.filters;
    },
    [MUTATION_TYPES.SET_FRESHNESS]: (state, freshness) => {
        state.freshness = freshness;
    },
    [MUTATION_TYPES.SET_SIZING]: (state, sizing) => {
        state.sizing = sizing;
    },
    [MUTATION_TYPES.SET_COLORING]: (state, coloring) => {
        state.coloring = coloring;
    },
};

export const actions = {
    changeStatusFilters({commit, state}, bool) {
        commit(MUTATION_TYPES.CHANGE_STATUS_FILTERS, bool);
    },
    setFreshness({commit, state}, freshness) {
        commit(MUTATION_TYPES.SET_FRESHNESS, freshness);
    },
    setSizing({commit, state}, sizing) {
        commit(MUTATION_TYPES.SET_SIZING, sizing);
    },
    setColoring({commit, state}, coloring) {
        commit(MUTATION_TYPES.SET_COLORING, coloring);
    },
};
