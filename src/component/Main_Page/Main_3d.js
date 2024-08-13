import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Main_3d = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // 기본적인 설정
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.setClearColor(0x000000, 1); // 0x000000은 검은색

        // mountRef에 캔버스를 추가
        mountRef.current.appendChild(renderer.domElement);

        // 별 생성
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 5000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 2000; // -1000에서 +1000까지의 난수 생성
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0x888888 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // 카메라 위치 설정
        camera.position.z = 1;

        // 애니메이션 함수
        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.001; // 별들이 천천히 회전
            renderer.render(scene, camera);
        };

        animate();

        // 리사이즈 이벤트 처리
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // 컴포넌트 언마운트 시 정리
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
            window.removeEventListener('resize', () => { });
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default Main_3d;