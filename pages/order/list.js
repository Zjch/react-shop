// pages/order/list.js
import { myOrder, shopOrder } from '../../api/api.model';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    type: ''
  },

  handleTab(e){
    console.log(e);
    let { index } = e.currentTarget.dataset
    this.setData({
      tabIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: options.type == 'shop' ? '我的店铺订单' : '我的订单'
    })
    this.setData({
      type: options.type,
    })

    this.init(options.type)
  },

  async init(type){
    let data = null
    if(type == 'shop'){
      data = await shopOrder({
        isHistory: this.data.tabIndex + ''
      })
    }else{
      data = await myOrder({})
    }

    console.log(data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})