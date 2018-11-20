import EnumEnv from 'constants/EnumEnv';
const to = (route) =>  EnumEnv.rootPath + route;

/**
 * 路由枚举
 */
const EnumRouter = {
    rootRoute: to(''),		    // 根路由

    login: to('login'),		    // 登录
    index: to('index'),		        // 首页
};

export default EnumRouter;
