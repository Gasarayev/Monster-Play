import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../Home Page/Footer';
import './blog_Css/bloginfo.css';

function BlogInfo({ slides }) {
    const { id } = useParams();
    const blog = slides.find((slide) => slide.id === parseInt(id));

    return (
        <>
            <Navbar />


            <div className='blogInfo_head'>

                <div className='blogInfo_bgOpacity'>
                    <div className='blogInfo_bgOpacity_contain'>
                        <h1>{blog.title}</h1>
                    </div>

                </div>
            </div>

            <div className="blogInfo">
                <div className='blogInfo_contain'>
                    <div className='blogInfo_about'>
                        <p className='blogInfo_contain_title'>{blog.title}</p>
                        <div className='blogInfo_videoImg'>
                            <img src={blog.img} alt={blog.title} />
                            <iframe
                                src={blog.video}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen></iframe>
                        </div>

                        <div className='blogInfo_description'>
                            <p>{blog.descBlog}</p>
                            <p>{blog.descBlog2}</p>
                            <p>{blog.descBlog3}</p>
                        </div>

                        <div className='blogInfo_raiting_child'>
                            <div className='blogInfo_raiting_numb'>
                                <span>
                                    {blog.rating}
                                </span>
                            </div>

                            <div className='good_section'>
                                <h5>Good</h5>
                                <p>
                                    <span><i class="fa-solid fa-plus"></i></span>
                                    {blog.good}
                                </p>

                                <p>
                                    <span><i class="fa-solid fa-plus"></i></span>
                                    {blog.good}
                                </p>
                                <p>
                                    <span><i class="fa-solid fa-plus"></i></span>
                                    {blog.good}
                                </p>
                            </div>

                            <div className='good_section'>
                                <h5>Bad</h5>

                                <p>
                                    <span><i class="fa-solid fa-minus"></i></span>
                                    {blog.bad}
                                </p>

                            </div>
                        </div>


                    </div>

                    <div className='blogInfo_raiting'>

                        <div className='blogInfo_raiting_popular'>
                            <h5>Popular Read</h5>

                            <div>
                                <h4>Black Mesa</h4>
                                <p>Years. Female, rule lights is gathering made upon image moved.</p>
                            </div>
                            <div>
                                <h4>Nioh 2</h4>
                                <p>Dominion there together winged lesser gathered stars be given also.</p>
                            </div>
                            <div>
                                <h4>Death Stranding</h4>
                                <p>Seasons one void them morning years creature moveth make shall.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <Footer />
        </>
    );
}

export default BlogInfo;
