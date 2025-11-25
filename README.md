# Next.js Starter Fullstack Node

A production-ready Next.js starter template for fullstack development with modern tooling and best practices out of the box. Built with TypeScript, Tailwind CSS v4, Next.js App Router, and complete database integration with Prisma and SQLite.

## ✨ Features

- ⚡ **Next.js 16** with App Router (latest stable)
  - 🚀 **Turbopack (stable)** - Default bundler with 2-5× faster builds, up to 10× faster Fast Refresh
  - 🛠️ Enhanced Routing & Caching APIs
  - 🔍 Type-safe Routes with `typedRoutes` for better development experience
- 🎨 **Tailwind CSS v4** with modern CSS variables and theming system
  - 🌓 Built-in Dark/Light Mode with `next-themes`
  - 🎨 Comprehensive design system with CSS custom properties
- ✨ **Lucide React Icons** for beautiful, consistent icons
- 🛠 **TypeScript** for full type safety
- 🎯 **React 19.2** with latest features and optimizations
  - 🚀 **React Compiler Support (stable)** - Automatic memoization for better performance
- 🧩 **shadcn/ui Ready** with components.json configuration
  - 🎨 New York style preset
  - 📦 Ready for component installation
- 🖼️ **Image Optimization** with `sharp`
- 🔍 **ESLint** and **Prettier** for code quality
- 🎭 **Theme Toggle Component** with smooth transitions
- 📱 **Responsive Layout** with fixed header navigation
- 🗄️ **Database Integration** with Prisma and SQLite
  - 🚀 **Better SQLite3 Adapter** for optimal performance
  - 📝 **Type-safe Database Access** with generated Prisma Client
  - 🔧 **Environment Configuration** with proper validation
  - 📊 **Prisma Studio** for database management

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x (LTS recommended)
- npm 11.x or later (included with Node.js)
- Git for version control

> **Note:** This project uses Next.js 16 with React 19.2, featuring stable Turbopack (2-5× faster builds), React Compiler for optimal development experience, and complete database integration with Prisma and SQLite for fullstack development.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrSaikatS/nextjs-starter-fullstack-node.git
   cd nextjs-starter-fullstack-node
   ```

2. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   The default configuration uses SQLite with a local database file. You can modify the `DATABASE_URL` in `.env` if needed.

3. Install dependencies (using Bun is recommended for faster installation):

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

4. Set up the database:

   ```bash
   # Using Bun
   bun migrate

   # Or using npm
   npm run migrate
   ```

   This command will create the database schema and generate the Prisma client.

5. Start the development server:

   ```bash
   # Using Bun (recommended for faster development)
   bun dev

   # Or using npm
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Development

### Available Scripts

#### Using Bun (recommended)

- `bun dev` - Start the development server with Turbopack (2-5× faster builds, up to 10× faster Fast Refresh)
- `bun build` - Build for production with Prisma client generation and Turbopack
- `bun start` - Start production server (for production deployment)
- `bun lint` - Run ESLint
- `bun prod` - Test production locally (lint, build with Prisma generation, and start production server)
- `bun migrate` - Run Prisma migrations and generate client
- `bun studio` - Open Prisma Studio for database management

#### Using npm

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build for production with Prisma client generation and Turbopack
- `npm start` - Start production server (for production deployment)
- `npm run lint` - Run ESLint
- `npm run prod` - Test production locally (lint, build with Prisma generation, and start production server)
- `npm run migrate` - Run Prisma migrations and generate client
- `npm run studio` - Open Prisma Studio for database management

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS v4
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Home page
├── components/
│   ├── Header/
│   │   └── Header.tsx       # Navigation header
│   ├── Providers/
│   │   └── ThemeProvider.tsx # Theme configuration
│   ├── ThemeToggleButton.tsx # Dark/light mode toggle
│   └── shadcnui/            # shadcn/ui components (ready for installation)
├── hooks/
│   └── .gitkeep
└── lib/
    ├── dbClient.ts          # Prisma database client
    ├── env/                 # Environment configuration
    │   ├── clientEnv.ts     # Client-side environment variables
    │   └── serverEnv.ts     # Server-side environment variables
    └── utils.ts             # Utility functions (cn helper)

