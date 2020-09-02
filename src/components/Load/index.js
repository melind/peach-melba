import React from 'react';
import './index.css';

import logo1 from '../../icones/logo1.svg';
import Brand from '../Brand';


const Load = () => {

    return (
        
       
        <div className="load">
        
          <div className=" brand shaped rotateInLeft">
                   <img src={logo1} width="500" alt="pech melba logo"/>       
         </div>
            < Brand />
        </div>
        
    )
}
export default Load;