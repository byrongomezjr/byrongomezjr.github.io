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
      className='relative flex flex-col items-center h-screen max-w-7xl px-10 mx-auto justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Projects
      </h3>

      <div className='w-full flex space-y-7 overflow-y-scroll flex-col scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#84FF57]/20 snap-y snap-mandatory mt-32 pb-10'>
        {projects?.map((project, i) => (
          <div 
            key={project._id} 
            className='flex flex-col space-y-4 flex-shrink-0 w-full snap-center p-10'
          >
            <div className='space-y-4'>
              <h4 className='text-2xl font-semibold'>
                <span className='underline decoration-[#84FF57]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2'>
                {project?.technologies?.map((technology) => (
                  technology && technology.image && (
                    // @ts-ignore -- Image type error but works in production
                    <Image
                      key={technology._id}
                      className='w-10 h-10'
                      src={urlFor(technology.image).url()}
                      alt={technology.title || 'Technology'}
                      width={40}
                      height={40}
                    />
                  )
                ))}
              </div>

              <p className='text-gray-400 text-lg'>
                {project?.summary}
              </p>

              {project.linkToBuild && (
                <div className='flex items-center'>
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-6 py-2 text-sm border rounded-full border-[#84FF57]/50 hover:border-[#84FF57]/40 hover:bg-[#84FF57]/10'
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
