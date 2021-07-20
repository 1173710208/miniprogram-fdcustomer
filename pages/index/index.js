//Page Object
//0 引入 用来发送请求的方法  一定要把路径补全
import { request } from "../../request/index.js"
var app = getApp();

Page({
    data: {
        //demo
        //轮播图数组
        swiperList: [{
                image_src: "http://img61.ddimg.cn/upload_img/00740/1/750x315_wzh_20210308-1615432990.jpg",
                open_type: "navigate",
                goods_id: 129,
                navigator_url: "/pages/category/category?cate=0",
                cate:0
            },
            {
                image_src: "http://img63.ddimg.cn/upload_img/00865/202102/03_nb_750_315-1614159185.jpg",
                open_type: "navigate",
                goods_id: 130,
                navigator_url: "/pages/category/category?cate=1",
                cate:1
            },
            {
                image_src: "http://img60.ddimg.cn/upload_img/00822/2/750x315-1615548002.jpg",
                open_type: "navigate",
                goods_id: 1231,
                navigator_url: "/pages/category/category?cate=2",
                cate:2
            }
        ],
        //分类导航 数组
        catesList: [{
                name: "分类",
                image_src: "https://i.loli.net/2021/03/13/tID8S623UYyAEkR.png",
                open_type: "switchTab",
                navigator_url: "/pages/category/category",
                cate:1
            },
            {
                name: "图书",
                image_src: "https://i.loli.net/2021/03/13/SnZKVAmxholPa3T.png",
                open_type: "switchTab",
                navigator_url: "/pages/category/category",
                cate:2
            },
            {
                name: "饮食",
                image_src: "https://i.loli.net/2021/03/13/eWdtwDlyv5sLVKc.png",
                open_type: "switchTab",
                navigator_url: "/pages/category/category",
                cate:2
            },
            {
                name: "商品",
                image_src: "https://i.loli.net/2021/03/13/xGC4XwH7SZ52zKf.png",
                open_type: "switchTab",
                navigator_url: "/pages/category/category",
                cate:0
            }
        ],
        //楼层 数组
        floorList: [{
                floor_title: {
                    name: "热门推荐aa"
                },
                product_list: [{
                        name: "影响孩子一生的亲子英语书",
                        image_src: "http://img3m0.ddimg.cn/2/29/29176490-1_l_14.jpg",
                        image_width: "232",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_detail/goods_detail?goods_id=2"
                    },
                    {
                        name: "莎士比亚悲剧集",
                        image_src: "http://img3m2.ddimg.cn/54/21/24030522-1_l_2.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_detail/goods_detail?goods_id=1"
                    },
                    {
                        name: "活着",
                        image_src: "http://img3m0.ddimg.cn/7/27/25137790-1_l_4.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=爆款"
                    },
                    {
                        name: "兄弟",
                        image_src: "http://img3m4.ddimg.cn/12/35/25233924-1_l_6.jpg",
                        image_width: "232",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/category/category"
                    },
                    {
                        name: "史记",
                        image_src: "http://img3m1.ddimg.cn/33/15/29181471-1_l.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=热"
                    },
                    {
                        name: "红楼梦",
                        image_src: "http://img3m1.ddimg.cn/9/22/102771-1_l_5.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=爆款"
                    }

                ]
            },

            {
                floor_title: {
                    name: "新书上架aa"
                },
                product_list: [{
                        name: "影响孩子一生的亲子英语书",
                        image_src: "http://img3m0.ddimg.cn/2/29/29176490-1_l_14.jpg",
                        image_width: "232",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/category/category"
                    },
                    {
                        name: "莎士比亚悲剧集",
                        image_src: "http://img3m2.ddimg.cn/54/21/24030522-1_l_2.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=热"
                    },
                    {
                        name: "活着",
                        image_src: "http://img3m0.ddimg.cn/7/27/25137790-1_l_4.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=爆款"
                    },
                    {
                        name: "兄弟",
                        image_src: "http://img3m4.ddimg.cn/12/35/25233924-1_l_6.jpg",
                        image_width: "232",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/category/category"
                    },
                    {
                        name: "史记",
                        image_src: "http://img3m1.ddimg.cn/33/15/29181471-1_l.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=热"
                    },
                    {
                        name: "红楼梦",
                        image_src: "http://img3m1.ddimg.cn/9/22/102771-1_l_5.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=爆款"
                    }
                ]
            },
            {
                floor_title: {
                    name: "店长推荐"
                },
                product_list: [{
                        name: "影响孩子一生的亲子英语书",
                        image_src: "http://img3m0.ddimg.cn/2/29/29176490-1_l_14.jpg",
                        image_width: "232",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/category/category"
                    },
                    {
                        name: "莎士比亚悲剧集",
                        image_src: "http://img3m2.ddimg.cn/54/21/24030522-1_l_2.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=热"
                    },
                    {
                        name: "活着",
                        image_src: "http://img3m0.ddimg.cn/7/27/25137790-1_l_4.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=爆款"
                    },
                    {
                        name: "兄弟",
                        image_src: "http://img3m4.ddimg.cn/12/35/25233924-1_l_6.jpg",
                        image_width: "232",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/category/category"
                    },
                    {
                        name: "史记",
                        image_src: "http://img3m1.ddimg.cn/33/15/29181471-1_l.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=热"
                    },
                    {
                        name: "红楼梦",
                        image_src: "http://img3m1.ddimg.cn/9/22/102771-1_l_5.jpg",
                        image_width: "233",
                        open_type: "navigate",
                        price: "30.00",
                        navigator_url: "/pages/goods_list/index?query=爆款"
                    }
                ]
            }
        ],
        //条形码返回值
        scanCodeMsg: 0


        //实际项目
        //轮播图 数组
        // swiperList: [],
        //分类导航 数组
        // catesList: [],
        //楼层 数组
        // floorList: []
    },
    //options(Object)
    onLoad: function(options) {
        //demo



        //实际项目


        //发送异步请求 获取轮播图数据
        // wx.request({
        //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
        //     success: (result) => {
        //         // console.log(result);
        //         this.setData({
        //             swiperList: result.data.message,
        //         })
        //     }
        // });
        // this.getSwiperList();
        // this.getCatesList();
        // this.getFloorList();
    },

    //获取轮播图数据
    getSwiperList() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                console.log(result);
                this.setData({
                    swiperList: result.data.message,
                })
            })
    },

    //获取分类导航数据
    getCatesList() {
        request({ url: "/home/catitems" })
            .then(result => {
                console.log(result);
                this.setData({
                    catesList: result.data.message,
                })
            })
    },

    //获取楼层导航栏
    getFloorList() {
        request({ url: "/home/floordata" })
            .then(result => {
                console.log(result);
                this.setData({
                    floorList: result.data.message,
                })
            })

    },

    //获取扫描二维码或条形码
    scanCode: function() {
        var that = this;
        wx.scanCode({ //扫描API     
            scanType: ['barCode', 'qrCode'],
            success(res) { //扫描成功
                console.log(res) //输出回调信息
                that.setData({
                    scanCodeMsg: res.result
                });
                wx.showToast({
                    title: '扫描成功',
                    icon: 'success',
                    duration: 1000
                })
            },
            fail: (res) => {
                wx.showToast({
                    title: '扫描失败',
                    icon: 'warn',
                    duration: 1000
                })
            },

        })
    },

    search:function(e){

        //获取数据，添加到全局
      
        let val = e.currentTarget.dataset.value;
        console.log(val);
      
        app.searchWord = val;
      
      },


});