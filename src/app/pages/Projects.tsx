"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Define the content array first
const content = [
  {
    title: (
      <a href="https://myfinhub.vercel.app" target="_blank" rel="noopener noreferrer">
        My Finhub
      </a>
    ),
    description:
      "My Finhub is a comprehensive payments wallet developed using React, Express, MongoDB, Tailwind CSS, and Zod. It features user authentication, secure backend operations, and efficient data storage.",
    github: "https://github.com/lalitkumarjangid/myfinhub",
    live: "https://myfinhub.vercel.app",
    image: "/finhub.png",
  },
  {
    title: (
      <a href="https://gyanblog.vercel.app" target="_blank" rel="noopener noreferrer">
        Gyan Blog
      </a>
    ),
    description:
      "Gyan Blog is a blog site developed using modern web technologies. It provides a platform for users to read and share insightful articles on various topics.",
    github: "https://github.com/lalitkumarjangid/Gyan-Blog-Site",
    live: "https://gyanblog.vercel.app",
    image: "/gyan.png",
  },
  {
    title: (
      <a href="https://postimage.vercel.app" target="_blank" rel="noopener noreferrer">
        Post Image
      </a>
    ),
    description:
      "Post Image is a platform for storing and sharing images. It provides a user-friendly interface for uploading and managing images.",
    github: "https://github.com/lalitkumarjangid/imageUploader",
    live: "https://postimage.vercel.app",
    image: "/post.png",
  },
  {
    title: (
      <a href="https://devingpt.vercel.app" target="_blank" rel="noopener noreferrer">
        Devin Gpt
      </a>
    ),
    description:
      "Devin Gpt is a dynamic chat application developed using React.js, Express.js, OpenAI API, and Tailwind CSS. It integrates the OpenAI API for real-time responses.",
    github: "https://github.com/lalitkumarjangid",
    live: "https://devingpt.vercel.app",
    image: "/devin.png",
  },
  {
    title: (
      <a href="https://realvepio.vercel.app" target="_blank" rel="noopener noreferrer">
        Vepio-Store
      </a>
    ),
    description:
      "Vepio-Store is a fully functional E-commerce website developed using React.js, HTML, and Tailwind CSS. It provides a seamless shopping experience with responsive user interfaces.",
    github: "https://github.com/lalitkumarjangid/Vepio-store",
    live: "https://realvepio.vercel.app",
    image: "/vepio.png",
  },
  {
    title: (
      <a href="https://Coming Soon" target="_blank" rel="noopener noreferrer">
        Akhand Pay - Payment Gateway
      </a>
    ),
    description:
      "Akhand Pay is a robust payment gateway solution developed using TurboRepo, Next.js, Next Backend, PostgreSQL, Prisma, Docker, and Next Auth. It provides a secure and efficient platform for processing payments.",
    github: "https://github.com/lalitkumarjangid",
    live: "https://Coming Soon",
    image: "/pay.jpeg",
  },
];

export function Projects() {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <p className="text-4xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-10">
        Projects
      </p>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {content.map((item, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-lg w-full max-w-[300px] sm:max-w-[360px] bg-white dark:bg-zinc-900 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              <a href={item.live} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  className="h-72 w-full object-cover"
                  alt={item.title as unknown as string}
                />
              </a>
            </div>
            <p className="text-lg font-semibold mt-4 text-center dark:text-neutral-200 text-neutral-800">
              {item.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 text-center">
              {item.description}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition"
                aria-label="View Live Project"
              >
                <FaExternalLinkAlt size={20} />
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 transition"
                aria-label="View GitHub Repository"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

