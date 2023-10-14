// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    list: [
      "http://jixiequan-miniapp.oss-cn-beijing.aliyuncs.com/attach/video/2023/09/05/c8321202309051016372305.mp4",
      "http://jixiequan-miniapp.oss-cn-beijing.aliyuncs.com/attach/video/2023/09/05/c8321202309051016372305.mp4",
      "http://jixiequan-miniapp.oss-cn-beijing.aliyuncs.com/attach/video/2023/09/05/c8321202309051016372305.mp4"
    ],
    timer: null //声明 timer
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  videoBut(e) {
    console.log(e)
  },
  ting(e) {
    console.log(e)
  },
  onInputEvent(e) {
    if (this.timer) {
      clearTimeout(this.timer)
    } // 每次进来的时候都将之前的清除掉，如果还没到 600毫秒(600毫秒自定义) 的时候就将之前的清除掉，这样就不会触发之前setTimeout绑定的事件， 如果超过 600豪秒，之前的事件就会被触发下次进来的时候同样清除之前的timer
    this.timer = setTimeout(() => { //箭头函数 注意this
      // 在这里进行我们的操作  这样就不会频繁的进行我们这里面的操作了
      var value = e.detail.value;
      var detail = {
        "value": value
      };
      var options = {};
    console.log(e.detail.value)
    }, 600)
  }
})