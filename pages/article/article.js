// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    atc: {}
  },
  // 获取app实例
  // APP: getApp(),
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticleDetails(this, this.options.atcid)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow') 
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide') 
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },
  // 获取文章详情
  getArticleDetails: (_this, atcId) => {
    wx.request({
      url: getApp().globalData.baseURL + '/getArticleDetails',
      data: {
        atc_id: atcId
      },
      success: (res) => {
        if (res.data) {
          console.log(res.data)
          _this.setData({
            atc: res.data[0][0]
          })
        }
      }
    })
  }
})