import styles from './index.scss';
import PropTypes from 'prop-types';
import T from 'utils/T';
import CustomIcon from 'templates/ToolComponents/CustomIcon';

import { PureComponent } from 'react';

import { TabBar, Tabs } from 'antd-mobile';
import { EnumIconTypes } from 'constants/EnumDefaultMenus';


import {
    UrlToExtraInfoMap,
    EnumMenus
} from './menuUtil';


/**
 * 应用icon
 * @param appType
 * @param iconType
 * @return {*}
 * @constructor
 */
const AppIcon = ({appType, iconType, spin=false, style= {}}) => {
    if ( appType == EnumIconTypes.antd) {
        return <Icon type={iconType} spin={spin} style={style}/>
    }else if(appType == EnumIconTypes.custom) {
        return <CustomIcon type={iconType} spin={spin} style={style} />
    }

    return null;
};


/**
 * 头部组件
 * @param {String} className
 * @param {String} title
 * @param {Object} style
 * @param {Function} leftRender
 * @param {Function} rightRender
 * @returns {XML}
 * @constructor
 */
export const MainHeader = ({ className = '', title = '', style = {}, leftRender = null, rightRender = null }) => {
    let customClassName = 'app-header';
    if (className) {
        customClassName = className + ' ' + customClassName;
    }
    let defaultStyle = {
        marginBottom: 10
    };

    const headerContent = [
        <div key="1" className="flex-box">
            <div className="vertical-bar" />
            <div className="title">{title}</div>
            {leftRender}
        </div>,
        <div key="2" className="flex-box">
            {rightRender}
        </div>
    ];

    return (
        <Header className={customClassName} style={Object.assign(defaultStyle, style)}>
            {headerContent}
        </Header>
    );
};

MainHeader.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    leftRender: PropTypes.node,
    rightRender: PropTypes.node,
};


/**
 * 内容组件
 * @param {String} className
 * @param {Object} style
 * @param {Array} children
 * @returns {XML}
 * @constructor
 */
export const MainContent = ({ className = '', style = {}, children = null }) => {
    let defaultStyle = {
        margin: '0px 10px 0px 10px',
    };

    return (
        <Content className={className} style={Object.assign(defaultStyle, style)}>

            {children}
        </Content>
    );
};

MainContent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

@T.decorator.contextTypes('router')
export default class MainLayout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }

    renderContent(pageText, menus) {
        const currentUrl = this.context.router.route.match.path;
        const urlToTabIndexMap = {};
        const tabs = menus.map((item, index) => {
            const url = Array.isArray(item.url) ? item.url[0] : item.url;
            urlToTabIndexMap[url] = index;
            return {
                title: item.label,
                url
            };
        });
        return (
            <div>
                <div style={{width: "100%", height: 50, backgroundColor: "red"}}></div>
                <Tabs
                    tabs={tabs}
                    initalPage={2}
                    onChange={(tab, idx) => {
                        this.context.router.history.push(tab.url);
                    }}
                    swipeable={true}
                    page={urlToTabIndexMap[currentUrl]}
                >
                    {this.props.children}
                </Tabs>
            </div>
        );
    }

    render() {
        const currentUrl = this.context.router.route.match.path;

        return (
            <div className={styles["main-layout"]}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {
                        EnumMenus.map((item, idx) => (
                            <TabBar.Item
                                title={item.label}
                                key={idx}
                                icon={item.icon}
                                selectedIcon={item.selectedIcon}
                                selected={item.url.indexOf(currentUrl) !== -1}
                                // badge={1}
                                onPress={() => this.context.router.history.push(item.url[0])}
                            >
                                {this.renderContent(this.props.children, item.children)}
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div>
        );
    }
}

