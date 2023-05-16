// pages/menu/index.js
import { myMenu, getProduct, confirmOrder } from '../../api/api.model';
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
    productList: [],
    cartList: [],
    totalPrice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('page onload');
    wx.showLoading({
      title: '加载中',
    })
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
      this.getProduct(classifyList[0].id)
      this.setData({
        classifyList,
        checkItem: classifyList[0]
      })
    })
  },

  // 获取商品
  getProduct(menuId){
    getProduct({
      menuId
    }).then(res => {
      let productList = res.data.map(item => {
        return {
          ...item,
          price: Number((item.price/1000).toFixed(2)) 
        }
      })
      this.setData({
        productList
      })
      wx.hideLoading()
    }).catch(err => {
      console.log(err);
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
    wx.showLoading({
      title: '加载中',
    })
    this.getProduct(item.id)
    this.setData({
      checkItem: item,
    })
  },

  // 下单
  submit(){
    let cartList = this.data.cartList
    let items = cartList.map(item => {
      return {
        goodsNumber: 1,
        itemId: item.id,
      }
    })
    let params = {
      items,
      
      orderMethod: '2',
      remark: '1',
      tableNumber: '1',
    }
    confirmOrder(params).then(res => {
      console.log(res);
    })
    // jumpTo(pathModel.checkoutPage)
  },

  addCart(e){
    const { item } = e.detail
    // console.log(item);
    const cartList = this.data.cartList
    const index = cartList.findIndex(e => e.id == item.id)
    if(index != -1){
      wx.showToast({
        title: '购物车已有此商品',
        icon: 'none'
      })
      return
    }
    cartList.push(item)
    this.setData({
      cartList
    }, () => {
      this.calculate()
    })
    wx.showToast({
      title: '添加成功',
      icon: 'none'
    })
  },

  // 计算购物车
  calculate(){
    const cartList = this.data.cartList
    const totalPrice = cartList.reduce((acc, item) => item.price + acc, 0)
    this.setData({
      totalPrice
    })
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