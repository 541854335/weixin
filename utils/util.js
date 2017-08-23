function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
function getMusicAll(today) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://123.207.114.77/parse/classes/music', //仅为示例，并非真实的接口地址
      data: {
        where: { "musicStyle": "小程序" }
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
function getMusicXZJ(type) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://123.207.114.77/parse/classes/music', //仅为示例，并非真实的接口地址
      data: {
        where: { "musicStyle":type}
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
function getMusicImg(type) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://123.207.114.77/parse/classes/music', //仅为示例，并非真实的接口地址
      data: {
        where: { "musicStyle": type },
        keys : "musicBigImg"
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
function getMusicType(today) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://123.207.114.77/parse/classes/musicStyle', //仅为示例，并非真实的接口地址
      data: {
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


module.exports = {
  getMusicXZJ: getMusicXZJ,
  getMusicAll: getMusicAll,
  getMusicType: getMusicType,
  getMusicImg: getMusicImg
}
