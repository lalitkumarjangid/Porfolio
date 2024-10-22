"use client";
import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const fadeInLeft = (delay: number) => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay, duration: 0.5 },
});

interface ExperienceEntryProps {
  title: string;
  date: string;
  location: string;
  responsibilities: string[];
  delay: number;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  title,
  date,
  location,
  responsibilities,
  delay,
}) => (
  <motion.div className="mb-6 sm:mb-8" {...fadeInLeft(delay)}>
    <h1 className="bg-black text-white rounded-full text-lg sm:text-xl w-fit px-4 sm:px-6 py-2 mb-3 font-semibold shadow-md">
      {title}
    </h1>
    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{date}</p>
    <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">{location}</p>
    <ul className="list-disc list-inside mt-2 space-y-1 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
      {responsibilities.map((item, index) => (
        <li key={index} className="pl-2">{item}</li>
      ))}
    </ul>
  </motion.div>
);

export function Experience() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
      <motion.p
              className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center"
        {...fadeInUp}
      >
        Journey Highlights
      </motion.p>
      <motion.p
        className="text-base mb-4 sm:mb-6 dark:text-gray-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        In my web dev journey, I&#39;ve thrived at startups with diverse projects.
      </motion.p>
      <TracingBeam className="px-5 sm:px-6 my-2 sm:my-4 " > {/* Added my-2 for margin */}
        <div className="max-w-2xl mx-4 antialiased pt-4 relative">
          <ExperienceEntry
            title="Guru Ji Astro"
            date="July 2024 – Present"
            location="Full Stack Developer Intern, Jaipur, Rajasthan"
            responsibilities={[
              "Built RESTful APIs with Node.js and Express.js, boosting dashboard speed by 60% and designing efficient MongoDB schemas.",
              "Integrated APIs with a React.js frontend for real-time updates, improving user interactivity and dynamic content rendering.",
              "Streamlined frontend-backend communication, significantly improving overall user experience and system responsiveness.",
            ]}
            delay={1}
          />
          <ExperienceEntry
            title="IBM SkillBuild"
            date="February 2024 – March 2024"
            location="Cloud Intern, Remote"
            responsibilities={[
              "Developed proficiency in cloud technologies, gaining expertise in various cloud platforms.",
              "Applied cloud theory to real-world scenarios, focusing on architecture and deployment strategies.",
              "Acquired hands-on experience in cloud computing through IBM SkillBuild.",
            ]}
            delay={1.5}
          />
          <ExperienceEntry
            title="Grras IT Solutions"
            date="July 2023 – September 2023"
            location="MERN Stack Developer Intern, Jaipur, Rajasthan"
            responsibilities={[
              "Contributed to full-stack development of web applications using React.js and Express.js frameworks.",
              "Managed user data efficiently with MongoDB, ensuring seamless cross-platform integration.",
              "Collaborated with team members using Git for version control and task allocation.",
            ]}
            delay={2}
          />
        </div>
      </TracingBeam>
    </div>
  );
}

export default Experience;
