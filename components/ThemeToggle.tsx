"use client";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = (event: React.MouseEvent) => {
    const isDark = theme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    document.documentElement.style.setProperty("--x", x + "px");
    document.documentElement.style.setProperty("--y", y + "px");

    document.startViewTransition(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="absolute top-4 right-4 cursor-pointer rounded-full p-2 active:scale-90"
      aria-label="toggle color theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
