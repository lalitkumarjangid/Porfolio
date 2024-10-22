"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

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
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <a href="https://myfinhub.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/finhub.png"
            className="h-72 w-full object-cover" // Changed to full width and fixed height
            alt="My Finhub"
          />
        </a>
      </div>
    ),
  },
  {
    title: (
      <a href="https://gyanblog.vercel.app" target="_blank" rel="noopener noreferrer">
        Gyan Blog
      </a>
    ),
    description:
      "Gyan Blog is a blog site developed using modern web technologies. It provides a platform for users to read and share insightful articles on various topics.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <a href="https://gyanblog.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/gyan.png"
            className="h-72 w-full object-cover" // Changed to full width and fixed height
            alt="Gyan Blog"
          />
        </a>
      </div>
    ),
  },
  {
    title: (
      <a href="https://postimage.vercel.app" target="_blank" rel="noopener noreferrer">
        Post Image
      </a>
    ),
    description:
      "Post Image is a platform for storing and sharing images. It provides a user-friendly interface for uploading and managing images.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <a href="https://postimage.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/post.png"
            className="h-72 w-full object-cover" // Changed to full width and fixed height
            alt="Post Image"
          />
        </a>
      </div>
    ),
  },
  {
    title: (
      <a href="https://devingpt.vercel.app" target="_blank" rel="noopener noreferrer">
        Devin Gpt
      </a>
    ),
    description:
      "Devin Gpt is a dynamic chat application developed using React.js, Express.js, OpenAI API, and Tailwind CSS. It integrates the OpenAI API for real-time responses.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <a href="https://devingpt.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/devin.png"
            className="h-72 w-full object-cover" // Changed to full width and fixed height
            alt="devin"
          />
        </a>
      </div>
    ),
  },
  {
    title: (
      <a href="https://realvepio.vercel.app" target="_blank" rel="noopener noreferrer">
        Vepio-Store
      </a>
    ),
    description:
      "Vepio-Store is a fully functional E-commerce website developed using React.js, HTML, and Tailwind CSS. It provides a seamless shopping experience with responsive user interfaces.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <a href="https://realvepio.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/vepio.png"
            className="h-72 w-full object-cover" // Changed to full width and fixed height
            alt="realvepio"
          />
        </a>
      </div>
    ),
  },
  {
    title: (
      <a href="https://Coming Soon" target="_blank" rel="noopener noreferrer">
        Akhand Pay - Payment Gateway
      </a>
    ),
    description:
      "Akhand Pay is a robust payment gateway solution developed using TurboRepo, Next.js, Next Backend, PostgreSQL, Prisma, Docker, and Next Auth. It provides a secure and efficient platform for processing payments.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <a href="Coming soon" target="_blank" rel="noopener noreferrer">
          <img
            src="/pay.jpeg"
            className="h-72 w-full object-cover" // Changed to full width and fixed height
            alt="Akhand Pay - Payment Gateway"
          />
        </a>
      </div>
    ),
  },
];
export function Projects() {
  return (
    <div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
        Projects
      </p>
      <div className="flex flex-wrap justify-center gap-4"> {/* Flex container for horizontal arrangement */}
        {content.map((item, index) => (
          <BackgroundGradient 
            key={index} 
            className="rounded-[22px] max-w-xs sm:max-w-sm p-2 sm:p-4 md:p-6 lg:p-10 bg-white dark:bg-zinc-900" // Adjusted max-w and padding for mobile
          >
            {item.content}
            <p className="text-base sm:text-xl text-black mt-2 mb-1 dark:text-neutral-200"> {/* Reduced margin for mobile */}
              {item.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

