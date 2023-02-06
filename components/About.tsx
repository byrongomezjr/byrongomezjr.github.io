import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
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
        src='https://camo.githubusercontent.com/e11a32381972fad0b47e97dd9e498d3d6f136dd1f31148ba600537fdf0262370/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f2d375776624c6462314974435065454a427641557a3072577432556e6c674c4a44766d69764b64472d7356524a6563456f374e7552376770554c64614e765a574a624361517777544e745733484c4e7554322d79323733416d544f6374427a394965744f3d77363030'
        className='flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
      />

      <div className='px-0 space-y-8 md:px-8'>
        <h4 className='text-2xl font-semibold'>
          <span className='underline decoration-[#84FF57]/50'>About Me</span>
          &nbsp;
        </h4>
        <p className='text-md'>
          I am a Computer Science & Economics student at Rutgers, The State
          University of New Jersey - Newark; and form part of the Computer
          Science Club - currently on my second year. I love implementing
          responsiveness and clean design to personal projects such as mobile
          and web apps that live on the internet; My interests range from
          Software Engineering to Machine Learning.
        </p>
      </div>
    </motion.div>
  );
}
