<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/nextjs--starter--fullstack--node-0a0a0a?style=for-the-badge&logo=next.js&logoColor=white">
    <img alt="nextjs-starter-fullstack-node" src="https://img.shields.io/badge/nextjs--starter--fullstack--node-ffffff?style=for-the-badge&logo=next.js&logoColor=black">
  </picture>
</p>

<p align="center">
  <a href="https://github.com/MrSaikatS/nextjs-starter-fullstack-node/stargazers">
    <img src="https://img.shields.io/github/stars/MrSaikatS/nextjs-starter-fullstack-node?style=for-the-badge&logo=github&color=gold" alt="GitHub Stars">
  </a>
  <a href="https://github.com/MrSaikatS/nextjs-starter-fullstack-node/issues">
    <img src="https://img.shields.io/github/issues/MrSaikatS/nextjs-starter-fullstack-node?style=for-the-badge&logo=github" alt="GitHub Issues">
  </a>
  <a href="https://github.com/MrSaikatS/nextjs-starter-fullstack-node/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/MrSaikatS/nextjs-starter-fullstack-node?style=for-the-badge&logo=github" alt="License">
  </a>
</p>

<p align="center">
  ⭐ If you find this project useful, consider giving it a star - it helps others discover it!
</p>

<p align="center">Production-ready Next.js starter template - TypeScript, Prisma 7 + SQLite, shadcn/ui, React Compiler, and modern tooling out of the box.</p>

---

## 🧰 What's Inside

| Feature                    | Description                                          |
| -------------------------- | ---------------------------------------------------- |
| **Next.js 16**             | App Router, React 19, typed routes, React Compiler   |
| **Prisma 7 + SQLite**      | Type-safe database client via libSQL adapter         |
| **shadcn/ui**              | Base UI primitives, base-vega style, dark/light mode |
| **react-hook-form + Zod**  | Form validation pattern ready to use                 |
| **next-themes**            | Dark/light mode with system preference detection     |
| **Tailwind CSS 4**         | Utility-first CSS, tw-animate-css                    |
| **ESLint + Prettier**      | Flat config, core-web-vitals, Tailwind plugin        |
| **Environment Validation** | `@t3-oss/env-nextjs` for client & server env vars    |

## ✅ Prerequisites

- [Bun](https://bun.sh) - runtime + package manager
- Node.js >=24.x, npm >=11.x (for compatibility)
- PowerShell 7+ (Windows) or bash (macOS/Linux)

## 🚀 Getting Started

```bash
git clone https://github.com/MrSaikatS/nextjs-starter-fullstack-node.git
cd nextjs-starter-fullstack-node
bun install
bun run migrate    # apply Prisma migrations + generate client
bun run dev        # start dev server at http://localhost:3000
```

Copy `.env.example` to `.env` if starting fresh - defaults work for local SQLite.

## 📦 Tech Stack

| Layer     | Technology                                      |
| --------- | ----------------------------------------------- |
| Framework | Next.js 16 (App Router)                         |
| Language  | TypeScript 6 (strict)                           |
| UI        | React 19, Tailwind CSS 4, shadcn/ui (base-vega) |
| Forms     | react-hook-form + Zod 4 + @hookform/resolvers   |
| Database  | SQLite via Prisma 7 + libSQL adapter            |
| Icons     | lucide-react                                    |
| Theme     | next-themes                                     |
| Compiler  | React Compiler enabled                          |
| Lint      | ESLint 9 (flat config) + Prettier 3             |

## ⚙️ Scripts

| Script    | Command                                       |
| --------- | --------------------------------------------- |
| `dev`     | `next dev`                                    |
| `build`   | `prisma generate && next build`               |
| `start`   | `next start`                                  |
| `lint`    | `next typegen && tsc --noEmit && eslint`      |
| `prod`    | `prisma generate && next build && next start` |
| `migrate` | `prisma migrate dev && prisma generate`       |
| `studio`  | `prisma studio --browser none`                |

## 🔌 Integrations

| Tool                       | Purpose                                                              |
| -------------------------- | -------------------------------------------------------------------- |
| **shadcn/ui**              | Registry-based component system (`@/components/shadcnui` alias)      |
| **Prisma ORM 7**           | Schema-first DB with migration pipeline                              |
| **React Compiler**         | Automatic memoization via `babel-plugin-react-compiler`              |
| **Environment Validation** | `@t3-oss/env-nextjs` - validated `DATABASE_URL`, client/server split |

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feat/amazing-feature`
3. 💻 Make your changes
4. 📝 Commit using [conventional commits](https://www.conventionalcommits.org/)
5. 🚀 Open a Pull Request

Check the [issues page](https://github.com/MrSaikatS/nextjs-starter-fullstack-node/issues) for bugs or feature requests.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/MrSaikatS">Saikat Sardar</a>
  <br>
  🐛 Report Bug · 💡 Suggest Feature
</p>
