import React from 'react';
import { motion } from 'framer-motion';
import type { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';
//import { reverse } from 'dns';

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  const randomX = [0, 
    Math.random() * 30 - 15, 
    Math.random() * 40 - 20, 
    Math.random() * 30 - 15,
    Math.random() * 40 - 20, 
    0
  ];
  
  const randomY = [0,
    Math.random() * 30 - 15,
    Math.random() * 40 - 20,
    Math.random() * 30 - 15,
    Math.random() * 40 - 20,
    0
  ];

  return (
    <div className='relative flex cursor-pointer group'>
      {/* @ts-ignore -- motion.img type error but works in production */}
      <motion.img
        initial={{ opacity: 1 }}
        animate={{
          x: randomX,
          y: randomY,
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1]
        }}
        style={{ opacity: 1 }}
        src={urlFor(skill?.image).url()}
        className='object-cover w-20 h-20 border border-gray-700 rounded-full xl:w-30 xl:h-30 md:w-28 md:h-28 filter group-hover:grayscale'
      />
      <div className='absolute z-0 w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-75 group-hover:bg-gray-700 md:w-28 md:h-28 xl:w-32 xl:h-32'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-white opacity-100'>
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
