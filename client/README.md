# PortfolioSync Frontend

> **Synthwave Terminal Edition** — A retro-modern portfolio synchronization dashboard

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

*Keep your portfolio in perfect sync*

</div>

---

## 🎨 Design System

PortfolioSync features a unique **Synthwave Terminal** aesthetic that combines:

- **80s/90s retro computing** — CRT monitors, pixel art, terminal vibes
- **Synthwave/Vaporwave** — Neon colors, grid patterns, chunky borders
- **Modern UX** — Clean layouts, responsive design, smooth interactions

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🔴 Hot Pink | `#f72585` | Primary accent, CTAs |
| 🔵 Electric Cyan | `#4cc9f0` | Secondary accent, links |
| 🟢 Terminal Green | `#39ff14` | Success states |
| 🟡 Amber Glow | `#f9a825` | Warnings |
| ⬛ Void | `#0a0a0f` | Deep background |
| ⬛ Midnight | `#1a1a2e` | Card backgrounds |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfoliosyncfrontend/client

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
client/
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images, logo, demo screenshots
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Badge.jsx   # Status badges
│   │   │   ├── Button.jsx  # Retro arcade buttons
│   │   │   ├── Card.jsx    # Chunky bordered cards
│   │   │   ├── Checkbox.jsx # Retro checkboxes
│   │   │   ├── Divider.jsx # Section dividers
│   │   │   ├── Input.jsx   # Terminal-style inputs
│   │   │   ├── Select.jsx  # Retro dropdowns
│   │   │   ├── Skeleton.jsx # Loading states
│   │   │   └── index.js    # Component exports
│   │   ├── ActivityLog.jsx
│   │   ├── Layout.jsx      # Synthwave sidebar layout
│   │   ├── ProtectedRoute.jsx # Auth route guard
│   │   ├── RepoSelection.jsx
│   │   ├── ScanProgress.jsx
│   │   ├── ScanResults.jsx
│   │   ├── SocialButton.jsx
│   │   └── Toast.jsx       # Notification system
│   ├── pages/
│   │   ├── ActivityLog.jsx  # Full activity feed
│   │   ├── AuthCallback.jsx # GitHub OAuth callback
│   │   ├── AuthError.jsx    # OAuth error page
│   │   ├── BrandPreview.jsx # Design system showcase
│   │   ├── Dashboard.jsx    # Main dashboard
│   │   ├── Documentation.jsx # Product documentation
│   │   ├── ForgotPassword.jsx
│   │   ├── Landing.jsx      # Public landing page
│   │   ├── LearnMore.jsx    # Product explainer
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ScanDetail.jsx   # Scan details view
│   │   └── Settings.jsx     # App settings
│   ├── config/
│   │   └── env.js          # Centralized env configuration
│   ├── context/
│   │   └── AuthContext.jsx # Auth state provider
│   ├── services/
│   │   └── api.js          # Axios API configuration
│   ├── App.jsx             # Root component with routing
│   ├── index.css           # Design tokens & global styles
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── setup-env.sh            # Environment setup helper
├── vite.config.js
└── eslint.config.js
```

---

## 🧩 UI Components

All components follow the Synthwave Terminal design system with chunky borders, neon glows, and retro aesthetics.

### Button

```jsx
import { Button } from './components/ui';

// Primary (Hot Pink)
<Button variant="primary">LAUNCH</Button>

// Secondary (Cyan outline)
<Button variant="secondary">CONNECT</Button>

// With icon
<Button variant="primary" icon={<Icon />}>ACTION</Button>

// Loading state
<Button loading>PROCESSING...</Button>

// Variants: primary, secondary, ghost, danger, success, terminal
```

### Card

```jsx
import { Card } from './components/ui';

// Standard card
<Card>Content here</Card>

// Interactive with hover effects
<Card interactive>Clickable card</Card>

// Accent with neon glow
<Card variant="accent" glow>Featured content</Card>

// Terminal style
<Card variant="terminal">Terminal panel</Card>

// With subcomponents
<Card variant="accent" glow>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>Body content</Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Input

```jsx
import { Input } from './components/ui';

// Basic input
<Input label="EMAIL" placeholder="user@system.net" />

// With error
<Input label="PASSWORD" type="password" error="Invalid credentials" />

// Terminal variant
<Input variant="terminal" placeholder="Enter command..." />

// With icon
<Input icon={<SearchIcon />} placeholder="Search..." />
```

### Badge

