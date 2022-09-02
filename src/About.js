import React from 'react'
import './About.css';
import aboutImage from './img/about.jpeg'

function About() {
  return (
    <div className="about compount__space">
      <div className="container">
          <div className="row">
              <div className="col__2">
                  <img src={aboutImage} alt="" className="about__img"/>
              </div> 
          </div>

      </div>
    </div>
  )
}

export default About
 