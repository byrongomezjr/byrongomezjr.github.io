/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto text-left overflown-hidden md:flex-row justify-evenly'
    >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-1xl'>
              Projects
            </h3>

      <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#84FF57]/20 space-y-2'>

        {projects?.map((project, i) => (
          <>

            {' '}
            {/* JSX Wrapping element */}
            <picture className='flex flex-col items-center justify-center flex-shrink-0 object-contain w-screen h-screen snap-center'>
              <motion.img className="object-cover pb-4"
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt='project image'
              />

              <div className='max-w-4xl px-0 space-y-4 md:px-10'>
                <h4 className='text-2xl font-semibold text-center'>
                  <span className='underline decoration-[#84FF57]/50'>
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  {/* { ' '} is used for spacing */}
                  {project?.title}
                </h4>

                <p className='font-light text-center text-md md:text-left'>
                  {project?.summary}
                </p>

                <Link href='https://github.com/byrongomezjr/ChatAI' className='m-10 text-sm font-light text-center underline text-lime-700 md:text-left'>
                  {project?.linkToBuild}
                </Link>
              </div>
            </picture>
          </>
        ))}
      </div>

      <div className='w-full absolute top-[20%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
      <div className='w-full absolute top-[22%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
      <div className='w-full absolute bottom-[22%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
      <div className='w-full absolute bottom-[20%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;
