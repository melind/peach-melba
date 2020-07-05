import React from 'react';
import './index.css';

import logo1 from '../../icones/logo1.svg';
import logo2 from '../../icones/logo2.svg';
import fond from '../../icones/fond.svg';
import peche1 from '../../icones/peche1.svg';
import peche2 from '../../icones/peche2.svg';
import toque from '../../icones/toque.svg';
import mijote from '../../icones/mijote.svg';
/* <div id="fond">  </div>
  <p id="p">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p> */
const Home = () => {

    return (
        <div className="hom">
        <div className="nav"></div>    
         <div className="name">
             <h1 className="t">
                <p id="peche">Peche.</p><p id="melba">melba()</p>
                <br/>
                <p id="p">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p>
                <br/>
                 <p id="pt">P</p><p id="et">e</p><p id="ct">c</p><p id="ht">h</p><p id="eet">e</p><p id="pointt">.</p>
                 <p id="mt">m</p><p id="eeet">e</p><p id="lt">l</p><p id="bt">b</p><p id="at">a</p><p id="()t">()</p>
             </h1>

             
         </div>

         <div className="content">
            <section className="presentation"><p> Hello, <br/> I'm peche melba a web developer </p></section>
            <section className="skills"> skill React Nodejs
                 <div className="list">
                 <div className="skill one"></div>
                 <div className="skill two"></div>
                  <div className="skill three"></div>
                  </div>
            </section>
            <section className="cursus"> parcours 
                <div className="xps">
                 <div className="xp"> <img src={peche1} width="200"/> <p>déveloper full stack</p></div>
                 <div className="xp"> <img src={peche2} width="200"/> <p>déveloper full stack</p> </div>
                 <div className="xp"> <img src={toque} width="200"/> <p>déveloper full stack</p></div>
                 <div className="xp"> <img src={mijote} width="200"/> <p>déveloper full stack</p> </div>
                </div>
            </section>


            <section className="realisation"> projet 
                <div className="projects">
                <div className="project"></div>
                <div className="project"></div>
                </div>
            </section>
         </div>

        </div>
    )
}
export default Home;