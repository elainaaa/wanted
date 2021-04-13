import React, { Component } from 'react';
import SubNavList from './subNavList';

class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // items: [
            //     {id: 1, desc: 'IT'},
            //     {id: 2, desc: 'HR'},
            //     {id: 3, desc: 'sales'},
            //     {id: 4, desc: 'Design'},
            // ],

            // submenu여러개일때
            items:[
                [{id: 1, desc: 'IT'}, {id: 2, desc: 'HR'}],
                [{id: 3, desc: 'wl'}, {id: 4, desc: 'gl'}],
                [{id: 5, desc: 'to'}, {id: 6, desc: 'fha'}],
                [{id: 7, desc: 'tk'}, {id: 8, desc: 'fkd'}]
            ],

            // items:{
            //       "All Jobs": [{id: 1, desc: 'IT'}, {id: 2, desc: 'HR'}]  ,
            //       "HR": [{id: 3, desc: 'wl'}, {id: 4, desc: 'gl'}]
            //     }
        }
    }

    render() {
        
      console.log(this.props.subNav)
        const suvNav = this.props.subNav;
        return (
            <>
                <ul id="sub-1" className={suvNav.menu1 ? "sub-list active" : "sub-list"} onMouseOver={()=> {this.setState({menu4: true});}}>
                    <li><a href="#">서브1</a></li>
                    <li><a href="#">서브2</a></li>
                    <li><a href="#">서브3</a></li>
                </ul>
                <ul id="sub-2" className={suvNav.menu2 ? "sub-list active" : "sub-list"}>
                    <li><a href="#">서브4</a></li>
                    <li><a href="#">서브5</a></li>
                    <li><a href="#">서브6</a></li>
                </ul>
                <ul id="sub-3" className={suvNav.menu3 ? "sub-list active" : "sub-list"}>
                    <li><a href="#">서브7</a></li>
                    <li><a href="#">서브8</a></li>
                    <li><a href="#">서브9</a></li>
                </ul>
                <ul id="sub-4" className={suvNav.menu4 ? "sub-list active" : "sub-list"}>
                    <li><a href="#">서브10</a></li>
                    <li><a href="#">서브11</a></li>
                    <li><a href="#">서브12</a></li>
                </ul>
            </>
        );
    }
}

export default SubNav;