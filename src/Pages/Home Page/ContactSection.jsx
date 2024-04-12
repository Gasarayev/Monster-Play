import React from 'react'
import "./homePage_Css/contactSection.css"

function ContactSection() {
    return (
        <>
            <div className='contactSection'>
                <div className='contactSection_container'>
                    <div className='contactText'>
                        <h2>Contact Us</h2>
                        <p>
                            After moved, male won't Moveth moveth fruitful don't
                            forth you bearing morning made male without
                            life be blessed rule stars divided two.
                            Firmament of, him she'd good of his morning.
                        </p>
                        <div className='contactText_icons'>
                            <span><i class="fa-brands fa-playstation"></i></span>
                            <span><i class="fa-brands fa-xbox"></i></span>
                            <span><i class="fa-brands fa-steam-symbol"></i></span>

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