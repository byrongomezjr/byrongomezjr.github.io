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
        {/* First Diamond Pattern */}
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

        {/* Row 4 - 3 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(9, 12).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 5 - 2 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(12, 14).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Second Diamond Pattern */}
        {/* Row 6 - 2 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(14, 16).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 7 - 3 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(16, 19).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 8 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(19, 23).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 9 - 3 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(23, 26).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 10 - 2 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(26, 28).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
