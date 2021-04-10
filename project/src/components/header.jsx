import React, { Component } from 'react';
import Login from './login';
import Nav from './nav/nav';

class Header extends Component {
   

    render() {
        return (
            <header className="header-col">
                <div className="inner-col">
                    <h1 className="logo"><a href="#">LOGO</a></h1>
                    <Nav/>
                    <Login />
                </div>
            </header>
        );
    }
}

export default Header;