import React, { Component } from 'react';
import InfoList from './infoList';

class UserWrap extends Component {
    render() {
        const userInfo = this.props.infoList;
        // console.log(userInfo)
        return (
            <ul>
                {
                    userInfo.map((userinfo) => (
                        <InfoList key={userinfo.id} userinfo={userinfo} />
                    ))
                }
            </ul>
        );
    }
}

export default UserWrap;