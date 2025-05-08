'use client';

import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeaderWithTranslation() {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, read dark mode preference from localStorage
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const savedMode = localStorage.getItem('darkMode');
      const isDarkMode = savedMode === 'true';
      
      // Apply dark mode class if needed
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else if (savedMode === 'false') {
        document.documentElement.classList.remove('dark');
      } else {
        // If no preference stored, use system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('darkMode', 'true');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('darkMode', 'false');
        }
      }
      
      // Update state to match the actual class
      setDarkMode(document.documentElement.classList.contains('dark'));
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const newDarkMode = !darkMode;
      
      // Toggle class on html element
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Save preference to localStorage
      localStorage.setItem('darkMode', newDarkMode.toString());
      
      // Update state
      setDarkMode(newDarkMode);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-800 py-4 px-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black dark:text-white">Michael</Link>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li><a href="#about" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.about}</a></li>
            <li><a href="#projects" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.projects}</a></li>
            <li><a href="#contact" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.contact}</a></li>
            <li><a href="https://github.com/cone-forest" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.github}</a></li>
          </ul>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
          <LanguageSelector />
        </div>
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
          <LanguageSelector />
          <button className="block md:hidden text-black dark:text-white">Menu</button>
        </div>
      </nav>
    </header>
  );
} 