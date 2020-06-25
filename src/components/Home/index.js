import React from 'react';
import './index.css';

import logo1 from '../../icones/logo1.svg';
import logo2 from '../../icones/logo2.svg';

const Home = () => {

    return (
        <div className="home">
         <div className="title">Peche.melba() </div>
         <div> <img src={logo1} width="220"/> </div>
        </div>
    )
}
export default Home;