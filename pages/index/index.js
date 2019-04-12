//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sliderList: [],
    categories:[],
    motto: 'Hello My Lovely World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: ['/assets/images/banner-01.png', '/assets/images/banner-02.png', '/assets/images/banner-02.png']
  },
  onLoad: function() {
    //获取轮播图数据
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success: (res) => {
        console.log(res);
        // this.data.sliderList = res;
        this.setData({
          sliderList: res.data
        });
      }
    })

    
    //获取轮播图数据
    // wx.request({
    //   url: 'http://172.17.24.134:8080/user/findAll',
    //   success: (res) => {
    //     console.log(res);
    //     // this.data.sliderList = res;
        
    //   }
    // })

    //获取底部方块数据
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success: (res) => {
        console.log(res);
        // this.data.categories = res;
        this.setData({
          categories: res.data
        });
      }
    })

  }
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})