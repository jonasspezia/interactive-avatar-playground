"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

function Avatar({ url, speaking }: { url: string; speaking: boolean }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface SceneProps {
  url: string;
  speaking: boolean;
}

export function Scene({ url, speaking }: SceneProps) {
  return (
    <Canvas shadows camera={{ position: [0, 1.5, 3], fov: 45 }}>
      <Stage environment="city" intensity={0.5}>
        <Avatar url={url} speaking={speaking} />
      </Stage>
      <OrbitControls 
        enableZoom={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
