import React from 'react'
import "./homePage_Css/newsSection.css"
import { Link } from 'react-router-dom'

function NewsSection({ slides }) {
    return (
        <>
            <div className="newsSection">
                <div className='newsSection_container'>
                    <h2 className='newsSection_head'>Latest News</h2>

                    {slides.map((slide, index) => (
                        <div key={index}>

                            {slide.homepage && (
                                <div className='newsSection_content'>
                                    <Link to={`/blog/${slide.id}`}>
                                        <div
                                            className="newsSection_img"
                                            style={{ backgroundImage: `url(${slide.img})` }}
                                        >
                                            <div className="newsSection_rating">
                                                {slide.rating}
                                            </div>
                                        </div>
                                    </Link>

                                    <div className='newsSection_text'>
                                        <Link to={`/blog/${slide.id}`}>
                                            <h3>{slide.title}</h3>
                                        </Link>
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
                                            <Link to={`/blog/${slide.id}`}>
                                                <span>
                                                    read more
                                                </span>
                                            </Link>
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