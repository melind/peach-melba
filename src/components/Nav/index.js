import React from 'react';
//import './index.css';
import Logo from '../Logo'; 
import logo1 from '../../icones/logo1.svg';

const show = function () {   
    let bar = document.getElementsByClassName("bar")[0];  
    bar.style.display= "flex"; 
    let hambNav = document.getElementsByClassName("hamburgerNav")[0];  
    hambNav.style.display= "none"; 
  }
  const hide = function () {  
    let bar = document.getElementsByClassName("bar")[0];   
    bar.style.display= "none"; 
    let hambNav = document.getElementsByClassName("hamburgerNav")[0];  
    hambNav.style.display= "flex"; 
    hambNav.style.position= "fixed"; 

  } 

const Nav = () => {
  return (
<div className="navBar" >
                <div className="nav" >
                <div className="tab">
                        < Logo  />
                     
                      <a href="#graphisme"><div>Graphisme</div></a>
                      <a href="#site"><div>Site web</div></a>
                      <a href="#prestations"><div>Prestations</div></a>
                      <a href="#propos"><div>À Propos</div></a>
                      <a href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank"><div>Contact</div></a>

                     
                </div>
            </div>
            <div className="nav-mobile"  >
              <div className="logo-mobile">
                      <img src={logo1} width="50" alt="peche melba icone"/>
                      < Logo />
              </div>
               <div className="hamburgerNav" onClick={show}>
                        <div className="menu"></div><div className="menu"></div><div className="menu">
               </div>
               </div>
               <a className='language contact_mobile' href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank" >Prendre contact ?</a>
                <div className="bar" >

                      <a href="#graphisme" className='a'><div>Graphisme</div></a>
                      <a href="#site" className='a'><div>Site web</div></a>
                      <a href="#webmarketing" className='a'><div>Web Marketing</div></a>
                      <a href="#prestations" className='a'><div>Prestations</div></a>
                      <a href="#propos" className='a'><div>À Propos</div></a>
                      <div className='a' onClick={hide}>X</div>
                </div>  

            </div> 
</div>
  );
}

export default Nav;