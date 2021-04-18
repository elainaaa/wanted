import React, {Component} from 'react';

class CardItem extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <li>
                <a href={this.props.data.link}>
                    <div className="picture" style={{backgroundImage: `url(` + this.props.data.picture + `)`}} />
                    <div className="info">
                        <div className="flag">
                            <span>{this.props.data.flag}</span>
                            <span>{this.props.data.flag2}</span>
                        </div>
                        <h3>{this.props.data.title}</h3>
                        <span className="date">{this.props.data.date}</span>
                        <div className="category">
                            <span>{this.props.data.category}</span>
                            <span>{this.props.data.category2}</span>
                            <span>{this.props.data.category3}</span>
                        </div>
                    </div>
                </a>
            </li>

        );
    }
}

export default CardItem;