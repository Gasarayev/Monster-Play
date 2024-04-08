import React from 'react'
import './homePage_Css/headSection.css'
import { Link } from 'react-router-dom'

function Headsection() {
  return (
    <>

      <section className='headSection'>
        <h1>Black Mesa</h1>
        <p>
          "Have beginning wherein spirit. Bearing unto. To after light.
          Good image can't without hath fly beast him fish firmament fish Face waters fly unto spirit i doesn't one waters divide."
        </p>
        <div>
          <Link to={`/blog/1`}>
            <button>Read More</button>
          </Link>


        </div>
      </section>

    </>
  )
}

export default Headsection