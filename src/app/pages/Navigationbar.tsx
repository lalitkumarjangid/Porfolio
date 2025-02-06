"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

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

      const [profileResponse, reposResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`),
      ]);

      if (!profileResponse.ok || !reposResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const profileData = await profileResponse.json();
      const reposData = await reposResponse.json();

      setProfileData(profileData);
      setRepos(reposData.slice(0, 6));
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

  const socialLinks = useMemo(() => [
    { href: profileData?.html_url || "", label: "GitHub", icon: FaGithub },
    { href: "https://www.linkedin.com/in/lalitkumarjangid", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://twitter.com/lkjlalitkumar", label: "Twitter", icon: FaTwitter },
  ], [profileData]);

  if (isLoading) {
    return <div className="flex justify-center items-center w-full min-h-screen">Loading profile...</div>;
  }

  if (error || !profileData) {
    return <div className="flex justify-center items-center w-full min-h-screen">{error || "Unable to load profile"}</div>;
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4">
      <ContainerScroll titleComponent={
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
        >
          Empowering Innovation with <br />
          <span className="text-3xl md:text-6xl font-bold">Full Stack Development</span>
        </motion.h1>
      }>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-neutral-800 rounded-lg p-4"
          >
            <div className="flex items-start space-x-4">
              <img
                src={profileData.avatar_url}
                alt={`${profileData.name}'s GitHub avatar`}
                className="w-20 h-20 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{profileData.name}</h2>
                <p className="text-sm text-gray-300">{profileData.bio || "No bio available."}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-400 mt-2">
                  <span>Followers: {profileData.followers}</span>
                  <span>Following: {profileData.following}</span>
                  <span>📍 {profileData.location || "Not specified"}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition-all">
                      <link.icon className="text-lg" /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default Navigationbar;