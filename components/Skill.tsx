import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className='object-cover w-20 h-20 transition duration-300 ease-in-out border border-gray-700 rounded-full xl:w-30 xl:h-30 md:w-28 md:h-28 filter group-hover:grayscale'
      />
      <div className='absolute z-0 w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-75 group-hover:bg-gray-700 md:w-28 md:h-28 xl:w-32 xl:h-32'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-[#84FF57] opacity-100'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
