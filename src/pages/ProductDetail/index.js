import React, { Component } from "react";
import { Divider, Breadcrumb } from "antd";

class ProductDetail extends Component {
    render() {
        return (
            <div className='product-item'>
                <div className='container product-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>Trang chủ</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/phones'>Điện thoại</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/'>{phone.name}</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='info'>
                        <div className='basic-info'>
                            <div className='product-img'>
                                <img src={phone.imageUrl} alt={phone.name} />
                            </div>
                            <div className='basic-info-wp'>
                                <span>{`${phone.name}`}</span>
                                <span>{parseInt(phone.price).toLocaleString()}</span>
                                <div className='add-to-cart'>
                                    <div className='quantity'>
                                        <InputNumber min={1} max={10} defaultValue={1} />
                                    </div>
                                    <Button type='primary'>Thêm vào giỏ</Button>
                                </div>
                            </div>
                        </div>
                        <ul className='detail-info'>
                            <li>Bộ nhớ: {phone.storage} GB</li>
                            <li>RAM: {phone.memory} GB</li>
                            <li>Kích thước màn hình: {phone.screenSize} inches</li>
                            <li>Chipset: {phone.chipset}</li>
                            <li>Hệ điều hành: {phone.os}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
