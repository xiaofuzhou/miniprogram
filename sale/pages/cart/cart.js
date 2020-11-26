// pages/cart/cart.js
var app = getApp()
Page({
  data: {
    goodsTotal: 0,//购物车内商品种类数
    buyGoods: [],//购物车内商品信息
    sumPrice: 0,//购物车商品总价
    selectAllStatus: false,//是否全选购物车商品
  },

  /*生命周期函数--监听页面显示 */
  onShow: function () {
    var len = app.globalData.carts.length
    this.setData({
      goodsTotal: len,
      buyGoods: app.globalData.carts
    })
  },
  /* 计算购物车商品总价 */
  getSumPrice: function () {
    let buyGoods = this.data.buyGoods;                  // 获取购物车列表
    let sum = 0;
    for (let i = 0; i < buyGoods.length; i++) {         // 循环列表得到每个数据
      if (buyGoods[i].yiSelected) {                   // 判断选中才会计算价格
        sum += buyGoods[i].yiBuy * buyGoods[i].yiPrice;     // 所有价格加起来
        console.log(sum, buyGoods[i].yiBuy, buyGoods[i].yiPrice)
      }
    }

    this.setData({                                // 最后赋值到data中渲染到页面
      buyGoods: buyGoods,
      sumPrice: sum.toFixed(2)
    });
  },
  /* 选中购物车中商品 */
  selectGoods: function (e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let buyGoods = this.data.buyGoods;                    // 获取购物车列表
    const selected = buyGoods[index].yiSelected;         // 获取当前商品的选中状态
    buyGoods[index].yiSelected = !selected;              // 改变状态
    this.setData({
      buyGoods: buyGoods
    });
    this.getSumPrice();                           // 重新获取总价
  },
  /* 增加购买数量*/
  addCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let buyGoods = this.data.buyGoods;
    let yiBuy = buyGoods[index].yiBuy;
    if (yiBuy < buyGoods[index].yiTotal) {
      yiBuy = yiBuy + 1;
    } else {
      wx.showToast({
        title: '已卖光！',
      })
      return false;
    }
    buyGoods[index].yiBuy = yiBuy;
    this.setData({
      buyGoods: buyGoods
    });
    this.getSumPrice();
  },
  /* 减少购买数量*/
  decCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let buyGoods = this.data.buyGoods;
    let yiBuy = buyGoods[index].yiBuy;
    if (yiBuy <= 1) {
      return false;
    }
    yiBuy = yiBuy - 1;
    buyGoods[index].yiBuy = yiBuy;
    this.setData({
      buyGoods: buyGoods
    });
    this.getSumPrice();
  },
  /* 全选*/
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let buyGoods = this.data.buyGoods;

    for (let i = 0; i < buyGoods.length; i++) {
      buyGoods[i].yiSelected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      buyGoods: buyGoods
    });
    this.getSumPrice();                               // 重新获取总价
  },
  /* 删除购物车商品 */
  deleteGoods: function (e) {
    const index = e.currentTarget.dataset.index;
    let buyGoods = this.data.buyGoods;
    buyGoods.splice(index, 1);              // 删除购物车列表里这个商品
    this.setData({
      buyGoods: buyGoods
    });
    if (!buyGoods.length) {                  // 如果购物车为空
      this.setData({
        goodsTotal: 0              // 修改标识为0，显示购物车为空页面
      });
    } else {                              // 如果不为空
      this.getSumPrice();           // 重新计算总价格
    }
  },
  toBuy:function(e){
    var yiGoods =[];   
    let orderId = "";                   //订单号
    for (var i = 0; i < 6; i++)         //6位随机数，用以加在时间戳后面
    {
      orderId += Math.floor(Math.random() * 10);
    }
    orderId = new Date().getTime() + orderId;  //时间戳+随机数生成订单号
   
    let buyGoods = this.data.buyGoods;         //获取购物车列表
    let yiSum = 0;
    for (let i = 0; i < buyGoods.length; i++) {//循环列表得到每个数据
      if (buyGoods[i].yiSelected) {     // 判断选中才会加入订单
        yiGoods.push({
          yiId: buyGoods[i].yiId,       //已购商品编号
          yiName: buyGoods[i].yiName,   //已购商品名称
          yiPrice: buyGoods[i].yiPrice, //已购商品价格
          yiBuy: buyGoods[i].yiBuy,     //已购商品数量
          yiIcon: buyGoods[i].yiIcon,   //已购商品的图标        
        });
        yiSum = yiSum + buyGoods[i].yiBuy * buyGoods[i].yiPrice //已购商品价值小计
      }
    }
    app.globalData.orders.push({ orderId: orderId, yiGoods: yiGoods,yiSum:yiSum})
    console.log(app.globalData.orders)
    wx.switchTab({
      url: '/pages/me/me'    //转到个人中心页面
    })
  
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})