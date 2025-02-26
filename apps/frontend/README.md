# Frontend Application

_2025 Discover Program - Frontend App_

This repository houses the **React + TypeScript** frontend for the Discover Program. It is built with **Vite** for fast development and **Turborepo** for monorepo efficiency.

## Tech Leads

- [Amy Liao](https://www.linkedin.com/in/amyzliao/)
- [Ethan Pineda](https://www.linkedin.com/in/ethanpineda/)
- [Aanand Patel](https://www.linkedin.com/in/aanand-patel1/)

## Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Styled Components & TailwindCSS (if applicable)
- **State Management**: React Context API
- **Routing**: React Router v6
- **Linting & Formatting**: ESLint, Prettier
- **Authentication**: Supabase
- **Monorepo Management**: Turborepo

---

## 📂 Project Structure

```
frontend/
├── public/              # Static assets (index.html, favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── form/        # Input fields, buttons, and form utilities
│   │   ├── navigation/  # NavBar, logout modal, etc.
│   │   ├── users/       # User list components
│   │   └── protected-routes.tsx
│   ├── contexts/        # React Context for user authentication
│   ├── hooks/           # Custom hooks (e.g., useUser.tsx)
│   ├── layouts/         # Reusable layout components (e.g., navbar layout)
│   ├── pages/           # Main page components (Home, Login, Signup, etc.)
│   ├── styles/          # Global styles & theme configuration
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # React entry point
│   ├── vite-env.d.ts    # TypeScript environment variables
│   └── index.css        # Global styles
│
├── .eslintrc.js         # ESLint configuration
├── .prettierrc.json     # Prettier configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # This document
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Ensure you have **Node.js 18+** installed.

```sh
npm install
```

### 2️⃣ Run the Development Server

Start the frontend application locally:

```sh
npm run dev
```

The app will be available at **`http://localhost:5173/`** by default.

### 3️⃣ Build for Production

To generate a production-ready build:

```sh
npm run build
```

### 4️⃣ Linting & Formatting

Ensure code quality with:

```sh
npm run lint       # Run ESLint checks
npm run format     # Auto-format code with Prettier
```

---

## 🌐 Environment Variables

This app uses **Vite environment variables**. Create a `.env` file in the root directory and add the following:

```
VITE_BACKEND_URL=https://your-backend-url.com
```

---

## 🔒 Authentication & Authorization

- Users are authenticated via Supabase.
- Authentication state is managed via `UserContext`.
- Protected routes are implemented in `components/protected-routes.tsx`.

---

## 🛠️ Common Issues & Fixes

| Issue                        | Solution                                              |
| ---------------------------- | ----------------------------------------------------- |
| "Module not found" error     | Run `npm install` to reinstall dependencies.          |
| Vite not loading `.env` vars | Restart the server after modifying `.env`.            |
| TypeScript errors            | Check `tsconfig.json` and ensure types are installed. |

---

## 📜 Code Formatting Rules

- **Single quotes (`'`)** for strings.
- **Semicolons (`;`)** required at the end of statements.
- **Max line width of 80 characters**.
- **Absolute imports** should be preferred over relative imports.
- Import order:
  1. `"react"`
  2. Third-party libraries
  3. Absolute imports (`@/components/...`)
  4. Relative imports (`./...`)

---

## 📢 Contributing

If you're contributing, ensure your code follows the formatting rules.
Run the following before submitting a pull request:

```sh
npm run lint && npm run format
```

All PRs should pass linting checks before being merged.

---

## 🎉 Credits

- Built with **React + Vite**
- Managed with **Turborepo**
- Uses **ESLint + Prettier** for consistent code quality
- Authentication via **Supabase**

This frontend serves as the UI for the Discover Program. For backend details, check **`apps/backend/README.md`**.

---
