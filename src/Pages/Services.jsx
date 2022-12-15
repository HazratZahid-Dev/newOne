import React from 'react'
import '../Style/PagesStyle/Services.css'
// import img from '../images/p1.webp'

const Services = ({text,price,newPrice,btn__text,img}) => {
  return (
    <div className='gap-4 mt-10'>

<div class="container">
    
    <img src={img}/>
    <div class="card">
    <p id="perfume">Our Projects</p>
  
    <h1>Website<br/> Development <br/> in React js</h1>
  
    <p>{text}</p>
    <div class="price">
    <span id="amount">${price}</span>
    {/* <span id="discount">{newPrice}</span> */}
  </div>
    <button><svg width="15" height="11" xmlns="http://www.w3.org/2000/svg"><path  fill="#FFF"/></svg>{btn__text}</button>
  
    

  </div>
  </div>

    </div>
  )
}

export default Services