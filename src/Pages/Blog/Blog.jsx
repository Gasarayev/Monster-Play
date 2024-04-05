import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../Home Page/Footer';
import './blog_Css/blog.css';

function Blog({ slides }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSlides = slides.filter((slide) =>
    slide.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      {/* Blogs */}

      <div className='blog_banner'>
        <div className='blog_banner_bgOpacity'>
          <div className='blog_banner_contain'>
            <h1>Blog</h1>
            <p>
              "Fruit moveth Lights may deep their, morning abundantly
              open first bring wherein. That over creeping Saying herb above,
              place wherein."
            </p>
          </div>
        </div>
      </div>

      <div className='blog_parent'>
        <div className='blog_left'>
          {filteredSlides.map((slide) => (
            <div className='blog' key={slide.id}>
              <Link to={`/blog/${slide.id}`}>
                <div className='blog_blackMesa'>


                  <img src={slide.img} alt={slide.title} />


                  <p className='blackMesa_title'>{slide.title}</p>
                  <p className='blackMesa_date'>
                    <span><i className="fa-regular fa-calendar"></i></span>
                    <span>{slide.date}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className='blog_right'>

          {/* Search */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter a search term"
          />


          {/* Popular News */}
          <h3>Popular News</h3>
          {slides.map((slide) => (
            <div className='blog_populars' key={slide.id}>
              {slide.popular && (
                <Link to={`/blog/${slide.id}`}>
                  <div className='popular_news'>
                    <img src={slide.img} alt={slide.title} />
                    <div className='popular_content'>
                      <p className='popular_content_title'>{slide.title}</p>
                      <p className='popular_content_date'>{slide.date}</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blog;
