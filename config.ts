import type { ProfileConfig, SiteConfig } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "栈上堆语",
  lang: "zh_CN",
  keywords: "HTML, CSS, JavaScript, TypeScript",
  description: "努力成为优秀的全栈工程师 | 一个少年的摆烂与成长",
  favicon: "/favicon.ico",
};

export const profileConfig: ProfileConfig = {
  name: "Cyou",
  avatar: [
    {
      src: "/avatar-light.jpg",
      theme: "light",
    },
    {
      src: "/avatar-dark.jpg",
      theme: "dark",
    },
  ],
};
