import React from 'react'
import './contactPage_Css/contactSection.css'

function ContactSection() {
    return (
        <>
            <div className='contact'>
                <div className='contact_container'>
                    <div className='contact_text'>
                        <h2>Contact Info</h2>
                        <p className='place_location'>
                            Azerbaijan Zagatala. Faig Amirov Gasarayev's Home
                        </p>
                        <div className='contact_text_icons'>
                            <p>
                                <i class="fa-solid fa-phone"></i> <span>+994 55 970 7978</span>
                            </p>
                            <p>
                                <i class="fa-regular fa-envelope"></i> <span>gasarayev.emil@gmail.com</span>
                            </p>
                            <p>
                                <i class="fa-solid fa-link"></i> <span>gasar.info</span>
                            </p>

                        </div>
                    </div>

                    <div className='contactForm'>
                        <div>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' />
                        </div>
                        <textarea placeholder='Message'></textarea>

                        <button>Submit</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactSection