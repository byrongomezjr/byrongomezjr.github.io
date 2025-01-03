import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../typings';

type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen max-w-7xl px-10 mx-auto justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Experience
      </h3>

      <div className='w-full flex space-y-7 overflow-y-scroll flex-col scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#84FF57]/20 snap-y snap-mandatory mt-32 pb-10'>
        {experiences?.map(experience => (
          <div
            key={experience._id}
            className='flex flex-col space-y-4 flex-shrink-0 w-full snap-center p-10'
          >
            <div className='space-y-4'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                <h4 className='text-2xl font-light text-white'>{experience.jobTitle}</h4>
                <p className='text-gray-500 text-sm sm:text-base'>{experience.dateStarted} — {experience.isCurrentlyWorkingHere ? 'PRESENT' : experience.dateEnded}</p>
              </div>

              <h3 className='text-xl font-semibold text-[#84FF57]'>
                {experience.company} <span className='inline-block'>↗</span>
              </h3>

              <p className='text-gray-400 text-lg'>
                {experience.summary}
              </p>

              <div className='flex flex-wrap gap-2'>
                {experience.technologies?.map((technology) => (
                  <span
                    key={technology._id}
                    className='px-3 py-1 text-sm rounded-full bg-[#84FF57]/10 text-[#84FF57]'
                  >
                    {technology.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
