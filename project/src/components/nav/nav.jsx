import React, { Component } from 'react';
import SubNav from './subNav';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        }
    }

    handleMouseHover (e) {
        this.setState({
            isHovering: !this.state.isHovering
        });
        const subNav = document.querySelectorAll('.nav-list');

        subNav.forEach(function(e){
            e.addEventListener('mouseover', activeNav);
            e.addEventListener('mouseleave', function(){
                subNav.forEach(function(e){
                    e.classList.remove('active');
                })
            });
        })

        function activeNav(e) {
            let currentNav = e.currentTarget;

            subNav.forEach(function(e){
                e.classList.remove('active');
            })
            currentNav.classList.add('active');
        };
    }

    handleNavActive (e) {
        
    }

    render() {
        return (
            <>
            <nav className="nav-box">
                <ul>
                    <li className="nav-list"><a href="#" onMouseOver={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>All Jobs</a></li>
                    <li className="nav-list"><a href="#" onMouseOver={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>Events</a></li>
                    <li className="nav-list"><a href="#" onMouseOver={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>Resume</a></li>
                    <li className="nav-list"><a href="#" onMouseOver={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>MathUp</a></li>
                </ul>
                
            </nav>
            {this.state.isHovering ? <SubNav /> : ''}
            
            </>
        );
    }
}

export default Nav;