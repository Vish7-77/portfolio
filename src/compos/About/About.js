import React from 'react'
import './About.scss'
import cine from "../img/cine.jpg"

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={cine} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right"> 
        <h1 className='a-title'>About me</h1>
        <p className="a-sub"> Myself Vishal gehlot, a Web-developer,Graphic-designer,cinematographer </p>
      <p className='a-desc'>
          you are just a step away from your best  
      </p>
      </div>
    </div> 
  )
}

export default About