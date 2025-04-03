# Graphics Programming Portfolio

A modern, responsive portfolio website built with Next.js and TailwindCSS, showcasing my graphics programming projects and rendering expertise.

## Features

- Responsive design that works on all devices
- Project showcase with screenshots of graphics programming work
- Multilingual support (English, Russian, German)
- Contact information
- GitHub Pages deployment

## Projects Featured

### Graphics Projects
- **TER (2022)** - Graphics rendering project using C/OpenGL with deferred rendering pipeline
- **TMP (2023)** - Advanced rendering project using C++/Vulkan with improved compute shader utilization
- **mr-graphics (WIP)** - In-development modern rendering engine

### Libraries & Tools
- **mr-math** - High-performance linear algebra library optimized for 3D graphics with SIMD instructions
- **mr-contractor** - Declarative C++ task execution library for complex workflows
- **mr-importer** - Asset importing library for 3D models and resources

## Technologies

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [GitHub Pages](https://pages.github.com/) - Hosting

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Building for Production

```bash
# Build the site
npm run build
```

This generates a static export in the `out` directory that can be deployed to GitHub Pages.

## GitHub Pages Deployment

This project includes GitHub Actions workflows for automatic deployment to GitHub Pages.

1. Push your changes to the `main` branch
2. GitHub Actions will build and deploy your site
3. Access your site at `https://cone-forest.github.io/`

Before your first deployment:

1. In GitHub repository settings, enable GitHub Pages with GitHub Actions
2. Update the `next.config.ts` file by uncommenting and updating the basePath:

```typescript
const nextConfig = {
  output: 'export',
  basePath: '/',
  images: { unoptimized: true },
};
```

## Contact

- **Telegram:** [https://t.me/cgsg106](https://t.me/cgsg106)
- **Email:** mt6@4j-company.ru
- **GitHub:** [https://github.com/cone-forest](https://github.com/cone-forest)

## License

MIT
