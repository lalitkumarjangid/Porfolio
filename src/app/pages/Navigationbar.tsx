"use client";

import React, { useEffect, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export function Navigationbar() {
  interface ProfileData {
    avatar_url: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    location: string;
    html_url: string;
    repos_url: string;
    public_repos: number;
  }

  interface RepoData {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }

  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/lalitkumarjangid"
        );
        const data = await response.json();
        setProfileData(data);

        const reposResponse = await fetch(
          `${data.repos_url}?sort=created&direction=desc`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-neutral-900 text-white p-2 md:p-4">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Empowering Innovation with <br />
              <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none from-neutral-200 to-neutral-500">
                Full Stack Development
              </span>
            </h1>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 h-full">
          {/* GitHub Profile Section */}
          <div className="md:col-span-2 bg-neutral-800 rounded-lg p-1.5 md:p-3">
            <div className="flex items-start space-x-2 md:space-x-3">
              <img
                src={profileData?.avatar_url}
                alt="GitHub Avatar"
                className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-sm md:text-xl font-bold truncate">
                  {profileData?.name}
                </h2>
                <p className="text-xs md:text-sm line-clamp-2 text-gray-300">
                  {profileData?.bio || "No bio available."}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-2 text-xs text-gray-400 mt-1.5">
                  <span>Followers: {profileData?.followers}</span>
                  <span>Following: {profileData?.following}</span>
                  <span>📍 {profileData?.location || "Not specified"}</span>
                </div>

                {/* Social Links for Mobile */}
                <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                  <a
                    href={profileData?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-700 text-white px-1 py-0.5 rounded text-[10px] inline-flex items-center"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lalitkumarjangid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-1 py-0.5 rounded text-[10px] inline-flex items-center"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/lkjlalitkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white px-1 py-0.5 rounded text-[10px] inline-flex items-center"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linktr.ee/lalitkumarjangid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-1 py-0.5 rounded text-[10px] inline-flex items-center"
                  >
                    Links
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements and Highlights Section */}
          <div className="bg-neutral-800 rounded-lg p-1.5 md:p-3">
            <h3 className="text-sm md:text-lg font-semibold mb-1">
              Achievements
            </h3>
            <ul className="list-none space-y-0.5 text-xs md:text-sm">
              <li>🏆 {profileData?.public_repos} Repositories</li>
              <li>🏅 {profileData?.followers} Followers</li>
              <li>🎖️ Open Source Contributor</li>
              <li>✨ Full Stack Development Enthusiast</li>
            </ul>
          </div>

          {/* Latest Repositories Section */}
          {/* <div  className="overflow-auto" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin' }}> */}
          <div className="col-span-1 md:col-span-3 bg-neutral-800 rounded-lg p-1.5 md:p-3 ">
            <h3 className="text-sm md:text-lg font-semibold mb-1">
              Latest Repositories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-3">
              {repos.slice(0, 6).map((repo) => (
                <div key={repo?.id} className="bg-neutral-700 p-2 rounded">
                  <h4 className="text-xs md:text-sm font-bold truncate">
                    {repo?.name}
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-2 my-1">
                    {repo?.description || "No description available."}
                  </p>
                  <a
                    href={repo?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-xs"
                  >
                    View Repo
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}

          {/* Social Media and Links Section - Desktop Only */}
          <div className="hidden md:block col-span-1 md:col-span-3 bg-neutral-800 rounded-lg p-1.5 md:p-3">
            <h3 className="text-sm md:text-lg font-semibold mb-1">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/lalitkumarjangid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-xs flex items-center gap-1"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com/lkjlalitkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-xs flex items-center gap-1"
              >
                <FaTwitter className="text-lg" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default Navigationbar;
