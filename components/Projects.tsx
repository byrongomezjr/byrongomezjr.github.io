/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto text-left overflown-hidden md:flex-row justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl'>
        Projects
      </h3>

      <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
        {projects.map((project, i) => (
          <>
            {' '}
            {/* JSX Wrapping element */}
            <picture className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src='https://media.istockphoto.com/id/1239504264/video/sign-under-construction.jpg?s=640x640&k=20&c=5MENTQPYV7RnBbTurz3rF20oJLbDgGPHh-IjAWvAS7k='
                alt='under-construction'
              />

              <div className='max-w-6xl px-0 space-y-10 md:px-10'>
                <h4 className='text-2xl font-semibold text-center'>
                  <span className='underline decoration-[#84FF57]/50'>
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  {/* { ' '} is used for spacing */}
                  Circles App Written in Swift
                </h4>

                <p className='text-lg text-center md:text-left'>
                  Modern chat application written in Swift for iOS, built using
                  CometChatPro's Chat SDK loaded with advanced in-app messaging
                  features for smooth user experience.
                </p>
              </div>
            </picture>
          </>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#84FF57]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;
