import React, { useState } from 'react'
import "./shop_css/shopproductlist.css"

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
                {filteredProducts.map((carusel) => (
                    <div className="caruselImg_Parent" key={carusel.id}>

                        <div
                            className="carusel_img"
                            style={{ backgroundImage: `url(${carusel.img})` }}
                        >
                            {carusel.discount && (
                                <p className="carusel_productDsc">{carusel.discount}</p>
                            )}
                        </div>
                        <div className="carusel_title">
                            <p>{carusel.title}</p>

                            {carusel.stars == 4 && (
                                <div className="carusel_starsIcon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                            )}
                            {carusel.stars == 5 && (
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
                                    {carusel.newPrice}
                                </div>
                                <div className="carusel_oldPrice">
                                    {carusel.oldPrice}
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