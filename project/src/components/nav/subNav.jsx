import React, { Component } from 'react';
import SubNavList from './subNavList';

class SubNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, desc: 'IT'},
                {id: 2, desc: 'HR'},
                {id: 3, desc: 'sales'},
                {id: 4, desc: 'Design'},
            ],

            // items:[
            //     [{id: 1, desc: 'IT'}, {id: 2, desc: 'HR'}],
            //     [{id: 3, desc: 'wl'}, {id: 4, desc: 'gl'}],
            //     [{id: 5, desc: 'to'}, {id: 6, desc: 'fha'}],
            //     [{id: 7, desc: 'tk'}, {id: 8, desc: 'fkd'}]
            // ]


        }
    }

    render() {
        return (
            <div className="sub-nav">
                <ul>
                    {this.state.items.map(item => (
                     <SubNavList key={item.desc} item={item}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SubNav;