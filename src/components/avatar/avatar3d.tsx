"use client";

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Visage } from '@readyplayerme/visage';

interface Avatar3DProps {
  speaking: boolean;
}

export function Avatar3D({ speaking }: Avatar3DProps) {
  const avatarRef = useRef();

  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Visage
          ref={avatarRef}
          modelSrc="/avatar.glb"
          animations={{
            idle: '/animations/idle.glb',
            talking: '/animations/talking.glb'
          }}
          currentAnimation={speaking ? 'talking' : 'idle'}
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
