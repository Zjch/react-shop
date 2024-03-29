// pages/my/index.js
import pathModel from '../../model/path.model';
import { navHeight, jumpTo } from '../../utils/utils'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: navHeight(),
    avatar: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  bindchooseavatar(e){
    console.log(e);
    this.setData({
      avatar: e.detail.avatarUrl
    })
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

  toOrder(e){
    const { type } = e.currentTarget.dataset
    jumpTo(`${pathModel.orderListPage}?type=${type}`)
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