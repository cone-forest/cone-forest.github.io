'use client';

import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import GitHubImage from "./components/GitHubImage";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.greeting}</h1>
          <p className="text-xl mb-8">{t.hero.profession}</p>
          <div className="flex justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-black dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              {t.hero.viewWork}
            </a>
            <a 
              href="#contact" 
              className="border border-black dark:border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">{t.about.title}</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Placeholder for profile image */}
              <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-gray-300">M</div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="mb-4 dark:text-white">
                {t.about.description1}
              </p>
              <p className="dark:text-white">
                {t.about.description2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.projects.title}</h2>
          
          {/* Graphics Projects */}
          <h3 className="text-2xl font-bold mb-6">{t.projects.graphicsProjects}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Project Card 1 - TER */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <div className="h-64 relative">
                <GitHubImage 
                  src="/images/ter_screenshot_00_upscaled.webp" 
                  alt="TER Project Screenshot" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t.projectDetails.ter.title}</h3>
                <div className="mb-4">
                  <p className="font-semibold mb-2">{t.projects.renderOverview}</p>
                  <ul className="list-disc pl-5 dark:text-white space-y-1">
                    {t.projectDetails.ter.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/4J-company/mr-graphics" className="site-link hover:underline">{t.projects.repository}</a>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 - TMP */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <div className="h-64 relative">
                <GitHubImage 
                  src="/images/tmp_screenshot_01_upscaled.webp" 
                  alt="TMP Project Screenshot" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t.projectDetails.tmp.title}</h3>
                <div className="mb-4">
                  <p className="font-semibold mb-2">{t.projects.renderOverview}</p>
                  <ul className="list-disc pl-5 dark:text-white space-y-1">
                    {t.projectDetails.tmp.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/4J-company/mr-graphics" className="site-link hover:underline">{t.projects.repository}</a>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 - mr-graphics */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 lg:col-span-2">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t.projectDetails.mrGraphics.title}</h3>
                <p className="dark:text-white mb-4">
                  {t.projectDetails.mrGraphics.description}
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/4J-company/mr-graphics" className="site-link hover:underline">{t.projects.repository}</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Library Projects */}
          <h3 className="text-2xl font-bold mb-6">{t.projects.librariesTools}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* mr-math */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t.projectDetails.mrMath.title}</h3>
                <p className="dark:text-white mb-4">
                  {t.projectDetails.mrMath.description}
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-2">{t.projects.keyFeatures}</p>
                  <ul className="list-disc pl-5 dark:text-white space-y-1">
                    {t.projectDetails.mrMath.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/4J-company/mr-math" className="site-link hover:underline">{t.projects.repository}</a>
                </div>
              </div>
            </div>
            
            {/* mr-contractor */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t.projectDetails.mrContractor.title}</h3>
                <p className="dark:text-white mb-4">
                  {t.projectDetails.mrContractor.description}
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-2">{t.projects.keyFeatures}</p>
                  <ul className="list-disc pl-5 dark:text-white space-y-1">
                    {t.projectDetails.mrContractor.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/4J-company/mr-contractor" className="site-link hover:underline">{t.projects.repository}</a>
                </div>
              </div>
            </div>
            
            {/* mr-importer */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 lg:col-span-2">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t.projectDetails.mrImporter.title}</h3>
                <p className="dark:text-white mb-4">
                  {t.projectDetails.mrImporter.description}
                </p>
                <div className="mb-4">
                  <p className="font-semibold mb-2">{t.projects.keyFeatures}</p>
                  <ul className="list-disc pl-5 dark:text-white space-y-1">
                    {t.projectDetails.mrImporter.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/4J-company/mr-importer" className="site-link hover:underline">{t.projects.repository}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.contact.title}</h2>
          <div className="max-w-xl mx-auto">
            <p className="mb-6 text-center dark:text-white">
              {t.contact.description}
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="font-bold">{t.contact.telegram}</span>
                <a href="https://t.me/cgsg106" target="_blank" rel="noopener noreferrer" className="site-link hover:underline">@cgsg106</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">{t.contact.email}</span>
                <a href="mailto:mt6@4j-company.ru" className="site-link hover:underline">mt6@4j-company.ru</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">{t.contact.github}</span>
                <a href="https://github.com/cone-forest" target="_blank" rel="noopener noreferrer" className="site-link hover:underline">cone-forest</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400 border-t dark:border-gray-800">
        <p>{t.footer.rights}</p>
      </footer>
    </div>
  );
}
