import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
//import './index.css';
import Footer from '../Footer';
import peche1 from '../../icones/peche1.svg';
import peche_melba from '../../icones/peche_melba.png';
import peche_melba_bis from '../../icones/peche_melba_bis.png';
import toque from '../../icones/toque.svg';
import mijote from '../../icones/mijote.svg';
import react_typescript from '../../icones/react1.svg';
import node from '../../images/node.png';
import mongodb from '../../images/mgdb.png';
import express from '../../images/express.png';
import wp from '../../images/wp.png';
//import ae from '../../images/ae.png';
import ai from '../../images/ai.png';
import id from '../../images/id.png';
import ps from '../../images/ps.png';
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
      hambNav.style.position= "fixed"; 

    } 

   const up = function () {  
    let body = document.body;


      let pechemelba = document.getElementsByClassName("presentation_center")[0];   
      pechemelba.style.transform= "translate3d(0px, 0px, 0px)";  
      pechemelba.style.transition="transform 3600ms ease-in-out";

      let bloc_l = document.getElementsByClassName("presentation_left")[0];
      let bloc_r = document.getElementsByClassName("presentation_right")[0];  
      let bloc_title = document.getElementsByClassName("presentation_title")[0];  

      const opacity = function () {
        bloc_l.style.opacity= "1";  
        bloc_l.style.transition="opacity 1500ms ease-in-out";
        bloc_r.style.opacity= "1";  
        bloc_r.style.transition="opacity 1500ms ease-in-out";
      }

      const opacity_title = function () {
        bloc_title.style.opacity= "1";  
        bloc_title.style.transition="opacity 1500ms ease-in-out";
      }

     body.style.overflowY="hidden";

      const overflowDisabled = function () {
        body.style.overflowY="visible"
      }
      setTimeout(opacity, 4200);
      setTimeout(opacity_title, 3600);
      setTimeout(overflowDisabled, 5000);

      

   }    


   
   if(  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //console.log("mobile")
   }else{
    //console.log("pc")
   

   window.addEventListener('scroll', function(e) {
    
              let rec_r = document.getElementsByClassName("rectangle_right")[0];
              let rec_l = document.getElementsByClassName("rectangle_left")[0];
              let pres_r = document.getElementsByClassName("presentation_right")[0];
              let pres_l = document.getElementsByClassName("presentation_left")[0];
              let main = document.getElementsByClassName("circle_top")[0];

             if(rec_r) {
               let position_r = rec_r.getBoundingClientRect();


          //  console.log(position_r);

            if(position_r.top < 900){
             rec_r.style.transform= "translateX(0)";  
             rec_r.style.transition="transform 300ms ease-in-out";
            }
            else{
             rec_r.style.transform= "translateX(-90%)";  
             rec_r.style.transition="transform 300ms ease-in-out";
            }
             }

             if(rec_l) {
              let position_l = rec_l.getBoundingClientRect();


          // console.log(position_l);

           if(position_l.top < 800){
            rec_l.style.transform= "translateX(0)";  
            rec_l.style.transition="transform 300ms ease-in-out";
           }
           else {
            rec_l.style.transform= "translateX(90%)";  
            rec_l.style.transition="transform 300ms ease-in-out";
           }
            }


            if(pres_l) {
              let position_pres_l = pres_l.getBoundingClientRect();


         //  console.log(position_pres_l);

           if(position_pres_l.top > 190){
            pres_l.style.transform= "translate3d(0px, 0px, 0px)";
            pres_l.style.transition="transform 150ms ease-in-out";
           }
           else if(position_pres_l.top < 490) {
            pres_l.style.transform= "translate3d(0px, -200px, 0px)";
            pres_l.style.transition="transform 150ms ease-in-out";
           }
            }

            if(pres_r) {
              let position_pres_r = pres_l.getBoundingClientRect();


         //  console.log(position_pres_r);

           if(position_pres_r.top > 190){
            pres_r.style.transform= "translate3d(0px, 0px, 0px)";
            pres_r.style.transition="transform 300ms ease-in-out";
           }
           else if (position_pres_r.top < 490) {
            pres_r.style.transform= "translate3d(0px, -200px, 0px)";
            pres_r.style.transition="transform 300ms ease-in-out";
           }
            }

         /*
           
            if(main) {
              console.log(main.offsetTop);
           let   ease = 0.05;
           let start_position = main.offsetTop;
              let scroll_request = 0;
             let  total_offset = 0;
            let animation_running = false;
             if (!animation_running) {
              animation_running = true;
              animation_loop();
          }
          function animation_loop() {
            let current_offset = window.pageYOffset;
        
            let difference = current_offset - total_offset;
            difference *= ease;
        
            if (Math.abs(difference) < 0.05) {
                scroll_request = 0;
        
                total_offset = current_offset;
                animation_running = false;
                return;
            }
        
            main.style.top = `${start_position - total_offset}px`;
            total_offset += difference;
        
            requestAnimationFrame(animation_loop);
        }
              
              let position_main = main.getBoundingClientRect();


           
           if(position_main.top < -4000){

          console.log(position_main,`(${position_main.top})`,`${position_main.top+50})`);
           let x = `${position_main.top+50})`;
            main.style.transform= "translate3d(0px, -1200px, 0px)";
            main.style.transition="transform 600ms ease-in-out";
           }
          else if(position_main.top < -2800){
            main.style.transform= "translate3d(0px, -1150px, 0px)";
            main.style.transition="transform 600ms ease-in-out";
           }
           else if(position_main.top <= -2200){
            main.style.transform= "translate3d(0px, -950px, 0px)";
           main.style.transition="transform 1000ms ease-in-out";
           }
           else if(position_main.top <= -1200){
            main.style.transform= "translate3d(0px, -650px, 0px)";
            main.style.transition="transform 1000ms ease-in-out";
           }
           else if(position_main.top <= -550){
            main.style.transform= "translate3d(0px, -350px, 0px)";
            main.style.transition="transform 600ms ease-in-out";
           }
           else if(position_main.top <= -350){
            main.style.transform= "translate3d(0px, -150px, 0px)";
            main.style.transition="transform 600ms ease-in-out";
           }
         
          
           else {
            main.style.transform= "translate3d(0px, 0px, 0px)";
            main.style.transition="transform 600ms ease-in-out";
           }

            }
           
           <a className='language' href="/jp" >日本語</a> 
           <a className='language language_mobile' href="/jp" >日本語</a>*/
           

            
            
          
  });
   }


