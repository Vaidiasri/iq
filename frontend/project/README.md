# 🚀 React + TypeScript + Vite Project

A modern web application built with React 19, TypeScript, Vite, and styled with Tailwind CSS v4 + DaisyUI v5 (Forest Theme).

## ✨ Features

- ⚡ **Vite** - Lightning-fast development server and build tool
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS v4** - Latest utility-first CSS framework
- 🌲 **DaisyUI v5 (Forest Theme)** - Beautiful component library with dark green theme
- 🔐 **Clerk Authentication** - Secure user authentication and management
- 🔄 **React Router v7** - Client-side routing
- 📡 **TanStack Query** - Powerful data fetching and state management
- 🌐 **Axios** - HTTP client for API requests
- 🎉 **React Hot Toast** - Beautiful toast notifications
- 🎯 **Lucide React** - Modern icon library

## 📦 Tech Stack

### Core

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.2.4

### Styling

- **Tailwind CSS** 4.1.18
- **DaisyUI** 5.5.14 (Forest Theme)

### Libraries

- **@clerk/clerk-react** - Authentication
- **@tanstack/react-query** - Data fetching
- **react-router** - Routing
- **axios** - HTTP requests
- **react-hot-toast** - Notifications
- **lucide-react** - Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5174/`

## 📜 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint to check code quality         |

## 🎨 DaisyUI Forest Theme

This project uses the **Forest Theme** from DaisyUI v5, which provides:

- 🌲 Dark green color palette
- 🌙 Dark mode by default
- 🎯 Consistent component styling

### Using DaisyUI Components

```tsx
// Button example
<button className="btn btn-primary">Click Me</button>

// Card example
<div className="card bg-base-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content goes here</p>
  </div>
</div>
```

## 📁 Project Structure

```
project/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── lib/         # Utility functions and configurations
│   ├── pages/       # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProblemsPage.tsx
│   │   └── AboutPage.tsx
│   ├── App.tsx      # Main app component with routing
│   ├── main.tsx     # App entry point
│   └── index.css    # Global styles and Tailwind imports
├── index.html       # HTML template
├── vite.config.ts   # Vite configuration
├── tsconfig.json    # TypeScript configuration
└── package.json     # Project dependencies
```

## 🔐 Authentication

This project uses **Clerk** for authentication. Protected routes automatically redirect unauthenticated users to the home page.

### Example Protected Route

```tsx
<Route
  path="/problems"
  element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
/>
```

## 🛠️ Configuration

### Tailwind CSS v4 + DaisyUI v5

The project uses CSS-first configuration for Tailwind v4:

**`src/index.css`**

```css
@import "tailwindcss";

@plugin "daisyui" {
  themes: forest;
}
```

**`index.html`**

```html
<html lang="en" data-theme="forest"></html>
```

## 🌐 Routing

Routes are defined in `App.tsx`:

- `/` - Home page (public)
- `/problems` - Problems page (protected, requires authentication)

## 📝 Development Notes

- **Hot Module Replacement (HMR)** is enabled for instant updates during development
- **ESLint** is configured for code quality checks
- **TypeScript** strict mode is enabled for better type safety

## 🚧 Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📄 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a private project. If you have access and want to contribute, please follow the standard Git workflow:

1. Create a feature branch
2. Make your changes
3. Submit a pull request

---

**Built with ❤️ using React, TypeScript, and Vite**
