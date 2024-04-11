import React from 'react'
import Basket from './Basket'
import Navbar from '../../../Layout/Navbar'
import Footer from '../../Home Page/Footer'
import ProductSlide from '../../../Layout/ProductSlide'



function BasketDetails({product}) {
    console.log(product)
    return (
        <>
            <Navbar />
            <Basket />
            <Footer/>
        </>
    )
}

export default BasketDetails