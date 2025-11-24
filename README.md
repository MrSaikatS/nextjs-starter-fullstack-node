# Next.js Starter Fullstack Node

A production-ready Next.js starter template for fullstack development with modern tooling and best practices out of the box. Built with TypeScript, Tailwind CSS v4, and Next.js App Router.

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

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x (LTS recommended)
- npm 11.x or later (included with Node.js)
- Git for version control

> **Note:** This project uses Next.js 16 with React 19.2, featuring stable Turbopack (2-5× faster builds) and React Compiler for optimal development experience.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrSaikatS/nextjs-starter-fullstack-node.git
   cd nextjs-starter-fullstack-node
   ```

2. Install dependencies (using Bun is recommended for faster installation):

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using pnpm
   pnpm install
   ```

3. Start the development server:

   ```bash
   # Using Bun (recommended for faster development)
   bun dev

   # Or using npm
   npm run dev

   # Or using pnpm
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Development

### Available Scripts

#### Using Bun (recommended)

- `bun dev` - Start the development server with Turbopack (2-5× faster builds, up to 10× faster Fast Refresh)
- `bun build` - Build for production with Turbopack
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun prod` - Lint, build, and start production server

#### Using npm/pnpm

- `npm run dev` or `pnpm dev` - Start the development server with Turbopack
- `npm run build` or `pnpm build` - Build for production with Turbopack
- `npm start` or `pnpm start` - Start production server
- `npm run lint` or `pnpm lint` - Run ESLint
- `npm run prod` or `pnpm prod` - Lint, build, and start production server

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
    └── utils.ts             # Utility functions (cn helper)
```

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
- **Path aliases**: Ready for component installation (`@/components/ui`)
- **Theme system**: Integrated with Tailwind CSS variables
- **Icon library**: Lucide React icons configured

Install components easily:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# ... and more
```

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (ready)
- **Icons**: Lucide React
- **Theme**: next-themes
- **Image Optimization**: sharp
- **Code Quality**: ESLint, Prettier
- **Package Manager**: Bun/npm/pnpm support

## 🔧 Configuration

- **React Compiler**: Enabled in `next.config.ts`
- **Typed Routes**: Enabled for type-safe navigation
- **Path Aliases**: `@/*` mapped to `./src/*`
- **Component Aliases**: Pre-configured for shadcn/ui
- **Theme System**: Full CSS variable integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

Built with ❤️ by [Saikat Sardar](https://github.com/MrSaikatS)
