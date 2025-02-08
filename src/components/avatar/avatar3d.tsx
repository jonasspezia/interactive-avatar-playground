"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useAtom } from 'jotai';
import { selectedAvatarAtom } from './avatar-selector';

const Scene = dynamic(() => import('./scene').then(mod => mod.Scene), {
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
        <Scene url={selectedAvatar} speaking={speaking} />
      </Suspense>
    </div>
  );
}
