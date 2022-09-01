import React from 'react';
import './Home.css';
import logo from "./asset/logo.jpeg";


function Home(){
    return(
        <div className="home">

                <div className="home_bg">
                    <div className="header d_flex align_items_center pxy_30">
                        <div className="logo">
                            <img src={logo} alt=""/> 
                        </div>
                        <div className='navigation'>
                            <ul className='navbar'>
                                <a href='#Home'> <li className='nav_items mx_15'>Home</li></a>
                                <a href='#Home'> <li className='nav_items mx_15'>Home</li></a>
                                <a href='#Home'> <li className='nav_items mx_15'>Home</li></a>
                                <a href='#Home'> <li className='nav_items mx_15'>Home</li></a>
                                <a href='#Home'> <li className='nav_items mx_15'>Home</li></a>

                            </ul>

                        </div>
                    </div>
                </div>

        </div>
    )
}
export default Home;