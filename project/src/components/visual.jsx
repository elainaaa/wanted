import React, { Component } from 'react';
import axios from 'axios';
import UserWrap from './userWrap';

class Visual extends Component {
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.state= {
            infoList: [],
            showInfo: false
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

    componentDidMount() {
        this.loadInfo();
    }

    handleShow = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const infoList = this.state.infoList;
        // console.log(infoList)
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
                </div>
           </div>
           
           </>
        );
    }
}

export default Visual;