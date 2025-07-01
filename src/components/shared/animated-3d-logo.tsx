"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Color } from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      <Icosahedron args={[2.2, 1]} ref={meshRef}>
        <MeshDistortMaterial
            color={new Color('hsl(217, 89%, 61%)')}
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.7}
        />
      </Icosahedron>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 5, 5]} intensity={1.2} />
      <directionalLight position={[-10, -5, -5]} intensity={0.8} color={new Color('hsl(180, 86%, 51%)')} />
    </>
  );
}

export function Animated3dLogo() {
  return (
    <div className="w-full h-full">
        <Canvas>
            <Scene />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.75} />
        </Canvas>
    </div>
  );
}
