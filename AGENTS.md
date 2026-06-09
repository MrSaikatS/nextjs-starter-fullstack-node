<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:form-patterns -->

# Form Patterns

Schemas in `src/lib/zodSchema.ts` — export both schema and `type X = z.infer<typeof xSchema>`.

Components use `"use client"`, `react-hook-form` + `@hookform/resolvers/zod`, and shadcn primitives:

```typescript
const { handleSubmit, control, formState: { isSubmitting } } = useForm({
  resolver: zodResolver(mySchema),
  defaultValues: { ... },
  mode: "all",
});
```

Each field goes through `Controller`:

```typescript
<Controller
  name="fieldName"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Label</FieldLabel>
      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} autoComplete="..." />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

Submit: `<form onSubmit={handleSubmit(handler)} noValidate>`. Button disabled while submitting with icon toggle.

See existing examples under `src/components/Auth/`.

<!-- END:form-patterns -->

## Agent behavior

- **Ask questions.** When the request is ambiguous, when there are real implementation choices with tradeoffs, or before any non-obvious / destructive action, use the `question` tool to confirm. Prefer one short batched question over back-and-forth guessing.
- **Remember new learning.** When you discover something non-obvious about this repo — a gotcha, a convention, a fix, a command that wasn't documented — add it back to this file (or a clearly-scoped section) so future sessions benefit. Keep entries concise and high-signal; delete stale ones.
- **Use available skills and MCPs.** Before writing code for a task that matches a listed skill (e.g. `shadcn`, `prisma-*`, `next-*`, `better-auth-*`, `vercel-react-*`, `zod`, etc.), load it with the `skill` tool. And MCPs that are directly relevant to this stack e.g. **`shadcn`** (local; component registry / audit) and **`better-auth`** (remote; auth setup). Use them when the task fits instead of guessing from training data.

## Stack at a glance

- Next.js 16.2 + React 19.2 (App Router, Turbopack default, React Compiler on, `typedRoutes` on)
- Prisma 7 with `@prisma/adapter-libsql` (SQLite, file-backed)
- Tailwind CSS v4 (CSS-only config in `globals.css`; no `tailwind.config.ts`)
- shadcn/ui with the `base-luma` style preset; primitives from `@base-ui/react` (not Radix)
- `next-themes` (default `dark`, `enableSystem={false}`), `react-toastify`, `lucide-react`
- `@t3-oss/env-nextjs` + Zod for env validation

## Verification

- **Primary check**: `bun lint` — runs `eslint` with `eslint-config-next` core-web-vitals + typescript.
- **Secondary / type gate**: `bun run build`. There is no separate `typecheck` script and no test framework; TypeScript errors surface only during the build.
- **Full prod check**: `bun prod` — `prisma generate && eslint && next build && next start`. Use before schema or env changes.

## Prisma (Prisma 7, custom output)

- Generator: `provider = "prisma-client"`, `output = "../generated/prisma"`. This is the Prisma 7 generator, **not** `prisma-client-js`.
- Import the client as `import { PrismaClient } from "@generated/prisma/client"`. There is no `@prisma/client` import surface in this repo.
- `prisma/schema.prisma` has **no** `datasource.url` line. The URL comes from `prisma.config.ts` via `env("DATABASE_URL")` (loaded with `dotenv/config`). Do not add it back inline.
- `src/lib/database/dbClient.ts` is a `globalThis` singleton (HMR-safe) wired to `PrismaLibSql`. Do not instantiate `PrismaClient` elsewhere; import from this file.
- `serverEnv.DATABASE_URL` is Zod-validated to start with `file:./` (`src/lib/env/serverEnv.ts`). A non-`file:./` URL throws at boot.
- No migrations exist yet — `bun migrate` (`prisma migrate dev && prisma generate`) creates `prisma/migrations/`. Schema edits go through that command, not `prisma db push`.
- `bun studio` runs headless (`--browser none`); open the printed URL in a browser manually.
- `generated/**` is gitignored and excluded from ESLint. Do not hand-edit generated files.
- `build` and `prod` scripts prepend `prisma generate` — running raw `next build` will fail with missing types if the client is stale.

## Env validation (T3 env)

- `src/lib/env/clientEnv.ts` and `src/lib/env/serverEnv.ts` define Zod schemas via `@t3-oss/env-nextjs`.
- `serverEnv.ts` uses `experimental__runtimeEnv: process.env`. The `experimental__` prefix is required for non-Next-runtime access — keep it verbatim.
- `next.config.ts` imports both env files **as side effects** at the top of the module to trigger validation at load time. Do not remove those imports; the rest of the app reads `serverEnv` / `clientEnv` from those modules.
- New vars: add to `serverEnv.ts` (server) or `clientEnv.ts` (must be `NEXT_PUBLIC_*`) and mirror in `.env.example`.

## Styling

- Tailwind v4: all config lives in `src/app/globals.css` via `@theme` and `@custom-variant`. PostCSS plugin is `@tailwindcss/postcss`. There is no `tailwind.config.ts` — do not create one.
- `globals.css` imports `shadcn/tailwind.css`; removing it breaks the Base Luma design tokens.
- Prettier: `singleAttributePerLine: true`, `bracketSameLine: true`, `experimentalTernaries: true`, and `prettier-plugin-tailwindcss` is enabled. New code matches (one prop per line; JSX closing bracket on the same line as the tag).

## shadcn / Base UI

- `components.json` sets `ui` → `@/components/shadcnui` (not the default `@/components/ui`). Add components with `bunx shadcn add ...`; they land in `src/components/shadcnui/`.
- The shipped `Button` wraps `Button as ButtonPrimitive` from `@base-ui/react/button`. Do not introduce Radix or `react-aria` primitives — they don't share the Base Luma styling.

## Path aliases (`tsconfig.json`)

- `@/*` → `./src/*`
- `@generated/*` → `./generated/*` (Prisma client only)

## Reserved directories

- `src/server/` — server-only modules (server actions, anything importing `server-only`). Currently a `.gitkeep`.
- `src/hooks/` — custom React hooks. Currently a `.gitkeep`.

## Package manager

- `bun.lock` is committed; Bun is the primary workflow (`bun install`, `bun <script>`). npm works (engines pin `node >=24`, `npm >=11`) but the scripts and README are written around `bun`.

## Misc

- ESLint ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`, `generated/**`.
- `.env` is gitignored; `.env.example` is the committed template. Do not commit secrets.
- `CHECKPOINT_DISABLE=1` is set to silence Prisma telemetry.
- No CI workflows or pre-commit hooks exist. Pre-PR verification is `bun lint` then `bun run build` (see Verification above).
