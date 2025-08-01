"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import { profileConfig } from "@/config";

import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

export function ProfileCard() {
  const { theme } = useTheme();

  const avatarSrc =
    theme === "dark"
      ? profileConfig.avatar.find((a) => a.theme === "dark")?.src
      : profileConfig.avatar.find((a) => a.theme === "light")?.src;

  return (
    <div className="from-bg-card-form to-bg-card-to relative w-full max-w-lg rounded-3xl bg-gradient-to-r p-8 pt-16 text-center shadow-xl">
      <ThemeToggle />

      <div className="absolute -top-[60px] left-1/2 h-[120px] w-[120px] -translate-x-1/2 overflow-hidden rounded-full">
        {avatarSrc && (
          <Image
            src={avatarSrc}
            alt={profileConfig.name}
            width={120}
            height={120}
            priority
            className="object-cover"
          />
        )}
      </div>

      <h1 className="mt-3 text-2xl">@{profileConfig.name}</h1>

      <ul className="mt-5 inline-block space-y-3 text-left">
        <li className="bio-list-item relative pl-6">
          努力成为编程大王，然后被Bug狠狠拷打
        </li>
        <li className="bio-list-item relative pl-6">
          熟悉一些SEO，希望Google不要不识好歹
        </li>
        <li className="bio-list-item relative pl-6">
          喜欢Linux，想要成为Arch高手（看板娘真好看）
        </li>
        <li className="bio-list-item relative pl-6">
          怀念当初躲被子里追番的日子，但是我已经长大了
        </li>
      </ul>

      <SocialLinks />
    </div>
  );
}
