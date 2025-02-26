Here’s an improved and structured `README.md` for the backend application:

---

### `README.md` for Backend API

```md
# Backend API

_2025 Discover Program - Backend API_

This repository contains the **Express.js + TypeScript** backend for the Discover Program. It serves as the authentication and data management layer, integrating with **Supabase** for user authentication.

## Tech Leads

- [Amy Liao](https://www.linkedin.com/in/amyzliao/)
- [Ethan Pineda](https://www.linkedin.com/in/ethanpineda/)
- [Aanand Patel](https://www.linkedin.com/in/aanand-patel1/)

---

## ⚙️ Tech Stack

- **Framework**: Node.js + Express.js
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Environment Variables**: dotenv
- **Middleware**: Cookie Parser, CORS
- **Linting & Formatting**: ESLint, Prettier
- **Monorepo Management**: Turborepo

---

## 📂 Project Structure

```
backend/
├── config/               # Configuration files (e.g., Supabase client)
│   ├── supabase.ts
│
├── controllers/          # Route handler functions (business logic)
│   ├── authController.ts
│
├── middleware/           # Middleware functions (authentication, logging)
│   ├── authMiddleware.ts
│
├── routes/               # API route definitions
│   ├── authRoutes.ts
│
├── types/                # TypeScript type definitions
│   ├── types.ts
│
├── .turbo/               # Turbo caching and logs
│   ├── turbo-lint.log
│
├── server.ts             # Express server setup
├── eslint.config.js      # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
├── README.md             # This document
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Ensure you have **Node.js 18+** installed.

```sh
npm install
```

### 2️⃣ Run the Development Server

Start the backend server in development mode:

```sh
npm run dev
```

The API will be available at **`http://localhost:3000/`** by default.

### 3️⃣ Build & Run for Production

To generate a production-ready build:

```sh
npm run build
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file in the root directory and add the following:

```
PORT=3000
NODE_ENV=development

# Supabase Config
SUPABASE_URL=https://your-supabase-url.com
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Frontend URL
FRONTEND_URL=http://localhost:5173
FRONTEND_URL_DEV=http://localhost:5173
```

- Ensure **Supabase keys** are obtained from your **Supabase dashboard**.
- **Never expose the `SUPABASE_SERVICE_ROLE_KEY` on the frontend.**

---

## 🔒 Authentication & Middleware

- Authentication is handled via **Supabase Auth**.
- User sessions are managed using **cookies and JWTs**.
- Protected routes require a valid session token.
- **`authMiddleware.ts`** verifies the user before allowing access to restricted routes.

---

## 🛠️ Common Issues & Fixes

| Issue                          | Solution |
|--------------------------------|----------|
| "Module not found" error       | Run `npm install` to reinstall dependencies. |
| `.env` variables not loading   | Restart the server after modifying `.env`. |
| Supabase authentication fails  | Ensure `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct. |
| CORS issues                    | Check `FRONTEND_URL` in `.env` and update `corsOptions`. |

---

## 📜 Code Formatting Rules

- **Single quotes (`'`)** for strings.
- **Semicolons (`;`)** required at the end of statements.
- **Max line width of 80 characters**.
- **Import order**:
  1. `"express"` and built-in modules
  2. Third-party libraries
  3. Internal imports (`../config`, `../controllers`, etc.)

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

- Built with **Node.js + Express**
- Uses **Supabase** for authentication and database management
- Managed with **Turborepo**
- Uses **ESLint + Prettier** for consistent code quality

This backend serves as the API layer for the Discover Program. For frontend details, check **`apps/frontend/README.md`**.

---

Let me know if you'd like any refinements! 🚀
