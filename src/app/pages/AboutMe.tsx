export function AboutMe() {
  return (
    <div className="h-[52rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-center p-10">
      {/* Radial gradient for the container to give a faded look */}

      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        About Me
      </p>
      <h2 className="mt-2 md:mt-10  text-center px-10 text-2xl leading-loose tracking-normal w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto">
        {
          "Lalit, a Full-Stack Developer, specializes in building scalable web apps with React, Next.js, TypeScript, and REST APIs, while ensuring optimized performance and seamless DevOps integration."
        }
      </h2>
    </div>
  );
}
