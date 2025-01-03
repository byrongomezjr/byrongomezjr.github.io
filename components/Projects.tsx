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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 flex flex-col items-center min-h-screen max-w-full mx-auto text-left md:flex-row justify-evenly py-20'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl items-center justify-center'>
        Projects
      </h3>

      <div className='relative z-20 flex flex-col w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#84FF57]/20 space-y-2 mt-20'>
        {projects?.map((project, i) => (
          <div key={project._id} className='flex flex-col items-center justify-center flex-shrink-0 w-screen snap-center p-5'>
            <div className='max-w-4xl px-0 space-y-4 md:px-10'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#84FF57]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className='flex items-center justify-center space-x-2'>
                {project?.technologies?.map((technology) => (
                  technology && technology.image && (
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

              <p className='font-light text-center text-md md:text-left'>
                {project?.summary}
              </p>

              {project.linkToBuild && (
                <div className='flex items-center justify-center'>
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

      <div className='w-full absolute top-[20%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
      <div className='w-full absolute top-[22%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
      <div className='w-full absolute bottom-[22%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
      <div className='w-full absolute bottom-[20%] bg-[#84FF57]/5 left-0 h-[10px] -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;
