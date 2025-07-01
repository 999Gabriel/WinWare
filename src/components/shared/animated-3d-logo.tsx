"use client";

import { Canvas } from '@react-three/fiber';
import { Icosahedron, OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <>
      <Icosahedron args={[2.2, 1]}>
        <meshStandardMaterial
            color={'hsl(180, 86%, 51%)'}
            roughness={0.2}
            metalness={0.7}
        />
      </Icosahedron>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 5, 5]} intensity={1.2} />
      <directionalLight position={[-10, -5, -5]} intensity={0.8} color={'hsl(217, 89%, 61%)'} />
    </>
  );
}

function Animated3dLogo() {
  return (
    <div className="w-full h-full">
        <Canvas>
            <Scene />
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    </div>
  );
}

export default Animated3dLogo;
