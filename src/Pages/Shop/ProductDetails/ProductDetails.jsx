import React from 'react';
import { useParams } from 'react-router-dom';
import "../shop_css/productdetails.css";
import Navbar from '../../../Layout/Navbar';
import Footer from '../../Home Page/Footer';
import ProductSlide from '../../../Layout/ProductSlide';
import Products from './Products';

function ProductDetails({ product }) {
  const { id } = useParams();
  const productData = product.find(item => item.id === parseInt(id));
  return (
    <>
      <Navbar />
      <Products product={productData} />
      <ProductSlide productSlideJson={product} />
      <Footer />
    </>
  );
}

export default ProductDetails;
