import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

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
import ae from '../../images/ae.png';
import ai from '../../images/ai.png';
import id from '../../images/id.png';
import ps from '../../images/ps.png';
import logo1 from '../../icones/logo1.svg';
import Logo from '../Logo';
import Brandjp from '../Brandjp';
import Footerjapan from '../Footerjapan';

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


   window.addEventListener('scroll', function(e) {
  
              let rec_r = document.getElementsByClassName("rectangle_right")[0];
              let rec_l = document.getElementsByClassName("rectangle_left")[0];
              let pres_r = document.getElementsByClassName("presentation_right")[0];
              let pres_l = document.getElementsByClassName("presentation_left")[0];
             // let main = document.getElementsByClassName("Home")[0];

             if(rec_r) {
               let position_r = rec_r.getBoundingClientRect();


          

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


   }
const Homejapan = () => {
  
  

    return (
        <div className="page"  >
                  <div className="nav" >
                            <div className="tab">
                                  <a href="#graphisme"><div>グラフィック</div></a>
                                  <a href="#site"><div>Webサイト</div></a>
                                  <a href="#webmarketing"><div>Webマーケティング</div></a>
                                  <a href="#prestations"><div>サービス</div></a>
                                  <a href="#propos"><div>About</div></a>
                                 <div className="logo">
                                    <img src={logo1} width="40" alt="peche melba icone"/>
                                    < Logo  />
                                    <a className='language' href="/fr"  >français</a>
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
                           <a className='language language_mobile' href="/fr"  >français</a>
                            <div className="bar" >
                            
                                  <a href="#graphisme" className='a'><div>グラフィック</div></a>
                                  <a href="#site" className='a'><div>Webサイト</div></a>
                                  <a href="#webmarketing" className='a'><div>Webマーケティング</div></a>
                                  <a href="#prestations" className='a'><div>サービス</div></a>
                                  <a href="#propos" className='a'><div>About</div></a>
                                  <div className='a' onClick={hide}>X</div>
                            </div>  
                            
                   </div>
                 
                  
            <div className="home" >
                   <section className="presentation_" onClick={hide}>
            
                              
            
                              <div className="presentationContent_">

                                          <div className='brand_name presentation_title presentation_brand'> 
                                               < Brandjp />
                                               <h1 className='title'> Webサイトデザイナー </h1>
                                          </div>
                                         
                                              

                                               <div className='presentation_left '>

                                                <h2>材料</h2>

                                                <div className='stack'>
                                                    <div className='logiciels'>
                                                      <img alt="ai" src={ai} />
                                                      <img alt="ps" src={ps} />
                                                      <img alt="id" src={id} />
                                                      <img alt="ae" src={ae} />
                                                    </div>
                                                    <div className='langages'>
                                                      <img alt="react-typescript" className="react" src={react_typescript} />
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
                                            <h2>準備</h2>
                                            <ol>
                                              <li>Webサイトのグラフィックデザイン</li>
                                              <li>Webサイトの作成</li>
                                              <li>Webサイトを宣伝する</li>
                                            </ol> 
                                          </div>

                                         


                              </div>
            
                    </section>


            
                   <section className="mainContent_ content" onClick={hide}>

                     <h2>私のウェブサイトの全部または一部を作成するには：</h2>

                    

                     <div id="graphisme" className='realisation_type  '>
                       
                           <div className='circle circle_top 'id="0" >

                                <p>グラフィック要素</p>

                           </div>

                           <div className='realisation_description '>
                            
                               <h3>1. 味は人それぞれです！ </h3> <br/>
                               <p>
                                
                                  <em className='citation'> 「 私は自分の色の象徴を定義します。」</em><br/><br/>
                                  確かに、色の象徴は国や文化によって異なります。
                                           だから、あなたが感じる色を自由に選んでください。
                                           一緒に私たちはあなたのウェブサイトの外観を開発します。
                                           <br/><br/> <a  href="https://www.behance.net/gallery/143722639/BarBeer-Shop" target="_blank">例 </a>
                               </p>
                              
                           </div>

                         

                     </div>

                     <div className='rectangle rectangle_right ' ></div>
                     

                     <div id="site" className='realisation_type realisation_type_middle '>
                                <div className='circle circle_center'id="1" >

                                        <p>Webサイトの作成</p>


                                </div>
                                <div className='realisation_description '>
                              
                                      <h3>2. 委任の芸術 !</h3> <br/>
                                      <p>
                                      <em className='citation'>  「 私のサービスに与えられたスキルのおかげで、私のウェブサイトの実現があります。」</em><br/><br/>
                                      あなたのウェブサイトのグラフィックモデルの検証後、私たちはそれの開発を進めます。
                                              これは、CMS（WordPressなど）を介して実行されるか、完全に手動で実行されます。
                                             
                                      </p>
                                      
                                </div>                   
                       </div>

                     <div className='rectangle rectangle_left '></div>
                     

                     <div id="webmarketing" className='realisation_type  ' >

                     <div className='circle circle_bottom' id="2" >

                                <p>宣伝用の資料</p>
                                </div>

                     
                         <div className='realisation_description '>

                         
                              <h3>3. 選択することは放棄することです！ </h3> <br/>
                              <p>  
                              <em className='citation'> 「 私は自分のセクターに適したコミュニケーションチャネルをターゲットにすることで、自分のWebサイトのプロモーションを最大化します。」</em><br/><br/>
                              私たちはあなたのウェブサイトやあなたの活動を宣伝するために印刷またはデジタル形式でビジュアルを作成します。
                                                   <em>ソーシャルネットワークにまだ参加していない場合は、選択のお手伝いをします。</ em>
                                                   
                                                   <br/><br/><a href="https://www.behance.net/gallery/144979215/Bannieres-publicitaires" target="_blank">例 1 </a> /
                                                   <a href="https://www.behance.net/gallery/143743881/BarBeer-Shop-Promotion" target="_blank">例 2 </a> /
                                                   <a href="https://www.behance.net/gallery/143743593/Storyboard-Motion-design-BarBeer-Shop" target="_blank">例 3 </a> 
                        
                              </p>
                         
                               
                              
                          </div>
                   
            
                     </div> 
                 </section>



                 <section id="prestations" className='prestations_list content'>
                   <h2 className=''>料理したいですか？</h2>

                   <h3>私たちのレシピ</h3>

                   <div className='prestations prestations_menus '>

                               <div>
                                          <p>標準のショーケースサイト</p>
                                          <ul>
                                            <li>グラフィカルチャーター</li>
                                            <li>Webサイト - <strong>ワードプレス</strong> </li>
                                            <li>Webサイトの立ち上げ </li>
                                            <li>ドメイン名</li>
                                            <li>ホスティング</li>
                                          </ul>
                                        </div>
                                        <div>
                                          <p>パーソナライズされた<br/>ショーケースサイト</p>
                                          <ul>
                                            <li>グラフィカルチャーター</li>
                                            <li>Webサイト -  ワードプレス <strong>なし</strong></li>
                                            <li>Webサイトの立ち上げ</li>
                                            <li>ドメイン名</li>
                                            <li>ホスティング</li>
                                          </ul>
                                        </div>
                                        <div>
                                          <p>標準のECサイト</p>
                                          <ul>
                                            <li>グラフィカルチャーター</li>
                                            <li>Webサイト - <strong>ワードプレス</strong></li>
                                            <li>Webサイトの立ち上げ </li>
                                            <li>ドメイン名</li>
                                            <li>ホスティング</li>
                                          </ul>
                                        </div>


                               </div>

                  

                   <div className='prestations prestations_formulas'>

                                 <div>
                                         <p>グラフィカルチャーター</p>
                                         <ul>
                                           <li>色の選択</li>
                                           <li>タイポグラフィ</li>
                                           <li>Webサイトのモックアップ</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <p>ウェブ開発</p>
                                         <ul>
                                           <li>Webサイト <br/> ワードプレスの有無にかかわらず</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <p>ビジュアルコミュニケーション</p>
                                         <ul>
                                           <li> 印刷メディア (チラシ、ポスター)</li>
                                           <li> デジタルメディア </li>
                                           <li>(メールのビジュアル、<br/> ソーシャルネットワークのビジュアル、...)</li>
                                         </ul>
                                 </div>

                     
                   </div>

                  
                      
                  


                 </section>

                 <section className='apropos content' id="propos"> <br/><br/>
                   <h2>About</h2>
                   <p> フリーランスのウェブ開発者兼ウェブデザイナーのメリンダ・メンディです。 <br/> <br/>
                   ウェブ開発者トレーニングとウェブデザイナーを完了した後、
                   私はフリーランスの冒険に乗り出しました<br/>
                   私はクライアント（個人、協会、企業）のデジタル開発をサポートすることを楽しんでいます。
                   
                   </p>
                   <p className='contact'> 
                   <br/>
                   <strong>コンタクト :</strong> <br/><br/> melinda@pechemelba.fr /   <a href="https://www.malt.fr/profile/pechemelba" target="_blank">Malt</a> / <a href="https://docs.google.com/forms/d/1zhGAym4yMBAbdb5ffzQTg5FgONLz1lBZQiukrh33evw/edit" target="_blank">Form</a>
                    </p> <br/>
                 
                 </section>


                 </div>
                 <Footerjapan />

        </div>
    )
}
export default Homejapan;