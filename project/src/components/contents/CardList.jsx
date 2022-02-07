import React, { Component } from 'react';
import CardItem from './CardItem';
// import arrayData from "../../data/arrayData.json"
import axios from 'axios';
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemList: [],
    };
  }

  loadItem() {
    axios
      .get(
        'https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData.json'
      )
      .then(({ data }) => {
        //console.log('aaaaaa',data)
        this.setState({
          ItemList: data,
        });
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        //console.error(e);  // 에러표시
      });
  }
  componentDidMount() {
    this.loadItem(); // loadItem 호출
  }
  render() {
    const { ItemList } = this.state;
    console.log(ItemList);
    return (
      <>
        <h2>All</h2>
        <ul>
          {ItemList &&
            ItemList.length > 0 &&
            ItemList.map((item, idx) => {
              console.log(item);
              return <CardItem data={item} key={idx} />;
            })}
        </ul>
      </>
    );
  }
}
export default CardList;
