export type SiteConfig = {
  title: string;
  lang: string;
  keywords: string;
  description: string;
  favicon: string;
};

export type ProfileConfig = {
  avatar: Avatar[];
  name: string;
};

export type Avatar = {
  src: string;
  theme: "light" | "dark";
};
