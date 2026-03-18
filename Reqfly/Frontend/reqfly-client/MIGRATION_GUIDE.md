# Reqfly UI — Migration Guide
> Is doc mein saari info hai jo tumhe apne main project mein is UI ko copy karne ke liye chahiye.

---

## 1. NPM Dependencies (install karo)

```bash
npm install \
  @hookform/resolvers@^3.10.0 \
  @radix-ui/react-accordion@^1.2.11 \
  @radix-ui/react-alert-dialog@^1.1.14 \
  @radix-ui/react-aspect-ratio@^1.1.7 \
  @radix-ui/react-avatar@^1.1.10 \
  @radix-ui/react-checkbox@^1.3.2 \
  @radix-ui/react-collapsible@^1.1.11 \
  @radix-ui/react-context-menu@^2.2.15 \
  @radix-ui/react-dialog@^1.1.14 \
  @radix-ui/react-dropdown-menu@^2.1.15 \
  @radix-ui/react-hover-card@^1.1.14 \
  @radix-ui/react-label@^2.1.7 \
  @radix-ui/react-menubar@^1.1.15 \
  @radix-ui/react-navigation-menu@^1.2.13 \
  @radix-ui/react-popover@^1.1.14 \
  @radix-ui/react-progress@^1.1.7 \
  @radix-ui/react-radio-group@^1.3.7 \
  @radix-ui/react-scroll-area@^1.2.9 \
  @radix-ui/react-select@^2.2.5 \
  @radix-ui/react-separator@^1.1.7 \
  @radix-ui/react-slider@^1.3.5 \
  @radix-ui/react-slot@^1.2.3 \
  @radix-ui/react-switch@^1.2.5 \
  @radix-ui/react-tabs@^1.1.12 \
  @radix-ui/react-toast@^1.2.14 \
  @radix-ui/react-toggle@^1.1.9 \
  @radix-ui/react-toggle-group@^1.1.10 \
  @radix-ui/react-tooltip@^1.2.7 \
  @tanstack/react-query@^5.83.0 \
  class-variance-authority@^0.7.1 \
  clsx@^2.1.1 \
  cmdk@^1.1.1 \
  date-fns@^3.6.0 \
  embla-carousel-react@^8.6.0 \
  input-otp@^1.4.2 \
  lucide-react@^0.462.0 \
  next-themes@^0.3.0 \
  react-day-picker@^8.10.1 \
  react-hook-form@^7.61.1 \
  react-resizable-panels@^2.1.9 \
  react-router-dom@^6.30.1 \
  recharts@^2.15.4 \
  sonner@^1.7.4 \
  tailwind-merge@^2.6.0 \
  tailwindcss-animate@^1.0.7 \
  vaul@^0.9.9 \
  zod@^3.25.76
```

### Dev Dependencies
```bash
npm install -D \
  tailwindcss@^3.4.17 \
  autoprefixer@^10.4.21 \
  postcss@^8.5.6 \
  @tailwindcss/typography@^0.5.16 \
  @types/node@^22.16.5 \
  @vitejs/plugin-react-swc@^3.11.0 \
  typescript@^5.8.3
```

---

## 2. Config Files — Copy/Update karo

### `tailwind.config.ts`
Apne main project ki `tailwind.config.ts` mein ye changes merge karo:

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "surface-1": "hsl(var(--surface-1))",
        "surface-2": "hsl(var(--surface-2))",
        "editor-bg": "hsl(var(--editor-bg))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        info: "hsl(var(--info))",
        "method-post": "hsl(var(--method-post))",
        "method-put": "hsl(var(--method-put))",
        "method-patch": "hsl(var(--method-patch))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### `postcss.config.js`
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `components.json` (shadcn/ui config) — root mein rakhna
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### `vite.config.ts` — `@` alias add karo
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### `tsconfig.json` — paths add karo
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 3. CSS Variables — `src/index.css` mein paste karo

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 3.1%;
    --foreground: 0 0% 93.7%;

    --card: 0 0% 6.3%;
    --card-foreground: 0 0% 93.7%;

    --popover: 0 0% 6.3%;
    --popover-foreground: 0 0% 93.7%;

    --primary: 340 100% 59%;
    --primary-foreground: 0 0% 100%;

    --secondary: 340 100% 72%;
    --secondary-foreground: 0 0% 100%;

    --muted: 0 0% 8.6%;
    --muted-foreground: 0 0% 29%;

    --accent: 0 0% 8.6%;
    --accent-foreground: 0 0% 93.7%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --success: 142 71% 45%;
    --warning: 38 92% 50%;
    --info: 217 91% 60%;
    --method-post: 217 91% 60%;
    --method-put: 38 92% 50%;
    --method-patch: 25 95% 53%;

    --border: 0 0% 12%;
    --input: 0 0% 12%;
    --ring: 340 100% 59%;

    --radius: 0.5rem;

    --surface-1: 0 0% 6.3%;
    --surface-2: 0 0% 8.6%;
    --editor-bg: 0 0% 5.1%;

    --sidebar-background: 0 0% 6.3%;
    --sidebar-foreground: 0 0% 93.7%;
    --sidebar-primary: 340 100% 59%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 0 0% 12%;
    --sidebar-accent-foreground: 0 0% 93.7%;
    --sidebar-border: 0 0% 12%;
    --sidebar-ring: 340 100% 59%;
  }
}

