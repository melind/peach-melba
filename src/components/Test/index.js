import React, {useEffect} from 'react';
import './index.css';
import Footer from '../Footer';
import peche1 from '../../icones/peche1.svg';
import peche_melba from '../../icones/peche_melba.png';
import peche_melba_bis from '../../icones/peche_melba_bis.png';
import toque from '../../icones/toque.svg';
import mijote from '../../icones/mijote.svg';
import react from '../../icones/react.png';
import node from '../../icones/node.svg';
import mongodb from '../../icones/mongodb.svg';
import countdown from '../../images/countdown.jpg';
import social from '../../images/social_design.jpg';
import article from '../../images/article_design.jpg';
import logo1 from '../../icones/logo1.svg';
import Logo from '../Logo';
import Brand from '../Brand';

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

   const up = function () {  
    
      let pechemelba = document.getElementsByClassName("presentation_center")[0];   
      pechemelba.style.transform= "translate3d(0px, 0px, 0px)";  
      pechemelba.style.transition="transform 3600ms ease-in-out";

      let bloc_l = document.getElementsByClassName("presentation_left")[0];
      let bloc_r = document.getElementsByClassName("presentation_right")[0];  
      let bloc_title = document.getElementsByClassName("presentation_title")[0]; 
      const opacity = function () {
        bloc_l.style.opacity= "1";  
        bloc_l.style.transition="opacity 3600ms ease-in-out";
        bloc_r.style.opacity= "1";  
        bloc_r.style.transition="opacity 3600ms ease-in-out";
      }

      const opacity_title = function () {
        bloc_title.style.opacity= "1";  
        bloc_title.style.transition="opacity 3600ms ease-in-out";
      }
      setTimeout(opacity, 7200);
      setTimeout(opacity_title, 3600);

      


      
       

   }    

   
    
  
const Test = () => {
  

    return (
        <div className="" >
                  <div className="nav" >
                            <div className="tab">
                                  <a href="#skill"><div>Skills</div></a>
                                  <a href="#webXp"><div>Web Experiences</div></a>
                                  <a href="#cursus"><div>Cursus</div></a>
                                  <a href="#project"><div>Projects</div></a>
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
            
                   <section className="presentation_" onClick={hide}>
            
                              
            
                              <div className="presentationContent_">
            
                                          <div className='presentation_title border'> 

                                               <div> < Brand />
                                                <h1> Concepteur de site Web </h1>
                                                </div>

                                               <div className='presentation_left'>
                                                <h2>Ingredients</h2>
                                                <p></p>
                                                </div>

                                          </div>

                                          

                                          <div className="presentation_center icone  border" onLoad={up}>
                                             <img  alt="pech melba icone"  srcSet={`${peche_melba} 330w, ${peche_melba_bis} 900w `} sizes="(max-width: 420px) 100vw , 35vw"/>
                                            
                                          </div>



                                          <div className='presentation_right border'>
                                            <h2>Préparation</h2>
                                            <p></p>
                                          </div>

                                         


                              </div>
            
                    </section>


            
                   <section className="mainContent_" onClick={hide}>

                     <div className='realisation_type realisation_type_top border'>
                       <div className='circle circle_top border'></div>
                       <div className='realisation_description border'></div>
                     </div>

                     <div className='rectangle rectangle_right border'></div>

                     <div className='realisation_type realisation_type_middle border'>
                       <div className='circle circle_center'></div>
                       <div className='realisation_description'></div>
                     </div>

                     <div className='rectangle rectangle_left border'></div>

                     <div className='realisation_type realisation_type_bottom  border'>
                       <div className='circle circle_bottom'></div>
                       <div className=''></div>
                     </div>
            
                    
                 </section>



                 <section className='prestations_list'>
                   <h2 className='border'>Envie de commander ?</h2>

                   <h3>Nos menus</h3>

                   <div className='prestations prestations_menus border'>

                         <div>
                              <p>CHARTE GRAPHIQUE</p>
                              <ul>
                                <li>Choix des couleurs, de la typographie</li>
                                <li>Maquettes du site</li>
                              </ul>
                            </div>
                            <div>
                              <p>DÉVELOPPEMENT SITE WEB <br/>( à partir d'une charte graphique existante)</p>
                            </div>
                            <div>
                              <p>COMMUNICATION VISUELLE</p>
                              <ul>
                                <li> Supports imprimés (Flyers Affiches)</li>
                                <li> Supports numériques (viuel d'e-mail de publications pour réseaux sociaux)</li>
                              </ul>
                            </div>

                   </div>

                   <h3>Nos formules</h3>

                   <div className='prestations prestations_formulas'>

                            <div>
                              <p>SITE VITRINE STANDARD</p>
                              <ul>
                                <li>Charte graphique</li>
                                <li>Développement du site web - <strong>WordPress</strong> </li>
                                <li>Mise en ligne - choix nom de domaine et hébergeur</li>
                              </ul>
                            </div>
                            <div>
                              <p>SITE VITRINE PERSONNALISÉ</p>
                              <ul>
                                <li>Charte graphique</li>
                                <li>Développement du site web - <strong>sans</strong> WordPress</li>
                                <li>Mise en ligne - choix nom de domaine et hébergeur</li>
                              </ul>
                            </div>
                            <div>
                              <p>SITE E-COMMERCE</p>
                              <ul>
                                <li>Charte graphique</li>
                                <li>Développement du site web - <strong>Wordpress - prestashop </strong></li>
                                <li>Mise en ligne - choix nom de domaine et hébergeur</li>
                              </ul>
                            </div>

                     
                   </div>

                   <h3>A la carte</h3>
                           <div>
                             <ul>
                               <li>Logo</li>
                               <li>Mise en ligne - choix nom de domaine et hébergeur</li>
                               <li>Flyers</li>
                               <li>Affiches</li>
                               <li>Visuels d'email</li>
                               <li>Visuels de publication pour réseaux sociaux</li>
                             </ul>

                            </div>
                      
                  


                 </section>

                 <Footer />

        </div>
    )
}
export default Test;