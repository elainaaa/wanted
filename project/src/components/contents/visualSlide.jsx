import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styled from "styled-components";


const Picture = styled.div`
  height:690px;
  width:100%;
  background-position:center;
  background-size:cover
`;


class VisualSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SlideList: []
        }
    }
    loadSlide () {
        axios
            .get("https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData.json")
            .then(({data}) => {
                //console.log('슬라이드 할 이미지 데이터 챙김?',data)
                this.setState({
                    SlideList: data
                });
            })
            .catch(e => {
                //console.log('못챙김',e);
            })
    };
    componentDidMount() {
        this.loadSlide();
    }
    render() {
        const {SlideList} = this.state;
        console.log(SlideList)

        const settings = {
            dots:true,
            //fade: true,
            infinite: true,
        };
        return (
            <div className="visual-col">
                <Slider {...settings}>
                        {SlideList && SlideList.length > 0 && (
                            SlideList.map((item,idx) => {
                                console.log(item)
                                return (
                                    <div key={idx}>
                                        <a href={item.link} target="_blank">
                                            <Picture style={{backgroundImage: `url(` + item.picture + `)`}} />
                                        </a>
                                    </div>
                                )
                            })
                        )}
                </Slider>
            </div>
        );
    }
}

export default VisualSlide;