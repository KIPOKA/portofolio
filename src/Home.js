import React from 'react';
import './Home.css';
import logo from "./img/logo.jpeg";


function Home(){
    return(
        <div className="home"> 
                <div className="home_bg">
                    <div className="header d__flex align__items__center pxy__30">
                        <div className="logo">
                            <img src={logo} alt=""/> 
                        </div>
                        <div className="navigation pxy__30">
                            <ul className="navbar d__flex">
                                <a href="#Home"> <li className="nav__items mx__15">Home</li></a>
                                <a href="#Services"> <li className="nav__items mx__15">Services</li></a>
                                <a href="#Portofolio"> <li className="nav__items mx__15">Portofolio</li></a>
                                <a href="#Blog"> <li className="nav__items mx__15">Blog</li></a>
                                <a href="#About"> <li className="nav__items mx__15">About</li></a>
                                <a href="#Contact"> <li className="nav__items mx__15">Contact </li></a>

                            </ul>

                        </div>
                    </div>
                <div className="container">
                        <div className="home__content">
                            <div className="home__meta pz__10">
                                <h1 className="home__text"> Welcome to my world of adventurer</h1>
                            </div>
                            <h2 className="home_text pz__10">
                                Hi,<br/>
                                I am Katabe Kipoka 
                            </h2>
                            <h3 className="home_text sweet pz__10"> 
                                Java, Software  Developer
                            </h3>
                            <h4 className="home_text pz__10"> 
                                Based in South Africa
                            </h4>
                        </div>

                </div>
                </div>

        </div>
    )
}
export default Home;