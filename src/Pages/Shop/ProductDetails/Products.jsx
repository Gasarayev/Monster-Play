// Products.jsx
import React from 'react';

function Products({ product }) {
  return (
    <div className="product-container">


        
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} />
      <p>{product.newPrice}</p>
      <p>{product.desc}</p>
    
    </div>
  );
}

export default Products;
