import React, {Component} from 'react';
import CardItem from "./cardItem"
import arrayData from "../../data/arrayData.json"
import axios from "axios";
class CardList extends Component {
    state = {
        ItemList: []  // 비어있는 배열
    };
    loadItem = () => {
        axios
            .get("https://my-json-server.typicode.com/typicode/demo/posts")
            .then(({ data }) => {
                console.log('aaaaaa',data)
                this.setState({
                    ItemList: data
                });
            })
            .catch(e => {  // API 호출이 실패한 경우
                console.error(e);  // 에러표시
            });
    };
    componentDidMount() {
        this.loadItem();  // loadItem 호출
    }
    render () {
        const { ItemList } = this.state;
        console.log(ItemList);
        return (
            <>
                <h2>All</h2>
                <ul>
                    {
                        arrayData && arrayData.length > 0 && (
                            arrayData.map((item,idx) => {
                                console.log(item)
                                return (
                                    <CardItem data={item} key={idx}/>
                                )
                            })
                        )
                    }
                </ul>
            </>
        );
    }
}
export default CardList;