import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";
import HeaderWithTranslation from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael | Graphics Programmer",
  description: "Personal portfolio showcasing my graphics programming projects and rendering expertise",
  keywords: ["graphics programming", "OpenGL", "Vulkan", "renderer", "3D graphics", "game development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Apply dark mode immediately on load to prevent flash
              try {
                const savedMode = localStorage.getItem('darkMode');
                if (savedMode === 'true') {
                  document.documentElement.classList.add('dark');
                } else if (savedMode === 'false') {
                  document.documentElement.classList.remove('dark');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('darkMode', 'true');
                }
              } catch (e) {
                // Ignore any errors (e.g., localStorage not available)
              }
            })();
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <HeaderWithTranslation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
