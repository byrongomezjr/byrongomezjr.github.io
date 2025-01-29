import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import type { Experience } from '../typings';

type Props = {
  experiences: Experience[];
};

// Add type definition for motion.div
const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>;

function Experience({ experiences }: Props) {
  return (
    // @ts-ignore -- motion.div type error but works in production
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen px-4 sm:px-8 md:px-10 mx-auto justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Experience
      </h3>

      <div className='w-full flex flex-col space-y-7 overflow-y-scroll 
        max-w-[90%] sm:max-w-[85%] md:max-w-5xl lg:max-w-6xl 
        scrollbar-thin scrollbar-track-gray-400/20 
        scrollbar-thumb-[#2E7D32]/40 dark:scrollbar-thumb-[#84FF57]/40 
        mt-32 pb-10
        h-[70vh] sm:h-[75vh]'
      >
        {experiences?.map(experience => (
          <div
            key={experience._id}
            className='flex flex-col space-y-4 flex-shrink-0 w-full p-4 sm:p-8 md:p-10'
          >
            <div className='space-y-6'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                <h4 className='text-xl sm:text-2xl font-light text-black dark:text-white'>
                  {experience.jobTitle}
                </h4>
                <p className='text-gray-500 text-sm sm:text-base'>{experience.dateStarted} — {experience.isCurrentlyWorkingHere ? 'PRESENT' : experience.dateEnded}</p>
              </div>

              <h3 className='text-lg sm:text-xl font-semibold text-[#2E7D32] dark:text-[#84FF57]/80'>
                {experience.company} <span className='inline-block'>↗</span>
              </h3>

              <p className='text-gray-400 text-base sm:text-lg max-w-3xl'>
                {experience.summary}
              </p>

              {/* Technologies */}
              <div className='flex flex-wrap gap-2'>
                {experience.technologies?.map((technology) => (
                  <span
                    key={technology._id}
                    className='px-3 py-1 text-sm rounded-full 
                      bg-[#2E7D32]/10 text-[#2E7D32] 
                      dark:bg-[#84FF57]/10 dark:text-[#84FF57]'
                  >
                    {technology.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}

export default Experience;
