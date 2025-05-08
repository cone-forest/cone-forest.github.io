'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const t = translations[language].languageSelector;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <span>{t.language}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden dark:border dark:border-gray-700">
          <div className="py-1">
            <button
              className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-gray-100 dark:bg-gray-700 font-medium' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              onClick={() => {
                setLanguage('en');
                setIsOpen(false);
              }}
            >
              {t.english}
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm ${language === 'ru' ? 'bg-gray-100 dark:bg-gray-700 font-medium' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              onClick={() => {
                setLanguage('ru');
                setIsOpen(false);
              }}
            >
              {t.russian}
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm ${language === 'de' ? 'bg-gray-100 dark:bg-gray-700 font-medium' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              onClick={() => {
                setLanguage('de');
                setIsOpen(false);
              }}
            >
              {t.german}
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 