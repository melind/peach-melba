import React from 'react';
import './index.css';
import logo1 from '../../icones/logo1.svg';


const Logo = () => {

    return (
        
       
        <div className="logo">
           
                          <img src={logo1} width="100" alt="peche melba icone"/>
                           <h2 className="brand-logo ">
                               <p id="P2">Peche</p><p id="point2">.</p>
                               <p id="m2">melba</p><p id="()">()</p>   
                          </h2>
          
        </div>
        
    )
}
export default Logo;