import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { easings, stagger } from 'animejs';

const Hero = () => {
    const h1El = useRef()
    const p1El = useRef()
    const p2El = useRef()
    const p3El = useRef()
    // setInterval(() => {
    //   console.log(heroDiv.current)
    // }, 1000);
  
    useEffect(() => {
      anime({
        targets: [p1El.current, h1El.current, p2El.current, p3El.current],
        translateY: [-250, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'spring(3, 100, 13, 1)'
      });
    }, []);

    return (
        <div className="pt-36 bd-blur relative h-screen w-screen bg-white bg-opacity-70 ">
            <p ref={p1El} className="pl-8 md:pl-12 text-3xl mb-8 md:md-12 font-light">Hugo Sundberg</p>
            <h1 ref={h1El} className="pl-8 md:pl-12 text-6xl md:text-7xl font-bold mb-36">Portfolio.</h1>
            <p ref={p2El} className="pl-8 md:pl-12 text-3xl font-bold mb-4 md:mb-8">Projects</p>
            <p ref={p3El} className="pl-8 md:pl-12 text-3xl font-bold">About me</p>
        </div>
    );
}

export default Hero;
