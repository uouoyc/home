import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  keywords: siteConfig.keywords,
  description: siteConfig.description,
  icons: siteConfig.favicon,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.lang}>
      <body
        className={`${inter.className} from-bg-body-form to-bg-body-to bg-gradient-to-r text-gray-700 dark:text-gray-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-ERT8YX2EDK" />
      </body>
    </html>
  );
}
