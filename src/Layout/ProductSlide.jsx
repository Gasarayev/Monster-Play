import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./css/productcarusel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductSlide({ productSlideJson }) {

    const [slidesToShow, setSlidesToShow] = useState(3);




    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1100) {
                setSlidesToShow(3);
            } else if (window.innerWidth <= 1100 && window.innerWidth > 767) {
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
            <div className="carusel-container">

                <h2>From Our Store</h2>
                <Slider {...settings}>

                    {productSlideJson.map((carusel) => (
                        <div className="caruselImg_Parent" key={carusel.img}>
                            
                            <div
                                className="carusel_img"
                                style={{ backgroundImage: `url(${carusel.img})` }}
                            >
                                {carusel.discount && (
                                    <p className="carusel_productDsc">{carusel.discount}</p>
                                )}
                            </div>
                            <div className="carusel_title">
                                <p>{carusel.title}</p>

                                {carusel.stars==4 &&(
                                    <div className="carusel_starsIcon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                )}
                                 {carusel.stars==5 &&(
                                    <div className="carusel_starsIcon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                )}
                                
                            </div>

                            {(
                                <div className="carusel_Price">
                                    <div className="carusel_newPrice">
                                        {carusel.newPrice}
                                    </div>
                                    <div className="carusel_oldPrice">
                                        {carusel.oldPrice}
                                    </div>
                                </div>

                            )}

                        </div>

                    ))}

                </Slider>
            </div>
        </>
    );
}

export default ProductSlide