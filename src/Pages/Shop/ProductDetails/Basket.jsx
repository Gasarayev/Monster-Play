import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../shop_css/basket.css"
import { addToCart, decreaseCart, removeFromCart, clearCart } from '../../../features/cartSlice';


function Basket() {

    const dispatch = useDispatch();

    const handleDecraeseCart = (cartItem) => {

        dispatch(decreaseCart(cartItem))

    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleRemoveCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }



    const cart = useSelector((state) => state.cart)
    return (
        <>

            {cart.cartItems.length === 0 ? (

                <div className='basket_empty'>
                    <p>Your cart is currently empty</p>

                </div>
            ) : (

                <div className="basket">


                    {cart.cartItems?.map(cartItem => (

                        <div className='basket_myCard' key={cartItem.id} >

                            <img src={cartItem.img} alt={cartItem.title} />
                            <div className='basket_myCard-content'>
                                <h3>{cartItem.title}</h3>


                                <p>
                                    <span onClick={() => handleDecraeseCart(cartItem)}>
                                        <i class="fa-solid fa-minus"></i>
                                    </span>
                                    <span className='basket_count'>
                                        Count: {cartItem.cartQuantity}
                                    </span>
                                    <span onClick={() => handleIncreaseCart(cartItem)}>
                                        <i class="fa-solid fa-plus"></i>
                                    </span>
                                </p>

                                <p>Price: <span>{cartItem.newPrice} $ </span></p>
                                <p>Total Price: <span>{cartItem.newPrice * cartItem.cartQuantity} $</span></p>
                                <p>About: <span>{cartItem.desc}</span></p>


                            </div>

                            <span className='remove_icon' onClick={() => handleRemoveCart()}>
                                <i class="fa-solid fa-xmark"></i>
                            </span>

                        </div>



                    ))}

                    <div >

                        <p>

                            Total price:  ${cart.cartTotalAmount}
                        </p>

                        <button onClick={() => handleClearCart()}>Clear</button>
                    </div>


                </div>

            )}



        </>
    );
}

export default Basket;