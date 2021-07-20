// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        //点击事件
        handleTapItem(e) {
            // 获取点击索引
            const { index } = e.currentTarget.dataset;
            // console.log(index);
            //触发 父组件事件（自定义）
            this.triggerEvent("tabsItemChange", { index });
        }
    }
})