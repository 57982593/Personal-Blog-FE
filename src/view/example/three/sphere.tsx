import React, {useEffect} from "react";
import * as THREE from "three";
import { Scene } from "three";

function Sphere() {
  const { innerHeight, innerWidth }: any = window;

  function createSphere(scene: Scene) {
    const sphereGeo = new THREE.SphereGeometry(16, 40, 40);//创建球体
    const sphereMat = new THREE.MeshLambertMaterial({//创建材料
      color:0xffff00,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);//创建球体网格模型
    sphereMesh.position.set(-25, 10, 0);//设置球的坐标
    scene.add(sphereMesh);//将球体添加到场景
    return {
      sphereMesh
    };
  }

  function renderSphere() {
    const dom: HTMLDivElement = document.querySelector('#sphere') as HTMLDivElement;
    const scene = new THREE.Scene();
    const width = innerWidth - 200;
    const height = innerHeight - 64 - 70;
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
    camera.position.set(100, 300, 100);
    camera.lookAt(new THREE.Vector3(0,0,0));//让相机指向原点
    const renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor(new THREE.Color(0x000000));//设置窗口背景颜色为黑
    renderer.setSize(width, height);//设置窗口尺寸
    dom.appendChild(renderer.domElement);
    const ambientLight = new THREE.AmbientLight( 0x606060 );
    scene.add( ambientLight );
    //平行光源
    const directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
    scene.add( directionalLight );
    const {sphereMesh} = createSphere(scene);
    renderer.render(scene, camera);

    function animate() {
      requestAnimationFrame(animate);
      // 设置材质每次旋转得距离
      sphereMesh.rotation.x += 0.01;
      sphereMesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }
  useEffect(() => {
    renderSphere();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
      <div id={'sphere'}/>
  )
}
export {
  Sphere,
}
