import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Category extends Component {
    render() {
        const settings = {
            dots:false,
            infinite: true,
            slidesToShow: 5,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots:false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: "0px",
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}`
                );
            }
        };
        return (
            <div className="category">
                <Slider {...settings}>
                    <div><button>All</button></div>
                    <div><button>Wanted Plus</button></div>
                    <div><button>HR</button></div>
                    <div><button>Jobs</button></div>
                    <div><button>Management &amp; Business</button></div>
                    <div><button>Tech / IT</button></div>
                    <div><button>Leadership</button></div>
                    <div><button>Creative</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                    <div><button>All</button></div>
                </Slider>
            </div>
        );
    }
}
// class Category extends Component {
//     render() {
//         return (

//         )
//     }
// }


export default Category;