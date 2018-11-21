import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { First } from './tabs';

const tabs = [
    {
        title: '1st Tab',
        Content: First
    },
    {
        title: '2nd Tab',
        Content: () => <div>2</div>
    },
    {
        title: '3rd Tab',
        Content: () => <div>3</div>
    },
    {
        title: '4th Tab',
        Content: () => <div>4</div>
    },
];


export default class Index extends Component{
    state = {
        currentPage: 0,
        containerHeight: 0
    };

    componentDidMount(){
        this.resize();
    }

    resize = () => {
        // 50: 是底部占用的高度
        // 9: 头部留白占用的高度
        this.setState({containerHeight: window.innerHeight - 50 - 9})
    };

    renderContent = (tab, index) =>{
        const { Content }= tab;

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' }}>
                <Content />
            </div>
        );
    };

    handleTabClick = (tab, index) => {
        this.setState({currentPage: index});
    };

    render() {
        const { currentPage, containerHeight } = this.state;

        return (
            <div style={{height: containerHeight}}>
                <WhiteSpace />
                <Tabs
                    tabs={tabs}
                    page={currentPage}
                    destroyInactiveTab={true}
                    renderTabBar={props => <Tabs.DefaultTabBar
                        {...props}
                        page={3}
                        onTabClick={this.handleTabClick}
                    />}
                >
                    {this.renderContent}
                </Tabs>
            </div>
        );
    }
}