const Homefrench = () => {
  
  

    return (
        <div className="page"  >
                  <div className="nav" >
                            <div className="tab">
                                  <a href="#graphisme"><div>Graphisme</div></a>
                                  <a href="#site"><div>Site web</div></a>
                                  <a href="#webmarketing"><div>Web Marketing</div></a>
                                  <a href="#prestations"><div>Prestations</div></a>
                                  <a href="#propos"><div>À Propos</div></a>
                                  <a href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank"><div>Contact</div></a>
                                  
                                 <div className="logo">
                                    <img src={logo1} width="40" alt="peche melba icone"/>
                                    < Logo  />
                                </div>
                            </div>
                  </div>
                  <div className="nav-mobile"  >
                          <div className="logo-mobile">
                                  <img src={logo1} width="50" alt="peche melba icone"/>
                                  < Logo />
                          </div>
                           <div className="hamburgerNav" onClick={show}>
                                    <div className="menu"></div><div className="menu"></div><div className="menu">
                           </div>
                           </div>
                           <a className='language contact_mobile' href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank" >Prendre contact ?</a>
                            <div className="bar" >
                            
                                  <a href="#graphisme" className='a'><div>Graphisme</div></a>
                                  <a href="#site" className='a'><div>Site web</div></a>
                                  <a href="#webmarketing" className='a'><div>Web Marketing</div></a>
                                  <a href="#prestations" className='a'><div>Prestations</div></a>
                                  <a href="#propos" className='a'><div>À Propos</div></a>
                                  <div className='a' onClick={hide}>X</div>
                            </div>  
                            
                   </div>
                 
            <div className="home" >
                   <section className="presentation_" onClick={hide}>
            
                              
            
                              <div className="presentationContent_">

                                          <div className='brand_name presentation_title presentation_brand'> 
                                               < Brand />
                                               <h1 className='title'> Concepteur de site Web </h1>
                                          </div>
                                         
                                              

                                               <div className='presentation_left '>

                                                <h2>Ingredients</h2>

                                                <div className='stack'>
                                                    <div className='logiciels'>
                                                      <img alt="ai" src={ai} />
                                                      <img alt="ps" src={ps} />
                                                      <img alt="id" src={id} />
                                                      <img alt="ae" src={""} />
                                                    </div>
                                                    <div className='langages'>
                                                      <img alt="wp" src={wp} />
                                                      <img alt="react-typescript"  className="react" src={react_typescript} />
                                                      <img alt="node" src={node} />
                                                      <img alt="express" src={express} />
                                                      
                                                    </div>

                                                </div>

                                          </div>

                                          

                                          <div className="presentation_center icone  " onLoad={up}>
                                             <img  alt="pech melba icone"  srcSet={`${peche_melba} 330w, ${peche_melba_bis} 900w `} sizes="(max-width: 420px) 100vw , 35vw"/>
                                            
                                          </div>



                                          <div className='presentation_right '>
                                            <h2>Préparation</h2>
                                            <ol>
                                              <li>Conception graphique du site web</li>
                                              <li>Réalisation du site web</li>
                                              <li>Promotion du site web</li>
                                            </ol> 
                                          </div>

                                         


                              </div>
            
                    </section>


            
                   <section className="mainContent_ content" onClick={hide}>

                     <h2>Pour réaliser l'ensemble ou une partie de mon site web : </h2>


                     <div id="graphisme" className='realisation_type  '>
                          <div>

                                      
                                         <div className='circle circle_top 'id="0" >

                                              <p>ÉLÉMENTS GRAPHIQUES</p><br/>
                                              
      

                                         </div>
                                        
                                      
                           </div>
                           <div className='realisation_description  '>
                            
                          
                              
                                           <h3>1. Les goûts et les couleurs ne se discutent pas !</h3> <br/>
                                            <p>
                                           <em className='citation'> "Je définis "MA" symbolique des couleurs."</em><br/><br/>
                          

                                           En effet, "LA" symbolique des couleurs varie selon les pays, les cultures.
                                           Alors n'hésitez pas à choisir des couleurs que vous ressentez.
                                           Nous élaborerons ensemble l'aspect de votre site internet.
                                           <br/><br/>
                                           
                                                 <div className='button'>
                                                   <a  href="https://www.behance.net/gallery/143722639/BarBeer-Shop" target="_blank"><div className='button_ex'>Exemple 1</div></a>
                                                   <div className='button_space'></div>
                                                   <a href="https://www.instagram.com/miss_pechemelba/" target="_blank"><div className='button_ex'>Exemple 2 </div></a> 
                                                  </div>
                                           
                                            </p> 
                                            

                          
                            
                           </div>
                           

                         

                     </div>
                         <div className='rectangle rectangle_right ' ></div>
                     
                     <div id="site" className='realisation_type realisation_type_middle '>
                   
                                <div className='circle circle_center'id="1" >

                                        <p>RÉALISATIONS WEB</p><br/>
                                      


                                </div>
                                <div className='realisation_description'>
                              
                                             <h3>2. L'art de déléguer ! </h3><br/>
                                             <p>
                                              <em className='citation'>"Grâce aux compétences mises à mon service, je concrétise la création de mon site web."   </em><br/><br/>
                                              Après validation de la maquette graphique de votre site internet, nous procéderons au développement de celui-ci.<br/>
                                              Cela se fera soit via un CMS (comme WordPress) soit entièrement fait à la main.
                                              <br/><br/>

                                              <div className='button button_realisation'>
                                                   <a  href="https://www.sdv-avocats.com/" target="_blank"><div className='button_ex '>Exemple </div></a>
                                                  </div>
                                        

                                             </p>
                                      
                                      
                                </div>                   
                       </div>
                     
                       <div className='rectangle rectangle_left '></div>
                       
                     <div id="webmarketing" className='realisation_type   ' >

                                 <div className='circle circle_bottom' id="2" >

                                            <p>SUPPORTS PROMOTIONNELS</p><br/>


                                 </div>

                                 <div className='realisation_description '>

                                             <h3>3. Choisir c'est renoncer !</h3> <br/>
                                             <p>
                                                   <em className='citation'>"Je maximise la promotion de mon site web en ciblant les canaux de communication appropriés à mon secteur."</em><br/><br/>
                                                   
                                                    
                                                   Nous réalisons des visuels sous format imprimé ou numérique pour la promotion de votre site internet ou de votre activité.<br/>
                                                   <em>Si vous n'êtes pas encore présent sur les réseaux sociaux, nous pouvons vous accompagner dans votre sélection.</em>
                                                  
                                                   <br/><br/>
                                                        
                                                         <div className='button'>
                                                               <a href="https://www.behance.net/gallery/144979215/Bannieres-publicitaires" target="_blank"><div className='button_ex'>Exemple 1 </div></a> 
                                                               <div className='button_space'></div>
                                                              <a href="https://www.behance.net/gallery/143743881/BarBeer-Shop-Promotion" target="_blank"><div className='button_ex'>Exemple 2</div> </a> 
                                                              <div className='button_space'></div>
                                                              <a href="https://www.behance.net/gallery/143743593/Storyboard-Motion-design-BarBeer-Shop" target="_blank"><div className='button_ex'>Exemple 3</div> </a> 
                                                         </div>
                                              </p>

                                 </div>
                  
            

                     </div> 
          
                 </section>



                 
                   <section  className='prestations_list content' id="prestations">
                   
                   <div className='recettes' >
                             <h3>Nos recettes</h3>

                             <div className='prestations prestations_menus '>

                                         <div>
                                                    <p>SITE VITRINE STANDARD</p>
                                                    <ul>
                                                      <li>Charte graphique</li>
                                                      <li>Site web</li>
                                                      <li>Mise en ligne </li>
                                                      <li>Nom de domaine</li>
                                                      <li>Hébergement</li>
                                                    </ul>
                                                  </div>
                                                  <div>
                                                    <p>SITE VITRINE PERSONNALISÉ</p>
                                                    <ul>
                                                      <li>Charte graphique</li>
                                                      <li>Site web</li>
                                                      <li>Mise en ligne</li>
                                                      <li>Nom de domaine</li>
                                                      <li>Hébergement</li>
                                                    </ul>
                                                  </div>
                                                  <div>
                                                    <p>SITE E-COMMERCE STANDARD</p>
                                                    <ul>
                                                      <li>Charte graphique</li>
                                                      <li>Site web</li>
                                                      <li>Mise en ligne </li>
                                                      <li>Nom de domaine</li>
                                                      <li>Hébergement</li>
                                                    </ul>
                                                  </div>


                                         </div>
                   
                 
                                <div className='prestations prestations_formulas'>
                 
                                              <div>
                                                      <p>CHARTE GRAPHIQUE</p>
                                                      <ul>
                                                        <li>Choix des couleurs</li>
                                                        <li>Typographie</li>
                                                        <li>Maquettes du site</li>
                                                      </ul>
                                                    </div>
                                                    <div>
                                                      <p>DÉVELOPPEMENT SITE WEB</p>
                                                      <ul>
                                                        <li>Site web - avec ou sans WordPress</li>
                                                      </ul>
                                                    </div>
                                                    <div>
                                                      <p>COMMUNICATION VISUELLE</p>
                                                      <ul>
                                                        <li> Supports imprimés (Flyers Affiches)</li>
                                                        <li> Supports numériques </li>
                                                        <li>(visuel d'e-mail, réseaux sociaux,...)</li>
                                                      </ul>
                                              </div>
                 
                                  
                                </div>

                   </div>
                  
                      
                  


                 </section>

                 <section className='com' >

                   <h2 className='h_presta commander content'id="contact">Passer commande ?</h2>
                 
                 
                   <div className='espace_com'  >
                   
                   <a className="button_contact btn_form" href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank"><div>Form</div></a>
                   
                   </div>
                   </section>


                 <section className='apropos content' id="propos"> <br/><br/>
                   <h2>À propos</h2>
                   <p className='apropos_content'>  Je suis Mélinda MENDY, développeur web et web designer freelance. <br/> <br/>
                   Après avoir suivi les formations de Concepteur Développeur web et de Web Designer,
                   je me lance dans l'aventure du freelancing.<br/>
                   J'ai plaisir à accompagner mes clients (particuliers, associations, entreprises) dans leur évolution numérique.
                   
                   </p>
                 
                 </section>


                 </div>
                 <Footer />

        </div>
    )
}
export default Homefrench;