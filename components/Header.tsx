import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between p-3 mx-auto max-w-7xl xl:items-center'>
      {' '}
      {/* mx-auto allows items to relocate to middle */}
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
        <SocialIcon
          url='https://github.com/byrongomezjr'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://instagram.com/byrongomezjr'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://linkedin.com/in/byrongomezjr'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <Link href='#contact'>
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
            duration: 1,
          }}
          className='flex flex-row items-center cursor-pointer text-gray'
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='hidden text-sm uppercase text-gray md:inline-flex'>
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
