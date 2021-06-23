import React, { Component } from 'react';

class InfoList extends Component {
    render() {
        const list = this.props.userinfo;
        return (
            <li>
                <p><strong>Name</strong> : {list.name}</p>
                <p><strong>Email</strong> : {list.email}</p>
                <p>{list.postId}</p>
            </li>
        );
    }
}

export default InfoList;