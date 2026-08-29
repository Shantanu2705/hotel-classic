"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function StylizedHotel() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05; // slower rotation
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 - 1;
    }
  });

  return (
    <group ref={group}>
      {/* Base/Ground */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[4, 4, 0.2, 32]} />
        <meshStandardMaterial color="#2A1C14" roughness={0.8} />
      </mesh>

      {/* Main Building Body */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 2]} />
        <meshStandardMaterial color="#FFFFF0" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Decorative Golden Roof */}
      <mesh position={[0, 4.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.5, 2.2]} />
        <meshStandardMaterial color="#C5A059" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Windows / Balconies Grid */}
      {Array.from({ length: 4 }).map((_, floor) => (
        <group key={`floor-${floor}`} position={[0, 0.8 + floor * 0.9, 1.05]}>
          {Array.from({ length: 3 }).map((_, win) => (
            <mesh key={`win-${floor}-${win}`} position={[-0.8 + win * 0.8, 0, 0]}>
              <planeGeometry args={[0.5, 0.6]} />
              <meshStandardMaterial color="#4A3125" emissive="#C5A059" emissiveIntensity={0.2} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Curved Balcony element (inspired by exterior image) */}
      <mesh position={[-1.6, 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 4, 16, 1, false, Math.PI / 2, Math.PI]} />
        <meshStandardMaterial color="#F5F1E6" roughness={0.3} />
      </mesh>
      
      {/* Entrance */}
      <mesh position={[0, 0.4, 1.1]} castShadow receiveShadow>
        <boxGeometry args={[1, 0.8, 0.2]} />
        <meshStandardMaterial color="#2A1C14" />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        Math.random() * 10 - 2,
        (Math.random() - 0.5) * 15,
      ] as [number, number, number],
      scale: Math.random() * 0.05 + 0.02,
    }));
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={4}>
          <mesh position={p.position} scale={p.scale}>
            <sphereGeometry />
            <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={2} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [5, 4, 8], fov: 45 }}>
        {/* We can make canvas transparent to show section bg */}
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={1024}
        />
        <spotLight 
          position={[-5, 5, 5]} 
          angle={0.3} 
          penumbra={1} 
          intensity={2} 
          color="#C5A059" 
        />
        
        <FloatingParticles />
        <StylizedHotel />
        
        <Environment preset="city" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