```jsx
import { Badge } from './components/ui';

// Status badges
<Badge variant="success">ONLINE</Badge>
<Badge variant="error">FAILED</Badge>
<Badge variant="warning">PENDING</Badge>
<Badge variant="info">SYNCING</Badge>

// With pulsing dot
<Badge variant="success" dot pulse>ACTIVE</Badge>
```

### Select

```jsx
import { Select } from './components/ui';

<Select
  label="SYSTEM"
  options={[
    { value: 'auto', label: 'Auto Sync' },
    { value: 'manual', label: 'Manual' },
  ]}
/>
```

---

## 🎭 Design Tokens

The design system uses CSS custom properties defined in `src/index.css`:

```css
/* Colors */
--color-hot-pink: #f72585;
--color-electric-cyan: #4cc9f0;
--color-terminal-green: #39ff14;
--color-void: #0a0a0f;
--color-midnight: #1a1a2e;

/* Shadows (chunky, no blur) */
--shadow-retro-md: 4px 4px 0 rgba(0, 0, 0, 0.8);
--shadow-neon-pink: 0 0 10px #f72585, 0 0 20px rgba(247, 37, 133, 0.4);

/* Animations */
--duration-fast: 100ms;
--duration-normal: 200ms;
```

### Utility Classes

```css
.scanlines        /* CRT scanline overlay */
.glitch-text      /* Glitch text animation */
.neon-pink        /* Pink neon glow */
.neon-cyan        /* Cyan neon glow */
.text-gradient-synthwave  /* Pink-cyan gradient text */
.grid-pattern     /* Background grid lines */
```

---

## 📖 Pages

| Route | Page | Access | Description |
|-------|------|--------|-------------|
| `/` | Landing | Public | Marketing landing page with waitlist signup |
| `/learn-more` | Learn More | Public | Product explainer |
| `/docs` | Documentation | Public | Product documentation |
| `/login` | Login | Public | Email + GitHub OAuth sign-in |
| `/auth/callback` | Auth Callback | Public | GitHub OAuth callback handler |
| `/auth/error` | Auth Error | Public | OAuth error page |
| `/dashboard` | Dashboard | Protected | Main dashboard with scan controls and activity log |
| `/settings` | Settings | Protected | Portfolio repo, sync preferences |
| `/scan/:id` | Scan Detail | Protected | Detailed view of a specific scan |
| `/activity` | Activity Log | Protected | Full activity feed |

---

## 🔧 Configuration

### Environment Variables

Run the setup helper (or create `.env.local` manually):

```bash
npm run setup
```

```env
VITE_API_URL=            # Backend API base URL (defaults to /api via the dev proxy)
VITE_GITHUB_CLIENT_ID=   # GitHub OAuth App Client ID
VITE_AUTH_CALLBACK_URL=  # OAuth callback (default http://localhost:5173/auth/callback)
```

All environment access is centralized in `src/config/env.js`.

### API Configuration

The API client lives in `src/services/api.js` — an Axios instance that attaches the auth token to every request and handles 401 redirects globally. In development, requests to `/api` are proxied to the backend via `vite.config.js`.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.2.0 | UI framework |
| [Vite](https://vite.dev/) | 7.2.4 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.18 | Utility-first CSS |
| [React Router](https://reactrouter.com/) | 7.13.0 | Client-side routing |
| [Axios](https://axios-http.com/) | 1.13.4 | HTTP client |

---

## 📚 Documentation

- The design system (colors, tokens, utility classes) is documented in this README and showcased in `src/pages/BrandPreview.jsx`
- Product documentation lives in-app at `/docs` (`src/pages/Documentation.jsx`)

---

## 🎯 Roadmap

### Shipped

- [x] Landing page with waitlist signup
- [x] Authentication flow (Login + GitHub OAuth)
- [x] Repository scanning, repo selection & automated PR creation
- [x] Activity log & PR statistics

### Upcoming Features

- [ ] Register & Forgot Password flows (pages built, not yet routed)
- [ ] Real-time sync notifications
- [ ] Dark/light theme toggle (synthwave vs cyberpunk)

---

## 🤝 Contributing

1. Follow the design system documented in this README
2. Use existing UI components from `components/ui/`
3. Keep the retro aesthetic — chunky borders, neon glows, uppercase labels
4. Run `npm run lint` before committing

---

## 📄 License

This project is private and proprietary.

---

<div align="center">

**Keep it retro!** 🌆

*Built with React + Vite + Tailwind CSS*

</div>
