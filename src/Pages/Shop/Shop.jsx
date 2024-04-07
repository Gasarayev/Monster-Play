import React from 'react'
import ShopSlide from './ShopSlide'
import Navbar from '../../Layout/Navbar'
import ShopProductList from './ShopProductList'
import productSlideJson from '../../json/caruselProduct.json'

function Shop() {
    return (

        <>
            <Navbar />
            <ShopSlide />
            <ShopProductList productSlideJson={productSlideJson} />

        </>
    )
}

export default Shop