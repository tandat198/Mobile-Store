import React, { Component } from "react";
import { Breadcrumb, Divider, Card } from "antd";
import FadeIn from "react-fade-in";
import Meta from "antd/lib/card/Meta";

class TabletPage extends Component {
    state = { tablets: [] };

    render() {
        return (
            <div className='all-tablets'>
                <div className='container all-tablets-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>Trang chủ</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/tablets'>Tablet</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='tablets-container'>
                        {this.state.tablets.map(({ id, name, brand, thumbnail, price: p }) => (
                            <FadeIn className='card'>
                                <Card key={id} hoverable cover={<img alt={name} src={thumbnail} />}>
                                    <Meta title={`${brand} ${name}`} description={`${parseInt(p).toLocaleString()}`} />
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TabletPage;
