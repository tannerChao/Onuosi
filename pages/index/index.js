//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    swipers: [
      '../../assets/image/swiper_1.jpg', '../../assets/image/swiper_1.jpg', '../../assets/image/swiper_1.jpg'
    ],
    headerMenus: [
      {
        url:'../../assets/image/about_us.png',
        text:'关于我们',
        pageUrl:'/pages/about/about',
        goPageFunction:'menusNavigateTo'
      },
      {
        url:'../../assets/image/product_us.png',
        text:'产品中心',
        pageUrl:'/pages/product/product',
        goPageFunction:'menusSwitchTabTo'
      },
      {
        url:'../../assets/image/new_us.png',
        text:'新闻中心',
        pageUrl:'/pages/news/news',
        goPageFunction:'menusNavigateTo'
      },
      {
        url:'../../assets/image/message_us.png',
        text:'联系我们',
        pageUrl:'/pages/contact/contact',
        goPageFunction:'menusSwitchTabTo'
      }
    ],
    hotCakes:   [
      {
        url:'../../assets/image/fengshan-1.jpg',
        text:'关于我们',
        page:'pages/index/index'
      },
      {
        url:'../../assets/image/fengshan-2.jpg',
        text:'产品中心',
        page:'pages/index/index'
      },
      {
        url:'../../assets/image/swiper_1.jpg',
        text:'新闻中心',
        page:'pages/index/index'
      },
      {
        url:'../../assets/image/swiper_1.jpg',
        text:'联系我们',
        page:'pages/index/index'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  menusNavigateTo:(e)=>{
    wx.navigateTo({
      url: e.currentTarget.dataset.pageurl
    })
  },
  menusRedirectTo:(e)=>{
    wx.reLaunch({
      url: e.currentTarget.dataset.pageurl
    })
  },
  menusSwitchTabTo:(e)=>{
    wx.switchTab({
      url: e.currentTarget.dataset.pageurl
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  actionSheetTap: () => {
      console.log(111)
      wx.showActionSheet({
          itemList: ['item1', 'item2', 'item3', 'item4'],
          success(e) {
              console.log(e.tapIndex)
          }
      })
  }
})
