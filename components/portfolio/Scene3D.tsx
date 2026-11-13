"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type Kind = "ico" | "torus" | "oct";

function Shape({
  position,
  kind,
  scale = 1,
}: {
  position: [number, number, number];
  kind: Kind;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.3;
    ref.current.rotation.y += delta * 0.4;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        {kind === "ico" && <icosahedronGeometry args={[1, 0]} />}
        {kind === "torus" && <torusKnotGeometry args={[0.7, 0.25, 100, 16]} />}
        {kind === "oct" && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.25}
          metalness={0.6}
          roughness={0.2}
          wireframe={kind === "oct"}
        />
      </mesh>
    </Float>
  );
}

function Rig() {
  useFrame((state) => {
    const { x, y } = state.pointer;
    state.camera.position.x += (x * 1.2 - state.camera.position.x) * 0.05;
    state.camera.position.y += (y * 0.8 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, isMobile ? 1.25 : 2]}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#10b981" />
      <pointLight position={[-5, -3, 2]} intensity={20} color="#ffffff" />

      <Shape kind="ico" position={[-2.6, 0.8, 0]} scale={0.9} />
      <Shape kind="torus" position={[2.4, -0.6, -1]} scale={0.8} />
      <Shape kind="oct" position={[0.2, 1.8, -2]} scale={0.7} />
      {!isMobile && <Shape kind="ico" position={[3.4, 1.8, -3]} scale={0.5} />}

      <Stars
        radius={60}
        depth={40}
        count={isMobile ? 800 : 2500}
        factor={3}
        fade
        speed={1}
      />
      <Rig />
    </Canvas>
  );
                             }
