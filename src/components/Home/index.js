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
import chantilly from '../../icones/chantilly.svg';
import chantillyS from '../../icones/chantillySimplifiée.svg';
import tw from '../../images/tw.svg';
import perso from '../../images/perso.svg';


/*  <img src={logo1} width="500"/><div className="cursusBackground"></div>
             <h1 className="t ">
                <p id="P">P</p><p id="e">e</p><p id="c">c</p><p id="h">h</p><p id="ee">e</p><p id="point">.</p>
                 <p id="m">m</p><p id="eee">e</p><p id="l">l</p><p id="b">b</p><p id="a">a</p><p id="()">()</p>   
             </h1>
           */
const Home = () => {

    return (
        <div className="hom">
                   <div className="nav"></div>
            
                   <div className="presentation">
            
                              <div className="presentationBackground"></div>
            
                              <div className="presentationContent">
            
                                           <div className="icone fadeIn">
                                             <img src={peche2} width="200"/>
                                           </div>
                                           <p> Hello,  I'm peche melba a web developer  </p>
            
                              </div>
            
                    </div>
            
                   <div className="mainContent">
            
                         <div className="background"></div>
                    
                         <div  className="image"></div>
            
                          <section className="skills">  
            
                               <h1>Skills </h1>
                               <div className="list">
            
                                  <div className="position one shape"><img src={mongodb} width="150"/></div> <div className="positionTwo four">Mongoose</div>
                                  <div className="position two shape"><img src={node} width="150"/></div><div className="positionTwo five ">ExpressJS</div>
                                  <div className="position three shape"><img src={react} width="110"/><h2>React</h2></div><div className="positionTwo six ">Redux</div>
            
                                </div>
                          </section>
            
            
                          <section className="experiences"> 
                          <div className="experiencesBackground"></div>
            
            
            
                              <div className="xps"><h1 className="h2">Web Experiences</h1>
                                <div  className="xpTransition"></div>
            
            
                                  <div className="xp"> <img src={peche1} width="150" className="wiggle"/>
            
                                    <div> 
                                      <h4>Developer full stack JS</h4>
                                      <p> 
                                          End of training project with O'clock <br/>
                                          Specifications wrighting, use cases, sequence diagram.<br/>
                                          Development the website using Javascript(React/Node) hosted on Amazon EC2. <br/>Réalisation de tests unitaires.
                                      </p>
                                    </div>
            
                                  </div>
            
                                  <div className="xp"> <img src={toque} width="150" className="pulse"/> 
            
                                    <div>  
                                      <h4>Project Manager (e-commerce website)</h4> 
                                      <p>Student Project with Simplon <br/>
                                          Using Trello as project management tool.<br/>
                                          Assignment and follow-up of tasks of the different members of the team.<br/>
                                      </p>
                                    </div>
            
                                  </div>
            
                                  <div className="xp"> <img src={mijote} width="150" className="floater"/>
            
                                    <div>
                                      <h4>Développeur back-end (Forum)</h4>
                                      <p>Student Project with Simplon <br/>
                                          Back-end development using php.<br/>
                                          Data persistance and creating a database using phpmyadmin.
                                      </p>
                                   </div>
            
                                  </div>
            
                              </div>
                          </section>
            
                          <section className="cursus"> 
            
                          <div className="cursusBackground"></div>
            
                          <h1>Cursus</h1>
            
                          <div className="cursusTransition"></div>
            
                            <div className="list">
            
                              <div className="item">
            
                                         <div className="cursusContain position">
                                              
                                              <div className="school"> O'clock </div>
                                              <div className="underline"></div>
                                              <h5>Décembre 2018 à Décembre 2019</h5> 
            
                                        </div>
                                        <p className="position">Concepteur Développeur web (titre niveau II)</p>
            
                                </div>
            
                                <div className="item">
            
                                         <div className="cursusContain position"> 
             
                                              <div className="school"> Simplon</div>  
                                              <div className="underline"></div>
                                              <h5>Avril 2018 à Juillet 2018 </h5>
            
                                        </div>
                                        <p className="position">Coder et déployer une application simple</p>
                                </div>
            
                                <div className="item">
                                        <div className="cursusContain position ">
            
                                             <div className="school">UPEC </div> 
                                             <div className="underline"></div>
                                             <h5>Septembre 2009 à Septembre 2012</h5>
            
                                       </div>
                                       <p className="position">Licence Science de la vie et de la terre</p>
                                </div>
            
                            </div>
            
                          </section>
            
                          <section className="realisation">
            
                              <h1>Projects</h1>
            
                              <div className="realisationBackground"></div>
                              <div className="projects">
            
                                   <div className="project position"><img src={tw} width="300"/><h3>To watch</h3><a href="http://www.to-watch.info">www.to-watch.info</a></div>
                                   <div className="project position"><img src={perso} width="300"/><h3>Luminaris</h3><a href="https://github.com/melind/luminaires">Github Projet</a></div>
            
                              </div>
            
                          </section>
                    
                 </div>
                 <Footer />

        </div>
    )
}
export default Home;