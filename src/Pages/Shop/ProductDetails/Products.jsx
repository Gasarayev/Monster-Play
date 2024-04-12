
import React from 'react';
import '../shop_css/products.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseCart } from '../../../features/cartSlice';


function Products({product}) {

    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    return (
        <div className="product">
            <div className='product_container'>

            {cart.cartItems?.map((cartItem) => {

                
            })}

                <h5>{product.title}</h5>
                <div className='product_imgPart'>
                    <div className='product_img'>
                        <img src={product.img} alt={product.title} />
                    </div>

                    <div className='product_content'>
                        <h1>
                            {product.title}
                        </h1>

                        {product.stars == 4 && (
                            <div className="product_starsIcon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        )}

                        {product.stars == 5 && (
                            <div className="product_starsIcon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        )}

                        <p className='product_price'>
                            {product.newPrice} <span>$</span>
                        </p>

                        <p>
                            {product.description}
                        </p>

                        <div className='product_count_part'>
                            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className='product_desc_info'>

                    <div className='product_description'>
                        <h5>description</h5>
                        <p className='product_description_text'>
                            {product.desc}
                        </p>
                        <p className='product_description_text'>
                            {product.desc2}
                        </p>
                        <p className='product_description_text'>
                            {product.desc3}
                        </p>
                        <p className='product_description_text'>
                            {product.desc4}
                        </p>
                    </div>

                    <div className='product_information'>
                        <h5>additional information</h5>
                        <div className='product_infoContain'>
                            <div className='product_informationType'>
                                <p>Colour</p>
                                <p>Headphone Fit</p>
                                <p>Item Dimension</p>
                                <p>Item Weight</p>
                                <p>Special Feature</p>
                            </div>
                            <div className='product_informationPro'>
                                <p>{product.colour}</p>
                                <p>{product.headphoneFit}</p>
                                <p>{product.ItemDimension}</p>
                                <p>{product.itemWeight}</p>
                                <p>{product.SpecialFeature}</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Products;
