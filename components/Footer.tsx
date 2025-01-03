import React from 'react';
import Link from 'next/link';
import { SocialIcon as SocialIconType } from 'react-social-icons';

const SocialIcon = SocialIconType as React.FC<React.ComponentProps<typeof SocialIconType>>;

function Footer() {
  return (
    <div className="w-full p-4 bg-[#333333] text-gray-400">
      <div className="flex flex-col items-center justify-between max-w-7xl mx-auto md:flex-row">
        {/* Social Icons */}
        <div className="flex space-x-4">
          {/* @ts-ignore -- SocialIcon type error but works in production */}
          <SocialIcon
            url="https://instagram.com/byrongomezjr"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="hover:opacity-50"
          />
          {/* @ts-ignore -- SocialIcon type error but works in production */}
          <SocialIcon
            url="https://www.twitch.tv/byrongomezjr"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="hover:opacity-50"
          />
        </div>

        {/* Tech Stack Info */}
        <div className="text-sm">
          <p>
            Inspired by <span className="text-white">Sonny Sangha&apos;s</span> Modern Portfolio approach on YouTube, and coded in <span className="text-white">Cursor</span> by
            yours truly. Built with <span className="text-white">Next.js</span> and <span className="text-white">Tailwind CSS</span>, and deployed with{' '}
            <span className="text-white">GitHub Pages</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;