import { clientApi } from '../../helpers/clientApi'
import { validateAccount } from '../validators/form'

const state = {
  contactForm: {
    email: '',
    fullname: '',
    phone: '',
    story: ''
  },
  formErrors: {
  }
}

const mutations = {
  handleSetForm(_, { key, value }) {
    state.contactForm[key] = value
  },
  setFormSuccess() {
    state.isLoading = false
    state.formSuccess = true
  },
  setFormFailure(_, { error }) {
    state.isLoading = false
    state.formError = error
  },
  setFieldsError(_, { isValid, errors }) {
    state.formErrors = errors
    state.isValid = isValid
  }
}

const actions = {
  async handleSendForm({ dispatch, commit }) {
    const { isValid, errors } = validateAccount(state.contactForm)

    if (isValid) {
      dispatch('sendFormRequest')
    }

    commit('setFieldsError', {
      errors,
      isValid
    })
  },
  async sendFormRequest({ commit }) {
    commit('preloader', 'isLoading')
    try {
      await clientApi('post', 'lids', { ...state.contactForm })
      await commit('setFormSuccess')
    } catch (error) {
      commit('setFormFailure', { error })
    }
  }
}

export default {
  state,
  mutations,
  actions
}
