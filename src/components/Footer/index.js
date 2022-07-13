import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className='reseaux_sociaux'>
        <a href="https://www.linkedin.com/in/melimendy/" target="_blank"><img src="https://cdn.cdnlogo.com/logos/l/78/linkedin-icon.svg" alt=" linkedin logo" width="50"/></a><br/><br/>
        <a href="https://www.behance.net/melimendy"><img src="https://cdn.cdnlogo.com/logos/b/29/behance.svg" width="50"/></a>
      </div>
        <a href="https://pechemelba.tunetoo.com/" target="_blank">Goodies </a> <br/><br/><Link to="/fr/mentions-legales"> Mentions Legales</Link>
     
    </div>
  );
}

export default Footer;