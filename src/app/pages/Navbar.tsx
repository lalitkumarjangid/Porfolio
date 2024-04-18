"use client";

import React from 'react';
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <nav className="flex justify-between py-4 px-6 bg-transparent dark:bg-transparent backdrop-blur">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-lg font-extrabold text-gray-900 dark:text-gray-100"> Lalit </a>
            <p className="text-sm text-gray-500">Developed by Lalit</p>
          </div>
          {/* <div className={`font-semibold`}>
            <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 ml-40 ${isOpen ? 'block' : 'hidden'}`}>
              <li><a href="# " className="text-sm text-gray-600 dark:text-gray-300">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 dark:text-gray-300">About</a></li>
              <li><a href="#" className="text-sm text-gray-600 dark:text-gray-300">Projects</a></li>
              <li><a href="#" className="text-sm text-gray-600 dark:text-gray-300">Resume</a></li>
              <li><a href="#" className="text-sm text-gray-600 dark:text-gray-300">Contact</a></li>
            </ul>
          </div> */}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )} */}
          </button>
          <ModeToggle />
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/96244930?u=9fdb860068c89c11c1ec605b72d7a2f254601922&v=4" />
            <AvatarFallback>LK</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </div>
  )
}