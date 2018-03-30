/**
 * Created by chencheng on 17-9-14.
 */
import EnumRouter from 'constants/EnumRouter';

/**
 * 枚举默认收起左侧菜单的URL
 * @type {[*]}
 */
export const EnumCollapsedLeftMenuUrls = [];

/**
 * icon 类型
 * @type {{antd: string, custom: string}}
 */
export const EnumIconTypes = {
    antd: 'antd',
    custom: 'custom'
};

/**
 * 菜单配置
 *
 * Usage:
 * 左侧菜单参数使用说明:
 * {
        label:"ETL应用",

        //antd中的icon type
        icon:"swap",

        //可以是字符串,也可以是数组,当作为数组时可以将数组内的所有url都让该栏目保持高亮
        url:"url1" || ["url1", "url2"],

        children:[]
    }
 * @type {[*]}
 */
export const EnumDefaultMenus = [
    {
        label: '运营数据',
        icon: <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
        />,
        selectedIcon: <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
        />,

        children: [
            {
                label: '运行',
                icon: {
                    appType: EnumIconTypes.antd,
                    iconType:'switcher'
                },
                url: EnumRouter.operateD_run,
                children: []
            },
            {
                label: '延误',
                icon: {
                    appType: EnumIconTypes.antd,
                    iconType:'switcher'
                },
                url: EnumRouter.operateD_delay,
                children: []
            },
        ]
    },
    {
        label: '指标分析',
        icon: <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
        />,
        selectedIcon: <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
        />,
        children: [
            {
                label: 'TEST',
                icon: {
                    appType: EnumIconTypes.antd,
                    iconType:'switcher'
                },
                url: EnumRouter.IndexAnalysis_test,
                children: []
            },
        ]
    },
];

