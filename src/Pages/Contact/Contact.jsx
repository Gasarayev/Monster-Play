import React from 'react'
import "./contactPage_Css/contact.css"
import Navbar from '../../Layout/Navbar'
import Footer from '../Home Page/Footer'
import WorldMap from './WorldMap'
import ContactSection from './ContactSection'


function Contact() {
    return (
        <>
            <Navbar />
            <WorldMap />
            <ContactSection/>
            <Footer />
        </>
    )
}

export default Contact