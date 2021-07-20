// pages/category/category.js

import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        //demo
        //左侧菜单数据
        leftMenuList: [],
        //右侧内容数据
        rightContent: [],
        //被点击的左侧菜单
        currentIndex: 0,
        //右侧滚动条距离顶部距离
        scrollTop: 0,


        ////实际使用
        // //左侧菜单数据
        // leftMenuList: [],
        // //右侧内容数据
        // rightContent: [],
        // //被点击的左侧菜单
        // currentIndex: 0,
        // //右侧滚动条距离顶部距离
        // scrollTop: 0
    },
    //接口的返回数据
    Cates: [{
            cat_id: 1,
            cat_name: "商品",
            cat_pid: 0,
            cat_level: 0,
            cat_deleted: false,
            cat_icon: "",
            children: [{
                    cat_id: 3,
                    cat_name: "文具用品",
                    cat_pid: 1,
                    cat_level: 1,
                    cat_deleted: false,
                    cat_icon: "",
                    children: [{
                        cat_id: 1,
                        cat_name: "笔类",
                        cat_pid: 3,
                        cat_level: 2,
                        cat_deleted: false,
                        cat_icon: "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                    },
                    {
                        cat_id: 2,
                        cat_name: "笔记本类",
                        cat_pid: 3,
                        cat_level: 2,
                        cat_deleted: false,
                        cat_icon: "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                    },]
                },
                {
                    cat_id: 3,
                    cat_name: "读者推荐",
                    cat_pid: 1,
                    cat_level: 1,
                    cat_deleted: false,
                    cat_icon: "",
                    children: [{
                        cat_id: 6,
                        cat_name: "文具",
                        cat_pid: 3,
                        cat_level: 2,
                        cat_deleted: false,
                        cat_icon: "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                    }]
                }
            ]
        },
        {
            cat_id: 2,
            cat_name: "书籍",
            cat_pid: 0,
            cat_level: 0,
            cat_deleted: false,
            cat_icon: "",
            children: [{
                cat_id: 3,
                cat_name: "书籍用品",
                cat_pid: 1,
                cat_level: 1,
                cat_deleted: false,
                cat_icon: "",
                children: [{
                    cat_id: 11,
                    cat_name: "工具类",
                    cat_pid: 3,
                    cat_level: 2,
                    cat_deleted: false,
                    cat_icon: "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                },
                {
                    cat_id: 12,
                    cat_name: "社会类",
                    cat_pid: 3,
                    cat_level: 2,
                    cat_deleted: false,
                    cat_icon: "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                }]
            }]
        },
        {
            cat_id: 3,
            cat_name: "饮食",
            cat_pid: 0,
            cat_level: 0,
            cat_deleted: false,
            cat_icon: "",
            children: [{
                    cat_id: 3,
                    cat_name: "饮料",
                    cat_pid: 1,
                    cat_level: 1,
                    cat_deleted: false,
                    cat_icon: "",
                    children: [{
                        cat_id: 5,
                        cat_name: "奶茶",
                        cat_pid: 3,
                        cat_level: 2,
                        cat_deleted: false,
                        cat_icon: "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                    }]
                },
                {
                    cat_id: 3,
                    cat_name: "休闲食品",
                    cat_pid: 1,
                    cat_level: 1,
                    cat_deleted: false,
                    cat_icon: "",
                    children: [{
                        cat_id: 5,
                        cat_name: "甜点",
                        cat_pid: 3,
                        cat_level: 2,
                        cat_deleted: false,
                        cat_icon: "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                    }]
                }
            ]
        }
    ],


    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function(option) {
        //demo
        //构造左侧大菜单数据
        let val = app.searchWord;
        const currentIndex=val;
        console.log(val);
        let leftMenuList = this.Cates.map(v => v.cat_name);
        //构造右侧商品数据
        let rightContent = this.Cates[0].children;
        this.setData({
            leftMenuList,
            rightContent,
            currentIndex
        })

        //实际使用
        /*
        0 web和小程序本地存储区别：
          web:localStorge.setItem("key","value")
              localStorge.getItem("key")
              不管存入的是什么类型的数据，都会调用toString(),转换成字符串
          小程序：wx.setStorageSync("key", "value")
                  wx.getStorageSync("key")
                  不存在类型转换，存什么类型就是什么类型
        1 先判断本地是否有旧数据
          {time:Data.now(),data:[...]}
        2 没有旧数据 直接发送请求
        3 有旧数据 同时 旧数据没过期 就使用本地存储的旧数据即可
        */
        // //获取本地存储中的数据(小程序中也是存在本地存储技术的)
        // const Cates = wx.getStorageSync('cates');
        // //判断是否本地有数据
        // if (!Cates) { //这里是将Cates强转为布尔型 初始值为0 0为假
        //     //不存在 发送请求 获得数据
        //     this.getCates();
        // } 
        // else { //有旧数据了
        //     //定义过期时间 10s 成功后改为5min
        //     if ((Date.now() - Cates.time) > (1000 * 300)) {
        //         this.getCates();
        //     }
        //     //可以使用旧数据
        //     else {
        //         // console.log("可以使用旧的数据");
        //         this.Cates = Cates.data;
        //         //构造左侧大菜单数据
        //         let leftMenuList = this.Cates.map(v => v.cat_name);
        //         //构造右侧商品数据
        //         let rightContent = this.Cates[0].children;
        //         this.setData({
        //             leftMenuList,
        //             rightContent
        //         })
        //     }
        // }
    },

    //获取分类数据
    // getCates() {
    //     request({ url: "/categories" })
    //         .then(result => {
    //             // console.log(result);
    //             this.Cates = result.data.message;
    //             //把接口的数据存储到本地中
    //             wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
    //             //构造左侧大菜单数据
    //             let leftMenuList = this.Cates.map(v => v.cat_name);
    //             //构造右侧商品数据
    //             let rightContent = this.Cates[0].children;
    //             this.setData({
    //                 leftMenuList,
    //                 rightContent
    //             })
    //         })
    // },

    //获取分类数据 async方法
    async getCates() {
        // 1 使用es7的async和await来发送请求
        // const result = await request({ url: "/categories" });
        const result = await request({ url: "http://localhost/PHP/category.php" });
        // this.Cates = result.data.message;
        console.log(result);
        this.Cates = result;
        //把接口的数据存储到本地中
        wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
        //构造左侧大菜单数据
        let leftMenuList = this.Cates.map(v => v.cat_name);
        //构造右侧商品数据
        let rightContent = this.Cates[0].children;
        this.setData({
            leftMenuList,
            rightContent
        })

    },

    // 左侧菜单点击事件
    handleItemTap(e) {
        // console.log(e);
        // 1. 获取被点击标题的索引数据
        // 2. 给data中的currentIndex赋值
        const { index } = e.currentTarget.dataset;

        let rightContent = this.Cates[index].children;
        this.setData({
            currentIndex: index,
            rightContent,
            //重新设置右侧内容的scroll-view标签距离顶部的距离
            scrollTop: 0
        })
    }

})