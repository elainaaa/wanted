import React, { Component } from 'react';
import Login from './Login';
import Nav from './Nav';
import headerLogo from '../../static/img_header_logo.png';

class Header extends Component {
    render() {
        return (
            <header className="header-col">
                <div className="inner-col">
                    <h1 className="logo"><a href="#">Wantedd</a></h1>
                    <Nav/>
                    <Login />
                </div>
            </header>
        );
    }
}

export default Header;