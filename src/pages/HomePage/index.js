import React, { Component } from "react";
import { Card, Divider } from "antd";
import axios from "axios";
import FadeIn from "react-fade-in";
import CardLoader from "../../components/CardLoader";

const { Meta } = Card;

class HomePage extends Component {
    state = {
        phones: [],
        tablets: [],
        isLoadingPhones: true,
        isLoadingTablets: true,
    };

    getPhones = () => {
        axios.get("https://crm-dnt.herokuapp.com/api/products?category=smartphone").then((res) => this.setState({ phones: res.data, isLoadingPhones: false }));
    };
    getTablets = () => {
        axios.get("https://crm-dnt.herokuapp.com/api/products?category=tablet").then((res) => this.setState({ tablets: res.data, isLoadingTablets: false }));
    };

    componentDidMount() {
        this.getPhones();
        this.getTablets();
    }
    render() {
        const { phones, tablets, isLoadingPhones, isLoadingTablets } = this.state;

        return (
            <div className='container product-container'>
                <div className='phone-list'>
                    <div className='list-title'>
                        <span>Điện thoại nổi bật</span>
                    </div>
                    <div className='phones-container'>
                        {isLoadingPhones ? (
                            <CardLoader numberOfCard={4} />
                        ) : (
                            phones.map(({ id, name, thumbnailUrl, price: p }) => (
                                <FadeIn key={id} className='card'>
                                    <Card hoverable cover={<img alt={name} src={thumbnailUrl} />}>
                                        <Meta title={`${name}`} description={`${parseInt(p).toLocaleString()}`} />
                                    </Card>
                                </FadeIn>
                            ))
                        )}
                    </div>
                </div>
                <Divider dashed />
                <div className='tablet-list'>
                    <div className='list-title'>
                        <span>Tablet nổi bật</span>
                    </div>
                    <div className='tablets-container'>
                        {isLoadingTablets ? (
                            <CardLoader numberOfCard={4} />
                        ) : (
                            tablets.map(({ id, name, thumbnailUrl, price: p }) => (
                                <FadeIn key={id} className='card'>
                                    <Card hoverable cover={<img alt={name} src={thumbnailUrl} />}>
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

export default HomePage;