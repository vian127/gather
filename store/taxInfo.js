import api from '~/service/api.js'

api.gen({
  queryParam: { method: 'POST', uri: '/api/sw/sw/queryParam' }, // 财税中心、代理公司信息
  getAccountsObj: { method: 'POST', uri: '/api/sw/sw/list' }, // 账套及报税状态信息
  getTaxDetail: { method: 'POST', uri: '/api/sw/sw/taxDetail' }, // 账套及税务详情
  changeState: { method: 'POST', uri: '/api/sw/sw/changeState' } // 报税状态切换
})

const state = {
  ownerInfo: [],
  accountsObj: {}
}

const getters = {
  getOwnerInfo (state) {
    return state.ownerInfo
  },
  getAccountsObj (state) {
    return state.accountsObj
  }
}

const mutations = {
  TI_SET_OWNERINFO (state, object) {
    state.ownerInfo = object // 数组
  },
  TI_SET_ACCOUNTSOBJ (state, object) {
    state.accountsObj = object // 数组
  },
  TI_CLEAR_ACCOUNTSOBJ (state, object) {
    state.accountsObj = {}
  }
}

const actions = {
  async fetchOwnerInfoAsync ({ commit }) {
    commit('TI_SET_OWNERINFO', await api.queryParam())
  },
  async fetchAccountsObj ({ commit }, data) {
    commit('TI_SET_ACCOUNTSOBJ', await api.getAccountsObj(data))
  },
  clearAccountsObj ({ commit }) {
    commit('TI_CLEAR_ACCOUNTSOBJ')
  },
  async fetchTaxDetail ({ commit }, data) {
    return await api.getTaxDetail(data)
  },
  async changeStateAsync ({ commit }, data) {
    return await api.changeState(data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
