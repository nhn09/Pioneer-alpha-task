import React from 'react'
import '../../../src/App.css'
import NavBarElements from '../navbar/NavBar'

const Header = () => {
    return (
        <header className='center-header' id='news'>  
             <div className='links'>
                 <div className='space-links'></div>
                 <div className='Link-box'>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-square" ></i>
                  <i className="fab fa-dribbble"></i>
                 </div>
                   

              </div>

              <div className='news-name' >NEWS</div>
              <NavBarElements/>

             
        </header>
        
    )
}

export default Header

