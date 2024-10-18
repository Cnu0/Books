import React from 'react'
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

function Contact() {
  return (
<div id ="contact">
  <div className="cont">  
    <h6>get in touch</h6>
  <h1>CONTACT </h1></div>
  

  
<div className="con">
  
  <h3><MdOutlineWifiCalling3 />+251912222622</h3>
  <h3> <email><MdEmail />abebemersha1921@gmail.com  </email></h3>
  <h3><FaFacebook /> Abebe Mersha </h3>

</div>
<div>
  <form className="contact-f">
  <label>Full Name:   <input type='text' placeholder='Enter Your Fullname' required></input></label><br/>
  <label>Email: <input type='email' placeholder='Please enter your email' required></input></label><br/>
  <label>Phone Number:<input type='phone number' placeholder='Enter Your Phone Number' required></input></label><br/>
  <textarea placeholder='If you have amessage  write it here' name='message'></textarea>
        <input type='submit' value='Send'/>
        </form>
</div>
   
</div>
  )
}

export default Contact

