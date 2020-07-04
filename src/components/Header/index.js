import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
    return (
        <div className='header'>
            <div className='container header-container'>
                <div className='logo'>
                    <a href='/'>Mobile Store</a>
                </div>
                <div className='right-nav'>
                    <a href='/phones'>Smartphone</a>
                    <a href='/tablets'>Tablet</a>
                    <a href='/'>
                        <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
