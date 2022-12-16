import React from 'react'
import oshi from './oshi1.jpeg'
import shaurya from './Shaurya.jpeg'
import "./about.css"

const about = () => {
  return (
    <section id="about">
        <div class="facultyco" data-aos="fade-up" data-aos-duration="1500">
            <h1>ABOUT TEAM</h1>
            <div class="container1">
            <div class="tile1">
                <img src={shaurya} alt="" height="230"/>
                <p>Shaurya Verma</p>
                <p>Contact:</p>
                <a href=""></a>
                <p>7078660935</p>
            </div>
            <div class="tile1">
                <img src={oshi} alt="" height="234"/>
                <p>Oshi Raghav</p>
                <p>Contact:</p>
                <p>81787****</p>
            </div>
            </div>
        </div>
        
    </section>
  )
}


    

export default about
