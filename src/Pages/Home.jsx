import React from 'react'
import '../Style/PagesStyle/Home.css'
import { BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsWhatsapp } from "react-icons/bs";

const Home = () => {
  return (
    <div className=''>
        <div className='home__main '>
        <div>
        <h1 className='home__heading'>I' am <span className='home__txt'>Hazrat</span> Zahid</h1>
          <h3 className='home__heading2' >Work in React JS</h3>
          <div className='flex mt-8 gap-5 '>

          <p className='text-2xl flex gap-5 home__icons animate-bounce'><BsFacebook className='f__book'/>  </p>
           <p className='text-2xl  home__icons animate-bounce'><BsInstagram className='f__book'/></p>
          <p className='text-2xl  home__icons animate-bounce'><BsTwitter className='f__book'/></p>
          <p className='text-2xl  home__icons animate-bounce'><BsLinkedin className='f__book'/></p>
          <p className='text-2xl  home__icons animate-bounce'><BsWhatsapp className='f__book'/></p> 
          </div>
          <button type='button' className='mt-10 Home__btn'>Hire me</button>
         

        </div>

          
        </div>
     
    </div>
  )
}

export default Home