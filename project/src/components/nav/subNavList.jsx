import React, { Component } from 'react';

class SubNavList extends Component {
    render() {
        const subList = this.props.sublist;
        return (
            <li className="sub-item">
                <a href="#">
                    {subList.desc}
                </a>
            </li>
        );
    }
}

export default SubNavList;