import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

function BackgroundCircles({ pageInfo }: Props) {
  return (
    // @ts-ignore -- motion.div type error but works in production
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex items-center justify-center'
    >
      <div className='absolute border border-[#4c4c4c] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='rounded-full border border-[#4c4c4c] h-[300px] w-[300px] absolute mt-52' />
      <div className='rounded-full border border-[#4c4c4c] h-[500px] w-[500px] absolute mt-52' />
      <div className='rounded-full border border-[#84FF57] opacity-80 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
      <div className='rounded full border border-[#333333] h-[800px] w-[800px] absolute mt-52' />
    </motion.div>
  );
}

export default BackgroundCircles;
