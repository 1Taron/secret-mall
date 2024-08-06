import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import '../../css/ProductDetail/ProductDetail_3d.css';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; //OrbitControls는 import 이런식으로
// import { OrbitControls } from '@react-three/drei';

export default function ProductDetail_3d() {
    const viewBoxRef = useRef(null);

    useEffect(() => {
        // 씬, 카메라, 렌더러 설정
        const scene = new THREE.Scene();

        // 카메라 FOV
        // const camera = new THREE.PerspectiveCamera(60, 650 / 800, 0.1, 1000);
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(641, 795);
        renderer.shadowMap.enabled = true;
        viewBoxRef.current.appendChild(renderer.domElement);

        // 카메라 위치 설정
        camera.position.set(-3, 5, 8);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.target.set(0, 1, 0);
        controls.update();

        // 배경 색상 설정
        // const textureLoader = new THREE.TextureLoader();
        // const backgroundTexture = textureLoader.load('/path/to/your/background.jpg');
        // scene.background = backgroundTexture;
        scene.background = new THREE.Color(0xa0a0a0);
        scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 3);
        dirLight.position.set(3, 12, 15);
        dirLight.castShadow = true; //그림자 생성
        scene.add(dirLight);

        // ground
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true; //바닥이 그림자를 받을 수 있도록
        mesh.position.y = -1.5;
        scene.add(mesh);

        // 조명 추가
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5); // 조명 위치 조정
        scene.add(directionalLight);

        // FBX 모델 로드
        const loader = new FBXLoader();
        loader.load(
            '/XBot.fbx',
            fbx => {
                fbx.scale.set(0.06, 0.03, 0.05); // 모델 스케일 조정
                fbx.position.set(0, -1.5, 0);
                fbx.traverse(child => {
                    if (child.isMesh) {
                        child.castShadow = true; // 모델이 그림자를 생성하도록 설정
                    }
                });
                scene.add(fbx);
            },
            undefined,
            error => {
                console.error(error);
            }
        );
        // GLB 모델 로드
        // const loader = new GLTFLoader(); // GLTFLoader 사용
        // loader.load(
        //     '/Xbot.glb', // GLB 파일 경로
        //     gltf => {
        //         gltf.scene.scale.set(0.05, 0.05, 0.03); // 모델 스케일 조정
        //         scene.add(gltf.scene);
        //     },
        //     undefined,
        //     error => {
        //         console.error(error);
        //     }
        // );

        // 애니메이션 루프
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // 컴포넌트 언마운트 시 정리
        return () => {
            viewBoxRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <>
            <div className="pd3_Container">
                <div className="pd3_viewbox" ref={viewBoxRef}></div>
            </div>
        </>
    );
}
