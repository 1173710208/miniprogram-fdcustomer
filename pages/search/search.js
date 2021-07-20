/* 
1 输入框绑定 值改变事件 input事件
  1 获取到输入框的值
  2 合法性判断 
  3 检验通过 把输入框的值 发送到后台
  4 返回的数据打印到页面上
2 防抖 （防止抖动） 定时器  节流 
  0 防抖 一般 输入框中 防止重复输入 重复发送请求
  1 节流 一般是用在页面下拉和上拉 
  1 定义全局的定时器id
 */
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
    data: {
        goods: [],
        // 取消 按钮 是否显示
        isFocus: false,
        // 输入框的值
        inpValue: ""
    },
    TimeId: -1,
    // 输入框的值改变 就会触发的事件
    handleInput(e) {
        // 1 获取输入框的值
        const { value } = e.detail;
        // 2 检测合法性
        if (!value.trim()) {
            clearTimeout(this.TimeId);
            this.setData({
                    goods: [],
                    isFocus: false
                })
                // 值不合法
            return;
        }
        // 3 准备发送请求获取数据
        this.setData({
            isFocus: true
        })
        clearTimeout(this.TimeId);
        this.TimeId = setTimeout(() => {
            this.qsearch(value);
        }, 1000);
        // console.log(value);
    },
    // 发送请求获取搜索建议 数据
    qsearch(value) {
        console.log(value);
        const url = "http://localhost/PHP/search.php?value="+value;
        console.log(url);
        wx.request({
          url: url,
          success: res=> {
            console.log(res.data)
            this.setData({
              goods: res.data
            })
          }
    
        })
        // const resa = await request({ url: url});
        // console.log(resa);
        // this.setData({
        //     goods: res.data
        // })
    },
    // 点击 取消按钮
    handleCancel() {
        clearTimeout(this.TimeId);
        this.setData({
            inpValue: "",
            isFocus: false,
            goods: []
        })
    }
})