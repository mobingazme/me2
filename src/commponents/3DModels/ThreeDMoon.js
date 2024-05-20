'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDMoon = () => {
  const mountRef = useRef(null);
  const containerRef = useRef(null); 

  useEffect(() => {
    let scene, camera, renderer, controls;

    const mount = containerRef.current;

    const init = () => {
      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setClearAlpha(0);
      mount.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 1, 1000);
      camera.position.set(5, 0, 0);
      scene.add(camera);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.maxPolarAngle = Math.PI / 2;
      controls.enableZoom = false;

      const ambientLight = new THREE.AmbientLight(0x666666);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 5, 10, 0);
      camera.add(pointLight);

      const loader = new GLTFLoader();
      loader.load(
        '/3DModels/the_moon/scene.gltf',
        function (gltf) {
          const model = gltf.scene;
          model.scale.set(1.5, 1.5, 1.5);
          scene.add(model);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
    
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      controls.autoRotate = true;
      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className=' w-[400px] h-[400px] md:w-[450px] md:h-[450px] overflow-hidden cursor-pointer'  />;
};

export default ThreeDMoon;
