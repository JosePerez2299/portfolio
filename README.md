# Portfolio Next.js

A modern portfolio website built with Next.js, TypeScript, and Docker.

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Docker

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The development server will start at http://localhost:3000

### Docker

```bash
# Build the Docker image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

## Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components
│   └── types/           # TypeScript types
├── public/             # Static assets
├── Dockerfile
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```
