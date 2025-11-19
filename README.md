# Vault Test MVP

An expressive, component-forward Next.js 16 + React 19 + Tailwind CSS project showcasing a modular UI system built on Radix primitives, form validation with React Hook Form + Zod, theming, and a curated collection of reusable interface patterns.

> This repository serves as a foundation for rapidly prototyping product experiences with a rich accessible component toolkit.

## ✨ Highlights
- **Modern Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS 4.
- **Design System Approach:** 50+ composable UI primitives under `components/ui` (Radix-based + custom).
- **Accessibility & Semantics:** Leverages Radix UI for predictable focus, keyboard nav, and a11y structures.
- **Form Ergonomics:** React Hook Form + Zod for declarative, robust validation flows.
- **Dynamic Theming:** Theme provider with dark/light + future extensibility via `next-themes`.
- **Animation & Polish:** `tailwindcss-animate`, subtle transitions, skeleton loaders, spinners, toasts.
- **Scalable Layout:** Clean separation of pages, sections, and low-level UI primitives.

## 🧱 Core Features
| Area | Description |
|------|-------------|
| Hero / Marketing Sections | Reusable marketing slices (`hero-section`, `cta-section`, `services-preview`, `expertise-section`). |
| UI Library | Buttons, dialogs, drawers, forms, charts, navigation menus, pagination, sheets, tooltips, etc. |
| Feedback & State | Toasts (`sonner` + Radix), skeleton loaders, progress indicators, spinners. |
| Layout | Centralized `layout.tsx` with global styling, theme provider, header + footer. |
| Interaction | Command palette (`command.tsx`), dropdowns, collapsibles, navigation menu, sidebar. |
| Data & Visualization | Chart abstraction (`chart.tsx`) using Recharts for lightweight insights. |

## 🗂 Directory Overview
```
app/                # Next.js App Router pages & route segments
  layout.tsx       # Global layout wrapper
  page.tsx         # Landing/root page
  contact/         # Contact page route segment
  portfolio/       # Portfolio page route segment
  profile/         # Profile page route segment
  services/        # Services page route segment
components/
  hero-section.tsx
  cta-section.tsx
  expertise-section.tsx
  services-preview.tsx
  header.tsx
  footer.tsx
  theme-provider.tsx  # Theme context provider wrapper
  ui/                 # Design system primitives & composites
hooks/               # Reusable React hooks (toast, mobile breakpoint)
lib/                 # Utility helpers (e.g., `utils.ts`)
public/              # Static assets
styles/              # Global CSS (Tailwind root + overrides)
```

### UI Component Spectrum (`components/ui`)
You’ll find primitives for nearly every common surface:
- Dialogs, drawers, sheets, popovers, tooltips
- Accordions, collapsibles, navigation & menubars
- Forms, inputs, OTP, field grouping & validation scaffolds
- Tables, pagination, charts, carousels, scroll areas, resizable panels
- Skeleton states, spinners, progress indicators
- Theming & feedback (toast, toaster, alert, badge)

Each component strives for:
1. **Composability** – Headless patterns unlock layout freedom.
2. **Consistency** – Centralized styling via Tailwind utilities.
3. **Accessibility** – Aria & keyboard support via Radix foundations.

## 🚀 Getting Started
### Prerequisites
- Node.js 18+ (recommend latest LTS)
- pnpm (preferred) — install if missing:
```bash
npm i -g pnpm
```

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```
Open http://localhost:3000

### Build & Production
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## ⚙️ Configuration & Environment
Create an `.env.local` for runtime secrets. Common patterns:
```
NEXT_PUBLIC_ANALYTICS_ID=...
API_BASE_URL=...
FEATURE_FLAG_EXAMPLE=true
```
(Adjust as features evolve.)

## 🧪 Testing Strategy (Future Roadmap)
While this MVP does not yet include automated tests, recommended next steps:
- Unit tests: React Testing Library + Vitest / Jest
- Visual regression: Storybook + Chromatic
- Integration: Playwright for flows (form submission, navigation)

## 🧩 Architectural Philosophy
- **Layered Composition:** Pages stitch together section components; sections consume primitives.
- **Headless First:** Prefer logic + structure separated from styling for portability.
- **Predictable Theming:** Dark/light toggle via context; aim for extension into semantic tokens.
- **Progressive Enhancement:** Features gracefully degrade if JS or APIs are limited.

## 📈 Performance Considerations
- Tree-shaking friendly imports (Radix UI, Recharts).
- Code splitting via App Router route segments.
- UI primitives minimize re-renders with proper prop drilling avoidance.

## 🔒 Security Notes
- Client-only UI components; add server/data layers with validation (Zod) when introducing persistence.
- Sanitize any user-supplied content when feature scope expands (e.g., rich text, uploads).

## 🛣 Roadmap Ideas
- Storybook showcase for all `ui/` primitives
- Theming tokens & CSS variables layer
- Data fetching layer (server actions / React Query)
- Accessibility audit (Axe CI integration)
- Error boundaries & suspense patterns

## 🤝 Contributing
1. Fork the repo & create a feature branch.
2. Maintain component style parity & naming clarity.
3. Include usage examples for new primitives.
4. Run `pnpm lint` before submitting PRs.

## 📄 License
Currently unlicensed (private MVP). Consider adopting **MIT** for open collaboration. Add a `LICENSE` file to formalize.

## 🧭 Inspiration & Credits
- [Radix UI](https://www.radix-ui.com/) for robust accessible foundations.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling velocity.
- [Recharts](https://recharts.org/) for simple, composable charting.

## 💬 Support & Contact
For questions or collaboration ideas, open an issue or reach out via the contact page once wired to a backend.

---
> Crafted with care to accelerate product iteration. Refine, extend, and ship confidently.
