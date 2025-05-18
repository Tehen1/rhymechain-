# Rhymechain

A modern web application that connects artists, collectors, and fans through a unique digital experience. Rhymechain serves as a platform for discovering artists, collecting digital cards, and participating in community events in the music and digital collectibles space.

## Project Overview

Rhymechain combines the world of music and digital collectibles to create an engaging ecosystem where:

- Artists can showcase their work and connect with fans
- Collectors can discover and acquire unique digital cards
- Community members can participate in special events and grow their collections
- Users can build and display their personal collections

## Tech Stack

This project is built with a modern, robust technology stack:

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Language**: TypeScript
- **Component Library**: Radix UI
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React's built-in hooks
- **Data Visualization**: Recharts

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rhymechain.git
   cd rhymechain
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
rhymechain/
├── app/               # Next.js app directory (pages and API routes)
├── components/        # UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── public/            # Static assets
├── styles/            # Global styles
```

## Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will detect Next.js and configure the build settings automatically
4. Your application will be deployed to a global CDN

### Deploying to GitHub Pages

To deploy to GitHub Pages:

1. Install the necessary dependencies:
   ```bash
   npm install -D next-export
   # or
   yarn add -D next-export
   ```

2. Modify `next.config.mjs` to support static exports:
   ```javascript
   const nextConfig = {
     output: 'export',
     // Enable static exports
     images: {
       unoptimized: true,
     },
     // Add basePath if deploying to a subfolder
     // basePath: '/rhymechain',
   };
   ```

3. Set up a GitHub Actions workflow (create `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: out
             branch: gh-pages
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

