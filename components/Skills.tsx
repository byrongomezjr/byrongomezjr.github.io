import React from 'react';
//import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <div className='flex flex-col gap-8 mt-24'>
        {/* Top row - 1 skill */}
        <div className='flex justify-center gap-8'>
          {skills?.slice(0, 1).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Second row - 2 skills */}
        <div className='flex justify-center gap-8'>
          {skills?.slice(1, 3).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Middle row - 3 skills */}
        <div className='flex justify-center gap-8'>
          {skills?.slice(3, 6).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Fourth row - 2 skills */}
        <div className='flex justify-center gap-8'>
          {skills?.slice(6, 8).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Bottom row - 1 skill */}
        <div className='flex justify-center gap-8'>
          {skills?.slice(8, 9).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
