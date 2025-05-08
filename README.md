# Cone Forest Website

This is a personal portfolio website built with Next.js featuring my graphics programming projects and rendering expertise.

## Features

- Modern, responsive design built with Tailwind CSS
- Showcase of graphics programming projects
- Multilingual support (English, Russian, German)
- Optimized for GitHub Pages deployment

## Development

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn package manager

### Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cone-forest-website.git
cd cone-forest-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at http://localhost:3000

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment. The site will automatically be deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
# or
yarn deploy
```

### How it Works

The deployment is configured to:

1. Build the Next.js application with static export
2. Add a `.nojekyll` file to prevent GitHub Pages from processing the site with Jekyll
3. Push the built files to the `gh-pages` branch
4. Configure GitHub Pages to serve the site from this branch

## Configuration for GitHub Pages

The site includes several important configurations for proper GitHub Pages rendering:

- `next.config.ts` includes `basePath` and `assetPrefix` settings for the GitHub Pages URL path
- `GitHubImage` component properly handles image paths for both local development and GitHub Pages
- GitHub Actions workflow automatically deploys changes

## License

MIT
