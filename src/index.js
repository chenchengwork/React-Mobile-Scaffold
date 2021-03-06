/**
 * @description 项目入口文件
 * @author vision <vision.shi@tianjishuju.com>
 * @license www.tianjishuju.com/license
 */
import "antd-mobile/es/toast/style/index.css";
import "antd-mobile/es/modal/style/index.css";


import { LocaleProvider } from 'antd-mobile';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, injectIntl } from 'react-intl';

// 加载 redux store
import store from './store';

// 加载路由
import Routes from './routes/index';

import { getLocale } from './locale';

const localeData = getLocale();
const IntlRoutes = injectIntl(Routes);

/**
 * 渲染程序
 */
const renderApp = () => render(
    <Provider store={store()}>
        <Routes />
        {/*<LocaleProvider locale={localeData.antIntlMsg}>*/}

            {/*<IntlProvider locale={localeData.locale} messages={localeData.messages}>*/}
                {/*<IntlRoutes />*/}
            {/*</IntlProvider>*/}

        {/*</LocaleProvider>*/}
    </Provider>,
	document.querySelector('#wrapper')
);

renderApp();

