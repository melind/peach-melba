import React from 'react';
import './index.css';
import Footer from '../Footer';
import logo1 from '../../icones/logo1.svg';
import logo2 from '../../icones/logo2.svg';
import logo1bis from '../../icones/logo1+fond.svg';
import logo2bis from '../../icones/logo2+fond.svg';
import fond from '../../icones/fond.svg';
import peche1 from '../../icones/peche1.svg';
import peche2 from '../../icones/peche2.svg';
import toque from '../../icones/toque.svg';
import mijote from '../../icones/mijote.svg';
import react from '../../icones/react.svg';
import node from '../../icones/node.svg';
import mongodb from '../../icones/mongodb.svg';
import tw from '../../images/tw.svg';
import perso from '../../images/perso.svg';


/*  <img src={logo1} width="500"/>
             <h1 className="t ">
                <p id="P">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p>   
             </h1>
           */
const Home = () => {

    return (
        <div className="hom">
           <div className="nav"></div>
           <div className="icone fadeIn">
             <img src={peche2} width="200"/>
           </div>
           <div className="content">
            <section className="presentation"><p> Hello, <br/> I'm peche melba a web developer </p>

            </section>
            <section className="skills">  <h1>Skills </h1>
                 <div className="list">
                 <div className="position one shape"><img src={mongodb} width="150"/></div>
                 <div className="position two shape"><img src={node} width="150"/></div>
                  <div className="position three shape"><img src={react} width="110"/><h2>React</h2></div>
                  </div>
                  
            </section>
            <section className="experiences"> <h1>Web Experiences</h1>
                <div className="xps">

                    <div className="xp"> <img src={peche1} width="200" className="wiggle"/>
                      <div> 
                        <h3>Developer full stack JS</h3>
                        <p> 
                            End of training project with O'clock <br/>
                            Specifications wrighting, use cases, sequence diagram.<br/>
                            Development the website using Javascript(React/Node) hosted on Amazon EC2. <br/>Réalisation de tests unitaires.
                        </p>
                      </div>
                    </div>

                    <div className="xp"> <img src={toque} width="200" className="pulse"/> 
                      <div>  
                        <h3>Project Manager (e-commerce website)</h3> 
                        <p>Student Project with Simplon <br/>
                            Using Trello as project management tool.<br/>
                            Assignment and follow-up of tasks of the different members of the team.<br/>
                        </p>
                      </div>
                    </div>

                    <div className="xp"> <img src={mijote} width="200" className="floater"/>
                      <div>
                        <h3>Développeur back-end (Forum)</h3>
                        <p>Student Project with Simplon <br/>
                            Back-end development using php.<br/>
                            Data persistance and creating a database using phpmyadmin.
                        </p>
                     </div>
                    </div>

                </div>
            </section>


            <section className="realisation"> <h1>Projects</h1>
                <div className="projects">
                <div className="project  position"><img src={tw} width="350"/><h3>To watch</h3><a href="http://www.to-watch.info">www.to-watch.info</a></div>
                <div className="project position"><br/><img src={perso} width="350"/><h3>Luminaris</h3></div>
                
                </div>
            </section>
         </div>
        <Footer />

        </div>
    )
}
export default Home;