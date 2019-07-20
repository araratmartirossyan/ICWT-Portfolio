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
    state.project = project
    state.isLoading = false
    state.showModal = true
    state.showMenu = false
  },
  [types.fetchProjectFailure](sub, { error }) {
    state.isLoading = false
    state.isError = error
  },
  [types.fetchProjectsSuccess](sub, { projects }) {
    state.projects = projects
    state.isLoading = false
  },
  [types.fetchProjectsFailure](sub, { error }) {
    state.isLoading = false
    state.isError = error
  },
  togglePreloader() {
    state.isLoading = !state.isLoading
  }
}

const actions = {
  async fetchProject({ commit }, id) {
    commit('preloader', 'isLoading')
    try {
      const { post: project } = await clientApi('get', `posts/${id}`)
      await commit('fetchProjectSuccess', { project })
    } catch (error) {
      commit('fetchProjectFailure', { error })
    }
  },
  async fetchProjects({ commit }) {
    commit('preloader', 'isLoading')
    try {
      const projects = await clientApi('get', 'posts')
      await commit('fetchProjectsSuccess', { projects })
    } catch (error) {
      commit('fetchProjectsFailure', { error })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
