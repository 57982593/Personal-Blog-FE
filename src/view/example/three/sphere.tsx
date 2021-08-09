import React, {useEffect} from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Scene} from "three";

interface SphereParamsType {
  position: {
    x: number,
    y: number,
    z: number,
  }
  color?: number | string,
}

function Sphere() {
  const { innerHeight, innerWidth }: any = window;
  const POSITION = '0.2576358183991232  0.1664015878482985  0.0634055318525100\n' +
      '0.9243452028077073  0.8330408978760389  0.0991063818342539\n' +
      '0.5909903354286072  0.4997137493791683  0.0386164355771115\n' +
      '0.5910090425683450  0.4997139210074124  0.1544755870563108\n' +
      '0.7527151393766118  0.1763875042751479  0.0172522353067421\n' +
      '0.7525418374193862  0.6614840916048976  0.0172524785786834\n' +
      '0.2676639768906384  0.6612928090026600  0.0172530344057620\n' +
      '0.7521171473593640  0.6608188311828513  0.1743613293742001\n' +
      '0.2688010795172033  0.6608283488498969  0.1743629154475954\n' +
      '0.7521124202330114  0.1774982589736425  0.1743630705668409';
  let scene: Scene;

  function parsePosition(position: string) {
    const arr = position.split('\n');
    return arr.map((p: string) => {
      const pArr = p.split('  ');
      const obj = {x: 0, y: 0, z: 0};
      obj.x = parseFloat(pArr[0]);
      obj.y = parseFloat(pArr[1]);
      obj.z = parseFloat(pArr[2]);
      return obj;
    });
  }

  function createSphere({ position, color = 'green' }: SphereParamsType) {
    const {x,y,z} = position;
    const sphereGeo = new THREE.SphereGeometry(0.02, 32, 16);//创建球体
    const sphereMat = new THREE.MeshLambertMaterial({//创建材料
      color,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);//创建球体网格模型
    sphereMesh.position.set(x, y, z);//设置球的坐标
    scene.add(sphereMesh);//将球体添加到场景
    return {
      sphereMesh
    };
  }

  function renderSphere() {
    const dom: HTMLDivElement = document.querySelector('#sphere') as HTMLDivElement;
    scene = new THREE.Scene();
    const width = innerWidth - 200;
    const height = innerHeight - 64 - 70;
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
    camera.position.set(1.5, 1.5, 1.5);
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

    const positions = parsePosition(POSITION);
    positions.forEach((p: any) => {
      createSphere({position: p});
    });
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
    renderer.render(scene, camera);
    function animate() {

      requestAnimationFrame( animate );

      controls.update();

      renderer.render( scene, camera );

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
