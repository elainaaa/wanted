import React, { Component } from 'react';

class SubNavList extends Component {
    render() {
        const {desc} = this.props.item;
        return (
            // <li className="sub-item">
            //     <a href="#">
            //         {desc[i]}
            //     </a>
            // </li>
            
            this.props.item.map(items => (
                <li className="sub-item">
                    <a href="#">
                        {items.desc}
                    </a>
                </li>
            ))
        );
    }
}

export default SubNavList;