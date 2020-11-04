import { reqGetAllFilm, reqSearchFilm } from '../../api'

const state = {
    films: [],
    filteredFilms: []
}

const mutations = {
    updateFilm(state, films) {
        state.films = films
    },

    updateFilteredFilm(state, films) {
        state.filteredFilms = films
    }
}

const actions = {
    getAllFilm({ commit }) {
        reqGetAllFilm().then((data) => {
            commit('updateFilm', data)
        })
    },

    searchFilm({ commit }, filter) {
        reqSearchFilm(filter).then((data) => {
            commit('updateFilteredFilm', data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
