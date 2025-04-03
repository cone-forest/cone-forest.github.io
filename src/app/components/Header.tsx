'use client';

import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';

export default function HeaderWithTranslation() {
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b py-4 px-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Michael</Link>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li><a href="#about" className="hover:text-gray-600 transition-colors">{t.about}</a></li>
            <li><a href="#projects" className="hover:text-gray-600 transition-colors">{t.projects}</a></li>
            <li><a href="#contact" className="hover:text-gray-600 transition-colors">{t.contact}</a></li>
            <li><a href="https://github.com/cone-forest" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">{t.github}</a></li>
          </ul>
          <LanguageSelector />
        </div>
        <div className="flex md:hidden items-center gap-4">
          <LanguageSelector />
          <button className="block md:hidden">Menu</button>
        </div>
      </nav>
    </header>
  );
} 