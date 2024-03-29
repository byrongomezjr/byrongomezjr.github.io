import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hello, my name is ${pageInfo?.name}`,
      'My main focus is implementing clean design,',
      '...and building responsive applications.',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
      <BackgroundCircles pageInfo={pageInfo} />
      <picture>
        <img
          className='relative object-cover w-32 h-32 mx-auto rounded-full'
          src={urlFor(pageInfo?.heroImage).url()}
          alt='profile picture'
        />
      </picture>
      <div className='z-20'>
        <h2 className='text-sm text-gray-500 uppercase pb-2 tracking-[10px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='px-8 font-semibold text-1xl lg:text-2xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='lightgreen' />
        </h1>
        <div className='flex'>

      <p className='flex justify-center max-w-6xl pt-10 text-sm font-light text-center'>{pageInfo?.backgroundInformation}</p>
    </div>


        <div className='pt-10'>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
