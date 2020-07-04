import React, { Component } from "react";
import { Breadcrumb, Divider, InputNumber, Button } from "antd";

class ProductInfo extends Component {
    state = { product: {} };

    render() {
        const { product } = this.state;

        return (
            <div className='product-item'>
                <div className='container product-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/phones'>Phones</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/'>{product.name}</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='info'>
                        <div className='basic-info'>
                            <div className='product-img'>
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                            <div className='basic-info-wp'>
                                <span>{`${product.brand} ${product.name}`}</span>
                                <span>{parseInt(product.price).toLocaleString()}</span>
                                <div className='add-to-cart'>
                                    <div className='quantity'>
                                        <InputNumber min={1} max={10} defaultValue={1} />
                                    </div>
                                    <Button type='primary'>Add To Cart</Button>
                                </div>
                            </div>
                        </div>
                        <ul className='detail-info'>
                            <li>Storage: {product.storage} GB</li>
                            <li>Memory: {product.memory} GB</li>
                            <li>Screen Size: {product.screenSize} inches</li>
                            <li>Chipset: {product.chipset}</li>
                            <li>OS: {product.os}</li>
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default ProductInfo;
