"use client";

import { useState } from 'react';
import { useAtom } from 'jotai';
import { atom } from 'jotai';

export const selectedAvatarAtom = atom('https://models.readyplayer.me/6544e6094de790c4f9b0e015.glb');

const avatars = [
  {
    id: 'casual-male',
    name: 'João',
    url: 'https://models.readyplayer.me/6544e6094de790c4f9b0e015.glb',
    thumbnail: 'https://i.imgur.com/YqQUoSa.png'
  },
  {
    id: 'business-female',
    name: 'Maria',
    url: 'https://models.readyplayer.me/6544e60a4de790c4f9b0e016.glb',
    thumbnail: 'https://i.imgur.com/8tGOxAE.png'
  },
  {
    id: 'casual-female',
    name: 'Ana',
    url: 'https://models.readyplayer.me/6544e60b4de790c4f9b0e017.glb',
    thumbnail: 'https://i.imgur.com/QzJJHN2.png'
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
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
            <img
              src={avatar.thumbnail}
              alt={avatar.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium">{avatar.name}</span>
        </button>
      ))}
    </div>
  );
}
