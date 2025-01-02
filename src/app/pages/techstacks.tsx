"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaGit, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiSolidity, SiPostgresql, SiEthereum, SiPrisma, SiKubernetes, SiTurborepo, SiVisualstudiocode, SiTailwindcss, SiCplusplus, SiPython, SiRedux, SiRedis, SiPm2, SiMicrosoftsqlserver } from 'react-icons/si';
import { Card, CardTitle, HoverEffect } from "@/components/ui/card-hover-effect";// Import the exported components

export function Teckstacks() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-6 text-center">
                Tech Stacks
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Frontend */}
                <TechStackSection title="Frontend " items={frontendItems} />
                {/* Backend */}
                <TechStackSection title="Backend" items={backendItems} />
                {/* Databases */}
                <TechStackSection title="Databases" items={databaseItems} />
                {/* DevOps */}
                <TechStackSection title="DevOps" items={devOpsItems} />
                {/* Programming */}
                <TechStackSection title="Programming" items={programmingItems} />
                {/* Web3/Blockchain */}
                <TechStackSection title="Web3/Blockchain" items={web3Items} />
            </div>
        </div>
    );
}

const TechStackSection = ({ title, items }: { title: string; items: { title: string; icon: JSX.Element }[] }) => {
    return (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-700">
            <h2 className="text-2xl font-bold mb-4 pl-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300">{title}</h2>
            <div className="flex flex-wrap justify-start gap-4">
                <HoverEffect items={items} />
            </div>
        </div>
    );
};



const frontendItems = [
    { title: "HTML/CSS", icon: <FaHtml5 /> },
    { title: "JavaScript", icon: <FaJs /> },
    { title: "TypeScript", icon: <SiTypescript /> },
    { title: "React JS", icon: <FaReact /> },
    { title: "Next JS", icon: <SiNextdotjs /> },
    { title: "TailwindCSS", icon: <SiTailwindcss /> },
    { title: "Redux", icon: <SiRedux /> },
];

const backendItems = [
    { title: "Node JS", icon: <FaNodeJs /> },
    { title: "ExpressJS", icon: <SiExpress /> },
    { title: "PM2", icon: <SiPm2 /> },
];

const databaseItems = [
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "MySQL", icon: <SiMysql /> },
    { title: "PostgreSQL", icon: <SiPostgresql /> },
    { title: "Prisma", icon: <SiPrisma /> },
];

const devOpsItems = [
    { title: "AWS", icon: <FaAws /> },
    { title: "Docker", icon: <FaDocker /> },
    { title: "Git", icon: <FaGit /> },
    { title: "GitHub", icon: <FaGithub /> },
];

const programmingItems = [
    { title: "C++", icon: <SiCplusplus /> },
    { title: "Python", icon: <SiPython /> },
];

const web3Items = [
    { title: "Solidity", icon: <SiSolidity /> },
    { title: "Ethereum", icon: <SiEthereum /> },
    { title: "EVM", icon: <SiEthereum /> },
];

export default Teckstacks;