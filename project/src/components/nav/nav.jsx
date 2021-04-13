import React, { Component } from 'react';
import SubNav from './subNav';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false,
        }
    }

    render() {

        return (
            <>
            <nav className="nav-box">
                <ul>
                    <li className={this.state.menu1 ? "nav-list active" : "nav-list"}><a href="#"
                     onMouseOver={()=> {this.setState({menu1: true});}} 
                    onMouseLeave={()=> {this.setState({menu1: false});}}>All Jobs</a></li>
                    <li className={this.state.menu2 ? "nav-list active" : "nav-list"}><a href="#"
                     onMouseOver={()=> {this.setState({menu2: true});}} 
                    onMouseLeave={()=> {this.setState({menu2: false});}}>Events</a></li>
                    <li className={this.state.menu3 ? "nav-list active" : "nav-list"}><a href="#"
                     onMouseOver={()=> {this.setState({menu3: true});}} 
                    onMouseLeave={()=> {this.setState({menu3: false});}}>Resume</a></li>
                    <li className={this.state.menu4 ? "nav-list active" : "nav-list"}><a href="#"
                     onMouseOver={()=> {this.setState({menu4: true});}} 
                    onMouseLeave={()=> {this.setState({menu4: false});}}>MathUp</a></li>
                </ul>
            </nav>
                {/* {this.state.isHovering ? <SubNav /> : ''} */}
                <SubNav subNav={this.state} />
            </>
        );
    }
}

export default Nav;