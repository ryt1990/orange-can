var app = getApp();
Page({
  data: {},
  onTap: function () {
    wx.login({
      success: function (response) {
        var userInfoStorage = wx.getStorageSync('user');
        if (!userInfoStorage) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              app.globalData.g_userInfo = res.userInfo
              wx.setStorageSync('user', res.userInfo)
            },
            fail: function (res) {
              console.log(res);
            }
          })
        }

        wx.navigateTo({
          url: "../../../welcome/welcome",
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
      }
    })
    // wx.login({
    //   success: function (res) {
    //     console.log('code:'+res.code);
    //     wx.request({
    //       url: "http://localhost:8080/wxopen/wxlogin.php",
    //       data: {
    //         code: res.code
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //       }
    //     })
    //   }
    // })
  }
})