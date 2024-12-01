import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import './index.css';
import Footer from '../Footer';

import chef from '../../images/chef.png';
import ustensiles from '../../images/ustensiles.jpg';
import tablier from '../../images/tablier.jpg';
import Logo from '../Logo';



const Homefrench = () => {
  
  

    return (
        <div className="home"  >
                 
                 <div className="logo_">
                       
                        < Logo  />
                  </div>

            <div className="home_main_content" >
                

            <section className='introduction'>
           

                   

                            <div className='titre titre_nom_recette'> 
                 
                                 <h2 className='nom_recette'>  La recette d'un site internet</h2>
                                 <p className='phrase_accroche'>Pour une expérience en ligne savoureuse et inoubliable...</p>

                            </div>

                            <img alt="dessin d'un chef" className='chef' src={chef} /> 

                            <a className="chef contact_lien" href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank">
                                        <div className='contact'>Prendre contact ?</div>
                            </a>
                   
                                                                                                   
                            <video  autoPlay loop className='video'  >
                                   <source  src="https://video.pechemelba.fr/conception_web.mp4" type="video/mp4"/>
                            </video><br/> <br/>
                               
                            <div className='titre titre_h1'> 

                                   <h1 >Conceptrice de site internet</h1>
                                 

                                   <div className='surlignage surlignage_h1'></div> 

                           
                           </div>


                          
              </section> 

               

              <section className='ingredients'>

                     <div className='titre'> 
                 
                                <h2>Ingredients</h2>
                     
                                <div className='surlignage surlignage_h2'></div> 

                     </div>
                    
                    
                    
                   
                                <ul className='liste_ingredients'>
                                  <li>1 chef web expert (à votre service, avec passion et savoir-faire)</li>
                                  <li>1 analyse approfondie des besoins clients (pour bien comprendre les goûts)</li>
                                  <li>200 g de créativité fraîche (pour un design unique et appétissant)</li>
                                  <li>2 à 3 technologies web (HTML, CSS, JavaScript, PHP, et bien plus)</li>
                                  <li>1 dose généreuse de responsive design (pour une recette adaptée à tous les appareils)</li>
                                  <li>1 soupçon de sécurité (HTTPS et protection des données)</li>
                                  <li>1 zeste de maintenance (pour garder votre site au goût du jour)</li>
                                  <li>1 cuillère à soupe de support client sur-mesure </li>
                                </ul> 
                    <div className='planche_decouper'></div>

                   
            
              </section>



              <section className='recette'>

                    <div className='titre'> 
                 
                          <h2> La recette pas à pas</h2>
                          <div className='surlignage surlignage_h2'></div> 

                    </div>

                      <div className='etape etape1'>

                          

                            <div className='etape_content'>

                                <h3>1) Préparer la base (Analyse des besoins)</h3>
                                <p >

                                        <em > "Les goûts et les couleurs ne se discutent pas !"</em><br/>
                                          
    
                                        Définitions de vos besoins, objectifs et attentes afin de confectionner ensemble le **goût unique** de votre site.<br/>
                                        Comme pour toute recette réussie, il faut d’abord **préparer les ingrédients de base** qui vont donner de la **saveur** à votre site. <br/>
                                </p>

                                <h3>2) Mélanger les idées (un design sur-mesure) </h3>

                                <p>
                                        Prendre une portion de **créativité fraîche** et mélangez-la avec l’identité visuelle de votre marque. <br/>
                                        Cela permet la création d'un design unique : couleurs, typographies, images, et mise en page sont soigneusement choisis pour faire ressortir le meilleur de votre projet web.<br/>
                                        
                                  
                                </p>

                                <h3>3) Passer à la cuisson (Développement)</h3>

                                <p>
                                        L’étape clé : **Cuisson** de votre projet par le chef, c’est le moment où le plat prend forme !<br/>
                                        Développement du site en utilisant des technologies web modernes et efficaces (HTML, CSS,
                                        JavaScript, CMS comme WordPress) pour que votre site soit fluide, rapide et interactif. <br/>
                                        
                                  
                                </p>

                                <h3>4) Dresser ! (responsive design)</h3>

                                <p>
                                Une recette doit être visuellement **appétissant**, peu importe la taille ou la forme de **l’assiette** !
                                Assurez-vous que votre **plat** soit aussi **savoureux** sur tous les appareils ! <br/>
                                La présentation de votre site s’adapte à n'importe quel écran : ordinateur, tablette ou smartphone.
                                  
                                </p>

                                <h3>5) Saupoudrer de sécurité</h3>

                                <p>
                                Un **plat** délicieux, mais aussi sécurisé pour vos visiteurs et vos informations. <br/>
                                Une sécurité optimale (HTTPS, protections des données) pour que votre site soit à l’abri des menaces. <br/>
                                
                                  
                                </p>

                                <h3>6) Server ! (Livraison et mise en ligne) </h3>

                                <p>
                                Le moment tant attendu ! <br/>
                                Comme un chef qui présente son plat avec fierté, livraison d'un site qui est prêt à être **dégusté** par vos visiteurs.
                                  
                                </p>

                                <h3> <em>Conseil du chef (La maintenance et le support) </em></h3>

                                <p>
                                Un **plat** ne doit jamais perdre de sa fraîcheur ! Proposition d'une maintenance continue, avec des mises à jour régulières, et un
                                support client sur-mesure pour répondre à toutes vos questions et besoins.
                                  
                                </p>

                                <p className='conclusion_recette'>
                                <h3>Et voilà ! Votre site est prêt à être **dégusté !**</h3>
                                  Avec cette **recette** sur mesure, nous vous offrons un site web qui répond exactement à vos
                                  attentes, qui vous ressemble et qui plait à vos visiteurs.<br/>
                                 **Bon appétit numérique !**
                                </p>


                              
                                           


                            </div>     


                      </div>


            

                                    <div className='cercle cercle_etape cercle_violet cercle_bas_hauteur'></div>
                                    <div className='cercle cercle_etape cercle_rose cercle_haut_hauteur'></div>
                                    <div className='cercle cercle_etape cercle_jaune cercle_haut_hauteur cercle_jaune_gauche cercle_jaune1'></div>
                                    <div className='cercle cercle_etape cercle_jaune cercle_bas_hauteur cercle_jaune_droit cercle_jaune2'></div>
    
    
                                    <div className='cercle cercle_etape cercle_violet cercle_bas_hauteur2'></div>
                                    <div className='cercle cercle_etape cercle_rose cercle_haut_hauteur2'></div>
                                    <div className='cercle cercle_etape cercle_jaune cercle_haut_hauteur2 cercle_jaune_gauche cercle_jaune3'></div>
                                    <div className='cercle cercle_etape cercle_jaune cercle_bas_hauteur2 cercle_jaune_droit cercle_jaune4'></div>
                               

              </section>

              <section className='contactez'>
                 <div className='titre'> 
                 
                     <h2>Envie de cuisiner ?</h2>
                     <div className='surlignage surlignage_h2'></div> 
                    
                </div>
                    <img className="tablier"alt="cuisiner" src={tablier} />
                     <a className='contact_lien contact_lien_bas ' href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank"><div className='contact contact_tablier'>Entrer en cuisine ici</div></a>
             
              </section>
              
              <img className="ustensiles"alt="ustensiles" src={ustensiles} />

              <section className='presentation'>

                <div className='presentation_contenu'>
            
                    <div className='presentation_cercles'>
                              
                               <div className='cercle cercle_ingredient cercle_moi'></div>
                              
                    </div>  
                    <div className='resume'>
                               <p className='presentation_texte moi'>  Je suis Mélinda MENDY, alias Peche Melba, concepteur de site internet freelance.
                                                            J'ai plaisir à accompagner mes clients (particuliers, associations, entreprises) dans leur évolution numérique.
                               </p>
                               <p className='presentation_texte pourquoi'>
                                                             **Pourquoi choisir ma cuisine digitale ?**
                               </p>
                               <p className='presentation_texte arguments'>
                                                             J’élabore des sites internet comme un chef prépare ses plats : avec passion, précision et un brin de créativité. 
                                                             Mon rôle est de créer des sites web qui non seulement reflètent votre identité, mais qui optimisent l'expérience utilisateur et favorisent l'engagement de vos visiteurs.<br/><br/>
                                                             Vous êtes impliqué(e) à chaque étape, et vos retours sont essentiels pour vous satisfaire et répondre à vos attentes les plus fines.
                                                             Chaque projet est une véritable **création culinaire numérique** délicieuse à regarder et agréable à utiliser.<br/><br/>
                                                             Que vous ayez besoin d’un site vitrine ou d’une boutique en ligne, ensemble nous allons créer la **recette idéale** pour votre site internet où chaque élément a son rôle à jouer, du design à l’ergonomie.<br/><br/>
                                                             <a className='contact_lien contact_lien_presentation' href="https://docs.google.com/forms/d/15rzJwWATuNbTFtQhbdFNGqxIfmKMS81MDEgDK2HJqCk/edit" target="_blank">Contactez-moi</a> dès aujourd'hui, pour commencer à travailler sur votre projet gourmand et donner vie à vos idées.<br/>
                                                    
                                                    
                                                    
                               </p>
                                                    
                    </div>
                 </div>

              </section>
                   
                < Footer />

            </div>
              

        </div>
    )
}
export default Homefrench;