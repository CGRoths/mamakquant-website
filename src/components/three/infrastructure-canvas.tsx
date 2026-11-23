"use client";

import { Line, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  AdditiveBlending,
  CatmullRomCurve3,
  Color,
  Shape,
  Vector3,
  type Group,
  type Mesh,
} from "three";

function chamferedShape(width: number, height: number, cut: number) {
  const shape = new Shape();
  shape.moveTo(-width / 2 + cut, -height / 2);
  shape.lineTo(width / 2 - cut, -height / 2);
  shape.lineTo(width / 2, -height / 2 + cut);
  shape.lineTo(width / 2, height / 2 - cut);
  shape.lineTo(width / 2 - cut, height / 2);
  shape.lineTo(-width / 2 + cut, height / 2);
  shape.lineTo(-width / 2, height / 2 - cut);
  shape.lineTo(-width / 2, -height / 2 + cut);
  shape.closePath();
  return shape;
}

function Housing({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}) {
  const shape = useMemo(() => chamferedShape(1.75, 0.62, 0.16), []);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <extrudeGeometry
          args={[
            shape,
            {
              depth: 0.34,
              bevelEnabled: true,
              bevelSegments: 2,
              bevelSize: 0.055,
              bevelThickness: 0.055,
              steps: 1,
            },
          ]}
        />
        <meshPhysicalMaterial
          color="#161d25"
          metalness={0.92}
          roughness={0.24}
          clearcoat={0.38}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <mesh position={[0, 0, 0.43]}>
        <boxGeometry args={[1.2, 0.07, 0.045]} />
        <meshStandardMaterial
          color="#f4c430"
          emissive="#d49b00"
          emissiveIntensity={1.7}
          toneMapped={false}
        />
      </mesh>
      {[-0.54, 0.54].map((x) => (
        <mesh key={x} position={[x, 0, 0.44]}>
          <boxGeometry args={[0.018, 0.34, 0.025]} />
          <meshBasicMaterial color="#6f7a86" />
        </mesh>
      ))}
    </group>
  );
}

function GovernanceFrame() {
  const frame = [
    [-2.15, -1.55, 0.1],
    [2.15, -1.55, 0.1],
    [2.15, 1.55, 0.1],
    [-2.15, 1.55, 0.1],
    [-2.15, -1.55, 0.1],
  ] as [number, number, number][];
  const rear = frame.map(([x, y]) => [x * 0.84, y * 0.84, -0.75]) as [
    number,
    number,
    number,
  ][];

  return (
    <group rotation={[0.08, 0, -0.03]}>
      <Line points={frame} color="#5573a8" transparent opacity={0.58} lineWidth={0.7} />
      <Line points={rear} color="#2c8495" transparent opacity={0.34} lineWidth={0.55} />
      {frame.slice(0, 4).map((point, index) => (
        <Line
          key={index}
          points={[point, rear[index]]}
          color="#42606f"
          transparent
          opacity={0.38}
          lineWidth={0.45}
        />
      ))}
      <mesh position={[0, 1.55, 0.1]}>
        <boxGeometry args={[0.85, 0.035, 0.035]} />
        <meshBasicMaterial color="#f4c430" toneMapped={false} />
      </mesh>
    </group>
  );
}

