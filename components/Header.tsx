import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-[9999] xl:items-center p-5 pointer-events-auto bg-transparent">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer pointer-events-auto'
      >
        <ThemeToggle />
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
          url='mailto:byrongomezjr@protonmail.com'
        />
        <Link href='mailto:byrongomezjr@protonmail.com'>
          <p className='hidden text-sm text-gray-400 uppercase md:inline-flex'>
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
