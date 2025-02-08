"use client";

import { useState } from 'react';
import { useAtom } from 'jotai';
import { atom } from 'jotai';
import Image from 'next/image';

export const selectedAvatarAtom = atom('/avatars/avatar1.png');

const avatars = [
  {
    id: 'avatar1',
    name: 'João',
    url: '/avatars/avatar1.png',
  },
  {
    id: 'avatar2',
    name: 'Maria',
    url: '/avatars/avatar2.png',
  },
  {
    id: 'avatar3',
    name: 'Ana',
    url: '/avatars/avatar3.png',
  }
];

export function AvatarSelector() {
  const [selectedAvatar, setSelectedAvatar] = useAtom(selectedAvatarAtom);

  return (
    <div className="flex gap-4 p-4">
      {avatars.map((avatar) => (
        <button
          key={avatar.id}
          onClick={() => setSelectedAvatar(avatar.url)}
          className={`flex flex-col items-center p-2 rounded-lg transition-all ${
            selectedAvatar === avatar.url
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary hover:bg-secondary/80'
          }`}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2 relative">
            <Image
              src={avatar.url}
              alt={avatar.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium">{avatar.name}</span>
        </button>
      ))}
    </div>
  );
}
