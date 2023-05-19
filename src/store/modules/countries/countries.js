import { get } from "@/assets/js/data-connector/api-communication-abstractor";

const state = {
    countries: []
}

const getters = {
    countries: (state) => state.countries
}

const actions = {
    async fetchCountries({ commit }) {
        await get(`countries?pages=1000&sort=code,asc`, (json) => commit('setCountries', json.data));
    }
}

const mutations = {
    setCountries: (state, countries) => (state.countries = countries)
}

export default {
    state,
    getters,
    actions,
    mutations
}