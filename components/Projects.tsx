/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
//import Link from 'next/link';
//import { url } from 'inspector';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    // @ts-ignore -- motion.div type error but works in production
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center h-screen px-4 mx-auto sm:px-8 md:px-10 justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-[#84FF57] text-[#000000] text-1xl'>
        Projects
      </h3>

      <div className='w-full flex flex-col space-y-7 overflow-y-scroll 
        max-w-[90%] sm:max-w-[85%] md:max-w-5xl lg:max-w-6xl
        scrollbar-thin 
        scrollbar-track-gray-400/20 
        scrollbar-thumb-[#759a67] dark:scrollbar-thumb-[#84FF57]/80 
        snap-y snap-mandatory mt-32 pb-10
        h-[70vh] sm:h-[75vh]'
      >
        {projects
          ?.sort((a, b) => (a.order || 0) - (b.order || 0))
          ?.map((project, i) => (
          <div 
            key={project._id} 
            className='flex flex-col flex-shrink-0 w-full p-4 space-y-6 snap-center sm:p-8 md:p-10'
          >
            <div className='space-y-6'>
              <h4 className='text-xl font-semibold sm:text-2xl'>
                <span className='underline decoration-[#759a67] dark:decoration-[#84FF57]/80'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className='flex flex-wrap items-center space-x-3 gap-y-2'>
                {project?.technologies?.map((technology) => (
                  technology && technology.image && (
                    <Image
                      key={technology._id}
                      className='w-8 h-8 sm:w-10 sm:h-10'
                      src={urlFor(technology.image).url()}
                      alt={technology.title || 'Technology'}
                      width={40}
                      height={40}
                    />
                  )
                ))}
              </div>

              <p className='max-w-3xl text-base text-gray-900 dark:text-gray-200 sm:text-lg'>
                {project?.summary}
              </p>

              {project.linkToBuild && (
                <div className='flex items-center pt-2'>
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-6 py-2 text-sm sm:text-base border rounded-full 
                      border-[##759a67] hover:border-[#759a67] hover:bg-[#759a67] 
                      dark:border-[#84FF57]/80 dark:hover:border-[#84FF57]/80 dark:hover:bg-[#84FF57]/80 
                      transition-colors duration-200'
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
