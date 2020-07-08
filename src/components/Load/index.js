import React from 'react';
import './index.css';

import logo1 from '../../icones/logo1.svg';
import logo2 from '../../icones/logo2.svg';
import logo1bis from '../../icones/logo1+fond.svg';
import logo2bis from '../../icones/logo2+fond.svg';
import peche1 from '../../icones/peche1.svg';
import fond from '../../icones/fond.svg';
/*  <div className="fadeOut"> <img src={peche1} width="420"/> </div> */
const Load = () => {

    return (
        
       
        <div className="load">
        
          <div className=" brand shaped rotateInLeft">
        <img src={logo1} width="500"/>
             <h1 className="t ">
                <p id="P">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p>   
             </h1>
            </div>
        </div>
        
    )
}
export default Load;