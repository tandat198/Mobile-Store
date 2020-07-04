import React from "react";
import "./App.less";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import PhonePage from "./pages/PhonePage";
import TabletPage from "./pages/TabletPage";
import ProductInfo from "./pages/ProductInfo";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* <OrderPage /> */}
                <Homepage />

                {/* Phone Page */}
                <PhonePage />

                {/* Tablets Page */}
                <TabletPage />

                {/* Product Info */}
                <ProductInfo />
            </>
        );
    }
}

export default App;
