import React from 'react'
import b1image from '../Image/dad3.jpg'

const About = () => {
  return (
    <div id ="about">
    <div className='about'>
    <h1>About me</h1>
    <div className="page">
     <img src={b1image}></img>
 </div>
 <div className="par">
  <p>Hello! I’m  <span>Abebe Mersha </span>, a 54-year-old book lover whose  journey with books began at 19.<br/> Since then, I’ve been on a relentless quest to acquire new titles, believing that knowledge is invaluable.<br/>
My passion for books was so strong that I often borrowed money from friends and family to add to my collection.<br/> Financial constraints only fueled my determination to keep reading.<br/>
This passion hasn’t come without its challenges.<br/> My wife often reminds me to be practical with our finances, suggesting I spend money on necessities instead of new books. <br/>To keep the peace, I developed a little trick: I would hide my new purchases under a tree in our yard until she wasn’t around!<br/>
Today, my home is filled with books of every genre, each telling its own story.<br/> My library reflects a lifetime of curiosity and exploration.<br/>
Through my commitment to reading, I’ve gained insights that have enriched my life. <br/>My relationship with books is not just a hobby; it’s a lifelong passion that continues to define me. <br/>I hope to inspire others to embrace their own journeys into the world of literature!</p>
 </div>
 <button>Read More</button>
    </div>
    </div>
  )
}

export default About