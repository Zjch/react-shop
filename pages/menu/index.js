// pages/menu/index.js
import { myMenu } from '../../api/api.model';
import pathModel from '../../model/path.model';
import { navHeight, jumpTo } from '../../utils/utils';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: navHeight(), // 导航栏高度
    isAdmin: false, // 是否是商户 true 是 ， false 不是
    classifyList: [],
    classifyProduct: {
      
    },
    isShow: false,
    checkItem: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('page onload');
    this.init()
  },

  init(){
    myMenu().then(res => {
      // console.log(res);
      let classifyList = res.data.map(item => {
        return {
          ...item,
          text: item.menuName
        }
      })
      this.setData({
        classifyList,
      })
    })
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

  handelCart(){
    this.selectComponent('#cartPanels').open()
  },

  handleItem(e){
    const { item } = e.detail
    this.setData({
      checkItem: item,
    })
  },

  submit(){
    jumpTo(pathModel.checkoutPage)
  },

  addClassify(e){
    this.init()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})