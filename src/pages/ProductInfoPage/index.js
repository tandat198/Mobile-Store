import React, { Component } from "react";
import { Divider, Breadcrumb, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import ContentLoader from "react-content-loader";

class ProductInfoPage extends Component {
    state = {
        product: {},
        isLoading: false,
    };

    getProduct = async () => {
        let res;
        let product;
        const {
            params: { productId },
            path,
        } = this.props.match;

        this.setState({ isLoading: true });
        switch (true) {
            case path.includes("phones"):
                res = await axios.get(`https://crm-dnt.herokuapp.com/api/products/${productId}`);
                product = res.data;
                break;
            case path.includes("tablets"):
                res = await axios.get(`https://crm-dnt.herokuapp.com/api/products/${productId}`);
                product = res.data;
                break;
            default:
                break;
        }

        this.setState({ product, isLoading: false });
    };

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product, isLoading } = this.state;

        const ProductImageLoader = () => {
            return (
                <ContentLoader style={{ width: "100%" }} speed={1} viewBox='0 0 400 350' backgroundColor='#e8e8e8' foregroundColor='#f0f0f0'>
                    <rect x='50' y='0' rx='3' ry='3' width='250' height='350' />
                </ContentLoader>
            );
        };

        const InfoLoader = () => {
            return (
                <ContentLoader style={{ width: "100%" }} speed={1} viewBox='0 0 350 350' backgroundColor='#e8e8e8' foregroundColor='#f0f0f0'>
                    <rect x='0' y='0' rx='3' ry='3' width='350' height='350' />
                </ContentLoader>
            );
        };

        const LinkToAllProducts = () => {
            const { path } = this.props.match;

            switch (true) {
                case path.includes("phones"):
                    return <Link to='/phones'>Điện thoại</Link>;
                case path.includes("tablets"):
                    return <Link to='/tablets'>Tablet</Link>;
                default:
                    break;
            }
        };

        return (
            <div className='product-item'>
                <div className='container product-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/'>Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <LinkToAllProducts />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={this.props.match.url}>{product.name}</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='info'>
                        <div className='basic-info'>
                            {isLoading ? (
                                <ProductImageLoader />
                            ) : (
                                <>
                                    <div className='product-img'>
                                        <img src={product.imageUrl} alt={product.name} />
                                    </div>
                                    <div className='basic-info-wp'>
                                        <span>{`${product.name}`}</span>
                                        <span>{parseInt(product.price).toLocaleString()}</span>
                                        <div className='add-to-cart'>
                                            <div className='quantity'>
                                                <InputNumber min={1} max={10} defaultValue={1} />
                                            </div>
                                            <Button type='primary'>Thêm vào giỏ</Button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <ul className='detail-info'>
                            {isLoading ? (
                                <InfoLoader />
                            ) : (
                                <>
                                    <li>Bộ nhớ: {product.storage} GB</li>
                                    <li>RAM: {product.memory} GB</li>
                                    <li>Kích thước màn hình: {product.screenSize} inches</li>
                                    <li>Chipset: {product.chipset}</li>
                                    <li>Hệ điều hành: {product.os}</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfoPage;
