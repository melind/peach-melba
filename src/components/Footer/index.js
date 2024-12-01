import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


const Footer = () => {
  return (
    <div className="footer">
     <div>
      <p>
        <a href="https://www.linkedin.com/in/melimendy/" target="_blank">LinkedIn</a>
        <div className='surlignage_footer'></div>
      </p>
      <p>
        <a href="https://www.instagram.com/miss_pechemelba/" target="_blank">Instagram</a>
        <div className='surlignage_footer'></div>
      </p>
      </div> 

      <div>
      <p>
        <Link to="/fr/mentions-legales"> Mentions Legales</Link>
        <div className='surlignage_footer'></div>
      </p>
      
    
      <p>melinda@pechemelba.fr</p>
        <div className='surlignage_footer'></div>
        </div>  
    </div>
  );
}

export default Footer;  