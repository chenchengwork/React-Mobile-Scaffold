/**
 * Created by chencheng on 17-9-14.
 */
import React from "react";
import EnumRouter from 'constants/EnumRouter';

/**
 * 枚举主页面布局的菜单
 */
export const EnumMainLayoutMenus = {
    style: {},
    // 配置说明: https://mobile.ant.design/components/tab-bar-cn/#TabBar
    tabBarProps:{
        unselectedTintColor: "#949494",
        tintColor: "#33A3F4",
        barTintColor: "white",
        tabBarPosition: "bottom",
        hidden: false,
        prerenderingSiblingsNumber: 0
    },

    // props配置说明: https://mobile.ant.design/components/tab-bar-cn/#TabBar.Item
    items: [
        {
            uri: EnumRouter.index,
            props:{
                title: "Life",
                icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
                selectedIcon: "https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg",
                badge: "",
                dot: false,
            },
        },
        {
            uri: EnumRouter.index1,
            props:{
                title: "Koubei",
                icon: "https://zos.alipayobjects.com/rmsportal/BTSsmHkPsQSPTktcXyTV.svg",
                selectedIcon: "https://zos.alipayobjects.com/rmsportal/ekLecvKBnRazVLXbWOnE.svg",
                badge: "new",
                dot: false,
            },
        },
        // {
        //     uri: EnumRouter.index2,
        //     props:{
        //         title: "Friend",
        //         icon: "https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg",
        //         selectedIcon: "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg",
        //         badge: "",
        //         dot: false,
        //     },
        // },
        // {
        //     uri: EnumRouter.index3,
        //     props:{
        //         title: "My",
        //         icon: "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
        //         selectedIcon: "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
        //         badge: "",
        //         dot: false,
        //     },
        // },
    ],
};


