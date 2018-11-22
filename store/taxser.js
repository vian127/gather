import api from '~/service/api.js'

api.gen({
  getNewDeviceList: { method: 'POST', uri: '/api/device/usb/getNewDeviceList' }, // 新设备数据请求
  getUserList: { method: 'POST', uri: '/api/device/usb/getUserList' },//企业列表数据请求
  createUserByDevice: { method: 'POST', uri: '/api/device/usb/createUserByDevice' },//新设备列表中，根据设备创建企业数据
  attachUser: { method: 'POST', uri: '/api/device/usb/attachUser' }, //新设备列表中分配企业用户
  getUserDetail: { method: 'POST', uri: '/api/device/usb/getUserDetail' },//企业列表获取详情
  editUser: { method: 'POST', uri: '/api/device/usb/editUser' },//编辑企业列表
  deleteUser: { method: 'POST', uri: '/api/device/usb/deleteUser' }, //删除企业列表数据
  deleteDevice: { method: 'POST', uri: '/api/device/usb/deleteDevice' }, //企业列表详情中删除
  createUser: { method: 'POST', uri: '/api/device/usb/createUser' } //添加企业列表
})

const state = {
  enterlist: [],
  devicelist: [],
  devicesByUser: []
}
const getters = {
  getEnterList: state => state.enterlist,
  getDevicelist: state => state.devicelist,
  getDevsByUser: state => state.devicesByUser
}
const mutations = {
  ENTER_LIST(state, listData) {
    state.enterlist = listData
  },
  DEVICE_LIST(state, listData) {
    state.devicelist = listData
  },
  DEVS_USER(state, listData) {
    state.devicesByUser = listData
  },
}

const actions = {
  // 新设备数据请求
  async getNewDeviceListAsync({ commit }, data) {
    
    let listData = await api.getNewDeviceList(data)
  
      listData = [
        {
          "_id": "5a2f91152b7c30ce78be6a48",
          "mac": "4",
          "province": "北京市",
          "innerIp": "123.123.123.123",
          "outerIp": "2",
          "isActive": true,
          "updatedUsbShell": "2017-12-12T08:29:20.345Z",
          "updatedAt": "2017-12-12T08:29:20.345Z",
          "createdAt": "2017-12-12T08:29:20.345Z"
        },
        {
          "_id": "5a2f90ed2b7c30ce78be6a45",
          "mac": "1",
          "province": "山东省",
          "innerIp": "1",
          "outerIp": "2",
          "isActive": false,
          "updatedUsbShell": "2017-12-12T08:29:20.344Z",
          "updatedAt": "2017-12-12T08:29:20.344Z",
          "createdAt": "2017-12-12T08:29:20.344Z"
        },
      ]
    commit('DEVICE_LIST', listData)
  },
  // 新设备-创建
  async createDeviceAsync({ commit }, data) {
    await api.createUserByDevice(data)
  },
  // 新设备-选择
  async attachUserAsync({ commit }, data) {
    await api.attachUser(data)
  },
  // 企业列表数据请求
  async getUserListAsync({ commit }, data) {
    let listData = await api.getUserList(data)
    commit('ENTER_LIST', listData)
  },
  // 获取购买方详情
  async getUserDetailAsync({ commit }, data) {
    let listData = await api.getUserDetail(data)
    listData = [
      {
        "_id": "5a2e5d1733670e8a806131f6",
        "mac": "98:01:a7:92:94:eb",
        "point": "{\"x\":\"121.48789949\",\"y\":\"31.24916171\"}",
        "province": "上海市",
        "city": "上海市",
        "keys": "财轻松代账公司",
        "outerIp": "101.231.137.70",
        "innerIp": "192.168.1.250",
        "num": "1",
        "usbUser": "5a2f5529a50bc57cd730801c",
        "isActive": false,
        "updatedUsbShell": "2017-12-11T15:06:06.661Z",
        "updatedAt": "2017-12-12T13:46:40.443Z",
        "createdAt": "2017-12-12T13:46:40.443Z"
      },
      {
        "_id": "5a2f52a533670e8a8011ce32",
        "mac": "56:a6:b9:ec:5f:be",
        "point": "{\"x\":\"121.48789949\",\"y\":\"31.24916171\"}",
        "province": "上海市",
        "city": "上海市",
        "keys": "",
        "outerIp": "101.231.137.70",
        "innerIp": "192.168.1.17",
        "usbUser": "5a2f5529a50bc57cd730801c",
        "isActive": true,
        "updatedUsbShell": "2017-12-12T13:41:28.181Z",
        "updatedAt": "2017-12-12T13:46:40.444Z",
        "createdAt": "2017-12-12T13:46:40.444Z"
      }
    ]
    commit('DEVS_USER', listData)
  },
  // 编辑企业列表
  async editUserAsync({ commit }, data) {
    const listData = await api.editUser(data)
    commit('ENTER_LIST', listData)
  },
  // 删除企业列表数据
  async deleteUserAsync({ commit }, data) {
    const listData = await api.deleteUser(data)
    commit('ENTER_LIST', listData)
  },
  //企业列表详情中删除
  async deleteDeviceAsync({ commit }, data) {
    let listData = await api.deleteDevice(data)
    commit('DEVICE_LIST', listData)
  },
  //添加企业列表
  async createUserAsync({ commit }, data) {
    const listData = await api.createUser(data)
    commit('ENTER_LIST', listData)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
