"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import type { TechnologyMode } from "./TechnologyExperience";

function DentalArch({ color }: { color: string }) {
  return (
    <group rotation={[0.25, 0, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.11, 16, 72, Math.PI]} />
        <meshStandardMaterial color={color} roughness={0.28} metalness={0.18} />
      </mesh>
      {Array.from({ length: 8 }, (_, index) => {
        const angle = Math.PI - (index / 7) * Math.PI;
        const x = Math.cos(angle) * 0.89;
        const z = Math.sin(angle) * 0.89;
        return (
          <mesh key={index} position={[x, 0.03, z]} rotation={[0, -angle, (index - 3.5) * 0.04]}>
            <boxGeometry args={[0.18, 0.26 - Math.abs(index - 3.5) * 0.018, 0.16]} />
            <meshPhysicalMaterial color="#fffdf7" roughness={0.22} clearcoat={0.8} />
          </mesh>
        );
      })}
    </group>
  );
}

function Implant() {
  const screw = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (screw.current) {
      screw.current.rotation.y += delta * 0.3;
      screw.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.04;
    }
  });
  return (
    <group ref={screw}>
      <mesh position={[0, 0.24, 0]}>
        <cylinderGeometry args={[0.17, 0.2, 0.78, 40]} />
        <meshStandardMaterial color="#a8d7e5" metalness={0.72} roughness={0.22} />
      </mesh>
      {[-0.06, 0.08, 0.22, 0.36, 0.5].map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.18, 0.035, 8, 36]} />
          <meshStandardMaterial color="#e1faff" metalness={0.72} roughness={0.2} />
        </mesh>
      ))}
      <mesh position={[0, 0.73, 0]}>
        <cylinderGeometry args={[0.25, 0.17, 0.2, 40]} />
        <meshPhysicalMaterial color="#fffdf7" roughness={0.2} clearcoat={0.9} />
      </mesh>
    </group>
  );
}

function Scanner() {
  const device = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!device.current) return;
    device.current.rotation.y += delta * 0.12;
    device.current.rotation.x = THREE.MathUtils.damp(
      device.current.rotation.x,
      state.pointer.y * 0.08,
      2,
      delta,
    );
  });
  return (
    <group ref={device} rotation={[0.18, -0.22, -0.2]}>
      <mesh position={[0.85, 0.55, -0.2]} rotation={[0, 0, -0.55]}>
        <boxGeometry args={[0.8, 0.38, 0.3]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.2} clearcoat={0.9} />
      </mesh>
      <mesh position={[0.3, 0.15, -0.15]} rotation={[0, 0, -0.55]}>
        <cylinderGeometry args={[0.16, 0.17, 0.9, 32]} />
        <meshStandardMaterial color="#9bdff0" metalness={0.35} roughness={0.24} />
      </mesh>
      <mesh position={[-0.11, -0.1, -0.12]} rotation={[0, 0, -0.55]}>
        <boxGeometry args={[0.22, 0.26, 0.36]} />
        <meshPhysicalMaterial color="#effcff" roughness={0.12} metalness={0.18} clearcoat={1} />
      </mesh>
      <mesh position={[-0.29, -0.22, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.33, 0.025, 12, 72]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
    </group>
  );
}

function Model({ mode }: { mode: TechnologyMode }) {
  const color = mode === "implant" ? "#8de1ed" : "#38bdf8";
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} />
      <pointLight position={[-3, 1, 2]} intensity={1.7} color="#9ef7ed" />
      <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.3}>
        {mode === "implant" ? <Implant /> : mode === "scan" ? <Scanner /> : <DentalArch color={color} />}
      </Float>
      {mode === "scan" && <DentalArch color={color} />}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.86, 0]}>
        <ringGeometry args={[1.1, 1.12, 80]} />
        <meshBasicMaterial color="#83dff0" transparent opacity={0.55} side={THREE.DoubleSide} />
      </mesh>
      <Sparkles count={34} scale={3.8} size={2} speed={0.2} opacity={0.45} color="#38bdf8" />
    </>
  );
}

export default function TechScene({ mode }: { mode: TechnologyMode }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      fallback={<div className="h-full w-full bg-[radial-gradient(circle,#d5f5f8,#f1fbfb)]" />}
      aria-label="Interactive dental technology 3D visualization"
    >
      <Suspense fallback={null}><Model mode={mode} /></Suspense>
    </Canvas>
  );
}
