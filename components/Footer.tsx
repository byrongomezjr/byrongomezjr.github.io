'use client';

import React from 'react';
import { SocialIcon as SocialIconType } from 'react-social-icons';

const SocialIcon = SocialIconType as React.FC<React.ComponentProps<typeof SocialIconType>>;

function Footer() {
  return (
    <footer className="sticky bottom-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <div className="flex flex-col items-center justify-between max-w-7xl mx-auto md:flex-row">
        <div className="flex space-x-4">
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

        <div className="text-sm">
          <p>
            Inspired by <span className="font-bold">Sonny Sangha&apos;s</span> Modern Portfolio approach on YouTube, and coded in <span className="font-bold">Cursor</span> by
            yours truly. Built with <span className="font-bold">Next.js</span> and <span className="font-bold">Tailwind CSS</span>, and deployed with{' '}
            <span className="font-bold">GitHub Pages</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;