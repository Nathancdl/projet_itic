const MUTATION_TYPES = {

};

export const state = () => ({

});

export const getters = {

};

export const mutations = {
};

export const actions = {
    subscribe: async function ({commit, state}, {email}) {
        let results = await this.$axios.post(`/subscriber`, {email})
        return results.data
    }
};
