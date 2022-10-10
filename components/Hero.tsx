import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hello, my name is Byron Gomez Jr.","I am a Software Developer focused on implementing clean design and building responsive applications."],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
        <BackgroundCircles />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor="lightgreen"/>
        </h1>
    </div>
  )
}

export default Hero