prisma/
├── schema.prisma            # Database schema definition
└── dev.db                   # SQLite database file (generated)

generated/
└── prisma/                  # Generated Prisma client
    └── client/              # Type-safe database client

.env.example                 # Environment variables template
.env                         # Local environment variables (gitignored)
```

## 🗄️ Database

This project uses **Prisma** with **SQLite** for type-safe database operations:

### Database Setup

- **Database Provider**: SQLite with Better SQLite3 Adapter for optimal performance
- **Schema Management**: Prisma migrations for version control
- **Type Safety**: Auto-generated TypeScript client
- **Development**: Prisma Studio for visual database management

### Environment Configuration

The project uses a structured approach to environment variables:

- **`.env.example`**: Template for required environment variables
- **`src/lib/env/clientEnv.ts`**: Client-side environment variables with type safety
- **`src/lib/env/serverEnv.ts`**: Server-side environment variables with validation
- **`src/lib/dbClient.ts`**: Singleton Prisma client instance with Better SQLite3 adapter

### Database Operations

```bash
# Create and run migrations
bun migrate  # or npm run migrate

# Generate Prisma client (included in migrate command)
prisma generate

# Open Prisma Studio for database management
bun studio  # or npm run studio
```

### Schema Customization

Edit `prisma/schema.prisma` to define your database models. After changes:

1. Run `bun migrate` to create a new migration
2. The Prisma client will be automatically regenerated
3. Use the generated client in `src/lib/dbClient.ts` for type-safe database access

## 🎨 Theming

This project uses `next-themes` for theme management with Tailwind CSS v4's modern theming system:

- **Default theme**: Dark mode
- **Theme toggle**: Smooth animated button in header
- **CSS variables**: Comprehensive design system with light/dark variants
- **shadcn/ui compatible**: Pre-configured for component theming

The theming system supports both light and dark modes with smooth transitions and is fully accessible.

## 🧩 shadcn/ui Integration

This starter is pre-configured for shadcn/ui components:

- **Components.json**: Configured with New York style preset
- **Path aliases**: Ready for component installation (`@/components/shadcnui`)
- **Theme system**: Integrated with Tailwind CSS variables
- **Icon library**: Lucide React icons configured

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Prisma with SQLite (Better SQLite3 Adapter)
- **UI Components**: shadcn/ui (ready)
- **Icons**: Lucide React
- **Theme**: next-themes
- **Image Optimization**: sharp
- **Code Quality**: ESLint, Prettier
- **Package Manager**: Bun/npm support
- **Environment**: Type-safe environment variables
- **Validation**: Zod for schema validation

## 🔧 Configuration

- **React Compiler**: Enabled in `next.config.ts`
- **Typed Routes**: Enabled for type-safe navigation
- **Path Aliases**: `@/*` mapped to `./src/*`
- **Component Aliases**: Pre-configured for shadcn/ui
- **Theme System**: Full CSS variable integration
- **Database**: Prisma with Better SQLite3 adapter
- **Environment**: Structured client/server environment variables
- **Validation**: Zod schemas for environment validation

## 📝 Environment Variables

The project uses a structured approach to environment configuration:

### Required Variables

```bash
# Database
DATABASE_URL="file:./prisma/dev.db"  # SQLite database path
```

### Environment Structure

- **Client Variables**: Accessible in browser (defined in `src/lib/env/clientEnv.ts`)
- **Server Variables**: Server-side only (defined in `src/lib/env/serverEnv.ts`)
- **Type Safety**: All environment variables are validated with Zod schemas

Copy `.env.example` to `.env` and modify as needed for your environment.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Better SQLite3](https://github.com/WiseLibs/better-sqlite3)

---

Built with ❤️ by [Saikat Sardar](https://github.com/MrSaikatS)

[![GitHub stars](https://img.shields.io/github/stars/MrSaikatS/nextjs-starter-fullstack-node?style=social)](https://github.com/MrSaikatS/nextjs-starter-fullstack-node/stargazers) [![GitHub forks](https://img.shields.io/github/forks/MrSaikatS/nextjs-starter-fullstack-node?style=social)](https://github.com/MrSaikatS/nextjs-starter-fullstack-node/network/members)
