import React from 'react'
import "./homePage_Css/newsSection.css"


function NewsSection({ slides }) {
    return (
        <>
            <div className="newsSection">
                <div className='newsSection_container'>
                    <h2 className='newsSection_head'>Latest News</h2>

                    {slides.map((slide, index) => (
                        <div key={index}>

                            {slide.date && (
                                <div className='newsSection_content'>
                                    <div
                                        className="newsSection_img"
                                        style={{ backgroundImage: `url(${slide.img})` }}
                                    >
                                        <div className="newsSection_rating">
                                            {slide.rating}
                                        </div>
                                    </div>

                                    <div className='newsSection_text'>
                                        <h3>{slide.title}</h3>
                                        <p className='newsSection_date'>
                                            <p>
                                                <span><i class="fa-regular fa-calendar"></i></span>
                                                <span>{slide.date}</span>
                                            </p>
                                            <p className='newsSection_date_pad'>
                                                <span><i class="fa-solid fa-list"></i></span>
                                                <span>{slide.title}</span>
                                            </p>
                                        </p>

                                        <p className='newsSection_desc'>
                                            {slide.description}
                                        </p>

                                        <p className='newsSection_readMore'>
                                            <span>
                                                read more
                                            </span>
                                        </p>
                                    </div>

                                </div>
                            )}

                        </div>


                    ))}
                </div>

            </div>

        </>
    )
}

export default NewsSection