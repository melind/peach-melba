/* global THREE */ 
import * as THREE from 'three';
import React, { useEffect } from 'react';

import './index.css'


//main();



const NotFound = () => {

    function main() {

  const canvas = document.querySelector('#peach');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // valeur par défaut du canevas
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 30;
  const scene = new THREE.Scene();
    scene.background = new THREE.Color('#5b0025');

  {
  const color = 0xf79203;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
  }
    
    const radius = 17;
    const widthSegments = 80;
    const heightSegments = 100;
    
    const geometry= new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);

    
     const material = new THREE.MeshStandardMaterial({color: 0xdf4f15, roughness: 0.6, metalness: 0.1});

     const peach = new THREE.Mesh(geometry, material);
    

    scene.add(peach);
    renderer.render(scene, camera);
  /*   
  //const material = new THREE.MeshBasicMaterial({color: 0x44aa88});//without light
  const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // cyan
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  renderer.render(scene, camera);*/



    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
  function render(time) {
    time *= 0.001;  // convert time to seconds
      if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      const pixelRatio = window.devicePixelRatio;
      const width  = canvas.clientWidth  * pixelRatio | 0;
      const height = canvas.clientHeight * pixelRatio | 0;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
  }

    /*cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });
   
       peach.rotation.x = time;
      peach.rotation.y = time;*/

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}
    useEffect(() => {
    main();
    }, []);

    return (
        <div className="ntf"> 
        <h1>   "404" </h1>
       
         <canvas id="peach"> </canvas>
        
        </div>
    )
}

export default NotFound;