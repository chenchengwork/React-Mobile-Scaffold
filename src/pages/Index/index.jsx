import React, { Component, Fragment } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
    {
        title: '1st Tab',
        Content: () => <div>1</div>
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
        this.setState({containerHeight: window.innerHeight - 50 - 9*2})
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
                <WhiteSpace />
            </div>
        );
    }
}

