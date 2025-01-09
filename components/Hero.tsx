import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';
import { PortableText } from "@portabletext/react";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  console.log("PageInfo received:", pageInfo);
  console.log("Background Info:", pageInfo?.backgroundInformation);

  const [text, count] = useTypewriter({
    words: [
      `Hello, my name is ${pageInfo?.name}`,
      'I build scalable systems,',
      'and solve complex problems...',
      'for the modern web.',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-2 overflow-hidden text-center'>
      <BackgroundCircles pageInfo={pageInfo} />
      <picture>
        <img
          className='relative object-cover w-32 h-32 mx-auto rounded-full'
          src={urlFor(pageInfo?.heroImage).url()}
          alt='profile picture'
        />
      </picture>
      <div className='z-20'>
        <h2 className='text-sm text-gray-500 uppercase pb-2 tracking-[12px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='px-8 font-semibold text-1xl lg:text-2xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='lightgreen' />
        </h1>

        <div className="flex flex-col items-center mt-6">
          <div className="max-w-6xl px-4 text-sm font-light text-center">
            {/* @ts-ignore -- PortableText type error but works in production */}
            <PortableText value={pageInfo?.backgroundInformation} />
          </div>
        </div>

        <div className='pt-6'>
          <Link href="#experience">
            <button className='heroButton hover:text-[#2E7D32] dark:hover:text-[#84FF57]/80'>Experience</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton hover:text-[#2E7D32] dark:hover:text-[#84FF57]/80'>Projects</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton hover:text-[#2E7D32] dark:hover:text-[#84FF57]/80'>Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
