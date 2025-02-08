"use client";

import { useAtom } from 'jotai';
import { selectedAvatarAtom } from './avatar-selector';
import Image from 'next/image';

interface Avatar3DProps {
  speaking: boolean;
}

export function Avatar3D({ speaking }: Avatar3DProps) {
  const [selectedAvatar] = useAtom(selectedAvatarAtom);

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border border-border bg-secondary/20 relative">
      <div className={`w-full h-full transition-transform duration-200 ${speaking ? 'scale-105' : 'scale-100'}`}>
        <Image
          src={selectedAvatar}
          alt="Avatar"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
