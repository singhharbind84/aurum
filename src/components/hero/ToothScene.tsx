"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Tooth() {
  const mesh = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const positions: number[] = [];
    const indices: number[] = [];
    const segments = 72;
    const rings = 48;
    const profile = [
      [-1.45, 0.02], [-1.15, 0.18], [-0.75, 0.28], [-0.42, 0.36],
      [-0.1, 0.55], [0.2, 0.7], [0.55, 0.76], [0.9, 0.72],
      [1.18, 0.56], [1.35, 0.28], [1.4, 0.03],
    ];
    const radiusAt = (y: number) => {
      for (let i = 0; i < profile.length - 1; i += 1) {
        const [y0, r0] = profile[i];
        const [y1, r1] = profile[i + 1];
        if (y <= y1) {
          const t = (y - y0) / (y1 - y0);
          return r0 + (r1 - r0) * t;
        }
      }
      return 0.02;
    };

    for (let row = 0; row <= rings; row += 1) {
      const y = -1.45 + (2.85 * row) / rings;
      const radius = radiusAt(y);
      for (let col = 0; col <= segments; col += 1) {
        const angle = (col / segments) * Math.PI * 2;
        const lobes = 1 + 0.045 * Math.cos(angle * 4) * Math.max(0, y + 0.2);
        positions.push(
          Math.cos(angle) * radius * lobes,
          y,
          Math.sin(angle) * radius * lobes,
        );
        if (row < rings && col < segments) {
          const a = row * (segments + 1) + col;
          const b = a + segments + 1;
          indices.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
    }

    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    result.setIndex(indices);
    result.computeVertexNormals();
    return result;
  }, []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.12;
    mesh.current.rotation.x = THREE.MathUtils.damp(
      mesh.current.rotation.x,
      state.pointer.y * 0.12,
      2,
      delta,
    );
    mesh.current.rotation.z = THREE.MathUtils.damp(
      mesh.current.rotation.z,
      -state.pointer.x * 0.14,
      2,
      delta,
    );
  });

  return (
    <mesh ref={mesh} geometry={geometry} castShadow receiveShadow rotation={[0, 0, 0.08]}>
      <meshPhysicalMaterial
        color="#fffdf7"
        roughness={0.19}
        metalness={0.02}
        clearcoat={1}
        clearcoatRoughness={0.12}
        reflectivity={0.7}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 5]} intensity={3.1} color="#ffffff" />
      <pointLight position={[-4, 1, 3]} intensity={1.7} color="#6bd8fa" />
      <pointLight position={[2, -3, -2]} intensity={1.3} color="#b4fff1" />
      <Float speed={1.2} rotationIntensity={0.13} floatIntensity={0.35}>
        <Tooth />
      </Float>
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[-1.28, 0.75, -0.5]}>
          <icosahedronGeometry args={[0.14, 2]} />
          <meshPhysicalMaterial color="#c9f5ff" roughness={0.08} metalness={0.12} transmission={0.72} thickness={0.5} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.7} floatIntensity={0.45}>
        <mesh position={[1.15, -0.78, 0.2]}>
          <icosahedronGeometry args={[0.1, 2]} />
          <meshPhysicalMaterial color="#e2fffa" roughness={0.08} metalness={0.08} transmission={0.75} thickness={0.6} />
        </mesh>
      </Float>
      <Sparkles count={42} scale={4.2} size={2.2} speed={0.25} opacity={0.55} color="#38bdf8" />
    </>
  );
}

export default function ToothScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 36 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      fallback={<div role="img" aria-label="Dental care" className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85)" }} />}
      aria-label="Interactive 3D rendering of a tooth"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
