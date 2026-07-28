"use client";

import { Float, Line, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

const nodes = [
  [-2.9, 0.55, 0],
  [-1.8, -0.6, 0.35],
  [-0.7, 0.45, -0.2],
  [0.5, -0.45, 0.35],
  [1.65, 0.5, -0.15],
  [2.8, -0.35, 0.15],
] as const;

function QuantCore({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<Group>(null);
  const linePoints = useMemo(
    () => nodes.map(([x, y, z]) => [x, y, z] as [number, number, number]),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return;
    group.current.rotation.y += delta * 0.075;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.04;
  });

  return (
    <group ref={group}>
      <Float speed={reducedMotion ? 0 : 0.7} rotationIntensity={0.15} floatIntensity={0.18}>
        <mesh>
          <icosahedronGeometry args={[0.72, 2]} />
          <meshPhysicalMaterial
            color="#f4c430"
            emissive="#8b6500"
            emissiveIntensity={0.45}
            metalness={0.76}
            roughness={0.18}
            clearcoat={0.8}
          />
        </mesh>
        {[1.1, 1.55, 2.05].map((radius, index) => (
          <mesh
            key={radius}
            rotation={[Math.PI / (2.5 + index * 0.25), index * 0.7, index * 0.35]}
          >
            <torusGeometry args={[radius, 0.018 + index * 0.006, 12, 128]} />
            <meshBasicMaterial
              color={index === 0 ? "#f4c430" : index === 1 ? "#68d7e8" : "#4569d4"}
              transparent
              opacity={0.72 - index * 0.14}
            />
          </mesh>
        ))}
      </Float>

      <Line points={linePoints} color="#f4c430" lineWidth={0.8} transparent opacity={0.5} />
      {nodes.map(([x, y, z], index) => (
        <group key={`${x}-${y}`} position={[x, y, z]}>
          <mesh>
            <sphereGeometry args={[index === 0 || index === nodes.length - 1 ? 0.11 : 0.14, 20, 20]} />
            <meshStandardMaterial
              color={index >= 4 ? "#f4c430" : "#7bdce9"}
              emissive={index >= 4 ? "#8b6500" : "#0f7988"}
              emissiveIntensity={0.8}
            />
          </mesh>
          <pointLight
            color={index >= 4 ? "#f4c430" : "#56d6e6"}
            intensity={0.45}
            distance={1.4}
          />
        </group>
      ))}
    </group>
  );
}

export default function InfrastructureCanvas({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <PerspectiveCamera makeDefault position={[0, 0.25, 7]} fov={42} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 6]} intensity={1.25} color="#dbeafe" />
      <pointLight position={[-4, -2, 3]} intensity={1.2} color="#2ac8e1" />
      <Stars radius={20} depth={12} count={reducedMotion ? 80 : 240} factor={1.4} fade speed={0.2} />
      <QuantCore reducedMotion={reducedMotion} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.18}
        minPolarAngle={Math.PI * 0.36}
        maxPolarAngle={Math.PI * 0.64}
      />
    </Canvas>
  );
}
