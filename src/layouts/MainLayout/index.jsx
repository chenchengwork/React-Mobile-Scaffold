import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';

const isFunction = (data) => typeof data === 'function';
const shallowCopy = (a, b) => Object.assign({}, a, b);


/**
 * 获取icon
 * @param icon
 * @return {{uri: *}}
 */
const getIcon = (icon) => isFunction(icon) ? icon : {uri: icon};

const defaultStyle = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0
};

const defaultTabBarProps = {
    unselectedTintColor: "#949494",
    tintColor: "#33A3F4",
    barTintColor: "white",
    tabBarPosition: "bottom",
    hidden: false,
    prerenderingSiblingsNumber: 0
};

export default class MainLayout extends PureComponent {
    static propTypes = {
        items: PropTypes.array.isRequired,
        tabBarProps: PropTypes.object,
        style: PropTypes.object
    };

    static defaultProps = {
        style: defaultStyle,
        tabBarProps: defaultTabBarProps,
        items: [],
    };

    state = {
        selectedTab: Array.isArray(this.props.items) && this.props.items.length > 0 ? this.props.items[0].value : null,
        hidden: false,
    };

    render() {
        const { selectedTab } = this.state;
        let { style, tabBarProps, items } = this.props;

        style = style || {};
        tabBarProps = tabBarProps || {};

        return (
            <div style={shallowCopy(defaultStyle, style)}>
                <TabBar {...shallowCopy(defaultTabBarProps, tabBarProps)}>
                    {
                        (Array.isArray(items) ? items : []).map(({component: Vcomponent, ...item}) => (
                            <TabBar.Item
                                key={item.value}
                                title={item.title}
                                icon={getIcon(item.icon)}
                                selectedIcon={getIcon(item.selectedIcon)}
                                selected={selectedTab === item.value}
                                onPress={() => this.setState({selectedTab: item.value})}
                            >
                                {selectedTab === item.value ? <Vcomponent />: null }
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div>
        );
    }
}


//<TabBarItem key={item.value} selectedTab={selectedTab} {...item}/>

const TabBarItem = ({value, title, icon, selectedIcon, content, selectedTab}) => {
    return (
        <TabBar.Item
            title={title}
            icon={getIcon(icon)}
            selectedIcon={getIcon(selectedIcon)}
            selected={selectedTab === value}
            onPress={() => this.setState({selectedTab: value})}
        >
            {content}
        </TabBar.Item>
    )
}
