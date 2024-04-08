import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "./css/pauseonhover.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



function PauseOnHover({ slides }) {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setSlidesToShow(3);
            } else if (window.innerWidth <= 991 && window.innerWidth > 767) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    };

    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>

                    {slides.map((slide) => (
                        <div className="slideImg_Parent" key={slide.img}>
                            <Link to={`/blog/${slide.id}`}>
                                <div
                                    className="slide_img"
                                    style={{ backgroundImage: `url(${slide.img})` }}
                                >
                                    <div className="slide_title">
                                        <p>{slide.title}</p>
                                    </div>
                                    <div className="slide_rating">
                                        {slide.rating}
                                    </div>

                                </div>
                            </Link>
                        </div>

                    ))}

                </Slider>
            </div>
        </>
    );
}

export default PauseOnHover;
