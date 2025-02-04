import React from 'react';
import { Skill } from './Skill';

type Props = {
  skills: {
    _id: string;
    title: string;
    image: any;
  }[];
};

function Skills({ skills }: Props) {
  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-4 sm:px-8 md:px-10 min-h-screen justify-center mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Skills
      </h3>

      <div className='flex flex-col gap-8 sm:gap-10 mt-32 max-w-full md:max-w-5xl lg:max-w-6xl mx-auto'>
        {/* Row 1 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(0, 4).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 2 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(4, 8).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 3 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(8, 12).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 4 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(12, 16).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Row 5 - 4 skills */}
        <div className='flex justify-center gap-4 sm:gap-6'>
          {skills?.slice(16, 20).map((skill, index) => (
            <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Optional Row 6 - remaining skills */}
        {skills?.length > 20 && (
          <div className='flex justify-center gap-4 sm:gap-6'>
            {skills?.slice(20).map((skill, index) => (
              <Skill key={skill._id} skill={skill} directionLeft={index % 2 === 0} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
