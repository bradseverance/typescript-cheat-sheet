# TypeScript Playground

This is a minimal Node.js project designed to help you explore how TypeScript works. The project consists of a single `index.ts` file and a few helpful scripts defined in `package.json`.

## 📁 Project Structure

```text
.
├── index.ts        # Your main TypeScript file
├── package.json    # Project metadata and scripts
└── tsconfig.json   # TypeScript compiler configuration (generated with `tsc --init`)
```

## 📦 Setup

1. Install dependencies:

   ```bash
   npm install
   ```

## 🚀 Scripts

Run the following commands using `npm run <script>`:

| Script     | Description                                     |
|------------|-------------------------------------------------|
| `compile`  | Compiles `index.ts` to JavaScript using `tsc`   |
| `watch`    | Recompiles on file changes (watch mode)         |
| `terminal` | Runs `index.ts` directly using `ts-node`        |

## 🧪 Try It Out

Edit `index.ts` and run:

```bash
npm run terminal
```

Make changes and recompile with:

```bash
npm run compile
```

Or use watch mode to compile on save:

```bash
npm run watch
```

## 📝 License

ISC

---

Happy coding with TypeScript!
