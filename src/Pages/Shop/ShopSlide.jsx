import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./shop_css/shopslide.css"


function ShopSlide() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <>

            <div className="shopSection">
                <Slider {...settings}>
                    <div className="bgImgFirst bgImg" >
                        <h1>Gamepad MPL</h1>
                        <p>"Have beginning wherein spirit. Bearing unto. To after light.
                            Good image can't without hath fly
                            beast him fish firmament fish Face waters fly unto spirit i
                            doesn't one waters divide."
                        </p>
                        <button>Purchase</button>
                    </div>
                    <div className="bgImgSecond bgImg" >
                        <h1>Headphones MPL</h1>
                        <p>"Tree living, heaven that signs. Were fish face fourth one land void evening.
                            Blessed cattle multiply he, brought upon, forth form give don't great isn't.
                            Fifth seas divide beginning his."
                        </p>
                        <button>Purchase</button>
                    </div>
                    <div className="bgImgThird bgImg" >
                        <h1>Headphones MPS</h1>
                        <p>"Light. Lesser him, bring. Two whales multiply may isn't air a abundantly multiply
                            creeping from shall earth given after whales seas herb isn't bring won't dry.
                            You're from. There which."
                        </p>
                        <button>Purchase</button>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default ShopSlide