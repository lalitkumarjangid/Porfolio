"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: (
            <a href="https://myfinhub.vercel.app" target="_blank" rel="noopener noreferrer">
              My Finhub
            </a>
          ),
        description:
          "My Finhub is a comprehensive payments wallet developed using a robust tech stack including React, Express, MongoDB, Tailwind CSS, and Zod. The application features user authentication functionalities, allowing users to securely sign in and sign up. The backend operations are securely handled using Express, Zod, and middleware. MongoDB has been integrated for efficient data storage and retrieval, ensuring a seamless user experience.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           
           <a href="https://myfinhub.vercel.app" target="_blank" rel="noopener noreferrer">
  <img
    src="/finhub.png"
    width={300}
    height={500}
    className="h-full w-full object-cover"
    alt="My Finhub"
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
          "Devin Gpt is a dynamic chat application developed using React.js, Express.js, OpenAI API, and Tailwind CSS. The application integrates the OpenAI API for real-time responses, enhancing user engagement. The responsive UI, designed with Tailwind CSS, ensures customization and security.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           
           <a href="https://devingpt.vercel.app" target="_blank" rel="noopener noreferrer">
  <img
    src="/devin.png"
    width={300}
    height={500}
    className="h-full w-full object-cover"
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
          "Vepio-Store is a fully functional E-commerce website developed using React.js, HTML, and Tailwind CSS. The website provides a seamless shopping experience with responsive and visually appealing user interfaces. The performance of the website is optimized by leveraging React.js for efficient state management and dynamic content rendering, along with Stripe and Sanity.io.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <a href="https://realvepio.vercel.app" target="_blank" rel="noopener noreferrer">
  <img
    src="/vepio.png"
    width={300}
    height={500}
    className="h-full w-full object-cover"
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
          "Akhand Pay is a robust payment gateway solution developed using a powerful tech stack including TurboRepo, Next.js, Next Backend, PostgreSQL, Prisma, Docker, and Next Auth. The application provides a secure and efficient platform for processing payments. It leverages Next.js for frontend rendering, Next Backend for server-side operations, and PostgreSQL with Prisma for reliable data management. Docker is used for containerization, ensuring a consistent environment for deployment, while Next Auth provides secure authentication mechanisms.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <a href="Coming soon" target="_blank" rel="noopener noreferrer">
  <img
    src="/pay.jpeg"
    width={300}
    height={500}
    className="h-full w-full object-cover"
    alt="rAkhand Pay - Payment Gateway"
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
    width={300}
    height={700}
    className="h-full w-full object-cover"
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
    src="/postimage.png"
    width={300}
    height={500}
    className="h-full w-full object-cover"
    alt="Post Image"
  />
</a>
          </div>
        ),
      },
];

export function Projects() {
  return (
    <div className="p-10">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
                Projects
          </p>
      <StickyScroll content={content} />
    </div>
  );
}