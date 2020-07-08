import React from 'react';
import './index.css';

import logo1 from '../../icones/logo1.svg';
import logo2 from '../../icones/logo2.svg';
import logo1bis from '../../icones/logo1+fond.svg';
import logo2bis from '../../icones/logo2+fond.svg';
import peche1 from '../../icones/peche1.svg';
import fond from '../../icones/fond.svg';
/* <div id="fond">  </div>
  <p id="p">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p> */
const Test = () => {

    return (
        
       
        <div className="load">
        <div className="heartbeat"> <img src={peche1} width="220"/> </div>
         <div className="spinner"> <img src={peche1} width="220"/> </div>
        </div>
        
    )
}
export default Test;