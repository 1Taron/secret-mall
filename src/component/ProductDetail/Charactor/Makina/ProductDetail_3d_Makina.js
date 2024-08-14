import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import '../../../../css/ProductDetail/ProductDetail_3d.css';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; //OrbitControls는 import 이런식으로
// import { OrbitControls } from '@react-three/drei';

export default function ProductDetail_3d_Makina() {
    const viewBoxRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        // 씬, 카메라, 렌더러 설정
        const scene = new THREE.Scene();

        // 카메라 FOV
        // const camera = new THREE.PerspectiveCamera(60, 650 / 800, 0.1, 1000);
        const aspect = 641 / 736; // 가로/세로 비율
        const camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(641, 736);
        renderer.shadowMap.enabled = true;
        viewBoxRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // 카메라 위치 설정
        camera.position.set(0, 30, 90);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false; //패닝 기능
        controls.enableZoom = true; //확대 기능
        controls.target.set(0, 1, 0);
        controls.update();

        // 배경 색상 설정
        // const textureLoader = new THREE.TextureLoader();
        // const backgroundTexture = textureLoader.load('/path/to/your/background.jpg');
        // scene.background = backgroundTexture;
        scene.background = new THREE.Color(0xa0a0a0);
        // scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

        const hemiLight = new THREE.HemisphereLight(0xffddef, 0x8d8d8d, 1);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 3);
        dirLight.position.set(3, 12, 15);
        dirLight.castShadow = true; //그림자 생성
        scene.add(dirLight);

        // 조명 추가
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
        directionalLight.position.set(10, 20); // 조명 위치 조정
        scene.add(directionalLight);

        //텍스쳐 로더
        const textureLoader = new THREE.TextureLoader();
        const Rusk_Alpha = textureLoader.load('Models/Rusk_v1.21/Textures/Rusk_Alpha.png');
        const Rusk_Body = textureLoader.load('Models/Rusk_v1.21/Textures/Rusk_Body.png');
        const Rusk_Costume = textureLoader.load('Models/Rusk_v1.21/Textures/Rusk_Costume.png');
        const Rusk_Hair = textureLoader.load('Models/Rusk_v1.21/Textures/Rusk_Hair.png');
        const Rusk_Face = textureLoader.load('Models/Rusk_v1.21/Textures/Rusk_Face.png');

        // FBX 모델 로드
        const loader = new FBXLoader();
        loader.load(
            '/Models/Rusk_v1.21/FBX/Rusk_v1.2.1.fbx',
            fbx => {
                fbx.scale.set(0.25, 0.25, 0.25); // 모델 스케일 조정
                fbx.position.set(0, -15, 0);
                fbx.traverse(child => {
                    child.material = new THREE.MeshStandardMaterial();
                    if (child.isMesh) {
                        switch (child.name) {
                            case 'hair':
                                child.material.map = Rusk_Costume;
                                child.material.map = Rusk_Hair;
                                break;
                            case 'Body':
                                child.material.map = Rusk_Face; // 얼굴 텍스처 적용
                                child.material.alphaMap = Rusk_Alpha; // 알파 맵 적용
                                child.material.color.set(0xffffff); // 기본 색상을 흰색으로 설정
                                break;
                            case 'body_2':
                                child.material.map = Rusk_Body; // Rust_Body ��스처 적용
                                break;
                            case 'kemomimi':
                                child.material.map = Rusk_Hair;
                                break;
                            case 'tail':
                                child.material.map = Rusk_Hair;
                                break;
                            case 'knee-socks':
                                child.material.map = Rusk_Costume; // Rusk_Costume 텍스처 적용
                                break;
                            case 'parker':
                                child.material.map = Rusk_Costume; // Rusk_Costume 텍스처 적용
                                break;
                            case 'sneakers':
                                child.material.map = Rusk_Costume; // Rusk_Costume 텍스처 적용
                                break;

                            default:
                                break; // 해당 이름이 아닐 경우 아무것도 하지 않음
                        }
                        // 텍스처가 적용된 후 머티리얼의 필요 속성 업데이트
                        child.material.needsUpdate = true; // 머티리얼 업데이트
                    }
                });

                scene.add(fbx);
            },
            undefined,
            error => {
                console.error(error);
            }
        );

        // 애니메이션 루프
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // 컴포넌트 언마운트 시 정리
        return () => {
            if (viewBoxRef.current && rendererRef.current) {
                viewBoxRef.current.removeChild(rendererRef.current.domElement);
            }
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
