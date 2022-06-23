import React, {useEffect} from 'react';
import './index.css';
import Footer from '../Footer';
import peche1 from '../../icones/peche1.svg';
import peche_melba from '../../icones/peche_melba.png';
import peche_melba_bis from '../../icones/peche_melba_bis.png';
import toque from '../../icones/toque.svg';
import mijote from '../../icones/mijote.svg';
import react_typescript from '../../images/react_typescript.png';
import node from '../../images/node.png';
import mongodb from '../../images/mongodb.png';
import express from '../../images/express.png';
import ae from '../../images/ae.png';
import ai from '../../images/ai.png';
import id from '../../images/id.png';
import ps from '../../images/ps.png';
import couleurs from '../../images/templates/BBS-example/choix_couleur.png';
import moodboard from '../../images/templates/BBS-example/MB2.jpg'
import wireframe from '../../images/templates/BBS-example/wireframe.png';
import mockup from '../../images/templates/BBS-example/mockup.png';
import mockup_device from '../../images/templates/BBS-example/mockup_device.jpg';
import mockup_device_2 from '../../images/templates/BBS-example/mockup_device_2.jpg';
import mobile_mockup from '../../images/templates/BBS-example/mobile_mockup.jpg';
import iphone_mockup from '../../images/templates/BBS-example/iphone_mockup.jpg';
import typo_1 from '../../images/templates/BBS-example/typo_1.png';
import typo_2 from '../../images/templates/BBS-example/typo_2.png';
import logo_orange from '../../images/templates/BBS-example/Logo-orange.png';
import logo_noir from '../../images/templates/BBS-example/Logo-noir.png';
import storyboard_1 from '../../images/templates/BBS-example/storyboard_bbs-1.png';
import storyboard_2 from '../../images/templates/BBS-example/storyboard_bbs-2.png';
import flyer from '../../images/templates/BBS-example/flyer_bbs.png';
import affiche from '../../images/templates/BBS-example/affiche-mall.png';
import insta from '../../images/templates/BBS-example/post_insta.png';
import fcbk from '../../images/templates/BBS-example/post_fcbk.png';
import ban_pave from '../../images/templates/BBS-example/Banniere_pave.jpg';
import ban_skycraper from '../../images/templates/BBS-example/Gratte_ciel.jpg';
import ban_rec from '../../images/templates/BBS-example/Tableau_bord_gif.gif';
import qrcode from '../../images/templates/BBS-example/qrcode.jpg';
import designer from '../../images/designer.jpg';
import sketching from '../../images/sketching.jpg';
import ordi from '../../images/ordi.jpg';
import exp from '../../images/exp.jpg';
import code from '../../images/code.jpg';
import countdown from '../../images/countdown.jpg';
import social from '../../images/social_design.jpg';
import article from '../../images/article_design.jpg';
import logo1 from '../../icones/logo1.svg';
import Logo from '../Logo';
import Brand from '../Brand';
import { VSMShadowMap } from 'three';

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

      const overflowDsabled = function () {
        body.style.overflowY="visible"
      }
      setTimeout(opacity, 4200);
      setTimeout(opacity_title, 3600);
      setTimeout(overflowDsabled, 5000);

      

   }    


   


   window.addEventListener('scroll', function(e) {
     console.log("hey")
              let rec_r = document.getElementsByClassName("rectangle_right")[0];
              let rec_l = document.getElementsByClassName("rectangle_left")[0];
              let pres_r = document.getElementsByClassName("presentation_right")[0];
              let pres_l = document.getElementsByClassName("presentation_left")[0];
             // let main = document.getElementsByClassName("Home")[0];

             if(rec_r) {
               let position_r = rec_r.getBoundingClientRect();


            console.log(position_r);

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


           console.log(position_l);

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


           console.log(position_pres_l);

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


           console.log(position_pres_r);

           if(position_pres_r.top > 190){
            pres_r.style.transform= "translate3d(0px, 0px, 0px)";
            pres_r.style.transition="transform 300ms ease-in-out";
           }
           else if (position_pres_r.top < 490) {
            pres_r.style.transform= "translate3d(0px, -200px, 0px)";
            pres_r.style.transition="transform 300ms ease-in-out";
           }
            }

          /*  if(main) {
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
            }*/

  });



