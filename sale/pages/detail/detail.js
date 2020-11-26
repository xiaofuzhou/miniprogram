// pages/detail/detail.js
var app = getApp()
Page({
  data: {
    indicatorDots: true, //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,      //自动切换时间间隔,3s
    duration: 1000,      //滑动动画时长1s
    goodsIndex: -1, //存放首页传递过来的商品id在商品详情页商品数组中的对应下标
    goods: [{
      id: 2001,       //商品编号
      name: '日本ALOVIVI卸妆皇后四效合一洁肤液',//商品名
      price: 109,     //商品价格
      isHave: false,  //收藏状态
      total: 10,     //可购买数量
      isBuy: false,   //已加购物车状态
      imgUrls: ['http://mz.djmall.xmisp.cn/files/product/20161201/148057509687_middle.jpg', 'http://mz.djmall.xmisp.cn/files/product/20161201/148057512427_large.jpg', 'http://mz.djmall.xmisp.cn/files/product/20161201/148057511190_large.jpg',
        'http://mz.djmall.xmisp.cn/files/product/20161201/148057513927_large.jpg'
      ],              //商品轮播图
      coments: ['商品还可以！', '刚刚收到，还没有试用', '蛮好的'],//商品评价
      detailImg: ['http://mz.djmall.xmisp.cn/files/editor/20161201/148057521245.jpg', 'http://mz.djmall.xmisp.cn/files/editor/20161201/148057521288.jpg'],//商品详情图片
    }, {
      id: 2002,
      name: 'LANCOME兰蔻小黑瓶精华肌底液',
      price: 500,
      isHave: false,
      isBuy: false,
      total: 90,
      imgUrls: ['http://mz.djmall.xmisp.cn/files/product/20161201/148057922659_large.jpg', 'http://mz.djmall.xmisp.cn/files/product/20161201/148057923813_large.jpg', 'http://mz.djmall.xmisp.cn/files/product/20161201/148057924965_large.jpg',
        'http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_large.jpg'
      ],
      coments: ['用的蛮舒服！', '一般般', '快递不太给力！', '刚刚收到，还没有试用'],
      detailImg: ['http://mz.djmall.xmisp.cn/files/editor/20161201/148057928870.jpg', 'http://mz.djmall.xmisp.cn/files/editor/20161201/148057928922.jpg']
    }],
    id: '',  //保存首页传递的商品编号
    icon: '',//保存首页传递的商品图片地址
    name: '' //保存首页传递的商品名称
  },
  onLoad: function (options) {
    for (var i = 0; i < this.data.goods.length; i++) {
      if (parseInt(options.id) == this.data.goods[i].id) {
        this.data.goodsIndex = i;
        break;
      }
    }
    this.setData({
      id: options.id,
      icon: options.icon,
      name: options.name,
      goodsIndex: this.data.goodsIndex
    })
  },
  /*预览图片*/
  previewImage: function (e) {
    var index = this.data.goodsIndex
    var current = e.target.dataset.src
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.goods[index].imgUrls // 需要预览的图片http链接列表  
    })
  },
  /*跳到首页*/
  toIndex: function (e) {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  /*跳到购物车*/
  toCart: function (e) {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  /*收藏*/
  addLike: function () {
    var index = this.data.goodsIndex
    var isHave = this.data.goods[index].isHave //获取原收藏状态
    this.data.goods[index].isHave = !isHave
    this.setData({
      goods: this.data.goods
    });
  },
  /*加入购物车*/
  btnAdd: function (e) {
    var index = this.data.goodsIndex
    var isBuy = this.data.goods[index].isBuy //获取原加入购物车状态
    if (isBuy) {
      wx.showToast({
        title: '已加入购物车',
        icon: 'success',
        duration: 2000
      });
      console.log(app.globalData.carts)
    } else {
      this.data.goods[index].isBuy = !isBuy
      app.globalData.carts.push({
        yiId: this.data.goods[index].id,       //已购商品编号
        yiName: this.data.goods[index].name,   //已购商品名称
        yiPrice: this.data.goods[index].price, //已购商品价格
        yiTotal: this.data.goods[index].total, //已购商品可卖数量
        yiBuy:0,                               //已购买商品数量
        yiIcon: this.data.icon,                //已购商品的图标
        yiSelected:false                       //已购商品选中状态
      });
    }
    this.setData({
      goods: this.data.goods
    })
  },
  /*购买商品*/
  btnBuy: function (e) {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})