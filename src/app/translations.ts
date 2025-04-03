export type Language = 'en' | 'ru' | 'de';

export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      github: 'GitHub',
    },
    // Hero section
    hero: {
      greeting: "Hello, I'm Michael",
      profession: "Graphics Programmer & Developer",
      viewWork: "View My Work",
      contactMe: "Contact Me",
    },
    // About section
    about: {
      title: "About Me",
      description1: "I specialize in graphics programming with extensive experience in rendering pipelines, shader development, and optimization techniques. My focus is on creating efficient and visually impressive graphical applications.",
      description2: "Currently working on mr-graphics, a modern rendering engine. I'm passionate about pushing the boundaries of real-time graphics and creating immersive visual experiences.",
    },
    // Projects section
    projects: {
      title: "My Projects",
      graphicsProjects: "Graphics Projects",
      librariesTools: "Libraries & Tools",
      renderOverview: "Render overview:",
      keyFeatures: "Key features:",
      repository: "Repository",
    },
    // Project-specific content
    projectDetails: {
      ter: {
        title: "TER (2022)",
        features: [
          "C/OpenGL",
          "Deferred rendering pipeline",
          "Blinn-Phong lighting model",
          "Team size: ~20",
        ],
      },
      tmp: {
        title: "TMP (2023)",
        features: [
          "C++/Vulkan",
          "Deferred rendering pipeline",
          "Blinn-Phong lighting model",
          "Culling and more compute shaders",
          "Generally parallel",
          "Team size: ~10",
        ],
      },
      mrGraphics: {
        title: "mr-graphics (WIP)",
        description: "Currently working on a modern rendering engine with advanced features and optimizations. This project aims to push the boundaries of real-time graphics with cutting-edge techniques.",
      },
      mrMath: {
        title: "mr-math",
        description: "Lightweight and high-performance linear algebra library optimized for 3D graphics workflow. Features SIMD-optimized vectors, matrices, quaternions, and specialized graphics types.",
        features: [
          "Cross-platform with support for GCC, Clang and MSVC",
          "Linear algebra types optimized for graphics workflows",
          "Type safety with correct unit conversions",
          "Competitive performance compared to other math libraries",
        ],
      },
      mrContractor: {
        title: "mr-contractor",
        description: "A declarative C++ task execution library for complex workflows, allowing for sequential and parallel execution stages with automatic dependency resolution.",
        features: [
          "Declarative API for workflow description",
          "Automatic dependency resolution",
          "Arbitrary nesting of parallel and sequential tasks",
          "Zero-boilerplate thread pooling",
          "Type safety for task inputs/outputs",
        ],
      },
      mrImporter: {
        title: "mr-importer",
        description: "An asset importing library designed for 3D models and resources, optimized for use in rendering engines and graphics applications.",
        features: [
          "Support for common 3D file formats",
          "Efficient resource management",
          "Integration with rendering pipelines",
          "Optimized for performance in real-time applications",
        ],
      },
    },
    // Recent activity section
    recentActivity: {
      title: "Recent GitHub Activity",
    },
    // Contact section
    contact: {
      title: "Get In Touch",
      description: "Feel free to reach out if you're looking for a graphics programmer, have a question about my projects, or just want to connect.",
      telegram: "Telegram:",
      email: "Email:",
      github: "GitHub:",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      sendMessage: "Send Message",
    },
    // Footer
    footer: {
      rights: "© 2025 Michael. All rights reserved.",
    },
    // Language selector
    languageSelector: {
      language: "Language",
      english: "English",
      russian: "Russian",
      german: "German",
    },
  },
  ru: {
    // Navigation
    nav: {
      about: 'Обо мне',
      projects: 'Проекты',
      contact: 'Контакты',
      github: 'GitHub',
    },
    // Hero section
    hero: {
      greeting: "Привет, я Михаил",
      profession: "Программист компьютерной графики и разработчик",
      viewWork: "Мои работы",
      contactMe: "Связаться со мной",
    },
    // About section
    about: {
      title: "Обо мне",
      description1: "Я специализируюсь на программировании графики, имею большой опыт работы с конвейерами рендеринга, разработкой шейдеров и методами оптимизации. Моя цель — создавать эффективные и визуально впечатляющие графические приложения.",
      description2: "В настоящее время я работаю над mr-graphics, современным движком рендеринга. Я увлечен расширением границ графики в реальном времени и созданием реалистичных визуальных впечатлений.",
    },
    // Projects section
    projects: {
      title: "Мои проекты",
      graphicsProjects: "Графические проекты",
      librariesTools: "Библиотеки и инструменты",
      renderOverview: "Обзор рендера:",
      keyFeatures: "Ключевые особенности:",
      repository: "Репозиторий",
    },
    // Project-specific content
    projectDetails: {
      ter: {
        title: "TER (2022)",
        features: [
          "C/OpenGL",
          "Отложенный конвейер рендеринга",
          "Модель освещения Блинна-Фонга",
          "Размер команды: ~20",
        ],
      },
      tmp: {
        title: "TMP (2023)",
        features: [
          "C++/Vulkan",
          "Отложенный конвейер рендеринга",
          "Модель освещения Блинна-Фонга",
          "Отсечение и дополнительные вычислительные шейдеры",
          "Общая параллельность",
          "Размер команды: ~10",
        ],
      },
      mrGraphics: {
        title: "mr-graphics (В разработке)",
        description: "В настоящее время работаю над современным движком рендеринга с продвинутыми функциями и оптимизациями. Этот проект направлен на расширение границ графики в реальном времени с использованием передовых технологий.",
      },
      mrMath: {
        title: "mr-math",
        description: "Легкая и высокопроизводительная библиотека линейной алгебры, оптимизированная для трехмерной графики. Включает векторы, матрицы и кватернионы с оптимизацией SIMD.",
        features: [
          "Кроссплатформенность с поддержкой GCC, Clang и MSVC",
          "Типы линейной алгебры, оптимизированные для графики",
          "Типобезопасность с корректными преобразованиями",
          "Конкурентоспособная производительность",
        ],
      },
      mrContractor: {
        title: "mr-contractor",
        description: "Декларативная библиотека для выполнения задач в C++, обеспечивающая последовательное и параллельное выполнение с автоматическим разрешением зависимостей.",
        features: [
          "Декларативный API для описания рабочих процессов",
          "Автоматическое разрешение зависимостей",
          "Произвольная вложенность параллельных и последовательных задач",
          "Пулинг потоков без шаблонного кода",
          "Типобезопасность входных/выходных данных задач",
        ],
      },
      mrImporter: {
        title: "mr-importer",
        description: "Библиотека импорта ресурсов для 3D-моделей и других ресурсов, оптимизированная для использования в графических приложениях.",
        features: [
          "Поддержка распространенных 3D-форматов",
          "Эффективное управление ресурсами",
          "Интеграция с конвейерами рендеринга",
          "Оптимизирована для производительности",
        ],
      },
    },
    // Recent activity section
    recentActivity: {
      title: "Недавняя активность на GitHub",
    },
    // Contact section
    contact: {
      title: "Связаться со мной",
      description: "Не стесняйтесь обращаться, если вам нужен графический программист, у вас есть вопрос по моим проектам, или вы просто хотите связаться.",
      telegram: "Telegram:",
      email: "Email:",
      github: "GitHub:",
      formName: "Имя",
      formEmail: "Email",
      formMessage: "Сообщение",
      sendMessage: "Отправить сообщение",
    },
    // Footer
    footer: {
      rights: "© 2025 Михаил. Все права защищены.",
    },
    // Language selector
    languageSelector: {
      language: "Язык",
      english: "Английский",
      russian: "Русский",
      german: "Немецкий",
    },
  },
  de: {
    // Navigation
    nav: {
      about: 'Über mich',
      projects: 'Projekte',
      contact: 'Kontakt',
      github: 'GitHub',
    },
    // Hero section
    hero: {
      greeting: "Hallo, ich bin Michael",
      profession: "Grafikprogrammierer & Entwickler",
      viewWork: "Meine Arbeit ansehen",
      contactMe: "Kontakt aufnehmen",
    },
    // About section
    about: {
      title: "Über mich",
      description1: "Ich bin spezialisiert auf Grafikprogrammierung mit umfangreicher Erfahrung in Rendering-Pipelines, Shader-Entwicklung und Optimierungstechniken. Mein Fokus liegt auf der Erstellung effizienter und visuell beeindruckender grafischer Anwendungen.",
      description2: "Derzeit arbeite ich an mr-graphics, einer modernen Rendering-Engine. Ich bin leidenschaftlich daran interessiert, die Grenzen der Echtzeit-Grafik zu erweitern und immersive visuelle Erlebnisse zu schaffen.",
    },
    // Projects section
    projects: {
      title: "Meine Projekte",
      graphicsProjects: "Grafikprojekte",
      librariesTools: "Bibliotheken und Tools",
      renderOverview: "Render-Überblick:",
      keyFeatures: "Hauptmerkmale:",
      repository: "Repository",
    },
    // Project-specific content
    projectDetails: {
      ter: {
        title: "TER (2022)",
        features: [
          "C/OpenGL",
          "Deferred-Rendering-Pipeline",
          "Blinn-Phong-Beleuchtungsmodell",
          "Teamgröße: ~20",
        ],
      },
      tmp: {
        title: "TMP (2023)",
        features: [
          "C++/Vulkan",
          "Deferred-Rendering-Pipeline",
          "Blinn-Phong-Beleuchtungsmodell",
          "Culling und mehr Compute-Shader",
          "Allgemein parallel",
          "Teamgröße: ~10",
        ],
      },
      mrGraphics: {
        title: "mr-graphics (In Entwicklung)",
        description: "Derzeit arbeite ich an einer modernen Rendering-Engine mit fortschrittlichen Funktionen und Optimierungen. Dieses Projekt zielt darauf ab, die Grenzen der Echtzeit-Grafik mit modernsten Techniken zu erweitern.",
      },
      mrMath: {
        title: "mr-math",
        description: "Leichte und hochleistungsfähige lineare Algebra-Bibliothek, optimiert für 3D-Grafik-Workflow. Bietet SIMD-optimierte Vektoren, Matrizen, Quaternionen und spezialisierte Grafiktypen.",
        features: [
          "Plattformübergreifend mit Unterstützung für GCC, Clang und MSVC",
          "Lineare Algebra-Typen für Grafik-Workflows optimiert",
          "Typsicherheit mit korrekten Einheitenumrechnungen",
          "Wettbewerbsfähige Leistung im Vergleich zu anderen Bibliotheken",
        ],
      },
      mrContractor: {
        title: "mr-contractor",
        description: "Eine deklarative C++-Bibliothek zur Aufgabenausführung für komplexe Workflows, die sequentielle und parallele Ausführungsphasen mit automatischer Abhängigkeitsauflösung ermöglicht.",
        features: [
          "Deklarative API für Workflow-Beschreibung",
          "Automatische Abhängigkeitsauflösung",
          "Beliebige Verschachtelung von parallelen und sequentiellen Aufgaben",
          "Zero-Boilerplate Thread-Pooling",
          "Typsicherheit für Aufgaben-Ein-/Ausgaben",
        ],
      },
      mrImporter: {
        title: "mr-importer",
        description: "Eine Asset-Import-Bibliothek für 3D-Modelle und Ressourcen, optimiert für die Verwendung in Rendering-Engines und Grafikanwendungen.",
        features: [
          "Unterstützung für gängige 3D-Dateiformate",
          "Effizientes Ressourcenmanagement",
          "Integration mit Rendering-Pipelines",
          "Optimiert für Leistung in Echtzeit-Anwendungen",
        ],
      },
    },
    // Recent activity section
    recentActivity: {
      title: "Aktuelle GitHub-Aktivitäten",
    },
    // Contact section
    contact: {
      title: "Kontakt aufnehmen",
      description: "Kontaktieren Sie mich gerne, wenn Sie einen Grafikprogrammierer suchen, Fragen zu meinen Projekten haben oder einfach in Kontakt treten möchten.",
      telegram: "Telegram:",
      email: "E-Mail:",
      github: "GitHub:",
      formName: "Name",
      formEmail: "E-Mail",
      formMessage: "Nachricht",
      sendMessage: "Nachricht senden",
    },
    // Footer
    footer: {
      rights: "© 2025 Michael. Alle Rechte vorbehalten.",
    },
    // Language selector
    languageSelector: {
      language: "Sprache",
      english: "Englisch",
      russian: "Russisch",
      german: "Deutsch",
    },
  }
}; 