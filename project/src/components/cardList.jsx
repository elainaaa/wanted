import React, {Component} from 'react';
import CardItem from "./cardItem"
import arrayData from "../data/arrayData.json";

class CardList extends Component {
    render() {
        console.log("arrayData: ", typeof arrayData);
        console.log(arrayData);

        const newArrayData = arrayData.map((item, index) => {
            return (
                <li key={index}>
                    <a href={item.link} target="_blank">
                        <div className="picture" style={{backgroundImage: `url(` + item.picture + `)`}}/>
                        <div className="info">
                            <div className="flag">
                                <span>{item.flag}</span>
                                <span>{item.flag2}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <span className="date">{item.date}</span>
                            <div className="category">
                                <span>{item.category}</span>
                                <span>{item.category2}</span>
                                <span>{item.category3}</span>
                            </div>
                        </div>
                    </a>
                </li>
            );
        });

        return (
            <>
                <h2>All</h2>
                <ul>
                    {newArrayData}
                    <CardItem></CardItem>
                </ul>
            </>
        )
    }
}


export default CardList;