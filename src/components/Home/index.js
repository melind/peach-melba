import React, {useEffect} from 'react';
import './index.css';
import Footer from '../Footer';
import peche1 from '../../icones/peche1.svg';
import peche2 from '../../icones/peche2.svg';
import toque from '../../icones/toque.svg';
import mijote from '../../icones/mijote.svg';
import react from '../../icones/react.png';
import node from '../../icones/node.svg';
import mongodb from '../../icones/mongodb.svg';
import tw from '../../images/tw.svg';
import perso from '../../images/perso.svg';
import social from '../../images/social_design.jpg';
import article from '../../images/article_design.jpg';
import logo1 from '../../icones/logo1.svg';
import Logo from '../Logo';

    const show = function () {  
      let bar = document.getElementsByClassName("bar")[0];  
      bar.style.display= "flex"; 
      let hambNav = document.getElementsByClassName("hamburgerNav")[0];  
      hambNav.style.display= "none"; 
    }
    const hide = function () {  
      let bar = document.getElementsByClassName("bar")[0];   
      bar.style.display= "none"; 
      let hambNav = document.getElementsByClassName("hamburgerNav")[0];  
      hambNav.style.display= "flex"; 

    }

       
    
  
const Home = () => {

    return (
        <div className="hom" >
                  <div className="nav" >
                            <div className="tab">
                                  <a href="#skill"><div>Skills</div></a>
                                  <a href="#webXp"><div>Web Experiences</div></a>
                                  <a href="#cursus"><div>Cursus</div></a>
                                  <a href="#project"><div>Project</div></a>
                                 <div className="logo">
                                    <img src={logo1} width="40" alt="peche melba icone"/>
                                    < Logo  />
                                </div>
                            </div>
                  </div>
                  <div className="nav-mobile" onClick={show} >
                          <div className="logo-mobile">
                                  <img src={logo1} width="50" alt="peche melba icone"/>
                                  < Logo />
                          </div>
                           <div className="hamburgerNav" >
                                    <div className="menu"></div><div className="menu"></div><div className="menu">
                           </div>
                           </div>
                            <div className="bar"onMouseOver={show} >
                                  <a href="#skill"><div>Skills</div></a>
                                  <a href="#webXp"><div>Web Experiences</div></a>
                                  <a href="#cursus"><div>Cursus</div></a>
                                  <a href="#project"><div>Project</div></a>
                                  
                            </div>
                   </div>
            
                   <div className="presentation" onClick={hide}>
            
                              <div className="presentationBackground"></div>
            
                              <div className="presentationContent">
            
                                           <div className="icone fadeIn">
                                             <img src={peche2} width="200" alt="pech melba icone"/>
                                           </div>
                                           <p> Hello,  I'm Mélinda MENDY a web developer.  <br /> 
                                               Je suis Mélinda MENDY, développeuse web. <br /><br />
                                               
                                                    I like to create website in different sectors
                                                    (music, decoration, electricity, etc...)
                                                    for individuals or within a company. <br /><br />
                                                    J'aime créer des sites internet dans des secteurs différents 
                                                    (musique, décoration, électricité, etc...) 
                                                    pour des particuliers ou au sein d'une entreprise.
                                         
                                          </p>
                              </div>
            
                    </div>
            
                   <div className="mainContent" onClick={hide}>
            
                         <div className="background"></div>
                    
                         <div  className="image"></div>
            
                          <section className="skills" >  
            
                               <h1 id="skill">Skills </h1>
                               <div className="list">
            
                                  <div className="skill-item"><div className="position one shape"><img src={mongodb} width="150" alt="mongodb logo"/></div> <div className="positionTwo four">Mongoose</div></div>
                                  <div className="skill-item"> <div className="position two shape"><img src={node} width="150" alt="nodejs logo"/></div><div className="positionTwo five ">ExpressJS</div></div>
                                  <div className="skill-item"> <div className="position three shape"><img src={react} width="110" alt="reactjs logo"/><h2>React</h2></div><div className="positionTwo six ">Redux</div></div>
            
                                </div>
                          </section>
            
            
                          <section className="experiences"> 
                          <div className="experiencesBackground"></div>
            
            
            
                              <div className="xps"><h1 className="h2" id="webXp">Web Experiences</h1>
                                <div  className="xpTransition"></div>
            
                                  <div className="xp-list">
                                  <div className="xp"> <img src={peche1} width="150" className="wiggle" alt="peach melba icone"/>
            
                                    <div> 
                                      <h4>Developer full stack JS (info-movie website)</h4>
                                      <p> 
                                          End of training project with O'clock <br/>
                                          Specifications wrighting, use cases, sequence diagram.<br/>
                                          Development the website using Javascript(React/Node) hosted on Amazon EC2. <br/>Réalisation de tests unitaires.
                                      </p>
                                    </div>
            
                                  </div>
            
                                  <div className="xp"> <img src={toque} width="150" className="pulse" alt="chef hat icone"/> 
            
                                    <div>  
                                      <h4>Project Manager (e-commerce website)</h4> 
                                      <p>Student Project with Simplon <br/>
                                          Using Trello as project management tool.<br/>
                                          Assignment and follow-up of tasks of the different members of the team.<br/>
                                      <br/>
                                      </p>
                                    </div>
            
                                  </div>
            
                                  <div className="xp"> <img src={mijote} width="150" className="floater" alt="pan icone"/>
            
                                    <div>
                                      <h4>Développeur back-end (Forum)</h4>
                                      <p>Student Project with Simplon <br/>
                                          Back-end development using php.<br/>
                                          Data persistance and creating a database using phpmyadmin.
                                      </p>
                                   </div>
            
                                  </div>
            </div>
                              </div>
                          </section>
            
                          <section className="cursus"> 
            
                          <div className="cursusBackground"></div>
            
                          <h1 id="cursus">Cursus</h1>
            
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
            
                              <h1 id="project">Projects</h1>
            
                              <div className="realisationBackground"></div>
                              <div className="projects">
            
                                   <div className="project position"><img src={tw} width="300" alt="to watch website "/><h3>To watch (school project)</h3><a href="http://www.to-watch.info" target="_blank">www.to-watch.info</a></div>
                                   <div className="project position"><img src={perso} width="300" alt="Luminaris website "/><h3>Luminaris (personal project)</h3><a href="https://github.com/melind/luminaires" target="_blank">Github Project</a></div>
                                   
                                   <div className="project position">
                                   
                                   <img src={social} width="300" alt="social proof section website design"/>
                                   <h3>Social proof section (personal project)</h3><a href="https://github.com/melind/social-proof-section" target="_blank">Github Project</a>
                                   <a href="https://social-proof-section-sage.vercel.app/" target="_blank">Aperçu / Preview</a>
                                   
                                   </div>

                                   <div className="project position">
                                   
                                   <img src={article} width="300" alt="article preview website design"/>
                                   <h3>article-preview (personal project)</h3><a href="https://github.com/melind/article-preview" target="_blank">Github Project</a>
                                   <a href="https://article-preview-orcin-two.vercel.app/" target="_blank">Aperçu / Preview</a>
                                   
                                   </div>

                                  

                              </div>

                          </section>
                    
                 </div>
                 <Footer />

        </div>
    )
}
export default Home;