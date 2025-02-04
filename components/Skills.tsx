import React from 'react';
//import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-4 sm:px-8 md:px-10 min-h-screen justify-center mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Skills
      </h3>

      <div className='flex flex-col gap-8 sm:gap-10 mt-32 max-w-full md:max-w-5xl lg:max-w-6xl mx-auto'>
        {/* Diamond Pattern */}
        {/* Row 1 - 2 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(0, 2).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 2 - 3 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(2, 5).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 3 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(5, 9).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 4 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(9, 13).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 5 - 3 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(13, 16).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 6 - 2 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(16, 18).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
