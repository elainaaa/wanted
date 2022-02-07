import React, { Component } from 'react';
import InfoList from './InfoList';

class UserWrap extends Component {
  render() {
    const userInfo = this.props.infoList;

    return (
      <ul>
        {userInfo.map((userinfo) => (
          <InfoList key={userinfo.id} userinfo={userinfo} />
        ))}
      </ul>
    );
  }
}

export default UserWrap;
