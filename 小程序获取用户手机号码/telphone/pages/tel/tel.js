// pages/tel/tel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onLaunch: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code)
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  // 获取电话号码
  getPhoneNumber: function(e) {
    console.log(e)
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
    // if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
    //   wx.showModal({
    //     title: '提示',
    //     showCancel: false,
    //     content: '未授权',
    //     success: function(res) {}
    //   })
    // } else {
    //   wx.showModal({
    //     title: '提示',
    //     showCancel: false,
    //     content: '同意授权',
    //     success: function(res) {}
    //   })
    // }
  },


})