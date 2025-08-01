import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/",
      "**/node_modules",
      "**/dist",
      "**/build",
      "**/public",
      ".gitignore",
      ".prettierrc",
      ".prettierignore",
      "next-env.d.ts",
      "next.config.ts",
      "postcss.config.mjs",
      "pnpm-lock.yaml",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
