App({
  onLaunch: function () {
    var storageData = wx.getStorageSync('postList');
    if (!storageData) {
      var dataObj = require("data/data.js")
      wx.clearStorageSync();
      wx.setStorageSync('postList', dataObj.postList);
    }
    this._getUserInfo();
    // wx.login();
  },
  _getUserInfo: function () {
    var userInfoStorage = wx.getStorageSync('user');
    if (userInfoStorage) {
      this.globalData.g_userInfo = userInfoStorage;
    }
  },
  globalData: {
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
    doubanBase: "https://douban.uieee.com",
    g_userInfo: null
  }
})