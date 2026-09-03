<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Stack

| Pkg           | Ver                | Note                                                                                                                                                                 |
| ------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Next.js       | ^16.3              | `reactCompiler: true`, `typedRoutes: true`                                                                                                                           |
| React         | ^19.2              |                                                                                                                                                                      |
| TypeScript    | ^5.9               | strict, ESNext module, bundler resolution                                                                                                                            |
| Prisma        | ^7.10              | Uses `prisma-client` generator (not `prisma-client-js`). Output: `generated/prisma`. Driver adapter: `@prisma/adapter-libsql` for SQLite. Config: `prisma.config.ts` |
| shadcn/ui     | base-vega style    | Components in `src/components/shadcnui/`. Aliased as `@/components/shadcnui`                                                                                         |
| Base UI React | ^1.7               | Primitive provider for shadcn components (e.g., `@base-ui/react/button`)                                                                                             |
| Tailwind CSS  | ^4.3               | `@tailwindcss/postcss` plugin, `tw-animate-css`, `shadcn/tailwind.css`                                                                                               |
| Zod           | ^4.5               | Schema validation                                                                                                                                                    |
| env           | @t3-oss/env-nextjs | Split: `src/lib/env/serverEnv.ts` + `clientEnv.ts`                                                                                                                   |

Path aliases: `@/*` → `./src/*`, `@generated/*` → `./generated/*`.

Engines: Node >= 24, npm >= 11.

## Scripts

| Script       | Runs                                     |
| ------------ | ---------------------------------------- |
| `dev`        | `next dev`                               |
| `build`      | `prisma generate && next build`          |
| `start`      | `next start`                             |
| `lint`       | `eslint` only                            |
| `lint:check` | `next typegen && tsc --noEmit && eslint` |
| `migrate`    | `prisma migrate dev && prisma generate`  |
| `studio`     | `prisma studio --browser none`           |

## Agent behavior

- **Ask questions** when ambiguous or before destructive actions. Ask one question at a time. An earlier answer can change what the remaining questions should be.
- **Use your full toolkit**: Reach for `websearch`, `webfetch`, and any other available tools whenever they improve correctness. Do not answer from memory what a live tool can verify. Use `rg` (ripgrep) for file and content searches in the shell when it is installed.
- **Decisions between options**: When a choice exists, evaluate all options first, pick the best one, then ask the user with every option listed (chosen one included and marked) before proceeding. Never silently pick one.
- **Update this file** when you discover non-obvious gotchas, fixes, or conventions.
- **Use skills + MCPs** before writing code matching `prisma-*`, `next-*`, `better-auth-*`, `zod`, etc. Use `shadcn` MCP for component add/search/audit. Use `better-auth` MCP for auth docs.

## Verification

- **Primary**: `bun run lint`, eslint only. This is the default check.
- **Heavy gates**: `bun lint:check` runs `next typegen`, `tsc --noEmit`, and `eslint`. `bun run build` runs `prisma generate && next build`. Use these only when requested or when playwright-cli testing fails, since the dev server already runs typegen and typechecks during browser verification.
- **Browser**: Use `playwright-cli` for UI verification, via `bunx playwright-cli` if it is not installed. Enumerate capabilities with `playwright-cli --help`.
- **Headed mode**: Always run visible with `--headed`, e.g. `playwright-cli open --headed ...`.
- **Look at the page**: The agent has vision. Use `playwright-cli screenshot` and actually inspect layout, badges, dialogs, and styling. Do not rely on accessibility snapshots alone.
- **Click-testing**: Prefer CLI-driven click-testing against the running dev server.
- **Artifacts**: Snapshots, console logs, and screenshots land in `.playwright-cli/`, which is gitignored.
- **Cheat-sheet**: Maintain `playwright-cli.md` at the repo root, a running record of UI element names, routes, form shapes, and flow gotchas discovered while testing. Consult it before scanning snapshots, and append new learnings as they are discovered.

## Project structure

```
src/
  app/              # App Router (layout.tsx, page.tsx, globals.css)
  components/
    Layout/         # Header, ThemeToggleButton
    Providers/      # ThemeProvider (next-themes)
    shadcnui/       # shadcn primitives (button.tsx, toast.tsx)
  hooks/            # Custom hooks (currently empty)
  lib/
    dbClient/       # Prisma singleton with libSQL adapter
    env/            # serverEnv.ts, clientEnv.ts (t3-env)
    fonts.ts        # next/font (Geist, Inter)
    types.ts        # LayoutProps
    utils.ts        # cn() helper (clsx + tailwind-merge)
  server/           # API routes placeholder (empty)
generated/prisma/   # Prisma client output (gitignored)
public/uploads/     # User uploads (all files ignored except .gitkeep)
```

## Gitignore pattern: uploads

`public/uploads/*` + `!public/uploads/.gitkeep` ignores all uploaded files but keeps the empty dir tracked via `.gitkeep`. Do not add `public/uploads/` itself to gitignore.

## Code style

- **Functions**: Always use arrow functions (`const foo = () => {}`), never `function` declarations. Exception: `src/components/shadcnui/` keeps its generated style.
- **No em dashes**: Never use em dashes in prose, comments, or docs. Use periods or commas instead. Also avoid parentheses, en dashes, and hyphens as dash substitutes.

## Key restrictions

- **ESLint**: Locked at eslint@9.x until `eslint-plugin-react` ships v10 support. Do NOT bump.
- **TypeScript**: Currently ^5.9. TS 7.0 (Go-native compiler) blocked until typescript-eslint API stabilizes (~Oct 2026). Do not migrate.

## Form patterns

Schemas live in `src/lib/zodSchema.ts`. Export both the schema and `type X = z.infer<typeof xSchema>`.

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

## Git commits

Use PowerShell here-strings:

```powershell
git commit -m @"
<commit message here>
"@
```
