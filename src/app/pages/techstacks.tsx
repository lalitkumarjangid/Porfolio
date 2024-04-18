"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
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
    {
      title: "HTML/CSS",
      description: "Standard markup language used in the creation of web pages, along with cascading style sheets for describing the look and formatting of a document written in HTML.",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    {
      title: "JavaScript",
      description: "A high-level, interpreted programming language that conforms to the ECMAScript specification.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    },
    {
      title: "TypeScript",
      description: "An open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
      link: "https://www.typescriptlang.org/docs/",
    },
    {
      title: "React JS",
      description: "A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      title: "Next JS",
      description: "A React framework for production - it gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
      link: "https://nextjs.org/docs",
    },
    {
      title: "Node JS",
      description: "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      link: "https://nodejs.org/en/docs/",
    },
    {
      title: "Express JS",
      description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      link: "https://expressjs.com/en/starter/installing.html",
    },
    {
      title: "MongoDB Atlas",
      description: "A fully-managed cloud database developed by the same people that build MongoDB.",
      link: "https://docs.atlas.mongodb.com/",
    },
    {
      title: "MySQL",
      description: "An open-source relational database management system based on SQL – Structured Query Language.",
      link: "https://dev.mysql.com/doc/",
    },
    {
      title: "Postgres",
      description: "A free and open-source relational database management system emphasizing extensibility and SQL compliance.",
      link: "https://www.postgresql.org/docs/",
    },
    {
      title: "Prisma",
      description: "An open-source database toolkit. It replaces traditional ORMs and makes database access easy with an auto-generated and type-safe query builder for Node.js & TypeScript.",
      link: "https://www.prisma.io/docs/",
    },
    {
      title: "AWS",
      description: "A subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
      link: "https://aws.amazon.com/documentation/",
    },
    {
      title: "Docker",
      description: "An open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.",
      link: "https://docs.docker.com/",
    },
    {
      title: "Kubernetes",
      description: "An open-source system for automating deployment, scaling, and management of containerized applications.",
      link: "https://kubernetes.io/docs/home/",
    },
    {
      title: "TurboRepo",
      description: "A high-performance build system for JavaScript and TypeScript codebases. It uses a directed acyclic graph to only rebuild what's necessary.",
      link: "https://turborepo.org/docs",
    },
    {
      title: "VS Code",
      description: "A free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
      link: "https://code.visualstudio.com/docs",
    },
    {
      title: "Git",
      description: "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      link: "https://git-scm.com/doc",
    },
    {
      title: "GitHub",
      description: "A provider of Internet hosting for software development and version control using Git.",
      link: "https://docs.github.com/en",
    },
    {
      title: "Tailwind CSS",
      description: "A highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
      link: "https://tailwindcss.com/docs",
    },
    {
      title: "C++",
      description: "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'.",
      link: "https://en.cppreference.com/w/",
    },
    {
        title: "Python",
        description: "An interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
        link: "https://docs.python.org/3/",
      },
  ];