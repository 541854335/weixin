//index.js
//获取应用实例
var app = getApp()
var j = 0
const util = require('../../utils/util.js')
Page({
  
  data: {
    musictypelist:[]
  },
  toast: function (totype) {
    console.log(totype.currentTarget.dataset.totype)
    wx.navigateTo({
      url: '../music/detail?totype='+totype.currentTarget.dataset.totype
     
    })
  },
  onLoad: function (options) {
    var self=this
    getMusicAll().then(function(data){
      
      self.setData({
         viewBg_top1:data.data.results[27].musicBigImg,
         viewBg_top2: data.data.results[15].musicBigImg,
         viewBg1_1: data.data.results[2].musicBigImg,
         viewBg1_2: data.data.results[3].musicBigImg,
         viewBg1_3: data.data.results[4].musicBigImg,
         viewBg2_1: data.data.results[5].musicBigImg,
         viewBg2_2: data.data.results[6].musicBigImg,
         viewBg2_3: data.data.results[7].musicBigImg,
         viewBg3_1: data.data.results[8].musicBigImg,
         viewBg3_2: data.data.results[9].musicBigImg,
         viewBg3_3: data.data.results[10].musicBigImg,
      })    
    })
    util.getMusicType().then(function (datatype){ 
      console.log(datatype.data.results)
      self.setData({
        musictypelist: datatype.data.results,

      })
  
     
    })
  }
  
})
function getMusicAll(today){
  var promise = new Promise(function (resolve, reject) {
wx.request({
  url: 'http://123.207.114.77/parse/classes/music', //仅为示例，并非真实的接口地址
  data: {
    where:{"musicStyle":"小程序"}
  },
  header: {
    'content-type': 'application/json',
    'X-Parse-Application-Id':'myAppId',
    'X-Parse-REST-API-Key':'undefined'
  },
  success: resolve,
  fail: reject
})
  })
  return promise;
}
function getMusicXZJ(today) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://123.207.114.77/parse/classes/music', //仅为示例，并非真实的接口地址
      data: {
        where: { "musicStyle": "薛之谦" }
      },
      header: {
        'content-type': 'application/json',
        'X-Parse-Application-Id': 'myAppId',
        'X-Parse-REST-API-Key': 'undefined'
      },
      success: resolve,
      fail: reject
    })
  })
  return promise;
}

