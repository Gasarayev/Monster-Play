import React from 'react'
import "./homePage_Css/usersInfo.css"

function UsersInfo() {
    return (
        <>
            <div className='usersInfo'>

                <div className='usersInfo_container'>
                    <h2>
                        Why Users Trust Us
                    </h2>

                    <p className='usersInfo_text'>
                        All and. Green day waters appear lights, fish you'll called likeness midst have you May.
                        Lesser brought evening man she'd that. Replenish form wherein form midst. Good from forth together.
                    </p>

                    <div className='usersInfo_section'>
                        <div className='usersInfo_section_part'>
                            <div className='usersInfo_section_part_icons'>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>

                            <h3>Payment</h3>
                            <p>More than 10 payment systems</p>
                        </div>

                        <div className='usersInfo_section_part'>
                            <div className='usersInfo_section_part_icons'>
                                <i class="fa-solid fa-display"></i>
                            </div>

                            <h3>Games</h3>
                            <p>A large number of games</p>
                        </div>

                        <div className='usersInfo_section_part'>
                            <div className='usersInfo_section_part_icons'>
                                <i class="fa-solid fa-users"></i>
                            </div>

                            <h3>Community</h3>
                            <p>The largest gaming community</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UsersInfo