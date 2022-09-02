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
              <div className="col__2">
                  <h1 className="about__heading">
                      About Me!
                  </h1>
                  <div className="about__meta">
                      <p className='about__text p__color'>
                      The term CV is an abbreviation of the Latin word Curriculum Vitae, which is literally translated to “the course of your life”. 
                      A CV is a very in-depth document that describes your career journey step-by-step, including all sorts of personal information. 
                      You can look at the CV as a comprehensive description of everything you have ever done, all the achievements you are proud of,
                    and all the publications that bear your name.     
                      </p>
                      <p className='about__text p__color'>
                      The term CV is an abbreviation of the Latin word Curriculum Vitae, which is literally translated to “the course of your life”. 
                      A CV is a very in-depth document that describes your career journey step-by-step, including all sorts of personal information. 
                      You can look at the CV as a comprehensive description of everything you have ever done, all the achievements you are proud of,
                    and all the publications that bear your name.     
                      </p>
                      <div className="about__button d__flex align__items__center">
                          <a href="google.com"><button className="about btn pointer">Download CV</button></a>
                          <a href="google.com"><button className="about btn pointer">Hire me </button></a>


                      </div>
                  </div>
              </div>
          </div>

      </div>
    </div>
  )
}

export default About
 