function DataPlanes() {
  return (
    <group>
      {[-0.82, 0, 0.82].map((y, index) => (
        <mesh
          key={y}
          position={[0.1 + index * 0.08, y, -0.52 - index * 0.12]}
          rotation={[0, -0.08, 0]}
        >
          <planeGeometry args={[3.35 - index * 0.24, 0.48, 14, 2]} />
          <meshBasicMaterial
            color={index === 1 ? "#f4c430" : index === 0 ? "#4bd2e5" : "#5579dd"}
            transparent
            opacity={index === 1 ? 0.12 : 0.09}
            wireframe
            blending={AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function DataPackets({ reducedMotion }: { reducedMotion: boolean }) {
  const packetGroup = useRef<Group>(null);
  const packetCount = 28;
  const packets = useMemo(
    () =>
      Array.from({ length: packetCount }, (_, index) => ({
        x: -4.5 + (index / packetCount) * 9,
        y: Math.sin(index * 2.17) * (index < 12 ? 1.55 : 0.5),
        z: -0.35 + ((index * 7) % 9) * 0.09,
        size: index % 5 === 0 ? 0.045 : 0.025,
      })),
    [],
  );

  useFrame((_, delta) => {
    if (!packetGroup.current || reducedMotion) return;
    packetGroup.current.position.x += delta * 0.2;
    if (packetGroup.current.position.x > 0.32) {
      packetGroup.current.position.x = -0.32;
    }
  });

  return (
    <group ref={packetGroup}>
      {packets.map((packet, index) => (
        <mesh key={index} position={[packet.x, packet.y, packet.z]}>
          <octahedronGeometry args={[packet.size, 0]} />
          <meshBasicMaterial
            color={index < 12 ? "#54d8e9" : index > 21 ? "#f4c430" : "#8aa4ff"}
            transparent
            opacity={0.48 + (index % 4) * 0.12}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function FeedbackCircuit() {
  const curve = useMemo(
    () =>
      new CatmullRomCurve3(
        [
          new Vector3(2.15, -0.7, -0.08),
          new Vector3(2.75, -1.32, -0.3),
          new Vector3(0.4, -1.85, -0.6),
          new Vector3(-2.55, -1.15, -0.35),
          new Vector3(-2.05, -0.68, -0.05),
        ],
        false,
        "catmullrom",
        0.35,
      ).getPoints(72),
    [],
  );

  return (
    <Line
      points={curve}
      color="#f4c430"
      transparent
      opacity={0.48}
      lineWidth={0.8}
    />
  );
}

function InfrastructureMonolith({ reducedMotion }: { reducedMotion: boolean }) {
  const assembly = useRef<Group>(null);
  const core = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!assembly.current) return;
    const pointerX = reducedMotion ? 0 : state.pointer.x * 0.12;
    const pointerY = reducedMotion ? 0 : state.pointer.y * 0.07;
    assembly.current.rotation.y +=
      (pointerX - assembly.current.rotation.y) * Math.min(1, delta * 2.2);
    assembly.current.rotation.x +=
      (-pointerY - assembly.current.rotation.x) * Math.min(1, delta * 2.2);
    if (!reducedMotion) {
      assembly.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.012;
      if (core.current) {
        core.current.scale.setScalar(
          1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.025,
        );
      }
    }
  });

  return (
    <group ref={assembly} rotation={[0.02, -0.04, 0]}>
      <DataPlanes />
      <GovernanceFrame />
      <Housing position={[-0.78, 0.65, -0.05]} rotation={[0, 0, Math.PI / 4]} />
      <Housing position={[0.78, 0.65, -0.05]} rotation={[0, 0, -Math.PI / 4]} />
      <Housing position={[-0.78, -0.65, -0.05]} rotation={[0, 0, -Math.PI / 4]} />
      <Housing position={[0.78, -0.65, -0.05]} rotation={[0, 0, Math.PI / 4]} />
      <Housing position={[0, 0, -0.22]} rotation={[0, 0, Math.PI / 2]} scale={[0.74, 0.88, 1]} />

      <mesh ref={core} position={[0, 0, 0.52]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.76, 0.76, 0.3]} />
        <meshPhysicalMaterial
          color="#f4c430"
          emissive="#7a5600"
          emissiveIntensity={0.72}
          metalness={0.82}
          roughness={0.2}
          clearcoat={0.75}
        />
      </mesh>
      <mesh position={[0, 0, 0.73]}>
        <boxGeometry args={[0.32, 0.32, 0.035]} />
        <meshBasicMaterial color="#080a0c" />
      </mesh>

      <Line
        points={[
          [-4.2, 0.1, -0.22],
          [-2.5, 0.1, -0.22],
          [-1.45, 0.22, 0.05],
        ]}
        color="#54d8e9"
        transparent
        opacity={0.58}
        lineWidth={0.75}
      />
      <Line
        points={[
          [1.45, -0.18, 0.05],
          [2.45, -0.04, -0.22],
          [4.2, -0.04, -0.22],
        ]}
        color="#f4c430"
        transparent
        opacity={0.8}
        lineWidth={0.9}
      />
      <FeedbackCircuit />
      <DataPackets reducedMotion={reducedMotion} />
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
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <color attach="background" args={[new Color("#040609")]} />
      <PerspectiveCamera makeDefault position={[0, 0.12, 6.8]} fov={39} />
      <ambientLight intensity={0.42} />
      <directionalLight position={[4, 5, 7]} intensity={1.7} color="#e8f2ff" />
      <pointLight position={[-3.5, 1.2, 2.5]} intensity={2.2} color="#2ac8e1" />
      <pointLight position={[3.5, -1.2, 2.2]} intensity={2.4} color="#f4c430" />
      <InfrastructureMonolith reducedMotion={reducedMotion} />
    </Canvas>
  );
}
