// pages/music/detail.js
const util = require('../../utils/util.js')
var objectId="";
var i=0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    musiclist:[],
    img1:"",
    img2: "",
    img3: "",
    img4: "",
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.totype)
    var self = this;
    util.getMusicXZJ(options.totype).then(function (data) {
      self.setData({
        musiclist: data.data.results,
        img1: data.data.results[0].musicImg,
        img2: data.data.results[1].musicImg,
        img3: data.data.results[2].musicImg,
        img4: data.data.results[3].musicImg,
        id: -1
      })
    })
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

  bindtapFunc: function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({
      id: id,
    })  
    console.log(e.currentTarget.dataset.text);
    if (objectId == "" || objectId != e.currentTarget.dataset.text.objectId){
    objectId = e.currentTarget.dataset.text.objectId;
    wx.playBackgroundAudio({
      dataUrl: e.currentTarget.dataset.text.url,
      title: e.currentTarget.dataset.text.title,
      coverImgUrl: e.currentTarget.dataset.text.musicImg
    })
    } else if (objectId == e.currentTarget.dataset.text.objectId){
      i++;
      if(i%2==1){
      wx.pauseBackgroundAudio(); 
      this.setData({
        id: -1,
      }) 
      }else{
        wx.playBackgroundAudio({
          dataUrl: e.currentTarget.dataset.text.url,
          title: e.currentTarget.dataset.text.title,
          coverImgUrl: e.currentTarget.dataset.text.musicImg
        })
      }
    }
  }

})