const Home = () => {
  
  

    return (
        <div className=""  >
                  <div className="nav" >
                            <div className="tab">
                                  <a href="#graphisme"><div>Graphisme</div></a>
                                  <a href="#site"><div>Site web</div></a>
                                  <a href="#webmarketing"><div>Web Marketing</div></a>
                                  <a href="#prestations"><div>Prestations</div></a>
                                  <a href="#propos"><div>À Propos</div></a>
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
                           <div></div>
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
                                                    <div>
                                                      <img alt="ai" src={ai} />
                                                      <img alt="ps" src={ps} />
                                                      <img alt="id" src={id} />
                                                      <img alt="ae" src={ae} />
                                                    </div>
                                                    <div>
                                                      <img alt="react-typescript" src={react_typescript} />
                                                      <img alt="node" src={node} />
                                                      <img alt="express" src={express} />
                                                      <img alt="mongodb" src={mongodb} />
                                                    </div>

                                                </div>

                                          </div>

                                          

                                          <div className="presentation_center icone  " onLoad={up}>
                                             <img  alt="pech melba icone"  srcSet={`${peche_melba} 330w, ${peche_melba_bis} 900w `} sizes="(max-width: 420px) 100vw , 35vw"/>
                                            
                                          </div>



                                          <div className='presentation_right '>
                                            <h2>Préparation</h2>
                                            <ol>
                                              <li>Conception de l'architecture du site web</li>
                                              <li>Conception graphique du site web</li>
                                              <li>Réalisation du site web</li>
                                              <li>Maintenance du site web</li>
                                              <li>Promotion du site web</li>
                                            </ol> 
                                          </div>

                                         


                              </div>
            
                    </section>


            
                   <section className="mainContent_ content" onClick={hide}>

                     <h2>Selon votre besoin réalisation de l'ensemble ou partie de votre site web</h2>

                     <div id="graphisme" className='realisation_type realisation_type_top '>
                       
                           <div className='circle circle_top 'id="0" >

                                <p>ÉLÉMENTS GRAPHIQUES</p><br/>
                                <a classname="link" href='https://www.behance.net/gallery/143722639/BarBeer-Shop' target="_blank">BarBeer Shop </a>

                           </div>

                           <div className='realisation_description realisation_description_top '> 
                           <div><img alt="wirefrme" src={wireframe} /></div>
                           <div><img alt="mockup" src={mockup} /></div>
                              <div ><img alt="choix de couleurs" src={couleurs} /></div>
                              <div ><img alt="moodboard" src={moodboard} /></div>
                              
                              
                          
                            
                           </div>

                         

                     </div>

                     <div className='rectangle rectangle_right ' ></div>

                     <div id="site" className='realisation_type realisation_type_middle '>
                                <div className='circle circle_center'id="1" >

                                        <p>RÉALISATIONS WEB</p><br/>
                                        <div>
                                             <a href="https://coutdown-custom.vercel.app/" target="_blank"> Compte à rebours</a> <br/>
                                             <a href="https://www.subscribepage.com/lart-de-deleguer?fbclid=IwAR3fnzth7r6kN6C1OEZ3sNERanzLruLXUOsYVYZ7dvZX1Z0ii22e1sZHiSc" target="_blank">Landing page</a>
                                        </div>


                                </div>
                                <div className='realisation_description realisation_description_center'>
                              
                                      <div><img alt="mockup site web sur ordinateur" src={mockup_device} /></div>
                                      <div><img alt="mockup site web sur ordinateur" src={mockup_device_2} /></div>
                                      <div><img alt="mockup site web sur mobile" src={mobile_mockup} /></div>
                                      <div><img alt="mockup site web sur mobile" src={iphone_mockup} /></div>

                                      
                                      
                                </div>                   
                       </div>

                     <div className='rectangle rectangle_left '></div>

                     <div id="webmarketing" className='realisation_type realisation_type_bottom  ' >

                     <div className='circle circle_bottom' id="2" >

                                <p>SUPPORTS PROMOTIONNELS</p><br/>
                                <div>
                                    <a href='https://www.behance.net/gallery/143743593/Storyboard-Motion-design-BarBeer-Shop' target="_blank">Animation</a><br/>
                                    <a href='https://www.behance.net/gallery/143743881/BarBeer-Shop-Affiche-plubicitaire' target="_blank"> Supports imprimés </a> <br/>
                                    <a href='https://www.behance.net/gallery/144979215/Bannieres-publicitaires' target="_blank">Supports numériques </a><br/>
                                </div>
                                </div>

                     
                         <div className='realisation_description realisation_description_bottom'>

                         <div className='iframe'><iframe width="560" height="315" src="https://www.youtube.com/embed/-rXTHIOxXO4" title="YouTube video player" frame="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>

                      
                              
                              
                          </div>
                   
            
                     </div> 
                 </section>



                 <section id="prestations" className='prestations_list content'>
                   <h2 className=''>Envie de commander ?</h2>

                   <h3>Nos menus</h3>

                   <div className='prestations prestations_menus '>

                               <div>
                                          <p>SITE VITRINE STANDARD</p>
                                          <ul>
                                            <li>Charte graphique</li>
                                            <li>Site web - <strong>WordPress</strong> </li>
                                            <li>Mise en ligne </li>
                                            <li>Nom de domaine</li>
                                            <li>Hébergement</li>
                                          </ul>
                                        </div>
                                        <div>
                                          <p>SITE VITRINE PERSONNALISÉ</p>
                                          <ul>
                                            <li>Charte graphique</li>
                                            <li>Site web - <strong>sans</strong> WordPress</li>
                                            <li>Mise en ligne</li>
                                            <li>Nom de domaine</li>
                                            <li>Hébergement</li>
                                          </ul>
                                        </div>
                                        <div>
                                          <p>SITE E-COMMERCE STANDARD</p>
                                          <ul>
                                            <li>Charte graphique</li>
                                            <li>Site web - <strong>Wordpress</strong></li>
                                            <li>Mise en ligne </li>
                                            <li>Nom de domaine</li>
                                            <li>Hébergement</li>
                                          </ul>
                                        </div>


                               </div>

                   <h3>À la carte</h3>

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

                  
                      
                  


                 </section>

                 <section className='apropos content' id="propos"> <br/><br/>
                   <h2>À propos</h2>
                   <p>  Je suis Mélinda MENDY, développeur web et web designer freelance. <br/> <br/>
                   Après avoir suivi les formations de Concepteur Développeur web en 2019 (titre niveau II) et de Web Designer 2021(titre niveau II),
                   je me lance dans l'aventure du freelancing.<br/>
                   J'aime la diversité et créer des sites internet accompagner mes clients (particuliers, associations, entreprises) dans leur évolution numérique.
                   
                   </p>
                   <p className='contact'> 
                   <br/>
                     Me contacter :  melinda@pechemelba.fr 
                    </p> <br/>
                 
                 </section>


                 </div>
                 <Footer />

        </div>
    )
}
export default Home;