import React from 'react';
import HeroImage from '../assets/hero-image.png';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";

// Animations and Transitions
export const transition = { type: 'spring', duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: 'spring',
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

// Hero Component
const Bio = {
  roles: [
    "Computer Science",
    "Gamer",
    "UI/UX Designer",
    "Programmer"
  ],
};

// Hero Component
const Hero = () => {
  return (
    <motion.div
      className="bg-black text-white text-center py-16"
      {...headContainerAnimation}
    >
      <motion.img
        src={HeroImage}
        alt=""
        className='mx-auto mb- w-50 h-47 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
        {...slideAnimation('down')}
      />
      <motion.h1 className="text-4xl font-bold my-4 vertical spacing"> {/* Added my-4 for vertical spacing */}
        Hi, I AM {' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-blue-500">
          {/* Optional text can be added here if needed */}
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-blue-500">
          Angela De Vega
        </span>
        <br />
        I am a{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 inline-block mb-8 md:mb-0">
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300"
        {...fadeAnimation}
      >
        I specialize in building modern and responsive web applications.
      </motion.p>
      <motion.div className="mt-8 flex justify-center space-x-6">
        <motion.a
          href="https://www.facebook.com/angela.devega.925/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          {...slideAnimation('left')}
        >
          Contact With Me
        </motion.a>
        <motion.a
          href="https://www.canva.com/design/DAGQg4MIgcg/kMR5HnfGJf1_6BnIBFDD8w/view?utm_content=DAGQg4MIgcg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          {...slideAnimation('center')}
        >
          Resume
        </motion.a>
        <motion.a
          href="https://github.com/ANGELADEVEGA?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-red-300 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          {...slideAnimation('right')}
        >
          GitHub
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;