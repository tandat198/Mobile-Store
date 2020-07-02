import React, { Component } from "react";
import { Card, Divider, Breadcrumb } from "antd";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import axios from "axios";
import CardLoader from "../../components/CardLoader";

const { Meta } = Card;

class TabletPage extends Component {
    state = {
        tablets: [],
        isLoading: false,
    };

    getTablets = () => {
        this.setState({ isLoading: true });
        axios.get("https://crm-dnt.herokuapp.com/api/products?category=tablet&pageSize=8").then((res) => this.setState({ tablets: res.data, isLoading: false }));
    };

    componentDidMount() {
        this.getTablets();
    }
    render() {
        return (
            <div className='all-tablets'>
                <div className='container all-tablets-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/'>Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to='/tablets'>Tablet</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='tablets-container'>
                        {this.state.isLoading ? (
                            <CardLoader numberOfCard={8} />
                        ) : (
                            this.state.tablets.map(({ id, name, thumbnailUrl, price: p }) => (
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

export default TabletPage;
