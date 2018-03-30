/**
 * Created by chencheng on 2017/6/13.
 */

/**
 *
 * @type {{rootRoute: string, login: *, dHub_pluginManage: *, dHub_hostMonitor: *, dHub_pluginMonitor: *, dMart_dataSource: *, dVisual_bigScreen: *}}
 */
const EnumRouter = {
    rootRoute: '',		// 根路由

    login: 'login',		// 登陆

    /*
     |-----------------------------------------------
     | 运营数据-相关的路由
     |-----------------------------------------------
     */
    operateD_run: 'operationalData/run',


};


export default (() => {
    let routes = {};
    for (let [key, route] of Object.entries(EnumRouter)) {
        Object.defineProperty(routes, key, {
            get: () => {
                return window.ENV.rootPath + route;

                // TODO 后续改用这种方式

                // const path = window.ENV.rootPath + route;
                // return {
                //     path,
                //     // 实例化url参数
                //     getUrl: (params = {}) => {
                //         return T.lodash.isEmpty(params) ? path : path + '?' + T.queryString.stringify(params);
                //     }
                // };
            },
            configurable: false
        });
    }

    return routes;
})();