@layer base {
  * { @apply border-border; }
  body {
    @apply bg-background text-foreground font-sans;
    font-family: 'Inter', sans-serif;
  }

  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: hsl(0 0% 12%); }
  ::-webkit-scrollbar-thumb { background: hsl(340 100% 72%); border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: hsl(340 100% 59%); }
}

@layer utilities {
  .glow-pink {
    box-shadow: 0 0 16px hsl(340 100% 59% / 0.35), 0 0 32px hsl(340 100% 72% / 0.15);
  }
  .gradient-pink { background: linear-gradient(135deg, #ff6eb4, #ff2d78); }
  .gradient-pink-border { border-image: linear-gradient(135deg, #ff6eb4, #ff2d78) 1; }
  .gradient-pink-text {
    background: linear-gradient(135deg, #ff6eb4, #ff2d78);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

---

## 4. Folder & File Structure — Main Project Mein Banana

```
src/
├── lib/
│   └── utils.ts                  ← copy karo (cn() helper)
│
├── hooks/
│   ├── use-mobile.tsx            ← copy karo
│   └── use-toast.ts              ← copy karo
│
├── components/
│   ├── ui/                       ← poora folder copy karo (all shadcn components)
│   │   ├── accordion.tsx
│   │   ├── alert.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input.tsx
│   │   ├── input-otp.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle.tsx
│   │   ├── toggle-group.tsx
│   │   └── tooltip.tsx
│   │
│   ├── ReqflySidebar.tsx         ← main sidebar component
│   ├── RequestPanel.tsx          ← request panel component
│   ├── ResponsePanel.tsx         ← response panel component
│   └── NavLink.tsx               ← nav link component
│
└── pages/
    ├── Index.tsx                 ← main page
    └── NotFound.tsx              ← 404 page
```

---

## 5. `src/lib/utils.ts` Content

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 6. `App.tsx` Mein Providers Setup

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* apne routes yahan add karo */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

---

## 7. Design Tokens — Custom Colors Reference

| Token | Value | Use |
|---|---|---|
| `--primary` | `340 100% 59%` | Pink/Rose — brand color |
| `--secondary` | `340 100% 72%` | Lighter pink |
| `--background` | `0 0% 3.1%` | Near-black background |
| `--surface-1` | `0 0% 6.3%` | Card/panel bg |
| `--surface-2` | `0 0% 8.6%` | Slightly lighter panel |
| `--editor-bg` | `0 0% 5.1%` | Code editor background |
| `--success` | `142 71% 45%` | Green |
| `--warning` | `38 92% 50%` | Amber |
| `--info` | `217 91% 60%` | Blue |
| `--method-post` | `217 91% 60%` | Blue (POST badge) |
| `--method-put` | `38 92% 50%` | Amber (PUT badge) |
| `--method-patch` | `25 95% 53%` | Orange (PATCH badge) |

### Custom Utility Classes
- `.glow-pink` — pink glow box-shadow effect
- `.gradient-pink` — pink gradient background
- `.gradient-pink-border` — pink gradient border
- `.gradient-pink-text` — pink gradient text

---

## 8. Step-by-Step Migration Order

1. **Install all dependencies** (Section 1)
2. **Copy config files**: `tailwind.config.ts`, `postcss.config.js`, `components.json`
3. **Update `vite.config.ts`** with `@` alias
4. **Update `tsconfig.json`** with paths
5. **Replace `src/index.css`** with CSS variables (Section 3)
6. **Create `src/lib/utils.ts`** (Section 5)
7. **Copy `src/hooks/`** folder
8. **Copy `src/components/ui/`** folder (all 45 shadcn components)
9. **Copy `src/components/`** custom files: `ReqflySidebar.tsx`, `RequestPanel.tsx`, `ResponsePanel.tsx`, `NavLink.tsx`
10. **Copy `src/pages/`**: `Index.tsx`, `NotFound.tsx`
11. **Update `App.tsx`** with providers (Section 6)
