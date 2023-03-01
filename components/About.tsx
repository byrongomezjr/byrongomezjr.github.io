import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='relative flex flex-col items-center h-screen px-8 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-1xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className='flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
      />

      <div className='px-0 space-y-8 md:px-8'>
        <h4 className='text-2xl font-semibold'>
          <span className='underline decoration-[#84FF57]/50'>About Me</span>
          &nbsp;
        </h4>
        <p className='text-md'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
