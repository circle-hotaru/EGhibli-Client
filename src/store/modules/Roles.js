import { reqGetAllRole, reqSearchRole } from '../../api'

const state = {
    roles: [],
    filteredRoles: []
}

const mutations = {
    updateRole(state, roles) {
        state.roles = roles
    },

    updateFilteredRole(state, roles) {
        state.filteredRoles = roles
    }
}

const actions = {
    getAllRole({ commit }) {
        reqGetAllRole().then((data) => {
            commit('updateRole', data)
        })
    },

    searchRole({ commit }, filter) {
        reqSearchRole(filter).then((data) => {
            commit('updateFilteredRole', data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
