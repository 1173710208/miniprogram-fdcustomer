// pages/goods_list/goods_list.js

import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';


Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                value: "综合",
                isActive: true
            },
            {
                id: 1,
                value: "销量",
                isActive: false
            },
            {
                id: 2,
                value: "价格",
                isActive: false
            }
        ],
        goodsList: [],
        goodsListNum: [],
        goodsListPrice: []
    },


    //接口要的参数
    QueryParams: {
        query: "",
        cid: "",
        pagenum: 1,
        pagesize: 10
    },



    //总页数
    totalPage: 1,



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log(options);
        this.QueryParams.cid = options.cid || "";
        // console.log(this.QueryParams.cid);
        this.QueryParams.query = options.query || "";
        this.getGoodsList();


    },


    //获取商品列表数据

    getGoodsList() {
        var that = this;
        wx.request({
            url: 'http://localhost/PHP/category1.php',//此处填写你后台请求地址/Users/imac/Desktop·
            method: 'GET', 
            data: {
                    "cid":that.QueryParams.cid   
                }, 
            success: function (res) {
                // console.log(this.QueryParams.cid);
                console.log(that.QueryParams.cid);
                // console.log((res.data));//在控制台输出在远程后台请求到的数据
                that.setData({
                    // res: res.data,
                    goodsList: res.data.goods
                })
                console.log((that.goodsList));//在控制台输出在远程后台请求到的数据
                },
            fail: function (res) {
            },
            complete: function (res) {
            }
        });
        wx.request({
            url: 'http://localhost/PHP/category2.php',//此处填写你后台请求地址/Users/imac/Desktop·
            method: 'GET', 
            data: {
                "cid":that.QueryParams.cid   
            }, 
            success: function (res) {

                console.log((res.data));//在控制台输出在远程后台请求到的数据
                that.setData({
                    // res: res.data,
                    goodsListNum: res.data.goods
                })
                console.log((that.goodsListNum));//在控制台输出在远程后台请求到的数据

                },
            fail: function (res) {
            },
            complete: function (res) {
            }
        });
        wx.request({
            url: 'http://localhost/PHP/category3.php',//此处填写你后台请求地址/Users/imac/Desktop·
            method: 'GET', 
            data: {
                "cid":that.QueryParams.cid   
            }, 
            success: function (res) {

                console.log((res.data));//在控制台输出在远程后台请求到的数据
                that.setData({
                    // res: res.data,
                    goodsListPrice: res.data.goods
                })
                console.log((that.goodsListPrice));//在控制台输出在远程后台请求到的数据

                },
            fail: function (res) {
            },
            complete: function (res) {
            }
        })
        
    },

    // 标题点击事件 从子组件传递过来

    handletabsItemChange(e) {
        // console.log(e);
        //1 获取被点击的标题索引
        const { index } = e.detail;
        //2 修改源数组
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        //3 赋值到data中
        this.setData({
            tabs
        })
    },

    /*用户上滑页面 滚动条触底 开始加载下一页数据
    1 找到滚动条触底事件
    2 判断还有没有下一页数据 
      1 获得总页码
        有总条数 通过总条数 计算总页数
      2 获得当前页码
      3 比较进行判断
    3 假如没有 弹出提示 没有更多了
    4 假如有 进行加载
      1 页码++
      2 重新发送请求
      3 数据请求回来 数组拼接 而不是替换！！！
    */

    //页面上拉触底事件的处理函数     

    onReachBottom: function() {
        // console.log("页面触底");
        //判断还有没有下一页
        if (this.QueryParams.pagenum >= this.totalPage) {
            //没有下一页数据
            // console.log("没有下一页");
            wx.showToast({
                title: '没有更多啦',
                icon: ''
            })

        } else {
            //还有下一页数据
            // console.log("还有下一页");
            this.QueryParams.pagenum++;
            this.getGoodsList();
        }
    },

    /*下拉刷新页面
    1 json配置
    2 重置 数据数组
    3 重置页码为1 
    4 重新发送请求
    5 数据请求回来 需要手动关闭 刷新效果
    */

    //下拉刷新事件
    onPullDownRefresh() {
        //重置数组
        this.setData({
                goodsList: []
            })
            //重置页码
        this.QueryParams.pagenum = 1;
        //重新发送请求
        this.getGoodsList();
        //关闭下拉刷新效果
        wx.stopPullDownRefresh();
    }
})