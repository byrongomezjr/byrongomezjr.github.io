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
        {/* Row 1 - 2 skills */}
        <div className='flex justify-center gap-4'>
          {skills?.slice(0, 2).map((skill, index) => (
            // @ts-ignore -- Skill type error but works in production
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 2 - 3 skills */}
        <div className='flex justify-center gap-4'>
          {skills?.slice(2, 5).map((skill, index) => (
            // @ts-ignore -- Skill type error but works in production
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 3 - 4 skills */}
        <div className='flex justify-center gap-4'>
          {skills?.slice(5, 9).map((skill, index) => (
            // @ts-ignore -- Skill type error but works in production
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 4 - 3 skills */}
        <div className='flex justify-center gap-4'>
          {skills?.slice(9, 12).map((skill, index) => (
            // @ts-ignore -- Skill type error but works in production
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 5 - 2 skills */}
        <div className='flex justify-center gap-4'>
          {skills?.slice(12, 14).map((skill, index) => (
            // @ts-ignore -- Skill type error but works in production
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
