/**
 * Created by chencheng on 17-8-30.
 */
import {
    Route,
    Link
} from 'react-router-dom';

import lazyLoad from 'templates/LazyLoad';
import MainLayoutComponent from 'templates/MainLayout';
// import Exception from 'templates/ToolComponents/Exception';

/**
 * 默认布局方式
 * @param Component
 * @param rest
 * @param reducers
 * @returns {XML}
 * @constructor
 */
export const DefaultLayout = ({ component: Component, reducers, ...rest }) => {
    const LazyComponent = lazyLoad(Component, reducers);
    return (
        <Route
            {...rest} render={matchProps => (
                <LazyComponent {...matchProps} />
        )}
        />
    );
};

/**
 * 主要页面布局
 * @param Component
 * @param rest
 * @param reducers
 * @returns {XML}
 * @constructor
 */
export const MainLayout = ({ component: Component, reducers, ...rest }) => {
    const LazyComponent = lazyLoad(Component);

    return (
        <Route
            {...rest} render={matchProps => (
                <MainLayoutComponent>
                    <LazyComponent {...matchProps} reducers={reducers} />
                </MainLayoutComponent>
        )}
        />
    );
};

/**
 * 组装路由
 * @param {Array} routes
 * @returns {function()}
 * @constructor
 */
export const AssembleRoute = (...routes) => {
    let allRoutes = [];
    /* eslint no-return-assign:0 */
    routes.forEach(route => allRoutes = allRoutes.concat(route));

    return () => allRoutes.map((val) => {
        const { Layout } = val;
        delete val.Layout;
        return Layout ? <Layout {...val} key={val.path} /> : <MainLayout {...val} key={val.path} />;
    });
};

/**
 * 未匹配到的页面
 * @constructor
 */
export const NoMatch = () => "Not found!";
