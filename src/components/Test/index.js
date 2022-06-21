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
import mockup_desktop from '../../images/templates/BBS-example/mockup-barbeer-shop-website-ordinateur.jpg';
import mobile_mockup from '../../images/templates/BBS-example/mobile_mockup.jpg';
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
              let main = document.getElementsByClassName("test")[0];

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

            if(main) {
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
           main.style.transition="transform 600ms ease-in-out";
           }
           else if(position_main.top <= -1200){
            main.style.transform= "translate3d(0px, -650px, 0px)";
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

  });

/*
  const showCircle = function () {  
    let cible;
    window.onclick = e => {
      cible = e.target.id;
      console.log("cible:",cible,cible=="1",document.getElementsByClassName("circle")[cible]);
      console.log(e.target);
      console.log(e.target.id);
  

    if(cible){
      let circle = document.getElementsByClassName("circle")[cible];   
    
      let description = document.getElementsByClassName("realisation_description")[cible]; 
    
      let realisation = document.getElementsByClassName("realisation_type")[cible]; 

      let realisationTop = document.getElementsByClassName("realisation_type_top")[0]; 
      let realisationMiddle = document.getElementsByClassName("realisation_type_middle")[0]; 

      if( description.style.flex) {
        circle.style.cssText = "height:60vh; width:60vh; -radius:45vh;"; 
        description.style.flex= ""; 
        realisation.style.justifyContent= ""; 
        realisationTop.style.marginLeft="5%";
        realisationMiddle.style.marginRight="5%";
      }
      else {
       
        circle.style.cssText = "position:absolute; height:100vh; width:100vh; -radius:50vh; z-index:1"; 
        description.style.flex= "0"; 
        realisation.style.justifyContent= "center"; 

        if(cible==0) {
         
          realisationTop.style.marginLeft="0";
        }

        if(cible==1){
          realisationMiddle.style.marginRight = "0";
        }
      }
    }

  }
   function () {  
    let cible;
    
    window.onclick = e => {
      cible = e.target.id;
      let number = Number.parseInt(cible[0])
      console.log("cible:",cible,Number.isInteger(number),document.getElementById(cible), document.getElementsByClassName("0_img")[cible[0]]);
      console.log(e.target);
      console.log(e.target.id);
  

    if(cible && Number.isInteger(number)){
      let thumbnail = document.getElementsByClassName("0_img")[cible[0]];   
    
     
console.log("thumb : ", thumbnail,thumbnail.style.position == "initial",thumbnail.style.position )

      if(thumbnail.style.position == "initial") {
        thumbnail.style.cssText = "position:absolute;  width:48%;"; 
        
      }
      else {
       
        thumbnail.style.cssText = "position:initial;height:50% width:50%;"; 
      

      }
    }

  }

  = function () {  
    let cible;
    
    window.onclick = e => {
      cible = e.target.id;
      let number = Number.parseInt(cible[0])
      console.log("cible:",cible,Number.isInteger(number),document.getElementById(cible), document.getElementsByClassName("0_img")[cible[0]]);
      console.log(e.target);
      console.log(e.target.id);
  

    if(cible && Number.isInteger(number)){
      let thumbnail = document.getElementsByClassName("3_img")[cible[0]]; 
      let c =  document.getElementsByClassName("circle_bottom")[0];
    
     
console.log("thumb : ", thumbnail,thumbnail.style.position == "initial",thumbnail.style.position )

      if(thumbnail.style.position == "initial") {
        thumbnail.style.cssText = "position:absolute;  width:47%;"; 
        c.style.display="none"
        
      }
      else {
       
        thumbnail.style.cssText = "position:initial;height:25% width:25%;"; 
        c.style.display="initial";
      

      }
    }

  }

  }*/

