import React from 'react';
import {Link} from 'react-router-dom';
import twitter from '../../icones/twitter.svg';
import github from '../../icones/github.svg';
import linkedin from '../../icones/li.png';
import './index.css';


const Footer = () => {
  return (
    <div className="footer">
      
      <a href="https://www.linkedin.com/in/melimendy/" target="_blank"><img src={linkedin} alt=" linkedin logo" width="50"/></a><br/><br/>
     
     
      <a href="https://pechemelba.tunetoo.com/" target="_blank">Goodies </a> <Link to="/mentionsLegales"> Mentions Legales</Link>
      
    </div>
  );
}

export default Footer;