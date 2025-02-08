"use client";

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Visage } from '@readyplayerme/visage';
import { useAtom } from 'jotai';
import { selectedAvatarAtom } from './avatar-selector';

interface Avatar3DProps {
  speaking: boolean;
}

export function Avatar3D({ speaking }: Avatar3DProps) {
  const [selectedAvatar] = useAtom(selectedAvatarAtom);
  const avatarRef = useRef();

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border border-border">
      <Canvas shadows camera={{ position: [0, 1.5, 3], fov: 45 }}>
        <Stage environment="city" intensity={0.5}>
          <Visage
            ref={avatarRef}
            modelSrc={selectedAvatar}
            animations={{
              idle: 'https://assets.readyplayer.me/animations/idle.glb',
              talking: 'https://assets.readyplayer.me/animations/talking.glb'
            }}
            currentAnimation={speaking ? 'talking' : 'idle'}
          />
        </Stage>
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
