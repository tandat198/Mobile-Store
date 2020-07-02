import React, { Component } from "react";
import { Card, Divider, Breadcrumb } from "antd";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import axios from "axios";
import CardLoader from "../../components/CardLoader";

const { Meta } = Card;

class PhonePage extends Component {
    state = { phones: [], isLoading: false };

    getPhones = () => {
        this.setState({ isLoading: true });
        axios.get("https://crm-dnt.herokuapp.com/api/products?category=smartphone&pageSize=8&pageIndex=1").then((res) => this.setState({ phones: res.data, isLoading: false }));
    };

    componentDidMount() {
        this.getPhones();
    }
    render() {
        return (
            <div className='all-phones'>
                <div className='container all-phones-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/'>Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to='/phones'>Điện thoại</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='phones-container'>
                        {this.state.isLoading ? (
                            <CardLoader numberOfCard={8} />
                        ) : (
                            this.state.phones.map(({ id, name, thumbnailUrl, price: p }) => (
                                <FadeIn className='card'>
                                    <Card key={id} hoverable cover={<img alt={name} src={thumbnailUrl} />}>
                                        <Meta title={`${name}`} description={`${parseInt(p).toLocaleString()}`} />
                                    </Card>
                                </FadeIn>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhonePage;
