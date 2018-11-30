// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    pageIndex: 0,
    pageSize: 15,
    catId: 1
  },
  //loaddata
  loadMore: function() {
    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',
      data: {
        _limit: this.data.pageSize,
        page: ++this.data.pageIndex
      },
      success: (res) => {
        // console.log(res)
        var newList = this.data.shopList.concat(res.data);
        this.setData({
          shopList: newList
        });
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //设置标题
    wx.setNavigationBarTitle({
      title: options.title,
    });
    this.setData({
      catId: options.cat
    });
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.loadMore();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})