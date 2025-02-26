# Typescript + Vite + React + Express + Turborepo Monorepo

_2025 Discover Program Project Monorepo - Typescript_

This repository houses a monorepo setup for managing both frontend and backend applications, as well as shared configurations for TypeScript and ESLint. It is structured using [Turborepo](https://turbo.build/repo) for efficient builds and dependency management.

## Tech Leads

- [Amy Liao](https://www.linkedin.com/in/amyzliao/)
- [Ethan Pineda](https://www.linkedin.com/in/ethanpineda/)
- [Aanand Patel](https://www.linkedin.com/in/aanand-patel1/)

**Note**: For all issues, please direction them to Ethan Pineda (contact above)

## Repository Structure

```
.
├── apps
│   ├── backend           # Node.js + Express backend (with Supabase integration)
│   ├── frontend          # React frontend using Vite + TypeScript
│   ├── README.md         # Documentation for each app
│
├── packages
│   ├── eslint-config     # Shared ESLint configuration
│   ├── typescript-config # Shared TypeScript configuration
│
├── .turbo                # Caching & performance optimizations
├── .vscode               # Project-specific VSCode settings
├── package.json          # Global package management
├── turbo.json            # Turborepo configuration
└── README.md             # This document
```

## Get Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Run the Applications

Start both frontend and backend applications in development mode:

```sh
npm run dev
```

Alternatively, you can start them separately:

- **Backend**: `npm run dev --workspace=apps/backend`
- **Frontend**: `npm run dev --workspace=apps/frontend`

### 3. Formatting and Linting

We enforce strict formatting and linting rules across all applications using Prettier and ESLint.

To manually format the code:

```sh
npm run format
```

To run the linter:

```sh
npm run lint
```

## Additional Scripts

| Script           | Description                                   |
| ---------------- | --------------------------------------------- |
| `npm run dev`    | Starts both frontend and backend applications |
| `npm run build`  | Creates a production-ready build              |
| `npm run lint`   | Runs ESLint across all workspaces             |
| `npm run format` | Runs Prettier to format code                  |
| `npm test`       | Runs test suites (if applicable)              |

## Development Guidelines

### Code Formatting Rules

- Uses shared ESLint and Prettier configurations (`/packages/eslint-config`).
- Single quotes only (`'`).
- Enforced import order:
  - `"react"`
  - Third-party modules
  - Absolute imports (`src/...`)
  - Relative imports (`./...`)

### Monorepo Best Practices

- Shared configurations (ESLint, TypeScript) live in `packages/`
- Use absolute imports where possible.
- Keep application logic modular for reusability.

## Contributing

If you are contributing, ensure you follow the setup guide above and adhere to the repository’s coding standards. All pull requests must pass linting and formatting checks.

## Credits

- Built using **Turborepo** for monorepo management.
- **Frontend**: React, TypeScript, Vite.
- **Backend**: Node.js, Express, Supabase.
- **Styling**: TailwindCSS (if applicable).

---

Each app (`apps/frontend` and `apps/backend`) contains its own `README.md` with further details on installation, usage, and specific configurations.

- Ethan Pineda, DISC Technical Lead 2024-2025
