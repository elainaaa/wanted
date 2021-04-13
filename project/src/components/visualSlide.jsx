import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class VisualSlide extends Component {
    render() {
        const settings = {
            dots:true,
            fade: true,
            infinite: true,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}`
                );
            }
        };
        return (
            <div className="visual-col">
                <Slider {...settings}>
                    <div><img src="https://english.yanadoocdn.com/upload/2021/02/Bigbanner_pc_1614131588071.jpg" alt=""/></div>
                    <div><img src="https://english.yanadoocdn.com/upload/2021/01/pc_1611134775738.jpg" alt=""/></div>
                    <div><img src="https://english.yanadoocdn.com/upload/2021/03/3_audio_Bigbanner_pc_crop_1617181015048.png" alt=""/></div>
                    <div><img src="https://english.yanadoocdn.com/upload/2021/03/210318_big_PC_1616144528399.jpg" alt=""/></div>
                    <div><img src="https://english.yanadoocdn.com/upload/2020/12/3_Bigbanner_pc_ebebeb_1609217271367.jpg" alt=""/></div>
                </Slider>
            </div>
        );
    }
}

export default VisualSlide;