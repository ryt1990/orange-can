var app = getApp();
Page({
  data: {
    //用户个人信息
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    }
  },
  onTapJump: function (event) {
    wx.switchTab({
      url: "../movie/movie",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    var user = app.globalData.g_userInfo;
    this.setData({
      'userInfo.avatarUrl': user.avatarUrl,
      'userInfo.nickName': user.nickName,
    })
    console.log("page is onLoad")
  },
  onUnload: function (event) {
    console.log("page is unload")
  },
  onHide: function (event) {
    console.log("page is hide")
  },
})