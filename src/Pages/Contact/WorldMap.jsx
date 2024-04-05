import React from 'react'
import './contactPage_Css/worldMap.css'




function WorldMap() {

    return (

        <>
            <div className='location'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d394.62114030958134!2d46.6357621559386!3d41.62917842049478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2saz!4v1712049867152!5m2!1str!2saz" 
                    
                    style={{ border: '0' }}
                    allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
};

export default WorldMap