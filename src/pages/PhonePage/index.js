import React, { Component } from "react";
import { Breadcrumb, Divider, Card } from "antd";
import FadeIn from "react-fade-in";
import Meta from "antd/lib/card/Meta";

class PhonePage extends Component {
    state = { phones: [] };

    render() {
        return (
            <div className='all-phones'>
                <div className='container all-phones-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>Trang chủ</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/phones'>Điện thoại</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='phones-container'>
                        {this.state.phones.map(({ id, name, brand, thumbnail, price: p }) => (
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

export default PhonePage;
