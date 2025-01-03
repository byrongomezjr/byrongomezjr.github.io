import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between p-3 mx-auto max-w-7xl xl:items-center'>
      {' '}
      {/* mx-auto allows items to relocate to middle */}
      {/* @ts-ignore -- motion.div type error but works in production */}
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
          // @ts-ignore -- SocialIcon type error but works in production
            <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      {/* Get In Touch */}
      {/* @ts-ignore -- Link type error but works in production */}
      <Link href='#contact'>
        {/* @ts-ignore -- motion.div type error but works in production */}
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
          onClick={() => window.location.href = 'mailto:byrongomezjr@protonmail.com'}
        >
          {/* @ts-ignore -- SocialIcon type error but works in production */}
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
  ) as React.ReactElement;
};

export default Header as unknown as (props: Props) => React.ReactElement;
