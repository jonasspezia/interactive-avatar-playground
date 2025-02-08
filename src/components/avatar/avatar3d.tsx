"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { useAtom } from 'jotai';
import { selectedAvatarAtom } from './avatar-selector';
import { useGLTF } from '@react-three/drei';

const Avatar = dynamic(() => import('./avatar').then(mod => mod.Avatar), {
  ssr: false
});

interface Avatar3DProps {
  speaking: boolean;
}

export function Avatar3D({ speaking }: Avatar3DProps) {
  const [selectedAvatar] = useAtom(selectedAvatarAtom);

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border border-border">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D Avatar...</div>}>
        <Canvas shadows camera={{ position: [0, 1.5, 3], fov: 45 }}>
          <Stage environment="city" intensity={0.5}>
            <Avatar url={selectedAvatar} speaking={speaking} />
          </Stage>
          <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
