import React from 'react';
import {Link} from 'react-router-dom';
import twitter from '../../icones/twitter.svg';
import github from '../../icones/github.svg';
import linkedin from '../../icones/li.png';
import './index.css';


const Footer = () => {
  return (
    <div className="footer">
      
      <a href="https://www.linkedin.com/in/melimendy/"><img src={linkedin} alt=" linkedin logo" width="50"/></a>
      <a href="https://github.com/melind"><img src={github} alt="github logo" width="50"/></a>
      <a href="https://twitter.com/MELIMENDY"><img src={twitter} alt="twitter logo" width="50"/></a>
      <p>Contact: melinda@pechemelba.fr</p>
      <Link to="/mentionsLegales">Mentions Legales</Link>
    </div>
  );
}

export default Footer;