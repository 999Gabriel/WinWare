"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { OrbitControls } from '@react-three/drei';

function WBox({ y = 0, color = '#FFD700', thickness = 0.15, length = 2, scale = 1 }) {
  // Ein "W" aus 4 Boxen (Quadern)
  // Die Koordinaten sind so gewählt, dass ein klassisches W entsteht
  // Balken 1: links oben nach links unten
  // Balken 2: links unten nach Mitte oben
  // Balken 3: Mitte oben nach rechts unten
  // Balken 4: rechts unten nach rechts oben
  return (
    <group position={[0, y, 0]} scale={[scale, scale, scale]}>
      {/* Balken 1 */}
      <mesh position={[-0.75, 0, 0]} rotation={[0, 0, Math.PI / 5]}>
        <boxGeometry args={[thickness, length, thickness]} />
        <meshStandardMaterial color={color} metalness={1} roughness={0.18} />
      </mesh>
      {/* Balken 2 */}
      <mesh position={[-0.25, -0.2, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <boxGeometry args={[thickness, length * 0.7, thickness]} />
        <meshStandardMaterial color={color} metalness={1} roughness={0.18} />
      </mesh>
      {/* Balken 3 */}
      <mesh position={[0.25, -0.2, 0]} rotation={[0, 0, Math.PI / 5]}>
        <boxGeometry args={[thickness, length * 0.7, thickness]} />
        <meshStandardMaterial color={color} metalness={1} roughness={0.18} />
      </mesh>
      {/* Balken 4 */}
      <mesh position={[0.75, 0, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <boxGeometry args={[thickness, length, thickness]} />
        <meshStandardMaterial color={color} metalness={1} roughness={0.18} />
      </mesh>
    </group>
  );
}

function DoubleW() {
  const group = useRef<Group>(null!);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });
  return (
    <group ref={group}>
      <WBox y={0.13} color="#FFD700" thickness={0.15} length={2} scale={1.1} />
      <WBox y={-0.13} color="#bfae6a" thickness={0.15} length={2} scale={1} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <DoubleW />
      {/* Keylight */}
      <directionalLight position={[10, 10, 10]} intensity={10.2} color="#fffbe6" castShadow />
      {/* Fülllicht */}
      <ambientLight intensity={100.7} />
      {/* Backlight */}
      <directionalLight position={[-8, -4, -8]} intensity={0.7} color="#FFD700" />

    </>
  );
}

function Animated3dLogo() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <Scene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default Animated3dLogo;
