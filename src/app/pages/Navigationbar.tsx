"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

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

export function Navigationbar() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const username = "lalitkumarjangid";

      // Parallel fetching of profile and repos
      const [profileResponse, reposResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
        ),
      ]);

      if (!profileResponse.ok || !reposResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const profileData = await profileResponse.json();
      const reposData = await reposResponse.json();

      setProfileData(profileData);
      setRepos(reposData.slice(0, 6)); // Limit to 6 repos
      setError(null);
    } catch (error) {
      console.error("Error fetching GitHub profile:", error);
      setError("Unable to load profile data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  // Memoize social links to prevent unnecessary re-renders
  const socialLinks = useMemo(
    () => [
      {
        href: profileData?.html_url || "",
        label: "GitHub",
        className: "bg-neutral-700",
        mobile: true,
        icon: FaGithub,
      },
      {
        href: "https://www.linkedin.com/in/lalitkumarjangid",
        label: "LinkedIn",
        className: "bg-blue-600",
        mobile: true,
        icon: FaLinkedin,
      },
      {
        href: "https://twitter.com/lkjlalitkumar",
        label: "Twitter",
        className: "bg-blue-400",
        mobile: true,
        icon: FaTwitter,
      },
      {
        href: "https://linktr.ee/lalitkumarjangid",
        label: "Links",
        className: "bg-green-500",
        mobile: true,
      },
    ],
    [profileData]
  );

  // Loading and error states
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-neutral-900 text-white">
        Loading profile...
      </div>
    );
  }

  if (error || !profileData) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-neutral-900 text-white">
        {error || "Unable to load profile"}
      </div>
    );
  }

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
                src={profileData.avatar_url}
                alt={`${profileData.name}'s GitHub avatar`}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-sm md:text-xl font-bold truncate">
                  {profileData.name}
                </h2>
                <p className="text-xs md:text-sm line-clamp-2 text-gray-300">
                  {profileData.bio || "No bio available."}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-2 text-xs text-gray-400 mt-1.5">
                  <span>Followers: {profileData.followers}</span>
                  <span>Following: {profileData.following}</span>
                  <span>📍 {profileData.location || "Not specified"}</span>
                </div>

                {/* Social Links for Mobile */}
                <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                  {socialLinks
                    .filter((link) => link.mobile)
                    .map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${link.className} text-white px-1 py-0.5 rounded text-[10px] inline-flex items-center`}
                      >
                        {link.icon ? <link.icon className="mr-1" /> : null}
                        {link.label}
                      </a>
                    ))}
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
              <li>🏆 {profileData.public_repos} Repositories</li>
              <li>🏅 {profileData.followers} Followers</li>
              <li>🎖️ Open Source Contributor</li>
              <li>✨ Full Stack Development Enthusiast</li>
            </ul>
          </div>

          {/* Latest Repositories Section */}
          <div className="col-span-1 md:col-span-3 bg-neutral-800 rounded-lg p-1.5 md:p-3">
            <h3 className="text-sm md:text-lg font-semibold mb-1">
              Latest Repositories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-3">
              {repos.map((repo) => (
                <div key={repo.id} className="bg-neutral-700 p-2 rounded">
                  <h4 className="text-xs md:text-sm font-bold truncate">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-2 my-1">
                    {repo.description || "No description available."}
                  </p>
                  <a
                    href={repo.html_url}
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

          {/* Social Media and Links Section - Desktop Only */}
          <div className="hidden md:block col-span-1 md:col-span-3 bg-neutral-800 rounded-lg p-1.5 md:p-3">
            <h3 className="text-sm md:text-lg font-semibold mb-1">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks
                .filter((link) => link.icon)
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-xs flex items-center gap-1"
                  >
                    {link.icon && <link.icon className="text-lg" />}
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default Navigationbar;
