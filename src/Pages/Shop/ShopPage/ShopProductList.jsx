import React, { useState } from 'react'
import "../shop_css/shopproductlist.css"
import { Link } from 'react-router-dom';

function ShopProductList({ productSlideJson }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = productSlideJson.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <>
            <div className='shopList_input'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Enter a search term"
                />
            </div>

            <div className='shopProductList'>
                {filteredProducts.map((product) => (
                    <div className="caruselImg_Parent" key={product.id}>

                        <Link to={`/shop/product-details/${product.id}`}>

                            <div
                                className="carusel_img"
                                style={{ backgroundImage: `url(${product.img})` }}
                            >
                                {product.discount && (
                                    <p className="carusel_productDsc">{product.discount}</p>
                                )}
                            </div>
                        </Link>
                        <div className="carusel_title">
                            <Link to={`/shop/product-details/${product.id}`}>
                                <p>{product.title}</p>
                            </Link>
                            {product.stars == 4 && (
                                <div className="carusel_starsIcon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                            )}
                            {product.stars == 5 && (
                                <div className="carusel_starsIcon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                            )}

                        </div>

                        {(
                            <div className="carusel_Price">
                                <div className="carusel_newPrice">
                                    {product.newPrice} <span>$</span>
                                </div>
                                <div className="carusel_oldPrice">
                                    {product.oldPrice}
                                </div>
                            </div>

                        )}

                    </div>

                ))}
            </div>
        </>
    )
}

export default ShopProductList