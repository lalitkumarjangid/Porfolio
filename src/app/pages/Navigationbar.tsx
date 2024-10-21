"use client";

import React, { useEffect, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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

  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  interface RepoData {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }

  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/lalitkumarjangid");
        const data = await response.json();
        setProfileData(data);

        const reposResponse = await fetch(`${data.repos_url}?sort=created&direction=desc`);
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
    <div className="flex justify-center items-center w-full h-full bg-neutral-900 text-white p-4">
      <ContainerScroll
       titleComponent={
        <>
          <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Empowering Innovation with <br />
            <span className="text-4xl md:text-[6rem]  font-bold mt-1 leading-none from-neutral-200 to-neutral-500">
              Full Stack Development
            </span>
          </h1>
        </>
      }
      >
        <div className="grid grid-cols-3 gap-4 h-full">
          {/* GitHub Profile Section */}
          <div className="col-span-2 bg-neutral-800 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <img
                src={profileData?.avatar_url}
                alt="GitHub Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">{profileData?.name}</h2>
                <p className="text-xs">{profileData?.bio || "No bio available."}</p>
                <p className="text-xs text-gray-400">
                  Followers: {profileData?.followers} | Following: {profileData?.following}
                </p>
                <p className="text-xs text-gray-400">Location: {profileData?.location || "Not specified"}</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-2">
              <a
                href={profileData?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
              >
                GitHub Profile
              </a>
              <a
                href="https://linktr.ee/lalitkumarjangid"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-2 py-1 rounded text-xs"
              >
                Linktree
              </a>
              <a
                href="https://lalitdev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-2 py-1 rounded text-xs"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Achievements and Highlights Section */}
          <div className="bg-neutral-800 rounded-lg p-3">
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            <ul className="list-disc ml-4 space-y-1 text-xs">
              <li>🏆 GitHub Stars: {profileData?.public_repos}</li>
              <li>🏅 Followers: {profileData?.followers}</li>
              <li>🎖️ Open Source Contributor</li>
              <li>✨ Full Stack Development Enthusiast</li>
            </ul>
          </div>

          {/* Latest Repositories Section */}
          <div className="col-span-3 bg-neutral-800 rounded-lg p-3">
            <h3 className="text-lg font-semibold mb-2">Latest Repositories</h3>
            <div className="grid grid-cols-3 gap-3">
              {repos.slice(0, 6).map((repo) => (
                <div key={repo?.id} className="bg-neutral-700 p-2 rounded">
                  <h4 className="text-sm font-bold">{repo?.name}</h4>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {repo?.description || "No description available."}
                  </p>
                  <a
                    href={repo?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-xs"
                  >
                    View Repository
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media and Links Section */}
          <div className="col-span-3 bg-neutral-800 rounded-lg p-3">
            <h3 className="text-lg font-semibold mb-1">Social Media & Links</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/lalitkumarjangid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-xs"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/lkjlalitkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-xs"
              >
                Twitter
              </a>
              <a
                href="https://lalitdev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-xs"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}