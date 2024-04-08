import React from 'react'
import ShopSlide from './ShopPage/ShopSlide'
import Navbar from '../../Layout/Navbar'
import ShopProductList from './ShopPage/ShopProductList'
import productSlideJson from '../../json/caruselProduct.json'
import Footer from '../Home Page/Footer'

function Shop() {
    return (

        <>
            <Navbar />
            <ShopSlide />
            <ShopProductList productSlideJson={productSlideJson} />
            <Footer/>

        </>
    )
}

export default Shop