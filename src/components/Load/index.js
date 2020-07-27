import React from 'react';
import './index.css';

import logo1 from '../../icones/logo1.svg';



const Load = () => {

    return (
        
       
        <div className="load">
        
          <div className=" brand shaped rotateInLeft">
        <img src={logo1} width="500" alt="pech melba logo"/>
             <h1 className="brandName ">
                <p id="P">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p>   
             </h1>
            </div>
        </div>
        
    )
}
export default Load;