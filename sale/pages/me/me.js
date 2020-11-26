// pages/me/me.js
var app = getApp()
Page({
  data: {
    thumb: '',
    nickname: '',
    orders: [],
  },
  onLoad:function() {
    var that = this;
    // 获取用户信息
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
  },
  /* 页面显示监听事件——导入订单数据 */
  onShow:function() {
    console.log(app.globalData.orders)     
    this.setData({       
      orders: app.globalData.orders
    })
   },
  /* 发起支付请求 */
  payOrders() {
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        wx.showModal({
          title: '支付提示',
          content: '<text>',
          showCancel: false
        })
      }
    })
  }
})