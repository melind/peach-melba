/* global THREE */ 
import * as THREE from 'three';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './index.css'




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
              const widthSegments = 40;
              const heightSegments = 30;

              const geometry= new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);

             // const loader = new THREE.TextureLoader();
               const material = new THREE.MeshStandardMaterial({
                 color: 0xdf4f15, roughness: 0.6, metalness: 0.1
                 });
          /*const material = new THREE.MeshBasicMaterial({

                 map: loader.load(texture),
                 });*/
               const peach = new THREE.Mesh(geometry, material);


                 scene.add(peach);


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


                    peach.rotation.x = time;
                    peach.rotation.y = time;

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
        <Link to="/"><p>Accueil</p> </Link> 
        <h1>   "404" </h1>
       
         <canvas id="peach"> </canvas>
        </div>
    )
}

export default NotFound;