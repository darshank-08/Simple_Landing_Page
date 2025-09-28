import React from 'react'
import flipkart from "../Assets/flipkart.png"
import amazon from "../Assets/amazon-mini-logo.png"
import shoe from "../Assets/shoe_image.png"

function Hero() {
  return (
    <main className="hero container">
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            

            <div className='btn-container'>
                <button className='shop-btn'>Shop Now</button>
                <button className='Category-btn'>Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>

                <div className="brands">
                    <img src={flipkart} alt="" />
                    <img src={amazon} alt="" />
                </div>
            </div>
        </div>

        <div className='hero-image'>
            <img src={shoe} alt="" />
        </div>
    </main>
  )
}

export default Hero