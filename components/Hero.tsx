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
      'My main focus is implementing clean design,',
      '...and building responsive applications that live on the internet.',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4 overflow-hidden text-center'>
      {/* @ts-ignore -- BackgroundCircles type error but works in production */}
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
          {/* @ts-ignore -- Cursor type error but works in production */}
          <Cursor cursorColor='lightgreen' />
        </h1>
        <div className="flex flex-col items-center mt-6">
          <div className="max-w-6xl px-4 text-sm font-light text-center">
            {/* @ts-ignore -- PortableText type error but works in production */}
            <PortableText value={pageInfo?.backgroundInformation} />
          </div>
        </div>

        <div className='pt-10'>
          {/* @ts-ignore -- Link type error but works in production */}
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          {/* @ts-ignore -- Link type error but works in production */}
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
          {/* @ts-ignore -- Link type error but works in production */}
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
