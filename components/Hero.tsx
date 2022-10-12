import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hello, my name is Byron Gomez Jr.","My main focus is implementing clean design,", "...and building responsive applications."],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
        <BackgroundCircles />
        <picture>
          <img className="relative object-cover w-32 h-32 mx-auto rounded-full" src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="profile picture"/>
        </picture>
        <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="px-8 text-2xl font-semibold lg:text-4xl">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="lightgreen"/>
        </h1>

        <div className="pt-10">
          <Link href="#about">
          <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
          <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
          <button className="heroButton">Projects</button>
          </Link>

        </div>
        </div>
    </div>
  )
}

export default Hero