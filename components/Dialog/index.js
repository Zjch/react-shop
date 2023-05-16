// components/Dialog/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
  },

  options: {
    multipleSlots: true,
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open(){
      this.setData({
        isShow: true,
      })
    },
    close(){
      this.setData({
        isShow: false
      })
    }
  }
})
