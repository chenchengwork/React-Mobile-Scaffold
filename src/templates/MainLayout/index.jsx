import styles from './index.scss';
import PropTypes from 'prop-types';
import T from 'utils/T';
import CustomIcon from 'templates/ToolComponents/CustomIcon';

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { TabBar } from 'antd-mobile';
import { EnumIconTypes } from 'constants/EnumDefaultMenus';


import {
    UrlToExtraInfoMap,
    EnumFragmentMenu,
    getLeftMenu,
    getMenusByCategory,
    isRemoveLeftMenu
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
            fullScreen: false,
        };
    }

    renderContent(pageText) {
        return this.props.children;
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           fullScreen: !this.state.fullScreen,
                       });
                   }}
                >
                    Click to switch fullscreen
                </a>
            </div>
        );
    }

    render() {
        return (
            <div className={styles["main-layout"]} style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent(this.props.children)}
                    </TabBar.Item>

                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

