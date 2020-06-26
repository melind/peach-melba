import React from 'react';
import './index.css';

import logo1 from '../../icones/logo1.svg';
import logo2 from '../../icones/logo2.svg';
import fond from '../../icones/fond.svg';
/* <div id="fond">  </div>
  <p id="p">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p> */
const Home = () => {

    return (
        <div className="home">
       
         <div className="title">
             <h1 className="t">
                <p id="peche">Peche.</p><p id="melba">melba</p>
               
             </h1></div>

         <div className="logo">
         <div className="logo1"> <img src={logo1} width="220"/> </div>
         <div className="logo2"> <img src={logo2} width="220"/> </div>
         </div>

        </div>
    )
}
export default Home;