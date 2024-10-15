import React, { Component } from 'react';
import instagram from "../../data/instagram.json";
import Slider from "react-slick";

const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }
    ]
}

class Galleryslider extends Component {
    render() {
        return (
            <div className="sigma_instagram style-1 insta-images">
                <Slider {...settings} className="sigma_instagram-slider">
                    {/* Renderización de datos sin enlaces */}
                    {instagram.map((item, i) => (
                        <div key={item.id || i}>  {/* Usa un div simple para envolver la imagen */}
                            <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt="img" />
                        </div>
                    ))}
                    {/* Fin de renderización de datos */}
                </Slider>
            </div>
        );
    }
}

export default Galleryslider;
