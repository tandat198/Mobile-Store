import React from "react";
import "./App.less";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhonePage from "./pages/PhonePage";
import TabletPage from "./pages/TabletPage";
import ProductInfoPage from "./pages/ProductInfoPage";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='header'>
                    <div className='container header-container'>
                        <div className='logo'>
                            <Link to='/'>Mobile Store</Link>
                        </div>
                        <div className='right-nav'>
                            <Link to='/phones'>Smartphone</Link>
                            <Link to='/tablets'>Tablet</Link>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/phones' component={PhonePage} />
                    <Route exact path='/tablets' component={TabletPage} />
                    <Route exact path='/phones/:productId' component={ProductInfoPage} />
                    <Route exact path='/tablets/:productId' component={ProductInfoPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
