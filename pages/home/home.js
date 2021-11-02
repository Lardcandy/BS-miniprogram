// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      username: '',
      password: ''
    },
    picList: [
      {
        picNo: 'pic1',
        picUrl: '../../public/banner/1.jpeg',
        articleNo: 'atc0001'
      },
      {
        picNo: 'pic2',
        picUrl: '../../public/banner/2.jpeg',
        articleNo: 'atc0002'
      },
      {
        picNo: 'pic3',
        picUrl: '../../public/banner/3.jpeg',
        articleNo: 'atc0003'
      },
      {
        picNo: 'pic4',
        picUrl: '../../public/banner/4.jpeg',
        articleNo: 'atc0004'
      }
    ],
    entryList: [
      {
        entryNo: "et01",
        entryName: "血压记录",
        picUrl: "../../public/entry/血压.png"
      },
      {
        entryNo: "et04",
        entryName: "入口2",
        picUrl: "../../public/entry/血压.png"
      },
      {
        entryNo: "et03",
        entryName: "入口3",
        picUrl: "../../public/entry/血压.png"
      },
      {
        entryNo: "et04",
        entryName: "入口4",
        picUrl: "../../public/entry/血压.png"
      },
    ],
    tabbarList: [
      {
        text: "首页",
        iconPath: "/public/tabbar/home.png",
        selectedIconPath: "/public/tabbar/home_selected.png",
        badge: "3"
      },
      {
        text: "探索",
        iconPath: "/public/tabbar/discovery.png",
        selectedIconPath: "/public/tabbar/discovery_selected.png",
        badge: "4"
      },
      {
        text: "写Blog",
        iconPath: "/public/tabbar/write.png",
        selectedIconPath: "/public/tabbar/write_selected.png",
        badge: "7"
      },
      {
        text: "我的",
        iconPath: "/public/tabbar/mine.png",
        selectedIconPath: "/public/tabbar/mine_selected.png",
        badge: "9"
      }
    ],
    articleList: []
  },
  // 跳转文章详情页面
  jumpAtcDetail:(e) => {
    console.log(e.currentTarget.dataset.atcid)
    wx.navigateTo({
      url: `../article/article?atcid=${e.currentTarget.dataset.atcid}`,
    })
  },

  // 登录按钮点击事件
  submit: () => {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllArticle(this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },
  // 获取首页文章列表
  getAllArticle: (_this) => {
    wx.request({
      url: getApp().globalData.baseURL + '/getAllArticle',
      success: function(res) {
        console.log(res)
        if(res.data) {
          _this.setData({
            articleList: res.data
          })
        }
      }
    })
  }
})