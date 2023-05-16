// pages/menu/components/card/index.js
import { uploadImg } from '../../../../api/api.model'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否是商户
    isAdmin: {
      type: Boolean,
      value: false,
    },

    // 商品
    list: {
      type: Array,
      value: []
    },

    // 选中的类
    classify: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: '',
    price: 0,
    stock: 0,
    icon: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addItem(){
      this.selectComponent('#dialog').open()
    },

    bindinput(e){
      const { key } = e.currentTarget.dataset
      const { value } = e.detail
      this.setData({
        [key]: value
      })
    },

    chooseImg(){
      const that = this
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        maxDuration: 30,
        sizeType: ['compressed'],
        camera: 'back',
        success(res) {
          uploadImg(res.tempFiles[0]).then(res => {
            that.setData({
              icon
            })
          })
        }
      })
    },

    confirm(){
      console.log(this.data);
    }
  }
})
