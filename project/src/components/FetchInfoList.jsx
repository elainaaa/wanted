import React, { Component } from 'react';

class FetchInfoList extends Component {
    render() {
        const list = this.props.fetchuserinfo;
        return (
            <li>
                <p><strong>Name</strong> : {list.name}</p>
                <p><strong>Email</strong> : {list.email}</p>
            </li>
        );
    }
}

export default FetchInfoList;