import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import css from "./index.scss";

import { EnumMainLayoutMenus } from "constants/EnumDefaultMenus";
import { decorator } from 'utils/T';

const isFunction = (data) => typeof data === 'function';
const shallowCopy = (a, b) => Object.assign({}, a, b);

/**
 * 获取icon
 * @param icon
 * @return {{uri: *}}
 */
const getIcon = (icon) => isFunction(icon) ? icon : {uri: icon};

const { style, tabBarProps, items } = EnumMainLayoutMenus;

@decorator.contextTypes("router")
export default class MainLayout extends PureComponent {
    static propTypes = {
        currentUri: PropTypes.string.isRequired,
    };

    handlePress = (uri) => {
        this.context.router.history.push(uri);   // 支持回退
        // this.context.router.history.replace(uri);   // 不支持回退
    };

    render() {
        const { currentUri, children } = this.props;

        return (
            <div className={css["main-layout"]} style={style}>
                <TabBar {...tabBarProps}>
                    {
                        (Array.isArray(items) ? items : []).map((item) => {
                            const { uri, props } = item;
                            const selected = currentUri === uri;

                            return (
                                <TabBar.Item
                                    {...props}
                                    key={uri}
                                    icon={getIcon(props.icon)}
                                    selectedIcon={getIcon(props.selectedIcon)}
                                    selected={selected}
                                    onPress={() => this.handlePress(uri)}
                                >
                                    {selected ? children: null }
                                </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div>
        );
    }
}

