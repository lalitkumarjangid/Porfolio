"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaGit, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiKubernetes, SiTurborepo, SiVisualstudiocode, SiTailwindcss, SiCplusplus, SiPython, SiRedux, SiRedis, SiPm2, SiMicrosoftsqlserver } from 'react-icons/si';

export function Teckstacks() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
                Tech Stacks
            </p>
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    // Frontend Technologies
    {
        title: "HTML/CSS",
        description: "Markup and styling for web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        icon: <FaHtml5 />
    },
    {
        title: "JavaScript",
        description: "High-level, interpreted programming language.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        icon: <FaJs />
    },
    {
        title: "TypeScript",
        description: "JavaScript with static type definitions.",
        link: "https://www.typescriptlang.org/docs/",
        icon: <SiTypescript />
    },
    {
        title: "React JS",
        description: "Library for building user interfaces.",
        link: "https://reactjs.org/docs/getting-started.html",
        icon: <FaReact />
    },
    {
        title: "Next JS",
        description: "React framework for production.",
        link: "https://nextjs.org/docs",
        icon: <SiNextdotjs />
    },
    {
        title: "Tailwind CSS",
        description: "Customizable low-level CSS framework.",
        link: "https://tailwindcss.com/docs",
        icon: <SiTailwindcss />
    },
    {
        title: "Redux",
        description: "Predictable state container for JavaScript apps.",
        link: "https://redux.js.org/",
        icon: <SiRedux />
    },

    // Backend Technologies
    {
        title: "Node JS",
        description: "JavaScript runtime environment for server-side code.",
        link: "https://nodejs.org/en/docs/",
        icon: <FaNodeJs />
    },
    {
        title: "Express JS",
        description: "Flexible web application framework for Node.js.",
        link: "https://expressjs.com/en/starter/installing.html",
        icon: <SiExpress />
    },
    {
        title: "PM2",
        description: "Process manager for Node.js applications.",
        link: "https://pm2.keymetrics.io/docs/usage/quick-start/",
        icon: <SiPm2 />
    },

    // Databases
    {
        title: "MongoDB Atlas",
        description: "Fully-managed cloud database for MongoDB.",
        link: "https://docs.atlas.mongodb.com/",
        icon: <SiMongodb />
    },
    {
        title: "MySQL",
        description: "Open-source relational database management system.",
        link: "https://dev.mysql.com/doc/",
        icon: <SiMysql />
    },
    {
        title: "Postgres",
        description: "Open-source relational database management system.",
        link: "https://www.postgresql.org/docs/",
        icon: <SiPostgresql />
    },
    {
        title: "Redis",
        description: "In-memory data structure store and cache.",
        link: "https://redis.io/documentation",
        icon: <SiRedis />
    },
    {
        title: "Prisma",
        description: "Database toolkit with type-safe query builder.",
        link: "https://www.prisma.io/docs/",
        icon: <SiPrisma />
    },

    // DevOps and Tools
    {
        title: "AWS",
        description: "On-demand cloud computing services.",
        link: "https://aws.amazon.com/documentation/",
        icon: <FaAws />
    },
    {
        title: "Docker",
        description: "Platform for developing and running applications.",
        link: "https://docs.docker.com/",
        icon: <FaDocker />
    },
    {
        title: "Kubernetes",
        description: "Automates deployment and management of containers.",
        link: "https://kubernetes.io/docs/home/",
        icon: <SiKubernetes />
    },
    {
        title: "TurboRepo",
        description: "High-performance build system for JavaScript.",
        link: "https://turborepo.org/docs",
        icon: <SiTurborepo />
    },
    {
        title: "Git",
        description: "Distributed version control system.",
        link: "https://git-scm.com/doc",
        icon: <FaGit />
    },
    {
        title: "GitHub",
        description: "Hosting for software development and version control.",
        link: "https://docs.github.com/en",
        icon: <FaGithub />
    },

    // Programming Languages
    {
        title: "C++",
        description: "General-purpose programming language.",
        link: "https://en.cppreference.com/w/",
        icon: <SiCplusplus />
    },
    {
        title: "Python",
        description: "High-level programming language emphasizing readability.",
        link: "https://docs.python.org/3/",
        icon: <SiPython />
    },
];
