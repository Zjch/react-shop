// pages/menu/components/classify/index.js
import { addMyMenu } from '../../../../api/api.model'
import loginService from '../../../../services/login.service';
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

    // 数据
    list: {
      type: Array,
      value: []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    iptValue: '',
    value: '',

    tabIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    handleItem(e){
      const { item, index } = e.currentTarget.dataset
      this.setData({
        tabIndex: index
      })
      this.triggerEvent('handleItem', {
        item,
        index
      })
    },

    bindinput(e){
      const { value } = e.detail
      this.setData({
        value
      })
    },

    // 添加左侧菜单 
    addItem(){
      this.selectComponent('#dialog').open()
    },

    // 关闭
    closeDialog(){
      this.selectComponent('#dialog').close()
    },

    addMenu(){
      const name = this.data.value
      // console.log(name);
      addMyMenu({
        menuName: name,
        userId: loginService.user.id
      }).then(res => {
        this.closeDialog()
        this.setData({
          iptValue: '',
          value: '',
        })
        this.triggerEvent('add', {

        })
      })
    }
  }
})
