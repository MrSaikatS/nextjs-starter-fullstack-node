<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Agent behavior

- **Ask questions.** When the request is ambiguous, when there are real implementation choices with tradeoffs, or before any non-obvious / destructive action, use the `question` tool to confirm. Prefer one short batched question over back-and-forth guessing.
- **Remember new learning.** When you discover something non-obvious about this repo — a gotcha, a convention, a fix, a command that wasn't documented — add it back to this file (or a clearly-scoped section) so future sessions benefit. Keep entries concise and high-signal; delete stale ones.
- **Use available skills and MCPs.** Before writing code for a task that matches a listed skill (e.g. `prisma-*`, `next-*`, `better-auth-*`, `zod`, etc.), load it with the `skill` tool. And MCPs that are directly relevant to this stack e.g. **`shadcn`** (local; component registry / audit) and **`better-auth`** (remote; auth setup). Use them when the task fits instead of guessing from training data.

## Verification

- **Primary check**: `bun lint` — runs `next typegen && tsc --noEmit && eslint` (type-check + lint gate).
- **Secondary / build gate**: `bun run build`. Catches any type/lint issues the lint step might miss (different `tsc` config, production bundling).
- **Full prod check**: `bun prod` — `prisma generate && next build && next start`. Use before schema or env changes.

## TypeScript 6.x (current, 7.x deferred)

- Currently on `^6.0.3` (migrated from 5.9.3). TS 7.0 ships the Go-native compiler but **typescript-eslint does not support it** (API not stable until 7.1). Upstream: typescript-eslint#12518.
- TS 7.1 expected ~Oct 2026 with stable programmatic API. Revisit then.
- Migration from 5.x was clean: `strict: true`, `module: "ESNext"`, `moduleResolution: "bundler"` were already set; no `baseUrl` or legacy options.

## ESLint v10 migration — blocked upstream

- Do NOT bump eslint to ^10 until `eslint-plugin-react` ships a v10-compatible release.
- Latest eslint@9: 9.39.5 (use `^9.39.5`); latest v10: 10.7.0.
- Runtime crash: `eslint-plugin-react@7.37.5` calls removed `context.getFilename()`.
- Track: [eslint-plugin-react#3977](https://github.com/jsx-eslint/eslint-plugin-react/issues/3977) — fix PR [#3979](https://github.com/jsx-eslint/eslint-plugin-react/pull/3979) open/unmerged.
- Also blocked: `eslint-plugin-import@2.32.0` and `eslint-plugin-jsx-a11y@6.10.2` (peer max `^9`).
- `eslint-config-next` cannot declare v10 support until those plugins do.
- `eslint-plugin-react-hooks@7.1.1` and `typescript-eslint` already support v10.
- ESLint 9.x EOL: 2026-08-06. Re-assess when eslint-plugin-react ships a fix.

## Git commits

Use PowerShell here-strings:

```powershell
git commit -m @"
<commit message here>
"@
```

## Form Patterns

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
