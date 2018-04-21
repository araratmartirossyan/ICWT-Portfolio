// import firebase from 'firebase'
import * as types from '../mutation-types'
import { clientApi } from '../../helpers/clientApi'

const state = {
  showMenu: false,
  showModal: false,
  modalName: '',
  project: {},
  projects: [],
  isLoading: false,
  isError: false
}

const getters = {
  project: () => state.project,
  projects: () => state.projects.filter(item => item.title)
}

const mutations = {
  [types.clickOutside]() {
    state.showMenu = false
    state.showModal = false
  },
  [types.showMenu]() {
    state.showMenu = !state.showMenu
    state.showModal = false
  },
  [types.showModal]() {
    state.showModal = !state.showModal
    state.showMenu = false
  },
  [types.preloader](sub, loading) {
    state[loading] = true
  },
  [types.fetchProjectSuccess](sub, { project }) {
    state.project = project.val()
    state.isLoading = false
    state.showModal = true
    state.showMenu = false
  },
  [types.fetchProjectFailure](sub, { error }) {
    state.isLoading = false
    state.isError = error
  },
  [types.fetchProjectsSuccess](sub, { projects }) {
    state.projects = projects.val()
    state.isLoading = false
  },
  [types.fetchProjectsFailure](sub, { error }) {
    state.isLoading = false
    state.isError = error
  }
}

const actions = {
  fetchProject({ commit }, id) {
    commit('preloader', 'isLoading')
    clientApi(`projects/${id}`)
      .then(project => commit('fetchProjectSuccess', { project }))
      .catch(error => commit('fetchProjectFailure', { error }))
  },
  fetchProjects({ commit }) {
    commit('preloader', 'isLoading')
    clientApi('projects')
      .then(projects => commit('fetchProjectsSuccess', { projects }))
      .catch(error => commit('fetchProjectsFailure', { error }))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
