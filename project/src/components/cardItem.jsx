import React, {Component} from 'react';

class CardItem extends Component {
    render() {
        return (
            <li>
                <a href="">
                    <img src="https://static.wanted.co.kr/images/events/1194/1376b925.jpg" className="picture" alt=""/>
                    <div className="info">
                        <div>
                            <span>online</span>
                            <span>event</span>
                        </div>
                        <h3>How to Land a job in big Tech</h3>
                        <span>Tuesday, 13 Apr 2021</span>
                        <div>
                            <span>#Tech / It</span>
                            <span>#Jobs</span>
                            <span>#Talk</span>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}

export default CardItem;