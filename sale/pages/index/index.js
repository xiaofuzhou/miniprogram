//index.js

Page({
  data: {
    navItems: [{
      id: 1,
      name: '美食',
      topicon: '../images/tuijianmeishi.png',
      sub: [{
          id: 1001,
          name: '糕点1',
          icon: '../images/meb.png'
        }, {
          id: 1002,
          name: '糕点2',
          icon: '../images/meb.png'
        },
        {
          id: 1003,
          name: '糕点3',
          icon: '../images/meb.png'
        }, {
          id: 1004,
          name: '糕点4',
          icon: '../images/meb.png'
        },
        {
          id: 1005,
          name: '糕点5',
          icon: '../images/meb.png'
        },
        {
          id: 1006,
          name: '糕点6',
          icon: '../images/meb.png'
        }, {
          id: 1007,
          name: '糕点7',
          icon: '../images/meb.png'
        },
        {
          id: 1008,
          name: '糕点8',
          icon: '../images/meb.png'
        },
        {
          id: 1009,
          name: '糕点9',
          icon: '../images/meb.png'
        }, {
          id: 1010,
          name: '糕点A',
          icon: '../images/meb.png'
        },
        {
          id: 1011,
          name: '糕点B',
          icon: '../images/meb.png'
        },
        {
          id: 1012,
          name: '饼干C',
          icon: '../images/meb.png'
        }, {
          id: 1013,
          name: '饼干D',
          icon: '../images/meb.png'
        },
        {
          id: 1014,
          name: '饼干E',
          icon: '../images/meb.png'
        },
        {
          id: 1015,
          name: '饼干F',
          icon: '../images/meb.png'
        }
      ]
    }, {
      id: 2,
      name: '美妆',
      topicon: '../images/tuijianmeizhuang.png',
      sub: [{
          id: 2001,
          name: '洁肤液',
        icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_12.jpg'
        }, {
          id: 2002,
          name: '肌底液',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_11.jpg'
        },
        {
          id: 2003,
          name: '化妆水',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_10.jpg'
        }, {
          id: 2004,
          name: '白日霜',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_9.jpg'
        },
        {
          id: 2005,
          name: '防晒乳',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_8.jpg'
        },
        {
          id: 2006,
          name: '洗颜专科',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_7.jpg'
        }, {
          id: 2007,
          name: '保湿面膜',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_13.jpg'
        },
        {
          id: 2008,
          name: '原蛋白面膜',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_5.jpg'
        },
        {
          id: 2009,
          name: '矿物面膜',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_4.jpg'
        }, {
          id: 2010,
          name: '面膜套装',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_3.jpg'
        },
        {
          id: 2011,
          name: '保湿黑炭面膜',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_2.jpg'
        },
        {
          id: 2012,
          name: '护肤面膜',
          icon: 'https://pb-assets.azoyacdn.com/media/wysiwyg/bigbrands/file_1.jpg'
        }
      ]
    }, {
      id: 3,
      name: '家电'
    }, {
      id: 4,
      name: '服饰'
    }, {
      id: 5,
      name: '家居'
    }, {
      id: 6,
      name: '运动'
    }, {
      id: 7,
      name: '图书'
    }, {
      id: 8,
      name: '数码'
    }, {
      id: 9,
      name: '洗护'
    }, {
      id: 10,
      name: '餐厨'
    }, {
      id: 11,
      name: '母婴'
    }, {
      id: 12,
      name: '文房'
    }, {
      id: 13,
      name: '饰品'
    }, {
      id: 14,
      name: '家具'
    }],
    scrollTop: 0, //用作跳转后右侧商品展示视图回到顶部
    navRightItems: [],
    curNav: 0, //对应样式变化
    curIndex: 0,
    findResult: '',

    screenArray: [], //左侧导航栏内容
    screenId: "", //后台查询需要的字段
    childrenArray: [], //右侧内容

  },

  // 左侧按钮
  leftClick: function(e) {

    var index = e.currentTarget.dataset.index;
    console.log(index, "左侧按钮")
    this.setData({
      curNav: index,
      curIndex: index,
      scrollTop: 0,
    })
  },
  ToSearchResult: function(e) {
    console.log(e.currentTarget.dataset)

  }
})