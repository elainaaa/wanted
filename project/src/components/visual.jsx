import React, { Component } from 'react';
import axios from 'axios';
import UserWrap from './userWrap';

class Visual extends Component {
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.state= {
            infoList: [],
            showInfo: false,
            fetchInfoList: []
        }
    }

    loadInfo () {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(({data}) => {
                this.setState({
                    infoList: data
                });
            })
            .catch(e => {
                console.log(e);
            });
    };

    fetchInfo() {
        // fetch('https://jsonplaceholder.typicode.com/posts/2/comments', {
        //     method: 'post',
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        // })
        fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    fetchInfoList: response
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentDidMount() {
        this.loadInfo();
        this.fetchInfo();
    }

    handleShow = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const infoList = this.state.infoList;
        const fetchList = this.state.fetchInfoList;
        // console.log(infoList)
        // console.log(fetchList)
        return (
            <>
            <div className="main-visual-col" onClick={this.handleShow}>
                <div className="inner-col">
                    find out more
                </div>
           </div>
           <div className={this.state.showInfo ? 'user-info-col active' : 'user-info-col'}>
                <div className="inner-col">
                    <h3>Axios</h3>
                    <UserWrap infoList={infoList}/>
                    {/* <h3>Fetch</h3> */}
                </div>
           </div>
           
           </>
        );
    }
}

export default Visual;