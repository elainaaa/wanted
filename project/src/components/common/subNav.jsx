import React, { Component } from 'react';
import SubNavList from './subNavList';

class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sub1: [
                {id: 1, desc: 'All jobs 서브1'},
                {id: 2, desc: 'All jobs 서브2'},
                {id: 3, desc: 'All jobs 서브3'},
                {id: 4, desc: 'All jobs 서브4'},
            ],
            sub2: [
                {id: 1, desc: 'Events 서브1'},
                {id: 2, desc: 'Events 서브2'},
                {id: 3, desc: 'Events 서브3'},
                {id: 4, desc: 'Events 서브4'},
            ],
            sub3: [
                {id: 1, desc: 'Resume 서브1'},
                {id: 2, desc: 'Resume 서브2'},
                {id: 3, desc: 'Resume 서브3'},
                {id: 4, desc: 'Resume 서브4'},
            ],
            sub4: [
                {id: 1, desc: 'MathUp 서브1'},
                {id: 2, desc: 'MathUp 서브2'},
                {id: 3, desc: 'MathUp 서브3'},
                {id: 4, desc: 'MathUp 서브4'},
            ]
        }
    }

    render() {
        const subNav = this.props.subNav;
        return (
            <>
                <ul id="sub-1" className={subNav.menu1 ? "sub-list active" : "sub-list"} onMouseOver={()=> {this.setState({menu4: true});}}>
                    {
                        this.state.sub1.map(sublist => (
                            <SubNavList key={sublist.id} sublist={sublist}/>
                        ))
                    }
                </ul>
                <ul id="sub-2" className={subNav.menu2 ? "sub-list active" : "sub-list"}>
                {
                        this.state.sub2.map(sublist => (
                            <SubNavList key={sublist.id} sublist={sublist}/>
                        ))
                    }
                </ul>
                <ul id="sub-3" className={subNav.menu3 ? "sub-list active" : "sub-list"}>
                {
                        this.state.sub3.map(sublist => (
                            <SubNavList key={sublist.id} sublist={sublist}/>
                        ))
                    }
                </ul>
                <ul id="sub-4" className={subNav.menu4 ? "sub-list active" : "sub-list"}>
                {
                        this.state.sub4.map(sublist => (
                            <SubNavList key={sublist.id} sublist={sublist}/>
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default SubNav;