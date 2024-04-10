import React, { useState, useEffect } from 'react'
import './css/navbar.css'
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from 'react-router-dom';
import Basket from '../Pages/Shop/ProductDetails/Basket';



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const [isBasketOpen, setIsBasketOpen] = useState(false);

    const toggleBasket = () => {
        setIsBasketOpen(!isBasketOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <>

            <nav>
                <div className='menu_logo'>
                    <NavLink to={"/"}>
                        <img src={"https://html.nkdev.info/monsterplay/assets/images/logo.svg"} alt="logo" />
                    </NavLink>

                    <ul className={isMenuOpen ? 'burgerMenu active' : 'burgerMenuA'}>
                        <NavLink to={"/blog"}>
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to={"/shop"}>
                            <li>Shop</li>
                        </NavLink>


                        <li>About</li>
                        <NavLink to={"/contact-us"}><li>Contact</li></NavLink>


                        <div className='mobile_icons'>
                            <div>
                                <FiShoppingCart />
                            </div>
                            <div>
                                <FiUser />
                            </div>
                        </div>
                    </ul>
                </div>

                <div className='icons_part'>
                    <NavLink to={"/basket"}>

                        <FiShoppingCart />
                    </NavLink>
                    <div>
                        <FiUser />
                    </div>
                </div>

                <div className='hamburger_menu' onClick={toggleMenu}>
                    <RxHamburgerMenu />
                </div>

            </nav >


        </>
    )
}

export default Navbar