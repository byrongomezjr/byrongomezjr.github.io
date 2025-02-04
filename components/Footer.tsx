'use client';

import React from 'react';
import { SocialIcon as SocialIconType } from 'react-social-icons';

const SocialIcon = SocialIconType as React.FC<React.ComponentProps<typeof SocialIconType>>;

function Footer() {
  return (
    <footer className="sticky bottom-0 flex items-center justify-between max-w-7xl mx-auto z-20 p-5">
      <div className="flex items-center space-x-4">
        <SocialIcon
          url="https://instagram.com/byrongomezjr"
          target="_blank"
          fgColor="currentColor"
          bgColor="transparent"
          className="hover:opacity-50"
        />
        <SocialIcon
          url="https://www.twitch.tv/byrongomezjr"
          target="_blank"
          fgColor="currentColor"
          bgColor="transparent"
          className="hover:opacity-50"
        />
      </div>

      <p className="text-sm">
        Inspired by <span className="font-bold">Sonny Sangha&apos;s</span> Modern Portfolio approach; check out his{' '}
        <a href="https://www.youtube.com/@sonnysangha" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          YouTube
        </a> channel, coded in{' '}
        <a href="https://www.cursor.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          Cursor
        </a> by yours truly. Built with{' '}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          Next.js
        </a> and{' '}
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          Tailwind CSS
        </a>, and deployed with{' '}
        <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          GitHub Pages
        </a>.
      </p>
    </footer>
  );
}

export default Footer;