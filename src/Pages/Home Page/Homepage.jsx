import React from 'react';
import Navbar from '../../Layout/Navbar';
import Headsection from './Headsection';
import PauseOnHover from '../../Layout/PauseOnHover';
import slides from "../../json/caruselPics.json";
import ProductSlide from '../../Layout/ProductSlide';
import productSlideJson from '../../json/caruselProduct.json';
import NewsSection from './NewsSection';
import SlideLogo from './SlideLogo';
import partnersLogo from '../../json/partnersLogo.json';
import ContactSection from './ContactSection';
import UsersInfo from './UsersInfo';
import Footer from './Footer';



function Homepage() {

    return (
        <>
            <Navbar />
            <Headsection />
            <PauseOnHover slides={slides} />
            <ProductSlide productSlideJson={productSlideJson} />
            <NewsSection slides={slides} />
            <SlideLogo parnersLogo={partnersLogo} />
            <ContactSection />
            <UsersInfo />
            <Footer />

        </>
    );
}

export default Homepage;