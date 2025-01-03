import React from 'react';

export function AboutMe() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-center px-4 py-10">
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center py-6">
        About Me
      </p>
      <h2 className="mt-4 md:mt-6 text-center px-4 text-lg sm:text-xl md:text-2xl leading-relaxed tracking-normal w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
      Lalit is a Full-Stack Developer skilled in React, Next.js, TypeScript, and REST APIs, with a focus on scalable apps, DevOps, and performance optimization. He also explores Web3/blockchain, using Ethereum and Solidity for decentralized solutions.
      </h2>
    </div>
  );
}

export default AboutMe;