import { CACHE_EXPIRES } from '~/config/cache.js'
import User from '~/model/user.js'
import logger from '~/service/logger.js'
import api from '~/service/api.js'
import cache from '~/service/cache.js'

api.gen({
  login: { method: 'POST', uri: '/api/user/login' },
  logout: { method: 'POST', uri: '/api/user/logout' },
  editSelf: { method: 'POST', uri: '/api/op/user/edit' }
})

const state = {
  user: {}
}

const getters = {
  getCurrentUser: state => state.user
}

const mutations = {
  ROOT_SET_USER (state, user) {
    state.user = new User(user)
  },
  ROOT_CLEAR_USER (state) {
    state.user = {}
  }
}

const actions = {
  async loadSessionAsync () {
    try {
      return await cache.getItem('lastVisted') || 0
    } catch (e) {
      logger.error(e)
      return 0
    }
  },
  async setSessionAsync (context, time = Date.now()) {
    try {
      await cache.setItem('lastVisted', time)
    } catch (e) {
      logger.error(e)
    }
  },
  async loadUserCacheAsync () {
    try {
      return await cache.getItem('user') || void 0
    } catch (e) {
      logger.error(e)
      return false
    }
  },
  async setUserCacheAsync (context, user) {
    try {
      await cache.setItem('user', user)
    } catch (e) {
      logger.error(e)
    }
  },
  async checkUserSessionAsync ({ state, dispatch, commit }) {
    try {
      if (Object.keys(state.user).length !== 0) return true

      let timestamp = await dispatch('loadSessionAsync')
      let now = Date.now()
      if (now - timestamp > CACHE_EXPIRES) return false

      let user = await dispatch('loadUserCacheAsync')
      return user !== void 0
        ? (commit('ROOT_SET_USER', user), true)
        : false
    } catch (e) {
      return false
    }
  },
  async editSelfAsync ({ dispatch, commit }, { info }) {
    let updatedUser = await api.editSelf(info)
    dispatch('setUserCacheAsync', updatedUser)
    dispatch('setSessionAsync')
    commit('ROOT_SET_USER', updatedUser)
  },
  async loginAsync ({ dispatch, commit }, { username, password }) {
    let user = await api.login({ username, password })
    dispatch('setUserCacheAsync', user)
    dispatch('setSessionAsync')
    commit('ROOT_SET_USER', user)
  },
  async logoutAsync ({ dispatch, commit }) {
    await api.logout()
    await dispatch('setUserCacheAsync', {})
    await dispatch('setSessionAsync', 0)
    commit('ROOT_CLEAR_USER')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
