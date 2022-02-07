import React, { Component } from 'react';
import SubNav from './SubNav';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navHover: false,
      navList: [
        {
          id: 1,
          mainNav: 'All jobs',
          subNav: ['All jobs 1', 'All jobs 2', 'All jobs 3'],
        },
        {
          id: 2,
          mainNav: 'Events',
          subNav: ['Events 1', 'Events 2', 'Events 3'],
        },
        {
          id: 3,
          mainNav: 'Resume',
          subNav: ['Resume 1', 'Resume 2', 'Resume 3'],
        },
        {
          id: 4,
          mainNav: 'MatchUp',
          subNav: ['MatchUp 1', 'MatchUp 2', 'MatchUp 3'],
        },
      ],
    };
  }

  // handleTest = habit => {
  //     // const test = this.state.navList.filter(item => item.id !== habit.id);
  //     console.log(habit.currentTarget.id);
  // }

  render() {
    return (
      <>
        <nav className="nav-box">
          <ul>
            {this.state.navList.map((navlist) => (
              <li
                key={navlist.id}
                onMouseEnter={() => {
                  this.setState({ navHover: true });
                }}
                onMouseLeave={() => {
                  this.setState({ navHover: false });
                }}
              >
                <a href="#">{navlist.mainNav}</a>
                <ul
                  className={
                    this.state.navHover ? 'sub-list active' : 'sub-list'
                  }
                >
                  {navlist.subNav.map((sublist, idx) => (
                    <li key={idx}>
                      <a href="#">{sublist}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        {/* <SubNav subNav={this.state} /> */}
      </>
    );
  }
}

export default Nav;
