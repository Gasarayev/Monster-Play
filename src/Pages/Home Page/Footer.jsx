import React from 'react'
import "./homePage_Css/footer.css"

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer_content'>
                    <div className='footer_contentChild'>
                        <div className='footer_iconsParent'>
                            <div className='footer_icons'>
                                <i class="fa-brands fa-discord"></i>
                            </div>
                            <p className='footer_text'>
                                Subscribe to Discord
                            </p>
                        </div>

                        <div className='footer_iconsParent'>
                            <div className='footer_icons'>
                                <i class="fa-brands fa-twitch"></i>
                            </div>
                            <p className='footer_text'>
                                Subscribe to Twich
                            </p>
                        </div>
                    </div>
                    <div className='footer_contentChild'>
                        <div className='footer_iconsParent'>
                            <div className='footer_icons'>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                            <p className='footer_text'>
                                Subscribe to Youtube
                            </p>
                        </div>

                        <div className='footer_iconsParent'>
                            <div className='footer_icons'>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <p className='footer_text'>
                                Subscribe to Twitter
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='creating'>
                <p>Create by Gasarayev</p>
            </div>
        </>
    )
}

export default Footer