const Test = () => {
  
  

    return (
        <div className="" >
                  <div className="nav" >
                            <div className="tab">
                                  <a href="#graphisme"><div>Graphisme</div></a>
                                  <a href="#site"><div>Site web</div></a>
                                  <a href="#webmarketing"><div>Web Marketing</div></a>
                                  <a href="#prestations"><div>Prestations</div></a>
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
                                  <a href="#graphisme"><div>Graphisme</div></a>
                                  <a href="#site"><div>Site web</div></a>
                                  <a href="#webmarketing"><div>Web Marketing</div></a>
                                  <a href="#prestations"><div>Prestations</div></a>
                                  
                            </div>
                   </div>
            <div className="test">
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


            
                   <section className="mainContent_" onClick={hide}>

                     <h2>Selon votre besoin réalisation de l'ensemble ou partie de votre site web</h2>

                     <div id="graphisme" className='realisation_type realisation_type_top '>
                       
                           <div className='circle circle_top 'id="0" >

                                <p>CONCEPTION D'ÉLÉMENTS GRAPHIQUES</p><br/>
                                <a classname="link" href='https://www.behance.net/gallery/143722639/BarBeer-Shop' target="_blank">Exemple de projet </a>

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
                                             <a href="https://coutdown-custom.vercel.app/" target="_blank"> Coompte à rebours</a> 
                                             <a href="https://social-proof-section-sage.vercel.app/" target="_blank">commentaire</a>
                                             <a href="https://article-preview-orcin-two.vercel.app/" target="_blank">un article</a>
                                             <a href="https://www.subscribepage.com/lart-de-deleguer?fbclid=IwAR3fnzth7r6kN6C1OEZ3sNERanzLruLXUOsYVYZ7dvZX1Z0ii22e1sZHiSc" target="_blank">Landing page</a>
                                        </div>


                                </div>
                                <div className='realisation_description realisation_description_center'>
                                <div><img alt="ordinatetur" src={ordi} /></div>
                                      <div><img alt="code" src={code} /></div>
                                      
                                </div>                   
                       </div>

                     <div className='rectangle rectangle_left '></div>

                     <div id="webmarketing" className='realisation_type realisation_type_bottom  ' >

                         <div className='realisation_description realisation_description_bottom'>
                             
                              
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/-rXTHIOxXO4" title="YouTube video player" frame="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                              
                             
                          </div> 
                          
                          

                         <div className='circle circle_bottom' id="2" >

                              <p>CONCEPTION DE SUPPORTS PROMOTIONNELS</p><br/>
                              <div>
                                  <a href='https://www.behance.net/gallery/143743593/Storyboard-Motion-design-BarBeer-Shop' target="_blank">Storyboard</a>
                                  <a href='https://www.behance.net/gallery/143743881/BarBeer-Shop-Affiche-plubicitaire' target="_blank"> Supports imprimés </a> 
                                  <a href='https://www.behance.net/gallery/144979215/Bannieres-publicitaires' target="_blank">Supports numériques </a>
                              </div>
                         </div>
                         <div className='realisation_description realisation_description_bottom realisation_description_bottom_b'>

                              
                              <div ><img alt="publication insta" src={flyer} /></div>
                              <div ><img alt="qrcode" src={ban_rec} /></div>
                              
                              
                              
                          </div>
                     </div>
            
                    
                 </section>



                 <section id="prestations" className='prestations_list'>
                   <h2 className=''>Envie de commander ?</h2>

                   <h3>Nos menus</h3>

                   <div className='prestations prestations_menus '>

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

                   <h3>À la carte</h3>

                   <div className='prestations prestations_formulas'>

                                 <div>
                                         <p>CHARTE GRAPHIQUE</p>
                                         <ul>
                                           <li>Choix des couleurs, de la typographie</li>
                                           <li>Maquettes du site</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <p>DÉVELOPPEMENT SITE WEB <br/>( à partir d'une charte graphique existante)</p>
                                         <ul>
                                           <li>Développement du site web - avec ou sans WordPress</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <p>COMMUNICATION VISUELLE</p>
                                         <ul>
                                           <li> Supports imprimés (Flyers Affiches)</li>
                                           <li> Supports numériques (visuel d'e-mail, de publications pour réseaux sociaux)</li>
                                         </ul>
                                 </div>

                     
                   </div>
                      
                  


                 </section>
                 </div>
                 <Footer />

        </div>
    )
}
export default Test;