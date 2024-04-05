import React, { Component,useState, useEffect } from "react";
import Slider from "react-slick";
import "./homePage_Css/slideLogo.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SlideLogo({ parnersLogo }) {
    const [partnerToShow, setPartnerToShow] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1280) {
                setPartnerToShow(6);
            } else if (window.innerWidth <= 1200 && window.innerWidth > 800) {
                setPartnerToShow(5);
            }else if(window.innerWidth <= 800 && window.innerWidth > 600){
                setPartnerToShow(3);
            }else if(window.innerWidth <= 600 && window.innerWidth > 400){
                setPartnerToShow(2);
            }else if(window.innerWidth <= 400 && window.innerWidth > 100){
                setPartnerToShow(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: partnerToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };


    return (
        <>
            <div className='slide_bgImg'>
                <Slider {...settings}>
                    {parnersLogo.map((partner) => (
                        <div className="slidePartners" key={partner.img}>
                            {
                                partner.img && (
                                    <div className="slidePartners_img">
                                        <img src={partner.img} alt="" />
                                    </div>
                                )
                            }


                        </div>

                    ))}

                </Slider>
            </div>

        </>
    )
}

export default SlideLogo
