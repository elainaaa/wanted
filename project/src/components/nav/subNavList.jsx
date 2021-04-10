import React, { Component } from 'react';

class SubNavList extends Component {
    render() {
        const {desc} = this.props.item;
        return (
            <li className="sub-item">
                <a href="#">
                    {desc}
                </a>
            </li>
        );
    }
}

export default SubNavList;