import React, { useEffect } from "react";
import * as THREE from "three";
import {useBaseStyle} from "../../../assets/hooks/style";
const Three = () => {
  const { innerHeight, innerWidth }: any = window;
  const { layoutHeight100, layoutWidth100 } = useBaseStyle();
  function getLine() {
    const material = new THREE.LineBasicMaterial( { color: 'red'  } );
    const points = [];
    points.push( new THREE.Vector3( - 1, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 1, 0 ) );
    points.push( new THREE.Vector3( 1, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    return {geometry, material};
  }
  function threeRender() {
    const dom: HTMLDivElement = document.querySelector('#three') as HTMLDivElement;
    const { geometry:lineGeometry, material:lineMaterial } = getLine();
    const scene = new THREE.Scene();
    const width = innerWidth - 200;
    const height = innerHeight - 64 - 70;
    // 创建一个 透视摄像机
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    const geometry = new THREE.CircleGeometry();
    const material = new THREE.MeshBasicMaterial({color: 'red'});
    const cube = new THREE.Mesh(geometry, material);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(cube);
    scene.add(line);
    console.log('scene:', scene);

    camera.position.z = 5;

    dom.appendChild(renderer.domElement)

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }

  useEffect(() => {
    threeRender();
  }, []);
  return (
      <>
        <div id={'three'} className={`${layoutHeight100} ${layoutWidth100}`}>
        </div>
      </>
  );
};
export {
  Three,
};
