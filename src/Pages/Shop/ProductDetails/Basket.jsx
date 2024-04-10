import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../../Layout/Navbar';
import "../shop_css/basket.css"
import { addToCart, decreaseCart, removeFromCart } from '../../../features/cartSlice';


function Basket() {

    const dispatch = useDispatch();

    const handleDecraeseCart = (cartItem) => {

        dispatch(decreaseCart(cartItem))

    }

    const handleIncreaseCart = (cartItem) =>{
        dispatch(addToCart(cartItem))
    }

    const handleRemoveCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem))
    }

    const cart = useSelector((state) => state.cart)
    return (
        <>
            <Navbar />
            <div className="basket">


                {cart.cartItems?.map(cartItem => (

                    <div className='basket_myCard' key={cartItem.id} >

                        <img src={cartItem.img} alt={cartItem.title} />
                        <div className='basket_myCard-content'>
                            <h3>{cartItem.title}</h3>


                            <p><span onClick={() => handleDecraeseCart(cartItem)}>-</span>
                                Count: {cartItem.cartQuantity}
                                <span onClick={()=> handleIncreaseCart(cartItem)}>+</span>
                            </p>

                            <p>Price: <span>{cartItem.newPrice}$ </span></p>
                            <p>Total Price: <span>{cartItem.newPrice * cartItem.cartQuantity}</span></p>
                            <p>About: <span>{cartItem.desc}</span></p>


                        </div>

                        <button onClick={()=> handleRemoveCart(cartItem)}>x</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Basket;