import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../shop_css/basket.css"
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } from '../../../features/cartSlice';
import { Link } from 'react-router-dom';


function Basket() {

    const dispatch = useDispatch();

    const handleDecraeseCart = (cartItem) => {

        dispatch(decreaseCart(cartItem))

    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleRemoveCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }



    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])


    return (
        <>

            {cart.cartItems.length === 0 ? (

                <div className='basket_empty'>
                    <p>Your cart is currently empty.</p>
                    <Link to={"/shop"}>
                        <p className='basket_emptyLink'>Start Shopping</p>
                    </Link>
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
                                <p className='basket_myCard_about'>About: <span>{cartItem.desc}</span></p>


                            </div>

                            <span className='remove_icon' onClick={() => handleRemoveCart(cartItem)}>
                                <i class="fa-solid fa-xmark"></i>
                            </span>

                        </div>



                    ))}

                    <div className='basketTotalClear'>

                        <button onClick={() => handleClearCart()}>Clear</button>
                        <h3>

                            Total price: <span> {cart.cartTotalAmount}$ </span>
                        </h3>

                    </div>


                </div>

            )}



        </>
    );
}

export default Basket;