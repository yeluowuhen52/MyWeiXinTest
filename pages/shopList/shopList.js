// pages/shopList/shopList.js
var fetch = require('../../fetch/fetch.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    _page: 0,
    _limit: 15,
    catId: 1,
    hasMore: true
  },
  //loaddata
  loadMore: function() {
    if (!this.data.hasMore) {
      return;
    }

    // const {
    //   _page,
    //   _limit,
    //   cate_id
    // } = this.data;

    // fetch('https://locally.uieee.com/categories/' + this.data.catId + '/shops', 'GET', { _page, _limit }).then(res => {
    //   //拼接达到数据的累加
    //   const shops = this.data.shopList.concat(res.data)
    //   //console.log(res.header) 在响应头中X-Total-Count代表数据总数
    //   //判断是否还有数据
    //   const hasMore = _page * _limit < (res.header['X-Total-Count'] - 0)
    //   this.setData({ shopList: shops, hasMore })
    //   //关闭下拉动画
    //   wx.stopPullDownRefresh()
    //   //关闭上拉提示
    //   // wx.hideLoading()
    //   //导航加载关闭
    //   // wx.hideNavigationBarLoading()
    // }).catch();

    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',
      data: {
        _limit: this.data._limit,
        _page: this.data._page
      },
      success: (res) => {
        // console.log(res)
        var newList = this.data.shopList.concat(res.data);
        var count = parseInt(res.header['X-Total-Count']);
        var flag = this.data._page * this.data._limit < count;
        this.setData({
          shopList: newList,
          hasMore: flag
        });
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //导航栏进度条
    // wx.showNavigationBarLoading();
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
    this.setData({
      shopList: [],
      _page: 0,
      _limit: 10
    })
    this.loadMore()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    ++this.data._page
    this.loadMore();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})