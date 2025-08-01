"use client";

import { FaBlog, FaYoutube } from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

import Link from "next/link";

export function SocialLinks() {
  const base =
    "transition-all duration-300 hover:-translate-y-1 hover:scale-125 text-gray-700 dark:text-gray-900";

  return (
    <footer className="mt-6 flex justify-center gap-6">
      <Link
        href="https://github.com/uouoyc"
        target="_blank"
        aria-label="GitHub"
        className={`${base} hover:text-text-github hover:-rotate-6 hover:drop-shadow-[0_0_10px_var(--color-text-github-shadow)]`}
      >
        <IoLogoGithub size={26} />
      </Link>
      <Link
        href="https://blog.zsdy.dev"
        target="_blank"
        aria-label="Blog"
        className={`${base} hover:text-text-blog hover:rotate-6 hover:drop-shadow-[0_0_10px_var(--color-text-blog-shadow)]`}
      >
        <FaBlog size={26} />
      </Link>
      <Link
        href="https://space.bilibili.com/2079872578"
        target="_blank"
        aria-label="Bilibili"
        className={`${base} hover:text-text-bilibili hover:-rotate-6 hover:drop-shadow-[0_0_10px_var(--color-text-bilibili-shadow)]`}
      >
        <FaBilibili size={26} />
      </Link>
      <Link
        href="https://youtube.com/@uoyc"
        target="_blank"
        aria-label="YouTube"
        className={`${base} hover:text-text-youtube hover:rotate-6 hover:drop-shadow-[0_0_10px_var(--color-text-youtube-shadow)]`}
      >
        <FaYoutube size={26} />
      </Link>
    </footer>
  );
}
