Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: [''],
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {
    this.getUrl();
    this.getUrl();
    this.getUrl();
  },

  getUrl(text = '123456') {
      const qrcode = require('../../utils/qrcode.js');
      const qr = qrcode(-1, 'H')
      qr.addData(text)
      qr.make()
      const url = qr.createDataURL(8,25)
      this.setData({ url: this.data.url.concat(url) })
      return url
  },
})
