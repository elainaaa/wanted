import React, {Component} from 'react';
import CardList from "./cardList"

class CardWrap extends Component {
    render () {
        return (
            <div className="card-wrap">
                <CardList />
            </div>
        );
    }
}

export default CardWrap;