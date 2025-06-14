'use client';

import React from 'react';
import { SocialIcon as SocialIconType } from 'react-social-icons';

const SocialIcon = SocialIconType as React.FC<React.ComponentProps<typeof SocialIconType>>;

function Footer() {
  return (
    <footer className="sticky bottom-0 z-20 flex items-center justify-between p-5 mx-auto max-w-7xl">
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

      <p className="flex-1 mx-4 text-sm text-center">
        <a>Coded</a>
        <a href="https://www.cursor.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
        </a> by yours truly, & built with{' '}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          Next.js,
        </a>{' '}
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          Tailwind CSS & Three.js;
        </a> deployed with{' '}
        <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-50">
          GitHub Pages
        </a>.
      </p>
    </footer>
  );
}

export default Footer;